# Gate 5: Verification Passed

> **Gate ID**: Gate-05
> **Version**: 1.0.0
> **Phase**: Verification (Phase 5)
> **Next Phase**: Production
> **Reviewer**: Human Developer
> **Mandatory**: YES - Cannot deploy to production without passing this gate

---

## Purpose

Gate 5 ensures that:
1. **All acceptance tests pass**
2. **All success criteria are met**
3. **All documentation is complete**
4. **Performance meets requirements**
5. **Security is verified**
6. **The feature is ready for production**
7. **No open questions remain**

**Critical Rule**: Feature CANNOT be deployed to production until Gate 5 is passed.

---

## Input Requirements

Before requesting Gate 5 review, the following must be **complete**:

### Required Artifacts

| Artifact | Location | Mandatory | Description |
|----------|----------|-----------|-------------|
| Test Results Summary | `specs/[FEATURE]/test-results.md` | YES | Summary of all test results |
| Verification Report | `specs/[FEATURE]/verification-report.md` | YES | Complete verification report |
| Updated Documentation | Various locations | YES | All documentation created/updated |
| Deployment Artifacts | `deploy/[FEATURE]/` or equivalent | YES | Ready-to-deploy artifacts |

---

## Gate 5 Criteria

To pass Gate 5, **ALL** of the following criteria must be met:

### ✅ Mandatory Criteria (All Must Pass)

#### Test Results
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G5-M-01 | Test Results Summary exists | File `specs/[FEATURE]/test-results.md` exists | |
| G5-M-02 | All acceptance tests pass | All user story scenarios pass | |
| G5-M-03 | All unit tests pass | All unit tests passing | |
| G5-M-04 | All integration tests pass | All integration tests passing | |
| G5-M-05 | All UI tests pass (if applicable) | All UI tests passing | |
| G5-M-06 | Test Results Summary is complete | All test types documented with results | |

#### Success Criteria Verification
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G5-M-07 | Verification Report exists | File `specs/[FEATURE]/verification-report.md` exists | |
| G5-M-08 | All success criteria are met | Each SC verified | |
| G5-M-09 | Verification methods documented | How each SC was verified | |
| G5-M-10 | Results are recorded | Actual values vs. targets | |

#### Performance Testing
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G5-M-11 | Performance tests exist | Performance test suite present | |
| G5-M-12 | Performance meets NFRs | All performance requirements met | |
| G5-M-13 | Performance results documented | Test results recorded | |

#### Security Testing
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G5-M-14 | Security tests exist | Security test suite present | |
| G5-M-15 | Security meets NFRs | All security requirements met | |
| G5-M-16 | Security scan passed | No vulnerabilities found | |
| G5-M-17 | Security results documented | Scan results recorded | |

#### Documentation
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G5-M-18 | Documentation Requirements met | All docs from spec created/updated | |
| G5-M-19 | User documentation complete | User-facing docs ready | |
| G5-M-20 | Developer documentation complete | Dev docs ready | |
| G5-M-21 | Module documentation complete | README files for all modules | |
| G5-M-22 | Documentation reviewed | Docs have been reviewed | |

#### Deployment Readiness
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G5-M-23 | Deployment artifacts exist | Ready to deploy | |
| G5-M-24 | Deployment plan is ready | From spec's Rollout Plan | |
| G5-M-25 | Migration plan is ready | If applicable | |
| G5-M-26 | Rollback plan exists | How to rollback if needed | |
| G5-M-27 | Monitoring is in place | Can monitor in production | |

#### Completeness
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G5-M-28 | **Open Questions is EMPTY** | No open questions remain | **CRITICAL - BLOCKS GATE** |
| G5-M-29 | All gates 0-4 are passed | Previous gates all passed | |

#### Constitution Alignment
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G5-M-30 | Aligns with Principle I | Feature can be maintained by agents | Autonomy |
| G5-M-31 | Aligns with Principle II | All business logic tested | Tested Logic |
| G5-M-32 | Aligns with Principle III | No unnecessary complexity | Simplicity |
| G5-M-33 | Aligns with Principle IV | All decisions documented | Informed Decisions |
| G5-M-34 | Aligns with Principle V | Built according to approved specs | Complete Spec |
| G5-M-35 | Aligns with Principle VI | All gates passed | Quality Gates |
| G5-M-36 | Aligns with Principle VII | All docs complete | Documentation as Code |
| G5-M-37 | Aligns with Principle VIII | Personal data protected | Privacy |
| G5-M-38 | Aligns with Principle IX | Local-first in production | Local-First |
| G5-M-39 | Aligns with Principle X | Observability in production | Observability |

