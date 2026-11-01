# Phase 1: Discovery

> **Phase ID**: 1
> **Name**: Discovery
> **Duration**: 2-5 days
> **Gate**: Gate 1 - Discovery Complete
> **Primary Agent**: Specification Agent
> **Human Involvement**: Medium (answering questions, making decisions)

---

## Purpose

**Gather all information needed to write a complete, unambiguous feature specification.**

This phase transforms the approved idea into a comprehensive understanding of:
- The problem domain
- Available technologies and solutions
- Technical and business constraints
- Potential risks and mitigation strategies
- All questions that need to be answered before specification

**Key Question**: "What do we need to know to specify this feature completely?"

---

## Objectives

By the end of Phase 1, you should have:

1. ✅ **Complete domain understanding** of the problem space
2. ✅ **Comprehensive technology research** identifying viable solutions
3. ✅ **All constraints identified** (technical, business, legal, resource)
4. ✅ **All risks assessed** with mitigation strategies
5. ✅ **All open questions answered** (or resolved to proceed)
6. ✅ **Recommendations** for how to proceed
7. ✅ **Passed Gate 1** (Discovery Complete)

---

## Key Questions

### Domain Understanding
- What are the key concepts in this problem domain?
- What terminology is important?
- What are the industry standards or best practices?
- Who are the experts or resources we can consult?

### Technology Options
- What technologies are available to solve this problem?
- What are the pros and cons of each option?
- Which technologies align with our stack constraints?
- What new technologies would we need to learn?

### Constraints
- What technical constraints exist?
- What business constraints exist?
- What legal or compliance constraints exist?
- What resource constraints exist?

### Risks
- What could go wrong?
- What are the likelihoods and impacts?
- How can we mitigate these risks?
- What are the residual risks?

---

## Input

- **Approved Idea** from Phase 0 (`specs/[FEATURE]/idea.md`)
- **Feasibility Assessment** from Phase 0 (`specs/[FEATURE]/feasibility-report.md`)
- **Project goals and vision**
- **Constitution principles** (`00-constitution/constitution.md`)
- **Existing system architecture**
- **Technology stack documentation**

---

## Output

### Deliverables (Required for Gate 1)

| Deliverable | File | Mandatory | Description |
|-------------|------|-----------|-------------|
| Research Findings | `specs/[FEATURE]/research.md` | ✅ YES | Complete research document |
| Constraints Document | `specs/[FEATURE]/constraints.md` | ✅ YES | All identified constraints |
| Risk Assessment | `specs/[FEATURE]/risks.md` | ✅ YES | All risks with mitigations |

### Optional Supporting Documents

| Deliverable | File | Mandatory | Description |
|-------------|------|-----------|-------------|
| Technology Comparison | `specs/[FEATURE]/technology-comparison.md` | ❌ NO | Detailed comparison of options |
| Domain Glossary | `specs/[FEATURE]/glossary.md` | ❌ NO | Key terms and definitions |
| Stakeholder Interviews | `specs/[FEATURE]/interviews/` | ❌ NO | Notes from stakeholder discussions |

---

## Tasks

### For Specification Agent

#### 0. Grill Until Intent Is Clear
- **Action**: Interrogate the idea until **intent, description, constraints, and acceptance criteria** are clear and comprehensive
- **Method**: Ask relentless, targeted questions; do not accept vague answers
- **Stop condition**: Every acceptance criterion is testable and every constraint is explicit
- **Output**: Grilling notes appended to `research.md`

#### 1. Review Approved Idea
- **Action**: Read and understand the approved idea document
- **Focus on**:
  - Problem statement
  - Proposed solution
  - Goals and success criteria
  - Scope
  - Assumptions
  - Dependencies
- **Output**: Understanding of what needs to be researched

#### 2. Create Research Plan
- **Action**: Plan what needs to be researched
- **Include**:
  - Domain research areas
  - Technology research areas
  - Constraint identification
  - Risk assessment
- **Template**:
  ```markdown
  ## Research Plan: [Feature Name]
  
  ### Domain Research
  - [ ] Research area 1
  - [ ] Research area 2
  
  ### Technology Research
  - [ ] Technology option 1
  - [ ] Technology option 2
  
  ### Constraints to Investigate
  - [ ] Technical constraints
  - [ ] Business constraints
  
  ### Risks to Assess
  - [ ] Risk area 1
  - [ ] Risk area 2
  ```
- **Output**: Research plan (can be in research.md or separate file)

#### 3. Conduct Domain Research
- **Action**: Research the problem domain
- **Include**:
  - Key concepts and terminology
  - Domain-specific patterns or standards
  - Industry best practices
  - Relevant domain knowledge
  - Competitive analysis (how others solve similar problems)
