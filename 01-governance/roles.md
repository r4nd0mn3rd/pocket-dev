# Roles and Responsibilities

> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This document defines the **roles and responsibilities** for all participants in the Solo Agent Development Framework. These roles apply to both **human developers** and **AI agents** working on the project.

**Key Principles**:
1. **Clarity**: Each role has clearly defined responsibilities
2. **Accountability**: Each responsibility has a clear owner
3. **Collaboration**: Roles work together to deliver features
4. **Constitution Alignment**: All roles must follow Constitution Principles

---

## Role Types

There are **two main types of roles** in the framework:

### 1. Human Roles

**Primary Participants**:
- **Solo Developer** (You): The human developer leading the project
- **Stakeholders**: Users, product owners, or other interested parties

### 2. Agent Roles

**AI Participants**:
- **Specification Agent**: Leads Discovery and Specification phases
- **Design Agent**: Leads Design phase
- **Implementation Agent**: Leads Implementation phase
- **Review Agent**: Reviews all artifacts and gate submissions

**Note**: A single AI agent can take on multiple roles, but the framework defines separate roles for clarity.

---

## Human Roles

### Solo Developer (You)

**Role**: Primary human participant, project leader, final decision maker

**Responsibilities**:

#### 🎯 Strategic
- [ ] Define project vision and goals
- [ ] Prioritize features and work
- [ ] Make final decisions on design and implementation
- [ ] Ensure project alignment with business objectives
- [ ] Manage project timeline and resources

#### 📜 Governance
- [ ] **Final approver** for all gate submissions (Gate 0-5)
- [ ] Make decisions on open questions
- [ ] Resolve conflicts between agents
- [ ] Ensure Constitution Principles are followed
- [ ] Maintain framework integrity

#### 👥 Management
- [ ] Assign tasks to agents
- [ ] Monitor agent progress
- [ ] Provide guidance and clarification
- [ ] Review and approve agent work
- [ ] Manage agent access and permissions

#### 💻 Technical
- [ ] Architectural oversight
- [ ] Code review and approval
- [ ] Technical decision making
- [ ] Quality assurance
- [ ] Problem resolution

#### 📚 Documentation
- [ ] Review and approve all documentation
- [ ] Ensure documentation quality
- [ ] Maintain project documentation
- [ ] Document decisions and rationale

#### 🎓 Quality Assurance
- [ ] Final quality check before gates
- [ ] Verify Constitution compliance
- [ ] Ensure best practices are followed
- [ ] Validate release readiness

**Authority**:
- ✅ **Full authority** over all project decisions
- ✅ **Can override** agent decisions
- ✅ **Final approver** for all gates
- ✅ **Can modify** framework as needed
- ❌ **Cannot** violate Constitution Principles

**Accountability**:
- Ultimate responsibility for project success
- Accountable for all decisions
- Accountable for project quality
- Accountable for project timeline

**Time Commitment**:
- Estimated: 2-4 hours/day for active development
- Varies by project phase and complexity

---

### Stakeholder

**Role**: User, product owner, or other interested party (optional)

**Responsibilities**:

#### 🎯 Requirements
- [ ] Provide input on feature requirements
- [ ] Prioritize features from user perspective
- [ ] Validate feature value
- [ ] Provide user stories and scenarios

#### 📊 Feedback
- [ ] Review feature demonstrations
- [ ] Provide feedback on prototypes
- [ ] Validate acceptance criteria
- [ ] Report issues and concerns

#### 💡 Validation
- [ ] Validate feature completeness
- [ ] Validate feature quality
- [ ] Validate feature usability
- [ ] Validate feature meets needs

**Authority**:
- ✅ Can provide input on requirements
- ✅ Can provide feedback on implementations
- ❌ **Cannot** make technical decisions
- ❌ **Cannot** override Solo Developer decisions

**Accountability**:
- Accountable for providing timely feedback
- Accountable for validating feature requirements

**Time Commitment**:
- Estimated: 0.5-2 hours/week (varies by involvement)

