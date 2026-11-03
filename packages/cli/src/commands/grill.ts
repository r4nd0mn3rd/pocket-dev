import { join } from 'node:path';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import chalk from 'chalk';

function templateCandidates(root: string, file: string): string[] {
  return [join(root, '.pocket-dev', '04-templates', file), join(root, '04-templates', file)];
}

export async function runGrill(root: string, topic?: string): Promise<void> {
  // Lazy docs: nothing exists until first decision is settled.
  const ctxCandidates = templateCandidates(root, 'context-template.md');
  const ctxTpl = ctxCandidates.find(p => existsSync(p));
  const ctxPath = join(root, 'CONTEXT.md');
  if (!existsSync(ctxPath)) {
    const content = ctxTpl ? readFileSync(ctxTpl, 'utf8') : '# CONTEXT.md\n';
    writeFileSync(ctxPath, content, 'utf8');
    console.log(chalk.green('✓ Created CONTEXT.md (glossary, lazy)'));
  } else {
    console.log(chalk.yellow('CONTEXT.md already exists'));
  }

  const adrDir = join(root, 'docs', 'adr');
  mkdirSync(adrDir, { recursive: true });
  const idx = join(adrDir, 'README.md');
  if (!existsSync(idx)) {
    writeFileSync(idx, `# Architecture Decision Records\n\nADRs are written lazily: only when the three-part test passes\n(6-month durability, architecture/data/integration boundary, rationale needed).\n`, 'utf8');
    console.log(chalk.green('✓ Created docs/adr/'));
  }

  if (topic) {
    const adrTplCandidates = templateCandidates(root, 'adr-template.md');
    const adrTpl = adrTplCandidates.find(p => existsSync(p));
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'decision';
    const adrPath = join(adrDir, `0001-${slug}.md`);
    if (!existsSync(adrPath)) {
      let content = adrTpl ? readFileSync(adrTpl, 'utf8') : '# ADR\n';
      content = content.replace(/<title>/g, topic);
      writeFileSync(adrPath, content, 'utf8');
      console.log(chalk.green(`✓ Created ${adrPath}`));
    }
  }

  console.log(chalk.cyan('\nGrill mode:'));
  console.log('  Interview until every branch resolves; recommend answers from code/docs.');
  console.log('  Challenge terms against CONTEXT.md; write ADRs only when the 3-part test passes.');
  console.log('  Invoke explicitly: pocket-dev grill [topic] (never auto-triggered).\n');
}
