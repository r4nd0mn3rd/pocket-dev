# Gate 1: Discovery Complete

> **Gate ID**: Gate-01
> **Version**: 1.0.0
> **Phase**: Discovery (Phase 1)
> **Next Phase**: Specification (Phase 2)
> **Reviewer**: Human Developer
> **Mandatory**: YES - Cannot proceed to Specification without passing this gate

---

## Purpose

Gate 1 ensures that:
1. **All necessary research** has been completed
2. **All constraints** have been identified and documented
3. **All risks** have been assessed with mitigation strategies
4. **All open questions** from Discovery have been resolved
5. **Grilling is complete**: intent, description, constraints, and acceptance criteria are clear and comprehensive
6. The feature is **ready for specification** with complete information

---

## Input Requirements

Before requesting Gate 1 review, the following must be **complete**:

### Required Artifacts

| Artifact | Location | Mandatory | Description |
|----------|----------|-----------|-------------|
| Research Document | `specs/[FEATURE]/research.md` | YES | Complete research findings |
| Constraints Document | `specs/[FEATURE]/constraints.md` | YES | All identified constraints |
| Risk Assessment | `specs/[FEATURE]/risks.md` | YES | All risks with mitigations |

### Required Sections in Research Document

The Research Document (`research.md`) MUST contain:

```markdown
# Research Findings: [Feature Name]

**Feature ID**: [Reference to idea.md]
**Date**: YYYY-MM-DD
**Researcher**: [Agent or Human Name]
**Status**: [Draft | In Review | Approved]

## Executive Summary

[One paragraph summary of key findings, conclusions, and recommendations.]

## Domain Research

[Research about the problem domain. Include:]
- Key concepts and terminology
- Domain-specific patterns or standards
- Industry best practices
- Relevant domain knowledge

## Technology Research

[Research about technologies, tools, and platforms. Include:]
- Available technologies for solving this problem
- Comparison of technology options
- Technology maturity and stability
- Integration considerations
- Platform compatibility

## Constraint Analysis

[All identified constraints categorized. See Constraints Document for details.]

## Risk Assessment

[Summary of key risks. See Risks Document for details.]

## Open Questions

[**THIS MUST BE EMPTY TO PASS GATE 1** - All questions must be resolved]

## Recommendations

[Recommendations for proceeding with specification. Include:]
- Recommended approach
- Justification for recommendations
- Next steps

## Sources

[List all sources referenced with links where possible.]
```

### Required Sections in Constraints Document

The Constraints Document (`constraints.md`) MUST contain:

```markdown
# Constraints: [Feature Name]

**Feature ID**: [Reference]
**Date**: YYYY-MM-DD

## Technical Constraints

[Constraints related to technology, platforms, or implementation. For each:]
- **TC-[NNN]**: [Constraint description]
  - **Source**: [Where this constraint comes from]
  - **Impact**: [How it affects the feature]
  - **Severity**: [High | Medium | Low]

## Business Constraints

[Constraints related to business rules, project goals, or organizational policies. For each:]
- **BC-[NNN]**: [Constraint description]
  - **Source**: [Which constitution principle or business rule]
  - **Impact**: [How it affects the feature]
  - **Severity**: [High | Medium | Low]

## Legal/Compliance Constraints

[Constraints related to laws, regulations, or compliance requirements. For each:]
- **LC-[NNN]**: [Constraint description]
  - **Source**: [Which law, regulation, or compliance requirement]
  - **Impact**: [How it affects the feature]
  - **Severity**: [High | Medium | Low]

## Resource Constraints

[Constraints related to time, budget, skills, or other resources. For each:]
- **RC-[NNN]**: [Constraint description]
  - **Impact**: [How it affects the feature]
  - **Severity**: [High | Medium | Low]
```

### Required Sections in Risk Assessment

The Risk Assessment (`risks.md`) MUST contain:

```markdown
# Risk Assessment: [Feature Name]

**Feature ID**: [Reference]
**Date**: YYYY-MM-DD
**Assessor**: [Agent or Human Name]

## Risk Summary

[Brief summary of overall risk profile.]

## Detailed Risks

| ID | Risk | Likelihood | Impact | Mitigation Strategy | Owner | Status |
|----|------|------------|--------|---------------------|-------|--------|
| R-[NNN] | [Risk description] | High/Medium/Low | High/Medium/Low | [How to mitigate] | [Who owns] | Open/Resolved |

## Risk Matrix

[Optional: Visual representation of risk distribution]

## Residual Risks

[Risks that remain after mitigation.]
```

---

## Gate 1 Criteria

To pass Gate 1, **ALL** of the following criteria must be met:

### ✅ Mandatory Criteria (All Must Pass)

| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G1-M-01 | Research Document exists | File `specs/[FEATURE]/research.md` exists | |
| G1-M-02 | Constraints Document exists | File `specs/[FEATURE]/constraints.md` exists | |
| G1-M-03 | Risk Assessment exists | File `specs/[FEATURE]/risks.md` exists | |
| G1-M-04 | Executive Summary is present | Research doc has clear summary | |
| G1-M-05 | Domain Research is complete | Domain research section is filled | |
| G1-M-06 | Technology Research is complete | Technology research section is filled | |
| G1-M-07 | Constraints are documented | All constraint categories have entries | |
| G1-M-08 | Risks are assessed | At least 3 risks identified with mitigations | |
| G1-M-09 | **Open Questions is EMPTY** | No open questions remain | **CRITICAL** |
| G1-M-10 | Recommendations are clear | Research provides clear recommendations | |
| G1-M-11 | Sources are cited | All references are documented | |
| G1-M-12 | Cross-dependency check passed | See `05-checklists/cross-dependency-checklist.md` | |

### ⚠️ Advisory Criteria (Should Pass, But Not Blocking)

| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G1-A-01 | Research is thorough | Covers all relevant aspects | |
| G1-A-02 | Constraints are manageable | No High-severity constraints without mitigations | |
| G1-A-03 | Risks are acceptable | No High likelihood + High impact risks | |
| G1-A-04 | Recommendations are actionable | Clear next steps provided | |

---

## Review Process

### Step 1: Agent Self-Review

Before requesting Gate 1 review, the agent must:

1. Verify all **Mandatory Criteria** are met
2. Check that all required sections exist in all documents
3. Ensure there are **NO open questions**
4. Run the cross-dependency checklist
5. Run the Gate 1 checklist: `05-checklists/gate-01-checklist.md`

### Step 2: Agent Requests Review

The agent requests Gate 1 review by creating:

```markdown
# Gate 1 Review Request: [Feature Name]

**Gate**: Gate 1 - Discovery Complete
**Feature ID**: [Reference]
**Date**: YYYY-MM-DD
**Requested by**: [Agent Name]

## Checklist

- [ ] Research Document complete
- [ ] Constraints Document complete
- [ ] Risk Assessment complete
- [ ] All mandatory criteria met
- [ ] No open questions
- [ ] Cross-dependency check passed
- [ ] Self-review passed

## Artifacts

- Research Document: `specs/[FEATURE]/research.md`
- Constraints Document: `specs/[FEATURE]/constraints.md`
- Risk Assessment: `specs/[FEATURE]/risks.md`

## Summary

[Brief summary of research findings and readiness for specification.]

## Questions for Reviewer

[Any specific questions or areas of concern for the reviewer.]
```

### Step 3: Human Review

The human reviews:

1. **Document Quality**
   - Are documents well-written and clear?
   - Do they follow the templates?
   - Are there any gaps or ambiguities?

2. **Research Quality**
   - Is the research thorough and complete?
   - Are all relevant aspects covered?
   - Are sources reliable?

3. **Constraints**
   - Are all constraints identified?
   - Are constraints properly categorized?
   - Are there any deal-breakers?

