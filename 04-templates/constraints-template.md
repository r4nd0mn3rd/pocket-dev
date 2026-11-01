# Constraints Document Template

> **Template Version**: 1.0.0
> **Use For**: Phase 1 (Discovery) - Supporting Deliverable
> **Gate**: Gate 1 (Discovery Complete)
> **Based On**: Constitution Principles I, II, III, IV, V

---

## Purpose

This template guides the creation of a **Constraints Document** that:
- Identifies all constraints that affect the feature
- Categorizes constraints by type (Technical, Business, Legal, Resource)
- Assesses the impact and severity of each constraint
- Provides a single source of truth for all limitations and requirements

**Critical**: This document, along with Research Findings and Risk Assessment, is required to pass **Gate 1**.

---

## Template

```markdown
# Constraints: [Feature Name]

**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Idea ID**: IDE-[YYYYMMDD]-[XXX] (reference to idea.md)
**Research ID**: RES-[YYYYMMDD]-[XXX] (reference to research.md)
**Date**: YYYY-MM-DD
**Author**: [Agent or Human Name]
**Status**: [Draft | In Review | Approved]

## Revision History

| Version | Date | Author | Changes | Status |
|---------|------|--------|---------|--------|
| 1.0.0 | YYYY-MM-DD | [Name] | Initial constraints | Draft |

---

## Executive Summary

[Brief summary of the constraints landscape for this feature.

**Include**:
- Total number of constraints identified
- Number of constraints by category
- Number of high-severity constraints
- Key constraint themes
- Overall impact on the feature

**Example**:
> This constraints document identifies **14 constraints** for the Framework Feature feature, categorized as:
> - 5 Technical Constraints (4 High severity)
> - 4 Business Constraints (3 High severity)
> - 3 Legal/Compliance Constraints (2 High severity)
> - 2 Resource Constraints (1 High severity)
>
> **Key Themes**: Platform capabilities (macOS 26.0+, Swift 6.0+), Constitution alignment, privacy compliance, and solo developer resource limitations are the primary constraint categories.
>
> **Overall Impact**: The constraints are manageable and mostly align with existing platform and project standards. The most impactful constraints are the requirement to use Swift 6.0+ (TC-001), HTTPS for all network calls (TC-003), GDPR compliance for location data (LC-001), and the 2-week development timeline (RC-001).
]

---

## Constraint Categories

Constraints are organized into four categories:

1. **Technical Constraints (TC-***) - Limitations related to technology, platforms, frameworks, or implementation details
2. **Business Constraints (BC-***) - Limitations related to business rules, project goals, or organizational policies
3. **Legal/Compliance Constraints (LC-***) - Limitations related to laws, regulations, or compliance requirements
4. **Resource Constraints (RC-***) - Limitations related to time, budget, skills, or other resources

---

## Technical Constraints

[All constraints related to technology, platforms, frameworks, or implementation details.

**Note**: Each constraint must have:
- Unique ID (TC-NNN)
- Clear description
- Source (where it comes from)
- Impact (how it affects the feature)
- Severity (High, Medium, Low)
- Related Constitution Principle (if applicable)
- Owner (who is responsible for ensuring compliance)

**Template**:

---

### TC-[NNN]: [Constraint Name]

| Field | Value |
|-------|-------|
| **Description** | [Clear description of the constraint] |
| **Source** | [Where this constraint comes from] |
| **Impact** | [How it affects the feature] |
| **Severity** | [High | Medium | Low] |
| **Constitution Principle** | [Relevant principle, if any] |
| **Owner** | [Who ensures compliance] |
| **Mitigation** | [How to address this constraint] |
| **Status** | [Active | Resolved | Waived] |

**Example**:

---

### TC-001: Use Swift 6.0 or Later

| Field | Value |
|-------|-------|
| **Description** | All code must be written in Swift 6.0 or later. |
| **Source** | Constitution Principle A (Technology Stack Constraints: Swift 6.0+) |
| **Impact** | Code must use Swift 6.0+ features (modern concurrency, data-race safety, etc.). Cannot use deprecated features removed in Swift 6.0. |
| **Severity** | High |
| **Constitution Principle** | Principle A (Technology Stack Constraints) |
| **Owner** | Developer |
| **Mitigation** | Use Swift 6.0+ syntax; avoid deprecated features; leverage modern concurrency (async/await, actors). |
| **Status** | Active |

---

### TC-002: Support macOS 26.0+

| Field | Value |
|-------|-------|
| **Description** | The feature must work on macOS 26.0 and later. |
| **Source** | Idea document (IDE-20261029-001) minimum OS version requirement |
| **Impact** | Cannot use features only available in newer macOS versions; must test on macOS 26.0+. |
| **Severity** | High |
| **Constitution Principle** | Principle I (Framework Restrictions) |
| **Owner** | Developer |
| **Mitigation** | Target macOS 26.0+ in build settings; use availability checks for new features; test on macOS 26.0+. |
| **Status** | Active |

---

### TC-003: HTTPS Required for Network Calls

| Field | Value |
|-------|-------|
| **Description** | All network calls must use HTTPS (TLS 1.2+). |
| **Source** | Constitution Principle D.2 (Secure transmission) |
| **Impact** | All API endpoints must use HTTPS; cannot use plain HTTP; must handle SSL certificate validation. |
| **Severity** | High |
| **Constitution Principle** | Principle D.2 (Secure transmission) |
| **Owner** | Developer |
| **Mitigation** | Use URLSession with default configuration (which enforces HTTPS); validate SSL certificates; avoid hardcoding HTTP URLs. |
| **Status** | Active |

---

### TC-004: No Hardcoded Secrets

| Field | Value |
|-------|-------|
| **Description** | No API keys, passwords, or other secrets may be hardcoded in source code. |
| **Source** | Constitution Principle D.1 (No hardcoded secrets) |
| **Impact** | Secrets must be stored securely or retrieved at runtime; cannot commit secrets to Git. |
| **Severity** | High |
| **Constitution Principle** | Principle D.1 (No hardcoded secrets) |
| **Owner** | Developer |
| **Mitigation** | For feature providers requiring API keys (e.g., Platform, Default), use macOS Keychain or environment variables; for Default (no API key), this is naturally satisfied. |
| **Status** | Active |

---

### TC-005: Use Swift's Modern Concurrency

| Field | Value |
|-------|-------|
| **Description** | All asynchronous code must use Swift's modern concurrency (async/await, actors). |
| **Source** | Constitution Principle C.1 (Concurrency) |
| **Impact** | Cannot use legacy GCD (Grand Central Dispatch) or completion handlers; must use structured concurrency. |
| **Severity** | Medium |
| **Constitution Principle** | Principle C.1 (Concurrency) |
| **Owner** | Developer |
| **Mitigation** | Use async/await for network calls; use actors for shared mutable state; avoid @MainActor unless necessary for UI. |
| **Status** | Active |

[Continue with remaining technical constraints...]

---

## Business Constraints

[All constraints related to business rules, project goals, or organizational policies.

**Template**: Same structure as Technical Constraints

**Example**:

---

### BC-001: Explicit, Tested Business Logic

| Field | Value |
|-------|-------|
| **Description** | All business logic must be explicit and covered by automated tests. |
| **Source** | Constitution Principle II (Explicit, Tested Business Logic) |
| **Impact** | Business rules must be clearly defined and tested; cannot have implicit or undocumented business logic. |
| **Severity** | High |
| **Constitution Principle** | Principle II |
| **Owner** | Developer |
| **Mitigation** | Define all business rules explicitly in specification; write unit tests for all business logic; ensure tests run successfully. |
| **Status** | Active |

---

### BC-002: Simplicity Over Abstraction

| Field | Value |
|-------|-------|
| **Description** | Do not introduce abstractions unless they are absolutely necessary. Prefer simplicity. |
| **Source** | Constitution Principle III (Simplicity Over Abstraction) |
| **Impact** | Avoid creating protocols, base classes, or wrapper types unless proven necessary; keep code straightforward. |
| **Severity** | High |
| **Constitution Principle** | Principle III |
| **Owner** | Developer |
| **Mitigation** | Implement features directly; only introduce abstractions after identifying concrete duplication (Rule of Three: abstract on the third instance); document rationale for each abstraction. |
| **Status** | Active |

---

### BC-003: No Paid Apple Developer Program

| Field | Value |
|-------|-------|
| **Description** | The feature must not require a paid Apple Developer Program membership. |
| **Source** | Project goal to keep costs minimal for solo developer context |
| **Impact** | Cannot use Platform (requires Apple Developer Program) as default feature provider; can only use free APIs. |
| **Severity** | High |
| **Constitution Principle** | N/A |
| **Owner** | Developer |
| **Mitigation** | Use Default as default provider (free, no API key); Platform can be offered as an optional premium feature if user has Developer Program. |
| **Status** | Active |

---

### BC-004: Follow Existing Code Patterns

| Field | Value |
|-------|-------|
| **Description** | Code must follow existing patterns and conventions in the codebase. |
| **Source** | Constitution Principle I (Framework Restrictions: Follow existing patterns) |
| **Impact** | Must reuse existing components, modules, and patterns; avoid inventing new patterns for similar problems. |
| **Severity** | Medium |
| **Constitution Principle** | Principle I |
| **Owner** | Developer |
| **Mitigation** | Review existing code (especially WidgetFramework and Calendar widget); reuse existing components (WidgetBase, WidgetContainer, LocationService, DataCache); follow existing naming conventions. |
| **Status** | Active |

---

## Legal/Compliance Constraints

[All constraints related to laws, regulations, or compliance requirements.

**Template**: Same structure as Technical Constraints

**Example**:

---

### LC-001: GDPR Compliance for Personal Data

| Field | Value |
|-------|-------|
| **Description** | Must comply with General Data Protection Regulation (GDPR) for any personal data collection or processing. |
| **Source** | GDPR (EU General Data Protection Regulation) |
| **Impact** | Location data is considered personal data; must obtain explicit user consent; must allow users to access, correct, and delete their data; must implement data protection by design. |
| **Severity** | High |
| **Constitution Principle** | Principle VIII (Personal and Private Data) |
| **Owner** | Developer |
| **Mitigation** | Request explicit permission for location access using CoreLocation; explain what data is collected and how it's used; provide privacy controls; allow users to clear cached location/feature data; do not share data with third parties. |
| **Status** | Active |

---

### LC-002: No Unnecessary Personal Data Storage

| Field | Value |
|-------|-------|
| **Description** | Must not store personal data unnecessarily or longer than required. |
| **Source** | Constitution Principle VIII (Personal and Private Data: No Unnecessary Storage) |
| **Impact** | Location data should only be cached temporarily; must implement data expiration and cleanup. |
| **Severity** | Medium |
| **Constitution Principle** | Principle VIII |
| **Owner** | Developer |
| **Mitigation** | Implement TTL (Time-To-Live) for cached feature data; automatically delete stale data; allow users to manually clear cache; store minimal location data (latitude/longitude only, no addresses or personal identifiers). |
| **Status** | Active |

---

### LC-003: Provide Clear Privacy Information

| Field | Value |
|-------|-------|
| **Description** | Must provide clear information about what data is collected, how it's used, and who has access to it. |
| **Source** | Constitution Principle VIII (Personal and Private Data: Clear information) |
| **Impact** | Must include privacy notice explaining location data usage; must document data flows. |
| **Severity** | Medium |
| **Constitution Principle** | Principle VIII |
| **Owner** | Developer |
| **Mitigation** | Add privacy notice to widget settings; document in README how location data is used; explain that feature data is fetched from Default and cached locally only. |
| **Status** | Active |

---

### LC-004: Third-Party Service Terms Compliance

| Field | Value |
|-------|-------|
| **Description** | Must comply with terms of service of any third-party APIs or services used. |
| **Source** | Default Terms of Service, Apple Developer Agreement (if using Platform) |
| **Impact** | Must read and comply with API terms; must respect rate limits; must not abuse the service. |
| **Severity** | Medium |
| **Constitution Principle** | N/A |
| **Owner** | Developer |
| **Mitigation** | Review Default terms of service; implement rate limiting (even though Default has no official rate limits for non-commercial use); attribute data source appropriately; do not use the API for commercial purposes without permission. |
| **Status** | Active |

---

## Resource Constraints

[All constraints related to time, budget, skills, or other resources.

**Template**: Same structure as Technical Constraints

**Example**:

---

### RC-001: Development Timeline <= 2 Weeks

| Field | Value |
|-------|-------|
| **Description** | The feature must be completable by a solo developer + agents within 2 weeks (14 days). |
| **Source** | Project goal for solo agent development |
| **Impact** | Scope must be limited to what can be built in this timeframe; must prioritize core features over nice-to-haves. |
| **Severity** | High |
| **Constitution Principle** | N/A |
| **Owner** | Developer |
| **Mitigation** | Scope to MVP: current feature only (no project overview); single location (no multiple locations); basic UI (no animations or advanced visualizations); defer advanced features to future versions. |
| **Status** | Active |

---

### RC-002: Solo Developer + Agents Team

| Field | Value |
|-------|-------|
| **Description** | The feature must be implementable by a solo developer with AI agents assisting. |
| **Source** | Project context |
| **Impact** | Must not require specialized knowledge or skills beyond what a solo developer + agents can provide; must use familiar technologies and patterns. |
| **Severity** | Medium |
| **Constitution Principle** | N/A |
| **Owner** | Developer |
| **Mitigation** | Use existing frameworks (WidgetFramework, SwiftUI, SwiftData); follow existing patterns; document decisions clearly for agent assistance; break work into small, manageable tasks. |
| **Status** | Active |

---

### RC-003: Must Work Offline After Initial Load

| Field | Value |
|-------|-------|
| **Description** | The widget must display feature data when offline, using cached data. |
| **Source** | User expectation for widgets (information should be available without network) |
| **Impact** | Requires robust caching strategy; must handle stale data gracefully. |
| **Severity** | Medium |
| **Constitution Principle** | Principle IX (Local-First) |
| **Owner** | Developer |
| **Mitigation** | Implement SwiftData caching with TTL; display cached data with "stale data" indicator when offline; auto-refresh when network is restored. |
| **Status** | Active |

---

## Constraint Summary

[Summary tables for quick reference.]

### By Category

```
| Category | Total | High | Medium | Low | Active | Resolved |
|----------|-------|------|--------|-----|--------|----------|
| Technical | 5 | 4 | 1 | 0 | 5 | 0 |
| Business | 4 | 3 | 1 | 0 | 4 | 0 |
| Legal/Compliance | 4 | 2 | 2 | 0 | 4 | 0 |
| Resource | 3 | 1 | 2 | 0 | 3 | 0 |
| **Total** | **16** | **10** | **6** | **0** | **16** | **0** |
```

### By Severity

```
| Severity | Technical | Business | Legal | Resource | Total |
|----------|-----------|----------|-------|----------|-------|
| High | 4 | 3 | 2 | 1 | 10 |
| Medium | 1 | 1 | 2 | 2 | 6 |
| Low | 0 | 0 | 0 | 0 | 0 |
```

### High-Severity Constraints

[List all high-severity constraints for immediate attention.]

| ID | Category | Description | Impact |
|----|----------|-------------|--------|
| TC-001 | Technical | Use Swift 6.0 or Later | Code must use modern Swift |
| TC-002 | Technical | Support macOS 26.0+ | Platform compatibility |
| TC-003 | Technical | HTTPS Required for Network Calls | Security requirement |
| TC-004 | Technical | No Hardcoded Secrets | Security requirement |
| BC-001 | Business | Explicit, Tested Business Logic | Test requirement |
| BC-002 | Business | Simplicity Over Abstraction | Code style requirement |
| BC-003 | Business | No Paid Apple Developer Program | Cost limitation |
| LC-001 | Legal | GDPR Compliance for Personal Data | Privacy requirement |
| LC-003 | Legal | Provide Clear Privacy Information | Privacy requirement |
| RC-001 | Resource | Development Timeline <= 2 Weeks | Scope limitation |

---

## Impact Assessment

[Assessment of how constraints affect the feature.]

### Positive Impacts

[How constraints help or improve the feature.]

**Example**:
> - **Swift 6.0+ requirement** ensures we use modern, type-safe, data-race-safe code
> - **HTTPS requirement** ensures user data is transmitted securely
> - **No hardcoded secrets** prevents accidental credential exposure
> - **GDPR compliance** ensures we respect user privacy and build trust
> - **Simplicity over abstraction** keeps the code maintainable

### Negative Impacts

[How constraints limit or complicate the feature.]

**Example**:
> - **2-week timeline** limits the scope of features we can implement
> - **No paid Apple Developer Program** means we can't use Platform as default
> - **GDPR compliance** adds complexity to location data handling
> - **macOS 26.0+ requirement** means we can't use newer macOS features

### Mitigation Effectiveness

[How well the mitigations address the constraints.]

**Scale**: ⭐ (Poor) to ⭐⭐⭐⭐⭐ (Excellent)

**Example**:
> - **Swift 6.0+**: ⭐⭐⭐⭐⭐ (Excellent) - Developers are already familiar with Swift 6.0
> - **HTTPS requirement**: ⭐⭐⭐⭐⭐ (Excellent) - macOS and URLSession handle this automatically
> - **No hardcoded secrets**: ⭐⭐⭐⭐⭐ (Excellent) - Default doesn't require an API key
> - **GDPR compliance**: ⭐⭐⭐⭐ (Good) - CoreLocation handles permissions; we need to add TTL and privacy notice
> - **2-week timeline**: ⭐⭐⭐ (Moderate) - MVP scope is achievable, but tight
> - **No Platform**: ⭐⭐⭐⭐ (Good) - Default is a good alternative

---

## Cross-Reference with Research

[Links to specific sections in the research document that provide more context for these constraints.]

**Example**:
> - **TC-001, TC-002**: See Technology Research → Platform/Technology Constraints in `research.md`
> - **TC-003, TC-004**: See Technology Research → Development APIs → Decision Matrix in `research.md`
> - **LC-001, LC-002, LC-003**: See Legal/Compliance Constraints in `research.md`
> - **RC-001**: See Resource Constraints in `research.md`

---

## Checklist

[Use this checklist to verify the Constraints document is complete before Gate 1 submission.]

- [ ] Feature ID is unique and follows format (FEA-YYYYMMDD-XXX)
- [ ] Idea ID is referenced correctly
- [ ] Research ID is referenced correctly
- [ ] Executive Summary is present and comprehensive
- [ ] All constraint categories are covered (Technical, Business, Legal, Resource)
- [ ] Each constraint has:
  - [ ] Unique ID (TC-NNN, BC-NNN, LC-NNN, RC-NNN)
  - [ ] Clear description
  - [ ] Source reference
  - [ ] Impact description
  - [ ] Severity level
  - [ ] Related Constitution Principle (if applicable)
  - [ ] Owner
  - [ ] Mitigation strategy
  - [ ] Status (Active/Resolved/Waived)
- [ ] Summary tables are provided (By Category, By Severity)
- [ ] High-Severity Constraints table is provided
- [ ] Impact Assessment is complete
- [ ] Cross-Reference with Research is provided
- [ ] All Constitution Principles are properly referenced where applicable

---

## Constitution Alignment Verification

[Verify that all Constitution Principles relevant to constraints are addressed.]

**Checklist**:

- [ ] **Principle A (Technology Stack Constraints)**: Swift 6.0+, macOS 26.0+, SwiftUI, SwiftData - Covered in TC-001, TC-002
- [ ] **Principle B (Integration Requirements)**: Widget Framework compatibility - Covered in BC-004
- [ ] **Principle C.1 (Concurrency)**: Modern concurrency required - Covered in TC-005
- [ ] **Principle C.2 (Threading Model)**: Main thread for UI only - Covered in TC-005
- [ ] **Principle D.1 (No hardcoded secrets)**: No secrets in code - Covered in TC-004
- [ ] **Principle D.2 (Secure transmission)**: HTTPS required - Covered in TC-003
- [ ] **Principle D.3 (Data at rest)**: Local data encryption - To be addressed in implementation
- [ ] **Principle II (Explicit, Tested Business Logic)**: Tests required - Covered in BC-001
- [ ] **Principle III (Simplicity Over Abstraction)**: Avoid unnecessary complexity - Covered in BC-002
- [ ] **Principle VIII (Personal and Private Data)**: GDPR compliance, no unnecessary storage - Covered in LC-001, LC-002, LC-003
- [ ] **Principle IX (Local-First)**: Offline support - Covered in RC-003

---

## Notes for Agents

When using this template:

✅ **Do**:
- **Be systematic** - use the checklist to ensure all constraint types are covered
- **Reference sources** - every constraint must have a clear source
- **Assess severity** - not all constraints are equally important
- **Propose mitigations** - don't just list problems, suggest solutions
- **Verify Constitution alignment** - ensure all relevant principles are addressed
- **Cross-reference with research** - link to supporting research findings

❌ **Don't**:
- **List non-constraints** - only include actual limitations or requirements
- **Ignore severity** - high-severity constraints need special attention
- **Skip mitigations** - every constraint should have a plan for addressing it
- **Be vague** - constraints should be specific and actionable
- **Duplicate constraints** - each constraint should be unique

---

## Related Documents

- [Gate 1 Definition](../../02-methodology/checkpoints/gate-01.md)
- [Gate 1 Checklist](../../05-checklists/gate-01-checklist.md)
- [Research Findings Template](research-template.md)
- [Risks Template](risks-template.md)
- [Constitution](../../00-constitution/constitution.md)
- [Cross-Dependency Checklist](../../05-checklists/cross-dependency-checklist.md)
