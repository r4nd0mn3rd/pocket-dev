import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import chalk from 'chalk';
import { loadState, saveState, statePath } from '../utils/state.js';
import { transition, TransitionAction, availableActions } from '@pocket-dev/shared';
import { ProjectState, Task, IntegrationType } from '@pocket-dev/shared';
import { requiresHumanInteraction } from '../utils/agents.js';

const AGENT_COMMANDS: Record<IntegrationType, string> = {
  claude: 'claude',
  opencode: 'opencode',
  vibe: 'vibe',
  none: ''
};

function buildAgentPrompt(task: Task, action: TransitionAction, state: ProjectState, root: string): string {
  const phase = task.phase;
  const phaseConfig = state.framework_config.phases[phase];
  const agentRole = state.framework_config.agent_roles[String(phase)];
  const integration = state.integration ?? 'none';
  
  // Build context from task
  const contextParts = [
    `Project: ${state.project_name}`,
    `Phase: ${phaseConfig?.name || `Phase ${phase}`} (ID: ${phase})`,
    `Task ID: ${task.id}`,
    `Task: ${task.name}`,
    task.description ? `Description: ${task.description}` : '',
    `Priority: ${task.priority}`,
    `Current Status: ${task.status}`,
    `Action requested: ${action}`,
    ''
  ].filter(Boolean);
  
  // Add open items and next steps
  if (task.openItems?.length) contextParts.push('Open Items:', ...task.openItems.map(o => `- ${o}`));
  if (task.nextSteps?.length) contextParts.push('Next Steps:', ...task.nextSteps.map(n => `- ${n}`));
  
  // Phase-specific methodology
  const phaseDocs = join(root, '.pocket-dev', '02-methodology', 'phases', String(phase).padStart(2, '0'), 'README.md');
  const templatesDir = join(root, '.pocket-dev', '04-templates');
  const checklistsDir = join(root, '.pocket-dev', '05-checklists');
  
  // Build instructions based on action
  const instructions = buildActionInstructions(action, task, phase, agentRole, integration, templatesDir, checklistsDir);
  
  return contextParts.join('\n') + '\n\n' + instructions;
}

function buildActionInstructions(action: TransitionAction, task: Task, phase: number, agentRole: string | undefined, integration: string, templatesDir: string, checklistsDir: string): string {
  const role = agentRole || 'Agent';
  const phaseName = task.phase === 0 ? 'Ideation' : task.phase === 1 ? 'Discovery' : task.phase === 2 ? 'Specification' : task.phase === 3 ? 'Design' : task.phase === 4 ? 'Implementation' : 'Verification';
  
  const baseInstructions = [
    `You are the **${role}** for Phase ${phase} (${phaseName}).`,
    `You have been triggered by the action: **${action}** on task: **${task.name}**.`,
    '',
    '## Your Objective'
  ];
  
  switch (action) {
    case 'start':
      baseInstructions.push(`Begin work on this task. Follow the Pocket Dev methodology for ${phaseName}.`);
      break;
    case 'start-dev':
      baseInstructions.push(`Begin implementation work on this task. This is a development task in Phase ${phase} (${phaseName}).`);
      break;
    case 'continue':
      baseInstructions.push(`Continue working on this task where you left off.`);
      break;
    case 'complete':
      baseInstructions.push(`Complete this task. Ensure all acceptance criteria are met and documentation is updated.`);
      break;
    case 'block':
      baseInstructions.push(`Identify what is blocking this task and document the blocking reason.`);
      break;
    case 'unblock':
      baseInstructions.push(`Resolve the blocking issue and continue with the task.`);
      break;
    case 'reopen':
      baseInstructions.push(`Reopen this task for further work. Review what was previously done.`);
      break;
    case 'cancel':
      baseInstructions.push(`Cancel this task. Document why it was cancelled.`);
      break;
  }
  
  const methodologyInstructions = [
    '',
    '## Methodology Guidelines',
    `Follow all procedures from .pocket-dev/02-methodology/phases/${String(phase).padStart(2, '0')}/README.md`,
    `Use templates from ${templatesDir}`,
    `Validate against checklists from ${checklistsDir}`,
    ''
  ];
  
  const completionInstructions = [
    '## Completion Requirements',
    'When your work is complete:',
    `1. Review the phase checklist for Phase ${phase}`,
    '2. Ensure all acceptance criteria are met',
    '3. Update all relevant documentation',
    `4. Update .pocket-dev/state.json to reflect the new task status`,
    '5. If this task is now complete, move it to the "completed" status in state.json',
    `6. Validate your work with: pocket-dev validate`
  ];
  
  return [...baseInstructions, ...methodologyInstructions, ...completionInstructions].join('\n');
}

