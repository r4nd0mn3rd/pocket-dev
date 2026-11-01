import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Check if AGENTS.md requires human interaction for a given phase
 * @param root - Project root directory
 * @param phase - Phase number (0-5)
 * @returns true if human interaction is required, false otherwise
 */
export function requiresHumanInteraction(root: string, phase: number): boolean {
  // CRITICAL RULE: Phases 0-2 (Ideation, Discovery, Specification) ALWAYS require human interaction
  // This is a non-negotiable rule per the framework constitution
  if ([0, 1, 2].includes(phase)) {
    return true;
  }
  
  const agentsMdPath = join(root, 'AGENTS.md');
  
  // If AGENTS.md doesn't exist, no additional human interaction required for phases 3-5
  if (!existsSync(agentsMdPath)) {
    return false;
  }
  
  try {
    const content = readFileSync(agentsMdPath, 'utf8');
    
    // Check for explicit human interaction requirements for any phase
    const phaseRequirements = [
      /NEVER run ideation or specification without user/i,
      /Ideation and specification are always interactive with human/i,
      /A fresh project starts with showing status and asks for creating the idea/i,
      /Phase 0.*HUMAN-ONLY/i,
      /Phase 0.*interactive/i,
      /Phase 1.*interactive/i,
      /Phase 2.*interactive/i,
      /HUMAN-ONLY.*Ideation/i,
      /HUMAN-ONLY.*Specification/i,
      /requires human interaction/i,
      /MUST wait for human/i,
      /NEVER run.*without user/i,
      /ALWAYS INTERACTIVE/i
    ];
    
    // Check if any requirement is present
    const requiresInteraction = phaseRequirements.some(regex => regex.test(content));
    
    if (requiresInteraction) {
      return true;
    }
    
    // Check for specific phase mentions with human requirements
    if (phase === 0 && content.includes('Phase 0') && content.includes('human')) {
      return true;
    }
    if (phase === 1 && content.includes('Phase 1') && content.includes('human')) {
      return true;
    }
    if (phase === 2 && content.includes('Phase 2') && content.includes('human')) {
      return true;
    }
    
    // Check for CRITICAL RULE sections
    if (content.includes('**CRITICAL RULE**') || content.includes('**NON-NEGOTIABLE**')) {
      // More aggressive check for human interaction requirements
      const criticalRules = [
        /human interaction required/i,
        /interactive with human/i,
        /NEVER.*without user/i,
        /MUST.*human/i
      ];
      if (criticalRules.some(regex => regex.test(content))) {
        return true;
      }
    }
    
    return false;
  } catch {
    // If we can't read the file, allow auto-trigger (safe default)
    return false;
  }
}

/**
 * Check if project has any features in ideation phase
 * @param root - Project root directory
 * @returns true if there are features in ideation, false otherwise
 */
export function hasIdeationFeatures(root: string): boolean {
  const statePath = join(root, '.pocket-dev', 'state.json');
  
  if (!existsSync(statePath)) {
    return false;
  }
  
  try {
    const state = JSON.parse(readFileSync(statePath, 'utf8'));
    const features = state.features ?? [];
    const tasks = state.tasks ?? [];
    
    // Check for features in phase 0
    const ideationFeatures = features.some((f: any) => f.phase === 0);
    const ideationTasks = tasks.some((t: any) => t.phase === 0);
    
    return ideationFeatures || ideationTasks;
  } catch {
    return false;
  }
}

/**
 * Get the phase name from phase number
 * @param phase - Phase number (0-5)
 * @returns Phase name string
 */
export function getPhaseName(phase: number): string {
  const phaseNames = [
    'Ideation',
    'Discovery', 
    'Specification',
    'Design',
    'Implementation',
    'Verification'
  ];
  return phaseNames[phase] ?? `Phase ${phase}`;
}
