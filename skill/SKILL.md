---
name: pocket-dev-framework-manager
description: |
  Manage Pocket Dev project development using the Solo Agent Development Framework.
  Provides project status overview, task board navigation, task resumption, and
  framework-guided progression through the 6-phase development process.

triggers:
  - name: overview
    patterns:
      - "pocket-dev framework"
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
    
  - name: task_navigation
    patterns:
      - "go to task"
      - "select task"
      - "resume task"
      - "continue task"
      - "work on task"
      - "start task"
      - "task [0-9]+"
      - "task [A-Za-z]+"
      - "open task"
      - "switch to task"
    priority: 9
    
  - name: next_step
    patterns:
      - "next step"
      - "what's next"
      - "next task"
      - "next phase"
      - "continue to next"
      - "go to next"
      - "proceed"
    priority: 8
    
  - name: back_to_overview
    patterns:
      - "back to overview"
      - "show board again"
      - "return to board"
      - "back to status"
      - "back to tasks"
      - "show tasks"
    priority: 8
    
  - name: task_complete
    patterns:
      - "task done"
      - "task complete"
      - "finished"
      - "completed"
      - "I'm done"
      - "done with task"
      - "mark complete"
      - "task finished"
    priority: 7

icon: "📊"
author: "Pocket Dev Framework v1.0.0"
version: "1.0.0"
framework_version: "1.0.0"
---

# Pocket Dev Framework Manager Skill

## Overview

This skill enables you to **manage your Pocket Dev project development** using the **Solo Agent Development Framework**. It provides:

- **Project Status Overview**: See all your features/tasks and their current status
- **Task Board Navigation**: Browse and select tasks like a Jira/Kanban board
- **Task Resumption**: Continue working on a task exactly where you left off
- **Framework Guidance**: The agent follows its role and guides you through the 6-phase process
- **Status Updates**: Get real-time updates on task progress and next steps

## Quick Start

To use this skill, simply ask:

- **"Show me the framework status"** - Display project overview
- **"Select task [name/ID]"** - Navigate to a specific task
- **"Resume task [name/ID]"** - Continue working on a saved task
- **"Next step"** - Move to the next phase/gate in the framework
- **"Back to overview"** - Return to the project board

---

## Framework Integration

This skill **integrates with** and **enforces** the Pocket Dev Solo Agent Development Framework:

- **6 Phases**: Ideation → Discovery → Specification → Design → Implementation → Verification
- **6 Gates**: Each phase must pass its gate to proceed
- **Agent Roles**: Each agent has specific responsibilities
- **Templates & Checklists**: All artifacts follow framework standards

---

## Data Storage

The skill stores project state in:
- **Project directory**: `pocket-dev/.pocket-dev/state.json`
- **Task directory**: `pocket-dev/.pocket-dev/tasks/`
- **Session directory**: `pocket-dev/.pocket-dev/sessions/`

---

## Commands Reference

### Overview Commands
| Command | Description | Example |
|---------|-------------|---------|
| Show status | Display project overview board | "Show framework status" |
| Show board | Display task board | "Show task board" |
| Project status | Show current project status | "What's the project status?" |

### Task Navigation Commands
| Command | Description | Example |
|---------|-------------|---------|
| Select task | Choose a task from the board | "Select task 1" or "Select task FEA-20261029-001" |
| Resume task | Continue a saved task | "Resume task spec" |
| Open task | Open a task for viewing | "Open task design" |
| Go to task | Navigate to a task | "Go to task 2" |

### Progression Commands
| Command | Description | Example |
|---------|-------------|---------|
| Next step | Move to next phase/gate | "Next step" |
| Next task | Move to next task | "Next task" |
| Next phase | Move to next phase | "Next phase" |
| Proceed | Continue to next step | "Proceed" |

### Navigation Commands
| Command | Description | Example |
|---------|-------------|---------|
| Back to overview | Return to project board | "Back to overview" |
| Show board | Return to task board | "Show board again" |
| Return | Go back to previous view | "Back to status" |

