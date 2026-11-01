# Phase 5: Verification

> **Phase ID**: 5
> **Name**: Verification
> **Duration**: 2-5 days
> **Gate**: Gate 5 - Verification Passed
> **Primary Agent**: Verification Agent
> **Human Involvement**: Medium (approvals)

---

## Purpose

**Verify the feature works correctly and meets all acceptance criteria.**

This phase ensures that:
- All acceptance tests pass
- All success criteria are met
- All documentation is complete
- The feature is ready for production
- No critical issues remain

**Key Question**: "Does it work as specified, and is it ready for production?"

**Critical Rule**: **Feature CANNOT be deployed to production until Gate 5 is passed.**

---

## Objectives

By the end of Phase 5, you should have:

1. ✅ **Test Results Summary** (`test-results.md`)
2. ✅ **Verification Report** (`verification-report.md`)
3. ✅ **All acceptance tests passing**
4. ✅ **All success criteria verified**
5. ✅ **All documentation complete and reviewed**
6. ✅ **Deployment artifacts ready**
7. ✅ **Migration plan ready** (if applicable)
8. ✅ **Rollback plan ready**
9. ✅ **Monitoring plan in place**
10. ✅ **Open Questions section is EMPTY**
11. ✅ **Passed Gate 5** (Verification Passed)

---

## Input

- **Completed Implementation** from Phase 4
- **Approved Design** from Phase 3
- **Approved Specification** from Phase 2
- **Test Strategy** from spec.md
- **Success Criteria** from spec.md

---

## Output

### Deliverables (Required for Gate 5)

| Deliverable | File | Mandatory | Description |
|-------------|------|-----------|-------------|
| Test Results Summary | `specs/[FEATURE]/test-results.md` | ✅ YES | Summary of all test results |
| Verification Report | `specs/[FEATURE]/verification-report.md` | ✅ YES | Complete verification report |
| Updated Documentation | Various | ✅ YES | All docs created/updated |
| Deployment Artifacts | `deploy/[FEATURE]/` or equivalent | ✅ YES | Ready-to-deploy artifacts |

---

## Tasks

### For Verification Agent

#### 1. Review Implementation
- **Action**: Review the completed implementation
- **Check**:
  - All code is complete
  - All tests exist
  - All requirements are implemented
  - All edge cases are handled
- **Output**: Verification plan

#### 2. Run Acceptance Tests
- **Action**: Execute all acceptance tests from spec.md
- **For each acceptance scenario**:
  - Identify the corresponding test
  - Run the test
  - Record the result (Pass/Fail)
  - Document any failures
- **Verify**:
  - ✅ All acceptance scenarios pass
- **Output**: Acceptance Test Results section in test-results.md

#### 3. Run All Tests
- **Action**: Execute the complete test suite
- **Run**:
  - Unit tests
  - Integration tests
  - UI tests (if applicable)
  - Performance tests
  - Security tests
- **Record**:
  - Total tests
  - Passed tests
  - Failed tests
  - Test execution time
  - Coverage percentages
- **Verify**:
  - ✅ All tests pass
  - ✅ Business logic coverage = 100%
  - ✅ Overall coverage >= 80%
- **Output**: Complete test-results.md

#### 4. Verify Success Criteria
- **Action**: Check all success criteria from spec.md
- **For each SC**:
  - Determine measurement method
  - Measure actual value
  - Compare with target
  - Record result (Pass/Fail)
  - Document verification method
- **Verify**:
  - ✅ All success criteria are met
- **Output**: Success Criteria Verification section in verification-report.md

#### 5. Run Performance Tests
- **Action**: Test performance against NFRs
- **For each performance NFR**:
  - Run performance test
  - Measure actual performance
  - Compare with target
  - Record result
- **Verify**:
  - ✅ All performance requirements are met
- **Output**: Performance Test Results section in verification-report.md

#### 6. Run Security Tests
- **Action**: Test security against NFRs
- **Run**:
  - Security scans
  - Penetration tests (if applicable)
  - Code security reviews
- **Check**:
  - No vulnerabilities
  - All security requirements met
- **Verify**:
  - ✅ All security requirements are met
- **Output**: Security Test Results section in verification-report.md

#### 7. Review Documentation
- **Action**: Verify all documentation is complete
- **Check against Documentation Requirements from spec.md**:
  - New documentation created
  - Existing documentation updated
  - All documentation reviewed
- **Verify**:
  - ✅ All documentation is complete
  - ✅ All documentation is accurate
  - ✅ All documentation is reviewed
- **Output**: Documentation Review section in verification-report.md

#### 8. Prepare Deployment Artifacts
- **Action**: Create deployable artifacts
- **Create**:
  - Compiled code
  - Configuration files
  - Installation scripts
  - Release notes
- **Verify**:
  - ✅ Artifacts are complete
  - ✅ Artifacts are tested
  - ✅ Artifacts are ready for deployment
- **Output**: Deployment artifacts

