import chalk from 'chalk';
import { loadState, saveState } from '../utils/state.js';
import { askRuntimeConfig, loadRuntimeConfig, saveRuntimeConfig, detectTools } from '../utils/agentRuntime.js';

export async function runRuntime(root: string, opts: { show?: boolean; reconfigure?: boolean } = {}): Promise<void> {
  const det = detectTools();
  console.log(chalk.cyan('Detected runtimes:'));
  console.log(`  herdr: ${det.herdr.available ? 'available' : 'missing'}${det.herdr.path ? ` (${det.herdr.path})` : ''}`);
  console.log(`  tmux:  ${det.tmux.available ? 'available' : 'missing'}${det.tmux.path ? ` (${det.tmux.path})` : ''}`);

  let cfg = loadRuntimeConfig(root);
  if (opts.reconfigure || !cfg) {
    cfg = await askRuntimeConfig(root);
  }
  console.log(chalk.green('\nRuntime configuration:'));
  console.log(JSON.stringify(cfg, null, 2));

  const state = loadState(root);
  if (state && cfg) { state.runtime = cfg; saveState(root, state); }
  if (cfg?.allowChoiceAtTrigger) {
    console.log(chalk.gray('\nMultiple runtimes enabled: you will be asked to choose when triggering an action on the board.'));
  }
}
