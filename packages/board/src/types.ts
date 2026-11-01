export type TaskStatus = 'pending' | 'ready-for-dev' | 'in-progress' | 'completed' | 'blocked' | 'cancelled';
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low';

export interface Task {
  id: string;
  name: string;
  description?: string;
  phase: number;
  priority: TaskPriority;
  status: TaskStatus;
  tags?: string[];
  openItems?: string[];
  nextSteps?: string[];
  blockedReason?: string;
  estimatedHours?: number;
  actualHours?: number;
  specification?: string;
  successCriteria?: string[];
  acceptanceCriteria?: string[];
}
