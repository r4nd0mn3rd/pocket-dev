export type TaskStatus = 'pending' | 'ready-for-dev' | 'in-progress' | 'completed' | 'blocked' | 'cancelled';
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low';
export type TaskPhase = 0 | 1 | 2 | 3 | 4 | 5;

// ---- Wayfinder-style decision map types ----
export type DecisionType = 'research' | 'prototype' | 'grilling' | 'task' | 'map';
export type DecisionStatus = 'open' | 'resolved' | 'blocked' | 'skipped';

export interface DecisionTicket {
  id: string;
  parentId?: string;
  type: DecisionType;
  title: string;
  question: string;
  context?: string;
  blocks: string[];
  dependsOn: string[];
  status: DecisionStatus;
  resolvedDecision?: string;
  playtestGate?: boolean;
  specPath?: string;
  createdAt?: string;
  updatedAt?: string;
  tags?: string[];
}

export interface DecisionMap {
  id: string;
  name: string;
  destination: string;
  tickets: DecisionTicket[];
  createdAt?: string;
  updatedAt?: string;
}

// ---- herdr-style agent runtime types ----
export type AgentStateStatus = 'working' | 'idle' | 'blocked' | 'done' | 'unknown';
export interface AgentRun {
  id: string;
  taskId?: string;
  agent: string;
  status: AgentStateStatus;
  pid?: number;
  startedAt?: string;
  endedAt?: string;
  worktreePath?: string;
  oscStatus?: string;
  logPath?: string;
}

export const WAYFINDER_LABELS = [
  'wayfinder:map',
  'wayfinder:research',
  'wayfinder:prototype',
  'wayfinder:grilling',
  'wayfinder:task'
] as const;

export interface Task {
  id: string;
  name: string;
  description?: string;
  phase: TaskPhase;
  priority: TaskPriority;
  status: TaskStatus;
  featureId?: string;
  assignee?: string;
  estimatedHours?: number;
  actualHours?: number;
  createdAt?: string;
  updatedAt?: string;
  tags?: string[];
  dependencies?: string[];
  openItems?: string[];
  nextSteps?: string[];
  blockedReason?: string;
  // wayfinder
  decisionType?: DecisionType;
  parentMap?: string;
  decisionBlocks?: string[];
  // herdr runtime
  worktreePath?: string;
  agentRunId?: string;
  specification?: string;
  userStories?: string[];
  requirements?: string[];
  successCriteria?: string[];
  acceptanceCriteria?: string[];
}

export interface Feature {
  id: string;
  name: string;
  description?: string;
  phase: TaskPhase;
  status: 'draft' | 'in-review' | 'approved' | 'rejected' | 'superseded' | 'done';
  createdAt?: string;
  updatedAt?: string;
  specPath?: string;
}

export type IntegrationType = 'claude' | 'opencode' | 'vibe' | 'none';

export type RuntimeTool = 'herdr' | 'tmux' | 'none';
export interface RuntimeToolConfig { enabled: boolean; path?: string; version?: string; }
export interface RuntimeConfig {
  tools: { herdr?: RuntimeToolConfig; tmux?: RuntimeToolConfig };
  preferred: RuntimeTool;
  allowChoiceAtTrigger: boolean;
  lastUsed?: RuntimeTool;
}

export interface ProjectState {
  framework_version: string;
  last_updated: string;
  project_name: string;
  project_description: string;
  features: Feature[];
  tasks: Task[];
  decisionMaps?: DecisionMap[];
  agentRuns?: AgentRun[];
  stats: {
    total_features: number;
    by_phase: Record<string, number>;
  };
  framework_config: {
    phases: { id: number; name: string }[];
    gates: { id: number; name: string; phase: number }[];
    agent_roles: Record<string, string>;
  };
  integration?: IntegrationType;
  runtime?: RuntimeConfig;
}

export const TASK_STATUSES: TaskStatus[] = ['pending', 'ready-for-dev', 'in-progress', 'completed', 'blocked', 'cancelled'];
export const STATUS_COLUMNS: { id: TaskStatus; label: string; color: string }[] = [
  { id: 'pending', label: 'Pending', color: '#9ca3af' },
  { id: 'ready-for-dev', label: 'Ready for Dev', color: '#8b5cf6' },
  { id: 'in-progress', label: 'In Progress', color: '#3b82f6' },
  { id: 'blocked', label: 'Blocked', color: '#ef4444' },
  { id: 'completed', label: 'Completed', color: '#10b981' },
  { id: 'cancelled', label: 'Cancelled', color: '#6b7280' }
];

export const PRIORITY_ORDER: Record<TaskPriority, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3
};
