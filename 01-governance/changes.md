# Change Management Process

> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This document defines the **change management process** for the Solo Agent Development Framework. It ensures that all changes to the framework, features, and documentation are **tracked, reviewed, and approved** before implementation.

**Key Principles**:
1. **Traceability**: Every change is documented and trackable
2. **Review**: Every change is reviewed before implementation
3. **Approval**: Every change requires appropriate approval
4. **Constitution Alignment**: All changes must comply with Constitution Principles
5. **Minimal Impact**: Changes should have minimal negative impact on existing work

---

## Change Types

### 1. Framework Changes

Changes to the **framework itself**, including:
- Constitution updates
- Process modifications
- Template changes
- Checklist updates
- Phase definitions
- Gate definitions

**Approval Required**: Solo Developer + Review Agent

### 2. Feature Changes

Changes to **feature development**, including:
- New features
- Feature modifications
- Feature removals
- Priority changes

**Approval Required**: Solo Developer

### 3. Bug Fixes

Changes to **fix bugs or issues**, including:
- Bug fixes in framework
- Bug fixes in features
- Hotfixes
- Patches

**Approval Required**: Solo Developer (or Review Agent for minor fixes)

### 4. Documentation Changes

Changes to **documentation**, including:
- Documentation updates
- Documentation clarifications
- Documentation fixes
- New documentation

**Approval Required**: Review Agent (Solo Developer for major changes)

### 5. Agent Changes

Changes to **agent definitions or instructions**, including:
- New agents
- Agent modifications
- Agent removals
- Agent instruction updates

**Approval Required**: Solo Developer + Review Agent

---

## Change Lifecycle

```
                    ┌─────────────────┐
                    │  Change Proposed │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  Change Reviewed │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
     ┌────────▼────┐  ┌──────▼──────┐  ┌───▼─────┐
     │   Approved   │  │   Rejected  │  │ Changes  │
     └──────┬──────┘  └─────────────┘  │ Requested│
            │                          └────┬─────┘
            │                               │
            │      ┌────────────────────────┘
            │      │
            │      ▼
            │ ┌────────────┐
            │ │   Repropose│
            │ └─────┬─────┘
            │       │
            └───────┘
                    │
            ┌───────▼───────┐
            │  Change       │
            │  Implemented  │
            └───────┬───────┘
                    │
            ┌───────▼───────┐
            │  Change       │
            │  Verified     │
            └───────┬───────┘
                    │
            ┌───────▼───────┐
            │  Change       │
            │  Closed       │
            └───────────────┘
```

---

## Change Process

### Step 1: Propose Change

**Action**: Create a change request

**Required Information**:
- [ ] **Title**: Clear, concise title
- [ ] **Type**: Framework / Feature / Bug Fix / Documentation / Agent
- [ ] **Description**: Detailed description of the change
- [ ] **Rationale**: Why is this change needed?
- [ ] **Impact**: What will be affected?
- [ ] **Constitution Check**: How does this align with Constitution?
- [ ] **Dependencies**: What depends on this change?
- [ ] **Risks**: What are the risks?
- [ ] **Mitigation**: How will risks be mitigated?
- [ ] **Priority**: Low / Medium / High / Critical
- [ ] **Estimated Effort**: How long will this take?
- [ ] **Proposer**: Who is proposing this change?
- [ ] **Date**: When was this proposed?

