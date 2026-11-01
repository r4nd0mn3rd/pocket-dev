import chalk from 'chalk';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadState } from '../utils/state.js';
import { updateStateFromSpecs, scanSpecs } from '../utils/scanner.js';

export async function runStatus(root: string): Promise<void> {
  const state = loadState(root);
  if (!state) {
    console.log(chalk.yellow('No .pocket-dev/state.json found. Run `pocket-dev init` first.'));
    return;
  }
  
  // Always check specs directory for consistency
  const specsDir = join(root, 'specs');
  const hasSpecs = existsSync(specsDir);
  
  // Scan specs if specs exist but state is empty OR if there are potential updates
  const needsScan = hasSpecs && (state.features.length === 0 || state.tasks.length === 0);
  
  if (needsScan) {
    // Try to scan specs and update state
    const { featuresFound, tasksFound, updated } = updateStateFromSpecs(root);
    if (updated) {
      console.log(chalk.cyan(`\nScanned specs directory: found ${featuresFound} feature(s) and ${tasksFound} task(s)`));
      console.log(chalk.cyan('Updated state.json with scanned features and tasks.\n'));
      // Reload state to get the updated data
      const freshState = loadState(root);
      if (freshState) {
        // Use the fresh state for the rest of the output
        state.features = freshState.features;
        state.tasks = freshState.tasks;
        state.stats = freshState.stats;
      }
    }
  }
  
  console.log(chalk.bold(`\n📦 ${state.project_name}`));
  console.log(chalk.gray(state.project_description));
  console.log(chalk.gray(`Framework v${state.framework_version} · Updated ${state.last_updated || 'never'}\n`));

  console.log(chalk.bold('Features:') + ` ${state.features.length}`);
  const byPhase = state.stats?.by_phase ?? {};
  console.log(chalk.bold('Tasks by phase:'));
  for (const [phase, count] of Object.entries(byPhase)) {
    const name = state.framework_config.phases.find(p => String(p.id) === phase)?.name ?? `Phase ${phase}`;
    console.log(`  ${name}: ${count}`);
  }

  console.log(chalk.bold('\nTasks:'));
  const counts: Record<string, number> = {};
  for (const t of state.tasks) counts[t.status] = (counts[t.status] ?? 0) + 1;
  for (const [s, c] of Object.entries(counts)) console.log(`  ${s}: ${c}`);
  console.log(chalk.gray(`  Total: ${state.tasks.length}`));
  
  // Check if there are features in ideation phase
  const ideationFeatures = state.features.filter(f => f.phase === 0);
  const ideationTasks = state.tasks.filter(t => t.phase === 0);
  
  // Check if AGENTS.md requires human interaction
  const agentsMdPath = join(root, 'AGENTS.md');
  const hasAgentsMd = existsSync(agentsMdPath);
  
  // Show prompt if no ideation features and AGENTS.md requires interaction
  if (ideationFeatures.length === 0 && ideationTasks.length === 0 && hasAgentsMd) {
    console.log('\n' + chalk.yellow('─'.repeat(60)));
    console.log(chalk.yellow('No features in ideation phase.'));
    console.log(chalk.yellow('Would you like to create an idea?'));
    console.log(chalk.yellow(`  Run: cp .pocket-dev/04-templates/idea-template.md specs/[your-feature]/idea.md`));
    console.log(chalk.yellow('  Then fill out the idea document and submit for Gate 0 review.'));
    console.log(chalk.yellow('─'.repeat(60)));
  } else if (ideationFeatures.length === 0 && ideationTasks.length === 0) {
    console.log('\n' + chalk.cyan('─'.repeat(60)));
    console.log(chalk.cyan('No features in ideation phase.'));
    console.log(chalk.cyan('To create a new idea:'));
    console.log(chalk.cyan(`  1. Create feature directory: mkdir -p specs/[your-feature]`));
    console.log(chalk.cyan(`  2. Copy template: cp .pocket-dev/04-templates/idea-template.md specs/[your-feature]/idea.md`));
    console.log(chalk.cyan(`  3. Fill out idea.md and request Gate 0 review`));
    console.log(chalk.cyan('─'.repeat(60)));
  }
  
  // Check for AGENTS.md with human interaction requirements
  if (hasAgentsMd) {
    console.log('\n' + chalk.magenta('ℹ️') + chalk.white(' Project has custom agent instructions in AGENTS.md'));
    console.log(chalk.gray('  Some phases may require explicit human interaction.'));
  }
  
  // Check if specs exist but state is still empty
  if (state.features.length === 0 && state.tasks.length === 0 && hasSpecs) {
    // Check if there are actually spec files
    try {
      const { features, tasks } = scanSpecs(root);
      if (features.length > 0 || tasks.length > 0) {
        console.log('\n' + chalk.yellow('─'.repeat(60)));
        console.log(chalk.yellow('Note: Feature artifacts found in specs/ directory but not in state.json'));
        console.log(chalk.yellow(`  Found ${features.length} feature(s) and ${tasks.length} task(s) in specs/`));
        console.log(chalk.yellow('  Run `pocket-dev scan` to update state.json'));
        console.log(chalk.yellow('─'.repeat(60)));
      }
    } catch {
      // Ignore scan errors
    }
  }
}
