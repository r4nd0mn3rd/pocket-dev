# Solo Agent Development Framework Constitution

> **Version**: 2.0.0
> **Ratified**: 2026-10-29
> **Status**: Active
> **Supersedes**: Framework constitution v1.1.0

## Preamble

This constitution establishes the **non-negotiable principles** that govern all development when using the Solo Agent Development Framework to build Pocket Dev suite features and capabilities.

**Purpose**: Enable a single developer working with AI agents to build high-quality software that is maintainable, reliable, and aligns with the user's intent.

**Scope**: All new features, components, and changes developed using this framework for the Pocket Dev suite and related theoretical implementations.

**Authority**: This document is the **supreme authority** for development decisions. When in conflict with any other guidance, this constitution prevails.

---

## Core Principles

### I. Solo Developer + Agents Autonomy

**Principle**: The framework MUST enable a single human developer working with AI agents to complete every phase of development — from idea to production-ready code — without requiring additional human resources.

**Implications**:
- Every task MUST be decomposable into agent-executable steps
- Every deliverable MUST have clear, unambiguous acceptance criteria
- Every decision point MUST have explicit options with trade-offs
- The human developer's role is **orcherstration and oversight**, not execution of routine tasks

**Conformance Check**: Before any phase begins, verify that all tasks can be executed by agents with the provided instructions.

---

### II. Explicit, Tested Business Logic (Reaffirmed from v1.0)

**Principle**: Business logic MUST be represented explicitly in the codebase as clearly named modules, functions, or types that express domain rules. Every unit of business logic MUST have automated tests that encode its expected behavior.

**Enhanced Requirements**:
- Business logic MUST be **separated** from UI, framework code, and I/O layers
- Tests MUST cover **happy path, edge cases, and failure paths**
- Test failures MUST **clearly identify** the broken behavior
- Business logic modules MUST have **single, well-defined responsibilities**

**New for Framework**:
- Specification documents MUST define business logic requirements **before** implementation
- Design documents MUST map business logic to implementation modules
- Tests MUST be written **alongside** implementation, not after

---

### III. Simplicity Over Abstraction (Reaffirmed from v1.0)

**Principle**: Solutions MUST favor the simplest design that fully meets the requirement. New abstractions MUST NOT be introduced unless at least two concrete, present-day uses require them.

**Enhanced Requirements**:
- **"Two uses" rule**: Any abstraction (interface, protocol, base class, generic, layer) MUST have at least two **current, implemented** uses in the codebase
- **"No speculative generics"**: Generic code MUST solve an **existing** problem, not anticipate future ones
- **"YAGNI"**: You Aren't Gonna Need It — build only what is needed now

**Decision Framework**: When considering an abstraction:
1. Can the requirement be met without it? → Use the simpler approach
2. Does it have two current uses? → It may be justified
3. Is it required by an external constraint (framework, platform)? → It is necessary
4. Otherwise → **Do not add it**

---

### IV. Informed Decisions via Explicit Options (Reaffirmed from v1.1.0)

**Principle**: When information required to proceed is missing, ambiguous, or admits more than one reasonable design, the party making the decision MUST present explicit, concrete options with their trade-offs.

**Enhanced Requirements for Agent Development**:
- Agents MUST **never silently choose** a default when multiple reasonable options exist
- Agents MUST **always present** the human developer with:
  1. A **clear question** stating what is undecided
  2. **All viable options** (typically 2-4)
  3. **Trade-offs** for each option (pros, cons, implications)
  4. A **recommendation** with reasoning
  5. **Impact analysis** if the decision is deferred
- The human developer MUST make the **final decision** and it MUST be **recorded**

**Agent Behavior**:
- When an agent encounters ambiguity → **stop and present options**
- When an agent has insufficient information → **request clarification with context**
- When an agent identifies a decision point → **document it for human review**

---

### V. Complete Specification Before Implementation

**Principle**: Implementation MUST NOT begin until the feature specification is **complete, reviewed, and approved** at the appropriate gate.

**Requirements**:
- Every feature MUST have a **spec.md** document that passes Gate 2 (Specification Approved)
- The specification MUST include:
  - User stories with acceptance criteria
  - Functional requirements (FR-*)
  - Non-functional requirements
  - Key entities and their relationships
  - Success criteria (SC-*)
  - Assumptions and constraints
  - Open questions (must be **zero** for implementation to start)
  - Edge cases and error handling