**Template** (change-request-{id}.md):
```markdown
# Change Request: {Title}

**ID**: CR-{YYYYMMDD}-{NNN}
**Type**: {Framework / Feature / Bug Fix / Documentation / Agent}
**Status**: Proposed
**Priority**: {Low / Medium / High / Critical}
**Proposer**: {Name}
**Date**: {YYYY-MM-DD}

## Description
{Description of the change}

## Rationale
{Why is this change needed?}

## Impact
- {What will be affected?}

## Constitution Check
- [ ] Principle I (Framework): {Compliant / Non-Compliant / N/A}
- [ ] Principle II (Tested Logic): {Compliant / Non-Compliant / N/A}
- [ ] ... (all applicable principles)

## Dependencies
- {What depends on this change?}

## Risks
- {What are the risks?}

## Mitigation
- {How will risks be mitigated?}

## Estimated Effort
- {How long will this take?}

## Approval
- [ ] Review Agent: {Name} ({Date})
- [ ] Solo Developer: {Name} ({Date})

## Implementation
- [ ] Assigned To: {Name}
- [ ] Started: {Date}
- [ ] Completed: {Date}

## Verification
- [ ] Verified By: {Name} ({Date})
- [ ] Verification Notes: {Notes}
```

**Location**: `/01-governance/change-requests/change-request-{id}.md`

### Step 2: Review Change

**Action**: Review Agent reviews the change request

**Review Criteria**:
- [ ] Change is well-defined
- [ ] Rationale is clear and valid
- [ ] Impact is fully understood
- [ ] Constitution alignment is verified
- [ ] Dependencies are identified
- [ ] Risks are assessed
- [ ] Mitigation is adequate
- [ ] Priority is appropriate
- [ ] Effort estimate is reasonable

**Review Actions**:
1. **Approve**: Change is ready for implementation
2. **Reject**: Change is not approved (with reason)
3. **Request Changes**: Change needs modifications

**Review Output**:
- [ ] Review comments
- [ ] Approval/rejection recommendation
- [ ] Required changes (if applicable)

**Timeframe**: Within 24 hours of proposal

### Step 3: Decision

**Action**: Solo Developer makes final decision

**Decision Criteria**:
- [ ] Review Agent's recommendation
- [ ] Change impact and risk
- [ ] Priority and effort
- [ ] Constitution alignment
- [ ] Strategic alignment

**Decision Actions**:
1. **Approve**: Change is approved for implementation
2. **Reject**: Change is rejected (with reason)
3. **Request Changes**: Change needs modifications

**Decision Output**:
- [ ] Decision (Approve/Reject/Request Changes)
- [ ] Reason (if rejected or changes requested)
- [ ] Required changes (if applicable)

**Timeframe**: Within 24 hours of review

### Step 4: Implement Change

**Action**: Assigned party implements the change

**Implementation Requirements**:
- [ ] Follow Implementation Plan (if applicable)
- [ ] Follow Constitution Principles
- [ ] Follow existing standards and guidelines
- [ ] Update all affected documentation
- [ ] Update all affected tests
- [ ] Document all changes

**Implementation Tracking**:
- [ ] Update change request with implementation status
- [ ] Track progress against estimated effort
- [ ] Report any issues or blockers

**Timeframe**: According to estimated effort

### Step 5: Verify Change

**Action**: Review Agent verifies the implementation

**Verification Criteria**:
- [ ] Change is implemented as specified
- [ ] Constitution alignment is maintained
- [ ] All documentation is updated
- [ ] All tests pass
- [ ] No regressions introduced
- [ ] Quality standards are met

**Verification Actions**:
1. **Pass**: Change is verified and ready to close
2. **Fail**: Change has issues that need to be fixed

**Verification Output**:
- [ ] Verification status (Pass/Fail)
- [ ] Verification notes
- [ ] Issues found (if applicable)

**Timeframe**: Within 24 hours of implementation completion

### Step 6: Close Change

**Action**: Solo Developer closes the change request

**Closure Criteria**:
- [ ] Change is verified
- [ ] All issues are resolved
- [ ] All documentation is complete
- [ ] All tests pass

**Closure Actions**:
- [ ] Update change request status to "Closed"
- [ ] Archive change request
- [ ] Notify all stakeholders

---

## Change Request Tracking

### Change Request Index

**File**: `/01-governance/change-requests/index.md`

