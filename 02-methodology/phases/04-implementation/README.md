# Phase 4: Implementation

> **Phase ID**: 4
> **Name**: Implementation
> **Duration**: 5-14 days (varies by complexity)
> **Gate**: Gate 4 - Implementation Complete
> **Primary Agent**: Implementation Agent
> **Human Involvement**: Low (critical reviews only)

---

## Purpose

**Build the feature according to the approved design and specification.**

This phase focuses on:
- Writing clean, maintainable code
- Implementing all requirements
- Writing comprehensive tests
- Ensuring code quality
- Following all coding standards

**Key Question**: "Is the code built correctly and does it meet the specification?"

**Critical Rule**: **NO code can be merged without passing all tests and code review.**

---

## Objectives

By the end of Phase 4, you should have:

1. ✅ **Implementation Plan** (`plan.md`)
2. ✅ **Task List** (`tasks.md`) with all tasks complete
3. ✅ **Source code** following all coding standards
4. ✅ **Unit tests** for all business logic (100% coverage - Constitution Principle II)
5. ✅ **Integration tests** for integration points
6. ✅ **UI tests** (if applicable)
7. ✅ **Code review** completed and addressed
8. ✅ **All functional requirements implemented**
9. ✅ **All non-functional requirements addressed**
10. ✅ **All acceptance scenarios pass**
11. ✅ **All edge cases handled**
12. ✅ **Open Questions section is EMPTY**
13. ✅ **Passed Gate 4** (Implementation Complete)

---

## Input

- **Approved Design** from Phase 3 (`specs/[FEATURE]/design.md`)
- **Approved Specification** from Phase 2 (`specs/[FEATURE]/spec.md`)
- **Coding standards** (`03-standards/`)
- **Constitution principles** (`00-constitution/constitution.md`)

---

## Output

### Deliverables (Required for Gate 4)

| Deliverable | File | Mandatory | Description |
|-------------|------|-----------|-------------|
| Implementation Plan | `specs/[FEATURE]/plan.md` | ✅ YES | Plan for implementation |
| Task List | `specs/[FEATURE]/tasks.md` | ✅ YES | All implementation tasks |
| Source Code | `Sources/[FEATURE]/` | ✅ YES | All implemented code |
| Unit Tests | `Tests/[FEATURE]/` | ✅ YES | All unit tests |
| Integration Tests | `Tests/[FEATURE]/` | ✅ YES | All integration tests |
| Code Review Documentation | In PR or separate file | ✅ YES | Documentation of code reviews |

---

## Tasks

### For Implementation Agent

#### 1. Review Approved Design and Specification
- **Action**: Read design.md and spec.md thoroughly
- **Focus on**:
  - Architecture
  - Module specifications
  - Data model
  - API contracts
  - All requirements (FR-*, NFR-*)
  - Edge cases
- **Output**: Understanding of what needs to be built

#### 2. Create Implementation Plan
- **Action**: Plan the implementation approach
- **Include**:
  - **Implementation Order**: Which modules to implement first
  - **Milestones**: Key checkpoints
  - **Dependencies**: Order in which modules must be implemented
  - **Parallel Work**: What can be done simultaneously
  - **Risk Mitigation**: How to handle potential issues
- **Output**: Complete `plan.md`

#### 3. Create Task List
- **Action**: Break implementation into manageable tasks
- **For each task**:
  - **Task ID**: Unique identifier
  - **Description**: What needs to be done
  - **Module**: Which module this belongs to
  - **Priority**: P1, P2, or P3
  - **Estimate**: Time estimate
  - **Dependencies**: What must be done first
  - **Status**: Not Started, In Progress, Complete
- **Template**:
  ```markdown
  | ID | Task | Module | Priority | Estimate | Dependencies | Status |
  |----|------|--------|----------|----------|--------------|--------|
  | T-001 | Implement ProjectService | ProjectService | P1 | 4h | None | Complete |
  | T-002 | Implement APIClient | APIClient | P1 | 2h | None | Complete |
  | T-003 | Write unit tests for ProjectService | ProjectService | P1 | 3h | T-001 | In Progress |
  ```
- **Output**: Complete `tasks.md`