- **"No open questions" rule**: Implementation cannot start if any open questions remain unresolved

**Conformance Check**: Before entering design phase, verify that:
- All acceptance criteria are **testable and measurable**
- All requirements are **unambiguous**
- All edge cases are **identified and addressed**

---

### VI. Quality Gates Are Mandatory

**Principle**: Progress through development phases is **gated** by objective quality criteria. Gates MUST NOT be bypassed.

**Requirements**:
- Each phase has a **defined gate** with **pass/fail criteria**
- Gates MUST be **reviewed by an agent** (not the same agent that produced the work)
- Gate failures MUST be **documented and addressed** before proceeding
- **"No gate skipping"**: Moving to the next phase without passing the current gate is **forbidden**

**Gate Definitions**: See `02-methodology/checkpoints/` for detailed gate criteria.

---

### VII. Documentation Is Part of the Code

**Principle**: Documentation is **not optional** and is **not separate** from development. It is a **first-class deliverable** with the same quality requirements as code.

**Requirements**:
- **Code documentation**: Every public API MUST have documentation comments
- **Architecture documentation**: Every module MUST have a README explaining its purpose and usage
- **Decision documentation**: Every significant decision MUST be recorded with reasoning
- **Process documentation**: The development process itself MUST be documented

**"Documentation First" Rule**:
- Documentation for a feature MUST be **drafted during specification**
- Documentation MUST be **reviewed alongside the code**
- Documentation MUST be **updated when code changes**

---

### VIII. Personal and Private Data (Reaffirmed from v1.0)

**Principle**: Personal data MUST remain under the user's control. The system MUST be local-first and read-only by default.

**Enhanced Requirements**:
- **No third-party storage**: Personal data MUST NOT be sent to external services unless:
  - The service is **explicitly required** for the feature
  - The user **explicitly consents** with full understanding
  - The data **cannot** be processed locally
- **Read-only default**: The system MUST read from sources, not write back
- **Data minimization**: Only the **minimum necessary** data MUST be collected and stored
- **Clear ownership**: Users MUST **always know** where their data is and who can access it

---

### IX. Local-First Architecture

**Principle**: The system MUST prioritize local processing and storage, with cloud synchronization as a **secondary concern** for sharing or backup.

**Requirements**:
- **Offline-first**: The app MUST work **fully offline** with cached data
- **Sync is optional**: Synchronization MUST be **explicitly enabled** by the user
- **Conflict resolution**: When syncing, **local changes MUST win** by default (user can override)
- **No cloud lock-in**: Users MUST be able to **export all their data** and leave the service

---

### X. Observability and Trust

**Principle**: Users MUST be able to **trust** the data they see, which requires complete observability of data freshness, source, and processing.

**Requirements**:
- **Timestamp everything**: Every piece of data MUST have a **clear timestamp**
- **Show source**: Users MUST see **where data came from**
- **Indicate freshness**: Users MUST know **how old** the data is
- **Mark derived data**: Computed/derived values MUST be **clearly labeled** as such
- **Show uncertainty**: When data is estimated or incomplete, this MUST be **visible**

---

## Additional Constraints

### A. Technology Stack Constraints

1. **Apple-native first**: For Apple platforms (macOS, iOS, tvOS, watchOS), prefer **native frameworks and languages** (Swift, SwiftUI, Combine, etc.)
2. **Cross-platform second**: Cross-platform solutions (Flutter, React Native, etc.) REQUIRE **explicit justification**
3. **Web as last resort**: Web-based solutions REQUIRE **explicit justification** and MUST demonstrate **superior value** over native

### B. Testing Constraints

1. **Automated testing**: All business logic MUST have **automated tests**
2. **Test coverage**: Aim for **100% coverage of business logic**, minimum **80%**
3. **Test quality**: Tests MUST be **maintainable, fast, and reliable**
4. **CI integration**: Tests MUST run in **Continuous Integration** on every change

### C. Performance Constraints

1. **Responsive UI**: UI MUST remain responsive (60fps) under all normal conditions
2. **Efficient storage**: Data storage MUST be **space-efficient** (no unnecessary duplication)
3. **Battery-friendly**: Mobile apps MUST **minimize battery impact**
4. **Network-efficient**: Network usage MUST be **minimized** (caching, compression, etc.)

