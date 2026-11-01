import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import chalk from 'chalk';

export async function runValidate(root: string): Promise<void> {
  const script = join(root, '.pocket-dev', '06-automation', 'scripts', 'framework-check.sh');
  if (existsSync(script)) {
    try {
      const out = execSync(`bash "${script}"`, { cwd: root, encoding: 'utf8', stdio: 'pipe' });
      console.log(out);
    } catch (e: any) {
      console.log(e.stdout ?? '');
      console.error(chalk.red(e.stderr ?? e.message));
      process.exit(1);
    }
    return;
  }
  // Fallback basic validation
  const required = ['.pocket-dev', '.pocket-dev/00-constitution', '.pocket-dev/02-methodology', '.pocket-dev/04-templates'];
  let ok = true;
  for (const d of required) {
    if (!existsSync(join(root, d))) { console.log(chalk.red(`✗ Missing: ${d}`)); ok = false; }
    else console.log(chalk.green(`✓ ${d}`));
  }
  if (!ok) process.exit(1);
  console.log(chalk.green('\nBasic validation passed.'));
}
