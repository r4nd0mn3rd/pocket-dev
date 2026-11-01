# Risk Assessment Template

> **Template Version**: 1.0.0
> **Use For**: Phase 1 (Discovery) - Supporting Deliverable
> **Gate**: Gate 1 (Discovery Complete)
> **Based On**: Constitution Principles I, IV, V

---

## Purpose

This template guides the creation of a **Risk Assessment Document** that:
- Identifies all risks that could affect the feature
- Assesses the likelihood and impact of each risk
- Prioritizes risks for attention
- Provides mitigation strategies
- Documents residual risks

**Critical**: This document, along with Research Findings and Constraints, is required to pass **Gate 1**.

---

## Template

```markdown
# Risk Assessment: [Feature Name]

**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Idea ID**: IDE-[YYYYMMDD]-[XXX] (reference to idea.md)
**Research ID**: RES-[YYYYMMDD]-[XXX] (reference to research.md)
**Constraints ID**: CON-[YYYYMMDD]-[XXX] (reference to constraints.md)
**Date**: YYYY-MM-DD
**Author**: [Agent or Human Name]
**Status**: [Draft | In Review | Approved]

## Revision History

| Version | Date | Author | Changes | Status |
|---------|------|--------|---------|--------|
| 1.0.0 | YYYY-MM-DD | [Name] | Initial risk assessment | Draft |

---

## Executive Summary

[Brief summary of the risk landscape for this feature.

**Include**:
- Total number of risks identified
- Number of risks by category
- Number of risks by likelihood/impact
- Key risk themes
- Overall risk profile
- Residual risk level

**Risk Profile Scale**:
- 🟢 **Low Risk**: Mostly low-impact risks with good mitigations
- 🟡 **Medium Risk**: Some medium-impact risks or high-impact risks with good mitigations
- 🔴 **High Risk**: Multiple high-impact risks or risks without good mitigations

**Example**:
> This risk assessment identifies **12 risks** for the Project Data Widget feature:
> - 3 Technical Risks (2 High impact, 1 Medium)
> - 2 User Experience Risks (1 High, 1 Medium)
> - 2 Business Risks (1 High, 1 Medium)
> - 2 Data Risks (1 High, 1 Medium)
> - 1 Legal Risk (1 Medium)
> - 2 External Risks (1 High, 1 Medium)
>
> **Key Themes**: Development API reliability, location permission handling, offline functionality, and data accuracy are the primary risk areas.
>
> **Overall Risk Profile**: 🟡 **Medium Risk**
> - 5 High-impact risks, all with effective mitigations
> - 6 Medium-impact risks, most with good mitigations
> - 1 Low-impact risk
> - **Residual Risk**: Low (all high-impact risks have good mitigations)
>
> **Recommendation**: Proceed to specification with awareness of development API reliability and offline functionality risks.
]

---

## Risk Categories

Risks are organized into categories for better understanding:

1. **Technical Risks (TR-***) - Risks related to technology, implementation, or technical dependencies
2. **User Experience Risks (UXR-***) - Risks related to user experience, usability, or user satisfaction
3. **Business Risks (BR-***) - Risks related to business objectives, project goals, or market factors
4. **Data Risks (DR-***) - Risks related to data quality, integrity, or availability
5. **Legal/Compliance Risks (LR-***) - Risks related to legal requirements or compliance
6. **External Risks (ER-***) - Risks related to external dependencies or factors outside our control
7. **Schedule Risks (SR-***) - Risks related to timeline or resource constraints

---

## Risk Matrix

[Visual representation of risks by likelihood and impact.]

**Likelihood Scale**:
- 🔴 **High**: Very likely to occur (50%+ probability)
- 🟡 **Medium**: Likely to occur (10-50% probability)
- 🟢 **Low**: Unlikely to occur (<10% probability)

**Impact Scale**:
- 🔴 **High**: Significant negative impact (feature failure, major delays, compliance issues)
- 🟡 **Medium**: Moderate negative impact (reduced functionality, minor delays, user dissatisfaction)
- 🟢 **Low**: Minor negative impact (cosmetic issues, small inconveniences)

**Matrix**:

```
| Likelihood \ Impact | High (🔴) | Medium (🟡) | Low (🟢) |
|----------------------|-----------|-------------|----------|
| **High (🔴)**        | R-002, R-005 | R-001, R-003, R-004 | R-007 |
| **Medium (🟡)**      |           | R-006, R-008, R-010 | R-009, R-011, R-012 |
| **Low (🟢)**         |           |             |           |
```

**Key**: Risks in the **High-High** quadrant require immediate attention.

---

## Risk Register

[Detailed list of all identified risks with assessment and mitigation.]

**Template for each risk**:

---

### R-[NNN]: [Risk Name]

| Field | Value |
|-------|-------|
| **ID** | R-[NNN] |
| **Category** | [Technical | User Experience | Business | Data | Legal | External | Schedule] |
| **Description** | [Clear description of the risk] |
| **Likelihood** | [High | Medium | Low] (🔴 | 🟡 | 🟢) |
| **Impact** | [High | Medium | Low] (🔴 | 🟡 | 🟢) |
| **Priority** | [High | Medium | Low] (derived from likelihood * impact) |
| **Trigger** | [What event or condition would cause this risk to occur] |
| **Early Warning Signs** | [Indicators that the risk might be materializing] |
| **Mitigation Strategy** | [How to prevent or reduce the risk] |
| **Contingency Plan** | [What to do if the risk occurs despite mitigation] |
| **Owner** | [Who is responsible for monitoring and mitigating] |
| **Status** | [Open | Mitigated | Resolved | Accepted] |
| **Residual Risk** | [Risk level after mitigation] |
| **Related Constraints** | [Links to related constraints in constraints.md] |
| **Related Research** | [Links to related sections in research.md] |

**Example**:

---

### R-001: Development API Rate Limiting

| Field | Value |
|-------|-------|
| **ID** | R-001 |
| **Category** | External |
| **Description** | The development API provider may implement rate limiting that we are unaware of, causing failed requests. |
| **Likelihood** | 🟡 Medium |
| **Impact** | 🟡 Medium |
| **Priority** | 🟡 Medium |
| **Trigger** | SampleProvider changes their rate limiting policy or we hit an undocumented limit. |
| **Early Warning Signs** | HTTP 429 (Too Many Requests) responses; user reports of project data not updating. |
| **Mitigation Strategy** | Implement request throttling (max 1 request per minute); cache responses aggressively with TTL; use exponential backoff for retries. |
| **Contingency Plan** | Switch to backup Project data provider (if available); display cached data with "stale" indicator; allow manual refresh. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - with throttling and caching, risk is minimal |
| **Related Constraints** | TC-003 (HTTPS), RC-003 (Offline support) |
| **Related Research** | Technology Research → Development APIs → SampleProvider |

---

### R-002: User Denies Location Permission

| Field | Value |
|-------|-------|
| **ID** | R-002 |
| **Category** | User Experience |
| **Description** | User may deny location permission, preventing automatic project data retrieval. |
| **Likelihood** | 🔴 High |
| **Impact** | 🔴 High |
| **Priority** | 🔴 High |
| **Trigger** | User taps "Don't Allow" when prompted for location permission. |
| **Early Warning Signs** | Permission dialog shown to user; user declines permission. |
| **Mitigation Strategy** | Provide clear explanation of why location is needed; allow manual location entry as fallback; make it easy to change permission later. |
| **Contingency Plan** | Display instruction to enable location in settings or enter location manually; show placeholder Project data for default location (e.g., "Project Data: Enable location or enter city"). |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - manual entry provides full fallback |
| **Related Constraints** | LC-001 (GDPR), LC-002 (No unnecessary storage) |
| **Related Research** | Platform Constraints → macOS CoreLocation |

---

### R-003: Development API Returns Inaccurate Data

| Field | Value |
|-------|-------|
| **ID** | R-003 |
| **Category** | Data |
| **Description** | The development API may return inaccurate or outdated data for the user's location. |
| **Likelihood** | 🟢 Low |
| **Impact** | 🟡 Medium |
| **Priority** | 🟡 Medium |
| **Trigger** | SampleProvider data source has issues; location coordinates are slightly off; API returns stale cached data. |
| **Early Warning Signs** | User reports Project data doesn't match reality; data seems inconsistent (e.g., status jumps dramatically without explanation). |
| **Mitigation Strategy** | Use precise location coordinates; implement data validation (e.g., check status is within reasonable range); consider using multiple data sources for cross-validation. |
| **Contingency Plan** | Display confidence indicator (e.g., "Project Data: 72°F - last updated 5 min ago"); allow user to manually refresh; provide option to use different Project data provider if available. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - rare and impact is moderate |
| **Related Constraints** | TC-002 (macOS 26.0+), RC-001 (Timeline) |
| **Related Research** | Technology Research → Development APIs → Data Accuracy |

---

### R-004: Development API Service Outage

| Field | Value |
|-------|-------|
| **ID** | R-004 |
| **Category** | External |
| **Description** | The development API service may experience downtime or outages. |
| **Likelihood** | 🟢 Low |
| **Impact** | 🔴 High |
| **Priority** | 🟡 Medium |
| **Trigger** | SampleProvider servers are down; network connectivity issues between client and API. |
| **Early Warning Signs** | HTTP 5xx errors; network timeout errors; user reports of Project data not updating. |
| **Mitigation Strategy** | Implement robust caching with long TTL (e.g., 1 hour); use offline-first approach; provide manual refresh option. |
| **Contingency Plan** | Display cached data with "Last updated X time ago" indicator; allow manual refresh; show error message if no cached data available. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟡 Medium - cached data provides temporary mitigation, but prolonged outage would affect freshness |
| **Related Constraints** | RC-003 (Offline support), TC-003 (HTTPS) |
| **Related Research** | Technology Research → Development APIs → Reliability |

---

### R-005: Network Connectivity Issues

| Field | Value |
|-------|-------|
| **ID** | R-005 |
| **Category** | Technical |
| **Description** | User's device may have poor or no network connectivity, preventing project data retrieval. |
| **Likelihood** | 🔴 High |
| **Impact** | 🟡 Medium |
| **Priority** | 🟡 Medium |
| **Trigger** | User is offline (airplane mode, no Wi-Fi/cellular); network is slow or unstable. |
| **Early Warning Signs** | Network requests timeout or fail; device connectivity indicators show no connection. |
| **Mitigation Strategy** | Implement offline-first design; cache project data with appropriate TTL; auto-retry when network is restored. |
| **Contingency Plan** | Display cached data with stale indicator; queue refresh requests for when network is restored; notify user when data is refreshed. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - offline-first design handles this well |
| **Related Constraints** | RC-003 (Offline support), Principle IX (Local-First) |
| **Related Research** | Platform Constraints → Network requirements |

---

### R-006: Implementation Complexity Exceeds Timeline

| Field | Value |
|-------|-------|
| **ID** | R-006 |
| **Category** | Schedule |
| **Description** | The implementation may take longer than the 2-week timeline due to unexpected complexity. |
| **Likelihood** | 🟡 Medium |
| **Impact** | 🟡 Medium |
| **Priority** | 🟡 Medium |
| **Trigger** | Underestimated complexity of SwiftUI animations, CoreLocation integration, or SwiftData caching. |
| **Early Warning Signs** | Tasks taking longer than estimated; daily progress below expectations; increasing technical debt. |
| **Mitigation Strategy** | Break work into small, well-defined tasks; use proven patterns from existing widgets; prioritize MVP features; defer nice-to-haves. |
| **Contingency Plan** | Scope reduction (remove project overview, simplify UI); extend timeline if absolutely necessary (with stakeholder approval); seek agent assistance for complex tasks. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - with good task breakdown and MVP focus, risk is manageable |
| **Related Constraints** | RC-001 (Timeline), RC-002 (Solo developer) |
| **Related Research** | Resource Constraints → Development timeline |

---

### R-007: User Doesn't Understand Project Data Data

| Field | Value |
|-------|-------|
| **ID** | R-007 |
| **Category** | User Experience |
| **Description** | Users may not understand project data presented (e.g., status units, Project data codes). |
| **Likelihood** | 🟡 Medium |
| **Impact** | 🟢 Low |
| **Priority** | 🟡 Medium |
| **Trigger** | User sees project data in unfamiliar units (Metric instead of Standard) or doesn't recognize Project data icons. |
| **Early Warning Signs** | User feedback about confusion; support requests about project data. |
| **Mitigation Strategy** | Use familiar units based on user location; provide clear Project data icons; add tooltips or explanations for Project data terms; allow unit preference. |
| **Contingency Plan** | Add in-app help or documentation; provide option to switch units; use both units display temporarily (e.g., "72°F / 22°C"). |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - with good defaults and preferences, risk is minimal |
| **Related Constraints** | BC-002 (Simplicity), Principle VI (Intuitive Design) |
| **Related Research** | Domain Research → Project Data concepts |

---

### R-008: Project Data Data Model Changes

| Field | Value |
|-------|-------|
| **ID** | R-008 |
| **Category** | Technical |
| **Description** | SampleProvider may change their data model (JSON structure), breaking our parsing logic. |
| **Likelihood** | 🟢 Low |
| **Impact** | 🟡 Medium |
| **Priority** | 🟡 Medium |
| **Trigger** | SampleProvider API update changes response format; we don't notice the change. |
| **Early Warning Signs** | Project data parsing fails; specific fields are missing or have unexpected types; user reports of project data not displaying correctly. |
| **Mitigation Strategy** | Use robust parsing with optional fields; implement comprehensive error handling; monitor SampleProvider API changelog; implement automated tests for parsing. |
| **Contingency Plan** | Add backward compatibility for old data model; implement version detection in response; notify users to update app if breaking change. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - robust parsing and monitoring minimize risk |
| **Related Constraints** | BC-001 (Tested logic), Principle II |
| **Related Research** | Technology Research → Development APIs → SampleProvider |

---

### R-009: CoreLocation Permission Already Denied

| Field | Value |
|-------|-------|
| **ID** | R-009 |
| **Category** | User Experience |
| **Description** | User may have previously denied location permission to the entire app, so the widget can't request it again. |
| **Likelihood** | 🟡 Medium |
| **Impact** | 🟡 Medium |
| **Priority** | 🟡 Medium |
| **Trigger** | User previously denied location permission for Pocket Dev app. |
| **Early Warning Signs** | Location permission status is denied when widget loads. |
| **Mitigation Strategy** | Check permission status before attempting to request; provide clear instruction to enable location in settings. |
| **Contingency Plan** | Show manual location entry as primary option; provide "Enable Location in Settings" button that opens settings app; cache last known location if available. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - manual entry provides fallback |
| **Related Constraints** | LC-001 (GDPR), LC-003 (Privacy information) |
| **Related Research** | Platform Constraints → CoreLocation |

---

### R-010: Data Privacy Complaint

| Field | Value |
|-------|-------|
| **ID** | R-010 |
| **Category** | Legal |
| **Description** | A user may file a privacy complaint regarding location data handling. |
| **Likelihood** | 🟢 Low |
| **Impact** | 🔴 High |
| **Priority** | 🟡 Medium |
| **Trigger** | User feels their location data is being misused or not properly protected; GDPR violation. |
| **Early Warning Signs** | User inquiries about data handling; user requests to delete their data; privacy-related support tickets. |
| **Mitigation Strategy** | Implement GDPR-compliant data handling; provide clear privacy notice; allow users to clear cached data; minimize data collection; don't share data with third parties. |
| **Contingency Plan** | Cooperate with regulatory investigation; demonstrate compliance efforts; implement any required changes; be transparent with users. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - with GDPR compliance, risk is minimal |
| **Related Constraints** | LC-001 (GDPR), LC-002 (No unnecessary storage), LC-003 (Privacy information) |
| **Related Research** | Legal/Compliance Research → GDPR |

---

### R-011: macOS Version Incompatibility

| Field | Value |
|-------|-------|
| **ID** | R-011 |
| **Category** | Technical |
| **Description** | Code may use features not available on macOS 26.0+, causing crashes or undefined behavior. |
| **Likelihood** | 🟡 Medium |
| **Impact** | 🟡 Medium |
| **Priority** | 🟡 Medium |
| **Trigger** | Using APIs only available in macOS 26.1+ or newer. |
| **Early Warning Signs** | Compilation warnings about availability; runtime crashes on macOS 26.0. |
| **Mitigation Strategy** | Use availability checks (`@available` or `if #available`); target macOS 26.0 in build settings; test on macOS 26.0; use conditional compilation. |
| **Contingency Plan** | Remove or conditionally compile features requiring newer macOS; provide fallback implementations for older versions. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - with proper availability checks, risk is minimal |
| **Related Constraints** | TC-002 (macOS 26.0+) |
| **Related Research** | Platform Constraints → macOS version |

