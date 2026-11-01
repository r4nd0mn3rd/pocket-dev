# Gate 0 Checklist: Idea Approved

> **Checklist Version**: 1.0.0
> **Gate**: Gate 0 - Idea Approved
> **Phase**: Ideation (Phase 0)
> **Next Phase**: Discovery (Phase 1)
> **Mandatory**: YES - Cannot proceed to Discovery without passing this gate

---

## Overview

This checklist verifies that the **Feature Idea** is **complete, well-defined, and ready** for the Discovery phase. All items must be checked before requesting Gate 0 review.

**Owner**: Any agent or human developer
**Timing**: After completing Phase 0 (Ideation), before starting Phase 1 (Discovery)

---

## Checklist

### 📝 Documentation Completeness

**The idea document must exist and be complete.**

- [ ] **Idea Document** (`idea.md`) exists
- [ ] **Idea Document** follows the `idea-template.md` template
- [ ] **Idea Document** has all required sections
- [ ] **Idea Document** has no empty required sections

---

### 📋 Header Section

**Verify the header is complete and accurate.**

- [ ] Feature Branch is specified
- [ ] Feature ID is unique and follows format (FEA-YYYYMMDD-XXX)
- [ ] Idea ID is unique and follows format (IDE-YYYYMMDD-XXX)
- [ ] Created date is accurate
- [ ] Last Updated date is accurate
- [ ] Status is "In Review" or "Approved" (not "Draft")
- [ ] Author is specified
- [ ] Approver field is ready for signature

---

### 📊 Executive Summary

**The executive summary must clearly explain the idea.**

- [ ] Executive Summary exists
- [ ] Summary is 2-3 sentences long
- [ ] Summary explains **what the feature is**
- [ ] Summary explains **what problem it solves**
- [ ] Summary explains **what value it provides**
- [ ] Summary is **clear and understandable** to non-technical readers

---

### 🎯 Purpose

**The purpose must be clearly defined.**

- [ ] Purpose section exists
- [ ] Purpose explains **why this feature is needed**
- [ ] Purpose explains **who will benefit** from this feature
- [ ] Purpose explains **how it aligns with project goals**
- [ ] Purpose is **specific and measurable**

---

### 💡 Motivation

**The motivation must be compelling and well-articulated.**

- [ ] Motivation section exists
- [ ] Motivation explains the **current situation or problem**
- [ ] Motivation explains **why this matters**
- [ ] Motivation explains **what happens if we don't build this**
- [ ] Motivation is **convincing and well-reasoned**

---

### 🎯 Goals and Objectives

**Goals and objectives must be SMART (Specific, Measurable, Achievable, Relevant, Time-bound).**

- [ ] Goals section exists
- [ ] At least **1 primary goal** is defined
- [ ] Each goal is **specific and measurable**
- [ ] Each goal has **success criteria**
- [ ] Objectives (if any) are **clear and actionable**
- [ ] Goals align with **Constitution Principles**

---

### 🚀 User Value Proposition

**The value to users must be clearly articulated.**

- [ ] User Value Proposition section exists
- [ ] Value is explained from the **user's perspective**
- [ ] Value explains **what the user gets**
- [ ] Value explains **why the user cares**
- [ ] Value is **compelling and differentiated**

---

### 📚 Background

**Background information must be complete.**

- [ ] Background section exists
- [ ] Background provides **context** for the feature
- [ ] Background explains **current state** (if applicable)
- [ ] Background references **related work** (if applicable)
- [ ] Background is **concise and relevant**

---

### 🤔 Questions and Considerations

**Questions must be documented and answered.**

- [ ] Questions section exists
- [ ] All questions are **clearly stated**
- [ ] Each question has:
  - [ ] Question ID (Q-XXX format)
  - [ ] Clear question statement
  - [ ] Context (why this question matters)
  - [ ] Impact (what happens if not answered)
  - [ ] Options considered (if applicable)
  - [ ] Recommendation
  - [ ] Decision (if decided)
- [ ] **CRITICAL**: **Open Questions section is EMPTY**
  - [ ] All questions have been **answered or deferred**
  - [ ] No questions remain unresolved

---

### ✅ Decisions

**Decisions must be documented.**

- [ ] Decisions section exists
- [ ] All decisions from ideation are recorded
- [ ] Each decision has:
  - [ ] Decision ID (DEC-YYYYMMDD-XXX format)
  - [ ] Question being decided
  - [ ] Options considered
  - [ ] Decision made
  - [ ] Rationale for decision
  - [ ] Impact of decision
  - [ ] Decision maker
  - [ ] Decision date

---

### 📜 Constitution Cross-Reference

**Constitution alignment must be verified.**

- [ ] Constitution Cross-Reference section exists
- [ ] Cross-reference lists all **relevant Constitution Principles**
- [ ] Each principle has **explanation of how it's addressed**
- [ ] All **Constitution Principles** are considered

---

### ✅ Constitution Verification

**Constitution verification must be complete.**

