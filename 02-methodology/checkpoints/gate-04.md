# Gate 4: Implementation Complete

> **Gate ID**: Gate-04
> **Version**: 1.0.0
> **Phase**: Implementation (Phase 4)
> **Next Phase**: Verification (Phase 5)
> **Reviewer**: Human Developer + Implementation Agent
> **Mandatory**: YES - Cannot proceed to Verification without passing this gate

---

## Purpose

Gate 4 ensures that:
1. The **implementation is complete** according to the design
2. **All code follows coding standards**
3. **All business logic has automated tests** (Constitution Principle II)
4. **Test coverage meets requirements** (>= 80% overall, 100% for business logic)
5. **Code has been reviewed**
6. **All requirements from specification are implemented**
7. **No open questions remain**

**Critical Rule**: Verification CANNOT start until Gate 4 is passed.

---

## Input Requirements

Before requesting Gate 4 review, the following must be **complete**:

### Required Artifacts

| Artifact | Location | Mandatory | Description |
|----------|----------|-----------|-------------|
| Implementation Plan | `specs/[FEATURE]/plan.md` | YES | Plan for implementation |
| Task List | `specs/[FEATURE]/tasks.md` | YES | All implementation tasks |
| Source Code | `Sources/[FEATURE]/` or equivalent | YES | All implemented code |
| Unit Tests | `Tests/[FEATURE]/` or equivalent | YES | All unit tests |
| Integration Tests | `Tests/[FEATURE]/` or equivalent | YES | All integration tests |
| Code Review Comments | In PR or review document | YES | Documentation of code reviews |

---

## Gate 4 Criteria

To pass Gate 4, **ALL** of the following criteria must be met:

### ✅ Mandatory Criteria (All Must Pass)

#### Planning & Tasks
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G4-M-01 | Implementation Plan exists | File `specs/[FEATURE]/plan.md` exists | |
| G4-M-02 | Task List exists | File `specs/[FEATURE]/tasks.md` exists | |
| G4-M-03 | All tasks are complete | All tasks marked as done | |
| G4-M-04 | Plan aligns with design | Implementation matches design | |

#### Code Quality
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G4-M-05 | All code follows standards | Follows language standards from `03-standards/` | |
| G4-M-06 | Code is well-documented | Comments and documentation present | Principle VII |
| G4-M-07 | Code is well-structured | Clean, organized, maintainable | |
| G4-M-08 | No hardcoded secrets | Secrets not in code | Principle D.3 |
| G4-M-09 | Error handling is present | All errors handled gracefully | |
| G4-M-10 | Logging is appropriate | Useful logging, no sensitive data | Principle X |

#### Testing
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G4-M-11 | All business logic has tests | Constitution Principle II | 100% coverage |
| G4-M-12 | Test coverage >= 80% | Overall code coverage | |
| G4-M-13 | Business logic coverage = 100% | All business logic tested | Principle II |
| G4-M-14 | Unit tests exist | All modules have unit tests | |
| G4-M-15 | Integration tests exist | Integration points tested | |
| G4-M-16 | Tests are automated | All tests run automatically | |
| G4-M-17 | Tests are fast | Tests run in seconds, not minutes | |
| G4-M-18 | Tests are reliable | No flaky tests | |
| G4-M-19 | Tests are maintainable | Clean, well-structured test code | |

#### Requirements Coverage
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G4-M-20 | All FRs are implemented | Every functional requirement has code | |
| G4-M-21 | All NFRs are addressed | Non-functional requirements met | |
| G4-M-22 | All acceptance scenarios pass | All user story scenarios verified | |
| G4-M-23 | All edge cases are handled | Edge cases have code handling | |
| G4-M-24 | All success criteria are testable | Can verify SCs with tests | |

#### Code Review
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G4-M-25 | Code has been reviewed | At least one review completed | |
| G4-M-26 | Review comments are addressed | All feedback incorporated | |
| G4-M-27 | Review documentation exists | Comments or document from review | |

#### Completeness
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G4-M-28 | **Open Questions is EMPTY** | No open questions remain | **CRITICAL - BLOCKS GATE** |
| G4-M-29 | All dependencies are implemented | Or mocked/stubbed | |
| G4-M-30 | All integrations are complete | All external integrations done | |