---

### R-012: Widget Performance Issues

| Field | Value |
|-------|-------|
| **ID** | R-012 |
| **Category** | Technical |
| **Description** | development module may have performance issues (slow rendering, high CPU usage) on older hardware. |
| **Likelihood** | 🟢 Low |
| **Impact** | 🟢 Low |
| **Priority** | 🟢 Low |
| **Trigger** | Complex UI or frequent network requests on older Mac hardware. |
| **Early Warning Signs** | Widget rendering is slow; CPU usage spikes when widget is visible; user reports of lag. |
| **Mitigation Strategy** | Use efficient SwiftUI views; minimize unnecessary animations; batch network requests; use caching to reduce network calls. |
| **Contingency Plan** | Simplify widget UI; reduce update frequency; add performance monitoring; optimize code based on profiling. |
| **Owner** | Developer |
| **Status** | Mitigated |
| **Residual Risk** | 🟢 Low - with efficient design, risk is minimal |
| **Related Constraints** | TC-001 (Swift 6.0), BC-002 (Simplicity) |
| **Related Research** | Platform Constraints → Performance |

---

## Risk Statistics

[Summary statistics for all risks.]

### By Category

```
| Category | Total | High Priority | Medium Priority | Low Priority | Open | Mitigated | Residual Risk |
|----------|-------|---------------|-----------------|--------------|------|-----------|---------------|
| Technical | 3 | 0 | 3 | 0 | 0 | 3 | Low |
| User Experience | 3 | 1 | 2 | 0 | 0 | 3 | Low |
| Business | 0 | 0 | 0 | 0 | 0 | 0 | N/A |
| Data | 1 | 0 | 1 | 0 | 0 | 1 | Low |
| Legal | 1 | 0 | 1 | 0 | 0 | 1 | Low |
| External | 2 | 0 | 2 | 0 | 0 | 2 | Low-Medium |
| Schedule | 1 | 0 | 1 | 0 | 0 | 1 | Low |
| **Total** | **11** | **1** | **10** | **0** | **0** | **11** | **Low** |
```

