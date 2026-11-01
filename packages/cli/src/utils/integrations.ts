import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export type Integration = 'claude' | 'opencode' | 'vibe' | 'none';

export async function askIntegration(): Promise<Integration> {
  const prompts = await import('prompts');
  const res = await prompts.default({
    type: 'select',
    name: 'value',
    message: 'Which AI agent integration should Pocket Dev set up?',
    choices: [
      { title: 'Claude (Claude Code)', value: 'claude' },
      { title: 'OpenCode (TUI)', value: 'opencode' },
      { title: 'Mistral Vibe', value: 'vibe' },
      { title: 'None (skip)', value: 'none' }
    ]
  });
  return (res.value ?? 'none') as Integration;
}

function ensureDir(p: string) { if (!existsSync(p)) mkdirSync(p, { recursive: true }); }

export function setupIntegration(root: string, integration: Integration): string[] {
  const created: string[] = [];
  if (integration === 'claude') {
    ensureDir(join(root, '.claude', 'commands'));
    writeFileSync(join(root, '.claude', 'commands', 'pocket-dev.md'), CLAUDE_CMD, 'utf8');
    created.push('.claude/commands/pocket-dev.md');
    if (!existsSync(join(root, 'CLAUDE.md'))) {
      writeFileSync(join(root, 'CLAUDE.md'), CLAUDE_MD, 'utf8');
      created.push('CLAUDE.md');
    }
  } else if (integration === 'opencode') {
    ensureDir(join(root, '.opencode', 'skills', 'pocket-dev'));
    ensureDir(join(root, '.opencode', 'commands'));
    writeFileSync(join(root, '.opencode', 'skills', 'pocket-dev', 'SKILL.md'), OPENCODE_SKILL, 'utf8');
    writeFileSync(join(root, '.opencode', 'commands', 'pocket-dev.md'), OPENCODE_CMD, 'utf8');
    created.push('.opencode/skills/pocket-dev/SKILL.md');
    created.push('.opencode/commands/pocket-dev.md');
  } else if (integration === 'vibe') {
    ensureDir(join(root, '.vibe', 'skills', 'pocket-dev'));
    writeFileSync(join(root, '.vibe', 'skills', 'pocket-dev', 'SKILL.md'), VIBE_SKILL, 'utf8');
    created.push('.vibe/skills/pocket-dev/SKILL.md');
  }
  return created;
}

export function printUsage(integration: Integration): void {
  console.log('\n' + '='.repeat(60));
  console.log('Pocket Dev — Usage Instructions');
  console.log('='.repeat(60));
  console.log('\nCore commands:');
  console.log('  pocket-dev init [target]      Initialize framework (rerun-safe)');
  console.log('  pocket-dev status             Show project status summary');
  console.log('  pocket-dev validate           Validate framework structure');
  console.log('  pocket-dev deps               Check dependencies');
  console.log('  pocket-dev board              Launch agile board (http://localhost:<port>)');
  console.log('\nProject workflow:');
  console.log('  1. Write an idea in Docs/00-idea/idea.md');
  console.log('  2. Run your AI agent (claude / opencode / vibe) and invoke /pocket-dev');
  console.log('  3. Follow phases 0-5; track tasks on the board');
  console.log('  4. Run pocket-dev validate before each gate');
  if (integration === 'claude') {
    console.log('\nClaude Code:');
    console.log('  - Open project in Claude Code');
    console.log('  - Run: /pocket-dev');
    console.log('  - Command file: .claude/commands/pocket-dev.md');
  } else if (integration === 'opencode') {
    console.log('\nOpenCode:');
    console.log('  - Run: opencode');
    console.log('  - In TUI: /pocket-dev');
    console.log('  - Skill: .opencode/skills/pocket-dev/SKILL.md');
  } else if (integration === 'vibe') {
    console.log('\nMistral Vibe:');
    console.log('  - Skill installed at .vibe/skills/pocket-dev/SKILL.md');
    console.log('  - Invoke via vibe skill loader');
  }
  console.log('\nDocs: GETTING-STARTED.md, 07-examples/pocket-dev-module/\n');
}

const CLAUDE_CMD = `# Pocket Dev Framework
> pocket-dev board --port 4173 --open

Load and follow the Solo Agent Development Framework. Read AGENTS.md and .pocket-dev/00-constitution/constitution.md, then help the user drive a feature through phases 0-5.

The board is served at http://localhost:<port>.

Use pocket-dev status / pocket-dev validate as needed.
`;

const CLAUDE_MD = `# Pocket Dev Project

This project uses the Solo Agent Development Framework. See .pocket-dev/00-constitution/constitution.md and .pocket-dev/GETTING-STARTED.md.

Run \`pocket-dev status\` for overview, \`pocket-dev board\` for the agile board.
`;

const OPENCODE_SKILL = `# Pocket Dev Framework Manager

Load the framework and assist the solo developer through phases 0-5.
Read constitution, methodology, and templates. Use pocket-dev CLI for status/validate/board.
`;

const OPENCODE_CMD = CLAUDE_CMD;

const VIBE_SKILL = `--- 
name: pocket-dev
description: Manage Pocket Dev framework and launch agile board
triggers:
  - name: invoke
    patterns:
      - "/pocket-dev"
    priority: 10

---
# Pocket Dev Framework

Start the agile board:

\`\`\`bash
pocket-dev board --port 4173 --open
\`\`\`

The board opens at http://localhost:<port>.

Load and follow the Solo Agent Development Framework (Pocket Dev). Read constitution, methodology, templates, and standards. Use pocket-dev CLI for status and validation.

State and artifacts live in this repository:
- Project state: .pocket-dev/state.json
- Task sessions: .pocket-dev/sessions/
- Task data: .pocket-dev/tasks/
- Framework docs: .pocket-dev/00-constitution/, .pocket-dev/02-methodology/, etc.
`;
