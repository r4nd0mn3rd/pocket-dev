import { join, basename, resolve } from 'node:path';
import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import chalk from 'chalk';
import ora from 'ora';
import { ensureFrameworkDirs, defaultState, saveState, loadState } from '../utils/state.js';
import { checkDependencies, printDeps, allRequiredPresent } from '../utils/deps.js';
import { askIntegration, setupIntegration, printUsage, type Integration } from '../utils/integrations.js';
import { askRuntimeConfig, saveRuntimeConfig, detectTools, loadRuntimeConfig } from '../utils/agentRuntime.js';

export async function runInit(target: string, opts: { yes?: boolean; integration?: string; runtime?: string }): Promise<void> {
  const __dirname = new URL('.', import.meta.url).pathname;
  const sourceRoot = join(__dirname, '..', '..', '..', '..');
  const frameworkDirs = ['00-constitution', '01-governance', '02-methodology', '03-standards', '04-templates', '05-checklists', '06-automation', '07-examples'];
  const spinner = ora('Initializing Pocket Dev framework...').start();
  ensureFrameworkDirs(target);
  for (const d of frameworkDirs) {
    const src = join(sourceRoot, d);
    const dst = join(target, '.pocket-dev', d);
    if (existsSync(src)) cpSync(src, dst, { recursive: true, force: true });
  }
  const gettingStarted = join(sourceRoot, 'GETTING-STARTED.md');
  if (existsSync(gettingStarted)) cpSync(gettingStarted, join(target, '.pocket-dev', 'GETTING-STARTED.md'), { force: true });

  const deps = checkDependencies();
  spinner.stop();
  printDeps(deps);
  if (!allRequiredPresent(deps)) {
    console.log(chalk.red('\nAborting: required dependencies missing. Run `pocket-dev deps` for details.'));
    process.exit(1);
  }

  const projectName = basename(resolve(target)) || 'pocket-dev-project';
  
  // Determine integration
  let integration: Integration = (opts.integration as Integration) ?? 'none';
  if (!opts.integration && !opts.yes) {
    integration = await askIntegration();
  }
  
  // Initialize or update state with integration
  let state = loadState(target);
  if (!state) {
    state = defaultState(projectName);
  }
  state.integration = integration;
  saveState(target, state);
  console.log(chalk.green(`\n✓ State initialized for project: ${projectName}`));
  
  if (integration && integration !== 'none') {
    const created = setupIntegration(target, integration);
    console.log(chalk.green(`\n✓ Integration set up: ${integration}`));
    for (const c of created) console.log(chalk.gray(`   created ${c}`));
  } else {
    console.log(chalk.gray('\nIntegration: skipped (none)'));
  }

  console.log(chalk.cyan('\nNext steps:'));
  console.log('  1. Read GETTING-STARTED.md');
  console.log('  2. Run `pocket-dev status` to see project overview');
  console.log('  3. Run `pocket-dev board` to launch the agile board');
  console.log('  4. Run `pocket-dev validate` to check framework alignment');

  // Runtime configuration (herdr / tmux), seamless & multi-tool.
  let runtimeCfg = loadRuntimeConfig(target);
  if (!runtimeCfg) {
    if (opts.runtime && opts.runtime !== 'auto') {
      const map: Record<string, string[]> = { herdr: ['herdr'], tmux: ['tmux'], both: ['herdr', 'tmux'], none: [] };
      const tools = map[opts.runtime] ?? [];
      const det = detectTools();
      const enabled: any = {};
      if (tools.includes('herdr')) enabled.herdr = { enabled: true, path: det.herdr.path ?? undefined };
      if (tools.includes('tmux')) enabled.tmux = { enabled: true, path: det.tmux.path ?? undefined };
      runtimeCfg = {
        tools: enabled,
        preferred: (tools[0] as any) ?? 'none',
        allowChoiceAtTrigger: tools.length > 1
      };
      saveRuntimeConfig(target, runtimeCfg);
    } else if (!opts.yes) {
      runtimeCfg = await askRuntimeConfig(target);
    } else {
      const det = detectTools();
      const enabled: any = {};
      if (det.herdr.available) enabled.herdr = { enabled: true, path: det.herdr.path ?? undefined };
      if (det.tmux.available) enabled.tmux = { enabled: true, path: det.tmux.path ?? undefined };
      runtimeCfg = {
        tools: enabled,
        preferred: det.herdr.available ? 'herdr' : (det.tmux.available ? 'tmux' : 'none'),
        allowChoiceAtTrigger: Object.keys(enabled).length > 1
      };
      saveRuntimeConfig(target, runtimeCfg);
    }
  }
  if (state) { state.runtime = runtimeCfg; saveState(target, state); }
  console.log(chalk.gray(`Runtime config: preferred=${runtimeCfg?.preferred ?? 'none'}, tools=${Object.keys(runtimeCfg?.tools ?? {}).join(',') || 'none'}`));

  const setupDir = join(target, '.pocket-dev');
  if (!existsSync(setupDir)) mkdirSync(setupDir, { recursive: true });
  const labels = ['wayfinder:map', 'wayfinder:research', 'wayfinder:prototype', 'wayfinder:grilling', 'wayfinder:task'];
  writeFileSync(join(setupDir, 'wayfinder-labels.json'), JSON.stringify({ labels, note: 'Create these labels on your issue tracker before first `pocket-dev map` use.' }, null, 2), 'utf8');

  const det0 = detectTools();
  const runtime = det0.herdr.available ? 'herdr' : (det0.tmux.available ? 'tmux' : 'none');
  console.log(chalk.gray(`\nAgent runtime detected: ${runtime}`));
  if (runtime === 'none') console.log(chalk.gray('  Tip: install herdr (https://herdr.dev) for multi-agent state awareness.'));

  printUsage(integration);
}
