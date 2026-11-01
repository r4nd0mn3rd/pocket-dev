import { join, basename } from 'node:path';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import chalk from 'chalk';

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'new-feature';
}

export async function runNewSpec(root: string, name: string): Promise<void> {
  const slug = slugify(name);
  const specDir = join(root, 'specs', slug);
  mkdirSync(specDir, { recursive: true });
  mkdirSync(join(root, '.pocket-dev', 'tasks'), { recursive: true });

  // Find idea template
  const templateCandidates = [
    join(root, '.pocket-dev', '04-templates', 'idea-template.md'),
    join(root, '04-templates', 'idea-template.md')
  ];
  const templatePath = templateCandidates.find(p => existsSync(p));
  let content = '';
  if (templatePath) {
    content = readFileSync(templatePath, 'utf8');
  } else {
    content = `# Idea: ${name}\n\n**Status**: Draft\n`;
  }

  // Pre-fill brief name placeholder
  content = content.replace(/\[Brief Name\]/g, name);

  const ideaPath = join(specDir, 'idea.md');
  if (existsSync(ideaPath)) {
    console.log(chalk.yellow(`Spec already exists: ${ideaPath}`));
  } else {
    writeFileSync(ideaPath, content, 'utf8');
    console.log(chalk.green(`✓ Created ${ideaPath}`));
  }

  console.log(chalk.cyan('\nNext steps:'));
  console.log('  1. Open the new spec in your editor or run `/pocket-dev`');
  console.log('  2. Complete idea.md section by section with human interaction');
  console.log('  3. Move to Discovery (Phase 1) and Specification (Phase 2)');
  console.log('  4. Run `pocket-dev scan` to register in state');
  console.log(`\nSpec directory: ${specDir}`);
}
