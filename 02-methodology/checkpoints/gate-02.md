# Gate 2: Specification Approved

> **Gate ID**: Gate-02
> **Version**: 1.0.0
> **Phase**: Specification (Phase 2)
> **Next Phase**: Design (Phase 3)
> **Reviewer**: Human Developer
> **Mandatory**: YES - Cannot proceed to Design without passing this gate

---

## Purpose

Gate 2 ensures that:
1. The **feature specification is complete**
2. All **requirements are unambiguous and testable**
3. All **user stories have acceptance scenarios**
4. All **edge cases are identified**
5. All **success criteria are measurable**
6. **Grilling is complete**: intent, description, constraints, and acceptance criteria are clear and comprehensive
7. **No open questions remain**
8. The specification **aligns with constitution principles**

**Critical Rule**: Implementation CANNOT start until Gate 2 is passed (Constitution Principle V).

---

## Input Requirements

Before requesting Gate 2 review, the following must be **complete**:

### Required Artifacts

| Artifact | Location | Mandatory | Description |
|----------|----------|-----------|-------------|
| Feature Specification | `specs/[FEATURE]/spec.md` | YES | Complete specification document |
| User Stories (optional) | `specs/[FEATURE]/user-stories.md` | NO | Detailed user stories (can be in spec.md) |
| Acceptance Criteria (optional) | `specs/[FEATURE]/acceptance-criteria.md` | NO | Testable acceptance criteria (can be in spec.md) |

### Required Sections in Specification

The Specification Document (`spec.md`) MUST contain all sections from the **Spec Template** (`04-templates/spec-template.md`):

1. **Header** (Feature ID, dates, status, authors)
2. **Executive Summary**
3. **Background** (related features, previous work, assessments)
4. **User Scenarios & Testing** (user stories with acceptance scenarios)
5. **Edge Cases**
6. **Requirements** (functional and non-functional)
7. **Key Entities** (if applicable)
8. **Constraints**
9. **Assumptions**
10. **Dependencies**
11. **Success Criteria**
12. **Open Questions** (**MUST BE EMPTY**)
13. **Decisions**
14. **Test Strategy**
15. **Implementation Notes**
16. **Documentation Requirements**
17. **Rollout Plan**

---

## Gate 2 Criteria

To pass Gate 2, **ALL** of the following criteria must be met:

### ✅ Mandatory Criteria (All Must Pass)

#### Documentation Quality
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-01 | Spec Document exists | File `specs/[FEATURE]/spec.md` exists | |
| G2-M-02 | Spec follows template | All required sections present | Use `04-templates/spec-template.md` |
| G2-M-03 | No empty sections | All sections filled (or marked N/A) | |
| G2-M-04 | Professional quality | Well-written, clear, organized | |

#### Executive Summary
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-05 | Executive Summary exists | Section present | |
| G2-M-06 | Summary is clear | 2-3 sentences, explains problem/value/audience | |

#### Background
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-07 | Related Features documented | All related features listed | |
| G2-M-08 | Previous Work referenced | Links to relevant prior work | |
| G2-M-09 | Assessments referenced | Links to assessment documents | |

#### User Stories & Testing
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-10 | At least 1 P1 user story | Primary use case documented | |
| G2-M-11 | User stories follow template | "As a... I want... So that..." format | |
| G2-M-12 | Priorities assigned | All stories have P1/P2/P3 priority | |
| G2-M-13 | Independent tests defined | Each story has independent test | |
| G2-M-14 | Acceptance scenarios exist | At least 2 per P1 story, 1 per P2/P3 | |
| G2-M-15 | Scenarios are Given-When-Then | All scenarios follow GWT format | |
| G2-M-16 | Scenarios are testable | All scenarios can be verified | |
| G2-M-17 | Edge cases documented | All edge cases identified | |
| G2-M-18 | Edge cases have details | Each has ID, trigger, expected behavior | |

#### Requirements
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-19 | At least 3 functional requirements | FR-001, FR-002, etc. | |
| G2-M-20 | Requirements are unambiguous | Clear, specific language | No "should", "might", "probably" |
| G2-M-21 | Requirements are testable | Can be verified with a test | |
| G2-M-22 | Requirements have sources | Linked to user stories or business rules | |
| G2-M-23 | Requirements have priorities | All FRs have P1/P2/P3 | |
| G2-M-24 | Non-functional requirements exist | NFR-* section present | |
| G2-M-25 | NFRs cover relevant categories | Performance, security, usability, etc. | |

#### Entities, Constraints, Assumptions, Dependencies
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-26 | Key entities defined | If applicable | |
| G2-M-27 | Constraints documented | All constraint categories present | TC-*, BC-*, LC-*, RC-* |
| G2-M-28 | Assumptions documented | All assumptions listed with justification | AS-* |
| G2-M-29 | Dependencies identified | All dependencies categorized | ED-*, ID-*, DD-*, TD-* |

#### Success Criteria
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-30 | At least 3 success criteria | SC-001, SC-002, etc. | |
| G2-M-31 | Criteria are measurable | Can be quantified or verified | |
| G2-M-32 | Criteria are achievable | Realistic and possible | |
| G2-M-33 | Criteria have priorities | All SCs have P1/P2/P3 | |

