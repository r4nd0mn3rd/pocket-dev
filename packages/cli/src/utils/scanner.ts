import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { Feature, Task, TaskPhase, TaskPriority, TaskStatus } from '@pocket-dev/shared';
import { loadState, saveState } from './state.js';

type FeatureStatus = 'draft' | 'in-review' | 'approved' | 'rejected' | 'superseded' | 'done';

interface SpecFeature {
  id: string;
  name: string;
  description: string;
  phase: TaskPhase;
  status: FeatureStatus;
  specPath: string;
  tasks: Partial<Task>[];
}

/**
 * Extract feature information from idea.md
 */
function parseIdeaMarkdown(content: string, dir: string): Partial<Feature> | null {
  const idMatch = content.match(/^\s*Idea ID\s*:\s*(\S+)/mi);
  const featureIdMatch = content.match(/^\s*Feature ID\s*:\s*(\S+)/mi);
  const nameMatch = content.match(/^#\s+Idea:\s*(.+)$/m) || content.match(/^\s*Idea\s*:\s*(.+)$/mi);
  const statusMatch = content.match(/^\s*Status\s*:\s*(\S+)/mi);
  
  if (!nameMatch) return null;
  
  const name = nameMatch[1].trim();
  const phase: TaskPhase = 0; // ideation
  const rawStatus = statusMatch? statusMatch[1] : 'draft';
  const status = normalizeFeatureStatus(rawStatus);
  
  return {
    id: featureIdMatch? featureIdMatch[1] : idMatch? idMatch[1] : `feat-${name.toLowerCase().replace(/\s+/g, '-')}`,
    name,
    phase,
    status,
    specPath: dir
  };
}

function normalizeFeatureStatus(s: string): FeatureStatus {
  const v = String(s).toLowerCase().replace(/[\s_]+/g, '-');
  const map: Record<string, FeatureStatus> = {
    'draft': 'draft',
    'in-review': 'in-review',
    'inreview': 'in-review',
    'approved': 'approved',
    'rejected': 'rejected',
    'superseded': 'superseded',
    'done': 'done'
  };
  return map[v] ?? 'draft';
}

/**
 * Extract feature information from spec.md
 */
function parseSpecMarkdown(content: string, dir: string): Partial<Feature> | null {
  const idMatch = content.match(/^\s*Feature ID\s*:\s*(\S+)/mi);
  const nameMatch = content.match(/^#\s+Feature Specification:\s*(.+)$/m) || 
                    content.match(/^\s*Feature\s*:\s*(.+)$/mi);
  const statusMatch = content.match(/^\s*Status\s*:\s*(\S+)/mi);
  
  if (!nameMatch) return null;
  
  const name = nameMatch[1].trim();
  const phase: TaskPhase = 2; // specification
  const rawStatus = statusMatch? statusMatch[1] : 'draft';
  const status = normalizeFeatureStatus(rawStatus);
  
  return {
    id: idMatch? idMatch[1] : `feat-${name.toLowerCase().replace(/\s+/g, '-')}`,
    name,
    phase,
    status,
    specPath: dir
  };
}

/**
 * Extract tasks from tasks.md
 */
function parseTasksMarkdown(content: string): Partial<Task>[] {
  const tasks: Partial<Task>[] = [];
  const taskRegex = /^-\s*\[\s*\]\s*(T\d+):\s*(.+)$/gm;
  const taskRegex2 = /^-\s*\[\s*\]\s*(.+)$/gm;
  const taskRegex3 = /^\d+\.\s*(.+)$/gm;
  
  let match;
  const seenTasks = new Set<string>();
  
  // Try pattern: - [ ] T1: Task name
  while ((match = taskRegex.exec(content)) !== null) {
    const id = match[1];
    const name = match[2].trim();
    if (!seenTasks.has(id)) {
      seenTasks.add(id);
      tasks.push({
        id,
        name,
        phase: 0,
        status: 'pending',
        priority: 'medium'
      });
    }
  }
  
  // Try pattern: - [ ] Task description
  taskRegex2.lastIndex = 0;
  while ((match = taskRegex2.exec(content)) !== null) {
    const name = match[1].trim();
    if (name && !name.startsWith('T') && !name.startsWith('[')) {
      const existing = tasks.find(t => t.name === name);
      if (!existing) {
        tasks.push({
          name,
          phase: 0,
          status: 'pending',
          priority: 'medium'
        });
      }
    }
  }
  
  // Try pattern: 1. Task description
  taskRegex3.lastIndex = 0;
  while ((match = taskRegex3.exec(content)) !== null) {
    const name = match[1].trim();
    if (name) {
      const existing = tasks.find(t => t.name === name);
      if (!existing) {
        tasks.push({
          name,
          phase: 0,
          status: 'pending',
          priority: 'medium'
        });
      }
    }
  }
  
  return tasks;
}

/**
 * Extract tasks from plan.md
 */
function parsePlanMarkdown(content: string): Partial<Task>[] {
  const tasks: Partial<Task>[] = [];
  const taskRegex = /^\d+\.\s*(.+)$/gm;
  
  let match;
  while ((match = taskRegex.exec(content)) !== null) {
    const name = match[1].trim();
    if (name) {
      tasks.push({
        name,
        phase: 0,
        status: 'pending',
        priority: 'medium'
      });
    }
  }
  
  return tasks;
}

/**
 * Determine phase from gate checklists
 */
function getPhaseFromGates(root: string, featureId: string): TaskPhase {
  const gateDir = join(root, '.pocket-dev', '05-checklists');
  if (!existsSync(gateDir)) return 0;
  
  const gates = ['gate-00', 'gate-01', 'gate-02', 'gate-03', 'gate-04', 'gate-05'];
  let highestPhase: number = 0;
  
  for (const gate of gates) {
    const gateNum = parseInt(gate.split('-')[1]);
    const checklistPath = join(gateDir, `${gate}-checklist.md`);
    
    // Check if gate checklist exists and references this feature
    if (existsSync(checklistPath)) {
      try {
        const content = readFileSync(checklistPath, 'utf8');
        // Check for approval markers
        const approvalMatch = content.match(/All checklist items are \[x\]/i) ||
                             content.match(/Gate \d+ \w+ \w+ approved/i);
        if (approvalMatch) {
          // Phase maps to gate: gate-00 -> phase 0, gate-01 -> phase 1, etc.
          highestPhase = Math.max(highestPhase, gateNum);
        }
      } catch {
        // Ignore errors reading checklists
      }
    }
  }
  
  // If all gates 0-3 are passed, we're at phase 3 (Design)
  // But the next phase (Implementation) is phase 4
  // So if gates 0-3 are done, the feature is in phase 3 (Design complete)
  if (highestPhase >= 3) return 3;
  if (highestPhase >= 2) return 2;
  if (highestPhase >= 1) return 1;
  
  return highestPhase as TaskPhase;
}

/**
 * Scan all spec files in a feature directory
 */
function scanFeatureDirectory(featureDir: string, root: string): SpecFeature | null {
  const files = readdirSync(featureDir);
  let featureInfo: Partial<Feature> | null = null;
  const allTasks: Partial<Task>[] = [];
  let phase: TaskPhase = 0;
  
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = join(featureDir, file);
      try {
        const content = readFileSync(filePath, 'utf8');
        
        // Parse feature info from idea.md or spec.md
        if (file === 'idea.md' && !featureInfo) {
          featureInfo = parseIdeaMarkdown(content, featureDir);
        } else if (file === 'spec.md' && !featureInfo) {
          featureInfo = parseSpecMarkdown(content, featureDir);
        } else if (file === 'design.md' && !featureInfo) {
          featureInfo = {
            id: `feat-${basename(featureDir).toLowerCase().replace(/\s+/g, '-')}`,
            name: basename(featureDir),
            phase: 3, // design
            status: 'draft',
            specPath: featureDir
          };
        }
        
        // Parse tasks from tasks.md and plan.md
        if (file === 'tasks.md') {
          const tasks = parseTasksMarkdown(content);
          allTasks.push(...tasks);
        } else if (file === 'plan.md') {
          const tasks = parsePlanMarkdown(content);
          allTasks.push(...tasks);
        }
      } catch {
        // Ignore errors reading files
      }
    }
  }
  
  if (!featureInfo) {
    // Use directory name as feature name
    featureInfo = {
      id: `feat-${basename(featureDir).toLowerCase().replace(/\s+/g, '-')}`,
      name: basename(featureDir),
      phase: 0,
      status: 'draft',
      specPath: featureDir
    };
  }
  
  // Determine phase from gate checklists
  const featureId = featureInfo.id || `feat-${basename(featureDir).toLowerCase().replace(/\s+/g, '-')}`;
  phase = getPhaseFromGates(root, featureId);
  featureInfo.phase = phase;
  
  // Update task phases based on feature phase
  for (const task of allTasks) {
    task.phase = phase;
    task.featureId = featureId;
  }
  
  return {
    id: featureInfo.id || featureId,
    name: featureInfo.name || basename(featureDir),
    description: featureInfo.description || '',
    phase: featureInfo.phase,
    status: featureInfo.status || 'draft',
    specPath: featureInfo.specPath || featureDir,
    tasks: allTasks
  };
}

