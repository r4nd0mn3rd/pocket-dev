# Process Overview

> **Framework Version**: 1.0.0
> **Document Version**: 1.0.0
> **Last Updated**: 2026-10-29

## Executive Summary

The Solo Agent Development Framework defines a **6-phase, 6-gate process** for developing features from idea to production. Each phase has:
- **Clear objectives** and deliverables
- **Agent-executable tasks**
- **Quality gates** that must be passed
- **Templates** for all artifacts
- **Checklists** for completeness verification

**Total typical duration**: 2-4 weeks for a medium-complexity feature (with agent assistance)

---

## Process Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                IDEA                                    Gate 0 │
│                          (User has an idea)                            ✓/✗   │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │ Pass
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            PHASE 0: IDEATION                                  │
│                      (Refine and validate idea)                               │
│  Tasks:                                                                         │
│  - Idea documentation                                                          │
│  - Initial feasibility assessment                                               │
│  - High-level goal definition                                                   │
│  - Stakeholder identification (user themselves)                                │
│  Deliverables:                                                                  │
│  - idea.md (Idea Document)                                                      │
│  - feasibility-report.md (Feasibility Assessment)                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │ Gate 0: Idea Approved
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            PHASE 1: DISCOVERY                                  │
│                      (Research and exploration)                                │
│  Tasks:                                                                         │
│  - Domain research                                                               │
│  - Technology research                                                          │
│  - Constraint identification                                                    │
│  - Risk assessment                                                              │
│  - Open question identification                                                │
│  Deliverables:                                                                  │
│  - research.md (Research Findings)                                              │
│  - constraints.md (Constraints Document)                                        │
│  - risks.md (Risk Assessment)                                                  │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │ Gate 1: Discovery Complete
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PHASE 2: SPECIFICATION                                │
│                      (Define what to build)                                     │
│  Tasks:                                                                         │
│  - User story definition                                                        │
│  - Requirement gathering                                                         │
│  - Acceptance criteria definition                                               │
│  - Edge case identification                                                     │
│  - Success criteria definition                                                  │
│  - Open question resolution                                                     │
│  Deliverables:                                                                  │
│  - spec.md (Feature Specification)                                             │
│  - user-stories.md (User Story Details)                                         │
│  - acceptance-criteria.md (Testable Acceptance Criteria)                       │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │ Gate 2: Specification Approved
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PHASE 3: DESIGN                                       │
│                      (Define how to build it)                                   │
│  Tasks:                                                                         │
│  - Architecture design                                                          │
│  - Module decomposition                                                         │
│  - Data model definition                                                         │
│  - API/contract design                                                          │
│  - UI/UX design (if applicable)                                                 │
│  - Technology selection                                                         │
│  Deliverables:                                                                  │
│  - design.md (Technical Design Document)                                        │
│  - data-model.md (Data Model)                                                   │
│  - architecture-diagram.svg (Architecture Diagram)                              │
│  - contracts/ (API Contracts)                                                   │
│  - modules/ (Module Specifications)                                            │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │ Gate 3: Design Approved
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PHASE 4: IMPLEMENTATION                                 │
│                      (Build the solution)                                        │
│  Tasks:                                                                         │
│  - Implementation planning                                                       │
│  - Task decomposition                                                           │
│  - Coding (with agents)                                                         │
│  - Unit testing                                                                 │
│  - Integration testing                                                           │
│  - Code review (agent-to-agent or human)                                        │
│  Deliverables:                                                                  │
│  - Implementation plan (plan.md)                                                │
│  - Task list (tasks.md)                                                         │
│  - Source code                                                                   │
│  - Unit tests                                                                    │
│  - Integration tests                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │ Gate 4: Implementation Complete
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PHASE 5: VERIFICATION                                  │
│                      (Verify it works correctly)                                │
│  Tasks:                                                                         │
│  - Acceptance testing                                                           │
│  - Performance testing                                                          │
│  - Security testing (if applicable)                                             │
│  - Documentation review                                                         │
│  - User manual update                                                           │
│  - Deployment preparation                                                       │
│  Deliverables:                                                                  │
│  - test-results.md (Test Results Summary)                                       │
│  - verification-report.md (Verification Report)                                │
│  - Updated documentation                                                       │
│  - Deployment artifacts                                                         │
└─────────────────────────────────────────────────────────────────────────────┘
                                        │ Gate 5: Verification Passed
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            PRODUCTION                                    Gate 5 │
│                          (Feature is live)                              ✓/✗   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Phase Details

