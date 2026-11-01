import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { parseStateJson, stateToJson, ProjectState } from '@pocket-dev/shared';

export function statePath(root: string): string {
  return join(root, '.pocket-dev', 'state.json');
}

export function loadState(root: string): ProjectState | null {
  const p = statePath(root);
  if (!existsSync(p)) return null;
  try {
    return parseStateJson(readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

export function saveState(root: string, state: ProjectState): void {
  const dir = join(root, '.pocket-dev');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  state.last_updated = new Date().toISOString();
  writeFileSync(statePath(root), stateToJson(state), 'utf8');
}

export function ensureFrameworkDirs(root: string): void {
  for (const sub of ['.pocket-dev', '.pocket-dev/tasks', '.pocket-dev/sessions', 'specs']) {
    const p = join(root, sub);
    if (!existsSync(p)) mkdirSync(p, { recursive: true });
  }
}

export function defaultState(projectName: string): ProjectState {
  return {
    framework_version: '1.0.0',
    last_updated: new Date().toISOString(),
    project_name: projectName,
    project_description: 'Pocket Dev project',
    features: [],
    tasks: [],
    stats: { total_features: 0, by_phase: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, 'done': 0 } },
    framework_config: {
      phases: [
        { id: 0, name: 'Ideation' },
        { id: 1, name: 'Discovery' },
        { id: 2, name: 'Specification' },
        { id: 3, name: 'Design' },
        { id: 4, name: 'Implementation' },
        { id: 5, name: 'Verification' }
      ],
      gates: [
        { id: 0, name: 'Idea Approved', phase: 0 },
        { id: 1, name: 'Discovery Complete', phase: 1 },
        { id: 2, name: 'Specification Approved', phase: 2 },
        { id: 3, name: 'Design Approved', phase: 3 },
        { id: 4, name: 'Implementation Complete', phase: 4 },
        { id: 5, name: 'Verification Passed', phase: 5 }
      ],
      agent_roles: { '0': 'spec-agent', '1': 'spec-agent', '2': 'spec-agent', '3': 'design-agent', '4': 'impl-agent', '5': 'verify-agent' }
    },
    integration: 'none'
  };
}