### ⚠️ Advisory Criteria (Should Pass, But Not Blocking)

| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G5-A-01 | Performance exceeds NFRs | Better than required | |
| G5-A-02 | Documentation is excellent | High quality, comprehensive | |
| G5-A-03 | No known issues | No bugs or problems | |
| G5-A-04 | Well-tested | Extensive test coverage | |

---

## Review Process

### Step 1: Agent Self-Review

Before requesting Gate 5 review:

1. **Run all tests** (acceptance, unit, integration, UI, performance, security)
2. **Verify all success criteria** are met
3. **Verify all documentation** is complete
4. **Verify deployment artifacts** are ready
5. **Run the Gate 5 checklist**: `05-checklists/gate-05-checklist.md`
6. **Confirm Open Questions is EMPTY**
7. **Address any issues found**

### Step 2: Agent Requests Review

The agent creates a **Gate 5 Review Request**:

```markdown
# Gate 5 Review Request: [Feature Name]

**Gate**: Gate 5 - Verification Passed
**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Date**: YYYY-MM-DD
**Requested by**: [Agent Name]
**Verification Lead**: [Agent Name]

## Checklist Verification

- [ ] All mandatory criteria from `05-checklists/gate-05-checklist.md` are met
- [ ] All tests pass (acceptance, unit, integration, UI)
- [ ] All performance tests pass
- [ ] All security tests pass
- [ ] All success criteria are met
- [ ] Test Results Summary complete
- [ ] Verification Report complete
- [ ] All documentation is complete
- [ ] Deployment artifacts ready
- [ ] Deployment plan ready
- [ ] Migration plan ready (if applicable)
- [ ] Rollback plan exists
- [ ] Monitoring in place
- [ ] **Open Questions section is EMPTY**
- [ ] All previous gates (0-4) are passed
- [ ] Self-review passed

## Summary

[Brief summary of verification results and readiness for production.]

## Test Results Summary

| Test Type | Total | Passed | Failed | Coverage |
|-----------|-------|--------|--------|----------|
| Acceptance Tests | [X] | [X] | [X] | N/A |
| Unit Tests | [X] | [X] | [X] | [XX]% |
| Integration Tests | [X] | [X] | [X] | [XX]% |
| UI Tests | [X] | [X] | [X] | [XX]% |
| Performance Tests | [X] | [X] | [X] | N/A |
| Security Tests | [X] | [X] | [X] | N/A |

## Success Criteria Verification

| SC ID | Criterion | Target | Actual | Status | Verification Method |
|-------|-----------|--------|--------|--------|---------------------|
| SC-001 | [Description] | [Target] | [Actual] | Pass/Fail | [Method] |
| SC-002 | [Description] | [Target] | [Actual] | Pass/Fail | [Method] |

## Documentation Status

- [ ] User documentation
- [ ] Developer documentation
- [ ] Module documentation
- [ ] API documentation (if applicable)

## Deployment Status

- [ ] Artifacts built
- [ ] Deployment plan ready
- [ ] Migration plan ready
- [ ] Rollback plan ready
- [ ] Monitoring configured

## Questions for Reviewer

[Any specific questions or areas of concern for the reviewer.]
```

### Step 3: Human Review

The human reviews:

1. **Test Results**
   - Are all tests passing?
   - Is coverage adequate?
   - Are test results documented?

2. **Success Criteria**
   - Are all SCs met?
   - Are results verified?
   - Are verification methods sound?

3. **Performance & Security**
   - Are performance requirements met?
   - Are security requirements met?
   - Are there any concerns?

4. **Documentation**
   - Is documentation complete?
   - Is documentation reviewed?
   - Is documentation accurate?

5. **Deployment Readiness**
   - Are artifacts ready?
   - Is deployment plan sound?
   - Is rollback plan adequate?
   - Is monitoring in place?

### Step 4: Human Decision

The human makes one of the following decisions:

| Decision | Action | Next Steps |
|----------|--------|------------|
| **Pass** | Verification is complete | Deploy to Production | Execute deployment |
| **Pass with Conditions** | Verification is complete with changes | Deploy with conditions | Address conditions, then deploy |
| **Reject** | Verification is not complete | Do not deploy | Fix issues and resubmit for Gate 5 |
| **Need More Information** | More info needed | Gather more information | Address feedback, resubmit for Gate 5 |

