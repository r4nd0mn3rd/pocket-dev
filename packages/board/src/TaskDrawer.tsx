import { Task, TaskStatus } from "./types.js";
import React, { useState } from 'react';

export type TransitionAction = 'start' | 'start-dev' | 'continue' | 'complete' | 'review' | 'block' | 'unblock' | 'reopen' | 'cancel';

interface Props {
  task: Task;
  onClose: () => void;
  onAction: (id: string, action: TransitionAction) => void;
  onTaskUpdate?: (task: Task) => void;
}

export function TaskDrawer({ task, onClose, onAction, onTaskUpdate }: Props): React.ReactElement {
  const ACTIONS: Record<TaskStatus, { label: string; action: TransitionAction; cls?: string }[]> = {
    'pending': [{ label: 'Start', action: 'start' }],
    'ready-for-dev': [{ label: 'Start Dev', action: 'start-dev' }],
    'in-progress': [{ label: 'Complete', action: 'complete' }, { label: 'Review', action: 'review', cls: 'secondary' }, { label: 'Block', action: 'block', cls: 'danger' }, { label: 'Continue', action: 'continue' }],
    'blocked': [{ label: 'Unblock', action: 'unblock' }, { label: 'Cancel', action: 'cancel', cls: 'secondary' }],
    'completed': [{ label: 'Reopen', action: 'reopen', cls: 'secondary' }],
    'cancelled': [{ label: 'Reopen', action: 'reopen', cls: 'secondary' }]
  };
  const actions = ACTIONS[task.status] ?? [];

  const [editing, setEditing] = useState(false);
  const [spec, setSpec] = useState(task.specification ?? '');
  const [success, setSuccess] = useState((task.successCriteria ?? []).join('\n'));
  const [acceptance, setAcceptance] = useState((task.acceptanceCriteria ?? []).join('\n'));
  const [saving, setSaving] = useState(false);
  const [overlayText, setOverlayText] = useState<string | null>(null);

  const save = async () => {
    setSaving(true);
    try {
      const changes = {
        specification: spec,
        successCriteria: success.split('\n').map((s: string) => s.trim()).filter(Boolean),
        acceptanceCriteria: acceptance.split('\n').map((s: string) => s.trim()).filter(Boolean)
      };
      const res = await fetch('/api/task/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: task.id, changes })
      });
      if (res.ok) {
        const { task: updated } = await res.json();
        onTaskUpdate && onTaskUpdate(updated);
        setEditing(false);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
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
        <div className="label">Specification</div>
        {editing ? <textarea value={spec} onChange={e => setSpec(e.target.value)} rows={4} style={{ width: '100%' }} /> : <div className="value" style={{ whiteSpace: 'pre-wrap' }}>{task.specification || '—'}</div>}
      </div>
      <div className="row">
        <div className="label">Success Criteria</div>
        {editing ? <textarea value={success} onChange={e => setSuccess(e.target.value)} rows={4} style={{ width: '100%' }} /> : (
          <ul>{(task.successCriteria && task.successCriteria.length ? task.successCriteria : ['—']).map((x: string, i: number) => <li key={i}>{x}</li>)}</ul>
        )}
      </div>
      <div className="row">
        <div className="label">Acceptance Criteria</div>
        {editing ? <textarea value={acceptance} onChange={e => setAcceptance(e.target.value)} rows={4} style={{ width: '100%' }} /> : (
          <ul>{(task.acceptanceCriteria && task.acceptanceCriteria.length ? task.acceptanceCriteria : ['—']).map((x: string, i: number) => <li key={i}>{x}</li>)}</ul>
        )}
      </div>

      <div className="row">
        <div className="label">Actions</div>
        <div className="actions">
          {editing ? (
            <button onClick={save} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
          ) : (
            <button onClick={() => setEditing(true)} className="secondary">Edit Spec</button>
          )}
          {actions.map(a => (
            <button key={a.label} className={a.cls ?? ''} onClick={() => onAction(task.id, a.action)}>{a.label}</button>
          ))}
        </div>
      </div>
    </div>
    {overlayText && (
      <div className="modal-overlay" onClick={() => setOverlayText(null)}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
          <button className="close" onClick={() => setOverlayText(null)}>✕</button>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: 13 }}>{overlayText}</pre>
        </div>
      </div>
    )}
    </>
  );
}