- [ ] Constitution Verification checklist exists
- [ ] Each relevant principle is checked:
  - [ ] **Principle I (Framework Restrictions)**: Follows framework structure
  - [ ] **Principle II (Explicit, Tested Business Logic)**: Can be tested
  - [ ] **Principle III (Simplicity Over Abstraction)**: Not overly complex
  - [ ] **Principle IV (Automated Testing)**: Can be automatically tested
  - [ ] **Principle V (Proof of Concepts)**: High-risk areas identified
  - [ ] **Principle VI (Intuitive Design)**: Will result in intuitive UI
  - [ ] **Principle VII (Error Handling)**: Error scenarios considered
  - [ ] **Principle VIII (Personal and Private Data)**: Privacy considerations noted
  - [ ] **Principle IX (Local-First)**: Offline considerations noted
  - [ ] **Principle X (Performance)**: Performance considerations noted
  - [ ] **Principle A (Technology Stack)**: Uses approved technologies
  - [ ] **Principle B (Integration)**: Integration considerations noted
  - [ ] **Principle C.1 (Concurrency)**: Concurrency considerations noted
  - [ ] **Principle C.2 (Threading)**: Threading considerations noted
  - [ ] **Principle D.1 (No hardcoded secrets)**: No secrets will be needed
  - [ ] **Principle D.2 (Secure transmission)**: Secure transmission possible
  - [ ] **Principle D.3 (Data at rest)**: Data protection considerations noted

---

### 📋 Checklist

**The checklist must be complete.**

- [ ] Checklist section exists
- [ ] All checklist items are **marked as complete**
- [ ] No checklist items are **left unchecked**

---

### 📝 Notes

**Notes must be appropriate.**

- [ ] Notes section exists (if applicable)
- [ ] Notes provide **additional context**
- [ ] Notes are **clear and relevant**

---

## Constitution Alignment

### Mandatory Constitution Principles for Gate 0

**These principles MUST be addressed for Gate 0 approval:**

- [ ] **Principle I (Framework Restrictions)**: The idea follows framework structure
- [ ] **Principle II (Explicit, Tested Business Logic)**: The feature can have explicit, testable logic
- [ ] **Principle III (Simplicity Over Abstraction)**: The feature is appropriately scoped
- [ ] **Principle IV (Automated Testing)**: The feature can be automatically tested
- [ ] **Principle V (Proof of Concepts)**: High-risk areas are identified

### Recommended Constitution Principles for Gate 0

**These principles SHOULD be considered for Gate 0:**

- [ ] **Principle VI (Intuitive Design)**: The feature will have intuitive UI
- [ ] **Principle VII (Error Handling)**: Error scenarios are considered
- [ ] **Principle VIII (Personal and Private Data)**: Privacy considerations are noted
- [ ] **Principle IX (Local-First)**: Offline considerations are noted
- [ ] **Principle X (Performance)**: Performance considerations are noted
- [ ] **Principle A (Technology Stack)**: Uses approved technologies
- [ ] **Principle B (Integration)**: Integration considerations are noted
- [ ] **Principle C.1 (Concurrency)**: Concurrency is considered
- [ ] **Principle C.2 (Threading)**: Threading is considered
- [ ] **Principle D.1 (No hardcoded secrets)**: No secrets will be needed
- [ ] **Principle D.2 (Secure transmission)**: Secure transmission is possible
- [ ] **Principle D.3 (Data at rest)**: Data protection is considered

---

## Quality Criteria

### Document Quality

- [ ] Document is **well-written and professional**
- [ ] Document has **good structure and organization**
- [ ] Document uses **clear and concise language**
- [ ] Document has **no typos or grammatical errors**
- [ ] Document is **easy to understand**

### Idea Quality

- [ ] Idea is **clear and well-defined**
- [ ] Idea has **compelling motivation**
- [ ] Idea provides **clear user value**
- [ ] Idea is **feasible** (high-level)
- [ ] Idea is **appropriately scoped**

---

## Approval Criteria

**For Gate 0 to be approved, ALL of the following must be true:**

- [ ] Idea document (`idea.md`) exists and follows template
- [ ] All required sections are complete
- [ ] Executive Summary is clear and compelling
- [ ] Purpose and Motivation are well-defined
- [ ] Goals and Objectives are SMART
- [ ] User Value Proposition is compelling
- [ ] All questions are answered (Open Questions is EMPTY)
- [ ] All decisions are documented
- [ ] Constitution cross-reference is complete
- [ ] Constitution verification is complete
- [ ] Document quality is acceptable
- [ ] Idea quality is acceptable

---

## Review Process

### Self-Review (Before Submission)

1. **Complete this checklist**
2. **Fix all incomplete items**
3. **Verify Open Questions is EMPTY**
4. **Verify Constitution alignment**
5. **Proofread the document**

### Peer Review (Optional)

1. **Ask another agent to review**
2. **Address their feedback**
3. **Update the document**

### Gate Review (Mandatory)

1. **Submit for Gate 0 review**
2. **Address reviewer feedback**
3. **Resubmit if rejected**

---

## Common Rejection Reasons

**Gate 0 is most commonly rejected for these reasons:**

1. **Open Questions not empty** - All questions must be resolved
2. **Incomplete sections** - All required sections must be complete
3. **Poor quality** - Document must be well-written and professional
4. **Unclear idea** - Idea must be clearly defined and compelling
5. **Constitution violations** - Idea must align with Constitution

---

## Tips for Success

✅ **Do**:
- **Start with a clear problem statement**
- **Define compelling user value**
- **Answer all questions** before submission
- **Check Constitution alignment** early
- **Keep it concise but complete**

❌ **Don't**:
- **Submit with open questions**
- **Skip Constitution verification**
- **Make it too vague**
- **Make it too complex**
- **Rush the process**

---

## Related Documents

- [Gate 0 Definition](../02-methodology/checkpoints/gate-00.md)
- [Idea Template](../04-templates/idea-template.md)
- [Constitution](../00-constitution/constitution.md)
- [Process Overview](../02-methodology/process-overview.md)