const MIME: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

export async function runBoard(root: string, opts: { port?: string; open?: boolean }): Promise<void> {
  const port = parseInt(opts.port ?? '4173', 10);
  const __dirname = new URL('.', import.meta.url).pathname;
  const candidates = [
    join(__dirname, '..', '..', '..', 'board', 'dist'),
    join(process.cwd(), 'packages', 'board', 'dist'),
    join(root, 'node_modules', 'pocket-dev', 'packages', 'board', 'dist'),
    join(root, '.pocket-dev', 'board')
  ];
  const distDir = candidates.find(d => existsSync(join(d, 'index.html')));
  if (!distDir) {
    console.log(chalk.yellow('Board not built. Run `npm run build:board` first (from repo root).'));
    return;
  }
  const server = createServer((req, res) => {
    const url = (req.url ?? '/').split('?')[0];
    
    // Handle POST /api/transition
    if (req.method === 'POST' && url === '/api/transition') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const { id, action }: { id: string; action: TransitionAction } = JSON.parse(body);
          const state = loadState(root);
          if (!state) { res.statusCode = 400; return res.end(JSON.stringify({ error: 'No state' })); }
          const taskIndex = state.tasks.findIndex(t => t.id === id);
          if (taskIndex === -1) { res.statusCode = 404; return res.end(JSON.stringify({ error: 'Task not found' })); }
          const task = state.tasks[taskIndex];
          const updatedTask = transition({ ...task } as Task, action) as Task;
          state.tasks[taskIndex] = updatedTask;
          saveState(root, state);
          
          // Check if human interaction is required for this phase
          const needsHumanInteraction = requiresHumanInteraction(root, task.phase);
          const integration = state.integration ?? 'none';
          
          // Always build the prompt
          const agentRole = state.framework_config.agent_roles[String(task.phase)];
          const prompt = buildAgentPrompt(task, action, state, root);
          const promptFile = join(root, '.pocket-dev', `prompt-${task.id}-${Date.now()}.md`);
          writeFileSync(promptFile, prompt, 'utf8');
          
          if (needsHumanInteraction) {
            console.log(chalk.yellow(`[Agent] Phase ${task.phase} (${updatedTask.status}) requires human interaction. Agent not auto-started.`));
            console.log(chalk.yellow(`[Agent] Please review the prompt and run agent manually.`));
            console.log(chalk.cyan(`[Agent] Prompt saved: ${promptFile}`));
            
            // For OpenCode specifically, provide guidance
            if (integration === 'opencode') {
              console.log(chalk.cyan(`[Agent] In OpenCode, run: /pocket-dev`));
            }
          } else {
            // Trigger agent for next step if integration is configured
            if (integration && integration !== 'none') {
              console.log(chalk.cyan(`[Agent] Prompt saved: ${promptFile}`));
              
              // Build and execute agent command based on integration
              let agentBin = '';
              let agentArgs: string[] = [];
              let launchMessage = '';
              
              switch (integration) {
                case 'vibe':
                  agentBin = 'vibe';
                  agentArgs = ['-p', prompt];
                  launchMessage = `Starting Vibe with injected prompt`;
                  break;
                case 'claude':
                  agentBin = 'claude';
                  // Truncate and escape for CLI safety
                  const safePrompt = prompt.replace(/\n/g, ' ').slice(0, 7000);
                  agentArgs = ['--prompt', safePrompt];
                  launchMessage = `Starting Claude with injected prompt`;
                  break;
                case 'opencode':
                  agentBin = 'opencode';
                  // Use OpenCode's --prompt flag to inject the prompt directly
                  // Also limit length to avoid CLI issues
                  const opencodePrompt = prompt.slice(0, 15000);
                  agentArgs = ['--prompt', opencodePrompt, root];
                  launchMessage = `Starting OpenCode with injected prompt in ${root}`;
                  // Also save prompt file for reference
                  const promptDir = join(root, '.pocket-dev', 'opencode-prompts');
                  if (!existsSync(promptDir)) {
                    mkdirSync(promptDir, { recursive: true });
                  }
                  const opencodePromptFile = join(promptDir, `prompt-${task.id}.md`);
                  writeFileSync(opencodePromptFile, prompt, 'utf8');
                  console.log(chalk.cyan(`[Agent] Prompt also saved at: ${opencodePromptFile}`));
                  break;
              }
              
              console.log(chalk.green(`[Agent] ${launchMessage}`));
              
              try {
                const proc = spawn(agentBin, agentArgs, { 
                  cwd: root, 
                  shell: false,
                  stdio: 'inherit',
                  detached: true
                });
                proc.unref();
                console.log(chalk.green(`[Agent] Process started: ${agentBin} ${agentArgs.join(' ')}`));
              } catch (e: any) {
                console.log(chalk.yellow(`[Agent] Could not start ${agentBin}: ${e.message}`));
                console.log(chalk.yellow(`[Agent] Please ensure ${agentBin} is installed and in your PATH.`));
                console.log(chalk.cyan(`[Agent] Prompt is still available at: ${promptFile}`));
              }
            } else {
              console.log(chalk.gray(`[Agent] No integration configured. Prompt saved to: ${promptFile}`));
            }
          }
          
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, task: updatedTask }));
        } catch (e: any) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: e?.message || String(e) }));
        }
      });
      return;
    }
    
    if (url === '/api/state') {
      const state = loadState(root);
      if (state) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ integration: state.integration || 'none' }));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'No state found' }));
      }
      return;
    }
    if (url === '/tasks.json') {
      const state = loadState(root);
      const stateTasks = (state?.tasks ?? []).map(t => ({
        id: t.id,
        name: t.name,
        description: t.description,
        phase: t.phase,
        priority: t.priority,
        status: t.status,
        tags: t.tags,
        openItems: t.openItems,
        nextSteps: t.nextSteps,
        blockedReason: t.blockedReason,
        estimatedHours: t.estimatedHours,
        actualHours: t.actualHours
      }));
      let tasks = stateTasks;
      if (!tasks.length) {
        const demoPath = join(distDir, 'tasks.json');
        if (existsSync(demoPath)) {
          try { tasks = JSON.parse(readFileSync(demoPath, 'utf8')); } catch { tasks = []; }
        }
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(tasks));
      return;
    }
    let fileUrl = url === '/' ? '/index.html' : url;
    const file = join(distDir, fileUrl);
    if (!existsSync(file)) {
      const index = join(distDir, 'index.html');
      if (existsSync(index)) {
        res.setHeader('Content-Type', 'text/html');
        res.end(readFileSync(index));
        return;
      }
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    const ext = extname(file);
    res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream');
    res.end(readFileSync(file));
  });
  server.listen(port, () => {
    console.log(chalk.green(`Pocket Dev board running at http://localhost:${port}`));
    console.log(chalk.gray('Press Ctrl+C to stop.\n'));
  });
  if (opts.open) {
    try {
      const { exec } = await import('node:child_process');
      const cmd = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
      exec(`${cmd} http://localhost:${port}`);
    } catch {}
  }
}