#### 9. Verify Deployment Plan
- **Action**: Review and verify deployment plan from spec.md
- **Check**:
  - Release strategy is clear
  - Migration plan is complete (if applicable)
  - Deprecation plan is complete (if applicable)
  - Rollback plan is complete
  - Monitoring plan is in place
- **Output**: Deployment Verification section in verification-report.md

#### 10. Resolve All Open Questions
- **Action**: Answer any verification questions
- **Critical**: **Open Questions section MUST be EMPTY to pass Gate 5**
- **Output**: Empty Open Questions section

#### 11. Create Verification Report
- **Action**: Compile all verification findings
- **Include**:
  - Executive summary
  - Test results summary
  - Success criteria verification
  - Performance test results
  - Security test results
  - Documentation review
  - Deployment verification
  - Open issues (if any)
  - Recommendations
- **Output**: Complete verification-report.md

#### 12. Self-Review Against Checklist
- **Action**: Verify completeness
- **Use**: `05-checklists/gate-05-checklist.md`
- **Verify**:
  - ✅ All tests pass
  - ✅ All success criteria met
  - ✅ All documentation complete
  - ✅ Deployment artifacts ready
  - ✅ All previous gates passed
  - ✅ **Open Questions is EMPTY**
- **Output**: Self-review notes

#### 13. Submit for Gate 5 Review
- **Action**: Request human review
- **Process**: See `02-methodology/checkpoints/gate-05.md`

### For Human Developer

#### 1. Review Verification Results
- **Action**: Review test-results.md and verification-report.md
- **Check**:
  - Are all tests passing?
  - Are all success criteria met?
  - Is documentation complete?
  - Is deployment ready?
- **Output**: Feedback on verification

#### 2. Make Final Decisions
- **Action**: Resolve any remaining issues
- **When needed**:
  - Decide on blocking issues
  - Approve waivers for minor issues
  - Set conditions for deployment
- **Output**: Final decisions documented

#### 3. Approve for Production
- **Action**: Final approval for deployment
- **Verify**:
  - All gates passed
  - All requirements met
  - No blocking issues
- **Output**: Approval for production deployment

#### 4. Conduct Gate 5 Review
- **Action**: Review complete verification
- **Use**: `02-methodology/checkpoints/gate-05.md` for criteria
- **Decision**: Pass, Pass with Conditions, Reject, or Need More Information
- **Output**: Gate 5 review result

---

## Templates

- **Test Results Template**: `04-templates/test-results-template.md`
- **Verification Report Template**: `04-templates/verification-report-template.md`

---

## Checklists

- **Gate 5 Checklist**: `05-checklists/gate-05-checklist.md`

---

## Tips for Success

### For Verification Agents

✅ **Do**:
- **Run ALL tests** thoroughly
- **Verify ALL success criteria**
- **Check ALL documentation**
- **Test performance** against NFRs
- **Scan for security** issues
- **Document everything**
- Ensure **Open Questions is EMPTY**

❌ **Don't**:
- **Skip any test type**
- **Ignore failing tests**
- **Accept incomplete docs**
- **Submit with open questions**
- **Rush verification**

### For Human Developers

✅ **Do**:
- **Verify all tests** pass
- **Check all SCs** are met
- **Review all documentation**
- **Consider production impact**

❌ **Don't**:
- **Approve with failing tests**
- **Approve with unmet SCs**
- **Approve with incomplete docs**
- **Rush to deploy**

---

## Common Pitfalls

| Pitfall | Symptom | Solution |
|---------|---------|----------|
| **Tests not passing** | Some tests fail | Fix the tests or the code |
| **Success criteria not met** | SC targets not met | Improve implementation or adjust criteria |
| **Documentation incomplete** | Missing docs | Complete all documentation |
| **Performance issues** | Doesn't meet NFRs | Optimize code or adjust NFRs |
| **Security issues** | Vulnerabilities found | Fix security issues |
| **Open questions at submission** | Questions remain | Answer all questions |
| **Previous gates not passed** | Gate 4 not passed | Pass all previous gates first |
| **Deployment not ready** | No artifacts | Complete deployment preparation |

---

## Next Phase

**After Gate 5 passes** → **Deploy to Production**

- **Action**: Execute deployment plan
- **Monitor**: Watch for issues in production
- **Iterate**: Gather feedback and improve

---

## Related Documents

| Document | Purpose | Location |
|----------|---------|----------|
| Gate 5 Definition | Gate criteria and process | `02-methodology/checkpoints/gate-05.md` |
| Gate 5 Checklist | Verification checklist | `05-checklists/gate-05-checklist.md` |
| Test Results Template | Test results structure | `04-templates/test-results-template.md` |
| Verification Report Template | Report structure | `04-templates/verification-report-template.md` |
| Constitution | Core principles | `00-constitution/constitution.md` |
| Testing Standards | Testing best practices | `03-standards/testing/` |

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Gate 5 Pass Rate | 100% | First-time pass rate |
| Test Pass Rate | 100% | All tests passing |
| Success Criteria Met | 100% | All SCs met |
| Documentation Completeness | 100% | All docs complete |
| Deployment Readiness | 100% | Ready for production |
| Open Questions at Submission | 0 | Zero open questions |