**Format**:
```markdown
# Change Requests Index

> **Last Updated**: {YYYY-MM-DD}

## Open Change Requests

| ID | Title | Type | Priority | Status | Proposer | Date |
|----|-------|------|----------|--------|----------|------|
| CR-{ID} | {Title} | {Type} | {Priority} | {Status} | {Proposer} | {Date} |

## Closed Change Requests

| ID | Title | Type | Priority | Status | Closer | Date |
|----|-------|------|----------|--------|---------|------|
| CR-{ID} | {Title} | {Type} | {Priority} | {Status} | {Closer} | {Date} |
```

### Change Request ID Format

**Format**: `CR-{YYYYMMDD}-{NNN}`

**Examples**:
- `CR-20261030-001` (First change request on October 30, 2026)
- `CR-20261031-015` (15th change request on October 31, 2026)

---

## Change Categories

### 1. Major Changes

Changes with **high impact** and **high risk**:
- Constitution updates
- Process major modifications
- New phases or gates
- Major template changes
- Framework architecture changes

**Requirements**:
- Full change request with all information
- Review Agent review
- Solo Developer approval
- Implementation plan required
- Verification required

### 2. Minor Changes

Changes with **low impact** and **low risk**:
- Documentation clarifications
- Minor template updates
- Bug fixes
- Small improvements

**Requirements**:
- Simplified change request
- Review Agent review (optional)
- Solo Developer approval (optional)
- Quick implementation
- Quick verification

### 3. Emergency Changes

Changes that **must be implemented immediately**:
- Critical bug fixes
- Security vulnerabilities
- Blocking issues

**Requirements**:
- Immediate notification to Solo Developer
- Solo Developer approval (verbal or written)
- Implementation immediately
- Retrospective change request within 24 hours
- Verification as soon as possible

---

## Change Impact Assessment

### Impact Matrix

| Impact / Likelihood | Low | Medium | High |
|---------------------|-----|--------|------|
| **Low** | Accept | Accept | Review |
| **Medium** | Accept | Review | Approve |
| **High** | Review | Approve | Reject |

**Actions**:
- **Accept**: Change can be approved without full review
- **Review**: Change needs Review Agent review
- **Approve**: Change needs Solo Developer approval
- **Reject**: Change should not be implemented

### Impact Assessment Criteria

**Impact Level**:
- **Low**: Affects few users, minor functionality, easy to reverse
- **Medium**: Affects some users, moderate functionality, reversible with effort
- **High**: Affects all users, major functionality, difficult to reverse

**Likelihood Level**:
- **Low**: Unlikely to cause issues
- **Medium**: May cause issues
- **High**: Likely to cause issues

---

## Constitution Alignment Check

Every change **must** be checked against all applicable Constitution Principles.

### Constitution Check Template

```markdown
## Constitution Check

| Principle | Status | Notes | Action Required |
|-----------|--------|-------|-----------------|
| I (Framework) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| II (Tested Logic) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| III (Simplicity) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| IV (Testing) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| V (Proof of Concepts) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| VI (Intuitive) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| VII (Error Handling) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| VIII (Privacy) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| IX (Local-First) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| X (Performance) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| A (Tech Stack) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| B (Integration) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| C.1 (Concurrency) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| C.2 (Threading) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| D.1 (No Secrets) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| D.2 (HTTPS) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
| D.3 (Data at Rest) | {Compliant / Non-Compliant / N/A} | {Notes} | {Action} |
```

**Status**:
- **Compliant**: Change aligns with principle
- **Non-Compliant**: Change violates principle
- **N/A**: Principle does not apply to this change

**Action Required**:
- If **Non-Compliant**: Change **must** be modified or rejected
- If **N/A**: No action required
- If **Compliant**: Change is acceptable

---

## Change Metrics