### D. Security Constraints

1. **Data protection**: Sensitive data MUST be **encrypted at rest**
2. **Secure transmission**: Network communication MUST use **TLS 1.2+**
3. **No hardcoded secrets**: Secrets MUST **never** be hardcoded
4. **Principle of least privilege**: Apps MUST request **only necessary permissions**

---

## Development Workflow Rules

### Rule 1: Phase Completion
- A phase is **complete** only when:
  - All deliverables are **produced**
  - All checklists are **checked**
  - All gate criteria are **met**
  - All reviews are **passed**

### Rule 2: Agent Tasking
- Agents MUST be given **clear, specific tasks** with:
  - **Objective**: What needs to be accomplished
  - **Input**: What information/data to use
  - **Output**: What deliverable to produce
  - **Constraints**: What rules to follow
  - **Acceptance Criteria**: How to know it's done

### Rule 3: Human Oversight
- The human developer MUST:
  - **Define the scope** of each agent task
  - **Review all agent outputs** before acceptance
  - **Make all decisions** at decision points
  - **Resolve all conflicts** between agents

### Rule 4: Iteration
- **Refinement is allowed**: Deliverables can be **iterated on** based on feedback
- **No infinite loops**: Each iteration MUST **improve** the deliverable
- **Completion criteria**: Iteration stops when **acceptance criteria are met**

### Rule 5: Documentation
- **Every change** MUST be documented:
  - **What** changed
  - **Why** it changed
  - **Who** made the decision (human or agent)
  - **When** it changed

---

## Governance

### Amendment Process

This constitution can be amended through the following process:

1. **Proposal**: A written proposal is created stating:
   - The **current text** to be changed
   - The **proposed new text**
   - The **reasoning** for the change
   - The **impact** of the change

2. **Review**: The proposal is reviewed by:
   - The human developer
   - At least one agent (for analysis)

3. **Decision**: The human developer makes the final decision

4. **Documentation**: The change is:
   - Applied to the constitution
   - Documented in the **change log** at the top
   - Version number is **bumped** according to semantic versioning
   - **Ratified** date is updated

### Versioning

- **MAJOR version** bump: Backward-incompatible principle removals or redefinitions
- **MINOR version** bump: New principle or material expansion
- **PATCH version** bump: Clarifications, wording fixes, typo corrections

### Compliance

Every development effort MUST:
1. **Declare compliance** with this constitution at the start
2. **Document any deviations** with justification
3. **Report violations** immediately when discovered

---

## Quick Reference

| Principle | Key Rule | Check |
|-----------|----------|-------|
| I. Autonomy | Agents can execute all tasks | ✓ Task decomposition complete |
| II. Tested Logic | All business logic has tests | ✓ Test coverage >= 80% |
| III. Simplicity | No abstraction without 2 uses | ✓ "Two uses" rule applied |
| IV. Informed Decisions | Always present options | ✓ Options documented |
| V. Complete Spec | No implementation without spec | ✓ Gate 2 passed |
| VI. Quality Gates | No gate skipping | ✓ All gates passed |
| VII. Documentation | Documentation is code | ✓ Docs reviewed with code |
| VIII. Personal Data | Local-first, read-only | ✓ Data flow diagram shows local-first |
| IX. Local-First | Offline-first design | ✓ Offline behavior specified |
| X. Observability | Show source, freshness, uncertainty | ✓ UI shows all metadata |

---

## Appendix A: Constitution Comparison

### Changes from v1.1.0 (Project Constitution)

**Added Principles**:
- I. Solo Developer + Agents Autonomy (New)
- V. Complete Specification Before Implementation (New)
- VI. Quality Gates Are Mandatory (New)
- VII. Documentation Is Part of the Code (New)
- IX. Local-First Architecture (New)
- X. Observability and Trust (New)

**Enhanced Principles**:
- II. Explicit, Tested Business Logic - Added test quality requirements
- III. Simplicity Over Abstraction - Added decision framework
- IV. Informed Decisions via Explicit Options - Added agent behavior requirements

**New Constraints**:
- Technology Stack Constraints
- Testing Constraints
- Performance Constraints
- Security Constraints

**New Rules**:
- Phase Completion Rules
- Agent Tasking Rules
- Human Oversight Rules
- Iteration Rules
- Documentation Rules
