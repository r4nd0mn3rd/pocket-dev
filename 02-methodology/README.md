# Methodology

> **Section**: 02-methodology
> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This directory contains **methodology documents** that define **how features are developed** using the Solo Agent Development Framework.

**Purpose**: Provide a structured, repeatable process for developing high-quality features from idea to production.

**Scope**: All feature development activities using this framework.

---

## Methodology Structure

The methodology is organized into **6 phases**, each with its own:
- **Process documents** - How to execute the phase
- **Checkpoints (Gates)** - Quality checkpoints between phases
- **Phase directories** - Templates, checklists, and guidance for each phase

---

## Phases

### Phase 00: Ideation

**Purpose**: Generate, evaluate, and select feature ideas.

**Key Activities**:
- Generate feature ideas
- Evaluate feasibility and value
- Select ideas for further development
- Create initial idea document

**Deliverables**:
- [Idea Document Template](../../04-templates/idea-template.md)
- Idea document for selected feature

**Checkpoint**: Gate 00 - Idea Approved

---

### Phase 01: Discovery

**Purpose**: Research, validate, and understand the feature requirements.

**Key Activities**:
- Conduct technology research
- Identify constraints and limitations
- Assess risks and mitigation strategies
- Define initial scope and requirements

**Deliverables**:
- Research document
- Constraints document
- Risks document
- Initial scope definition

**Checkpoint**: Gate 01 - Discovery Complete

---

### Phase 02: Specification

**Purpose**: Define complete, detailed requirements for the feature.

**Key Activities**:
- Define user stories with acceptance criteria
- Specify functional requirements (FR-*)
- Specify non-functional requirements
- Create test strategy
- Define success metrics

**Deliverables**:
- Specification document (spec.md)
- Requirements traceability matrix
- Test strategy
- Success criteria

**Checkpoint**: Gate 02 - Specification Approved

---

### Phase 03: Design

**Purpose**: Design the technical implementation of the feature.

**Key Activities**:
- Design architecture
- Define data models
- Design user interface
- Create implementation plan
- Define design decisions and trade-offs

**Deliverables**:
- Design document
- Architecture diagrams
- Data models
- UI mockups/designs
- Implementation plan

**Checkpoint**: Gate 03 - Design Approved

---

### Phase 04: Implementation

**Purpose**: Implement the feature according to specifications and design.

**Key Activities**:
- Implement business logic
- Implement user interface
- Write automated tests
- Integrate with existing code
- Perform code reviews

**Deliverables**:
- Source code
- Unit tests
- Integration tests
- UI tests
- Code review documentation

**Checkpoint**: Gate 04 - Implementation Complete

---

### Phase 05: Verification

**Purpose**: Verify the feature meets all requirements and is production-ready.

**Key Activities**:
- Execute all tests
- Perform manual testing
- Validate against requirements
- Verify Constitution alignment
- Prepare release documentation

**Deliverables**:
- Verification report
- Test results
- Constitution compliance report
- Release notes

**Checkpoint**: Gate 05 - Release Approved

---

## Phase Directories

| Phase | Directory | Description | Status |
|-------|-----------|-------------|--------|
| 00-ideation | [./phases/00-ideation/](./phases/00-ideation/) | Ideation phase documents and templates | ✅ Active |
| 01-discovery | [./phases/01-discovery/](./phases/01-discovery/) | Discovery phase documents and templates | ✅ Active |
| 02-specification | [./phases/02-specification/](./phases/02-specification/) | Specification phase documents and templates | ✅ Active |
| 03-design | [./phases/03-design/](./phases/03-design/) | Design phase documents and templates | ✅ Active |
| 04-implementation | [./phases/04-implementation/](./phases/04-implementation/) | Implementation phase documents and templates | ✅ Active |
| 05-verification | [./phases/05-verification/](./phases/05-verification/) | Verification phase documents and templates | ✅ Active |

---

## Quality Gates

Each phase ends with a **Quality Gate** that must be passed before moving to the next phase.

| Gate | Name | Location | Authority |
|------|------|----------|-----------|
| Gate 00 | Idea Approved | [./checkpoints/gate-00.md](./checkpoints/gate-00.md) | Solo Developer |
| Gate 01 | Discovery Complete | [./checkpoints/gate-01.md](./checkpoints/gate-01.md) | Review Agent |
| Gate 02 | Specification Approved | [./checkpoints/gate-02.md](./checkpoints/gate-02.md) | Review Agent |
| Gate 03 | Design Approved | [./checkpoints/gate-03.md](./checkpoints/gate-03.md) | Review Agent |
| Gate 04 | Implementation Complete | [./checkpoints/gate-04.md](./checkpoints/gate-04.md) | Review Agent |
| Gate 05 | Release Approved | [./checkpoints/gate-05.md](./checkpoints/gate-05.md) | Solo Developer |

---

## Methodology Documents

| Document | Description | Status |
|----------|-------------|--------|
| [process-overview.md](./process-overview.md) | Complete process overview and workflow | ✅ Active |

---

## Constitution Alignment

All methodology documents and processes align with **Framework Constitution Principles**:

| Principle | How Methodology Supports | Relevance |
|-----------|--------------------------|-----------|
| **I. Solo Developer + Agents Autonomy** | Phased approach enables agents to work autonomously on each phase | ✅ Core |
| **II. Explicit, Tested Business Logic** | Specification and testing phases ensure explicit, tested business logic | ✅ Core |
| **III. Simplicity Over Abstraction** | Methodology favors simple, focused phases | ✅ Core |
| **IV. Informed Decisions via Explicit Options** | Each phase includes decision points with explicit options | ✅ Core |
| **V. Complete Specification Before Implementation** | Specification phase (Gate 02) enforces complete specs before implementation | ✅ Core |
| **VI. Quality Gates Are Mandatory** | Methodology defines and enforces 6 mandatory quality gates | ✅ Core |
| **VII. Documentation Is Part of the Code** | Every phase produces required documentation | ✅ Core |
| **VIII. Personal and Private Data** | Methodology includes privacy considerations in all phases | ✅ Medium |
| **IX. Local-First Architecture** | Methodology supports local-first development | ✅ Medium |
| **X. Observability and Trust** | Verification phase ensures observability and trust | ✅ Core |
| **A. Technology Stack Constraints** | Methodology works within defined technology stack | ✅ Core |
| **B. Testing Constraints** | Methodology enforces comprehensive testing | ✅ Core |
| **C. Performance Constraints** | Methodology considers performance in all phases | ✅ Core |
| **D. Security Constraints** | Methodology enforces security requirements | ✅ Core |

---

## Process Flow

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│   Idea       │────▶│ Discovery     │────▶│ Specification   │
└──────┬──────┘     └───────┬───────┘     └──────────┬───────┘
       │                     │                     │
       ▼                     ▼                     ▼
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│ Gate 00      │     │ Gate 01       │     │ Gate 02          │
│ Idea Approved│     │ Discovery     │     │ Specification    │
│              │     │ Complete      │     │ Approved         │
└──────┬──────┘     └───────┬───────┘     └──────────┬───────┘
       │                     │                     │
       ▼                     ▼                     ▼
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│   Design     │────▶│ Implementation │────▶│ Verification     │
└──────┬──────┘     └───────┬───────┘     └──────────┬───────┘
       │                     │                     │
       ▼                     ▼                     ▼
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│ Gate 03      │     │ Gate 04       │     │ Gate 05          │
│ Design       │     │ Implementation│     │ Release         │
│ Approved     │     │ Complete      │     │ Approved         │
└─────────────┘     └──────────────┘     └─────────────────┘
```

---

## Phase Completion Criteria

### Gate 00: Idea Approved

✅ **Criteria**:
- Idea is clearly defined and documented
- Initial feasibility assessment complete
- Value proposition identified
- Solo Developer approval obtained

### Gate 01: Discovery Complete

✅ **Criteria**:
- Research document complete
- Constraints identified and documented
- Risks assessed and mitigation planned
- Initial scope defined
- Review Agent approval obtained

### Gate 02: Specification Approved

✅ **Criteria**:
- Specification document complete
- User stories with acceptance criteria defined
- Functional requirements (FR-*) specified
- Non-functional requirements specified
- Test strategy defined
- Review Agent approval obtained

### Gate 03: Design Approved

✅ **Criteria**:
- Design document complete
- Architecture defined
- Data models designed
- UI designs complete
- Implementation plan created
- Review Agent approval obtained

### Gate 04: Implementation Complete

✅ **Criteria**:
- All source code implemented
- All unit tests passing
- All integration tests passing
- All UI tests passing
- Code reviews complete
- Review Agent approval obtained

### Gate 05: Release Approved

✅ **Criteria**:
- All tests passing
- Verification report complete
- Constitution alignment verified
- Release notes prepared
- Solo Developer approval obtained

---

## Getting Started

### For Solo Developer

1. **Understand the Process** - Review [process-overview.md](./process-overview.md)
2. **Know the Gates** - Review all gate documents
3. **Use Templates** - Use provided templates for each phase
4. **Enforce Quality** - Ensure all gates are properly enforced

### For Agents

1. **Follow Phase Guidelines** - Each phase has specific agent instructions
2. **Use Templates** - Always use approved templates
3. **Document Everything** - All work must be documented
4. **Request Review** - Submit work for review at each gate

---

## Troubleshooting

### Common Methodology Issues

| Issue | Solution | Prevention |
|-------|----------|------------|
| Phase skipping | Enforce gate completion | Automated gate checks |
| Incomplete documentation | Use templates and checklists | Template validation |
| Scope creep | Strict scope management | Clear scope definition |
| Quality issues | Early testing and reviews | Continuous quality checks |
| Process confusion | Clear phase documentation | Regular process reviews |

---

## Related Documents

- [Constitution](../00-constitution/README.md)
- [Governance](../01-governance/README.md)
- [Standards](../03-standards/README.md)
- [Templates](../04-templates/README.md)
- [Checklists](../05-checklists/README.md)
- [Automation](../06-automation/README.md)
- [Examples](../07-examples/README.md)