---

## Agent Roles

### Specification Agent

**Role**: Leads Discovery (Phase 1) and Specification (Phase 2)

**Responsibilities**:

#### 🔍 Phase 1: Discovery
- [ ] Conduct research on feature domain
- [ ] Investigate technology options
- [ ] Identify constraints and limitations
- [ ] Assess risks and mitigation strategies
- [ ] Answer all questions through research
- [ ] Document findings in research.md
- [ ] Create constraints.md document
- [ ] Create risks.md document
- [ ] Perform cross-dependency analysis
- [ ] Submit for Gate 1 review

#### 📋 Phase 2: Specification
- [ ] Gather user requirements
- [ ] Define user stories with acceptance criteria
- [ ] Identify functional requirements
- [ ] Identify non-functional requirements
- [ ] Define edge cases
- [ ] Document assumptions
- [ ] Identify dependencies
- [ ] Define success criteria
- [ ] Define test strategy
- [ ] Create spec.md document
- [ ] Ensure Open Questions section is EMPTY
- [ ] Submit for Gate 2 review

#### ✅ Quality Assurance
- [ ] Ensure specifications are complete
- [ ] Ensure specifications are unambiguous
- [ ] Ensure specifications are testable
- [ ] Ensure Constitution alignment
- [ ] Ensure consistency across documents

**Authority**:
- ✅ Can make decisions on research and specification
- ✅ Can document decisions
- ❌ **Cannot** make final approval decisions (Solo Developer only)
- ❌ **Cannot** override Solo Developer decisions

**Accountability**:
- Accountable for research quality
- Accountable for specification completeness
- Accountable for Gate 1 and Gate 2 submissions

**Time Commitment**:
- Estimated: 4-6 hours/day during Discovery and Specification

**Success Metrics**:
- Gate 1 pass rate: 100%
- Gate 2 pass rate: 100%
- Open Questions at submission: 0
- Constitution violations: 0

---

### Design Agent

**Role**: Leads Design (Phase 3)

**Responsibilities**:

#### 🏗️ Phase 3: Design
- [ ] Review and validate specification
- [ ] Identify technical constraints
- [ ] Create architecture design
- [ ] Design each component in detail
- [ ] Design data flow
- [ ] Design error handling
- [ ] Design state management
- [ ] Design security
- [ ] Design performance
- [ ] Design accessibility
- [ ] Design internationalization
- [ ] Perform cross-dependency analysis
- [ ] Verify Constitution alignment
- [ ] Create design.md document
- [ ] Create implementation plan (plan.md)
- [ ] Ensure Open Questions section is EMPTY
- [ ] Submit for Gate 3 review

#### ✅ Quality Assurance
- [ ] Ensure designs are implementation-ready
- [ ] Ensure designs follow best practices
- [ ] Ensure designs are testable
- [ ] Ensure Constitution alignment
- [ ] Ensure consistency with specification

**Authority**:
- ✅ Can make decisions on design
- ✅ Can document design decisions
- ❌ **Cannot** make final approval decisions
- ❌ **Cannot** override Solo Developer decisions

**Accountability**:
- Accountable for design quality
- Accountable for design completeness
- Accountable for Gate 3 submission

**Time Commitment**:
- Estimated: 4-6 hours/day during Design

**Success Metrics**:
- Gate 3 pass rate: 100%
- Open Questions at submission: 0
- Constitution violations: 0
- Design completeness: 100%

---

### Implementation Agent (Code Agent)

**Role**: Leads Implementation (Phase 4)

**Responsibilities**:

#### 💻 Phase 4: Implementation
- [ ] Review and understand Implementation Plan
- [ ] Set up development environment
- [ ] Implement Phase 1 tasks (Foundation)
  - [ ] Create project directory structure
  - [ ] Create data models
  - [ ] Set up SwiftData
  - [ ] Implement service protocols
  - [ ] Implement service classes
  - [ ] Implement repository protocols
  - [ ] Implement repository classes