### Task Completion Commands
| Command | Description | Example |
|---------|-------------|---------|
| Mark complete | Mark current task as done | "Task done" |
| Task complete | Mark task as complete | "Task complete" |
| Finished | Mark task as finished | "Finished" |

---

## Skill Behavior

### When Invoked (Overview Mode)

When you invoke the skill with an overview command:

1. **Load project state** from `.pocket-dev/state.json`
2. **Scan for features** in `pocket-dev/specs/` directory
3. **Parse feature status** from:
   - Feature directories
   - Spec documents (`spec.md`)
   - Design documents (`design.md`)
   - Task lists (`tasks.md`)
   - Gate status from checklists
4. **Display project board** with columns:
   - **Backlog** (Ideation/Phase 0)
   - **Discovery** (Phase 1)
   - **Specification** (Phase 2)
   - **Design** (Phase 3)
   - **Implementation** (Phase 4)
   - **Verification** (Phase 5)
   - **Done** (All gates passed)
5. **For each feature/task**, display:
   - Feature ID and name
   - Current phase and gate status
   - Priority (P1/P2/P3)
   - Last updated
   - Assigned agent (if any)
6. **Prompt for action**:
   ```
   Framework Board - Pocket Dev
   ============================
   
   📥 BACKLOG (Phase 0: Ideation)
   ┌─────────────────────────────────────────────────────┐
   │ FEA-20261029-002 │ Calendar Widget     │ P1 │ Idea   │
   │ FEA-20261030-001 │ News Widget          │ P2 │ Idea   │
   └─────────────────────────────────────────────────────┘
   
   🔍 DISCOVERY (Phase 1)
   ┌─────────────────────────────────────────────────────┐
   │ FEA-20261028-001 │ Weather Widget      │ P1 │ Gate 1 │
   └─────────────────────────────────────────────────────┘
   
   📋 SPECIFICATION (Phase 2)
   ┌─────────────────────────────────────────────────────┐
   │ FEA-20261029-001 │ Health Data         │ P1 │ Gate 2 │
   └─────────────────────────────────────────────────────┘
   
   ✏️  DESIGN (Phase 3)
   ┌─────────────────────────────────────────────────────┐
   │ (None)                                      │      │        │
   └─────────────────────────────────────────────────────┘
   
   🚀 IMPLEMENTATION (Phase 4)
   ┌─────────────────────────────────────────────────────┐
   │ (None)                                      │      │        │
   └─────────────────────────────────────────────────────┘
   
   ✅ VERIFICATION (Phase 5)
   ┌─────────────────────────────────────────────────────┐
   │ (None)                                      │      │        │
   └─────────────────────────────────────────────────────┘
   
   🎉 DONE
   ┌─────────────────────────────────────────────────────┐
   │ (None)                                      │      │        │
   └─────────────────────────────────────────────────────┘
   
   Actions: [1] Select task | [2] Show details | [3] Exit
   > What would you like to do?
   ```

### When Task is Selected

When you select a task:

1. **Load task details** from feature directory
2. **Determine current state**:
   - Current phase
   - Current gate status
   - Last action performed
   - Saved state (if resumed)
3. **Display task details**:
   ```
   Feature: FEA-20261029-001 - Health Data Companion
   ====================================================
   
   Phase: 2 - Specification
   Gate: Gate 2 - Specification Approved
   Status: ⏳ In Progress (75% complete)
   Priority: P1
   
   Current Deliverables:
   ✅ Idea Document (idea.md)
   ✅ Research Findings (research.md)
   ✅ Feature Specification (spec.md) - 80% complete
   ❌ Design Document (design.md)
   ❌ Implementation Plan (plan.md)
   
   Last Activity: Working on acceptance scenarios
   Last Updated: 2026-10-29 14:30
   
   Next Steps:
   1. Complete acceptance scenarios for US1
   2. Define edge cases
   3. Submit for Gate 2 review
   
   Actions: [1] Resume work | [2] Show spec | [3] Next step | [4] Back to board
   > What would you like to do?
   ```
