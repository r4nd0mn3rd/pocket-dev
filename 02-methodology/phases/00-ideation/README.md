# Phase 0: Ideation

> **Phase ID**: 0
> **Name**: Ideation
> **Duration**: 1-2 days
> **Gate**: Gate 0 - Idea Approved
> **Primary Agent**: Specification Agent
> **Human Involvement**: High (decision-making)

---

## Purpose

**Transform a vague idea into a well-defined concept** ready for discovery and research.

This phase answers the fundamental questions:
- What problem are we solving?
- Is it worth solving?
- Can we solve it?
- How does it fit with our project goals?

---

## Objectives

By the end of Phase 0, you should have:

1. ✅ A **clear, documented idea** that can be understood by anyone
2. ✅ A **feasibility assessment** showing the idea is technically and resource-wise possible
3. ✅ **Alignment** with project goals and constitution principles
4. ✅ **Bounded scope** that is achievable
5. ✅ **Initial risk assessment** identifying potential issues
6. ✅ **Passed Gate 0** (Idea Approved)

---

## Key Questions

### What Problem Are We Solving?
- What is the current pain point or limitation?
- Who experiences this problem?
- How often does it occur?
- What is the impact of NOT solving it?

### What Is the Proposed Solution?
- What are we building?
- How does it solve the problem?
- What is the user experience?
- What makes this solution better than alternatives?

### Is It Worth Solving?
- What value does this provide?
- Who benefits from this?
- What is the return on investment?
- Does it align with project goals?

### Can We Solve It?
- Is this technically feasible with our current stack?
- Are there any obvious blockers?
- What new technologies or skills would be needed?
- Do we have the resources (time, budget, skills)?

---

## Input

- **User's initial idea** (possibly vague)
- **Project goals and vision** (from project documentation)
- **Constitution principles** (`00-constitution/constitution.md`)
- **Existing system state** (current features, architecture, constraints)

---

## Output

### Deliverables (Required for Gate 0)

| Deliverable | File | Mandatory | Description |
|-------------|------|-----------|-------------|
| Idea Document | `specs/[FEATURE]/idea.md` | ✅ YES | Structured idea description |
| Feasibility Assessment | `specs/[FEATURE]/feasibility-report.md` | ✅ YES | High-level feasibility analysis |

### Optional Supporting Documents

| Deliverable | File | Mandatory | Description |
|-------------|------|-----------|-------------|
| Initial Research Notes | `specs/[FEATURE]/notes/ideation-notes.md` | ❌ NO | Rough notes and thoughts |
| Stakeholder Analysis | `specs/[FEATURE]/stakeholders.md` | ❌ NO | Who is affected by this feature |
| Initial Risk Register | `specs/[FEATURE]/initial-risks.md` | ❌ NO | Early risk identification |

---

## Tasks

### For Specification Agent

#### 1. Understand the Initial Idea
- **Action**: Meet with human developer to understand the idea
- **Questions to ask**:
  - "What problem are you trying to solve?"
  - "Who has this problem?"
  - "How do you currently solve this?"
  - "What would success look like?"
- **Output**: Notes from discussion

#### 2. Draft Elevator Pitch
- **Action**: Create a 1-2 sentence description that anyone can understand
- **Template**: "This feature adds [what] that allows [who] to [do what] so they can [benefit]."
- **Example**: "This feature adds a development module to the Pocket Dev dashboard that allows users to see Project status and a Project overview so they can monitor their progress without picking up their phone."
- **Output**: Elevator Pitch section in idea.md

#### 3. Define Problem Statement
- **Action**: Clearly articulate the problem
- **Include**:
  - The current pain point
  - Who experiences it
  - Frequency
  - Impact of not solving
- **Output**: Problem Statement section in idea.md

#### 4. Define Proposed Solution
- **Action**: Describe the solution at a high level
- **Include**:
  - What we're building
  - How it solves the problem
  - User experience
  - What makes it better than alternatives
- **Output**: Proposed Solution section in idea.md

#### 5. Define Goals and Success Criteria
- **Action**: Set clear objectives
- **Include**:
  - **Primary Goal**: The main objective (P1)
  - **Secondary Goals**: Nice-to-haves (P2, P3)
  - **Success Metrics**: How we measure success
  - **Acceptance Criteria**: What "done" looks like at a high level
- **Output**: Goals and Success Criteria section in idea.md

#### 6. Define Scope
- **Action**: Set clear boundaries
- **Include**:
  - **In Scope**: What is included in this feature
  - **Out of Scope**: What is explicitly NOT included
  - **Assumptions**: What we're assuming to be true
  - **Dependencies**: What this depends on