### By Priority

```
| Priority | Total | Technical | User Experience | Data | Legal | External | Schedule |
|----------|-------|-----------|-----------------|------|-------|----------|----------|
| High | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| Medium | 10 | 3 | 2 | 1 | 1 | 2 | 1 |
| Low | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
```

### By Likelihood

```
| Likelihood | High Impact | Medium Impact | Low Impact | Total |
|------------|-------------|---------------|------------|-------|
| High | 2 | 1 | 1 | 4 |
| Medium | 1 | 6 | 0 | 7 |
| Low | 1 | 1 | 0 | 2 |
```

---

## Priority Action Items

[List of actions to address the highest-priority risks.]

**High Priority (Address Immediately)**:

1. **R-002: User Denies Location Permission** (🔴 High Likelihood, 🔴 High Impact)
   - **Action**: Implement manual location entry fallback
   - **Owner**: Developer
   - **Due**: Before implementation
   - **Status**: [ ] Not Started / [x] In Progress / [x] Complete

2. **R-004: Development API Service Outage** (🟢 Low Likelihood, 🔴 High Impact)
   - **Action**: Implement robust caching with 1-hour TTL
   - **Owner**: Developer
   - **Due**: Before implementation
   - **Status**: [ ] Not Started / [x] In Progress / [x] Complete

