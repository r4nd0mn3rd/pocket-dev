# Gate 0: Idea Approved

> **Gate ID**: Gate-00
> **Version**: 1.0.0
> **Phase**: Ideation (Phase 0)
> **Next Phase**: Discovery (Phase 1)
> **Reviewer**: Human Developer
> **Mandatory**: YES - Cannot proceed to Discovery without passing this gate

---

## Purpose

Gate 0 ensures that:
1. The idea is **clearly defined** and understood
2. The idea is **worth pursuing** (has value)
3. The idea is **feasible** at a high level
4. The scope is **appropriate** for the project
5. There is **alignment** with project goals and constitution

---

## Input Requirements

Before requesting Gate 0 review, the following must be **complete**:

### Required Artifacts

| Artifact | Location | Mandatory | Description |
|----------|----------|-----------|-------------|
| Idea Document | `specs/[FEATURE]/idea.md` | YES | Structured idea description |
| Feasibility Assessment | `specs/[FEATURE]/feasibility-report.md` | YES | High-level feasibility analysis |

### Required Sections in Idea Document

The Idea Document (`idea.md`) MUST contain:

```markdown
# Idea: [Brief Name]

**Idea ID**: IDE-[YYYYMMDD]-[SEQUENCE]
**Date**: YYYY-MM-DD
**Author**: [Human or Agent Name]
**Status**: [Draft | Proposed | Approved | Rejected]

## Elevator Pitch

[One sentence describing the idea in plain language. This should be understandable by anyone, including non-technical stakeholders (which, in this case, is just the user themselves).]

## Problem Statement

[Describe the problem this idea solves. Answer:]
- What is the current pain point or limitation?
- Who experiences this problem?
- How often does it occur?
- What is the impact of not solving it?

## Proposed Solution

[Describe the proposed solution at a high level. Answer:]
- What are we building?
- How does it solve the problem?
- What is the user experience?
- What makes this solution better than alternatives?

## Goals and Success Criteria

[Define what success looks like. Include:]
- Primary goal (main objective)
- Secondary goals (nice-to-haves)
- Success metrics (how we measure success)
- Acceptance criteria (what "done" looks like at a high level)

## Scope

[Define the boundaries of this idea. Include:]
- **In Scope**: What is included
- **Out of Scope**: What is explicitly NOT included
- **Assumptions**: What we're assuming to be true
- **Dependencies**: What this depends on (other features, systems, etc.)

## Alignment

[Explain how this idea aligns with:]
- Project constitution principles
- Project goals and vision
- Existing architecture and patterns
- Technology stack constraints

## Feasibility

[High-level assessment of feasibility. Answer:]
- Is this technically possible with our current stack?
- Are there any obvious blockers?
- What new technologies or skills would be needed?
- Rough estimate of effort (T-shirt size: XS, S, M, L, XL)

## Risks

[Identify potential risks. For each risk:]
- Description of the risk
- Likelihood (High, Medium, Low)
- Impact (High, Medium, Low)
- Mitigation strategy

## Alternatives Considered

[List alternative solutions considered. For each:]
- Description
- Why it was rejected

## Open Questions

[List any questions that need to be answered. **THIS MUST BE EMPTY TO PASS GATE 0.** If there are open questions, they must be resolved before gate review.]

## Next Steps

[What happens if this idea is approved?]
- [ ] Proceed to Phase 1: Discovery
- [ ] Define research questions
- [ ] Identify stakeholders (for user, this is themselves)
```

### Required Sections in Feasibility Assessment

The Feasibility Assessment (`feasibility-report.md`) MUST contain:

