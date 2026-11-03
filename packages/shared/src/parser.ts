import { Task, Feature, ProjectState, TaskStatus, TaskPriority, TaskPhase } from './models.js';

export function parseStateJson(raw: string): ProjectState {
  const data = JSON.parse(raw);
  const tasks: Task[] = (data.tasks ?? []).map(normalizeTask);
  const features: Feature[] = (data.features ?? []).map(normalizeFeature);
  return {
    framework_version: data.framework_version ?? '1.0.0',
    last_updated: data.last_updated ?? '',
    project_name: data.project_name ?? '',
    project_description: data.project_description ?? '',
    features,
    tasks,
    decisionMaps: data.decisionMaps ?? [],
    agentRuns: data.agentRuns ?? [],
    stats: data.stats ?? { total_features: features.length, by_phase: {} },
    framework_config: data.framework_config ?? { phases: [], gates: [], agent_roles: {} },
    integration: data.integration
  };
}

function normalizeTask(t: any): Task {
  return {
    id: t.id ?? t.task_id ?? `task-${Math.random().toString(36).slice(2, 8)}`,
    name: t.name ?? t.task_name ?? 'Unnamed task',
    description: t.description,
    phase: (t.phase ?? t.phase_id ?? 0) as TaskPhase,
    priority: (t.priority ?? 'medium') as TaskPriority,
    status: normalizeStatus(t.status),
    featureId: t.featureId ?? t.feature_id,
    assignee: t.assignee,
    estimatedHours: t.estimatedHours ?? t.estimated_hours,
    actualHours: t.actualHours ?? t.actual_hours,
    createdAt: t.createdAt ?? t.created_at,
    updatedAt: t.updatedAt ?? t.updated_at,
    tags: t.tags ?? [],
    dependencies: t.dependencies ?? [],
    openItems: t.openItems ?? t.open_items ?? [],
    nextSteps: t.nextSteps ?? t.next_steps ?? [],
    blockedReason: t.blockedReason ?? t.blocked_reason,
    specification: t.specification,
    userStories: t.userStories,
    requirements: t.requirements,
    successCriteria: t.successCriteria,
    acceptanceCriteria: t.acceptanceCriteria
  };
}

function normalizeFeature(f: any): Feature {
  return {
    id: f.id ?? f.feature_id ?? `feat-${Math.random().toString(36).slice(2, 8)}`,
    name: f.name ?? f.feature_name ?? 'Unnamed feature',
    description: f.description,
    phase: (f.phase ?? f.phase_id ?? 0) as TaskPhase,
    status: f.status ?? 'draft',
    createdAt: f.createdAt ?? f.created_at,
    updatedAt: f.updatedAt ?? f.updated_at,
    specPath: f.specPath ?? f.spec_path
  };
}

function normalizeStatus(s: any): TaskStatus {
  if (!s) return 'pending';
  const v = String(s).toLowerCase().replace(/[\s_]+/g, '-');
  const map: Record<string, TaskStatus> = {
    'pending': 'pending',
    'todo': 'pending',
    'not-started': 'pending',
    'in-progress': 'in-progress',
    'inprogress': 'in-progress',
    'active': 'in-progress',
    'completed': 'completed',
    'done': 'completed',
    'blocked': 'blocked',
    'cancelled': 'cancelled',
    'canceled': 'cancelled'
  };
  return map[v] ?? 'pending';
}

export function stateToJson(state: ProjectState): string {
  return JSON.stringify(state, null, 2);
}
