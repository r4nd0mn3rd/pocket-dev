import chalk from 'chalk';
import { loadState } from '../utils/state.js';

export async function runStatus(root: string): Promise<void> {
  const state = loadState(root);
  if (!state) {
    console.log(chalk.yellow('No .pocket-dev/state.json found. Run `pocket-dev init` first.'));
    return;
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
}