```markdown
# Feasibility Assessment: [Idea Name]

**Assessment ID**: FEA-[YYYYMMDD]-[SEQUENCE]
**Date**: YYYY-MM-DD
**Idea ID**: [Reference to idea.md]
**Assessor**: [Agent or Human Name]

## Executive Summary

[One paragraph summary of feasibility findings.]

## Technical Feasibility

[Assess whether the idea is technically possible. Answer:]
- **Platform Compatibility**: Can this be built on our target platforms (macOS, iOS, etc.)?
- **Technology Availability**: Are the required technologies available and mature?
- **Skill Availability**: Do we (or the agents) have the necessary skills?
- **Integration**: Can this integrate with existing systems?

## Resource Feasibility

[Assess whether we have the resources to build this. Answer:]
- **Time**: Do we have time to build this?
- **Tools**: Do we have the necessary tools?
- **Budget**: Are there any costs (APIs, services, etc.)?
- **Hardware**: Do we have the necessary hardware?

## Legal/Compliance Feasibility

[Assess any legal or compliance considerations. Answer:]
- **Privacy**: Does this handle personal data? If so, how?
- **Terms of Service**: Are there any ToS considerations (APIs, etc.)?
- **Licensing**: Are there any licensing restrictions?
- **Regulatory**: Are there any regulatory requirements?

## Risk Assessment

[Summarize key risks and their mitigation.]

## Recommendation

**Recommendation**: [Approve | Reject | Defer | Need More Information]

**Rationale**: [Explain the recommendation.]

**Confidence Level**: [High | Medium | Low]

## Conditions for Approval

[If approving with conditions, list them here. For example:]
- [ ] Must use SwiftUI, not UIKit
- [ ] Must not require paid Apple Developer Program
- [ ] Must work offline
```

---

## Gate 0 Criteria

To pass Gate 0, **ALL** of the following criteria must be met:

### ✅ Mandatory Criteria (All Must Pass)

| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G0-M-01 | Idea Document exists | File `specs/[FEATURE]/idea.md` exists | |
| G0-M-02 | Feasibility Assessment exists | File `specs/[FEATURE]/feasibility-report.md` exists | |
| G0-M-03 | Idea has clear Elevator Pitch | Pitch is 1-2 sentences, understandable by non-technical person | |
| G0-M-04 | Problem Statement is defined | Problem is clearly described with impact | |
| G0-M-05 | Proposed Solution is described | Solution is described at high level | |
| G0-M-06 | Goals are defined | Primary and secondary goals are stated | |
| G0-M-07 | Scope is bounded | In Scope and Out of Scope are clearly defined | |
| G0-M-08 | Alignment is addressed | Document explains alignment with constitution and project goals | |
| G0-M-09 | Feasibility is assessed | Technical, resource, and legal feasibility are addressed | |
| G0-M-10 | Risks are identified | At least 3 risks are identified with mitigations | |
| G0-M-11 | Alternatives are considered | At least 1 alternative is documented with rejection reason | |
| G0-M-12 | **Open Questions is EMPTY** | No open questions remain | **CRITICAL** |
| G0-M-13 | Recommendation is clear | Feasibility report has clear recommendation | |

### ⚠️ Advisory Criteria (Should Pass, But Not Blocking)

| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G0-A-01 | Idea is innovative | Idea solves a new problem or improves on existing solutions | |
| G0-A-02 | Feasibility is high confidence | Confidence level is High or Medium | |
| G0-A-03 | Risks are low | No High likelihood + High impact risks | |
| G0-A-04 | Scope is appropriate | T-shirt size is S or M (not XL) | For solo development |

---

## Review Process

### Step 1: Agent Self-Review

Before requesting Gate 0 review, the agent must:

1. Verify all **Mandatory Criteria** are met
2. Check that all required sections exist in both documents
3. Ensure there are **NO open questions**
4. Run the Gate 0 checklist: `05-checklists/gate-00-checklist.md`

### Step 2: Agent Requests Review

The agent requests Gate 0 review by:

1. Creating a Gate 0 Review Request:
   ```markdown
   # Gate 0 Review Request: [Idea Name]

   **Gate**: Gate 0 - Idea Approved
   **Idea ID**: [Reference]
   **Date**: YYYY-MM-DD
   **Requested by**: [Agent Name]

   ## Checklist

   - [ ] Idea Document complete
   - [ ] Feasibility Assessment complete
   - [ ] All mandatory criteria met
   - [ ] No open questions
   - [ ] Self-review passed

   ## Artifacts

   - Idea Document: `specs/[FEATURE]/idea.md`
   - Feasibility Assessment: `specs/[FEATURE]/feasibility-report.md`

   ## Summary

   [Brief summary of the idea and its feasibility.]

   ## Questions for Reviewer

   [Any specific questions or areas of concern for the reviewer.]
   ```