### Change Tracking Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Change Request Volume | N/A | Number of change requests per week |
| Approval Rate | > 90% | Percentage of approved change requests |
| Rejection Rate | < 10% | Percentage of rejected change requests |
| Average Review Time | < 24 hours | Time from proposal to review completion |
| Average Decision Time | < 24 hours | Time from review to decision |
| Average Implementation Time | Varies | Time from approval to implementation completion |
| Average Verification Time | < 24 hours | Time from implementation to verification |
| Change Success Rate | 100% | Percentage of changes that pass verification |

### Change Quality Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Constitution Compliance | 100% | Percentage of changes that comply with Constitution |
| Documentation Completeness | 100% | Percentage of changes with complete documentation |
| Test Coverage | 100% | Percentage of changes with adequate test coverage |
| Regression Rate | 0% | Percentage of changes that introduce regressions |
| Rollback Rate | < 5% | Percentage of changes that need to be rolled back |

---

## Change Communication

### Communication Plan

| Audience | Communication Method | Frequency | Content |
|----------|---------------------|-----------|---------|
| Solo Developer | Direct | Immediate | All change requests |
| Review Agent | Direct | Immediate | All change requests for review |
| Implementation Agent | Direct | As needed | Assigned change requests |
| All Agents | Change Log | Weekly | Summary of all changes |

### Change Log

**File**: `/01-governance/change-log.md`

**Format**:
```markdown
# Change Log

> **Last Updated**: {YYYY-MM-DD}

## {YYYY-MM}

### {YYYY-MM-DD}

#### Framework Changes
- {Change Description} (CR-{ID})

#### Feature Changes
- {Change Description} (CR-{ID})

#### Bug Fixes
- {Change Description} (CR-{ID})

#### Documentation Changes
- {Change Description} (CR-{ID})

#### Agent Changes
- {Change Description} (CR-{ID})

## Statistics

- **Total Changes**: {Number}
- **Approved**: {Number} ({Percentage})
- **Rejected**: {Number} ({Percentage})
- **Pending**: {Number}
```

---

## Change Best Practices

### For Proposers

✅ **Do**:
- Provide clear, detailed change descriptions
- Include all required information
- Assess impact and risk thoroughly
- Check Constitution alignment
- Identify dependencies
- Estimate effort realistically
- Respond to review comments promptly

❌ **Don't**:
- Submit incomplete change requests
- Underestimate impact or risk
- Ignore Constitution Principles
- Submit changes without rationale
- Rush change requests

### For Reviewers

✅ **Do**:
- Review change requests thoroughly
- Check Constitution alignment carefully
- Assess impact and risk objectively
- Provide clear, actionable feedback
- Respond to change requests promptly

❌ **Don't**:
- Approve changes without review
- Ignore Constitution violations
- Underestimate risks
- Provide vague feedback
- Delay reviews

### For Implementers

✅ **Do**:
- Follow change specifications exactly
- Follow Constitution Principles strictly
- Update all affected documentation
- Update all affected tests
- Document all changes
- Report issues promptly

❌ **Don't**:
- Deviation from specifications
- Violate Constitution Principles
- Skip documentation updates
- Skip test updates
- Rush implementation

### For Verifiers

✅ **Do**:
- Verify implementation against specifications
- Check Constitution alignment
- Check documentation completeness
- Check test coverage
- Check for regressions
- Provide clear verification notes

❌ **Don't**:
- Verify without checking
- Ignore Constitution violations
- Skip documentation checks
- Skip test checks
- Rush verification

---

## Change Templates

### Directory Structure

```
01-governance/
├── changes.md                    # This document
├── change-log.md                 # Change log
├── change-requests/
│   ├── index.md                  # Change request index
│   ├── change-request-CR-20261030-001.md
│   ├── change-request-CR-20261030-002.md
│   └── ...
└── templates/
    ├── change-request-template.md
    └── ...
```

---

## Related Documents

- [Constitution](../00-constitution/constitution.md)
- [Roles](roles.md)
- [Decision Process](decision-process.md)
- [Process Overview](../02-methodology/process-overview.md)