4. **Agent assumes role** based on phase:
   - Phase 0-1: Specification Agent
   - Phase 2: Specification Agent
   - Phase 3: Design Agent
   - Phase 4: Implementation Agent
   - Phase 5: Verification Agent
5. **Agent provides guidance**:
   ```
   [Specification Agent] I'm your Specification Agent for this task.
   
   Current Status: You're working on acceptance scenarios for User Story 1.
   
   Remaining Work:
   - [ ] Complete acceptance scenario US1-SC3
   - [ ] Define edge cases EC-001 to EC-005
   - [ ] Verify all requirements are testable
   
   To continue, you can:
   1. Say "Resume" to continue where you left off
   2. Say "Show spec" to view the current specification
   3. Say "Next step" to move to edge cases
   4. Ask me to help with a specific part
   
   What would you like to do?
   ```

### When Task is Resumed

When you resume a task:

1. **Restore session state** from `.pocket-dev/sessions/[feature-id].json`
2. **Display current context**:
   ```
   Resuming: FEA-20261029-001 - Health Data Companion
   ====================================================
   
   Phase: 2 - Specification
   Last Position: Working on US1-SC3 (Acceptance Scenario 3)
   Last Action: Defined Given/When/Then for US1-SC2
   
   Current Section:
   ```
   **US1-SC3**: Display sleep score with derived indicator label
   - Given: User has granted Health permissions
   - When: Sleep data is available
   - Then: Sleep score is displayed with "Derived" label
   - Priority: P1
   ```
   
   What was the Then condition for US1-SC2?
   (Type your input, or say "back" to return)
   ```
3. **Agent maintains role** and provides **context-aware help**
4. **Save state** after each interaction

### When Task is Completed

When you mark a task as complete:

1. **Agent verifies completion**:
   ```
   [Specification Agent] Let me verify that this task is complete...
   
   Checking Gate 2 Requirements:
   ✅ All user stories have acceptance scenarios
   ✅ All functional requirements are defined
   ✅ Edge cases are documented
   ✅ Success criteria are measurable
   ✅ Open Questions section is empty
   ❌ Test Strategy needs more detail
   
   This task is NOT ready for Gate 2.
   
   Would you like me to help complete the missing items?
   Or would you like to mark it as complete anyway?
   
   [Yes, help] / [Mark complete anyway] / [Cancel]
   ```
2. If **ready for next step**:
   ```
   [Specification Agent] ✅ All Gate 2 requirements are met!
   
   This task is ready to proceed to Phase 3: Design.
   
   Would you like to:
   1. Submit for Gate 2 review
   2. Start Phase 3: Design now
   3. Return to overview board
   
   > What would you like to do?
   ```
3. If **submitted for gate**:
   ```
   [Specification Agent] Task FEA-20261029-001 has been submitted for Gate 2 review.
   
   A human developer will review it against the Gate 2 checklist.
   You'll be notified of the result.
   
   Would you like to:
   1. Work on another task while waiting
   2. Return to overview board
   
   > What would you like to do?
   ```

### When Returning to Overview

When you return to the overview:

1. **Save current session state**
2. **Refresh project board**
3. **Display updated status**
4. **Prompt for next action**

---

## State Management

### Project State File

```json
{
  "framework_version": "1.0.0",
  "last_updated": "2026-10-29T14:30:00Z",
  "features": [
    {
      "id": "FEA-20261029-001",
      "name": "Health Data Companion",
      "phase": 2,
      "gate": 2,
      "status": "in_progress",
      "priority": "P1",
      "created": "2026-10-28T10:00:00Z",
      "updated": "2026-10-29T14:30:00Z",
      "deliverables": {
        "idea.md": {"status": "complete", "updated": "2026-10-28T12:00:00Z"},
        "research.md": {"status": "complete", "updated": "2026-10-28T15:00:00Z"},
        "spec.md": {"status": "in_progress", "progress": 75, "updated": "2026-10-29T14:30:00Z"}
      },
      "next_steps": ["Complete acceptance scenarios", "Define edge cases", "Submit for Gate 2"],
      "assigned_agent": "spec-agent",
      "session_id": "sess_20261029_1430"
    }
  ],
  "stats": {
    "total_features": 3,
    "by_phase": {
      "0": 2,
      "1": 1,
      "2": 1,
      "3": 0,
      "4": 0,
      "5": 0,
      "done": 0
    }
  }
}
```