2. Tagging the human developer for review

### Step 3: Human Review

The human reviews:

1. **Document Quality**
   - Are documents well-written and clear?
   - Do they follow the templates?
   - Are there any gaps or ambiguities?

2. **Idea Quality**
   - Is the idea valuable and worth pursuing?
   - Does it align with project goals?
   - Is the scope appropriate?

3. **Feasibility**
   - Is the idea technically feasible?
   - Do we have the resources?
   - Are there any deal-breakers?

4. **Completeness**
   - Are all required sections present?
   - Are all criteria met?
   - Are there any open questions?

### Step 4: Human Decision

The human makes one of the following decisions:

| Decision | Action | Next Steps |
|----------|--------|------------|
| **Pass** | Idea is approved | Proceed to Phase 1: Discovery | Create `specs/[FEATURE]/` directory, start Phase 1 |
| **Pass with Conditions** | Idea is approved with changes | Proceed to Phase 1 with conditions | Address conditions, then start Phase 1 |
| **Reject** | Idea is not approved | Do not proceed | Archive idea, or revise and resubmit |
| **Defer** | Idea is not a priority now | Do not proceed now | Revisit later |
| **Need More Information** | More info needed | Gather more information | Address feedback, resubmit for Gate 0 |

### Step 5: Feedback and Documentation

The human provides:

1. **Decision**: Clear pass/fail decision
2. **Feedback**: Specific feedback on what to improve
3. **Next Steps**: Clear instructions on what to do next

The agent documents:

1. **Gate 0 Review Result**:
   ```markdown
   # Gate 0 Review Result: [Idea Name]

   **Gate**: Gate 0 - Idea Approved
   **Idea ID**: [Reference]
   **Date**: YYYY-MM-DD
   **Reviewer**: [Human Name]
   **Decision**: [Pass | Pass with Conditions | Reject | Defer | Need More Information]

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

2. If **Pass** or **Pass with Conditions**: Move to Phase 1
3. If **Need More Information**: Address feedback, resubmit
4. If **Reject** or **Defer**: Archive or defer

---

## Common Reasons for Failure

| Reason | Example | Solution |
|--------|---------|----------|
| **Incomplete documents** | Missing sections in idea.md | Complete all required sections |
| **Vague problem statement** | "Make the app better" | Be specific about the problem |
| **Unbounded scope** | "Add all possible features" | Narrow scope to something achievable |
| **Misalignment** | Doesn't fit project goals | Adjust idea or justify misalignment |
| **Feasibility concerns** | Requires unavailable technology | Find alternative or defer |
| **Open questions** | Unresolved questions | Answer questions before submission |
| **Poor quality** | Documents are unclear or disorganized | Improve document quality |

---

## Tips for Success

### For Agents

✅ **Do**:
- Be **specific** in all descriptions
- Think about **edge cases** early
- Consider **alternatives** thoroughly
- Make **realistic** feasibility assessments
- Ask **clarifying questions** to the human early

❌ **Don't**:
- Rush through the idea phase
- Assume the human knows what you're thinking
- Ignore constitution principles
- Submit with open questions

### For Human Developer

✅ **Do**:
- Provide **clear direction** on project goals
- Answer agent questions **promptly**
- Give **specific feedback** on submissions
- Be **realistic** about feasibility

❌ **Don't**:
- Approve ideas that don't align with goals
- Ignore feasibility concerns
- Accept vague or incomplete submissions

---

## Templates and Checklists

- **Idea Template**: `04-templates/idea-template.md`
- **Feasibility Template**: `04-templates/feasibility-template.md`
- **Gate 0 Checklist**: `05-checklists/gate-00-checklist.md`
- **Gate Review Template**: `04-templates/gate-review-template.md`

---

## Related Documents

- [Process Overview](../process-overview.md) - End-to-end process
- [Phase 0: Ideation](../phases/00-ideation/README.md) - Ideation phase details
- [Phase 1: Discovery](../phases/01-discovery/README.md) - Next phase after Gate 0
- [Constitution](../../00-constitution/constitution.md) - Core principles
