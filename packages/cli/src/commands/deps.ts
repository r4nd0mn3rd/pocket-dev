import chalk from 'chalk';
import { checkDependencies, printDeps } from '../utils/deps.js';

export async function runDeps(_root: string, opts: { install?: boolean }): Promise<void> {
  const deps = checkDependencies();
  printDeps(deps);
  if (opts.install) {
    console.log(chalk.yellow('\nAuto-install is not enabled in this version. Please install manually per hints above.'));
  }
}
