# Decision Process

> **Framework Version**: 1.0.0
> **Document Version**: 1.0.0
> **Last Updated**: 2026-10-29

## Overview

This document defines **how decisions are made** in the Solo Agent Development Framework. It ensures that decisions are:
- **Explicit**: Clearly stated and recorded
- **Informed**: Based on complete information
- **Traceable**: Can be understood and reviewed later
- **Actionable**: Lead to clear next steps

## Decision Classification

### By Impact

| Class | Description | Process | Example |
|-------|-------------|---------|---------|
| **Architectural** | Fundamental system design decisions | Full process + human approval | "Use SwiftData or CoreData?" |
| **Feature** | What to build and how it behaves | Full process + human approval | "Should we show 7 or 30 day history?" |
| **Technical** | Implementation details | Agent can decide with documentation | "Use Array or Set for this collection?" |
| **Tactical** | Day-to-day implementation | Agent decides, no documentation needed | "Name this variable X or Y?" |

### By Urgency

| Urgency | Description | Process |
|---------|-------------|---------|
| **Immediate** | Blocks progress, needs resolution now | Human makes quick decision, documents later |
| **Normal** | Can wait for full process | Full decision process |
| **Deferred** | Can be decided later | Document as open question, revisit later |

## Decision Process Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    DECISION NEEDED                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 1. CLASSIFY DECISION                                             │
│   - What type? (Architectural, Feature, Technical, Tactical)     │
│   - What urgency? (Immediate, Normal, Deferred)                │
│   - What phase? (Discovery, Spec, Design, Implementation)       │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
   ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
   │   Tactical   │ │  Technical   │ │Feature/Arch  │
   │   (Agent)    │ │ (Agent + Doc)│ │ (Full Process)│
   └──────────────┘ └──────────────┘ └──────────────┘
                              │               │
                              ▼               ▼
┌─────────────────────────────────────────────────────────────────┐
│ 2. GATHER INFORMATION (For Feature/Architectural)               │
│   - Research existing solutions                                  │
│   - Identify constraints                                        │
│   - Gather requirements                                         │
│   - Consult standards and best practices                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 3. IDENTIFY OPTIONS                                              │
│   - List all viable options (typically 2-4)                     │
│   - Eliminate clearly inferior options                          │
│   - Group similar options                                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 4. ANALYZE OPTIONS                                               │
│   For each option:                                              │
│   - Pros and cons                                               │
│   - Implementation complexity                                   │
│   - Performance implications                                    │
│   - Maintenance cost                                            │
│   - Risk assessment                                             │
│   - Dependencies                                                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 5. FORMULATE RECOMMENDATION                                      │
│   - Identify recommended option                                 │
│   - Justify recommendation with reasoning                       │
│   - Note any reservations or concerns                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 6. PRESENT TO HUMAN (Feature/Architectural)                      │
│   - Clear question statement                                    │
│   - All options with analysis                                   │
│   - Recommendation with reasoning                              │
│   - Impact of deferring decision                                │
│   - Request for decision                                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 7. RECORD DECISION                                               │
│   - Decision made                                               │
│   - Rationale                                                   │
│   - Date and decision-maker                                    │
│   - Next steps                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ 8. IMPLEMENT AND VERIFY                                         │
│   - Apply the decision                                          │
│   - Verify it works as expected                                 │
│   - Update documentation                                        │
└─────────────────────────────────────────────────────────────────┘
```

## Decision Document Template

Use this template for all **Feature** and **Architectural** decisions:

```markdown
# Decision: [Brief Description]

**Decision ID**: DEC-[YYYYMMDD]-[SEQUENCE]
**Date**: YYYY-MM-DD
**Phase**: [Discovery | Specification | Design | Implementation | Verification]
**Classification**: [Architectural | Feature | Technical]
**Status**: [Proposed | Decided | Implemented | Superseded]
**Decision Maker**: [Human Developer Name]

## Context

[Background information. What problem are we solving? What constraints exist?]

## Options Considered

### Option A: [Name]
- **Description**: [What this option is]
- **Pros**:
  - [Pro 1]
  - [Pro 2]
- **Cons**:
  - [Con 1]
  - [Con 2]
- **Complexity**: [Low | Medium | High]
- **Performance**: [Impact on performance]
- **Maintenance**: [Ongoing maintenance cost]
- **Dependencies**: [What this depends on]
- **Risk**: [Risk assessment]

### Option B: [Name]
[Same structure as Option A]

### Option C: [Name]
[Same structure as Option A]

## Recommendation

**Recommended Option**: [A | B | C]

**Rationale**:
[Why this option is recommended. Reference specific pros/cons from above.]

