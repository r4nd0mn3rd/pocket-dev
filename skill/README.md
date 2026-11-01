# Pocket Dev Framework Manager Skill

> **Skill Name**: `pocket-dev-framework-manager`  
> **Version**: 1.0.0  
> **Framework Version**: 1.0.0  
> **Status**: Ready for Use  

---

## Overview

The **Pocket Dev Framework Manager Skill** is an **interactive AI assistant** that helps you manage your **Pocket Dev project development** using the **Solo Agent Development Framework**. It provides a **Jira-like task board**, **project status overview**, **task resumption**, and **framework-guided progression** through all 6 phases of development.

---

## What This Skill Does

### ✅ Core Features

1. **📊 Project Status Overview**
   - Displays all your features/tasks in a **Kanban-style board**
   - Shows **current phase and gate status** for each feature
   - Groups features by: Backlog, Discovery, Specification, Design, Implementation, Verification, Done
   - Provides **quick statistics** (total features, distribution by phase)

2. **🎯 Task Board Navigation**
   - **List all tasks** with their status
   - **Select specific tasks** by ID or name
   - **Filter tasks** by phase, priority, or status
   - **Search tasks** by keyword

3. **🔄 Task Resumption**
   - **Save your progress** automatically when switching tasks
   - **Resume exactly where you left off** (section, item, action)
   - **Restore full context** (last inputs, agent role, position)
   - **Maintain state** across sessions

4. **🤖 Agent Role Following**
   - **Automatically assumes** the correct agent role based on phase:
     - **Phases 0-2**: Specification Agent
     - **Phase 3**: Design Agent
     - **Phase 4**: Implementation Agent
     - **Phase 5**: Verification Agent
   - **Follows framework principles** (Constitution Principles I-X)
   - **Provides context-aware guidance** based on current phase

5. **📋 Status Updates & Guidance**
   - **Shows current progress** within each task
   - **Identifies missing items** (requirements, tests, documentation)
   - **Suggests next steps** in the framework
   - **Validates against checklists** before gate submission

6. **✨ Intelligent Progression**
   - **Asks for confirmation** when task is complete
   - **Guides you to next step** in the framework
   - **Options to go back** to overview or continue
   - **Prevents skipping gates** (enforces Constitution Principle VI)

---

## Quick Start

### Installation

1. **Place the skill file** in your Vibe/OpenCode skills directory:
   ```bash
   # For Vibe CLI
   mkdir -p ~/.vibe/skills/pocket-dev-framework-manager/
   cp pocket-dev/framework/skill/SKILL.md ~/.vibe/skills/pocket-dev-framework-manager/
   
   # For OpenCode
   mkdir -p ~/.opencode/skills/pocket-dev-framework-manager/
   cp pocket-dev/framework/skill/SKILL.md ~/.opencode/skills/pocket-dev-framework-manager/
   ```

2. **Ensure framework directory structure** exists:
   ```bash
   mkdir -p "pocket-dev/.pocket-dev/{state,tasks,sessions}"
   touch "pocket-dev/.pocket-dev/state.json"
   ```

3. **Initialize project state** (optional - will be created automatically):
   ```bash
   cat > "pocket-dev/.pocket-dev/state.json" << 'EOF'
   {
     "framework_version": "1.0.0",
     "last_updated": "",
     "features": [],
     "stats": {
       "total_features": 0,
       "by_phase": {"0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "done": 0}
     }
   }
   EOF
   ```

---

### Usage Examples

#### 1. Show Project Overview

**You**: `"Show me the framework status"`  
**Skill**: Displays complete project board with all features and their status

```
Framework Board - Pocket Dev
============================

📥 BACKLOG (Phase 0: Ideation)
┌─────────────────────────────────────┐
│ FEA-20261030-001 │ Calendar Widget  │ P1
│ FEA-20261030-002 │ News Widget       │ P2
└─────────────────────────────────────┘

🔍 DISCOVERY (Phase 1)
┌─────────────────────────────────────┐
│ FEA-20261029-001 │ Weather Widget    │ P1
└─────────────────────────────────────┘

📋 SPECIFICATION (Phase 2)
┌─────────────────────────────────────┐
│ FEA-20261028-001 │ Health Data       │ P1
└─────────────────────────────────────┘

... (other phases)

Actions: [1] Select task | [2] Show details | [3] Exit
> What would you like to do?
```

#### 2. Select a Task

**You**: `"Select task FEA-20261029-001"` or `"Select task 1"`  
**Skill**: Shows task details and prompts for action