### Task Session File

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
    "last_input": "Then: Sleep score is displayed with \"Derived\" label",
    "agent_role": "spec-agent"
  },
  "history": [
    {
      "timestamp": "2026-10-29T14:00:00Z",
      "action": "started_US1-SC2",
      "input": "Given: User has granted Health permissions"
    },
    {
      "timestamp": "2026-10-29T14:15:00Z",
      "action": "completed_US1-SC2_given",
      "input": "When: Sleep data is available"
    }
  ],
  "saved_state": {
    "US1-SC3": {
      "given": "User has granted Health permissions",
      "when": "Sleep data is available",
      "then": "",
      "priority": "P1"
    }
  }
}
```

---

## Agent Roles and Behavior

### Specification Agent (Phases 0-2)

**Responsibilities**:
- Lead Phase 0 (Ideation)
- Lead Phase 1 (Discovery)
- Lead Phase 2 (Specification)
- Ensure completeness of all deliverables
- Present options for decisions
- Follow Constitution Principles I-X

**Behavior**:
- Always present **options with trade-offs** for decisions
- Never leave **open questions** unresolved
- Ensure all **requirements are testable**
- Verify **all checklist items** before gate submission

**Commands**:
- "Help me with the spec" → Provide guidance on current section
- "What's missing?" → List incomplete items
- "Show me the template" → Display relevant template section
- "Validate my spec" → Run through checklist

### Design Agent (Phase 3)

**Responsibilities**:
- Lead Phase 3 (Design)
- Create technical designs
- Define architecture and modules
- Select technologies
- Ensure alignment with Constitution Principle II (Simplicity)

**Behavior**:
- Follow **"Two uses" rule** for abstractions
- Ensure **separation of concerns**
- Verify **all design decisions** are documented
- Check **feasibility** of all designs

### Implementation Agent (Phase 4)

**Responsibilities**:
- Lead Phase 4 (Implementation)
- Write code following Swift standards
- Write tests for all business logic
- Review code quality
- Ensure all **gates are passed**

**Behavior**:
- Follow **Swift Coding Standard**
- Ensure **test coverage >= 80%**
- Verify **all business logic has tests**
- Check **code against checklists**

### Verification Agent (Phase 5)

**Responsibilities**:
- Lead Phase 5 (Verification)
- Run acceptance tests
- Verify all success criteria
- Review documentation
- Ensure readiness for production

**Behavior**:
- Verify **all acceptance scenarios pass**
- Check **all success criteria are met**
- Ensure **documentation is complete**
- Validate **all gates are passed**

---

## Phase-Specific Guidance

### Phase 0: Ideation

**Agent Role**: Specification Agent

**Typical Commands**:
- "Help me refine my idea"
- "Create an idea document"
- "Assess feasibility"
- "Identify risks"

**Agent Response**:
```
[Specification Agent] Let's refine your idea using the framework.

Current Idea: "Add a weather widget"

To create a complete Idea Document, we need:

1. ✅ Elevator Pitch: "Add a weather widget to display current weather"
2. ❌ Problem Statement: What problem does this solve?
3. ❌ Proposed Solution: How will it work?
4. ❌ Goals: What are the primary and secondary goals?
5. ❌ Scope: What's in and out of scope?

Let's start with the Problem Statement.

