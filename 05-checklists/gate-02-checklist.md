# Gate 2 Checklist: Specification Approved

> **Checklist Version**: 1.0.0
> **Gate**: Gate 2 - Specification Approved
> **Phase**: Specification (Phase 2)
> **Next Phase**: Design (Phase 3)
> **Mandatory**: YES - Cannot proceed to Design without passing this gate

---

## Overview

This checklist verifies that the **Feature Specification** is **complete, unambiguous, and ready** for the Design phase. All items must be checked before requesting Gate 2 review.

**Owner**: Specification Agent (primary), Human Developer (approval)
**Timing**: After completing Phase 2 (Specification), before starting Phase 3 (Design)

---

## Checklist

### 📝 Documentation Completeness

**All documents must exist and be complete.**

- [ ] **Spec Document** (`spec.md`) exists and follows the template
- [ ] **Spec Document** has all required sections (see below)
- [ ] **Spec Document** has no empty sections (unless marked as "N/A")

---

### 📋 Header Section

**Verify the header is complete and accurate.**

- [ ] Feature Branch is specified
- [ ] Feature ID is unique and follows format (FEA-YYYYMMDD-XXX)
- [ ] Created date is accurate
- [ ] Last Updated date is accurate
- [ ] Status is "In Review" or "Approved" (not "Draft")
- [ ] Author is specified
- [ ] Approver field is ready for human signature

---

### 📊 Executive Summary

**The executive summary must clearly explain the feature.**

- [ ] Executive Summary exists
- [ ] Summary is 2-3 sentences long
- [ ] Summary explains **what problem is solved**
- [ ] Summary explains **what value is provided**
- [ ] Summary explains **who the feature is for**
- [ ] Summary is **clear and understandable** to non-technical readers

---

### 🔗 Background

**Background information must be complete.**

- [ ] Related Features section lists all related features with:
  - [ ] Feature name and ID
  - [ ] Relationship to this feature
  - [ ] Dependencies or interactions
- [ ] Previous Work section references relevant assessments or documents
- [ ] Assessments section lists all assessment documents that informed this spec

---

### 👥 User Scenarios & Testing

**User stories must be complete and testable.**

- [ ] At least **one P1 user story** exists
- [ ] All user stories follow the template:
  - [ ] "As a [role] I want to [action] so that [benefit]"
  - [ ] Priority is specified (P1, P2, or P3)
  - [ ] "Why this priority" is explained
  - [ ] Independent Test is described
- [ ] All user stories have **acceptance scenarios**:
  - [ ] At least **2 acceptance scenarios** per P1 user story
  - [ ] At least **1 acceptance scenario** per P2/P3 user story
  - [ ] All scenarios follow **Given-When-Then** format
  - [ ] All scenarios are **testable and specific**
  - [ ] All scenarios have **priority** specified
- [ ] **Edge Cases** section exists and:
  - [ ] Lists all identified edge cases
  - [ ] Each edge case has: ID, description, trigger, expected behavior
  - [ ] Each edge case is marked as testable or not
  - [ ] Edge cases cover: errors, boundary conditions, unusual scenarios

---

### 📌 Requirements

**Requirements must be complete, unambiguous, and testable.**

#### Functional Requirements

- [ ] At least **3 functional requirements (FR-*)** exist
- [ ] All FRs follow the template:
  - [ ] Requirement statement is **clear and unambiguous**
  - [ ] Rationale is provided
  - [ ] Source (user story or business rule) is specified
  - [ ] Priority is specified (P1, P2, or P3)
  - [ ] Testable is marked (Yes/No) with explanation if No
- [ ] All FRs are **testable** (or have valid reason if not)
- [ ] FRs cover **all core functionality** from user stories
- [ ] FRs do **not** specify implementation details

#### Non-Functional Requirements

- [ ] Non-Functional Requirements (NFR-*) section exists
- [ ] NFRs cover relevant categories:
  - [ ] Performance (if applicable)
  - [ ] Security (if applicable)
  - [ ] Usability (if applicable)
  - [ ] Accessibility (if applicable)
  - [ ] Compatibility (if applicable)
- [ ] All NFRs follow the template:
  - [ ] Requirement statement is **clear and unambiguous**
  - [ ] Category is specified
  - [ ] Priority is specified
  - [ ] Measurable is marked (Yes/No)
  - [ ] Metric is specified (if measurable)

---

### 🏗️ Key Entities

**If the feature involves data, entities must be defined.**

- [ ] Key Entities section exists **OR** is marked as N/A
- [ ] If applicable, all key entities are listed with:
  - [ ] Name
  - [ ] Description
  - [ ] Attributes (key properties/fields)
  - [ ] Relationships to other entities
  - [ ] Lifetime (session, persistent, etc.)
  - [ ] Ownership (who owns/creates this entity)

---

### ⛓️ Constraints

**Constraints must be identified and documented.**

- [ ] Constraints section exists
- [ ] Constraints are categorized:
  - [ ] Technical Constraints (TC-*)
  - [ ] Business Constraints (BC-*)
  - [ ] Legal Constraints (LC-*)
  - [ ] Resource Constraints (RC-*)
