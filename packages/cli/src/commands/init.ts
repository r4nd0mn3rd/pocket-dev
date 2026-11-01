import { join, basename, resolve } from 'node:path';
import { cpSync, existsSync } from 'node:fs';
import chalk from 'chalk';
import ora from 'ora';
import { ensureFrameworkDirs, defaultState, saveState, loadState } from '../utils/state.js';
import { checkDependencies, printDeps, allRequiredPresent } from '../utils/deps.js';
import { askIntegration, setupIntegration, printUsage, type Integration } from '../utils/integrations.js';

export async function runInit(target: string, opts: { yes?: boolean; integration?: string }): Promise<void> {
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

  printUsage(integration);
}