- **Output**: Scope section in idea.md

#### 7. Assess Alignment
- **Action**: Verify alignment with project goals
- **Check**:
  - ✅ Aligns with Constitution principles
  - ✅ Aligns with project goals and vision
  - ✅ Fits with existing architecture
  - ✅ Fits with technology stack constraints
- **Output**: Alignment section in idea.md

#### 8. Conduct Initial Feasibility Assessment
- **Action**: Assess whether this is doable
- **Include**:
  - **Technical Feasibility**: Can we build it?
  - **Resource Feasibility**: Do we have time, tools, budget?
  - **Legal/Compliance Feasibility**: Any legal issues?
  - **Rough effort estimate** (T-shirt size: XS, S, M, L, XL)
- **Output**: Complete `feasibility-report.md`

#### 9. Identify Risks
- **Action**: Identify potential problems
- **For each risk**:
  - Description
  - Likelihood (High, Medium, Low)
  - Impact (High, Medium, Low)
  - Mitigation strategy
- **Output**: Risks section in idea.md or feasibility-report.md

#### 10. Consider Alternatives
- **Action**: Think about other ways to solve the problem
- **For each alternative**:
  - Description
  - Why it was rejected
- **Output**: Alternatives Considered section in idea.md

#### 11. Resolve All Open Questions
- **Action**: Answer all questions before Gate 0
- **Critical**: **Open Questions section MUST be EMPTY to pass Gate 0**
- **If questions remain**: Defer the feature or get human decision

#### 12. Submit for Gate 0 Review
- **Action**: Request human review
- **Prerequisites**:
  - ✅ Idea Document complete
  - ✅ Feasibility Assessment complete
  - ✅ All sections filled
  - ✅ Open Questions is EMPTY
- **Process**: See `02-methodology/checkpoints/gate-00.md`

### For Human Developer

#### 1. Provide Initial Idea
- **Action**: Share your idea with the Specification Agent
- **Include**:
  - The problem you're trying to solve
  - Your vision for the solution
  - Any context or background
- **Output**: Initial idea description

#### 2. Review Idea Document Draft
- **Action**: Review the agent's draft idea.md
- **Check**:
  - Is the problem clearly defined?
  - Does the solution address the problem?
  - Are goals realistic?
  - Is scope appropriate?
- **Output**: Feedback on draft

#### 3. Make Decisions
- **Action**: Answer agent's questions
- **When asked**:
  - Clarify ambiguous points
  - Make decisions on alternatives
  - Approve or modify scope
- **Output**: Decisions documented in idea.md

#### 4. Approve Feasibility Assessment
- **Action**: Review and approve feasibility-report.md
- **Check**:
  - Are feasibility conclusions accurate?
  - Are risks properly assessed?
  - Is effort estimate reasonable?
- **Output**: Approval or feedback

#### 5. Conduct Gate 0 Review
- **Action**: Review Gate 0 submission
- **Use**: `02-methodology/checkpoints/gate-00.md` for criteria
- **Decision**: Pass, Pass with Conditions, Reject, or Need More Information
- **Output**: Gate 0 review result

---

## Templates

### Idea Document Template

Use `04-templates/idea-template.md` or follow the structure in `02-methodology/checkpoints/gate-00.md`.

### Feasibility Assessment Template

Use `04-templates/feasibility-template.md` or follow the structure in `02-methodology/checkpoints/gate-00.md`.

---

## Checklists

### Gate 0 Checklist

Use `05-checklists/gate-00-checklist.md` to verify completeness before submission.

---

## Tips for Success

### For Specification Agents

✅ **Do**:
- **Ask clarifying questions early** - Don't guess at requirements
- **Be specific** - Vague ideas lead to vague implementations
- **Think about edge cases** - Even at this early stage
- **Consider alternatives** - There's often more than one way
- **Document everything** - If it's not written down, it doesn't exist

❌ **Don't**:
- **Assume you understand** - Ask for clarification
- **Skip the feasibility assessment** - This prevents wasted effort later
- **Ignore constitution principles** - They guide all development
- **Submit with open questions** - Gate 0 will be rejected
- **Rush through ideation** - This is the foundation for everything else

### For Human Developers

✅ **Do**:
- **Be clear about the problem** - What are you really trying to solve?
- **Set realistic goals** - Don't over-promise
- **Consider scope carefully** - Smaller features ship faster
- **Answer agent questions promptly** - They're trying to help you
- **Review thoroughly** - Catch issues early

❌ **Don't**:
- **Be vague about requirements** - Clarity prevents rework
- **Ignore feasibility concerns** - Some ideas aren't practical
- **Set unrealistic timelines** - This leads to disappointment
- **Approved without understanding** - You need to own the idea