### Phase 0: Ideation

**Purpose**: Transform a vague idea into a well-defined concept ready for discovery.

**Duration**: 1-2 days

**Input**: User's initial idea (possibly vague)

**Output**: Clear, documented idea ready for research

**Key Question**: "What problem are we solving, and is it worth solving?"

**Agent Tasks**:
- Help refine the idea
- Identify key goals
- Draft initial feasibility questions
- Create idea document

**Human Tasks**:
- Approve/refine idea
- Provide initial constraints
- Set priority

**Deliverables**:
1. `idea.md` - Idea Document
2. `feasibility-report.md` - Initial Feasibility Assessment

**Checklist**: See `05-checklists/ideation-checklist.md`

**Gate**: Gate 0 - Idea Approved

---

### Phase 1: Discovery

**Purpose**: Gather all necessary information to write a complete specification.

**Duration**: 2-5 days

**Input**: Approved idea from Phase 0

**Output**: Complete understanding of the problem space

**Key Question**: "What do we need to know to specify this feature?"

**Agent Tasks**:
- Conduct domain research
- Research technologies
- Identify constraints
- Assess risks
- Identify open questions
- Draft research documents

**Human Tasks**:
- Guide research direction
- Answer agent questions
- Make decisions on open questions
- Approve research findings

**Deliverables**:
1. `research.md` - Research Findings
2. `constraints.md` - Constraints Document
3. `risks.md` - Risk Assessment
4. `open-questions.md` - Open Questions (must be empty to proceed)

**Checklist**: See `05-checklists/discovery-checklist.md`

**Gate**: Gate 1 - Discovery Complete

---

### Phase 2: Specification

**Purpose**: Define **what** the feature should do, not how to build it.

**Duration**: 3-7 days

**Input**: Discovery artifacts

**Output**: Complete, unambiguous specification

**Key Question**: "What exactly are we building, and how will we know it's correct?"

**Agent Tasks**:
- Draft user stories
- Define requirements
- Create acceptance criteria
- Identify edge cases
- Define success criteria
- Resolve open questions (with human)
- Draft specification document

**Human Tasks**:
- Review and approve user stories
- Make decisions on requirements
- Approve acceptance criteria
- Approve specification

**Deliverables**:
1. `spec.md` - Feature Specification (Primary)
2. `user-stories.md` - Detailed User Stories
3. `acceptance-criteria.md` - Testable Acceptance Criteria
4. `edge-cases.md` - Edge Case Analysis

**Checklist**: See `05-checklists/specification-checklist.md`

**Gate**: Gate 2 - Specification Approved

**Critical Rule**: **NO implementation can start until Gate 2 is passed.**

---

### Phase 3: Design

**Purpose**: Define **how** the feature will be built to meet the specification.

**Duration**: 3-7 days

**Input**: Approved specification

**Output**: Complete design ready for implementation

**Key Question**: "How will we build this to meet all requirements?"

**Agent Tasks**:
- Design architecture
- Define modules
- Create data model
- Design APIs/contracts
- Design UI/UX (if applicable)
- Select technologies
- Draft design documents

**Human Tasks**:
- Review architecture
- Approve design decisions
- Approve design documents

**Deliverables**:
1. `design.md` - Technical Design Document
2. `data-model.md` - Data Model Definition
3. `architecture-diagram.svg` - Architecture Diagram
4. `contracts/` - API/Module Contracts
5. `modules/` - Module Specifications

**Checklist**: See `05-checklists/design-checklist.md`

**Gate**: Gate 3 - Design Approved

---

### Phase 4: Implementation

**Purpose**: Build the feature according to the design.

**Duration**: 5-14 days (varies most by feature complexity)

**Input**: Approved design

**Output**: Working, tested code

**Key Question**: "Is the code built correctly and does it meet the specification?"

**Agent Tasks**:
- Create implementation plan
- Decompose into tasks
- Write code
- Write unit tests
- Write integration tests
- Review other agents' code

