# Gate Review Template

> **Template Version**: 1.0.0
> **Use For**: Gate review submissions and documentation
> **Gate**: All gates (Gate 1-5)
> **Based On**: Constitution Principles (all)

---

## Purpose

This template standardizes **Gate Review** submissions, ensuring all required artifacts are present and properly documented before proceeding to the next phase.

**Critical**: Each gate (Gate 1-5) requires a Gate Review document to pass.

---

## Template

```markdown
# Gate [N] Review: [Feature Name]

**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Gate**: Gate [1 | 2 | 3 | 4 | 5]
**Review Date**: YYYY-MM-DD
**Reviewer**: [Name]
**Status**: [Draft | Submitted | In Review | Approved | Rejected]

## Revision History

| Version | Date | Author | Changes | Status |
|---------|------|--------|---------|--------|
| 1.0.0 | YYYY-MM-DD | [Name] | Initial submission | Draft |

---

## Executive Summary

[Brief overview of the gate review]

**Include**:
- What gate this is (Gate 1-5)
- Feature being reviewed
- Current status
- Overall assessment
- Recommendation

**Example (Gate 1)**:
> This is the **Gate 1 (Discovery Complete)** review for the Project Data Widget feature (FEA-20261029-001).
>
> **Status**: Submitted for review
> **Overall Assessment**: All required artifacts are present and appear complete. The research is thorough, constraints are well-documented, and risks are identified and mitigated. One minor issue: Open Questions section in research.md has 1 unresolved question (Q-001).
>
> **Recommendation**: ⚠️ **CONDITIONAL APPROVAL** - Approve pending resolution of Q-001 in research.md.

---

## Gate Information

[Information about the specific gate being reviewed]

### Gate Definition

**Gate [N]**: [Gate Name]

**Description**: [Brief description from gate definition]

**Purpose**: [Why this gate exists]

**Required Artifacts**: [List from gate definition]

**Approval Criteria**: [List from gate definition]

**Example (Gate 1)**:
> **Gate 1**: Discovery Complete
>
> **Description**: Validates that Discovery phase is complete with all required research, constraints, and risk assessment.
>
> **Purpose**: Ensure the feature is well-researched and understood before proceeding to specification.
>
> **Required Artifacts**:
> - ✅ idea.md (completed in Gate 0)
> - ✅ research.md
> - ✅ constraints.md
> - ✅ risks.md
> - ✅ Cross-dependency analysis
>
> **Approval Criteria**:
> - [ ] Research Findings document is complete
> - [ ] Constraints document is complete
> - [ ] Risk Assessment document is complete
> - [ ] Open Questions section is EMPTY in all documents
> - [ ] All Constitution Principles relevant to Discovery are addressed
> - [ ] Cross-dependency analysis is complete
> - [ ] All documents follow template structure
> - [ ] All documents are well-written and organized

---

## Submission Checklist

[Checklist of all required items for this gate]

### Gate [N] Required Artifacts

| Artifact | File Path | Status | Notes |
|----------|-----------|--------|-------|
| idea.md | ../../03-ideas/idea-[feature-id].md | [x] | Complete |
| research.md | ../../03-ideas/research/research-[research-id].md | [x] | Complete, but Q-001 unresolved |
| constraints.md | ../../03-ideas/constraints/constraints-[constraints-id].md | [x] | Complete |
| risks.md | ../../03-ideas/risks/risks-[risks-id].md | [x] | Complete |
| cross-dependency-checklist.md | ../../03-ideas/cross-dependency-checklist-[feature-id].md | [x] | Complete |

### Approval Criteria Checklist

| Criterion | Status | Notes |
|-----------|--------|-------|
| Research Findings is complete | [x] | All sections present |
| Constraints document is complete | [x] | All categories covered |
| Risk Assessment is complete | [x] | All risks identified |
| Open Questions is EMPTY | [ ] | Q-001 in research.md needs resolution |
| Constitution alignment verified | [x] | All relevant principles addressed |
| Cross-dependency analysis complete | [x] | Checklist filled out |
| Documents follow template | [x] | Templates used correctly |
| Documents are well-organized | [x] | Clear and readable |

---

## Artifact Review

[Detailed review of each required artifact]

### idea.md

**Status**: [Approved | Needs Revision | Rejected]
**Reviewer**: [Name]
**Date**: YYYY-MM-DD

**Comments**:
> [Detailed feedback on the idea document]

**Example**:
> **Status**: ✅ **Approved**
> **Reviewer**: Developer
> **Date**: 2026-10-29
>
> **Comments**: Idea document is well-structured and complete. All required sections are present:
> - Executive Summary is clear
> - Feature ID follows correct format
> - Questions are documented and decisions are recorded
> - Cross-reference with Constitution is provided
> - Checklist is complete
>
> No issues found. **APPROVED**.

### research.md

**Status**: [Approved | Needs Revision | Rejected]
**Reviewer**: [Name]
**Date**: YYYY-MM-DD

**Comments**:
> [Detailed feedback on the research document]

**Issues Found**:
> [List any issues that need to be resolved]

**Example**:
> **Status**: ⚠️ **Needs Revision**
> **Reviewer**: Developer
> **Date**: 2026-10-29
>
> **Comments**: Research document is thorough and well-written. All major sections are complete:
> - Executive Summary is comprehensive
> - Domain Research is detailed
> - Technology Research includes decision matrix
> - Platform Constraints are documented
> - Risk Assessment is integrated
> - Recommendations are clear
>
> **Issues Found**:
> 1. **Q-001 (Multiple locations support)**: Open Questions section has 1 unresolved question. This MUST be resolved before Gate 1 approval.
>    - **Severity**: High
>    - **Action Required**: Answer the question or move to Decisions section
>    - **Due**: Before Gate 1 approval
>
> **REVISION REQUIRED** for Q-001 resolution.

### constraints.md

**Status**: [Approved | Needs Revision | Rejected]
**Reviewer**: [Name]
**Date**: YYYY-MM-DD

**Comments**:
> [Detailed feedback on the constraints document]

### risks.md

**Status**: [Approved | Needs Revision | Rejected]
**Reviewer**: [Name]
**Date**: YYYY-MM-DD

**Comments**:
> [Detailed feedback on the risk assessment document]

### [Other Artifacts]

[Review of any other required artifacts]

---

## Constitution Verification

[Verify alignment with Constitution Principles for this gate]

### Principle Verification

| Principle | Status | Notes |
|-----------|--------|-------|
| Principle I (Framework Restrictions) | [x] | Followed |
| Principle II (Explicit, Tested Logic) | [x] | Followed |
| Principle III (Simplicity) | [x] | Followed |
| Principle IV (Automated Testing) | [x] | Followed |
| Principle V (Proof of Concepts) | [x] | Followed |
| Principle VI (Intuitive Design) | [ ] | N/A for Gate 1 |
| Principle VII (Error Handling) | [ ] | N/A for Gate 1 |
| Principle VIII (Privacy) | [x] | Addressed in constraints |
| Principle IX (Local-First) | [x] | Addressed in research |
| Principle X (Performance) | [ ] | N/A for Gate 1 |
| Principle C.1 (Concurrency) | [ ] | N/A for Gate 1 |
| Principle C.2 (Threading) | [ ] | N/A for Gate 1 |
| Principle D.1 (No Secrets) | [x] | Addressed in constraints |
| Principle D.2 (Secure Transmission) | [x] | Addressed in constraints |
| Principle D.3 (Data at Rest) | [ ] | N/A for Gate 1 |

### Constitution-Specific Comments

> [Any specific comments about Constitution alignment]

---

## Cross-Dependency Analysis

[Review of cross-dependency analysis]

**Status**: [Approved | Needs Revision | Rejected]
**Reviewer**: [Name]
**Date**: YYYY-MM-DD

**Comments**:
> [Feedback on cross-dependency analysis]

**Issues Found**:
> [List any issues]

---

## Issues Summary

[Summary of all issues found during review]

### Critical Issues (Must Fix Before Approval)

[List issues that must be resolved before the gate can be approved]

| # | Issue | Location | Severity | Owner | Due Date | Status |
|---|-------|----------|----------|-------|----------|--------|
| 1 | Q-001 unresolved in Open Questions | research.md | High | Agent | 2026-10-30 | Open |

### Medium Issues (Should Fix Before Approval)

[List issues that should be resolved before approval]

| # | Issue | Location | Severity | Owner | Due Date | Status |
|---|-------|----------|----------|-------|----------|--------|
| 1 | Minor formatting issue in Domain Research | research.md | Medium | Agent | 2026-10-29 | Open |

### Low Issues (Can Fix After Approval)

[List minor issues that don't block approval]

| # | Issue | Location | Severity | Owner | Due Date | Status |
|---|-------|----------|----------|-------|----------|--------|
| 1 | Add more examples to Technology Research | research.md | Low | Agent | 2026-11-01 | Open |

---

## Recommendation

[Final recommendation for the gate review]

**Template**:

> Based on the review of all required artifacts for **Gate [N]**, I recommend:
>
> **🟢 APPROVED** - All requirements are met. The feature may proceed to [next phase].
>
> **OR**
>
> **🟡 CONDITIONAL APPROVAL** - Approved pending resolution of [list critical issues]. Once resolved, the feature may proceed to [next phase].
>
> **OR**
>
> **🔴 REJECTED** - [Number] critical issues must be resolved before resubmission. See Issues Summary for details.

**Rationale**:
> [Explain the reasoning behind the recommendation]

**Next Steps**:
> [List what needs to happen next]

**Example (Conditional Approval)**:
> Based on the review of all required artifacts for **Gate 1**, I recommend:
>
> **🟡 CONDITIONAL APPROVAL** - Approved pending resolution of 1 critical issue (Q-001 in research.md).
>
> **Rationale**: The research, constraints, and risk assessment documents are all complete and well-documented. The only blocking issue is the unresolved question Q-001 about multiple locations support. This is a critical decision that affects the scope and design of the feature.
>
> **Next Steps**:
> 1. Agent to resolve Q-001 by getting a decision from the human developer
> 2. Agent to move Q-001 to Decisions section or answer it through research
> 3. Resubmit for Gate 1 approval once Q-001 is resolved
> 4. Upon approval, proceed to Phase 2: Specification

---

## Approval Decision

[Final decision on the gate review]

| Field | Value |
|-------|-------|
| **Gate** | Gate [N] |
| **Feature** | FEA-[YYYYMMDD]-[XXX] |
| **Decision** | [Approved | Conditional Approval | Rejected] |
| **Decision Date** | YYYY-MM-DD |
| **Decision Maker** | [Name] |
| **Conditions** | [List conditions if conditional] |

---

## Post-Approval Actions

[Actions to take after gate approval]

### If Approved

- [ ] Notify stakeholders of approval
- [ ] Update feature status to "Approved - Gate [N]"
- [ ] Begin next phase (if applicable)
- [ ] Archive review documents
- [ ] Celebrate! 🎉

### If Conditional Approval

- [ ] Notify stakeholders of conditional approval
- [ ] Document conditions that must be met
- [ ] Track resolution of conditions
- [ ] Schedule re-review once conditions are met
- [ ] Do NOT proceed to next phase until conditions are resolved

### If Rejected

- [ ] Notify stakeholders of rejection
- [ ] Document all issues that caused rejection
- [ ] Schedule follow-up meeting to discuss issues
- [ ] Create action plan for resolving issues
- [ ] Track progress on issue resolution
- [ ] Resubmit for review once all issues are resolved

---

## Review History

[Track all reviews and decisions]

| Review # | Date | Reviewer | Decision | Notes |
|----------|------|----------|----------|-------|
| 1 | 2026-10-29 | Developer | Conditional Approval | Q-001 needs resolution |
| 2 | 2026-10-30 | Developer | Approved | Q-001 resolved, all criteria met |

---

## Constitution Reminder

[Reminder of relevant Constitution Principles for this gate]

**Gate 1 (Discovery)**:
> **Principle I (Framework Restrictions)**: Framework guides and restricts, not governs. Follow the framework's structure.
> **Principle IV (Automated Testing)**: All testable logic must have automated tests. (Prepare for this in research)
> **Principle V (Proof of Concepts)**: For items that have unknowns or risk, a proof of concept must be developed. (Address in research)

**Gate 2 (Specification)**:
> **Principle II (Explicit, Tested Business Logic)**: All business logic must be explicit and covered by automated tests. (Define in specification)
> **Principle III (Simplicity Over Abstraction)**: Avoid abstractions unless absolutely necessary. (Design simple solutions)

**Gate 3 (Design)**:
> **Principle VI (Intuitive Design)**: UI and UX must be intuitive. (Design for usability)
> **Principle VII (Error Handling)**: All errors must be handled gracefully. (Design error handling)
> **Principle VIII (Personal and Private Data)**: Respect user privacy. (Design data handling)
> **Principle IX (Local-First)**: Work offline when possible. (Design offline support)

**Gate 4 (Implementation)**:
> **Principle IV (Automated Testing)**: All tests must pass. (Implement comprehensive tests)
> **Principle X (Performance)**: Performance matters. (Optimize where needed)

**Gate 5 (Verification)**:
> **All Principles**: Verify complete alignment with Constitution.

---

## Notes for Reviewers

When reviewing a gate submission:

✅ **Do**:
- **Be thorough** - check all required artifacts and criteria
- **Follow the checklist** - don't miss anything
- **Check Constitution alignment** - verify all relevant principles
- **Verify completeness** - ensure all sections are present and complete
- **Look for quality** - documents should be well-written and organized
- **Check for consistency** - documents should agree with each other
- **Identify issues** - call out problems clearly and specifically
- **Prioritize issues** - distinguish between critical and minor issues
- **Provide clear feedback** - reviewers need actionable feedback

❌ **Don't**:
- **Rubber stamp** - don't approve without checking
- **Miss artifacts** - verify all required documents are present
- **Ignore Constitution** - principles must be followed
- **Be vague** - be specific about what needs to be fixed
- **Approve with open questions** - this is a critical failure
- **Rush the review** - take the time to do it right

---

## Notes for Submitters

When submitting for gate review:

✅ **Do**:
- **Use the templates** - follow the provided template structure
- **Complete all sections** - don't leave anything blank
- **Verify Constitution alignment** - check all relevant principles
- **Resolve all open questions** - no open questions allowed
- **Check for consistency** - documents should agree with each other
- **Proofread** - fix typos and formatting issues
- **Test your documents** - can someone else understand them?
- **Submit early** - give reviewers time to review

❌ **Don't**:
- **Submit incomplete work** - finish all required artifacts first
- **Ignore the checklist** - verify all criteria are met
- **Leave open questions** - this is an automatic rejection
- **Violate Constitution** - follow all principles
- **Submit with errors** - fix all issues before submission
- **Submit at the last minute** - reviewers need time

---

## Related Documents

- [Gate Definitions](../../02-methodology/checkpoints/)
  - [Gate 0: Ideation Complete](../../02-methodology/checkpoints/gate-00.md)
  - [Gate 1: Discovery Complete](../../02-methodology/checkpoints/gate-01.md)
  - [Gate 2: Specification Complete](../../02-methodology/checkpoints/gate-02.md)
  - [Gate 3: Design Complete](../../02-methodology/checkpoints/gate-03.md)
  - [Gate 4: Implementation Complete](../../02-methodology/checkpoints/gate-04.md)
  - [Gate 5: Verification Complete](../../02-methodology/checkpoints/gate-05.md)
- [Checklists](../../05-checklists/)
  - [Gate 1 Checklist](../../05-checklists/gate-01-checklist.md)
  - [Gate 2 Checklist](../../05-checklists/gate-02-checklist.md)
  - [Gate 3 Checklist](../../05-checklists/gate-03-checklist.md)
  - [Gate 4 Checklist](../../05-checklists/gate-04-checklist.md)
  - [Gate 5 Checklist](../../05-checklists/gate-05-checklist.md)
- [Constitution](../../00-constitution/constitution.md)
