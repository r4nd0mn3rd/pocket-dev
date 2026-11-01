import { execSync } from 'node:child_process';
import chalk from 'chalk';

export interface DepCheck {
  name: string;
  required: boolean;
  found: boolean;
  version?: string;
  hint: string;
}

function tryVersion(cmd: string): string | null {
  try {
    const out = execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'], encoding: 'utf8' });
    return out.trim().split('\n')[0];
  } catch {
    return null;
  }
}

export function checkDependencies(): DepCheck[] {
  const results: DepCheck[] = [];

  const nodeVer = process.version;
  results.push({
    name: 'Node.js',
    required: true,
    found: true,
    version: nodeVer,
    hint: 'Install from https://nodejs.org (>=20 required)'
  });

  const gitVer = tryVersion('git --version');
  results.push({
    name: 'Git',
    required: true,
    found: !!gitVer,
    version: gitVer ?? undefined,
    hint: 'Install from https://git-scm.com'
  });

  const npmVer = tryVersion('npm --version');
  results.push({
    name: 'npm',
    required: true,
    found: !!npmVer,
    version: npmVer ? `v${npmVer}` : undefined,
    hint: 'Comes with Node.js'
  });

  return results;
}

export function printDeps(deps: DepCheck[]): void {
  console.log(chalk.bold('Dependency check:'));
  for (const d of deps) {
    const icon = d.found ? chalk.green('✓') : (d.required ? chalk.red('✗') : chalk.yellow('○'));
    const ver = d.version ? chalk.gray(` (${d.version})`) : '';
    console.log(`  ${icon} ${d.name}${ver}${d.found ? '' : ' — ' + chalk.yellow(d.hint)}`);
  }
  const missingRequired = deps.filter(d => d.required && !d.found);
  if (missingRequired.length > 0) {
    console.log(chalk.red(`\nMissing required: ${missingRequired.map(d => d.name).join(', ')}`));
  } else {
    console.log(chalk.green('\nAll required dependencies present.'));
  }
}

export function allRequiredPresent(deps: DepCheck[]): boolean {
  return deps.filter(d => d.required && !d.found).length === 0;
}