#### 4. Set Up Project Structure
- **Action**: Create the necessary directory structure
- **Typical structure**:
  ```
  Sources/[FEATURE]/
  ├── Models/
  │   └── [Entity files]
  ├── Services/
  │   └── [Service files]
  ├── ViewModels/
  │   └── [ViewModel files]
  ├── Views/
  │   └── [View files]
  └── [Other files]
  
  Tests/[FEATURE]/
  ├── UnitTests/
  │   └── [Unit test files]
  ├── IntegrationTests/
  │   └── [Integration test files]
  └── UITests/
      └── [UI test files]
  ```
- **Output**: Directory structure created

#### 5. Implement Code
- **Action**: Write production code
- **Follow**:
  - **Coding Standards**: `03-standards/swift/coding-standard.md` (or other language)
  - **Architecture**: As defined in design.md
  - **Module Specifications**: As defined in modules/
  - **API Contracts**: As defined in contracts/
- **For each module**:
  1. Create the module file
  2. Implement the public interface
  3. Implement internal functionality
  4. Handle error cases
  5. Add logging (follow Principle X - Observability)
- **Rules**:
  - ✅ Follow **naming conventions**
  - ✅ Follow **code structure** guidelines
  - ✅ Use **clear, descriptive names**
  - ✅ Add **documentation comments** for public APIs
  - ✅ Handle **all edge cases**
  - ✅ Follow **security best practices**
  - ✅ Follow **performance best practices**
- **Output**: Source code files

#### 6. Implement Data Model
- **Action**: Implement data entities
- **For each entity from data-model.md**:
  - Create the data structure (struct, class, etc.)
  - Implement all attributes
  - Implement relationships
  - Add validation if needed
- **Output**: Data model implementation

#### 7. Write Unit Tests
- **Action**: Write tests for all business logic
- **Follow**: Constitution Principle II - **All business logic MUST have automated tests**
- **For each function/method**:
  - Test **happy path**
  - Test **edge cases**
  - Test **error conditions**
- **Target Coverage**:
  - ✅ **Business logic**: 100% coverage
  - ✅ **Overall**: >= 80% coverage
- **Rules**:
  - ✅ Tests must be **automated**
  - ✅ Tests must be **fast** (run in seconds)
  - ✅ Tests must be **reliable** (not flaky)
  - ✅ Tests must be **maintainable**
- **Output**: Unit test files

#### 8. Write Integration Tests
- **Action**: Test integration between modules
- **Focus on**:
  - Module boundaries
  - API integrations
  - Data flow between components
- **Output**: Integration test files

#### 9. Write UI Tests (if applicable)
- **Action**: Test user interface behavior
- **Focus on**:
  - User journeys
  - UI state changes
  - User interactions
- **Output**: UI test files

#### 10. Run Tests Continuously
- **Action**: Run tests frequently
- **Run**:
  - After each significant change
  - Before committing code
  - Before pushing to shared branches
- **Verify**:
  - ✅ All tests pass
  - ✅ No regressions
- **Output**: Test results

#### 11. Perform Code Review
- **Action**: Review code with peers or human
- **Self-review first**:
  - Check against coding standards
  - Verify all requirements are implemented
  - Check for potential issues
- **Peer review**:
  - Submit code for review
  - Address all feedback
  - Document review comments
- **Output**: Code review documentation

#### 12. Handle Edge Cases
- **Action**: Ensure all edge cases are handled
- **For each edge case from spec.md**:
  - Verify it's handled in code
  - Add specific test for it
- **Output**: Edge case handling verified

#### 13. Verify Requirements Implementation
- **Action**: Check all requirements are implemented
- **For each FR from spec.md**:
  - Verify it's implemented in code
  - Verify it's tested
- **For each NFR from spec.md**:
  - Verify it's addressed
  - Verify it's tested (if applicable)
- **Output**: Requirements implementation verified

#### 14. Resolve All Open Questions
- **Action**: Answer any implementation questions
- **Critical**: **Open Questions section MUST be EMPTY to pass Gate 4**
- **Output**: Empty Open Questions section

#### 15. Self-Review Against Checklist
- **Action**: Verify completeness
- **Use**: `05-checklists/gate-04-checklist.md`
- **Verify**:
  - ✅ Implementation Plan complete
  - ✅ Task List complete
  - ✅ All code follows standards
  - ✅ All business logic has tests (100% coverage)
  - ✅ Overall test coverage >= 80%
  - ✅ All requirements implemented
  - ✅ All tests passing
  - ✅ Code review completed
  - ✅ **Open Questions is EMPTY**