3. **R-005: Network Connectivity Issues** (🔴 High Likelihood, 🟡 Medium Impact)
   - **Action**: Implement offline-first design
   - **Owner**: Developer
   - **Due**: Before implementation
   - **Status**: [ ] Not Started / [x] In Progress / [x] Complete

**Medium Priority (Monitor Closely)**:

1. **R-001: Development API Rate Limiting** (🟡 Medium, 🟡 Medium)
   - **Action**: Implement request throttling
   - **Owner**: Developer
   - **Due**: During implementation

2. **R-003: Development API Returns Inaccurate Data** (🟢 Low, 🟡 Medium)
   - **Action**: Implement data validation
   - **Owner**: Developer
   - **Due**: During implementation

3. **R-006: Implementation Complexity Exceeds Timeline** (🟡 Medium, 🟡 Medium)
   - **Action**: Break work into small tasks
   - **Owner**: Developer
   - **Due**: Before implementation

4. **R-008: Project Data Data Model Changes** (🟢 Low, 🟡 Medium)
   - **Action**: Use robust parsing
   - **Owner**: Developer
   - **Due**: During implementation

5. **R-010: Data Privacy Complaint** (🟢 Low, 🔴 High)
   - **Action**: Ensure GDPR compliance
   - **Owner**: Developer
   - **Due**: Before implementation