```
Feature: FEA-20261029-001 - Weather Widget
=============================================

Phase: 2 - Specification
Gate: Gate 2 - Specification Approved
Status: ⏳ In Progress (75% complete)
Priority: P1

Current Deliverables:
✅ Idea Document (idea.md)
✅ Research Findings (research.md)
⏳ Feature Specification (spec.md) - 75% complete
❌ Design Document (design.md)

Last Activity: Working on acceptance scenarios
Last Updated: 2026-10-29 14:30

Next Steps:
1. Complete acceptance scenarios for US1
2. Define edge cases
3. Submit for Gate 2 review

Actions: [1] Resume work | [2] Show spec | [3] Next step | [4] Back
> What would you like to do?
```

#### 3. Resume a Task

**You**: `"Resume work"` or `"Resume task FEA-20261029-001"`  
**Skill**: Restores your session and continues where you left off

```
Resuming: FEA-20261029-001 - Weather Widget
============================================

Phase: 2 - Specification
Last Position: Working on US1-SC3 (Acceptance Scenario 3)
Last Action: Defined Given/When for US1-SC2

Current Section:
```
**US1-SC3**: Display weather with temperature
- Given: User has granted location permission
- When: Weather data is available
- Then: [INCOMPLETE]
- Priority: P1
```

[Specification Agent] Complete the Then condition:
What should happen when weather data is available?
> 
```

#### 4. Move to Next Step

**You**: `"Next step"`  
**Skill**: Validates current task and guides to next

```
[Specification Agent] Checking current task status...

✅ All user stories have acceptance scenarios
✅ All functional requirements are defined
✅ Edge cases are documented
✅ Success criteria are measurable
❌ Open Questions section is NOT empty (1 question remaining)

This task cannot proceed to Gate 2 yet.

Open Question:
- Q-001: Should we use Celsius or Fahrenheit as default?
  Options: Celsius (recommended), Fahrenheit

Would you like to:
1. Answer this question now
2. Continue working on the spec
3. Ignore and proceed anyway (not recommended)

[1] / [2] / [3]
```

#### 5. Complete a Task

**You**: `"Task done"` or `"Mark complete"`  
**Skill**: Validates and confirms completion

```
[Specification Agent] Verifying Gate 2 requirements...

✅ All user stories have acceptance scenarios
✅ All functional requirements are defined
✅ Edge cases are documented
✅ Success criteria are measurable
✅ Open Questions section is empty
✅ All checklist items are complete

✅ Task FEA-20261029-001 is ready for Gate 2!

Would you like to:
1. Submit for Gate 2 review
2. Start Phase 3: Design now
3. Return to overview board

[1] / [2] / [3]
```

#### 6. Return to Overview

**You**: `"Back to overview"` or `"Show board"`  
**Skill**: Saves progress and returns to project board

```
[Framework Manager] Saving current session...
✅ Progress saved for FEA-20261029-001

Framework Board - Pocket Dev
============================
[... board display ...]

Actions: [1] Select task | [2] Show details | [3] Exit
> What would you like to do?
```

---

## Commands Reference

### 📊 Overview Commands

| Command | Aliases | Description |
|---------|---------|-------------|
| `show framework status` | `project status`, `show my tasks`, `framework overview`, `status overview`, `what's the status`, `show the board` | Display complete project board |

### 🎯 Task Selection Commands

| Command | Aliases | Description |
|---------|---------|-------------|
| `select task [ID/Name]` | `resume task [ID]`, `go to task [ID]`, `open task [ID]`, `work on task [ID]`, `start task [ID]`, `switch to task [ID]`, `task [ID]` | Select a specific task |
| `select task [Number]` | `task [Number]` | Select task by list position |

### ✏️ Task Action Commands

| Command | Aliases | Description |
|---------|---------|-------------|
| `resume work` | `resume`, `resume task`, `continue work`, `continue`, `continue task` | Resume current task |
| `next step` | `what's next`, `next task`, `next phase`, `continue to next`, `go to next`, `proceed` | Move to next step in framework |
| `back to overview` | `show board again`, `return to board`, `back to status`, `back to tasks`, `show tasks` | Return to project board |

### ✅ Completion Commands

| Command | Aliases | Description |
|---------|---------|-------------|
| `task done` | `task complete`, `finished`, `completed`, `I'm done`, `done with task`, `mark complete`, `task finished` | Mark current task as complete |

### 🆘 Help Commands

| Command | Description |
|---------|-------------|
| `help` | Show available commands |
| `what can I do` | Show available actions in current context |
| `explain` | Explain current state and options |

---

## Agent Roles & Behavior

The skill **automatically assumes** the appropriate agent role based on the **current phase** of the selected task:

| Phase | Agent Role | Responsibilities |
|-------|-------------|------------------|
| 0 (Ideation) | Specification Agent | Refine ideas, assess feasibility, create idea documents |
| 1 (Discovery) | Specification Agent | Conduct research, identify constraints, assess risks |
| 2 (Specification) | Specification Agent | Create user stories, define requirements, document edge cases |
| 3 (Design) | Design Agent | Design architecture, define modules, create data models |
| 4 (Implementation) | Implementation Agent | Write code, write tests, review code quality |
| 5 (Verification) | Verification Agent | Run tests, verify criteria, review documentation |

