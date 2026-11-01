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

> **Default action**: When invoked via `/pocket-dev`, the agile board is served automatically.

```bash
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
1. Use `pocket-dev` CLI for status, validation, and the agile board.
2. Show status/board; create new idea; select/resume/browse task; next step; mark complete; back to overview.
3. Always guide the user on the current step, assume the correct agent role by phase, and save state after changes.
4. Keep the UI simple: render a compact board and offer numbered actions.

Examples use the Pocket Dev suite and theoretical features only.