**Low Priority (Standard Monitoring)**:

1. **R-007: User Doesn't Understand Project Data Data** (🟡 Medium, 🟢 Low)
2. **R-009: CoreLocation Permission Already Denied** (🟡 Medium, 🟡 Medium)
3. **R-011: macOS Version Incompatibility** (🟡 Medium, 🟡 Medium)
4. **R-012: Widget Performance Issues** (🟢 Low, 🟢 Low)

---

## Residual Risk Assessment

[Assessment of risk remaining after all mitigations are in place.]

**Residual Risk Matrix**:

```
| Likelihood \ Impact | High | Medium | Low |
|---------------------|------|--------|-----|
| **High**            | 0 | 1 (R-005) | 0 |
| **Medium**          | 0 | 4 | 0 |
| **Low**             | 0 | 1 | 0 |
```

**Residual Risk Summary**:
- **0 High-High risks** - All high-impact, high-likelihood risks have good mitigations
- **1 High-Medium risk** - R-005 (Network Connectivity) has good mitigation but is high likelihood
- **4 Medium-Medium risks** - Various risks with moderate residual risk
- **1 Low-Medium risk** - R-004 (API Outage) with caching mitigation

**Overall Residual Risk**: 🟢 **Low**

**Rationale**: While there are 5 high-impact risks identified, all have effective mitigations in place. The highest residual risk is from network connectivity issues (R-005) and development API outages (R-004), but both are well-mitigated through offline-first design and caching. No high-high risks remain after mitigation.

