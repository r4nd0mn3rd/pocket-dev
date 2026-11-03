#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, '..', '..', '..', 'package.json'), 'utf8'));
const version = pkg.version ?? '1.0.0';

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
  .option('-r, --runtime <name>', 'Execution runtime: herdr, tmux, both, none, or auto (interactive if omitted)')
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

program
  .command('scan')
  .description('Scan specs directory and update state.json with features and tasks')
  .option('-v, --verbose', 'Show detailed output')
  .action(async (opts) => {
    const { runScan } = await import('./commands/scan.js');
    await runScan(process.cwd(), opts);
  });


program
  .command("new-spec <name>")
  .description("Create a new feature spec scaffold with idea.md template")
  .action(async (name) => {
    const { runNewSpec } = await import("./commands/newspec.js");
    await runNewSpec(process.cwd(), name);
  });

program
  .command("map <name>")
  .description("Chart a Wayfinder-style decision map (plan, don't do)")
  .option("-d, --destination <text>", "Destination the map is finding a way to")
  .action(async (name, opts) => {
    const { runMap } = await import("./commands/map.js");
    await runMap(process.cwd(), name, opts.destination);
  });

program
  .command("grill [topic]")
  .description("Lazy CONTEXT.md + ADR scaffolding (grill-with-docs style)")
  .action(async (topic) => {
    const { runGrill } = await import("./commands/grill.js");
    await runGrill(process.cwd(), topic);
  });


program
  .command("version")
  .description("Show or bump version")
  .option("--bump <level>", "Bump version: patch, minor, or major")
  .action(async (opts) => {
    const { runVersion } = await import("./commands/version.js");
    await runVersion(process.cwd(), opts);
  });


program
  .command("runtime")
  .description("Detect/configure execution runtimes (herdr, tmux) and set default")
  .option("--reconfigure", "Re-run interactive runtime setup")
  .action(async (opts) => {
    const { runRuntime } = await import("./commands/runtime.js");
    await runRuntime(process.cwd(), opts);
  });

program
  .command("update")
  .description("Pull and install latest version from main (stable) or dev (preview)")
  .option("-b, --branch <name>", "Branch to install: main or dev")
  .action(async (opts) => {
    const { runUpdate } = await import("./commands/update.js");
    await runUpdate(process.cwd(), opts);
  });

program.parseAsync(process.argv).catch((err) => {
  console.error(chalk.red('Error:'), err?.message ?? err);
  process.exit(1);
});
