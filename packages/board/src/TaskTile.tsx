import { Task, TaskStatus } from "./types.js";
import React from 'react';
import { TransitionAction } from './TaskDrawer.js';

const ACTIONS: Record<TaskStatus, { label: string; action: TransitionAction; cls?: string }[]> = {
  'pending': [{ label: 'Start', action: 'start' }],
  'in-progress': [{ label: 'Complete', action: 'complete' }, { label: 'Block', action: 'block', cls: 'danger' }, { label: 'Continue', action: 'continue' }],
  'blocked': [{ label: 'Unblock', action: 'unblock' }, { label: 'Cancel', action: 'cancel', cls: 'secondary' }],
  'completed': [{ label: 'Reopen', action: 'reopen', cls: 'secondary' }],
  'cancelled': [{ label: 'Reopen', action: 'reopen', cls: 'secondary' }]
};

export function TaskTile({ task, onOpen, onAction }: { task: Task; onOpen: (t: Task) => void; onAction: (id: string, action: TransitionAction) => void; }): React.ReactElement {
  const actions = ACTIONS[task.status] ?? [];
  return (
    <div className="tile" onClick={() => onOpen(task)}>
      <div className="title">{task.name}</div>
      <div className="meta">
        <span className={`badge priority-${task.priority}`}>{task.priority}</span>
        {task.openItems && task.openItems.length > 0 && <span className="badge" style={{ background: '#7c2d12', color: '#fed7aa' }}>{task.openItems.length} open</span>}
      </div>
      <div className="actions" onClick={e => e.stopPropagation()}>
        {actions.map(a => (
          <button key={a.label} className={a.cls ?? ''} onClick={() => onAction(task.id, a.action)}>{a.label}</button>
        ))}
        <button className="secondary" onClick={() => onOpen(task)}>Details</button>
      </div>
    </div>
  );
}
