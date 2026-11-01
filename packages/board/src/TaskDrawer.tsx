import { Task, TaskStatus } from "./types.js";
import React from 'react';

export type TransitionAction = 'start' | 'continue' | 'complete' | 'block' | 'unblock' | 'reopen' | 'cancel';

export function TaskDrawer({ task, onClose, onAction }: { task: Task; onClose: () => void; onAction: (id: string, action: TransitionAction) => void; }): React.ReactElement {
  const ACTIONS: Record<TaskStatus, { label: string; action: TransitionAction; cls?: string }[]> = {
    'pending': [{ label: 'Start', action: 'start' }],
    'in-progress': [{ label: 'Complete', action: 'complete' }, { label: 'Block', action: 'block', cls: 'danger' }, { label: 'Continue', action: 'continue' }],
    'blocked': [{ label: 'Unblock', action: 'unblock' }, { label: 'Cancel', action: 'cancel', cls: 'secondary' }],
    'completed': [{ label: 'Reopen', action: 'reopen', cls: 'secondary' }],
    'cancelled': [{ label: 'Reopen', action: 'reopen', cls: 'secondary' }]
  };
  const actions = ACTIONS[task.status] ?? [];
  return (
    <div className="drawer">
      <button className="close" onClick={onClose}>✕</button>
      <h2>{task.name}</h2>
      {task.description && <div className="row"><div className="label">Description</div><div className="value">{task.description}</div></div>}
      <div className="row"><div className="label">Status</div><div className="value">{task.status}</div></div>
      <div className="row"><div className="label">Priority</div><div className="value">{task.priority}</div></div>
      <div className="row"><div className="label">Phase</div><div className="value">{task.phase}</div></div>
      {task.estimatedHours != null && <div className="row"><div className="label">Estimated</div><div className="value">{task.estimatedHours}h</div></div>}
      {task.openItems && task.openItems.length > 0 && (
        <div className="row">
          <div className="label">Open Items</div>
          <ul>{task.openItems.map((o, i) => <li key={i}>{o}</li>)}</ul>
        </div>
      )}
      {task.nextSteps && task.nextSteps.length > 0 && (
        <div className="row">
          <div className="label">Next Steps</div>
          <ul>{task.nextSteps.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </div>
      )}
      {task.blockedReason && (
        <div className="row"><div className="label">Blocked Reason</div><div className="value" style={{ color: '#fca5a5' }}>{task.blockedReason}</div></div>
      )}
      <div className="row">
        <div className="label">Actions</div>
        <div className="actions">
          {actions.map(a => (
            <button key={a.label} className={a.cls ?? ''} onClick={() => onAction(task.id, a.action)}>{a.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