- **Resources**:
  - Online documentation
  - Industry reports
  - Expert consultations
  - Existing implementations
- **Output**: Domain Research section in research.md

#### 4. Conduct Technology Research
- **Action**: Research available technologies
- **For each technology option**:
  - **Description**: What it is and what it does
  - **Pros**: Advantages of using this technology
  - **Cons**: Disadvantages or limitations
  - **Maturity**: How stable and mature is it?
  - **Community**: Size and activity of community
  - **Documentation**: Quality of documentation
  - **Integration**: How well it integrates with our stack
  - **Cost**: Any costs (licensing, usage, etc.)
  - **Alternatives**: Other similar technologies
- **Decision Matrix**: Use a matrix to compare options:
  ```
  | Criteria | Weight | Option A | Option B | Option C |
  |----------|--------|----------|----------|----------|
  | Maturity | 30% | 9 | 7 | 5 |
  | Integration | 25% | 8 | 9 | 6 |
  | Cost | 20% | 10 | 5 | 8 |
  | ... | ... | ... | ... | ... |
  ```
- **Output**: Technology Research section in research.md

#### 5. Identify Constraints
- **Action**: Identify all constraints that might affect the feature
- **Categories**:
  - **Technical Constraints** (TC-*)
    - Platform limitations
    - Framework limitations
    - Dependency constraints
    - Performance constraints
  - **Business Constraints** (BC-*)
    - Project rules
    - Constitution principles
    - Business rules
    - Organizational policies
  - **Legal/Compliance Constraints** (LC-*)
    - Privacy requirements (GDPR, etc.)
    - Licensing requirements
    - Regulatory requirements
    - Terms of service
  - **Resource Constraints** (RC-*)
    - Time constraints
    - Budget constraints
    - Skill constraints
    - Tool constraints
- **For each constraint**:
  - Clear description
  - Source (where it comes from)
  - Impact (how it affects the feature)
  - Severity (High, Medium, Low)
- **Output**: Complete constraints.md

#### 6. Assess Risks
- **Action**: Identify and assess all potential risks
- **For each risk**:
  - **ID**: R-[NNN]
  - **Risk**: Clear description of the risk
  - **Likelihood**: High, Medium, or Low
  - **Impact**: High, Medium, or Low
  - **Mitigation Strategy**: How to reduce likelihood or impact
  - **Owner**: Who is responsible for mitigation
  - **Status**: Open or Resolved
- **Risk Matrix**: Visual representation of risk distribution
- **Residual Risks**: Risks that remain after mitigation
- **Output**: Complete risks.md

#### 7. Identify Open Questions
- **Action**: Document questions that need to be answered
- **For each question**:
  - **Question**: Clear statement of the question
  - **Context**: Why this question matters
  - **Impact**: What happens if this isn't answered?
  - **Options**: Possible answers or approaches
    - For each option:
      - Description
      - Pros
      - Cons
  - **Recommendation**: Preferred answer with reasoning
  - **Decision Maker**: Who needs to decide this?
  - **Due Date**: When this needs to be decided by
- **Critical**: Present questions to human for decision
- **Output**: Open Questions section in research.md

#### 8. Formulate Recommendations
- **Action**: Provide recommendations based on research
- **Include**:
  - Recommended approach for the feature
  - Justification for recommendations
  - Next steps
  - Any reservations or concerns
- **Output**: Recommendations section in research.md

#### 9. Document Sources
- **Action**: Cite all sources used in research
- **For each source**:
  - Name/title
  - URL (if applicable)
  - Type (documentation, article, interview, etc.)
  - Date accessed
  - Relevance
- **Output**: Sources section in research.md

#### 10. Verify Cross-Dependencies
- **Action**: Check for dependencies with other features or systems
- **Use**: `05-checklists/cross-dependency-checklist.md`
- **Check**:
  - Related features in `specs/`
  - Shared modules/components
  - External services/APIs
  - Platform capabilities
  - Data model changes
  - Migration requirements
- **Output**: Documented in research.md or constraints.md

#### 11. Resolve All Open Questions
- **Action**: Get answers to all open questions
- **For each question**:
  - Present to human with options and recommendation
  - Wait for human decision
  - Document the decision
  - Remove from Open Questions section
- **Critical**: **Open Questions section MUST be EMPTY to pass Gate 1**

#### 12. Submit for Gate 1 Review
- **Action**: Request human review
- **Prerequisites**:
  - ✅ Research Document complete
  - ✅ Constraints Document complete
  - ✅ Risk Assessment complete
  - ✅ All sections filled
  - ✅ Open Questions is EMPTY
  - ✅ Cross-dependency checklist passed
- **Process**: See `02-methodology/checkpoints/gate-01.md`

