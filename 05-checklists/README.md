# Checklists

> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This directory contains **all checklists** used in the Solo Agent Development Framework. Checklists ensure that all artifacts are **complete, consistent, and ready for the next phase** before submission.

**Purpose**:
- Ensure nothing is missed during development
- Provide clear criteria for gate approvals
- Standardize review process
- Maintain quality across all artifacts

---

## Checklist Types

### 1. Gate Checklists

Checklists for each gate submission:

| Checklist | Gate | Purpose |
|-----------|------|---------|
| [gate-00-checklist.md](./gate-00-checklist.md) | Gate 0 | Validate idea completion and readiness for discovery |
| [gate-01-checklist.md](./gate-01-checklist.md) | Gate 1 | Validate discovery completion and readiness for specification |
| [gate-02-checklist.md](./gate-02-checklist.md) | Gate 2 | Validate specification completion and readiness for design |
| [gate-03-checklist.md](./gate-03-checklist.md) | Gate 3 | Validate design completion and readiness for implementation |
| [gate-04-checklist.md](./gate-04-checklist.md) | Gate 4 | Validate implementation completion and readiness for verification |
| [gate-05-checklist.md](./gate-05-checklist.md) | Gate 5 | Validate verification completion and readiness for release |

---

### 2. Phase Checklists

Checklists for each phase (located in phase directories):

| Checklist | Phase | Location |
|-----------|-------|----------|
| Ideation Checklist | Phase 0 | 02-methodology/phases/00-ideation/checklist.md |
| Discovery Checklist | Phase 1 | 02-methodology/phases/01-discovery/checklist.md |
| Specification Checklist | Phase 2 | 02-methodology/phases/02-specification/checklist.md |
| Design Checklist | Phase 3 | 02-methodology/phases/03-design/checklist.md |
| Implementation Checklist | Phase 4 | 02-methodology/phases/04-implementation/checklist.md |
| Verification Checklist | Phase 5 | 02-methodology/phases/05-verification/checklist.md |

---

## Checklist Structure

All checklists follow a **consistent structure**:

### Required Sections

1. **Header Block**
   - Checklist title
   - Document version
   - Status
   - Last updated date
   - Owner
   - Gate information

2. **Overview**
   - Purpose of the checklist
   - When to use it
   - What it validates

3. **Checklist Items**
   - Organized by category
   - Each item is a checkbox
   - Clear, actionable description
   - Reference to relevant documentation

4. **Approval Criteria**
   - Conditions for passing the gate/phase
   - Minimum requirements
   - Quality standards

5. **Submission Instructions**
   - How to submit for review
   - Required artifacts
   - Review process

6. **Constitution Alignment**
   - Checklist of Constitution Principles
   - Compliance verification

7. **Related Documents**
   - Links to templates
   - Links to standards
   - Links to examples

---

## Checklist Usage Guidelines

### When to Use Checklists

✅ **Always use checklists** when:
- Completing a phase
- Preparing for a gate review
- Reviewing someone else's work
- Auditing framework compliance

❌ **Do NOT**:
- Skip checklist items
- Mark items complete without verification
- Submit with incomplete checklists (for gates)

### How to Use Checklists

1. **Review the checklist** at the start of the phase
2. **Track progress** as you complete items
3. **Verify each item** before marking complete
4. **Address all issues** before submission
5. **Use as a guide** for reviews

### Checklist Completion Rules

- ✅ **All items must be checked** for gate submissions
- ✅ **All critical items** must be verified
- ✅ **No open questions** should remain
- ✅ **Constitution alignment** must be confirmed

---

## Gate Checklist Process

### Before Submission

1. **Self-review** using the checklist
2. **Verify all items** are complete
3. **Address all warnings** and errors
4. **Ensure Constitution alignment**
5. **Document any deviations** with justification

### During Review

1. **Reviewer uses checklist** to verify submission
2. **Each item is checked** by reviewer
3. **Issues are identified** and documented
4. **Feedback is provided** on checklist items
5. **Decision is made** based on checklist completion

### After Review

1. **Address all feedback** from reviewer
2. **Update checklist** with changes
3. **Resubmit** for approval
4. **Archive completed checklist**

---

## Constitution Alignment

All checklists ensure **Constitution alignment**:

| Principle | How Checklists Support |
|-----------|------------------------|
| **I. Framework** | Checklists validate framework compliance |
| **II. Tested Logic** | Checklists verify testing is complete |
| **III. Simplicity** | Checklists ensure simplicity is maintained |
| **IV. Testing** | Checklists verify comprehensive testing |
| **V. Proof of Concepts** | Checklists validate research and validation |
| **VI. Intuitive** | Checklists ensure intuitive design |
| **VII. Error Handling** | Checklists verify error handling is complete |
| **VIII. Privacy** | Checklists verify privacy is protected |
| **IX. Local-First** | Checklists verify offline support |
| **X. Performance** | Checklists verify performance requirements |
| **A. Tech Stack** | Checklists verify tech stack usage |
| **B. Integration** | Checklists verify integration is correct |
| **C.1 Concurrency** | Checklists verify concurrency handling |
| **C.2 Threading** | Checklists verify threading is correct |
| **D.1 No Secrets** | Checklists verify no secrets in code |
| **D.2 HTTPS** | Checklists verify HTTPS usage |
| **D.3 Encryption** | Checklists verify encryption at rest |

---

## Checklist Categories

### Gate 0: Ideation

