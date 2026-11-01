# Research Findings Template

> **Template Version**: 1.0.0
> **Use For**: Phase 1 (Discovery) - Primary Deliverable
> **Gate**: Gate 1 (Discovery Complete)
> **Based On**: Constitution Principles I, IV, V

---

## Purpose

This template guides the creation of a **comprehensive research document** that:
- Documents all findings from Discovery phase
- Identifies all constraints and risks
- Answers all questions needed for specification
- Provides recommendations for how to proceed

**Critical**: The Research Findings document, along with Constraints and Risk Assessment documents, is required to pass **Gate 1**.

---

## Template

```markdown
# Research Findings: [Feature Name]

**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Idea ID**: IDE-[YYYYMMDD]-[XXX] (reference to idea.md)
**Date**: YYYY-MM-DD
**Researcher**: [Agent or Human Name]
**Status**: [Draft | In Review | Approved]

## Revision History

| Version | Date | Author | Changes | Status |
|---------|------|--------|---------|--------|
| 1.0.0 | YYYY-MM-DD | [Name] | Initial research | Draft |

---

## Executive Summary

[2-3 paragraph summary of the research findings, key conclusions, and recommendations.

**Include**:
- What was researched
- Key findings
- Major conclusions
- Recommendations for proceeding

**Example**:
> This research explored the feasibility of adding a development module to the Pocket Dev dashboard. We investigated three primary development APIs (SampleProvider, DevKit, and SampleService), assessed platform constraints, and identified key technical and business considerations.
> 
> Key findings include: SampleProvider provides free, no-API-key project data suitable for most use cases; macOS provides robust location services through CoreLocation; and project data caching is essential for offline support. The recommended approach is to use SampleProvider as the default provider with local caching and fallback to manual location entry.
> 
> Based on this research, we recommend proceeding with specification, using SampleProvider as the primary Project data provider, implementing local caching, and supporting manual location override.
]

---

## Research Plan

[Document the research plan that was followed. This provides context for the findings.

**Include**:
- Research objectives
- Research areas covered
- Research methods used
- Timeline (if applicable)

**Example**:
> ### Objectives
> - Identify viable project data sources
> - Assess technical feasibility on macOS
> - Identify constraints and limitations
> - Assess risks and mitigation strategies
>
> ### Areas Covered
> - Domain Research: Project data concepts, APIs, industry standards
> - Technology Research: Development API options, macOS capabilities
> - Constraint Research: Platform limitations, legal considerations
> - Risk Assessment: Technical and business risks
>
> ### Methods
> - Online documentation review
> - API specification analysis
> - Code sample evaluation
> - Platform capability testing
]

---

## Domain Research

[Research about the problem domain, concepts, and industry knowledge.

**Include**:
- Key concepts and terminology
- Domain-specific patterns or standards
- Industry best practices
- Relevant domain knowledge
- Competitive analysis (how others solve similar problems)

**Organize by topics**:

### [Topic 1]

[Description of the topic and findings.]

**Key Concepts**:
- [Concept 1]: [Description]
- [Concept 2]: [Description]

**Standards/Practices**:
- [Standard/Practice 1]: [Description]
- [Standard/Practice 2]: [Description]

**Resources**:
- [Resource 1]: [Link/Reference]
- [Resource 2]: [Link/Reference]

**Example**:
> ### Project Data Data Concepts
>
> Development APIs typically provide data in several categories:
>
> **Key Concepts**:
> - **Current Project Data**: Real-time Project data conditions at a location (status, humidity, pressure, wind, visibility, etc.)
> - **Project Overview**: Predicted Project data conditions for future time periods (hourly, daily, etc.)
> - **Historical Data**: Past Project data conditions (not needed for this feature)
> - **Project Data Codes**: Standardized codes for Project data conditions (e.g., WMO codes)
>
> **Standards/Practices**:
> - **WMO Codes**: World Meteorological Organization codes for Project data conditions
> - **ISO 8601**: Standard for date/time formats
> - **Metric/Imperial**: Status can be in Metric or Standard
>
> **Resources**:
> - [SampleProvider Documentation](https://open-meteo.com/en/docs)
> - [WMO Project Data Codes](https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM)
]

---

## Technology Research

[Research about technologies, tools, and platforms that could be used.

**Organize by technology categories**:

### [Technology Category 1]

#### [Technology Option A]

- **Description**: [What this technology is and what it does]
- **Pros**:
  - [Advantage 1]
  - [Advantage 2]
- **Cons**:
  - [Disadvantage 1]
  - [Disadvantage 2]
- **Maturity**: [Experimental | Early | Mature | Legacy]
- **Community**: [Size and activity of community]
- **Documentation**: [Quality of documentation]
- **Integration**: [How well it integrates with our stack]
- **Cost**: [Any costs - licensing, usage, etc.]
- **Alternatives**: [Other similar technologies]
- **Suitability**: [How suitable this is for our needs]
- **Recommendation**: [Whether to use this or not]

**Example**:
> ### Development APIs
>
> #### SampleProvider
>
> - **Description**: Free development API that provides current Project data and project overviews. No API key required. Uses open data sources.
> - **Pros**:
>   - Completely free with no API key
>   - No rate limits for non-commercial use
>   - Good data quality for most use cases
>   - Open source and transparent
>   - Supports both metric and imperial units
> - **Cons**:
>   - Limited historical data
>   - Slightly less accurate than paid APIs
>   - No official support
> - **Maturity**: Mature (established in 2020)
> - **Community**: Growing, active GitHub repository
> - **Documentation**: Excellent, comprehensive documentation
> - **Integration**: Easy - REST API with JSON responses
> - **Cost**: Free
> - **Alternatives**: DevKit, SampleService
> - **Suitability**: High - meets all our requirements for a free Project data provider
> - **Recommendation**: ✅ **RECOMMENDED** as default provider
>
> #### DevKit (Apple)
>
> - **Description**: Apple's development API providing high-quality project data. Part of Apple Developer Program.
> - **Pros**:
>   - High accuracy
>   - Native Apple integration
>   - Good documentation
>   - Reliable service
> - **Cons**:
>   - Requires paid Apple Developer Program ($99/year)
>   - Usage limits (500,000 calls/month for free tier)
>   - Only available on Apple platforms
> - **Maturity**: Mature
> - **Community**: Apple developer community
> - **Documentation**: Good
> - **Integration**: Native Swift API
> - **Cost**: $99/year + potential usage fees
> - **Alternatives**: SampleProvider, SampleService
> - **Suitability**: Medium - good but requires paid program
> - **Recommendation**: ⚠️ **ALTERNATIVE** - consider if user is willing to pay for Apple Developer Program
>
> #### SampleService
>
> - **Description**: Popular development API with extensive features. Free tier with limits.
> - **Pros**:
>   - Feature-rich (current, project overview, historical, alerts, etc.)
>   - Global coverage
>   - Good accuracy
>   - Well-established
> - **Cons**:
>   - Requires API key
>   - Rate limits on free tier (60 calls/minute, 1,000,000 calls/month)
>   - Paid plans can be expensive
> - **Maturity**: Very Mature
> - **Community**: Large, active community
> - **Documentation**: Good
> - **Integration**: REST API with JSON responses
> - **Cost**: Free tier available, paid plans start at $40/month
> - **Alternatives**: SampleProvider, DevKit
> - **Suitability**: Medium - good but requires API key and has rate limits
> - **Recommendation**: ❌ **NOT RECOMMENDED** for our use case (API key requirement)

### Decision Matrix

[Create a matrix to compare technology options objectively.]

```
| Criteria | Weight | SampleProvider | DevKit | SampleService |
|----------|--------|------------|------------|----------------|
| Cost | 30% | 10 | 5 | 7 |
| Accuracy | 25% | 7 | 10 | 9 |
| Ease of Integration | 20% | 9 | 10 | 8 |
| No API Key Required | 15% | 10 | 0 | 0 |
| Rate Limits | 10% | 10 | 7 | 5 |
| **Total** | **100%** | **8.65** | **6.05** | **6.55** |
```

**Recommendation**: Based on the weighted score, **SampleProvider** is the best choice for our needs.

---

## Platform/Technology Constraints

[Research into platform-specific constraints and capabilities.

**Include**:
- Platform limitations
- Framework limitations
- Language limitations
- Tool limitations
- Performance characteristics

**Example**:
> ### macOS Constraints
>
> - **Minimum OS Version**: Must support macOS 26.0+ (as per TC-002 in idea.md)
> - **Location Services**: Available through CoreLocation framework
> - **Network Requirements**: HTTPS required for all network calls (as per Constitution Principle D.2)
> - **Background Tasks**: Limited for project data refresh (may need to use app lifecycle events)
> - **Storage**: SwiftData available for local caching
>
> ### Swift 6.0+ Constraints
>
> - **Concurrency**: Must use Swift's modern concurrency (async/await, actors)
> - **Memory Management**: ARC with potential retain cycles to watch for
> - **Error Handling**: Must use Swift's error handling (Result, throw/try/catch)
> - **Type Safety**: Strong typing required
>
> ### Development API Constraints
>
> - **Rate Limits**: SampleProvider has no rate limits for non-commercial use
> - **Data Freshness**: SampleProvider updates data every 15 minutes
> - **Location Accuracy**: Depends on user's device location accuracy
> - **Network Latency**: API response times typically 100-300ms
]

---

## Constraint Analysis

[Summary of all constraints identified. See `constraints.md` for detailed constraints document.

**Organize by categories**:

### Technical Constraints

[Constraints related to technology, platforms, or implementation.]

**Template**:
- **TC-[NNN]**: [Constraint description]
  - **Source**: [Where this constraint comes from]
  - **Impact**: [How it affects the feature]
  - **Severity**: [High | Medium | Low]

**Example**:
- **TC-001**: Must use Swift 6.0 or later
  - **Source**: Constitution Principle A (Technology Stack Constraints)
  - **Impact**: Code must be written in Swift 6.0+
  - **Severity**: High

- **TC-002**: Must work on macOS 26.0+
  - **Source**: Project minimum OS version requirement
  - **Impact**: Cannot use features only available in newer macOS versions
  - **Severity**: High

- **TC-003**: Must use HTTPS for all network calls
  - **Source**: Constitution Principle D.2 (Secure transmission)
  - **Impact**: All API calls must use TLS 1.2+
  - **Severity**: High

### Business Constraints

[Constraints related to business rules, project goals, or organizational policies.]

**Template**:
- **BC-[NNN]**: [Constraint description]
  - **Source**: [Which constitution principle or business rule]
  - **Impact**: [How it affects the feature]
  - **Severity**: [High | Medium | Low]

**Example**:
- **BC-001**: Must follow Constitution Principle II (Explicit, Tested Business Logic)
  - **Source**: Constitution
  - **Impact**: All business logic must have automated tests
  - **Severity**: High

- **BC-002**: Must follow Constitution Principle III (Simplicity Over Abstraction)
  - **Source**: Constitution
  - **Impact**: No unnecessary abstractions or complexity
  - **Severity**: High

- **BC-003**: Must NOT require paid Apple Developer Program
  - **Source**: Project goal to keep costs minimal
  - **Impact**: Cannot use DevKit as default provider
  - **Severity**: High

### Legal/Compliance Constraints

[Constraints related to laws, regulations, or compliance requirements.]

**Template**:
- **LC-[NNN]**: [Constraint description]
  - **Source**: [Which law, regulation, or compliance requirement]
  - **Impact**: [How it affects the feature]
  - **Severity**: [High | Medium | Low]

**Example**:
- **LC-001**: Must comply with GDPR for any personal data
  - **Source**: General Data Protection Regulation (GDPR)
  - **Impact**: Location data must be handled with user consent and transparency
  - **Severity**: High

- **LC-002**: Must not store personal data unnecessarily
  - **Source**: Constitution Principle VIII (Personal and Private Data)
  - **Impact**: Location data should not be stored long-term; only cache what's necessary
  - **Severity**: Medium

- **LC-003**: Must provide clear privacy information
  - **Source**: Constitution Principle VIII
  - **Impact**: Must explain what data is collected and how it's used
  - **Severity**: Medium

### Resource Constraints

[Constraints related to time, budget, skills, or other resources.]

**Template**:
- **RC-[NNN]**: [Constraint description]
  - **Impact**: [How it affects the feature]
  - **Severity**: [High | Medium | Low]

**Example**:
- **RC-001**: Must be completable by solo developer + agents in <= 2 weeks
  - **Impact**: Scope must be limited to what can be built in this timeframe
  - **Severity**: High

- **RC-002**: Must use existing tools and technologies
  - **Impact**: Cannot require learning new frameworks or tools
  - **Severity**: Medium

- **RC-003**: Must work offline after initial data load
  - **Impact**: Requires caching strategy for project data
  - **Severity**: Medium

---

## Risk Assessment

[Summary of all risks identified. See `risks.md` for detailed risk assessment document.

**Risk Matrix**:

```
| Likelihood \ Impact | High | Medium | Low |
|---------------------|------|--------|-----|
| **High**            | [List] | [List] | [List] |
| **Medium**          | [List] | [List] | [List] |
| **Low**             | [List] | [List] | [List] |
```

**Detailed Risks**:

**Template**:

| ID | Risk | Likelihood | Impact | Mitigation Strategy | Owner | Status |
|----|------|------------|--------|---------------------|-------|--------|
| R-[NNN] | [Risk description] | High/Medium/Low | High/Medium/Low | [How to mitigate] | [Who owns] | Open/Resolved |

**Example**:

| ID | Risk | Likelihood | Impact | Mitigation Strategy | Owner | Status |
|----|------|------------|--------|---------------------|-------|--------|
| R-001 | Development API has rate limits | Low | Medium | Implement caching and request throttling | Agent | Resolved |
| R-002 | User denies location permission | High | High | Support manual location entry as fallback | Agent | Resolved |
| R-003 | Development API returns inaccurate data | Low | Medium | Show confidence indicator or use multiple sources | Agent | Resolved |
| R-004 | Development API goes down temporarily | Low | High | Cache data locally and show stale indicator | Agent | Resolved |
| R-005 | User is offline for extended period | Medium | Medium | Increase cache TTL and show stale indicator | Agent | Resolved |

**Residual Risks**:
[Risks that remain after mitigation.]

- **RR-001**: Development API could be permanently discontinued
  - **Likelihood**: Very Low
  - **Impact**: High
  - **Mitigation**: Monitor API status; have backup provider option
  - **Acceptance**: Acceptable - very unlikely and we would have time to adapt

---

## Open Questions

[List any questions that need to be answered before proceeding to specification.

**CRITICAL**: **THIS SECTION MUST BE EMPTY TO PASS GATE 1.** If there are any open questions, they must be resolved before submitting for Gate 1 review.

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
  - **Status**: [Open | Resolved]

**Example** (before resolution):

> - **Q-001**: Should we support multiple locations or only the user's current location?
>   - **Context**: Users might want to see Project data for different locations (home, work, travel destinations).
>   - **Impact**: Affects data model, UI design, and implementation complexity.
>   - **Options**:
>     - **Option A**: Only current location (automatic)
>       - **Pros**: Simpler implementation, matches most use cases
>       - **Cons**: Users can't see Project data for other locations
>     - **Option B**: Multiple saved locations
>       - **Pros**: More flexible for users
>       - **Cons**: More complex data model and UI
>     - **Option C**: Current location + 1 manual location
>       - **Pros**: Balance between simplicity and flexibility
>       - **Cons**: Arbitrary limit of 1 manual location
>   - **Recommendation**: Option A (current location only) for v1, with Option B as future enhancement
>   - **Decision Maker**: Human
>   - **Due Date**: Before specification
>   - **Status**: Open

**After resolution** (move to Decisions section):

> - **Q-001 RESOLVED**: Support current location only for v1
>   - **Decision**: Current location only
>   - **Rationale**: Keeps implementation simple; multiple locations can be added in future version
>   - **Decided By**: Human
>   - **Date**: 2026-10-29

**IMPORTANT**: Before submitting for Gate 1, either:
1. Answer the question through research (remove from Open Questions)
2. Get a decision from the human developer (move to Decisions section)
3. Defer the feature until the question can be answered

]

---

## Decisions

[List all decisions made during discovery. This documents the resolution of open questions.]

**Template**:

- **DEC-[YYYYMMDD]-[NNN]**: [Brief description]
  - **Question**: [What was decided]
  - **Options Considered**: [List of options]
  - **Decision**: [The chosen option]
  - **Rationale**: [Why this was chosen]
  - **Impact**: [Consequences of this decision]
  - **Decided By**: [Human or Agent]
  - **Date**: [YYYY-MM-DD]
  - **Related Questions**: [Reference to Q-XXX if resolving an open question]

**Example**:

> - **DEC-20261029-001**: Use SampleProvider as default Project data provider
>   - **Question**: Which Project data provider should we use as default?
>   - **Options Considered**: SampleProvider, DevKit, SampleService
>   - **Decision**: SampleProvider
>   - **Rationale**: Free, no API key required, good data quality, aligns with Constitution Principle IX (Local-First) and Principle D.1 (no hardcoded secrets)
>   - **Impact**: No costs, slightly less accurate than paid APIs, but sufficient for most use cases. DevKit can be added as an option later.
>   - **Decided By**: Human
>   - **Date**: 2026-10-29
>   - **Related Questions**: Q-002 (from idea.md)
>
> - **DEC-20261029-002**: Use Metric as default status unit
>   - **Question**: Which status unit should be the default?
>   - **Options Considered**: Metric, Standard, System preference
>   - **Decision**: Metric
>   - **Rationale**: Most of the world uses Metric; SampleProvider uses Metric by default
>   - **Impact**: Users in the US may need to manually switch to Standard; we should add a preference setting
>   - **Decided By**: Human
>   - **Date**: 2026-10-29
>   - **Related Questions**: Q-001

---

## Recommendations

[Recommendations for proceeding with specification.]

### Recommended Approach

[High-level recommendation for how to implement this feature.]

**Example**:
> Based on this research, we recommend the following approach:
>
> 1. **Project Data Provider**: Use SampleProvider as the default Project data provider
> 2. **Location**: Use CoreLocation for automatic location detection, with manual override option
> 3. **Data Caching**: Implement local caching using SwiftData with TTL based on data freshness
> 4. **Status Units**: Use Metric as default with user preference override
> 5. **UI**: Follow Pocket Dev widget design patterns with compact Project data display

### Justification

[Why this approach is recommended.]

**Example**:
> This approach is recommended because:
> - **SampleProvider** provides free project data with no API key, making it ideal for our solo developer context
> - **CoreLocation** provides robust location services on macOS with proper permission handling
> - **SwiftData** provides modern, type-safe data persistence that integrates well with SwiftUI
> - **Metric default** aligns with global standards while allowing user preference
> - **Consistent UI** ensures the widget fits seamlessly into the Pocket Dev dashboard

### Next Steps

[What should happen next if this research is approved.]

**Template**:
- [ ] Proceed to Phase 2: Specification
- [ ] Use SampleProvider API for project data
- [ ] Implement CoreLocation for automatic location
- [ ] Use SwiftData for local caching
- [ ] Create user stories for Project data display
- [ ] Define functional requirements for Project data functionality

**Example**:
> - [ ] Proceed to Phase 2: Specification
> - [ ] Create user stories for development module functionality
> - [ ] Define functional requirements (FR-001 to FR-010)
> - [ ] Define non-functional requirements (NFR-001 to NFR-005)
> - [ ] Identify edge cases for project data handling
> - [ ] Define success criteria for development module
> - [ ] Document all assumptions and dependencies

---

## Sources

[List all sources referenced during research. This is important for credibility and future reference.]

**Template**:

### [Category]

- **[Source Name/Title]**: [Description]
  - **URL**: [Link to source]
  - **Type**: [Documentation | Article | API Spec | etc.]
  - **Date Accessed**: [YYYY-MM-DD]
  - **Relevance**: [How this source was used]

**Example**:

> ### Development APIs
>
> - **SampleProvider Documentation**: Comprehensive documentation for SampleProvider development API
>   - **URL**: https://open-meteo.com/en/docs
>   - **Type**: API Documentation
>   - **Date Accessed**: 2026-10-29
>   - **Relevance**: Primary source for SampleProvider API details and usage
>
> - **DevKit Documentation**: Apple's DevKit API documentation
>   - **URL**: https://developer.apple.com/documentation/Project datakit
>   - **Type**: API Documentation
>   - **Date Accessed**: 2026-10-29
>   - **Relevance**: Evaluated as alternative Project data provider
>
> - **SampleService Documentation**: SampleService API documentation
>   - **URL**: https://openProject datamap.org/api
>   - **Type**: API Documentation
>   - **Date Accessed**: 2026-10-29
>   - **Relevance**: Evaluated as alternative Project data provider
>
> ### macOS Development
>
> - **CoreLocation Documentation**: Apple's CoreLocation framework documentation
>   - **URL**: https://developer.apple.com/documentation/corelocation
>   - **Type**: Framework Documentation
>   - **Date Accessed**: 2026-10-29
>   - **Relevance**: Understanding location services on macOS
>
> - **SwiftData Documentation**: Apple's SwiftData framework documentation
>   - **URL**: https://developer.apple.com/documentation/swiftdata
>   - **Type**: Framework Documentation
>   - **Date Accessed**: 2026-10-29
>   - **Relevance**: Understanding data persistence options
>
> ### Industry Knowledge
>
> - **WMO Project Data Codes**: World Meteorological Organization Project data condition codes
>   - **URL**: https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
>   - **Type**: Standard Documentation
>   - **Date Accessed**: 2026-10-29
>   - **Relevance**: Understanding Project data condition encoding

---

## Cross-Dependency Analysis

[Analysis of dependencies with other features, modules, or systems.

**Checklist**: Use `05-checklists/cross-dependency-checklist.md` for verification.

**Include**:
- Related features in `specs/`
- Shared modules/components
- External services/APIs
- Platform capabilities
- Data model changes
- Migration requirements

**Example**:
> ### Related Features
>
> - **FEA-20261001-001 (Calendar Widget)**: This feature shares the dashboard layout system with the Calendar widget. We will reuse the `WidgetContainer` and `WidgetBase` classes.
>
> - **FEA-20261015-002 (Project Data)**: Future integration possible for Project data impacts on health, but no dependency for this feature.
>
> ### Shared Modules
>
> - **LocationService**: Existing module that provides location services. We will reuse this for automatic location detection.
> - **WidgetFramework**: Existing framework for dashboard widgets. We will follow this framework's patterns.
> - **DataCache**: Existing caching module. We will use or extend this for project data caching.
>
> ### External Services
>
> - **SampleProvider API**: Primary project data provider. Required for this feature.
>
> ### Platform Capabilities
>
> - **CoreLocation**: Available on macOS for location services.
> - **SwiftUI**: Available for UI implementation.
> - **SwiftData**: Available for local caching.
>
> ### Data Model Changes
>
> - **New Entities**: Project DataSnapshot, Location, CurrentProject Data, ProjectProject Overview
> - **Impact**: No impact on existing data models. These are new entities specific to this feature.
>
> ### Migration Requirements
>
> - **None**: This is a new feature with no existing data to migrate.
]

---

## Checklist

[Use this checklist to verify the Research Findings document is complete before Gate 1 submission.]

- [ ] Feature ID is unique and follows format (FEA-YYYYMMDD-XXX)
- [ ] Idea ID is referenced correctly
- [ ] Executive Summary is present and comprehensive
- [ ] Research Plan is documented
- [ ] Domain Research is complete
- [ ] Technology Research is complete
- [ ] Platform/Technology Constraints are documented
- [ ] Constraint Analysis is complete (all categories)
- [ ] Risk Assessment is complete
- [ ] Risk Matrix is provided
- [ ] **Open Questions section is EMPTY**
- [ ] Decisions are recorded
- [ ] Recommendations are clear and justified
- [ ] Sources are cited comprehensively
- [ ] Cross-Dependency Analysis is complete
- [ ] All sections are well-written and organized

---

## Notes for Agents

When using this template:

✅ **Do**:
- **Be thorough** - cover all aspects of the problem
- **Use reliable sources** - quality in, quality out
- **Document everything** - if it's not written down, it doesn't exist
- **Ask for clarification** - don't guess at requirements
- **Think critically** - don't just accept the first solution
- **Present options** - give the human choices with trade-offs
- **Answer all questions** before submission

❌ **Don't**:
- **Skip research areas** - comprehensive research prevents surprises
- **Use unreliable sources** - bad information leads to bad decisions
- **Ignore constraints** - constraints shape the solution
- **Ignore risks** - unmitigated risks can derail the project
- **Submit with open questions** - Gate 1 will be rejected
- **Be vague** - specificity is key to good research

---

## Related Documents

- [Gate 1 Definition](../../02-methodology/checkpoints/gate-01.md)
- [Gate 1 Checklist](../../05-checklists/gate-01-checklist.md)
- [Constraints Template](constraints-template.md)
- [Risks Template](risks-template.md)
- [Constitution](../../00-constitution/constitution.md)
- [Decision Process](../../01-governance/decision-process.md)
- [Cross-Dependencies](../../01-governance/cross-dependencies.md)