### For Human Developer

#### 1. Provide Direction
- **Action**: Guide the agent's research
- **Include**:
  - Research priorities
  - Areas of particular importance
  - Any existing knowledge or context
- **Output**: Clear direction for research

#### 2. Answer Agent Questions
- **Action**: Respond to agent's questions promptly
- **When asked**:
  - Clarify requirements
  - Make decisions on open questions
  - Provide context or background
- **Output**: Decisions documented in research.md

#### 3. Review Research Findings
- **Action**: Review draft research documents
- **Check**:
  - Is the research thorough?
  - Are all relevant aspects covered?
  - Are sources reliable?
  - Are constraints accurate?
  - Are risks properly assessed?
- **Output**: Feedback on drafts

#### 4. Make Technology Decisions
- **Action**: Decide on technology selections
- **When presented with options**:
  - Review pros and cons
  - Consider long-term implications
  - Make decision and document rationale
- **Output**: Technology decisions documented

#### 5. Approve Constraints
- **Action**: Review and approve constraints document
- **Check**:
  - Are all constraints identified?
  - Are constraints properly categorized?
  - Are there any deal-breakers?
- **Output**: Approval or feedback

#### 6. Approve Risk Assessment
- **Action**: Review and approve risk assessment
- **Check**:
  - Are all risks identified?
  - Are mitigations adequate?
  - Are residual risks acceptable?
- **Output**: Approval or feedback

#### 7. Conduct Gate 1 Review
- **Action**: Review Gate 1 submission
- **Use**: `02-methodology/checkpoints/gate-01.md` for criteria
- **Decision**: Pass, Pass with Conditions, Reject, or Need More Information
- **Output**: Gate 1 review result

---

## Templates

### Research Findings Template

Use `04-templates/research-template.md` for the complete structure.

### Constraints Template

Use `04-templates/constraints-template.md` for the complete structure.

### Risk Assessment Template

Use `04-templates/risks-template.md` for the complete structure.

---

## Checklists

### Gate 1 Checklist

Use `05-checklists/gate-01-checklist.md` to verify completeness before submission.

### Cross-Dependency Checklist

Use `05-checklists/cross-dependency-checklist.md` to verify dependencies are handled.

---

## Tips for Success

### For Specification Agents

✅ **Do**:
- **Be thorough** - Cover all aspects of the problem
- **Use reliable sources** - Quality in, quality out
- **Document everything** - If it's not written down, it doesn't exist
- **Ask for clarification** - Don't guess at requirements
- **Think critically** - Don't just accept the first solution
- **Present options** - Give the human choices with trade-offs

❌ **Don't**:
- **Skip research areas** - Comprehensive research prevents surprises
- **Use unreliable sources** - Bad information leads to bad decisions
- **Ignore constraints** - Constraints shape the solution
- **Ignore risks** - Unmitigated risks can derail the project
- **Submit with open questions** - Gate 1 will be rejected

### For Human Developers

✅ **Do**:
- **Provide clear direction** - Guide the agent's research
- **Answer questions promptly** - Delays here delay the whole project
- **Make decisions** - Don't defer important decisions
- **Review thoroughly** - Catch issues early
- **Consider long-term implications** - Think beyond this feature

❌ **Don't**:
- **Be vague about requirements** - Clarity prevents rework
- **Defer all decisions** - Some decisions are needed to proceed
- **Ignore research findings** - The agent's work is valuable
- **Rush the review** - Thorough review prevents later issues

---

## Common Pitfalls

| Pitfall | Symptom | Solution |
|---------|---------|----------|
| **Incomplete research** | Missing technology options | Be thorough in research |
| **Superficial research** | Only surface-level information | Dig deeper into each area |
| **Ignoring constraints** | Constraints not identified | Systematically check all categories |
| **Underestimating risks** | Risks not properly assessed | Use likelihood/impact matrix |
| **Open questions at submission** | Questions remain | Answer all questions before submission |
| **Bias in technology selection** | Only researching preferred option | Research all viable options |

---

## Next Phase

**After Gate 1 passes** → Proceed to **Phase 2: Specification**

- **Objective**: Define what the feature should do
- **Primary Agent**: Specification Agent
- **Duration**: 3-7 days
- **Gate**: Gate 2 - Specification Approved

See `02-methodology/phases/02-specification/README.md` for details.

---

## Related Documents