#### Open Questions & Decisions
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-34 | **Open Questions is EMPTY** | No open questions remain | **CRITICAL - BLOCKS GATE** |
| G2-M-35 | Decisions documented | All decisions recorded | |

#### Test Strategy & Documentation
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-36 | Test Strategy defined | Test types, coverage, environments | |
| G2-M-37 | Documentation requirements listed | New and updated docs identified | |
| G2-M-38 | Rollout plan defined | Release, migration, deprecation, monitoring | |

#### Cross-Checks
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-39 | User stories align with FRs | All user story functionality in FRs | |
| G2-M-40 | Acceptance scenarios map to FRs | Scenarios cover FR functionality | |
| G2-M-41 | Edge cases covered by FRs | Edge cases have corresponding requirements | |
| G2-M-42 | Success criteria align with stories | SCs measure user story outcomes | |
| G2-M-43 | Constraints reflected in FRs | Constraints considered in requirements | |
| G2-M-44 | Dependencies accounted for | Dependencies considered in design | |
| G2-M-45 | Assumptions don't conflict | No conflicting assumptions | |

#### Constitution Alignment
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-M-46 | Aligns with Principle I | Agents can execute all tasks | Autonomy |
| G2-M-47 | Aligns with Principle II | Business logic can be tested | Tested Logic |
| G2-M-48 | Aligns with Principle III | No unnecessary abstractions | Simplicity |
| G2-M-49 | Aligns with Principle V | Complete spec before implementation | **CRITICAL** |
| G2-M-50 | Aligns with Principle VII | Documentation requirements present | Documentation as Code |
| G2-M-51 | Aligns with Principle VIII | Personal data handling considered | Privacy |
| G2-M-52 | Aligns with Principle IX | Local-first considered | Local-First |
| G2-M-53 | Aligns with Principle X | Observability requirements present | Observability |

### ⚠️ Advisory Criteria (Should Pass, But Not Blocking)

| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G2-A-01 | Spec is innovative | Solves problem in new/improved way | |
| G2-A-02 | Coverage is comprehensive | All aspects covered | |
| G2-A-03 | Requirements are SMART | Specific, Measurable, Achievable, Relevant, Time-bound | |
| G2-A-04 | Edge case coverage is good | Comprehensive edge case identification | |

---

## Review Process

### Step 1: Agent Self-Review

Before requesting Gate 2 review:

1. **Read through the entire specification** from start to finish
2. **Verify each checklist item** from `05-checklists/gate-02-checklist.md`
3. **Fix any issues** found
4. **Ask for agent review** if another agent is available
5. **Address all feedback** from agent review
6. **Final check**: Confirm **Open Questions is EMPTY**
7. **Only then** request Gate 2 review from the human

### Step 2: Agent Requests Review

The agent creates a **Gate 2 Review Request**:

```markdown
# Gate 2 Review Request: [Feature Name]

**Gate**: Gate 2 - Specification Approved
**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Date**: YYYY-MM-DD
**Requested by**: [Agent Name]
**Spec Document**: `specs/[FEATURE]/spec.md`

## Checklist Verification

- [ ] All mandatory criteria from `05-checklists/gate-02-checklist.md` are met
- [ ] All required sections are present and complete
- [ ] At least 1 P1 user story with 2+ acceptance scenarios
- [ ] At least 3 functional requirements (FR-*)
- [ ] At least 3 success criteria (SC-*)
- [ ] Edge cases are documented
- [ ] Constraints are documented
- [ ] Assumptions are documented
- [ ] Dependencies are documented
- [ ] Test Strategy is defined
- [ ] Documentation Requirements are listed
- [ ] Rollout Plan is defined
- [ ] **Open Questions section is EMPTY**
- [ ] All checklist items from `05-checklists/gate-02-checklist.md` are checked
- [ ] Self-review passed
- [ ] Agent review passed (if applicable)

## Summary

[Brief summary of the specification and its readiness for design.]

## Key Highlights

- **User Stories**: [Count] user stories (P1: [X], P2: [Y], P3: [Z])
- **Functional Requirements**: [Count] FRs
- **Non-Functional Requirements**: [Count] NFRs
- **Edge Cases**: [Count] edge cases
- **Success Criteria**: [Count] SCs
- **Dependencies**: [Count] dependencies

## Questions for Reviewer

[Any specific questions or areas of concern for the reviewer.]
```

### Step 3: Human Review

The human reviews:

1. **Document Quality**
   - Is the spec well-written and clear?
   - Does it follow the template?
   - Are there any gaps or ambiguities?

2. **Completeness**
   - Are all required sections present?
   - Are all checklist items met?

3. **Requirement Quality**
   - Are requirements **clear and unambiguous**?
   - Are requirements **testable**?
   - Are requirements **complete**?

4. **Alignment**
   - Does the spec align with **project goals**?
   - Does the spec align with **constitution principles**?
   - Does the spec consider **cross-dependencies**?

