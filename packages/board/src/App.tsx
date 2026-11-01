import React, { useState, useEffect } from 'react';
import { TaskTile } from './TaskTile.js';
import { TaskDrawer, type TransitionAction } from './TaskDrawer.js';
import { Task, TaskStatus } from './types.js';

const COLUMNS: { id: TaskStatus; label: string; color: string }[] = [
  { id: 'pending', label: 'Pending', color: '#9ca3af' },
  { id: 'in-progress', label: 'In Progress', color: '#3b82f6' },
  { id: 'blocked', label: 'Blocked', color: '#ef4444' },
  { id: 'completed', label: 'Completed', color: '#10b981' },
  { id: 'cancelled', label: 'Cancelled', color: '#6b7280' }
];

const SAMPLE: Task[] = [
  { id: 't1', name: 'Set up project repository', phase: 0, priority: 'high', status: 'completed', openItems: [], nextSteps: [] },
  { id: 't2', name: 'Implement domain entities', phase: 1, priority: 'high', status: 'in-progress', openItems: ['Validate invariants'], nextSteps: ['Add unit tests'] },
  { id: 't3', name: 'Build SwiftUI views', phase: 2, priority: 'medium', status: 'pending', openItems: [], nextSteps: ['Design system first'] },
  { id: 't4', name: 'Wire data persistence', phase: 3, priority: 'high', status: 'blocked', blockedReason: 'Waiting for schema review', openItems: ['Schema review'], nextSteps: ['Unblock after review'] },
  { id: 't5', name: 'Write integration tests', phase: 4, priority: 'medium', status: 'pending', openItems: [], nextSteps: [] }
];

export function App(): React.ReactElement {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<{message: string, type: 'info' | 'success' | 'error'} | null>(null);

  useEffect(() => {
    const load = () => {
      fetch('/tasks.json')
        .then(r => r.json())
        .then((data: Task[]) => { setTasks(Array.isArray(data)&&data.length?data:SAMPLE); setLoading(false); })
        .catch(() => { setTasks(SAMPLE); setLoading(false); });
    };
    load();
    // Poll every 5 seconds for agent updates
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  // Support ?task=ID in URL to open drawer
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const taskId = params.get('task');
    if (taskId && tasks.length) {
      const t = tasks.find(t => t.id === taskId);
      if (t) setSelected(t);
    }
  }, [tasks]);

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const [terminalVisible, setTerminalVisible] = useState(false);
  const [terminalContent, setTerminalContent] = useState<string[]>([]);
  const [currentSession, setCurrentSession] = useState<string | null>(null);

  const handleAction = async (id: string, action: any) => {
    try {
      setNotification({ message: `Triggering ${action} on task ${id}...`, type: 'info' });
      const res = await fetch('/api/transition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action })
      });
      if (res.ok) {
        const { task: updated } = await res.json();
        setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updated } : t));
        if (selected?.id === id) setSelected(prev => prev ? { ...prev, ...updated } : null);
        setNotification({ message: `Agent triggered for: ${action}`, type: 'success' });
        // Show terminal overlay with agent info
        setTerminalContent([
          `> Agent Session Started (${new Date().toLocaleTimeString()})`,
          `> Action: ${action}`,
          `> Task: ${updated.name || id}`,
          `> Phase: ${updated.phase || 'unknown'}`,
          `> Status: ${updated.status || 'unknown'}`,
          `>`,
          `> Agent output will appear in OpenCode window...`,
          `> Prompt saved to: .pocket-dev/prompt-${id}-*.md`
        ]);
        setCurrentSession(`agent-${id}-${Date.now()}`);
        setTerminalVisible(true);
      } else {
        const err = await res.json();
        console.error('Transition failed:', err);
        setNotification({ message: `Failed to trigger: ${err.error || 'Unknown error'}`, type: 'error' });
      }
    } catch (e) {
      console.error('Transition error:', e);
      setNotification({ message: `Error: ${e instanceof Error ? e.message : String(e)}`, type: 'error' });
    }
  };

  if (loading) return <div className="app"><p>Loading...</p></div>;

  return (
    <div className="app">
      <header>
        <h1>Pocket Dev Agile Board</h1>
        <p>{tasks.length} tasks · Click a tile for details and actions</p>
      </header>
      {notification && (
        <div className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      )}
      {terminalVisible && (
        <div className="terminal-overlay">
          <div className="terminal-header">
            <h3>Agent Terminal</h3>
            <button className="close" onClick={() => setTerminalVisible(false)}>✕</button>
          </div>
          <div className="terminal-body">
            {terminalContent.map((line, i) => (
              <div key={i} className="terminal-line">{line}</div>
            ))}
          </div>
        </div>
      )}
      <div className="board">
        {COLUMNS.map(col => (
          <div className="column" key={col.id}>
            <h2 style={{ color: col.color }}>
              {col.label} <span className="count">{tasks.filter(t => t.status === col.id).length}</span>
            </h2>
            {tasks.filter(t => t.status === col.id).length === 0 && <div className="empty">No tasks</div>}
            {tasks.filter(t => t.status === col.id).map(t => (
              <TaskTile key={t.id} task={t} onOpen={(tk) => setSelected(tk)} onAction={handleAction} />
            ))}
          </div>
        ))}
      </div>
      {selected && (
        <TaskDrawer task={selected} onClose={() => setSelected(null)} onAction={handleAction} />
      )}
    </div>
  );
}