**Reservations**:
[Any concerns or issues with the recommended option.]

## Decision

**Decision**: [The decision that was made]

**Rationale**: [Why this decision was made, especially if different from recommendation]

**Alternatives Considered**: [List of options that were rejected and why]

## Impact

**Immediate Impact**:
- [What changes now]
- [What needs to be updated]

**Future Impact**:
- [Long-term consequences]
- [Technical debt introduced or resolved]

## Next Steps

- [ ] [Action 1]
- [ ] [Action 2]
- [ ] [Action 3]

## Related Decisions

- [Link to related decision 1]
- [Link to related decision 2]

## Notes

[Any additional context or information]
```

## Decision Locations

Decisions should be stored in the following locations based on scope:

| Scope | Location | Format |
|-------|----------|--------|
| Project-wide | `.specify/decisions/` | `DEC-[YYYYMMDD]-[SEQ].md` |
| Feature-specific | `specs/[FEATURE]/decisions/` | `DEC-[YYYYMMDD]-[SEQ].md` |
| Module-specific | `Sources/[MODULE]/docs/decisions/` | `DEC-[YYYYMMDD]-[SEQ].md` |

## Decision Review Process

### For Agents

When an agent encounters a decision point:

1. **Classify** the decision (see Classification above)
2. **For Tactical decisions**:
   - Make the decision
   - Document briefly in code comments if helpful
   - No separate documentation needed
3. **For Technical decisions**:
   - Analyze options
   - Make the best decision
   - Document in a brief comment or module README
4. **For Feature/Architectural decisions**:
   - **STOP** and present to human
   - Use the Decision Document Template
   - Fill out all sections
   - Present for human decision

### For Human Developer

When presented with a decision:

1. **Review** the decision document
2. **Verify** all options are considered
3. **Check** trade-offs are accurate
4. **Consider** long-term implications
5. **Make decision** and record it
6. **Communicate** decision to agents

## Common Decision Patterns

### "How should we implement X?"

**Process**:
1. Identify all viable implementation approaches
2. Analyze each against:
   - Complexity
   - Performance
   - Maintainability
   - Alignment with constitution principles
3. Recommend the simplest that meets requirements
4. Present to human if Feature/Architectural

### "Which technology should we use?"

**Process**:
1. Identify all viable technologies
2. Analyze each against:
   - Maturity and stability
   - Community support
   - Documentation quality
   - Integration complexity
   - Long-term viability
   - Alignment with tech stack constraints
3. Recommend the most appropriate
4. Present to human (usually Feature/Architectural)

### "Should we add this feature?"

**Process**:
1. Verify alignment with project goals
2. Assess value vs. complexity
3. Check if it conflicts with existing features
4. Estimate implementation effort
5. Present to human (always Feature/Architectural)

## Handling Disagreements

When agents disagree on a decision:

1. **Document** the disagreement
2. **Present both sides** with reasoning
3. **Human decides** based on:
   - Constitution principles
   - Project goals
   - Long-term implications
4. **Record** the decision and rationale

## Decision Audit

Periodically review decisions to:
- Verify they are still valid
- Check if context has changed
- Identify decisions that need to be revisited

**Audit Frequency**:
- **Architectural decisions**: Every 6 months
- **Feature decisions**: When feature is revisited
- **Technical decisions**: As needed

## Tools for Decision Making

### Decision Matrix

For complex decisions with many factors, use a decision matrix:

```
| Criteria | Weight | Option A | Option B | Option C |
|----------|--------|----------|----------|----------|
| Complexity | 30% | 8 | 5 | 3 |
| Performance | 25% | 7 | 9 | 6 |
| Maintainability | 20% | 9 | 7 | 5 |
| Time to Implement | 15% | 5 | 8 | 10 |
| Risk | 10% | 8 | 6 | 4 |
| **Total** | **100%** | **7.55** | **7.05** | **5.35** |
```

### SWOT Analysis

For strategic decisions, use SWOT (Strengths, Weaknesses, Opportunities, Threats):

```markdown
## Option A: [Name]

### Strengths
- [Strength 1]
- [Strength 2]

### Weaknesses
- [Weakness 1]
- [Weakness 2]

### Opportunities
- [Opportunity 1]
- [Opportunity 2]

### Threats
- [Threat 1]
- [Threat 2]
```

## Quick Reference

| Situation | Action |
|-----------|--------|
| Agent finds ambiguity | Stop, present options to human |
| Agent needs to choose | Use classification to determine process |
| Human presented with decision | Review, verify, decide, document |
| Decision needs revisiting | Create new decision document referencing old one |
| Agents disagree | Document disagreement, human decides |
