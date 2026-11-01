#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
const version = '1.0.0';

const program = new Command();

program
  .name('pocket-dev')
  .description('Pocket Dev — Solo Agent Development Framework CLI')
  .version(version ?? '1.0.0');

program
  .command('init [target]')
  .description('Initialize the framework in a target directory')
  .option('-y, --yes', 'Skip confirmation prompts')
  .option('-i, --integration <name>', 'Integration target: claude, opencode, vibe, or none')
  .action(async (target, opts) => {
    const { runInit } = await import('./commands/init.js');
    await runInit(target ?? process.cwd(), opts);
  });

program
  .command('status')
  .description('Show project status summary')
  .action(async () => {
    const { runStatus } = await import('./commands/status.js');
    await runStatus(process.cwd());
  });

program
  .command('validate')
  .description('Validate framework structure and constitution alignment')
  .action(async () => {
    const { runValidate } = await import('./commands/validate.js');
    await runValidate(process.cwd());
  });

program
  .command('deps')
  .description('Check and install dependencies')
  .option('--install', 'Attempt to install missing dependencies')
  .action(async (opts) => {
    const { runDeps } = await import('./commands/deps.js');
    await runDeps(process.cwd(), opts);
  });

program
  .command('board')
  .description('Launch the interactive agile board')
  .option('-p, --port <port>', 'Port for the board server', '4173')
  .option('--open', 'Open browser automatically', true)
  .action(async (opts) => {
    const { runBoard } = await import('./commands/board.js');
    await runBoard(process.cwd(), opts);
  });

program.parseAsync(process.argv).catch((err) => {
  console.error(chalk.red('Error:'), err?.message ?? err);
  process.exit(1);
});