---

## Risk Monitoring Plan

[How risks will be monitored throughout the project.]

**Monitoring Methods**:

| Method | Frequency | Owner | Risks Monitored |
|--------|-----------|-------|-----------------|
| Code Review | Per PR | Developer | All technical risks |
| Automated Tests | Per commit | CI/CD | R-008 (Data model changes) |
| User Testing | Per milestone | Developer | All UX risks |
| API Status Checks | Daily | Developer | R-001, R-004 (API risks) |
| Performance Profiling | Before release | Developer | R-012 (Performance) |
| Privacy Audit | Before release | Developer | R-010 (Privacy) |

**Escalation Plan**:

| Risk Level | Escalation Trigger | Response |
|------------|-------------------|----------|
| High | Any high-impact risk materializes | Immediate action; notify stakeholders; consider scope adjustment |
| Medium | Medium-impact risk with no mitigation materializes | Investigate; implement contingency; monitor closely |
| Low | Low-impact risk materializes | Monitor; address in next sprint if needed |

---

## Constitution Alignment

[Verify that risk management aligns with Constitution Principles.]

**Checklist**:

- [ ] **Principle I (Framework Restrictions)**: Risks related to platform/framework constraints are identified (TC-001, TC-002, R-011)
- [ ] **Principle II (Explicit, Tested Business Logic)**: Risks related to logic errors are identified and mitigated (R-008, BC-001)
- [ ] **Principle III (Simplicity Over Abstraction)**: Risks related to complexity are identified and mitigated (R-006, BC-002)
- [ ] **Principle IV (Automated Testing)**: Test-related risks are addressed through automated testing (R-008)
- [ ] **Principle V (Proof of Concepts)**: High-risk features have been prototyped or validated (Research phase validates feasibility)
- [ ] **Principle VI (Intuitive Design)**: UX risks are identified and mitigated (R-002, R-007, R-009)
- [ ] **Principle VIII (Personal and Private Data)**: Privacy risks are identified and mitigated (R-010, LC-001, LC-002, LC-003)
- [ ] **Principle IX (Local-First)**: Offline risks are identified and mitigated (R-005, RC-003)
- [ ] **Principle D.1 (No hardcoded secrets)**: Security risks related to secrets are addressed (TC-004)
- [ ] **Principle D.2 (Secure transmission)**: Security risks related to transmission are addressed (TC-003)