- [ ] Implement Phase 2 tasks (Business Logic)
  - [ ] Implement managers (ProjectManager, LocationManager, etc.)
  - [ ] Implement ViewModels
  - [ ] Write unit tests for all business logic
- [ ] Implement Phase 3 tasks (Presentation)
  - [ ] Implement views (DevelopmentModuleView, DevelopmentSettingsView, etc.)
  - [ ] Implement UI components
  - [ ] Add accessibility support
  - [ ] Add localization support
  - [ ] Create assets
- [ ] Implement Phase 4 tasks (Integration)
  - [ ] Integrate with Dashboard
  - [ ] Integrate with Settings
  - [ ] Test end-to-end flows
  - [ ] Fix integration issues
- [ ] Implement Phase 5 tasks (Testing & Polish)
  - [ ] Write additional tests
  - [ ] Write integration tests
  - [ ] Write UI tests
  - [ ] Perform manual testing
  - [ ] Fix bugs
  - [ ] Optimize performance
  - [ ] Add documentation
- [ ] Update Task List (task-list.md)
- [ ] Ensure 100% test coverage for business logic
- [ ] Submit for Gate 4 review

#### ✅ Quality Assurance
- [ ] Follow Constitution Principles strictly
- [ ] Follow specifications exactly
- [ ] Follow designs exactly
- [ ] Write comprehensive tests
- [ ] Ensure code quality
- [ ] Ensure no Constitution violations

**Authority**:
- ✅ Can make decisions on implementation details
- ✅ Can document implementation decisions
- ❌ **Cannot** change specifications without approval
- ❌ **Cannot** change designs without approval
- ❌ **Cannot** violate Constitution Principles

**Accountability**:
- Accountable for implementation quality
- Accountable for implementation completeness
- Accountable for test coverage
- Accountable for Gate 4 submission

**Time Commitment**:
- Estimated: 6-8 hours/day during Implementation

**Success Metrics**:
- Gate 4 pass rate: 100%
- Test coverage (business logic): 100%
- Test success rate: 100%
- Constitution violations: 0
- Code quality: Meets standards

---

### Review Agent

**Role**: Reviews all artifacts and gate submissions (Cross-phase)

**Responsibilities**:

#### 📋 Document Reviews
- [ ] Review idea.md for Gate 0
- [ ] Review research.md, constraints.md, risks.md for Gate 1
- [ ] Review spec.md for Gate 2
- [ ] Review design.md, plan.md for Gate 3
- [ ] Review implementation for Gate 4
- [ ] Review verification for Gate 5

#### 🔍 Code Reviews
- [ ] Review all code for quality
- [ ] Review all code for Constitution compliance
- [ ] Review all tests for completeness
- [ ] Review all tests for correctness

#### ✅ Gate Reviews
- [ ] Verify all gate criteria are met
- [ ] Identify blocking issues
- [ ] Provide clear, actionable feedback
- [ ] Make approval recommendations
- [ ] Document review decisions

#### 📊 Quality Assurance
- [ ] Ensure artifact completeness
- [ ] Ensure artifact quality
- [ ] Ensure Constitution alignment
- [ ] Ensure consistency between artifacts
- [ ] Ensure best practices are followed

**Authority**:
- ✅ Can **recommend** approval or rejection
- ❌ **Cannot** make final approval decisions (Solo Developer only)
- ❌ **Cannot** override Solo Developer decisions

**Accountability**:
- Accountable for review quality
- Accountable for issue identification
- Accountable for feedback clarity
- Accountable for Constitution enforcement

**Time Commitment**:
- Estimated: 2-4 hours/day (varies by review load)

**Success Metrics**:
- Constitution violations found: 100%
- Gate pass rate: > 95%
- Issue identification rate: > 90%
- Review turnaround time: < 24 hours
- Feedback quality: > 4.5/5

---

## Role Collaboration

### Phase-Based Collaboration