- [ ] Each constraint has:
  - [ ] Clear description
  - [ ] Source (where it comes from)
  - [ ] Impact (how it affects the feature)

---

### 🤔 Assumptions

**Assumptions must be explicit and justified.**

- [ ] Assumptions section exists
- [ ] All assumptions are documented with:
  - [ ] Assumption statement (AS-*)
  - [ ] Justification (why we're assuming this)
  - [ ] Verification (how to verify this assumption)
- [ ] Assumptions are **realistic and justified**
- [ ] No **unreasonable** assumptions

---

### 🔗 Dependencies

**Dependencies must be identified.**

- [ ] Dependencies section exists
- [ ] Dependencies are categorized:
  - [ ] External Dependencies (ED-*) - APIs, libraries, services
  - [ ] Internal Dependencies (ID-*) - other features, modules, components
  - [ ] Data Dependencies (DD-*) - data sources, formats, schemas
  - [ ] Timing Dependencies (TD-*) - things that must happen before/after
- [ ] Each dependency has:
  - [ ] Clear description
  - [ ] Purpose (what it's for)
  - [ ] Required (Yes/No)
  - [ ] Fallback (what happens if unavailable)
  - [ ] Status (Available/Not Available/Unknown)

---

### 🎯 Success Criteria

**Success criteria must be measurable and achievable.**

- [ ] Success Criteria section exists
- [ ] At least **3 success criteria (SC-*)** exist
- [ ] All SCs follow the template:
  - [ ] Criterion statement is **specific and unambiguous**
  - [ ] Measurement (how it's measured) is specified
  - [ ] Target (what the target value is) is specified
  - [ ] Verification (how to verify it's met) is specified
  - [ ] Priority is specified (P1, P2, or P3)
- [ ] All SCs are **measurable**
- [ ] All SCs are **achievable**
- [ ] SCs cover **both quantitative and qualitative** aspects
- [ ] SCs align with **user stories and requirements**

---

### ❓ Open Questions

**THIS IS THE MOST CRITICAL SECTION.**

- [ ] Open Questions section exists
- [ ] **Open Questions section is COMPLETELY EMPTY**
  - ❌ If there are ANY open questions, **Gate 2 CANNOT be passed**
  - ❌ If there are ANY open questions, **you MUST resolve them before submission**
  - ✅ All questions from Discovery must be **answered or resolved**

---

### ✅ Decisions

**Decisions must be documented.**

- [ ] Decisions section exists **OR** is marked as N/A
- [ ] If decisions were made, each has:
  - [ ] Decision ID (reference to decision document)
  - [ ] Question (what was decided)
  - [ ] Decision (the chosen option)
  - [ ] Rationale (why this was chosen)
  - [ ] Impact (consequences of this decision)

---

### 🧪 Test Strategy

**Test strategy must be defined.**

- [ ] Test Strategy section exists
- [ ] Test Types are specified:
  - [ ] Unit tests
  - [ ] Integration tests
  - [ ] UI tests (if applicable)
  - [ ] Acceptance tests
- [ ] Test Coverage requirements are specified:
  - [ ] Business logic coverage target (100%)
  - [ ] Overall coverage target (80%)
- [ ] Test Environments are specified:
  - [ ] Local testing (simulator/device)
  - [ ] CI testing
- [ ] Test Data requirements are specified
- [ ] Mocking Strategy is defined

---

### 📚 Documentation Requirements

**Documentation requirements must be listed.**

- [ ] Documentation Requirements section exists
- [ ] New documentation is listed:
  - [ ] User-facing documentation
  - [ ] Developer-facing documentation
  - [ ] Module documentation
- [ ] Updated documentation is listed:
  - [ ] Existing docs that need updates
- [ ] Documentation owners are specified (if applicable)

---

### 🚀 Rollout Plan

**Rollout plan must be defined.**

- [ ] Rollout Plan section exists
- [ ] Release Strategy is specified
- [ ] Migration Plan is specified (if applicable)
- [ ] Deprecation Plan is specified (if applicable)
- [ ] Monitoring Plan is specified

---

### 📖 Quality Criteria

**Quality checks for the specification itself.**

- [ ] Specification is **well-written and clear**
- [ ] All sections are **logically organized**
- [ ] Terminology is **consistent** throughout
- [ ] No **grammar or spelling errors**
- [ ] No **ambiguous language** (should, might, probably, etc.)
- [ ] All **acronyms are defined**
- [ ] All **cross-references are accurate**
- [ ] Specification **aligns with constitution principles**
- [ ] Specification **aligns with project goals**

---

### 🔍 Cross-Checks

**Verify consistency across sections.**

- [ ] User stories **align with** functional requirements
- [ ] Acceptance scenarios **map to** functional requirements
- [ ] Edge cases **are covered by** functional requirements
- [ ] Success criteria **align with** user stories and requirements
- [ ] Constraints **are reflected in** requirements
- [ ] Dependencies **are accounted for in** requirements
- [ ] Assumptions **don't conflict with** requirements

---

### 📝 Approval

**Verification that the specification is ready for review.**

- [ ] All checklist items above are **checked**
- [ ] Specification has been **self-reviewed**
- [ ] Specification has been **agent-reviewed** (if applicable)
- [ ] All **open questions are resolved**
- [ ] Specification is **ready for human review**

---

## Self-Review Instructions

Before requesting Gate 2 review:

1. **Read through the entire specification** from start to finish
2. **Verify each checklist item** systematically
3. **Fix any issues** you find
4. **Ask for agent review** if another agent is available
5. **Address all feedback** from agent review
6. **Do a final check** against this checklist
7. **Only then** request Gate 2 review from the human

---

## Common Reasons for Gate 2 Failure

| Reason | Example | How to Fix |
|--------|---------|------------|
| **Open Questions not empty** | Unresolved questions in spec | Answer all questions or defer feature |
| **Incomplete sections** | Missing sections or empty sections | Complete all required sections |
| **Vague requirements** | "System should be fast" | Make requirements specific and measurable |
| **Non-testable requirements** | "User should have a good experience" | Make requirements testable |
| **Missing user stories** | No user stories | Add at least one P1 user story with scenarios |
| **Missing edge cases** | No edge cases documented | Identify and document edge cases |
| **Missing success criteria** | No success criteria | Add measurable success criteria |
| **Inconsistent requirements** | FR-001 says X, FR-002 says not X | Resolve conflicts |
| **Implementation details** | Requirements specify how to implement | Remove implementation details, focus on what |
| **Poor quality** | Grammar errors, disorganized | Improve writing quality |

---

## Tips for Passing Gate 2

### For Specification Agents

✅ **Do**:
- Follow the **spec template exactly**
- Be **specific and unambiguous** in all requirements
- **Test your requirements** - can you write a test for each?
- **Think through edge cases** systematically
- **Verify all cross-references** are accurate
- **Ask for clarification** early if anything is unclear
- **Use the checklist** to verify completeness

❌ **Don't**:
- Submit with **open questions**
- Use **vague language**
- Skip **edge cases**
- Submit with **empty sections**
- **Guess** at requirements
- **Rush** through the specification

### For Human Developers

✅ **Do**:
- Provide **clear direction** on project goals
- Answer agent questions **promptly and clearly**
- Give **specific feedback** on drafts
- **Review thoroughly** before approval
- **Check for completeness** against the checklist

❌ **Don't**:
- Approve **incomplete specifications**
- Accept **vague requirements**
- Ignore **open questions**
- **Rush the review**

---

## Gate 2 Review Process

### Step 1: Agent Self-Review

The agent:
1. Completes the specification
2. Reviews against this checklist
3. Fixes any issues found
4. Confirms all checklist items are complete

### Step 2: Agent Requests Review

The agent:
1. Creates a **Gate 2 Review Request** document
2. Includes:
   - Feature name and ID
   - Link to specification
   - Confirmation that all checklist items are complete
   - Confirmation that Open Questions section is empty
3. Tags the human developer for review

### Step 3: Human Review

The human:
1. Reviews the specification against this checklist
2. Verifies all sections are complete
3. Checks for **clarity, completeness, and correctness**
4. Provides feedback on any issues

### Step 4: Feedback and Iteration

- If **feedback is provided**: Agent addresses feedback and resubmits
- If **approved**: Gate 2 is passed, proceed to Phase 3
- If **rejected**: Agent addresses issues and resubmits

### Step 5: Gate 2 Pass

When Gate 2 is passed:
1. Human signs off in the Approval section
2. Specification status is updated to "Approved"
3. Feature can proceed to **Phase 3: Design**

---

## Quick Reference

| Check | Requirement | Status |
|-------|-------------|--------|
| Spec document exists | ✅ | [ ] |
| All sections complete | ✅ | [ ] |
| At least 1 P1 user story | ✅ | [ ] |
| All acceptance scenarios are Given-When-Then | ✅ | [ ] |
| At least 3 functional requirements | ✅ | [ ] |
| All requirements are testable | ✅ | [ ] |
| Edge cases are documented | ✅ | [ ] |
| Success criteria are measurable | ✅ | [ ] |
| Constraints are documented | ✅ | [ ] |
| Assumptions are documented | ✅ | [ ] |
| Dependencies are documented | ✅ | [ ] |
| **Open Questions is EMPTY** | ⭐ **CRITICAL** | [ ] |
| Test strategy is defined | ✅ | [ ] |
| Documentation requirements are listed | ✅ | [ ] |
| Rollout plan is defined | ✅ | [ ] |
| Specification is well-written | ✅ | [ ] |

---

## Related Documents

- [Spec Template](../../04-templates/spec-template.md)
- [Gate 2 Definition](../../02-methodology/checkpoints/gate-02.md)
- [Phase 2: Specification](../../02-methodology/phases/02-specification/README.md)
- [Process Overview](../../02-methodology/process-overview.md)
- [Constitution](../../00-constitution/constitution.md)
