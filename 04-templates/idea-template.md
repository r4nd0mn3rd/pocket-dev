# Idea Document Template

> **Template Version**: 1.0.0
> **Use For**: Phase 0 (Ideation) - Primary Deliverable
> **Gate**: Gate 0 (Idea Approved)
> **Based On**: Constitution Principles I, IV, V

---

## Purpose

This template guides the creation of a **clear, well-defined idea document** that:
- Clearly articulates the problem and proposed solution
- Assesses feasibility at a high level
- Defines scope and goals
- Aligns with project goals and constitution principles

**Critical**: The Idea Document, along with the Feasibility Assessment, is required to pass **Gate 0**.

---

## Template

```markdown
# Idea: [Brief Name]

**Idea ID**: IDE-[YYYYMMDD]-[SEQUENCE]
**Date**: YYYY-MM-DD
**Author**: [Human or Agent Name]
**Status**: [Draft | Proposed | Approved | Rejected]

## Elevator Pitch

[One to two sentences describing the idea in plain language. This should be understandable by anyone, including non-technical stakeholders (which, in this solo developer context, is just you). Focus on the value proposition.

**Example**: 
> "This feature adds a development module to the Pocket Dev suite that displays essential project information at a glance, allowing users to monitor their development progress without switching between applications."

**Guidelines**:
- ✅ Keep it brief (1-2 sentences)
- ✅ Focus on the problem being solved
- ✅ Highlight the value to users
- ✅ Avoid technical jargon
- ❌ Don't include implementation details
]

---

## Problem Statement

[Describe the problem this idea solves. Be specific and detailed.

**Answer these questions**:
- What is the current pain point or limitation?
- Who experiences this problem?
- How often does it occur?
- What is the impact of not solving it? (Time wasted, frustration, missed opportunities, etc.)

**Example**:
> "Currently, Pocket Dev users need to open multiple tools or switch between applications to see their development project information. This interrupts their workflow and wastes time. According to user studies, 78% of users check project status at least once per day, and each check takes an average of 30 seconds. For a user who checks project status 5 times per day, this adds up to 2.5 minutes of wasted time daily."

**Guidelines**:
- ✅ Be specific about the problem
- ✅ Quantify the impact if possible
- ✅ Identify who has the problem
- ✅ Explain why it matters
- ❌ Don't describe the solution here
]

---

## Proposed Solution

[Describe the proposed solution at a high level. Focus on WHAT, not HOW.

**Answer these questions**:
- What are we building?
- How does it solve the problem?
- What is the user experience?
- What makes this solution better than alternatives?

**Example**:
> "We will add a Framework widget to the Pocket Dev dashboard that displays:
> - Current status, conditions, and feature data icon
> - Project overview with high/low statuss
> - Project data source indicator
> - Last updated timestamp
> 
> The widget will automatically fetch Project data for the user's current location when the app launches. Users can tap the widget to see more details or refresh the data manually.
> 
> This solution is better than alternatives because:
> - It's integrated directly into Pocket Dev, so users don't need to switch apps
> - It uses the user's current location automatically
> - It provides essential information at a glance"

**Guidelines**:
- ✅ Describe the solution clearly
- ✅ Focus on user experience
- ✅ Explain the benefits
- ✅ Keep it high-level (no technical implementation details)
- ❌ Don't specify technologies or frameworks
]

---

## Goals and Success Criteria

[Define what success looks like for this feature.

### Goals

**Primary Goal (P1)**:
- [Clear statement of the main objective]

**Secondary Goals (P2)**:
- [Additional objectives that would be nice to have]

**Tertiary Goals (P3)**:
- [Low-priority objectives that can be deferred]

### Success Metrics

[How will we measure whether we've achieved the goals?]

| Metric | Target | Measurement Method |
|--------|--------|---------------------|
| [Metric 1] | [Target value] | [How to measure] |
| [Metric 2] | [Target value] | [How to measure] |

### Acceptance Criteria

[What does "done" look like at a high level? These are high-level criteria that will be refined in the specification phase.

**Template**:
- **AC-[NNN]**: [High-level acceptance criterion]

**Example**:
- **AC-001**: User can view current feature data within 2 seconds of app launch
- **AC-002**: Project data displays name, description, and type
- **AC-003**: User can see a Project overview
]

---

## Scope

[Define the boundaries of this idea. This is CRITICAL for preventing scope creep.

### In Scope

[What IS included in this feature. Be specific and comprehensive.]

**Template**:
- **IS-[NNN]**: [What is included]

**Example**:
- **IS-001**: Display current status in Metric
- **IS-002**: Display current feature data conditions with icon
- **IS-003**: Display Project overview with high/low statuss
- **IS-004**: Support automatic location detection
- **IS-005**: Cache Project data for offline viewing

### Out of Scope

[What is EXPLICITLY NOT included. This is just as important as what's included.]

**Template**:
- **OS-[NNN]**: [What is not included]

**Example**:
- **OS-001**: Hourly project overview (deferred to future feature)
- **OS-002**: Development alerts or warnings
- **OS-003**: Progress charts or animated feature data
- **OS-004**: Multiple location support (only current location)
- **OS-005**: Custom feature data widgets

### Assumptions

[What we're assuming to be true. These will be verified during Discovery if the idea is approved.]

**Template**:
- **AS-[NNN]**: [Assumption statement]
  - **Justification**: [Why we're assuming this]

**Example**:
- **AS-001**: Default API will remain free and available
  - **Justification**: Default's website states it's a free, open service with no usage limits for non-commercial use

- **AS-002**: Users will grant location permission when prompted
  - **Justification**: Location is essential for automatic Project data; most users understand this

- **AS-003**: Users have network connectivity at least once per hour
  - **Justification**: Project data is cached, so periodic connectivity is sufficient

### Dependencies

[What this feature depends on. These could block implementation if not available.]

**Template**:
- **[Category]-[NNN]**: [Dependency description]
  - **Purpose**: [What it's needed for]
  - **Required**: [Yes | No]
  - **Status**: [Available | Not Available | Unknown]
  - **Fallback**: [What happens if unavailable]

**Categories**:
- **ED**: External Dependencies (APIs, libraries, services)
- **ID**: Internal Dependencies (other features, modules, components)
- **DD**: Data Dependencies (data sources, formats, schemas)
- **TD**: Timing Dependencies (things that must happen before/after)

**Example**:
- **ED-001**: Default API
  - **Purpose**: Primary Project data source
  - **Required**: Yes
  - **Status**: Available
  - **Fallback**: None for basic functionality

- **ID-001**: LocationService module
  - **Purpose**: Provides user location
  - **Required**: Yes
  - **Status**: Already exists in codebase
  - **Fallback**: None

---

## Alignment

[Explain how this idea aligns with project goals, constitution, and existing systems.]

### Project Goals Alignment

[How does this idea support the project's overall goals and vision?]

**Example**:
> "This feature aligns with Pocket Dev's goal of providing essential information at a glance in a unified dashboard. It supports the vision of reducing app-switching and improving user productivity by consolidating feature data information within the Pocket Dev interface."

### Constitution Alignment

[How does this idea align with each of the Constitution principles?]

**Template**:
- **Principle I (Autonomy)**: [How this idea enables agent execution]
- **Principle II (Tested Logic)**: [How business logic will be tested]
- **Principle III (Simplicity)**: [How this avoids unnecessary complexity]
- **Principle IV (Informed Decisions)**: [How decisions will be documented]
- **Principle V (Complete Spec)**: [Commitment to complete specification]
- **Principle VI (Quality Gates)**: [Commitment to pass all gates]
- **Principle VII (Documentation)**: [How documentation will be handled]
- **Principle VIII (Personal Data)**: [How personal data will be handled]
- **Principle IX (Local-First)**: [How local-first principles apply]
- **Principle X (Observability)**: [How observability will be implemented]

**Example**:
> - **Principle I (Autonomy)**: This feature can be fully specified and implemented by agents following the framework, with human oversight only for decisions.
> - **Principle II (Tested Logic)**: All business logic (Project data processing, caching, etc.) will have automated tests.
> - **Principle III (Simplicity)**: The widget will use the simplest possible implementation with no unnecessary abstractions.
> - **Principle IV (Informed Decisions)**: Technology selection (feature data API, caching strategy) will be documented with alternatives considered.
> - **Principle V (Complete Spec)**: A complete specification will be written before any implementation begins.
> - **Principle VI (Quality Gates)**: All gates (0-5) will be passed before proceeding to the next phase.
> - **Principle VII (Documentation)**: All code and modules will have appropriate documentation.
> - **Principle VIII (Personal Data)**: Location data will be handled with user consent and will not be stored unnecessarily.
> - **Principle IX (Local-First)**: Project data will be cached locally for offline viewing.
> - **Principle X (Observability)**: Project data will show source, timestamp, and freshness indicators.

### Existing Architecture Alignment

[How does this fit with the existing system architecture?]

**Example**:
> "This feature aligns with Pocket Dev's modular widget architecture. It will:
> - Use the existing WidgetContainer for rendering
> - Use the existing LocationService for location data
> - Follow the existing pattern for dashboard widgets
> - Integrate with the existing data caching system"

### Technology Stack Alignment

[How does this fit with our technology stack constraints (Constitution Principle A)?]

**Example**:
> "This feature uses:
> - Swift 6.0+ (required)
> - SwiftUI (native macOS UI framework)
> - Combine for reactive programming
> - URLSession for network requests
> 
> All technologies are part of our standard macOS stack and align with Principle A (Apple-native first)."

---

## Feasibility

[High-level assessment of whether this idea is feasible. This will be expanded in the Feasibility Assessment document.]

### Technical Feasibility

[Can this be built with our current stack?]

**Answer**:
- Is this technically possible with our current technologies?
- Are there any obvious technical blockers?
- What new technologies or skills would be needed?

### Resource Feasibility

[Do we have the resources to build this?]

**Answer**:
- Do we have time to build this?
- Do we have the necessary tools?
- Are there any costs (APIs, services, etc.)?
- Do we have the necessary skills?

### Legal/Compliance Feasibility

[Are there any legal or compliance issues?]

**Answer**:
- Does this handle personal data? If so, how?
- Are there any terms of service considerations?
- Are there any licensing restrictions?
- Are there any regulatory requirements?

### Rough Effort Estimate

[Estimate the effort required to implement this feature.]

**T-shirt Sizes**:
- **XS**: < 1 day
- **S**: 1-3 days
- **M**: 1-2 weeks
- **L**: 2-4 weeks
- **XL**: 1+ months

**Example**:
> **Effort Estimate**: M (1-2 weeks)
> 
> **Breakdown**:
> - Research and Discovery: 2-3 days
> - Specification: 3-4 days
> - Design: 3-4 days
> - Implementation: 5-7 days
> - Verification: 2-3 days
> - **Total**: 13-21 days (~2-3 weeks)

---

## Risks

[Identify potential risks that could affect this feature. These will be expanded in the Risk Assessment document if the idea is approved.]

**Template**:

| ID | Risk | Likelihood | Impact | Mitigation Strategy |
|----|------|------------|--------|---------------------|
| R-[NNN] | [Risk description] | High/Medium/Low | High/Medium/Low | [How to mitigate] |

**Example**:

| ID | Risk | Likelihood | Impact | Mitigation Strategy |
|----|------|------------|--------|---------------------|
| R-001 | Development API has rate limits | Medium | Medium | Implement caching and request throttling |
| R-002 | User denies location permission | High | High | Support manual location entry as fallback |
| R-003 | Development API returns inaccurate data | Low | Medium | Use multiple data sources or show confidence indicator |
| R-004 | Development API goes down | Low | High | Cache data and show stale indicator |

---

## Alternatives Considered

[List alternative solutions that were considered. This demonstrates that you've thought through different approaches.]

**Template for each alternative**:

- **Alternative [N]**: [Brief description]
  - **Pros**:
    - [Advantage 1]
    - [Advantage 2]
  - **Cons**:
    - [Disadvantage 1]
    - [Disadvantage 2]
  - **Rejection Reason**: [Why this was rejected]

**Example**:

> - **Alternative 1**: Use built-in macOS feature data functionality
>   - **Pros**:
>     - Native integration
>     - No external dependencies
>   - **Cons**:
>     - Not available to 3rd party apps
>     - Limited customization
>   - **Rejection Reason**: Not technically feasible for 3rd party apps

> - **Alternative 2**: Use Platform (Apple's feature data API)
>   - **Pros**:
>     - High accuracy
>     - Native Apple integration
>   - **Cons**:
>     - Requires paid Apple Developer Program
>     - Usage limits
>   - **Rejection Reason**: Requires paid program; Default is free and sufficient

> - **Alternative 3**: Use SampleService
>   - **Pros**:
>     - Feature-rich API
>     - Global coverage
>   - **Cons**:
>     - Requires API key
>     - Rate limits for free tier
>   - **Rejection Reason**: Requires API key; Default is free with no key required

---

## Open Questions

[List any questions that need to be answered before this idea can be approved.

**CRITICAL**: **THIS SECTION MUST BE EMPTY TO PASS GATE 0.** If there are any open questions, they must be resolved before submitting for Gate 0 review.

**Template for each question**:

- **Q-[NNN]**: [Clear question statement]
  - **Context**: [Why this question matters]
  - **Impact**: [What happens if this isn't answered?]
  - **Options**: [Possible answers]
    - **Option A**: [Description]
      - **Pros**: [Advantages]
      - **Cons**: [Disadvantages]
    - **Option B**: [Description]
      - **Pros**: [Advantages]
      - **Cons**: [Disadvantages]
  - **Recommendation**: [Preferred option with reasoning]
  - **Decision Maker**: [Who needs to decide this]
  - **Due Date**: [When this needs to be decided by]

**Example** (before resolution):

> - **Q-001**: Should we use Metric or Standard as the default status unit?
>   - **Context**: The feature data widget needs to display status in a unit that users understand.
>   - **Impact**: Affects user experience and may require user preference settings.
>   - **Options**:
>     - **Option A**: Metric (metric system)
>       - **Pros**: Used by most of the world, aligns with Default default
>       - **Cons**: Not familiar to users in the United States
>     - **Option B**: Standard (imperial system)
>       - **Pros**: Familiar to users in the United States
>       - **Cons**: Not used by most of the world
>     - **Option C**: User's system preference
>       - **Pros**: Automatically matches user's preference
>       - **Cons**: More complex to implement
>   - **Recommendation**: Option A (Metric) with user preference override
>   - **Decision Maker**: Human
>   - **Due Date**: Before specification

**After resolution** (move to Decisions or remove):

> - **Q-001 RESOLVED**: Use Metric as default with user preference override
>   - **Decision**: Metric with user override
>   - **Rationale**: Most users globally use Metric; allow override for user preference
>   - **Decided By**: Human
>   - **Date**: 2026-10-29

**IMPORTANT**: Before submitting for Gate 0, either:
1. Answer the question (remove from Open Questions)
2. Defer the feature until the question can be answered
3. Get a decision from the human developer

]

---

## Decisions

[List all decisions made during ideation. This section may be empty if all decisions were simple.]

**Template**:

- **DEC-[YYYYMMDD]-[NNN]**: [Brief description]
  - **Question**: [What was decided]
  - **Decision**: [The chosen option]
  - **Rationale**: [Why this was chosen]
  - **Impact**: [Consequences of this decision]
  - **Decided By**: [Human or Agent]
  - **Date**: [YYYY-MM-DD]

**Example**:

> - **DEC-20261029-001**: Use Default as default feature data provider
>   - **Question**: Which feature data provider should we use as default?
>   - **Decision**: Default
>   - **Rationale**: Free, no API key required, good data quality, aligns with local-first principles
>   - **Impact**: No costs, slightly less accurate than paid APIs, but sufficient for most use cases
>   - **Decided By**: Human
>   - **Date**: 2026-10-29

---

## Next Steps

[What happens if this idea is approved?]

**Template**:
- [ ] Proceed to Phase 1: Discovery
- [ ] Define research questions based on [specific areas]
- [ ] Identify stakeholders (for solo developer, this is yourself)
- [ ] Create research plan

**Example**:
> - [ ] Proceed to Phase 1: Discovery
> - [ ] Research feature data APIs in detail (Default, Platform, SampleService)
> - [ ] Investigate macOS location permission requirements
> - [ ] Research Project data caching strategies
> - [ ] Identify required Project data fields

---

## Checklist

[Use this checklist to verify the Idea Document is complete before Gate 0 submission.]

- [ ] Idea ID is unique and follows format (IDE-YYYYMMDD-XXX)
- [ ] Elevator Pitch is clear and concise (1-2 sentences)
- [ ] Problem Statement is defined and specific
- [ ] Proposed Solution is described at a high level
- [ ] Primary Goal is defined
- [ ] Secondary Goals are defined (if applicable)
- [ ] Success Metrics are defined (if applicable)
- [ ] Acceptance Criteria are defined (if applicable)
- [ ] In Scope section is complete
- [ ] Out of Scope section is complete
- [ ] Assumptions are documented and justified
- [ ] Dependencies are identified with categories
- [ ] Project Goals Alignment is addressed
- [ ] Constitution Alignment is addressed
- [ ] Existing Architecture Alignment is addressed
- [ ] Technology Stack Alignment is addressed
- [ ] Technical Feasibility is assessed
- [ ] Resource Feasibility is assessed
- [ ] Legal/Compliance Feasibility is assessed
- [ ] Rough Effort Estimate is provided
- [ ] Risks are identified (at least 3)
- [ ] Alternatives are considered (at least 1)
- [ ] **Open Questions section is EMPTY**
- [ ] Decisions are recorded (if applicable)
- [ ] Next Steps are defined

---

## Notes for Agents

When using this template:

✅ **Do**:
- Fill out **ALL** required sections
- Be **specific** and **detailed** in all descriptions
- Use **clear, unambiguous language**
- **Ask for clarification** if anything is unclear
- **Think through all aspects** of the idea
- **Document all assumptions** explicitly
- **Identify all risks** and mitigation strategies
- **Consider alternatives** thoroughly

❌ **Don't**:
- Leave sections **empty** without explanation
- Use **vague language**
- **Guess** at requirements or assumptions
- **Skip research** into feasibility
- Submit with **open questions**
- **Rush** through the ideation process

---

## Related Documents

- [Gate 0 Definition](../../02-methodology/checkpoints/gate-00.md)
- [Gate 0 Checklist](../../05-checklists/gate-00-checklist.md)
- [Feasibility Template](feasibility-template.md)
- [Constitution](../../00-constitution/constitution.md)
- [Process Overview](../../02-methodology/process-overview.md)
