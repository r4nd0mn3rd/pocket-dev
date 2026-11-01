import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import chalk from 'chalk';
import { loadState, saveState } from '../utils/state.js';

function bumpSemver(version: string, level: string): string {
  const parts = version.split('.').map(Number);
  while (parts.length < 3) parts.push(0);
  if (level === 'major') { parts[0]++; parts[1] = 0; parts[2] = 0; }
  else if (level === 'minor') { parts[1]++; parts[2] = 0; }
  else { parts[2]++; }
  return parts.join('.');
}

export async function runVersion(root: string, opts: { bump?: string; show?: boolean }): Promise<void> {
  const pkgPath = join(process.cwd(), '..', '..', 'package.json'); // fallback
  // find package.json by walking up
  let pkgFile = '';
  const candidates = [
    join(process.cwd(), 'package.json'),
    join(root, 'package.json'),
    join(__dirname_placeholder(), '..', '..', 'package.json')
  ];
  // simpler: search upward from root
  let dir = root;
  for (let i = 0; i < 5; i++) {
    const p = join(dir, 'package.json');
    if (existsSync(p)) { pkgFile = p; break; }
    dir = join(dir, '..');
  }
  if (!pkgFile) {
    console.log(chalk.red('package.json not found'));
    return;
  }
  const pkg = JSON.parse(readFileSync(pkgFile, 'utf8'));
  let version = pkg.version || '1.0.0';

  if (opts.bump) {
    const level = opts.bump.toLowerCase();
    const newVersion = bumpSemver(version, level);
    pkg.version = newVersion;
    writeFileSync(pkgFile, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
    version = newVersion;
    // update state if present
    const state = loadState(root);
    if (state) {
      state.framework_version = newVersion;
      saveState(root, state);
    }
    console.log(chalk.green(`✓ Version bumped to ${newVersion}`));
    console.log(chalk.gray('Rebuild required: npm run build'));
    console.log(chalk.gray(`Updated ${pkgFile}`));
  } else {
    console.log(chalk.bold(`pocket-dev v${version}`));
    const state = loadState(root);
    if (state) console.log(chalk.gray(`state.framework_version: ${state.framework_version}`));
  }
}

function __dirname_placeholder() { return ''; }