5. **Feasibility**
   - Is the spec **technically feasible**?
   - Are **resources available**?
   - Are **timelines reasonable**?

### Step 4: Human Decision

The human makes one of the following decisions:

| Decision | Action | Next Steps |
|----------|--------|------------|
| **Pass** | Specification is approved | Proceed to Phase 3: Design | Start design process |
| **Pass with Conditions** | Specification is approved with changes | Proceed with conditions | Address conditions, then start design |
| **Reject** | Specification is not approved | Do not proceed | Revise and resubmit for Gate 2 |
| **Need More Information** | More info needed | Gather more information | Address feedback, resubmit for Gate 2 |

### Step 5: Feedback and Documentation

The human provides:
1. **Decision**: Clear pass/fail decision
2. **Feedback**: Specific feedback on what to improve
3. **Next Steps**: Clear instructions on what to do next

The agent documents the result:

```markdown
# Gate 2 Review Result: [Feature Name]

**Gate**: Gate 2 - Specification Approved
**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Date**: YYYY-MM-DD
**Reviewer**: [Human Name]
**Decision**: [Pass | Pass with Conditions | Reject | Need More Information]

## Feedback

### Strengths
- [What was done well]
- [What was done well]

### Issues
- [ ] **Critical**: [Description] - [Must fix before approval]
- [ ] **Major**: [Description] - [Should fix before approval]
- [ ] **Minor**: [Description] - [Nice to fix]

### Specific Feedback
- [Section]: [Feedback]
- [Section]: [Feedback]

## Conditions (if applicable)

- [ ] Condition 1
- [ ] Condition 2

## Next Steps

- [ ] Action 1
- [ ] Action 2

## Approval

| Role | Name | Date | Approval | Notes |
|------|------|------|----------|-------|
| Author | [Agent Name] | YYYY-MM-DD | Approved | |
| Reviewer | [Agent Name] | YYYY-MM-DD | Approved | Agent review passed |
| Spec Lead | [Human Name] | YYYY-MM-DD | **Approved** | **Gate 2 PASSED** |

## History

- [YYYY-MM-DD] Initial submission by [Agent]
- [YYYY-MM-DD] Reviewed by [Human], decision: [Decision]
```

---

## Common Reasons for Failure

| Reason | Example | How to Fix |
|--------|---------|------------|
| **Open Questions not empty** | Questions remain in spec | Answer all questions or defer feature |
| **Incomplete sections** | Missing or empty sections | Complete all required sections |
| **Vague requirements** | "System should be fast" | Make requirements specific and measurable |
| **Non-testable requirements** | "User should have good experience" | Make requirements testable |
| **Missing user stories** | No user stories | Add at least one P1 user story |
| **Missing edge cases** | No edge cases | Identify and document edge cases |
| **Missing success criteria** | No SCs | Add measurable success criteria |
| **Inconsistent requirements** | FR-001 says X, FR-002 says not X | Resolve conflicts |
| **Implementation details** | Requirements specify how to implement | Remove implementation details |
| **Poor quality** | Grammar errors, disorganized | Improve writing quality |
| **Constitution violations** | Violates framework principles | Align with constitution |

---

## Tips for Success

### For Specification Agents

✅ **Do**:
- Follow the **spec template exactly**
- Be **specific and unambiguous** in all requirements
- **Test your requirements** - can you write a test for each?
- **Think through edge cases** systematically
- **Verify all cross-references** are accurate
- **Ask for clarification** early if anything is unclear
- **Use the checklist** to verify completeness
- Ensure **Open Questions is EMPTY**

❌ **Don't**:
- Submit with **open questions**
- Use **vague language** ("should", "might", "probably")
- Skip **edge cases**
- Submit with **empty sections**
- **Guess** at requirements
- **Rush** through the specification
- Start implementation before **Gate 2 passes**

### For Human Developers

✅ **Do**:
- Provide **clear direction** on project goals
- Answer agent questions **promptly and clearly**
- Give **specific feedback** on drafts
- **Review thoroughly** before approval
- **Check for completeness** against the checklist
- Verify **constitution alignment**

❌ **Don't**:
- Approve **incomplete specifications**
- Accept **vague requirements**
- Ignore **open questions**
- **Rush the review**
- Approve **without understanding** the spec

---

## Templates and Checklists

- **Spec Template**: `04-templates/spec-template.md`
- **Gate 2 Checklist**: `05-checklists/gate-02-checklist.md` (extensive checklist)
- **Cross-Dependency Checklist**: `05-checklists/cross-dependency-checklist.md`

---

## Related Documents

- [Process Overview](../process-overview.md) - End-to-end process
- [Phase 2: Specification](../phases/02-specification/README.md) - Specification phase details
- [Phase 3: Design](../phases/03-design/README.md) - Next phase after Gate 2
- [Constitution](../../00-constitution/constitution.md) - Core principles (especially Principle V)
- [Decision Process](../../01-governance/decision-process.md) - How to make decisions
- [Cross-Dependencies](../../01-governance/cross-dependencies.md) - Dependency management
- [Gate 2 Checklist](../../05-checklists/gate-02-checklist.md) - Detailed verification checklist
