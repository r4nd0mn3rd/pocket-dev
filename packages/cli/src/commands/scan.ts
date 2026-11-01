import chalk from 'chalk';
import { updateStateFromSpecs, scanSpecs } from '../utils/scanner.js';
import { loadState } from '../utils/state.js';

export async function runScan(root: string, opts: { verbose?: boolean }): Promise<void> {
  const verbose = opts.verbose || false;
  
  if (verbose) {
    console.log(chalk.gray('Scanning specs directory for features and tasks...'));
  }
  
  const state = loadState(root);
  if (!state) {
    console.log(chalk.red('Error: No .pocket-dev/state.json found. Run `pocket-dev init` first.'));
    process.exit(1);
  }
  
  const { featuresFound, tasksFound, updated } = updateStateFromSpecs(root);
  
  if (verbose) {
    console.log(chalk.gray(`Found ${featuresFound} feature(s) and ${tasksFound} task(s)`));
  }
  
  if (updated) {
    console.log(chalk.green(`✓ Updated state.json with ${featuresFound} feature(s) and ${tasksFound} task(s)`));
    
    if (verbose) {
      const { features, tasks } = scanSpecs(root);
      
      if (features.length > 0) {
        console.log(chalk.bold('\nFeatures:'));
        for (const feature of features) {
          const phaseName = state.framework_config.phases.find(p => p.id === feature.phase)?.name || `Phase ${feature.phase}`;
          console.log(`  - ${feature.name} (${phaseName})`);
        }
      }
      
      if (tasks.length > 0) {
        console.log(chalk.bold('\nTasks:'));
        for (const task of tasks) {
          const phaseName = state.framework_config.phases.find(p => p.id === task.phase)?.name || `Phase ${task.phase}`;
          console.log(`  - ${task.id || 'unnamed'}: ${task.name} (${phaseName})`);
        }
      }
    }
  } else if (featuresFound === 0 && tasksFound === 0) {
    console.log(chalk.yellow('No features or tasks found in specs/ directory.'));
    console.log(chalk.gray('  Make sure you have feature subdirectories with idea.md, spec.md, or tasks.md files.'));
  } else {
    console.log(chalk.gray('State is already up to date.'));
  }
}