#### Constitution Alignment
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G4-M-31 | Aligns with Principle I | Agents could execute similar tasks | Autonomy |
| G4-M-32 | Aligns with Principle II | All business logic has tests | Tested Logic |
| G4-M-33 | Aligns with Principle III | No unnecessary abstractions | Simplicity |
| G4-M-34 | Aligns with Principle IV | Implementation decisions documented | Informed Decisions |
| G4-M-35 | Aligns with Principle V | Built according to approved spec and design | Complete Spec |
| G4-M-36 | Aligns with Principle VII | Code and tests documented | Documentation as Code |
| G4-M-37 | Aligns with Principle VIII | Personal data handled appropriately | Privacy |
| G4-M-38 | Aligns with Principle IX | Local-first implementation | Local-First |
| G4-M-39 | Aligns with Principle X | Observability built in | Observability |

#### Performance & Security
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G4-M-40 | Performance meets NFRs | Meets all performance requirements | |
| G4-M-41 | Security meets NFRs | Meets all security requirements | |
| G4-M-42 | No known vulnerabilities | Security scan passed | |
| G4-M-43 | Data is encrypted at rest | If handling sensitive data | Principle D.1 |
| G4-M-44 | Network uses TLS 1.2+ | All network communication | Principle D.2 |

### ⚠️ Advisory Criteria (Should Pass, But Not Blocking)

| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G4-A-01 | Code is idiomatic | Follows language best practices | |
| G4-A-02 | Tests cover edge cases | Tests handle unusual scenarios | |
| G4-A-03 | Code is well-commented | Useful, not excessive comments | |
| G4-A-04 | Implementation is efficient | No unnecessary computations | |

---

## Review Process

### Step 1: Agent Self-Review

Before requesting Gate 4 review:

1. **Verify all code is complete**
2. **Verify all tests are written and passing**
3. **Verify test coverage meets requirements**
4. **Verify all requirements are implemented**
5. **Run the Gate 4 checklist**: `05-checklists/gate-04-checklist.md`
6. **Verify code review is complete**
7. **Confirm Open Questions is EMPTY**
8. **Address any issues found**

### Step 2: Agent Requests Review

The agent creates a **Gate 4 Review Request**:

```markdown
# Gate 4 Review Request: [Feature Name]

**Gate**: Gate 4 - Implementation Complete
**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Date**: YYYY-MM-DD
**Requested by**: [Agent Name]
**Implementation Lead**: [Agent Name]

## Checklist Verification

- [ ] All mandatory criteria from `05-checklists/gate-04-checklist.md` are met
- [ ] Implementation Plan exists and complete
- [ ] Task List exists and all tasks complete
- [ ] All code follows coding standards
- [ ] All business logic has tests (100% coverage)
- [ ] Overall test coverage >= 80%
- [ ] All functional requirements implemented
- [ ] All non-functional requirements addressed
- [ ] All acceptance scenarios pass
- [ ] All edge cases handled
- [ ] Code review completed and addressed
- [ ] **Open Questions section is EMPTY**
- [ ] All dependencies implemented or mocked
- [ ] All integrations complete
- [ ] Self-review passed

## Summary

[Brief summary of implementation and its readiness for verification.]

## Test Coverage Report

```
Overall Coverage: [XX]%
Business Logic Coverage: [XX]% (Target: 100%)

Modules:
- Module A: [XX]%
- Module B: [XX]%
- Module C: [XX]%
```

## Implementation Metrics

- **Lines of Code**: [Count]
- **Unit Tests**: [Count]
- **Integration Tests**: [Count]
- **Test Execution Time**: [Time]
- **Requirements Implemented**: [Count]/[Total] FRs, [Count]/[Total] NFRs

## Key Implementation Decisions

[List key decisions made during implementation.]

## Questions for Reviewer

[Any specific questions or areas of concern for the reviewer.]
```

### Step 3: Agent Review (Peer Review)

Another Implementation Agent (or the same agent after a break) reviews:

1. **Code Quality**
   - Follows standards
   - Well-structured
   - Well-documented

2. **Test Quality**
   - All business logic tested
   - Tests are reliable
   - Tests are maintainable

3. **Requirements Coverage**
   - All FRs implemented
   - All NFRs addressed
   - All edge cases handled

4. **Code Review**
   - Review was thorough
   - All comments addressed

### Step 4: Human Review

The human reviews:

1. **Implementation Quality**
   - Is the code well-written?
   - Does it follow standards?
   - Is it maintainable?

2. **Completeness**
   - Are all requirements implemented?
   - Are all tests passing?
   - Is coverage adequate?

3. **Alignment**
   - Does implementation match design?
   - Does implementation match spec?
   - Does implementation align with constitution?

4. **Testing**
   - Are tests comprehensive?
   - Are tests reliable?
   - Does coverage meet requirements?

### Step 5: Human Decision

The human makes one of the following decisions:

| Decision | Action | Next Steps |
|----------|--------|------------|
| **Pass** | Implementation is complete | Proceed to Phase 5: Verification | Start verification process |
| **Pass with Conditions** | Implementation is complete with changes | Proceed with conditions | Address conditions, then start verification |
| **Reject** | Implementation is not complete | Do not proceed | Fix issues and resubmit for Gate 4 |
| **Need More Information** | More info needed | Gather more information | Address feedback, resubmit for Gate 4 |

### Step 6: Feedback and Documentation

The human provides:
1. **Decision**: Clear pass/fail decision
2. **Feedback**: Specific feedback on what to improve
3. **Next Steps**: Clear instructions on what to do next

The agent documents the result:

```markdown
# Gate 4 Review Result: [Feature Name]

**Gate**: Gate 4 - Implementation Complete
**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Date**: YYYY-MM-DD
**Reviewer**: [Human Name]
**Decision**: [Pass | Pass with Conditions | Reject | Need More Information]

## Feedback

### Strengths
- [What was done well]
- [What was done well]

### Issues
- [ ] **Critical**: [Description] - [Must fix before approval]
- [ ] **Major**: [Description] - [Should fix before approval]
- [ ] **Minor**: [Description] - [Nice to fix]

### Code Feedback
- [Code-specific feedback]

### Test Feedback
- [Test-specific feedback]

## Conditions (if applicable)

- [ ] Condition 1
- [ ] Condition 2

## Next Steps

- [ ] Action 1
- [ ] Action 2

## Approval

| Role | Name | Date | Approval | Notes |
|------|------|------|----------|-------|
| Implementation Lead | [Agent Name] | YYYY-MM-DD | Approved | |
| Peer Reviewer | [Agent Name] | YYYY-MM-DD | Approved | Peer review passed |
| Tech Lead | [Human Name] | YYYY-MM-DD | **Approved** | **Gate 4 PASSED** |

## History

- [YYYY-MM-DD] Initial submission by [Agent]
- [YYYY-MM-DD] Peer review by [Agent]
- [YYYY-MM-DD] Reviewed by [Human], decision: [Decision]
```

---

## Common Reasons for Failure

| Reason | Example | How to Fix |
|--------|---------|------------|
| **Incomplete implementation** | FR-001 not implemented | Complete all requirements |
| **Missing tests** | Business logic without tests | Add tests for all business logic |
| **Low test coverage** | Only 50% coverage | Add more tests to reach 80%+ |
| **Tests not passing** | Some tests fail | Fix failing tests |
| **Code quality issues** | Violates coding standards | Fix code to follow standards |
| **Open questions** | Unresolved implementation questions | Answer all questions |
| **Code review not done** | No review documentation | Complete code review |
| **Requirements not met** | NFRs not addressed | Address all requirements |
| **Constitution violations** | Violates testing principles | Fix to align with constitution |

---

## Tips for Success

### For Implementation Agents

✅ **Do**:
- Follow **coding standards** exactly
- Write **tests for all business logic** (100% coverage)
- **Test edge cases** thoroughly
- **Document implementation decisions**
- **Keep tests fast and reliable**
- **Address code review feedback** promptly
- Ensure **Open Questions is EMPTY**

❌ **Don't**:
- Skip **writing tests**
- Write **flaky tests**
- Ignore **coding standards**
- Submit with **failing tests**
- Submit with **open questions**
- **Rush** implementation

### For Human Developers

✅ **Do**:
- Verify **all requirements are implemented**
- Check **test coverage** meets requirements
- Review **code quality**
- Verify **constitution alignment**
- Consider **long-term maintainability**

❌ **Don't**:
- Approve **without testing**
- Accept **low test coverage**
- Ignore **constitution violations**
- **Rush the review**

---

## Templates and Checklists

- **Implementation Plan Template**: `04-templates/plan-template.md`
- **Task List Template**: `04-templates/task-list-template.md`
- **Gate 4 Checklist**: `05-checklists/gate-04-checklist.md`
- **Code Review Checklist**: `05-checklists/code-review.md`

---

## Related Documents

- [Process Overview](../process-overview.md) - End-to-end process
- [Phase 4: Implementation](../phases/04-implementation/README.md) - Implementation phase details
- [Phase 5: Verification](../phases/05-verification/README.md) - Next phase after Gate 4
- [Constitution](../../00-constitution/constitution.md) - Core principles (especially Principle II)
- [Coding Standards](../../03-standards/swift/coding-standard.md) - Language-specific standards
- [Testing Standards](../../03-standards/testing/) - Testing best practices