---

## Common Pitfalls

| Pitfall | Symptom | Solution |
|---------|---------|----------|
| **Vague problem statement** | "Make the app better" | Be specific about the problem |
| **Overly broad scope** | "Add all possible features" | Narrow to achievable scope |
| **Ignoring feasibility** | Assuming anything is possible | Assess technical and resource feasibility |
| **Skipping alternatives** | Only one option considered | Think through multiple approaches |
| **Unbounded effort** | No estimate provided | Provide T-shirt size estimate |
| **Open questions at submission** | Questions remain in idea.md | Answer all questions before submission |

---

## Next Phase

**After Gate 0 passes** → Proceed to **Phase 1: Discovery**

- **Objective**: Gather all information needed to write a complete specification
- **Primary Agent**: Specification Agent
- **Duration**: 2-5 days
- **Gate**: Gate 1 - Discovery Complete

See `02-methodology/phases/01-discovery/README.md` for details.

---

## Related Documents

| Document | Purpose | Location |
|----------|---------|----------|
| Gate 0 Definition | Gate criteria and process | `02-methodology/checkpoints/gate-00.md` |
| Gate 0 Checklist | Verification checklist | `05-checklists/gate-00-checklist.md` |
| Idea Template | Idea document structure | `04-templates/idea-template.md` |
| Feasibility Template | Feasibility assessment structure | `04-templates/feasibility-template.md` |
| Constitution | Core principles | `00-constitution/constitution.md` |
| Decision Process | How to make decisions | `01-governance/decision-process.md` |
| Process Overview | End-to-end process | `02-methodology/process-overview.md` |

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Gate 0 Pass Rate | 100% | First-time pass rate |
| Idea Clarity | High | Human's subjective assessment |
| Scope Appropriateness | Appropriate | Fits project goals and resources |
| Feasibility Accuracy | High | Predicts actual effort accurately |
| Agent Questions Answered | 100% | All agent questions resolved |

---

## Example Ideation Session

### Scenario: Development Module Feature

**Human**: "I want to add a development module to Pocket Dev."

**Agent**: 
1. Asks clarifying questions:
   - "What problem does this solve for users?"
   - "What project data should it display?"
   - "Should it show Project status, forecast, or both?"
   - "Where should the data come from?"

2. Drafts Elevator Pitch:
   - "This feature adds a development module to the Pocket Dev dashboard that displays Project status and a Project overview, allowing users to monitor their progress without picking up their phone."

3. Defines Problem Statement:
   - "Users currently need to open multiple tools or open a separate app to see project data. This interrupts their workflow and wastes time."

4. Defines Proposed Solution:
   - "A widget in the Pocket Dev dashboard that shows Project status (status, conditions, icon) and a Project overview in a compact format."

5. Defines Goals:
   - Primary: Display Project status within 2 seconds of app launch
   - Secondary: Show Project overview
   - Secondary: Support multiple locations

6. Defines Scope:
   - In Scope: Project status display, Project overview, basic project status icons
   - Out of Scope: Hourly forecast, development alerts, progress charts

7. Assesses Feasibility:
   - Technical: YES (development APIs available)
   - Resource: YES (free APIs like SampleProvider)
   - Legal: YES (no personal data beyond location)
   - Effort: M (Medium - 1-2 weeks)

8. Identifies Risks:
   - R-001: Development API might have rate limits (Low likelihood, Medium impact)
   - R-002: Location permission might be denied (Medium likelihood, Medium impact)

9. Considers Alternatives:
   - Alternative: Use built-in feature data (Rejected: Not available to 3rd party apps)
   - Alternative: Use paid API like DevKit (Rejected: Requires Apple Developer Program)

10. Submits for Gate 0 review → **PASSES**

---

## Quick Reference

| Task | Agent | Human | Output |
|------|-------|-------|--------|
| Understand idea | ✅ | ✅ | Notes |
| Draft elevator pitch | ✅ | | idea.md |
| Define problem | ✅ | ✅ | idea.md |
| Define solution | ✅ | ✅ | idea.md |
| Define goals | ✅ | ✅ | idea.md |
| Define scope | ✅ | ✅ | idea.md |
| Assess alignment | ✅ | ✅ | idea.md |
| Assess feasibility | ✅ | ✅ | feasibility-report.md |
| Identify risks | ✅ | ✅ | idea.md/feasibility |
| Consider alternatives | ✅ | ✅ | idea.md |
| Resolve questions | ✅ | ✅ | idea.md |
| Submit for Gate 0 | ✅ | | Gate 0 review |
| Review/approve | | ✅ | Gate 0 result |