| Document | Purpose | Location |
|----------|---------|----------|
| Gate 1 Definition | Gate criteria and process | `02-methodology/checkpoints/gate-01.md` |
| Gate 1 Checklist | Verification checklist | `05-checklists/gate-01-checklist.md` |
| Research Template | Research document structure | `04-templates/research-template.md` |
| Constraints Template | Constraints document structure | `04-templates/constraints-template.md` |
| Risks Template | Risk assessment structure | `04-templates/risks-template.md` |
| Constitution | Core principles | `00-constitution/constitution.md` |
| Decision Process | How to make decisions | `01-governance/decision-process.md` |
| Cross-Dependencies | Dependency management | `01-governance/cross-dependencies.md` |
| Process Overview | End-to-end process | `02-methodology/process-overview.md` |

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Gate 1 Pass Rate | 100% | First-time pass rate |
| Research Completeness | 100% | All research areas covered |
| Constraints Identified | 100% | All constraint categories covered |
| Risks Assessed | 100% | All identified risks have mitigations |
| Questions Answered | 100% | All open questions resolved |
| Decision Quality | High | Decisions are well-informed |

---

## Example Discovery Session

### Scenario: Development Module Feature (Continued from Phase 0)

**Approved Idea**: development module for Pocket Dev dashboard

**Agent Tasks**:

1. **Review Idea**: Reads idea.md and feasibility-report.md

2. **Create Research Plan**:
   ```markdown
   ## Research Plan: Development Module
   
   ### Domain Research
   - [ ] Project data concepts (status, humidity, pressure, etc.)
   - [ ] Project overview concepts (daily, hourly, etc.)
   - [ ] Development API industry standards
   
   ### Technology Research
   - [ ] SampleProvider API
   - [ ] DevKit (Apple)
   - [ ] SampleService
   - [ ] Other development APIs
   
   ### Constraints to Investigate
   - [ ] Platform capabilities (feature data access)
   - [ ] Network requirements
   - [ ] Location permission requirements
   
   ### Risks to Assess
   - [ ] API rate limits
   - [ ] Data accuracy
   - [ ] Permission denial handling
   ```

3. **Conduct Domain Research**:
   - Researches project data concepts
   - Researches forecast standards
   - Documents findings in research.md

4. **Conduct Technology Research**:
   - Compares SampleProvider, DevKit, SampleService
   - Creates decision matrix
   - Documents findings in research.md

5. **Identify Constraints**:
   - TC-001: Must work on macOS 26.0+
   - TC-002: Must use Swift 6.0+
   - BC-001: Must follow Constitution Principle III (Simplicity)
   - LC-001: Must comply with GDPR for location data
   - RC-001: Must be completable in <= 2 weeks

6. **Assess Risks**:
   - R-001: SampleProvider rate limits (Low likelihood, Medium impact) - Mitigation: Implement caching
   - R-002: User denies location permission (Medium likelihood, High impact) - Mitigation: Support manual location entry
   - R-003: Development API returns inaccurate data (Low likelihood, Medium impact) - Mitigation: Use multiple sources

7. **Identify Open Questions**:
   - Q-001: Should we use Metric or Standard as default?
     - Options: Metric (metric), Standard (imperial)
     - Recommendation: Metric (more common globally)
     - Decision: Human selects Metric
   - Q-002: What should we show when offline?
     - Options: Last cached data, error message, nothing
     - Recommendation: Last cached data with stale indicator
     - Decision: Human selects last cached data with stale indicator

8. **Resolve All Questions**: Works with human to answer all questions

9. **Formulate Recommendations**:
   - Use SampleProvider as default service (free, no API key)
   - Support manual location entry as fallback
   - Implement caching for offline support
   - Use Metric as default status unit

10. **Document Sources**: Lists all websites, documentation, and interviews

11. **Verify Cross-Dependencies**: Checks if any other features use project data or similar widgets

12. **Submit for Gate 1** → **PASSES**

---

## Quick Reference

| Task | Agent | Human | Output |
|------|-------|-------|--------|
| Review approved idea | ✅ | | Understanding |
| Create research plan | ✅ | | Research plan |
| Conduct domain research | ✅ | | research.md |
| Conduct technology research | ✅ | | research.md |
| Identify constraints | ✅ | ✅ | constraints.md |
| Assess risks | ✅ | ✅ | risks.md |
| Identify open questions | ✅ | | research.md |
| Formulate recommendations | ✅ | | research.md |
| Document sources | ✅ | | research.md |
| Verify cross-dependencies | ✅ | | research.md/constraints.md |
| Answer questions | ✅ | ✅ | research.md (resolved) |
| Provide direction | | ✅ | Guidance |
| Answer agent questions | | ✅ | Decisions |
| Review research | | ✅ | Feedback |
| Make technology decisions | | ✅ | Decisions |
| Approve constraints | | ✅ | Approval |
| Approve risk assessment | | ✅ | Approval |
| Submit for Gate 1 | ✅ | | Gate 1 review |
| Review/approve | | ✅ | Gate 1 result |