Why do users need a weather widget in Pocket Dev?
(Type your answer, or say "skip" to move to next section)
```

### Phase 1: Discovery

**Agent Role**: Specification Agent

**Typical Commands**:
- "Research weather APIs"
- "Identify constraints"
- "Assess risks"
- "Find alternatives"

**Agent Response**:
```
[Specification Agent] Let's conduct Discovery for your weather widget.

Research Areas:
1. ✅ Domain Research: Weather data and APIs
2. ⏳ Technology Research: macOS weather APIs
3. ❌ Constraint Research: Platform limitations
4. ❌ Risk Assessment: API reliability risks

Current Focus: Technology Research

I found the following weather API options:

1. Open-Meteo
   - Pros: Free, no API key, good accuracy
   - Cons: Limited historical data
   
2. WeatherKit (Apple)
   - Pros: High accuracy, native integration
   - Cons: Paid, requires Apple Developer Program
   
3. OpenWeatherMap
   - Pros: Feature-rich, global coverage
   - Cons: Requires API key, rate limits

Which would you like to use as the default?
[1] Open-Meteo | [2] WeatherKit | [3] OpenWeatherMap | [Ask for options]
```

### Phase 2: Specification

**Agent Role**: Specification Agent

**Typical Commands**:
- "Create user stories"
- "Define requirements"
- "Identify edge cases"
- "Set success criteria"

**Agent Response**:
```
[Specification Agent] Let's create the specification for your weather widget.

We need to define User Stories first.

User Story 1 (P1): View current weather
- As a: Pocket Dev user
- I want to: See today's weather when I open the app
- So that: I can plan my day without checking my phone

Acceptance Scenarios:
1. ✅ Given app launched with network, When user opens app, Then current weather is displayed
2. ❌ Given app launched offline, When user opens app, Then last cached weather is shown with stale badge
3. ❌ Given weather API fails, When user opens app, Then error message is displayed

Let's complete Acceptance Scenario 2.

When the app is launched offline, what should happen?
(Type the Then condition, e.g., "Then show last cached weather with stale indicator")
```

### Phase 3: Design

**Agent Role**: Design Agent

**Typical Commands**:
- "Design the architecture"
- "Define modules"
- "Create data model"
- "Select technologies"

**Agent Response**:
```
[Design Agent] Let's design the architecture for your weather widget.

Following Constitution Principle II (Simplicity Over Abstraction),
we should use the simplest design that meets requirements.

Recommended Architecture:
┌─────────────────────────────────────────┐
│                   UI                    │
│  ┌─────────────┐      ┌─────────────┐  │
│  │ WeatherView │ ↔    │ViewModel    │  │
│  └─────────────┘      └─────────────┘  │
│                       ▲               │
│                       │               │
│  ┌─────────────┐      │               │
│  │WeatherService│───────┘               │
│  └─────────────┘                        │
│                       ▲               │
│                       │               │
│  ┌─────────────┐      │               │
│  │ APIClient   │───────┘               │
│  └─────────────┘                        │
│                                            │
└─────────────────────────────────────────┘

Modules:
1. WeatherUI - SwiftUI views
2. WeatherService - Business logic
3. APIClient - Network layer
4. WeatherModels - Data models

Does this architecture meet your needs?
[Yes] / [No, suggest alternative] / [Modify]
```

### Phase 4: Implementation

**Agent Role**: Implementation Agent

**Typical Commands**:
- "Implement the service"
- "Write unit tests"
- "Review my code"
- "Fix this issue"

**Agent Response**:
```
[Implementation Agent] Let's implement the WeatherService.

Following Swift Coding Standard (03-standards/swift/coding-standard.md):

File: Sources/HomeDashWeather/WeatherService.swift

```swift
/// Service responsible for fetching weather data.
/// - Note: This service uses Open-Meteo as the default provider.
/// - SeeAlso: WeatherData, WeatherError
public final class WeatherService {
    // Implementation...
}
```

I'll help you implement this. Let's start with the properties.

What properties should WeatherService have?
- [ ] apiClient: APIClient (for network requests)
- [ ] cache: WeatherCache (for caching responses)
- [ ] location: CLLocation (current location)
- [Custom]

