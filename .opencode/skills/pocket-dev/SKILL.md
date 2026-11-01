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
pocket-dev board --port <port> --open  (default 4173)
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
6. **ALWAYS create tests** and verify success before closing a ticket.
7. **ALWAYS update documentation** along with implementation changes.
8. **Run code-reviewer** before closing ticket - only close when code-reviewer has no objections.
9. Code-reviewer independently reviews implementation against specification, challenges approach, and recommends improvements.
10. Code-reviewer verifies documentation is in-line with implementation and writes code review comments.
11. Only close ticket when code-reviewer has no further objection.
12. Keep the UI simple: render a compact board and offer numbered actions.

Examples use the Pocket Dev suite and theoretical features only.

## Create New Spec — Step-by-Step Idea Completion (Phase 0)

When a user wants to create a new spec/idea, guide them **section by section** through `specs/[feature-id]/idea.md`, collecting human input for each field before writing. Do NOT auto-fill. Follow the same human-interaction requirement as Stages 0–3.

### Wizard Steps (ask one, wait, then next)

1. **Idea Name** — "What is the brief name for this idea?"
2. **Elevator Pitch** — "Describe the idea in 1–2 sentences (plain language, no tech)."
3. **Problem Statement** — "What problem does it solve? Who has it? Impact?"
4. **Proposed Solution** — "High-level what are we building? User experience?"
5. **Goals & Success Criteria** — "Primary goal and 1–3 success metrics."
6. **Scope** — "In scope items (bullets). Out of scope items."
7. **Assumptions & Dependencies** — "List assumptions and dependencies with categories."
8. **Alignment** — "How does this align with project goals and constitution?"
9. **Feasibility** — "Technical/resource/legal feasibility notes + rough effort."
10. **Risks** — "At least 3 risks with mitigation."
11. **Alternatives** — "At least 1 alternative and why not chosen."
12. **Open Questions** — "Must be EMPTY before Gate 0; resolve now."
13. **Decisions** — "Record any decisions made."
14. **Next Steps** — "What happens if approved (Phase 1 Discovery)."

After each answer, write/update the corresponding section in `specs/[feature-id]/idea.md` and confirm with the user before proceeding. Never move to Phase 1 until all required sections are complete and open questions resolved. Use `pocket-dev new-spec "<name>"` to scaffold the directory first.

### CLI Helper

- `pocket-dev new-spec "<Feature Name>"` creates `specs/[slug]/idea.md` from the template and `tasks/` directory.

## Enhanced Human Guidance for Phases 0–3 (Research + Challenge)

When running any Phase 0–3 task, the agent MUST go beyond simple questions and act as a critical partner. Follow these rules:

1. **Research-backed options**: For each decision, present 2–4 concrete options, each with:
   - A short description of what it means
   - Pros / Cons (table)
   - Any relevant research, references, or prior art
   Do not just accept the first idea.

2. **Multiple perspectives**: Challenge from at least these angles:
   - User experience / usability
   - Technical feasibility & complexity
   - Security & privacy
   - Performance & scalability
   - Maintainability & future extensibility
   - Cost / effort

3. **Functionality guarantee check**: Question whether the current spec guarantees the desired functionality:
   - Are acceptance criteria complete and testable?
   - Are edge cases and failure modes covered?
   - Is there a gap between stated goal and specified behavior?
   If gaps exist, explicitly list them.

4. **Suggest additions**: Propose concrete additions to the spec to make it more comprehensive (missing sections, missing requirements, missing tests, missing docs). Ask whether to add each.

5. **Gap triage**: When a gap is found, offer two choices:
   - **Address now** — extend current spec/idea immediately
   - **Defer** — create a follow-up ticket (new task) for later, recording it in tasks/open items
   Never silently skip a gap.

6. **Combinable options**: Allow the user to combine multiple options ("1 + 3"). When combined, re-evaluate pros/cons of the combination and note trade-offs.

7. **Always challenge**: Never assume the user's first answer is final. Ask "What would make this fail?" and "Who disagrees with this approach?" before closing a phase gate.

Apply these rules across Phase 0 ideation, Phase 1 discovery, Phase 2 specification, and Phase 3 design.