Each agent **follows its specific instructions** from the framework and **enforces the Constitution principles**.

---

## Framework Integration

This skill **fully integrates** with the Pocket Dev Solo Agent Development Framework:

### ✅ Enforced Principles

| Principle | How Enforced |
|-----------|--------------|
| **I. Solo Developer + Agents Autonomy** | Skill enables agent-led task execution |
| **II. Explicit, Tested Business Logic** | Agent verifies all requirements are testable |
| **III. Simplicity Over Abstraction** | Design Agent enforces "two uses" rule |
| **IV. Informed Decisions via Explicit Options** | Agent presents options with trade-offs |
| **V. Complete Specification Before Implementation** | Gate 2 must pass before Phase 3 |
| **VI. Quality Gates Are Mandatory** | Skill prevents skipping gates |
| **VII. Documentation Is Part of the Code** | Agent verifies documentation completeness |
| **VIII. Personal and Private Data** | Agent reminds of local-first principles |
| **IX. Local-First Architecture** | Agent suggests local-first solutions |
| **X. Observability and Trust** | Agent verifies data freshness requirements |

### ✅ Enforced Process

- **6 Phases**: Skill tracks current phase for each feature
- **6 Gates**: Skill verifies gate requirements before progression
- **Templates**: Skill references and validates against templates
- **Checklists**: Skill checks checklist items before gate submission

---

## Data Storage & State Management

### 📁 File Structure

```
pocket-dev/
├── .pocket-dev/
│   ├── state.json              # Project-wide state
│   ├── tasks/
│   │   └── [feature-id].json   # Task-specific data
│   └── sessions/
│       └── [session-id].json  # Session state for resumption
└── specs/
    └── [feature-id]/
        ├── idea.md
        ├── spec.md
        ├── design.md
        └── ...
```

### 📄 State File Format

**`state.json`** - Project-wide state:
```json
{
  "framework_version": "1.0.0",
  "last_updated": "2026-10-29T14:30:00Z",
  "features": [
    {
      "id": "FEA-20261029-001",
      "name": "Weather Widget",
      "phase": 2,
      "gate": 2,
      "status": "in_progress",
      "priority": "P1",
      "created": "2026-10-28T10:00:00Z",
      "updated": "2026-10-29T14:30:00Z",
      "deliverables": {
        "idea.md": {"status": "complete", "updated": "2026-10-28T12:00:00Z"},
        "spec.md": {"status": "in_progress", "progress": 75}
      },
      "next_steps": ["Complete acceptance scenarios", "Submit for Gate 2"],
      "assigned_agent": "spec-agent",
      "session_id": "sess_20261029_1430"
    }
  ],
  "stats": {
    "total_features": 3,
    "by_phase": {"0": 1, "1": 1, "2": 1, "3": 0, "4": 0, "5": 0, "done": 0}
  }
}
```

**`sessions/[session-id].json`** - Session state for resumption:
```json
{
  "session_id": "sess_20261029_1430",
  "feature_id": "FEA-20261029-001",
  "phase": 2,
  "last_position": {
    "section": "acceptance_scenarios",
    "item": "US1-SC3",
    "action": "defining_then_condition"
  },
  "context": {
    "current_user_story": "US1",
    "current_scenario": "US1-SC3",
    "agent_role": "spec-agent"
  },
  "saved_state": {
    "US1-SC3": {
      "given": "User has granted location permission",
      "when": "Weather data is available",
      "then": "",
      "priority": "P1"
    }
  }
}
```

### 🔄 Automatic State Updates

The skill **automatically updates** state when:
- A task is selected
- Work is resumed
- Progress is made
- A task is marked complete
- You return to overview
- A gate is passed

---

## Customization

### Adding Custom Triggers

Edit the `triggers` section in the SKILL.md frontmatter:

```yaml
triggers:
  - name: my_command
    patterns:
      - "my custom command"
      - "another way to say it"
    priority: 5
```

### Modifying Behavior

Edit the skill instructions to change:
- How tasks are displayed
- Agent behavior by phase
- Validation rules
- Completion criteria

### Adding Project-Specific Rules

Create a `project-config.json` in your project:
```json
{
  "custom_phases": [],
  "custom_gates": [],
  "custom_checklists": [],
  "custom_agents": []
}
```

---

## Troubleshooting

### ❌ Skill Not Triggering

**Symptoms**: Skill doesn't respond to commands

**Solutions**:
1. Check command matches a trigger pattern
2. Try rephrasing (e.g., "show framework status" instead of "status")
3. Say "help" to see available commands
4. Check skill is in correct directory
5. Verify skill file is valid YAML/Markdown