/**
 * Scan the specs directory for all features
 */
export function scanSpecs(root: string): { features: Feature[]; tasks: Task[] } {
  const specsDir = join(root, 'specs');
  if (!existsSync(specsDir)) {
    return { features: [], tasks: [] };
  }
  
  const entries = readdirSync(specsDir, { withFileTypes: true });
  const features: Feature[] = [];
  const tasks: Task[] = [];
  
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const featureDir = join(specsDir, entry.name);
      
      // Skip template directories and non-feature directories
      if (entry.name.startsWith('.') || entry.name === 'templates') continue;
      
      try {
        const specFeature = scanFeatureDirectory(featureDir, root);
        if (specFeature) {
          // Convert to Feature type
          const feature: Feature = {
            id: specFeature.id,
            name: specFeature.name,
            description: specFeature.description || '',
            phase: specFeature.phase,
            status: specFeature.status,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            specPath: specFeature.specPath
          };
          features.push(feature);
          
          // Convert tasks
          for (const taskData of specFeature.tasks) {
            const task: Task = {
              id: taskData.id || `task-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
              name: taskData.name || 'Unnamed task',
              description: taskData.description || '',
              phase: taskData.phase as TaskPhase,
              priority: (taskData.priority as TaskPriority) || 'medium',
              status: (taskData.status as TaskStatus) || 'pending',
              featureId: taskData.featureId || feature.id,
              assignee: taskData.assignee,
              estimatedHours: taskData.estimatedHours,
              actualHours: taskData.actualHours,
              createdAt: taskData.createdAt || new Date().toISOString(),
              updatedAt: taskData.updatedAt || new Date().toISOString(),
              tags: taskData.tags || [],
              dependencies: taskData.dependencies || [],
              openItems: taskData.openItems || [],
              nextSteps: taskData.nextSteps || [],
              blockedReason: taskData.blockedReason
            };
            tasks.push(task);
          }
        }
      } catch {
        // Ignore errors scanning feature directories
      }
    }
  }
  
  return { features, tasks };
}

/**
 * Update state.json by scanning specs directory
 */
export function updateStateFromSpecs(root: string): { featuresFound: number; tasksFound: number; updated: boolean } {
  const state = loadState(root);
  if (!state) {
    return { featuresFound: 0, tasksFound: 0, updated: false };
  }
  
  const { features, tasks } = scanSpecs(root);
  const hadFeatures = state.features.length > 0;
  const hadTasks = state.tasks.length > 0;
  
  if (features.length === 0 && tasks.length === 0) {
    return { featuresFound: 0, tasksFound: 0, updated: false };
  }
  
  // Only update if state is empty or we found new items
  const needsUpdate = (features.length > 0 && !hadFeatures) || 
                      (tasks.length > 0 && !hadTasks) ||
                      (features.length > state.features.length) ||
                      (tasks.length > state.tasks.length);
  
  if (needsUpdate) {
    state.features = features;
    state.tasks = tasks;
    
    // Update stats
    const byPhase: Record<string, number> = {};
    for (let i = 0; i <= 5; i++) {
      const phaseStr = String(i as TaskPhase);
      byPhase[phaseStr] = features.filter(f => f.phase === i).length + 
                          tasks.filter(t => t.phase === i).length;
    }
    byPhase['done'] = features.filter(f => f.status === 'done').length + 
                      tasks.filter(t => t.status === 'completed').length;
    
    state.stats = {
      total_features: features.length,
      by_phase: byPhase
    };
    
    saveState(root, state);
    return { featuresFound: features.length, tasksFound: tasks.length, updated: true };
  }
  
  return { featuresFound: features.length, tasksFound: tasks.length, updated: false };
}