| Phase | Primary Role | Supporting Roles | Review Role |
|-------|--------------|-----------------|-------------|
| Phase 0: Ideation | Solo Developer / Specification Agent | - | Review Agent |
| Phase 1: Discovery | Specification Agent | Solo Developer | Review Agent |
| Phase 2: Specification | Specification Agent | Solo Developer | Review Agent |
| Phase 3: Design | Design Agent | Solo Developer, Specification Agent | Review Agent |
| Phase 4: Implementation | Implementation Agent | Solo Developer, Design Agent | Review Agent |
| Phase 5: Verification | Review Agent | Solo Developer, Implementation Agent | - |

### Gate-Based Collaboration

| Gate | Primary Reviewer | Secondary Reviewers | Final Approver |
|------|------------------|---------------------|----------------|
| Gate 0 | Review Agent | - | Solo Developer |
| Gate 1 | Review Agent | Specification Agent | Solo Developer |
| Gate 2 | Review Agent | Specification Agent | Solo Developer |
| Gate 3 | Review Agent | Design Agent | Solo Developer |
| Gate 4 | Review Agent | Implementation Agent | Solo Developer |
| Gate 5 | Review Agent | Implementation Agent | Solo Developer |

---

## Role Transitions

### Handoffs Between Phases

| From Phase | To Phase | Handoff From | Handoff To | Handoff Artifacts |
|------------|----------|--------------|------------|-------------------|
| Phase 0 | Phase 1 | Solo Developer | Specification Agent | idea.md |
| Phase 1 | Phase 2 | Specification Agent | Specification Agent | research.md, constraints.md, risks.md |
| Phase 2 | Phase 3 | Specification Agent | Design Agent | spec.md |
| Phase 3 | Phase 4 | Design Agent | Implementation Agent | design.md, plan.md |
| Phase 4 | Phase 5 | Implementation Agent | Review Agent | All code, tests, documentation |

---

## Role Matrix

| Responsibility | Solo Dev | Spec Agent | Design Agent | Impl Agent | Review Agent |
|----------------|----------|------------|--------------|------------|--------------|
| Gate Approval | ✅ | ❌ | ❌ | ❌ | ❌ |
| Research | ⚠️ | ✅ | ❌ | ❌ | ⚠️ |
| Specification | ⚠️ | ✅ | ❌ | ❌ | ⚠️ |
| Design | ⚠️ | ⚠️ | ✅ | ❌ | ⚠️ |
| Implementation | ⚠️ | ❌ | ⚠️ | ✅ | ⚠️ |
| Review | ⚠️ | ❌ | ❌ | ❌ | ✅ |
| Decision Making | ✅ | ⚠️ | ⚠️ | ⚠️ | ❌ |
| Constitution Enforcement | ✅ | ✅ | ✅ | ✅ | ✅ |

**Legend**:
- ✅ = Primary responsibility
- ⚠️ = Secondary responsibility or oversight
- ❌ = Not responsible

---

## Constitution Alignment

All roles must follow the **Constitution Principles**:

| Principle | Solo Dev | Spec Agent | Design Agent | Impl Agent | Review Agent |
|-----------|----------|------------|--------------|------------|--------------|
| I (Framework) | ✅ | ✅ | ✅ | ✅ | ✅ |
| II (Tested Logic) | ✅ | ✅ | ✅ | ✅ | ✅ |
| III (Simplicity) | ✅ | ✅ | ✅ | ✅ | ✅ |
| IV (Testing) | ✅ | ✅ | ✅ | ✅ | ✅ |
| V (Proof of Concepts) | ✅ | ✅ | ✅ | ⚠️ | ✅ |
| VI (Intuitive) | ✅ | ✅ | ✅ | ✅ | ✅ |
| VII (Error Handling) | ✅ | ✅ | ✅ | ✅ | ✅ |
| VIII (Privacy) | ✅ | ✅ | ✅ | ✅ | ✅ |
| IX (Local-First) | ✅ | ✅ | ✅ | ✅ | ✅ |
| X (Performance) | ✅ | ✅ | ✅ | ✅ | ✅ |
| A (Tech Stack) | ✅ | ✅ | ✅ | ✅ | ✅ |
| B (Integration) | ✅ | ✅ | ✅ | ✅ | ✅ |
| C.1 (Concurrency) | ✅ | ✅ | ✅ | ✅ | ✅ |
| C.2 (Threading) | ✅ | ⚠️ | ✅ | ✅ | ✅ |
| D.1 (No Secrets) | ✅ | ✅ | ✅ | ✅ | ✅ |
| D.2 (HTTPS) | ✅ | ✅ | ✅ | ✅ | ✅ |
| D.3 (Data at Rest) | ✅ | ⚠️ | ✅ | ✅ | ✅ |