**Focus**: Feature idea validation

**Key Checks**:
- Feature information is complete
- Problem statement is clear
- Value proposition is defined
- Goals and objectives are set
- Scope is well-defined
- Dependencies are identified
- Assumptions are documented
- Constitution alignment is verified

---

### Gate 1: Discovery

**Focus**: Technical feasibility validation

**Key Checks**:
- Research is comprehensive
- Technical constraints are identified
- Risks are assessed and mitigated
- Constitution alignment is verified
- All open questions are resolved

---

### Gate 2: Specification

**Focus**: Requirements completeness

**Key Checks**:
- All user stories are defined
- Functional requirements are complete
- Non-functional requirements are defined
- Acceptance criteria are clear
- Edge cases are identified
- Dependencies are documented
- Constitution alignment is verified

---

### Gate 3: Design

**Focus**: Architecture and design validation

**Key Checks**:
- Architecture is well-designed
- Components are clearly defined
- Data flow is documented
- Error handling is designed
- State management is planned
- Constitution alignment is verified

---

### Gate 4: Implementation

**Focus**: Implementation completeness

**Key Checks**:
- All tasks are complete
- Code follows standards
- All business logic is tested (100% coverage)
- Error handling is implemented
- Performance requirements are met
- Constitution alignment is maintained

---

### Gate 5: Verification

**Focus**: Release readiness

**Key Checks**:
- All tests pass
- All acceptance criteria are met
- Performance requirements are satisfied
- User testing is complete
- Documentation is complete
- Constitution alignment is verified

---

## Checklist Quality Standards

### Content Standards

✅ **Do**:
- Use clear, actionable language
- Include specific criteria
- Reference relevant documentation
- Use consistent formatting
- Include examples where helpful

❌ **Don't**:
- Use vague or ambiguous language
- Include subjective criteria
- Reference undefined terms
- Use inconsistent formatting
- Include redundant items

### Formatting Standards

- Use Markdown for all checklists
- Use consistent heading hierarchy
- Use checkboxes for all items
- Use tables for structured data
- Include metadata in header block
- Use consistent naming conventions

---

## Checklist Maintenance

### Version Control

- Each checklist has a **version number** in the header
- Checklist versions follow **Semantic Versioning (MAJOR.MINOR.PATCH)**
- Version history is maintained in the checklist

### Update Process

1. **Identify needed changes**
2. **Create change request** (if significant)
3. **Update checklist** with changes
4. **Update version number**
5. **Add entry to version history**
6. **Review changes** with team
7. **Announce changes** to all users

### Deprecation Process

1. **Mark as deprecated** in header
2. **Add deprecation notice** at top
3. **Create replacement checklist** (if applicable)
4. **Update all references** to use new checklist
5. **Remove deprecated checklist** after transition period

---

## Checklist Index

### By Gate

| Gate | Checklist | Purpose |
|------|-----------|---------|
| Gate 0 | gate-00-checklist.md | Validate idea completion |
| Gate 1 | gate-01-checklist.md | Validate discovery completion |
| Gate 2 | gate-02-checklist.md | Validate specification completion |
| Gate 3 | gate-03-checklist.md | Validate design completion |
| Gate 4 | gate-04-checklist.md | Validate implementation completion |
| Gate 5 | gate-05-checklist.md | Validate verification completion |

### By Phase

| Phase | Checklist | Location |
|-------|-----------|----------|
| Phase 0 | 00-ideation/checklist.md | 02-methodology/phases/00-ideation/ |
| Phase 1 | 01-discovery/checklist.md | 02-methodology/phases/01-discovery/ |
| Phase 2 | 02-specification/checklist.md | 02-methodology/phases/02-specification/ |
| Phase 3 | 03-design/checklist.md | 02-methodology/phases/03-design/ |
| Phase 4 | 04-implementation/checklist.md | 02-methodology/phases/04-implementation/ |
| Phase 5 | 05-verification/checklist.md | 02-methodology/phases/05-verification/ |

---

## Quick Reference

### When to Use Which Checklist

| Situation | Checklist to Use |
|-----------|-----------------|
| Starting a new feature | Gate 0 checklist |
| Completing research | Gate 1 checklist |
| Completing specification | Gate 2 checklist |
| Completing design | Gate 3 checklist |
| Completing implementation | Gate 4 checklist |
| Preparing for release | Gate 5 checklist |
| Reviewing ideation | Phase 0 checklist |
| Reviewing discovery | Phase 1 checklist |
| Reviewing specification | Phase 2 checklist |
| Reviewing design | Phase 3 checklist |
| Reviewing implementation | Phase 4 checklist |
| Reviewing verification | Phase 5 checklist |

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Checklist not found | Check checklist is in correct directory |
| Checklist outdated | Check for newer version |
| Checklist doesn't fit needs | This might indicate a framework issue |
| Missing required items | Complete all required items before submission |
| Constitution alignment unclear | Review Constitution Principles |

### Getting Help

1. **Check this README** for checklist information
2. **Review the Constitution** for Principles
3. **Check examples** in /07-examples/
4. **Ask the Solo Developer** for clarification
5. **Consult the Review Agent** for feedback

---

## Related Documents

- [Constitution](../00-constitution/constitution.md)
- [Process Overview](../02-methodology/process-overview.md)
- [Templates](../04-templates/README.md)
- [Standards](../03-standards/README.md)
- [Gate Definitions](../02-methodology/checkpoints/README.md)
