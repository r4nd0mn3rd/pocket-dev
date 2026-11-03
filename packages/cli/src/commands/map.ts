import { join } from 'node:path';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import chalk from 'chalk';
import { loadState, saveState } from '../utils/state.js';

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'new-map';
}

export async function runMap(root: string, name: string, destination?: string): Promise<void> {
  const slug = slugify(name);
  const dir = join(root, '.pocket-dev', 'maps');
  mkdirSync(dir, { recursive: true });

  const templateCandidates = [
    join(root, '.pocket-dev', '04-templates', 'decision-map-template.md'),
    join(root, '04-templates', 'decision-map-template.md')
  ];
  const tp = templateCandidates.find(p => existsSync(p));
  let content = tp ? readFileSync(tp, 'utf8') : `# Decision Map: ${name}\n`;
  content = content.replace(/<name>/g, name);
  content = content.replace(/<the thing we are finding a way to>/g, destination ?? name);

  const mapPath = join(dir, `${slug}.md`);
  if (existsSync(mapPath)) {
    console.log(chalk.yellow(`Map already exists: ${mapPath}`));
  } else {
    writeFileSync(mapPath, content, 'utf8');
    console.log(chalk.green(`✓ Created ${mapPath}`));
  }

  // Register in state.json as a decision map (lazy; plan, don't do).
  const state = loadState(root);
  if (state) {
    state.decisionMaps = state.decisionMaps ?? [];
    if (!state.decisionMaps.find(m => m.id === slug)) {
      state.decisionMaps.push({
        id: slug,
        name,
        destination: destination ?? name,
        tickets: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      saveState(root, state);
    }
  }

  console.log(chalk.cyan('\nMode: PLAN, DON\'T DO'));
  console.log('  Resolve decision tickets one at a time. Promote a ticket to a spec');
  console.log('  (pocket-dev new-spec <name>) only when its way is clear.');
  console.log('  Decision types: research | prototype | grilling | task');
  console.log('  Prototype tickets require a playtest gate before spec.\n');
}