### ❌ State Not Loading

**Symptoms**: No features shown, or old data displayed

**Solutions**:
1. Check `.pocket-dev/state.json` exists
2. Verify JSON format is valid
3. Check file permissions
4. Manually refresh by selecting a task

### ❌ State Not Saving

**Symptoms**: Progress lost when switching tasks

**Solutions**:
1. Check `.pocket-dev/sessions/` directory exists
2. Verify write permissions
3. Check JSON format of session files
4. Manually trigger save by returning to overview

### ❌ Wrong Phase/Gate Displayed

**Symptoms**: Phase/gate doesn't match actual state

**Solutions**:
1. Check feature directory for actual phase
2. Verify gate status in checklists
3. Manually update state.json
4. Run "show framework status" to refresh

### ❌ Agent Not Following Role

**Symptoms**: Agent gives wrong guidance for phase

**Solutions**:
1. Check phase in state.json
2. Verify agent role mapping
3. Manually set correct phase
4. Restart the task

---

## Tips for Best Results

### ✅ Do This

1. **Use Feature IDs** - They're unique and precise
   - ✅ "Select task FEA-20261029-001"
   - ❌ "Select that weather thing"

2. **Let the Agent Guide You** - It knows the framework
   - ✅ Follow agent suggestions
   - ❌ Ignore agent guidance

3. **Complete One Thing at a Time** - Framework ensures quality
   - ✅ Finish current task before moving on
   - ❌ Jump between tasks without completing

4. **Use Resume Functionality** - Your progress is saved
   - ✅ "Back to overview" when interrupted
   - ✅ "Resume work" when returning
   - ❌ Close session without saving

5. **Validate Before Proceeding** - Check gate requirements
   - ✅ "Next step" to validate
   - ❌ Skip gates (prevented by skill)

### ❌ Don't Do This

1. **Vague Commands** - Be specific
   - ❌ "Work on the feature"
   - ✅ "Select task FEA-20261029-001"

2. **Skip Gates** - Framework prevents this, but don't try
   - ❌ "Just go to implementation"
   - ✅ "Next step" (follows framework)

3. **Ignore Agent Warnings** - They're there for a reason
   - ❌ "Mark complete anyway" (when requirements aren't met)
   - ✅ "Help me complete the missing items"

4. **Edit State Files Manually** - Let the skill handle it
   - ❌ Manually edit state.json
   - ✅ Use skill commands to update state

---

## Related Framework Documents

For more information about the framework:

- **📜 Constitution**: `pocket-dev/framework/00-constitution/constitution.md`
  - Core principles that govern all development

- **📋 Process Overview**: `pocket-dev/framework/02-methodology/process-overview.md`
  - Complete 6-phase, 6-gate development process

- **🎯 Gate Definitions**: `pocket-dev/framework/02-methodology/checkpoints/`
  - Detailed gate criteria and processes

- **💻 Swift Coding Standard**: `pocket-dev/framework/03-standards/swift/coding-standard.md`
  - Complete Swift coding conventions

- **📄 Templates**: `pocket-dev/framework/04-templates/`
  - Templates for all framework artifacts

- **✅ Checklists**: `pocket-dev/framework/05-checklists/`
  - Quality checklists for each phase and gate

- **🤖 Agent Instructions**: `pocket-dev/framework/06-automation/agents/`
  - Detailed instructions for each agent role

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-10-29 | Initial release. Full framework integration, task board, resumption, agent roles. |

---

## Support & Feedback

For issues or questions:

1. **Check this documentation** first
2. **Review the framework documents** listed above
3. **Ask the agent** for help using the framework's decision process
4. **Report bugs** or suggest improvements

---

## License

This skill is part of the **Pocket Dev Framework** and is provided for use with the Pocket Dev project. It follows the same **local-first, personal use** principles as the main project.

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│          Pocket Dev Framework Skill                   │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  📊 OVERVIEW                                                 │
│     show framework status                                    │
│     project status                                            │
│     show my tasks                                             │
│                                                               │
│  🎯 SELECT TASK                                              │
│     select task [ID/Name]                                     │
│     resume task [ID]                                          │
│     go to task [ID]                                           │
│     task [Number]                                             │
│                                                               │
│  ✏️  TASK ACTIONS                                            │
│     resume work                                               │
│     next step                                                │
│     task done                                                 │
│                                                               │
│  🔙 NAVIGATION                                               │
│     back to overview                                          │
│     show board                                                │
│     help                                                      │
│                                                               │
│  📊 PHASES: 0-Ideation | 1-Discovery | 2-Spec | 3-Design  │
│               | 4-Impl | 5-Verification | Done            │
│                                                               │
│  🤖 AGENTS: Spec (0-2) | Design (3) | Impl (4) | Verify (5)│
│                                                               │
└─────────────────────────────────────────────────────────────┘
```