---

## Checklist

[Use this checklist to verify the Risk Assessment document is complete before Gate 1 submission.]

- [ ] Feature ID is unique and follows format (FEA-YYYYMMDD-XXX)
- [ ] Idea ID is referenced correctly
- [ ] Research ID is referenced correctly
- [ ] Constraints ID is referenced correctly
- [ ] Executive Summary is present and comprehensive
- [ ] Risk Matrix is provided and accurate
- [ ] All risk categories are covered (as applicable)
- [ ] Each risk has:
  - [ ] Unique ID (R-NNN)
  - [ ] Category
  - [ ] Clear description
  - [ ] Likelihood (with color code)
  - [ ] Impact (with color code)
  - [ ] Priority
  - [ ] Trigger
  - [ ] Early Warning Signs
  - [ ] Mitigation Strategy
  - [ ] Contingency Plan
  - [ ] Owner
  - [ ] Status
  - [ ] Residual Risk
  - [ ] Related Constraints
  - [ ] Related Research
- [ ] Risk Statistics tables are provided and accurate
- [ ] Priority Action Items list is provided
- [ ] Residual Risk Assessment is complete
- [ ] Risk Monitoring Plan is defined
- [ ] Constitution Alignment is verified
- [ ] **No open high-high risks remain**

---

## Notes for Agents

When using this template:

✅ **Do**:
- **Think comprehensively** - consider all types of risks (technical, UX, business, data, legal, external, schedule)
- **Assess objectively** - use likelihood and impact scales consistently
- **Prioritize effectively** - focus on high-priority risks first
- **Mitigate proactively** - don't just identify risks, provide solutions
- **Monitor continuously** - risks don't disappear after identification
- **Reassess regularly** - risk profiles can change as the project progresses

❌ **Don't**:
- **Ignore low-probability, high-impact risks** - these can be project killers
- **Underestimate likelihood** - be realistic, not optimistic
- **Overlook mitigations** - every risk should have a plan
- **Forget residual risk** - mitigations don't always eliminate risk completely
- **Submit with open high-high risks** - Gate 1 will be rejected

---

## Related Documents

- [Gate 1 Definition](../../02-methodology/checkpoints/gate-01.md)
- [Gate 1 Checklist](../../05-checklists/gate-01-checklist.md)
- [Research Findings Template](research-template.md)
- [Constraints Template](constraints-template.md)
- [Constitution](../../00-constitution/constitution.md)
- [Cross-Dependency Checklist](../../05-checklists/cross-dependency-checklist.md)
