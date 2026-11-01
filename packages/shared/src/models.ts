export type TaskStatus = 'pending' | 'ready-for-dev' | 'in-progress' | 'completed' | 'blocked' | 'cancelled';
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low';
export type TaskPhase = 0 | 1 | 2 | 3 | 4 | 5;

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
  specification?: string;
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

export interface ProjectState {
  framework_version: string;
  last_updated: string;
  project_name: string;
  project_description: string;
  features: Feature[];
  tasks: Task[];
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
