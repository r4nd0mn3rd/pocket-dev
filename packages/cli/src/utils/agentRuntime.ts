import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import type { AgentRun, AgentStateStatus, RuntimeConfig, RuntimeTool } from '@pocket-dev/shared';

export interface AgentRunStore { runs: AgentRun[]; }

export function runsPath(root: string): string { return join(root, '.pocket-dev', 'agent-runs.json'); }

export function loadRuns(root: string): AgentRun[] {
  const p = runsPath(root);
  if (!existsSync(p)) return [];
  try { return JSON.parse(readFileSync(p, 'utf8')).runs ?? []; } catch { return []; }
}

export function saveRuns(root: string, runs: AgentRun[]): void {
  const dir = join(root, '.pocket-dev');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(runsPath(root), JSON.stringify({ runs }, null, 2), 'utf8');
}

export function parseOsc7501(payload: string): AgentStateStatus {
  const p = (payload ?? '').toLowerCase();
  if (p.includes('done') || p.includes('finished') || p.includes('complete')) return 'done';
  if (p.includes('blocked') || p.includes('needs') || p.includes('approval') || p.includes('waiting')) return 'blocked';
  if (p.includes('idle')) return 'idle';
  if (p.includes('working') || p.includes('running') || p.includes('busy')) return 'working';
  return 'unknown';
}

function which(bin: string): string | null {
  try { return execFileSync('sh', ['-c', `command -v ${bin}`], { encoding: 'utf8' }).trim() || null; }
  catch { return null; }
}

export function detectTools(): { herdr: { available: boolean; path: string | null }; tmux: { available: boolean; path: string | null } } {
  return {
    herdr: { available: !!which('herdr'), path: which('herdr') },
    tmux: { available: !!which('tmux'), path: which('tmux') }
  };
}

function runtimeConfigPath(root: string): string { return join(root, '.pocket-dev', 'runtime.json'); }

export function loadRuntimeConfig(root: string): RuntimeConfig | undefined {
  const p = runtimeConfigPath(root);
  if (existsSync(p)) {
    try { return JSON.parse(readFileSync(p, 'utf8')); } catch { /* fallthrough */ }
  }
  // fall back to state.json
  try {
    const st = JSON.parse(readFileSync(join(root, '.pocket-dev', 'state.json'), 'utf8'));
    return st.runtime;
  } catch { return undefined; }
}

export function saveRuntimeConfig(root: string, cfg: RuntimeConfig): void {
  const dir = join(root, '.pocket-dev');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(runtimeConfigPath(root), JSON.stringify(cfg, null, 2), 'utf8');
}

function installHint(tool: 'herdr' | 'tmux'): string {
  if (tool === 'herdr') {
    return 'Install herdr: `cargo install herdr` or see https://herdr.dev (brew: `brew install herdrdev/tap/herdr`).';
  }
  return 'Install tmux: brew/apt/dnf install tmux.';
}

export async function tryInstall(tool: 'herdr' | 'tmux'): Promise<boolean> {
  // Best-effort; never throw. Returns true if available after attempt.
  const isMac = process.platform === 'darwin';
  let cmd: string | null = null;
  if (tool === 'tmux') {
    cmd = isMac ? 'brew install tmux' : (process.platform === 'linux' ? 'sudo apt-get install -y tmux' : null);
  } else {
    cmd = isMac ? 'brew install herdrdev/tap/herdr' : 'cargo install herdr';
  }
  if (!cmd) { console.log(installHint(tool)); return !!which(tool); }
  try {
    execFileSync('sh', ['-c', cmd], { stdio: 'inherit' });
    return !!which(tool);
  } catch {
    console.log(`Automatic install failed. ${installHint(tool)}`);
    return !!which(tool);
  }
}

export async function askRuntimeConfig(root: string): Promise<RuntimeConfig> {
  const detected = detectTools();
  const prompts = await import('prompts');
  // multi-select tools to enable
  const choices = [
    { title: `herdr${detected.herdr.available ? ' (detected)' : ' (not installed)'}`, value: 'herdr' },
    { title: `tmux${detected.tmux.available ? ' (detected)' : ' (not installed)'}`, value: 'tmux' }
  ];
  const res = await prompts.default({
    type: 'multiselect',
    name: 'tools',
    message: 'Which execution runtimes do you want configured (select none or both)?',
    choices
  });
  const selected: string[] = res.tools ?? [];
  // install missing
  for (const t of selected) {
    if (t === 'herdr' && !detected.herdr.available) {
      const inst = await prompts.default({ type: 'confirm', name: 'v', message: 'herdr not found. Attempt install?', initial: true });
      if (inst.v) await tryInstall('herdr');
    }
    if (t === 'tmux' && !detected.tmux.available) {
      const inst = await prompts.default({ type: 'confirm', name: 'v', message: 'tmux not found. Attempt install?', initial: true });
      if (inst.v) await tryInstall('tmux');
    }
  }
  const det2 = detectTools();
  const enabledTools: RuntimeConfig['tools'] = {};
  if (selected.includes('herdr')) enabledTools.herdr = { enabled: true, path: det2.herdr.path ?? undefined };
  if (selected.includes('tmux')) enabledTools.tmux = { enabled: true, path: det2.tmux.path ?? undefined };

  // preferred
  const prefChoices = [{ title: 'Auto (prefer herdr then tmux)', value: 'auto' }]
    .concat(selected.map(t => ({ title: t, value: t })))
    .concat([{ title: 'None', value: 'none' }]);
  const pref = await prompts.default({ type: 'select', name: 'v', message: 'Preferred default execution runtime?', choices: prefChoices });
  const preferred = (pref.v ?? 'auto') as RuntimeTool | 'auto';
  const normalizedPreferred: RuntimeTool = preferred === 'auto'
    ? (enabledTools.herdr?.enabled ? 'herdr' : (enabledTools.tmux?.enabled ? 'tmux' : 'none'))
    : (preferred as RuntimeTool);

  const cfg: RuntimeConfig = {
    tools: enabledTools,
    preferred: normalizedPreferred,
    allowChoiceAtTrigger: selected.length > 1
  };
  saveRuntimeConfig(root, cfg);
  return cfg;
}