### Step 5: Feedback and Documentation

The human provides:
1. **Decision**: Clear pass/fail decision
2. **Feedback**: Specific feedback on what to improve
3. **Next Steps**: Clear instructions on what to do next

The agent documents the result:

```markdown
# Gate 5 Review Result: [Feature Name]

**Gate**: Gate 5 - Verification Passed
**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Date**: YYYY-MM-DD
**Reviewer**: [Human Name]
**Decision**: [Pass | Pass with Conditions | Reject | Need More Information]

## Feedback

### Strengths
- [What was done well]
- [What was done well]

### Issues
- [ ] **Critical**: [Description] - [Must fix before deployment]
- [ ] **Major**: [Description] - [Should fix before deployment]
- [ ] **Minor**: [Description] - [Nice to fix]

## Test Feedback
- [Test-specific feedback]

## Documentation Feedback
- [Documentation-specific feedback]

## Deployment Feedback
- [Deployment-specific feedback]

## Conditions (if applicable)

- [ ] Condition 1
- [ ] Condition 2

## Next Steps

- [ ] Deploy to production
- [ ] Monitor in production
- [ ] Address any issues

## Approval

| Role | Name | Date | Approval | Notes |
|------|------|------|----------|-------|
| Verification Lead | [Agent Name] | YYYY-MM-DD | Approved | |
| QA Lead | [Human/Agent Name] | YYYY-MM-DD | Approved | Verification review passed |
| Product Owner | [Human Name] | YYYY-MM-DD | **Approved** | **Gate 5 PASSED - READY FOR PRODUCTION** |

## Deployment Record

- **Deployment Date**: [YYYY-MM-DD]
- **Deployment Time**: [Time]
- **Deployed By**: [Name]
- **Version**: [Version]
- **Environment**: [Production/Staging]
- **Status**: [Success/Failure]
- **Rollback**: [Yes/No]

## History

- [YYYY-MM-DD] Initial submission by [Agent]
- [YYYY-MM-DD] Reviewed by [Human], decision: [Decision]
- [YYYY-MM-DD] Deployed to production
```

---

## Common Reasons for Failure

| Reason | Example | How to Fix |
|--------|---------|------------|
| **Tests not passing** | Some tests fail | Fix failing tests |
| **Success criteria not met** | SC-001 target not met | Improve implementation or adjust criteria |
| **Documentation incomplete** | Missing user docs | Complete all documentation |
| **Performance issues** | Doesn't meet NFRs | Optimize code or adjust NFRs |
| **Security issues** | Vulnerabilities found | Fix security issues |
| **Open questions** | Unresolved questions | Answer all questions |
| **Previous gates not passed** | Gate 4 not passed | Pass all previous gates first |
| **Deployment not ready** | No artifacts | Complete deployment preparation |

---

## Tips for Success

### For Verification Agents

✅ **Do**:
- **Run all tests** thoroughly
- **Verify all success criteria**
- **Check all documentation**
- **Test performance** against NFRs
- **Scan for security** vulnerabilities
- **Document everything**
- Ensure **Open Questions is EMPTY**

❌ **Don't**:
- Skip **any test type**
- Ignore **failing tests**
- Submit with **incomplete docs**
- Submit with **open questions**
- **Rush** verification

### For Human Developers

✅ **Do**:
- **Verify all tests** pass
- **Check all SCs** are met
- **Review all documentation**
- **Consider production impact**
- **Verify constitution alignment**

❌ **Don't**:
- Approve with **failing tests**
- Approve with **unmet SCs**
- Approve with **incomplete docs**
- **Rush to deploy**

---

## Templates and Checklists

- **Test Results Template**: `04-templates/test-results-template.md`
- **Verification Report Template**: `04-templates/verification-report-template.md`
- **Gate 5 Checklist**: `05-checklists/gate-05-checklist.md`

---

## Related Documents

- [Process Overview](../process-overview.md) - End-to-end process
- [Phase 5: Verification](../phases/05-verification/README.md) - Verification phase details
- [Constitution](../../00-constitution/constitution.md) - Core principles
- [Coding Standards](../../03-standards/swift/coding-standard.md) - Language standards
- [Testing Standards](../../03-standards/testing/) - Testing best practices