Select properties (comma-separated numbers or "all"):
```

### Phase 5: Verification

**Agent Role**: Verification Agent

**Typical Commands**:
- "Run tests"
- "Verify acceptance criteria"
- "Check documentation"
- "Validate gate requirements"

**Agent Response**:
```
[Verification Agent] Let's verify the weather widget feature.

Gate 4 Checklist (Implementation Complete):
✅ Implementation plan exists
✅ Task list exists
✅ Source code is complete
✅ Unit tests written (85% coverage)
❌ Integration tests missing
✅ Code review passed

Missing: Integration tests for WeatherService + APIClient

Let's create integration tests.

Test 1: fetchWeather with valid location
- Given: Valid CLLocation
- When: fetchWeather is called
- Then: Returns WeatherData with valid values

Would you like me to:
1. Generate the test code
2. Show you how to write it
3. Skip for now (not recommended)

[1] / [2] / [3]
```

---

## Error Handling

### Feature Not Found

```
[Framework Manager] ❌ Feature not found: FEA-20261099-999

Available features:
- FEA-20261029-001: Health Data Companion (Phase 2)
- FEA-20261028-001: Weather Widget (Phase 1)

Did you mean one of these?
[Yes, select] / [No, create new feature]
```

### No Features Found

```
[Framework Manager] ℹ️ No features found in project.

This project doesn't have any features yet.

Would you like to:
1. Create a new feature
2. Show framework documentation
3. Exit

[1] / [2] / [3]
```

### Invalid Command

```
[Framework Manager] ❌ I didn't understand: "do the thing"

Available commands in this context:
- "Show board" / "Overview" - Display project board
- "Select task [ID]" - Select a specific task
- "Next step" - Move to next phase/gate
- "Back to overview" - Return to board

Type a command or say "help" for more options.
```

---

## Tips for Best Results

### 1. Be Specific
- ❌ "Work on the feature" → Too vague
- ✅ "Select task FEA-20261029-001" → Clear and specific

### 2. Use Feature IDs
- Features have IDs like `FEA-YYYYMMDD-XXX`
- Use these IDs for precise navigation

### 3. Let the Agent Guide You
- The agent knows the framework
- Follow its suggestions for best practices
- Ask for help when stuck

### 4. Complete One Thing at a Time
- Focus on completing the current task
- The framework ensures quality at each step
- Don't skip gates or phases

### 5. Use Resume Functionality
- If you need to stop, just say "back to overview"
- Your progress is saved automatically
- You can resume later exactly where you left off

---

## Customization

You can customize this skill by:

1. **Adding custom commands**: Edit the `triggers` section in the frontmatter
2. **Modifying behavior**: Edit the skill instructions
3. **Adding project-specific rules**: Add to the framework documentation

---

## Troubleshooting

### Skill Not Triggering
- Check that your command matches a trigger pattern
- Try rephrasing your command
- Say "help" to see available commands

### State Not Saved
- Ensure `.pocket-dev/` directory exists and is writable
- Check file permissions
- Verify JSON format of state files

### Wrong Phase/Gate
- Check feature directory for actual phase
- Verify gate status in checklists
- Manually update state file if needed

---

## Related Framework Documents

- **Constitution**: `pocket-dev/framework/00-constitution/constitution.md`
- **Process Overview**: `pocket-dev/framework/02-methodology/process-overview.md`
- **Swift Standards**: `pocket-dev/framework/03-standards/swift/coding-standard.md`
- **Spec Template**: `pocket-dev/framework/04-templates/spec-template.md`
- **Gate Checklists**: `pocket-dev/framework/05-checklists/`
- **Agent Instructions**: `pocket-dev/framework/06-automation/agents/`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-10-29 | Initial release |

---

## Support

For issues or questions about this skill:
1. Check the framework documentation first
2. Review the related documents listed above
3. Ask for help using the framework's decision process
