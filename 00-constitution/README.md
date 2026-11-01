# Constitution

> **Section**: 00-constitution
> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This directory contains the **Framework Constitution** - the supreme governing document for the Solo Agent Development Framework.

**Purpose**: Establish non-negotiable principles that govern all development activities.

**Authority**: This document takes precedence over all other framework documents, processes, and guidelines.

---

## Constitution Document

| Document | Description | Status |
|----------|-------------|--------|
| [constitution.md](./constitution.md) | Complete Framework Constitution with all principles | ✅ Active |

---

## Constitution Principles

The Framework Constitution contains **16 Core Principles** organized into **4 categories**:

### Core Principles (I-X)

1. **I. Solo Developer + Agents Autonomy** - Enable single developer with AI agents to complete all development phases
2. **II. Explicit, Tested Business Logic** - Business logic must be explicit and thoroughly tested
3. **III. Simplicity Over Abstraction** - Favor simplest design that meets requirements
4. **IV. Informed Decisions via Explicit Options** - Present explicit options with trade-offs when decisions are needed
5. **V. Complete Specification Before Implementation** - Implementation cannot begin until specification is complete
6. **VI. Quality Gates Are Mandatory** - Quality gates must be passed at each phase
7. **VII. Documentation Is Part of the Code** - Documentation is a first-class deliverable
8. **VIII. Personal and Private Data** - Protect personal and private data by design
9. **IX. Local-First Architecture** - Prioritize local data and offline functionality
10. **X. Observability and Trust** - Ensure all systems are observable and trustworthy

### Technology Principles (A-D)

11. **A. Technology Stack Constraints** - Use Swift + SwiftUI + SwiftData for Apple platforms
12. **B. Testing Constraints** - Comprehensive testing at all levels is mandatory
13. **C. Performance Constraints** - Performance must be a first-class consideration
14. **D. Security Constraints** - Security must be built in from the start

### Operational Rules

15. **Rule 1: Phase Completion** - Each phase must be complete before moving to the next
16. **Rule 2: Agent Tasking** - Tasks must be decomposable for agent execution
17. **Rule 3: Human Oversight** - Human developer maintains oversight and makes final decisions
18. **Rule 4: Iteration** - Iteration is allowed and encouraged within phases
19. **Rule 5: Documentation** - All work must be documented

---

## Constitution Compliance

### Compliance Requirements

✅ **All framework documents** must align with Constitution Principles
✅ **All features** must be developed in accordance with Constitution Principles
✅ **All decisions** must respect Constitution Principles
✅ **All conflicts** are resolved by referring to the Constitution

### Compliance Verification

The framework includes automated checks to verify Constitution alignment:
- [Framework Check Script](../06-automation/scripts/framework-check.sh)
- Manual compliance reviews
- Gate checklists

---

## Constitution Evolution

### Amendment Process

The Constitution can be amended through a formal process:

1. **Propose Amendment** - Submit via change request
2. **Review** - Review by Solo Developer and Review Agent
3. **Ratify** - Ratification creates new version
4. **Communicate** - All stakeholders notified of changes

### Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 2.0.0 | 2026-10-29 | Framework v2 constitution | Active |
| 1.1.0 | 2026-10-28 | Project constitution v1.1 | Superseded |
| 1.0.0 | 2026-10-27 | Initial project constitution | Superseded |

See [constitution.md](./constitution.md) for complete version history.

---

## Constitution Alignment

All framework sections align with Constitution Principles:

| Section | Primary Principles | Status |
|---------|---------------------|--------|
| 01-governance | I, II, IV, VI | ✅ Aligned |
| 02-methodology | I, V, VI, VII | ✅ Aligned |
| 03-standards | II, III, B, C, D | ✅ Aligned |
| 04-templates | II, V, VII | ✅ Aligned |
| 05-checklists | II, VI, VII | ✅ Aligned |
| 06-automation | I, II, VII | ✅ Aligned |
| 07-examples | All Principles | ✅ Aligned |

---

## Getting Started with the Constitution

### For New Users

1. **Read the Constitution** - Start with [constitution.md](./constitution.md)
2. **Understand the Principles** - Each principle has implications and requirements
3. **Apply in Practice** - Use principles to guide all development decisions
4. **Check Compliance** - Verify your work aligns with principles

### For Framework Maintainers

1. **Review Regularly** - Keep Constitution current and relevant
2. **Update as Needed** - Propose amendments when principles need to evolve
3. **Enforce Compliance** - Ensure all framework components follow the Constitution
4. **Document Alignment** - Explicitly show how components align with principles

---

## Related Documents

- [Governance](../01-governance/README.md)
- [Methodology](../02-methodology/README.md)
- [Standards](../03-standards/README.md)
- [Constitution Document](./constitution.md)