---

## Communication Protocols

### Communication Channels

| Purpose | Channel | Participants | Frequency |
|---------|---------|--------------|-----------|
| Task Assignment | Direct | Solo Dev ↔ Agents | As needed |
| Clarification | Direct | Solo Dev ↔ Agents | As needed |
| Status Updates | Status Reports | Solo Dev ↔ Agents | Daily |
| Gate Reviews | Gate Review Docs | All | Per gate |
| Blockers | Direct | Solo Dev ↔ Agents | Immediate |

### Escalation Path

```
Agent has question/blocker
    ↓
Agent asks Solo Developer
    ↓
If Solo Developer unavailable
    ↓
Agent documents issue and waits
    ↓
Solo Developer responds when available
```

---

## Best Practices

### For Solo Developer

✅ **Do**:
- Provide clear direction and requirements
- Make timely decisions
- Review and approve work promptly
- Maintain Constitution alignment
- Encourage agent autonomy

❌ **Don't**:
- Micromanage agents
- Make decisions without agent input
- Ignore agent concerns
- Bypass gates
- Violate Constitution

### For All Agents

✅ **Do**:
- Follow Constitution Principles strictly
- Follow role instructions
- Ask for clarification when needed
- Document all work
- Maintain quality standards

❌ **Don't**:
- Make decisions outside your authority
- Ignore Constitution Principles
- Submit work with open questions
- Violate templates or checklists
- Rush work

---

## Constitution Alignment

All roles and responsibilities defined in this document align with and support the **Framework Constitution Principles**:

| Principle | How Roles Support | Relevance |
|-----------|---------------------|-----------|
| **I. Solo Developer + Agents Autonomy** | Defines clear roles for solo developer and AI agents, enabling autonomous work | ✅ Core |
| **II. Explicit, Tested Business Logic** | Roles ensure business logic is properly specified, designed, implemented, and reviewed | ✅ Core |
| **III. Simplicity Over Abstraction** | Role definitions are simple and focused, avoiding unnecessary complexity | ✅ High |
| **IV. Informed Decisions via Explicit Options** | Solo Developer role includes making informed decisions with explicit options | ✅ High |
| **V. Complete Specification Before Implementation** | Specification Agent and Review Agent roles enforce complete specs | ✅ Core |
| **VI. Quality Gates Are Mandatory** | Review Agent role enforces quality gates at each phase | ✅ Core |
| **VII. Documentation Is Part of the Code** | All roles include documentation responsibilities | ✅ Core |
| **VIII. Personal and Private Data** | Roles respect privacy and data protection requirements | ✅ Medium |
| **IX. Local-First Architecture** | Roles support local-first development approach | ✅ Medium |
| **X. Observability and Trust** | Roles include verification and validation responsibilities | ✅ High |
| **A. Technology Stack Constraints** | Roles work within defined technology constraints | ✅ Medium |
| **B. Testing Constraints** | Roles enforce testing requirements | ✅ High |
| **C. Performance Constraints** | Roles consider performance in all decisions | ✅ Medium |
| **D. Security Constraints** | Roles enforce security and privacy requirements | ✅ High |

---

## Related Documents

- [Constitution](../00-constitution/constitution.md)
- [Decision Process](decision-process.md)
- [Process Overview](../02-methodology/process-overview.md)
- [Agent Instructions](../06-automation/agents/)