4. **Risks**
   - Are all risks identified?
   - Are mitigations adequate?
   - Are residual risks acceptable?

5. **Completeness**
   - Are all required sections present?
   - Are all criteria met?
   - Are there any open questions?

### Step 4: Human Decision

The human makes one of the following decisions:

| Decision | Action | Next Steps |
|----------|--------|------------|
| **Pass** | Discovery is complete | Proceed to Phase 2: Specification | Start specification process |
| **Pass with Conditions** | Discovery is complete with changes | Proceed with conditions | Address conditions, then start specification |
| **Reject** | Discovery is not complete | Do not proceed | Revise and resubmit for Gate 1 |
| **Need More Information** | More info needed | Gather more information | Address feedback, resubmit for Gate 1 |

### Step 5: Feedback and Documentation

The human provides:
1. **Decision**: Clear pass/fail decision
2. **Feedback**: Specific feedback on what to improve
3. **Next Steps**: Clear instructions on what to do next

The agent documents the result:

```markdown
# Gate 1 Review Result: [Feature Name]

**Gate**: Gate 1 - Discovery Complete
**Feature ID**: [Reference]
**Date**: YYYY-MM-DD
**Reviewer**: [Human Name]
**Decision**: [Pass | Pass with Conditions | Reject | Need More Information]

## Feedback

[Detailed feedback from reviewer.]

## Conditions (if applicable)

- [ ] Condition 1
- [ ] Condition 2

## Next Steps

- [ ] Next action 1
- [ ] Next action 2

## History

- [YYYY-MM-DD] Initial submission by [Agent]
- [YYYY-MM-DD] Reviewed by [Human], decision: [Decision]
```

---

## Common Reasons for Failure

| Reason | Example | Solution |
|--------|---------|----------|
| **Incomplete research** | Missing technology research | Complete all research areas |
| **Missing constraints** | No legal constraints identified | Identify all constraint categories |
| **Incomplete risk assessment** | No mitigation strategies | Add mitigation for each risk |
| **Open questions** | Unresolved questions remain | Answer all questions before submission |
| **Poor quality** | Documents are unclear or disorganized | Improve document quality |
| **Insufficient sources** | No sources cited | Add reliable sources |

---

## Tips for Success

### For Agents

✅ **Do**:
- Be **thorough** in all research areas
- Think about **all constraint categories**
- Identify **realistic risks** with mitigations
- **Answer all questions** before submission
- Use **reliable sources**

❌ **Don't**:
- Skip **constraint categories**
- Ignore **risk assessment**
- Submit with **open questions**
- Use **unreliable sources**
- **Guess** at answers

### For Human Developer

✅ **Do**:
- Provide **clear direction** on research focus
- Answer agent questions **promptly**
- Give **specific feedback** on submissions
- **Review thoroughly** before approval

❌ **Don't**:
- Approve **incomplete research**
- Ignore **high-severity constraints**
- Accept **unmitigated high risks**
- **Rush the review**

---

## Templates and Checklists

- **Research Template**: `04-templates/research-template.md`
- **Constraints Template**: `04-templates/constraints-template.md`
- **Risk Assessment Template**: `04-templates/risks-template.md`
- **Gate 1 Checklist**: `05-checklists/gate-01-checklist.md`
- **Cross-Dependency Checklist**: `05-checklists/cross-dependency-checklist.md`

---

## Related Documents

- [Process Overview](../process-overview.md) - End-to-end process
- [Phase 1: Discovery](../phases/01-discovery/README.md) - Discovery phase details
- [Phase 2: Specification](../phases/02-specification/README.md) - Next phase after Gate 1
- [Constitution](../../00-constitution/constitution.md) - Core principles
- [Decision Process](../../01-governance/decision-process.md) - How to make decisions
- [Cross-Dependencies](../../01-governance/cross-dependencies.md) - Dependency management
