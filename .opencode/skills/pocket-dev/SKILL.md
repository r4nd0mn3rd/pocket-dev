---
name: pocket-dev
description: |
  Manage project development using the Pocket Dev Solo Agent Development Framework.
  Provides project status overview, task board navigation, task resumption, and
  framework-guided progression through the 6-phase development process.

triggers:
  - name: overview
    patterns:
      - "pocket dev framework"
      - "show me the framework"
      - "show framework status"
      - "project status"
      - "show my tasks"
      - "show task board"
      - "framework overview"
      - "status overview"
      - "what's the status"
      - "show me the board"
    priority: 10
  - name: board
    patterns:
      - "pocket-dev"
      - "/pocket-dev"
    priority: 11

---

# Pocket Dev Framework Manager Skill

> **CRITICAL RULE**: Ideation and Specification phases MUST always be interactive with human.
> NEVER run ideation or specification without explicit human interaction.
> A fresh project MUST start by showing status and asking if user wants to create an idea.

## On Invocation via `/pocket-dev`

**FIRST**: Check if AGENTS.md exists and requires human interaction for Phase 0-2.
**SECOND**: Load project state and check if any features are in Phase 0 (Ideation).
**THIRD**:
- If NO features in Phase 0: Show status and ask: "No features in ideation. Would you like to create an idea?"
- If YES features in Phase 0: Proceed with normal workflow
- ALWAYS wait for human response before proceeding with Phase 0-2 tasks

## Behavior Rules

1. **Human Interaction Required for Phase 0-2**:
   - Ideation (Phase 0): MUST wait for human to create idea
   - Discovery (Phase 1): MUST wait for human guidance
   - Specification (Phase 2): MUST wait for human approval
   - Design (Phase 3+): May proceed with automation

2. **Fresh Project Start**:
   - Always show project status first
   - Always ask if user wants to create an idea
   - Never auto-start ideation

3. **Agent Role Assumption**:
   - Only assume agent roles for Phase 3-5 (Design, Implementation, Verification)
   - For Phase 0-2, require explicit human interaction

> **Default action**: When invoked via `/pocket-dev`:
> 1. Show project status
> 2. Check for features in ideation
> 3. Ask user if they want to create an idea (if none exist)
> 4. Wait for human confirmation before proceeding

```bash
# Use CLI for advanced operations
pocket-dev board --port 4173 --open
```

## Full Framework Usage

Load and follow the Solo Agent Development Framework (Pocket Dev). Read
constitution, methodology, templates, and standards. Use `pocket-dev` CLI for
status, validation, and the agile board.

State and artifacts live in this repository:
- Project state: `.pocket-dev/state.json`
- Task sessions: `.pocket-dev/sessions/`
- Task data: `.pocket-dev/tasks/`
- Feature specs: `specs/[feature-id]/`
- Framework docs: `.pocket-dev/00-constitution/`, `.pocket-dev/02-methodology/`, `.pocket-dev/04-templates/`, `.pocket-dev/05-checklists/`, `.pocket-dev/06-automation/agents/`

Behaviour:
1. **CHECK AGENTS.md FIRST**: If AGENTS.md exists and requires human interaction, follow those rules
2. Use `pocket-dev` CLI for status, validation, and the agile board.
3. Show status/board; create new idea; select/resume/browse task; next step; mark complete; back to overview.
4. **NEVER auto-start Phase 0-2 tasks** without human confirmation
5. Always guide the user on the current step, assume the correct agent role by phase (ONLY for Phase 3-5), and save state after changes.
6. Keep the UI simple: render a compact board and offer numbered actions.

Examples use the Pocket Dev suite and theoretical features only.