- **Output**: Self-review notes

#### 16. Submit for Gate 4 Review
- **Action**: Request human review
- **Process**: See `02-methodology/checkpoints/gate-04.md`

### For Human Developer

#### 1. Review Implementation Plan
- **Action**: Review plan.md
- **Check**:
  - Is the implementation order logical?
  - Are dependencies properly sequenced?
  - Are estimates reasonable?
- **Output**: Approval or feedback

#### 2. Review Critical Code
- **Action**: Review important or complex code
- **Focus on**:
  - Architecture decisions
  - Complex algorithms
  - Security-sensitive code
  - Performance-critical code
- **Output**: Feedback on code

#### 3. Make Architectural Decisions
- **Action**: Decide on implementation approach issues
- **When needed**:
  - Review agent's proposals
  - Make decisions on approach
  - Document rationale
- **Output**: Architectural decisions documented

#### 4. Conduct Gate 4 Review
- **Action**: Review complete implementation
- **Use**: `02-methodology/checkpoints/gate-04.md` for criteria
- **Decision**: Pass, Pass with Conditions, Reject, or Need More Information
- **Output**: Gate 4 review result

---

## Templates

- **Implementation Plan Template**: `04-templates/plan-template.md`
- **Task List Template**: `04-templates/task-list-template.md`

---

## Checklists

- **Gate 4 Checklist**: `05-checklists/gate-04-checklist.md`
- **Code Review Checklist**: `05-checklists/code-review.md`

---

## Tips for Success

### For Implementation Agents

✅ **Do**:
- **Follow coding standards** exactly
- **Write tests first** (TDD approach)
- **Test thoroughly** - all business logic must have tests
- **Handle edge cases** explicitly
- **Document code** clearly
- **Run tests frequently**
- **Address code review feedback** promptly

❌ **Don't**:
- **Skip writing tests**
- **Write flaky tests**
- **Ignore coding standards**
- **Submit with failing tests**
- **Submit with open questions**
- **Rush implementation**

### For Human Developers

✅ **Do**:
- **Review critical code** thoroughly
- **Verify test coverage** meets requirements
- **Check constitution alignment**

❌ **Don't**:
- **Approve without testing**
- **Accept low test coverage**
- **Ignore constitution violations**

---

## Common Pitfalls

| Pitfall | Symptom | Solution |
|---------|---------|----------|
| **Missing tests** | Business logic without tests | Add tests for all business logic |
| **Low test coverage** | Only 50% coverage | Add more tests to reach 80%+ |
| **Tests not passing** | Some tests fail | Fix failing tests |
| **Code quality issues** | Violates standards | Fix code to follow standards |
| **Incomplete implementation** | FRs not implemented | Complete all requirements |
| **Open questions at submission** | Questions remain | Answer all questions |
| **No code review** | No review documentation | Complete code review |

---

## Next Phase

**After Gate 4 passes** → Proceed to **Phase 5: Verification**

- **Objective**: Verify the feature works correctly and meets all acceptance criteria
- **Primary Agent**: Verification Agent
- **Duration**: 2-5 days
- **Gate**: Gate 5 - Verification Passed

See `02-methodology/phases/05-verification/README.md` for details.

---

## Related Documents

| Document | Purpose | Location |
|----------|---------|----------|
| Gate 4 Definition | Gate criteria and process | `02-methodology/checkpoints/gate-04.md` |
| Gate 4 Checklist | Verification checklist | `05-checklists/gate-04-checklist.md` |
| Implementation Plan Template | Plan structure | `04-templates/plan-template.md` |
| Task List Template | Task structure | `04-templates/task-list-template.md` |
| Constitution | Core principles | `00-constitution/constitution.md` |
| Coding Standards | Language standards | `03-standards/swift/coding-standard.md` |
| Testing Standards | Testing best practices | `03-standards/testing/` |

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Gate 4 Pass Rate | 100% | First-time pass rate |
| Business Logic Coverage | 100% | Test coverage for business logic |
| Overall Coverage | >= 80% | Total test coverage |
| Test Reliability | 100% | No flaky tests |
| Requirements Implementation | 100% | All FRs and NFRs implemented |
| Code Quality | High | Follows all coding standards |
| Open Questions at Submission | 0 | Zero open questions |