**Human Tasks**:
- Review implementation plan
- Review critical code
- Make architectural decisions
- Approve implementation

**Deliverables**:
1. `plan.md` - Implementation Plan
2. `tasks.md` - Task List
3. Source code
4. Unit tests
5. Integration tests
6. Code review comments

**Checklist**: See `05-checklists/implementation-checklist.md`

**Gate**: Gate 4 - Implementation Complete

---

### Phase 5: Verification

**Purpose**: Verify the feature works correctly and meets all acceptance criteria.

**Duration**: 2-5 days

**Input**: Implemented feature

**Output**: Verified, documented, deployable feature

**Key Question**: "Does it work as specified, and is it ready for production?"

**Agent Tasks**:
- Run acceptance tests
- Run performance tests
- Run security tests (if applicable)
- Review documentation
- Prepare deployment artifacts

**Human Tasks**:
- Approve test results
- Approve documentation
- Approve deployment

**Deliverables**:
1. `test-results.md` - Test Results Summary
2. `verification-report.md` - Verification Report
3. Updated documentation
4. Deployment artifacts

**Checklist**: See `05-checklists/verification-checklist.md`

**Gate**: Gate 5 - Verification Passed

---

## Gate System

### What is a Gate?

A **Gate** is a **quality checkpoint** that must be passed before proceeding to the next phase. Gates ensure:
- Quality standards are met
- Required artifacts exist
- The work is ready for the next phase

### Gate Process

1. **Agent prepares**: Agent completes all phase tasks and deliverables
2. **Agent self-reviews**: Agent verifies against checklist
3. **Agent requests gate**: Agent notifies human that gate is ready
4. **Human reviews**: Human reviews deliverables against gate criteria
5. **Human decides**: Human approves (pass) or rejects (fail) with feedback
6. **If fail**: Agent addresses feedback, resubmits for gate
7. **If pass**: Proceed to next phase

### Gate Criteria

Each gate has **mandatory criteria** that must be met. See `02-methodology/checkpoints/` for detailed gate definitions.

| Gate | Phase Complete | Criteria Summary | Reviewer |
|------|----------------|------------------|----------|
| Gate 0 | Ideation | Idea is clear, feasible, and approved | Human |
| Gate 1 | Discovery | Research complete, all questions answered | Human |
| Gate 2 | Specification | Spec is complete, unambiguous, approved | Human |
| Gate 3 | Design | Design is complete, feasible, approved | Human |
| Gate 4 | Implementation | Code complete, tested, reviewed | Human + Agent |
| Gate 5 | Verification | All tests pass, docs complete, ready to ship | Human |

**Critical**: Gates **cannot be skipped**. Bypassing a gate is a **constitution violation**.

---

## Roles and Responsibilities

### Human Developer

**Responsibilities**:
- Define project vision and goals
- Make all **Feature** and **Architectural** decisions
- Review and approve all gate submissions
- Provide guidance to agents
- Resolve conflicts between agents
- Ensure constitution compliance

**Time Commitment**:
- Daily: 1-2 hours for reviews and decisions
- Gate reviews: 30-60 minutes per gate
- Decision points: As needed

### Specification Agent

**Responsibilities**:
- Lead Phase 0 (Ideation) and Phase 1 (Discovery)
- Draft specifications
- Identify open questions
- Ensure requirements are complete

**Skills Required**:
- Requirements gathering
- Domain knowledge
- Analytical thinking
- Technical understanding

### Design Agent

**Responsibilities**:
- Lead Phase 2 (Specification) and Phase 3 (Design)
- Create technical designs
- Define architectures
- Create data models
- Define contracts

**Skills Required**:
- System design
- Architecture
- Data modeling
- API design
- Technical writing

### Implementation Agent

**Responsibilities**:
- Lead Phase 4 (Implementation)
- Write code
- Write tests
- Review code
- Ensure code quality

**Skills Required**:
- Programming (Swift, etc.)
- Testing
- Code review
- Debugging

### Verification Agent

**Responsibilities**:
- Lead Phase 5 (Verification)
- Run tests
- Verify acceptance criteria
- Review documentation
- Prepare deployment

**Skills Required**:
- Testing
- Quality assurance
- Documentation review
- Attention to detail

