import { Task, TaskStatus } from './models.js';

export type TransitionAction = 'start' | 'start-dev' | 'continue' | 'complete' | 'block' | 'unblock' | 'reopen' | 'cancel' | 'review';

export function availableActions(status: TaskStatus): TransitionAction[] {
  switch (status) {
    case 'pending': return ['start'];
    case 'ready-for-dev': return ['start-dev'];
    case 'in-progress': return ['continue', 'complete', 'block', 'review'];
    case 'blocked': return ['unblock', 'cancel'];
    case 'completed': return ['reopen'];
    case 'cancelled': return ['reopen'];
    default: return [];
  }
}

export function transition(task: Task, action: TransitionAction): Task {
  const now = new Date().toISOString();
  const next: Task = { ...task, updatedAt: now };
  switch (action) {
    case 'start':
      next.status = 'in-progress';
      break;
    case 'start-dev':
      next.status = 'in-progress';
      break;
    case 'continue':
      next.status = 'in-progress';
      break;
    case 'complete':
      next.status = 'completed';
      break;
    case 'review':
      next.status = 'in-progress';
      break;
    case 'block':
      next.status = 'blocked';
      break;
    case 'unblock':
      next.status = 'in-progress';
      break;
    case 'reopen':
      next.status = 'in-progress';
      break;
    case 'cancel':
      next.status = 'cancelled';
      break;
  }
  return next;
}

export function statusLabel(status: TaskStatus): string {
  return status.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
