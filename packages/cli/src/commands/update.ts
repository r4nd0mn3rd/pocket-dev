import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import chalk from 'chalk';
import { execSync } from 'node:child_process';
import * as readline from 'node:readline';

function findRepoRoot(start: string): string | null {
  const candidates = [start, '/Users/tom/Documents/Repos/pocket-dev'];
  for (const s of candidates) {
    let dir = s;
    for (let i = 0; i < 8; i++) {
      const p = join(dir, 'package.json');
      if (existsSync(p)) {
        try {
          const j = JSON.parse(readFileSync(p, 'utf8'));
          if (j.name === 'pocket-dev') return dir;
        } catch {}
      }
      dir = join(dir, '..');
    }
  }
  return null;
}

function ask(question: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => {
    rl.question(question, ans => { rl.close(); resolve(ans.trim()); });
  });
}

export async function runUpdate(root: string, opts: { branch?: string }): Promise<void> {
  const repoRoot = findRepoRoot(root);
  if (!repoRoot) {
    console.log(chalk.red('Pocket Dev repository not found. Run this from the pocket-dev repo.'));
    return;
  }

  let branch = opts.branch;
  if (!branch) {
    console.log(chalk.cyan('Which version do you want to install?'));
    console.log('  1. main   - stable release');
    console.log('  2. dev    - preview / latest');
    const ans = await ask('Enter 1 or 2 (or branch name): ');
    if (ans === '1') branch = 'main';
    else if (ans === '2') branch = 'dev';
    else if (ans) branch = ans;
    else branch = 'dev';
  }

  console.log(chalk.cyan(`\nUpdating from branch: ${branch}`));
  try {
    execSync('git fetch origin', { cwd: repoRoot, stdio: 'inherit' });
    execSync(`git checkout ${branch}`, { cwd: repoRoot, stdio: 'inherit' });
    execSync(`git pull origin ${branch}`, { cwd: repoRoot, stdio: 'inherit' });
    execSync('npm install', { cwd: repoRoot, stdio: 'inherit' });
    execSync('npm run build', { cwd: repoRoot, stdio: 'inherit' });
    console.log(chalk.green('\n✓ Update complete. Restart board/CLI as needed.'));
  } catch (e: any) {
    console.log(chalk.red(`Update failed: ${e && e.message ? e.message : e}`));
  }
}