---

## Task Flow

### Daily Flow

```
1. Human reviews previous day's progress
2. Human makes any pending decisions
3. Human assigns tasks to agents
4. Agents work on assigned tasks
5. Agents request reviews/decisions as needed
6. Human reviews agent outputs
7. Human provides feedback or approval
8. Agents incorporate feedback
9. Repeat
```

### Task Assignment

**Human assigns tasks** to agents with:
- Clear objective
- Input data/sources
- Expected output
- Constraints to follow
- Acceptance criteria
- Due date/time

**Agent accepts task** and:
- Confirms understanding
- Asks clarifying questions if needed
- Begins work

**Agent completes task** and:
- Self-reviews against acceptance criteria
- Requests human review
- Provides summary of work done

---

## Communication

### Agent to Human

**When to communicate**:
- Task is complete and ready for review
- Decision is needed (Feature/Architectural)
- Ambiguity is encountered
- Blocked by external factor
- Daily status update

**How to communicate**:
- Clear, concise messages
- Include context and background
- State what is needed from human
- Provide options when applicable

### Human to Agent

**When to communicate**:
- Task assignment
- Decision made
- Feedback on work
- Priority changes
- Clarifications needed

**How to communicate**:
- Clear instructions
- Specific acceptance criteria
- Timeline expectations
- Context for decisions

---

## Quality Standards

### Documentation Quality

All documents must:
- Be **clear and unambiguous**
- Use **consistent terminology**
- Follow **templates** where provided
- Be **reviewable** (not too long, well-structured)
- Be **actionable** (lead to clear next steps)

### Code Quality

All code must:
- Follow **coding standards** (`03-standards/swift/coding-standard.md`)
- Have **tests** for all business logic
- Be **reviewed** before merge
- Follow **architecture patterns**
- Be **well-documented**

### Test Quality

All tests must:
- Be **automated**
- Be **fast** (run in seconds, not minutes)
- Be **reliable** (not flaky)
- Cover **happy path and edge cases**
- Be **maintainable**

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Phase duration | Predictable | Track time per phase |
| Gate pass rate | 100% first time | Gate pass/fail count |
| Test coverage | >= 80% | Code coverage tools |
| Documentation completeness | 100% | Checklist completion |
| Agent productivity | High | Tasks completed per day |
| Human time required | Minimal | Hours per week |

---

## Troubleshooting

### Common Issues and Solutions

| Issue | Symptom | Solution |
|-------|---------|----------|
| Gate keeps failing | Same feedback repeated | Agent needs better guidance, human needs clearer criteria |
| Agent stuck | No progress | Human needs to provide more detail or make a decision |
| Scope creep | Feature keeps growing | Revisit specification, defer non-essential features |
| Quality issues | Bugs in production | Improve testing, add more review steps |
| Slow progress | Taking too long | Break tasks smaller, add more agents, human intervention |

### Escalation Path

1. **Agent level**: Agent tries to resolve independently
2. **Agent-to-agent**: Agents collaborate to solve
3. **Agent-to-human**: Agent requests human help
4. **Human decision**: Human makes call
5. **Framework review**: If systemic issue, review and update framework

---

## Tools and Templates

### Templates

All templates are in `04-templates/`:
- Idea Document: `idea-template.md`
- Research Findings: `research-template.md`
- Feature Specification: `spec-template.md`
- Technical Design: `design-template.md`
- Implementation Plan: `plan-template.md`
- And more...

### Tools

Recommended tools:
- **Project management**: GitHub Projects or similar
- **Documentation**: Markdown in Git
- **Code**: Xcode, Swift
- **Testing**: XCTest, Swift Testing
- **Collaboration**: GitHub, Git

---

## Quick Start Checklist

For a new feature:

- [ ] Create feature directory under `specs/[FEATURE]/`
- [ ] Copy templates from `04-templates/`
- [ ] Start with Phase 0: Ideation
- [ ] Follow process through all phases
- [ ] Pass all gates
- [ ] Deliver to production

For a new agent:

- [ ] Read this document (Process Overview)
- [ ] Read Constitution (`00-constitution/constitution.md`)
- [ ] Read relevant standards
- [ ] Review templates
- [ ] Understand role and responsibilities
