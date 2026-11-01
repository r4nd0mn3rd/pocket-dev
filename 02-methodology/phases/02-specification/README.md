# Phase 2: Specification

> **Phase ID**: 2
> **Name**: Specification
> **Duration**: 3-7 days
> **Gate**: Gate 2 - Specification Approved
> **Primary Agent**: Specification Agent
> **Human Involvement**: High (reviews, decisions)

---

## Purpose

**Define WHAT the feature should do, not HOW to build it.**

This phase creates a complete, unambiguous specification that:
- Answers all questions about feature behavior
- Provides clear acceptance criteria
- Enables implementation without further clarification
- Serves as the contract between stakeholders and implementers

**Key Question**: "What exactly are we building, and how will we know it's correct?"

**Critical Rule**: **NO implementation can start until Gate 2 is passed** (Constitution Principle V).

---

## Objectives

By the end of Phase 2, you should have:

1. ✅ **Complete feature specification** (`spec.md`)
2. ✅ **User stories with acceptance scenarios** (Given-When-Then format)
3. ✅ **Functional requirements** (FR-*) - Clear, testable statements
4. ✅ **Non-functional requirements** (NFR-*) - Performance, security, etc.
5. ✅ **Edge cases identified and addressed**
6. ✅ **Success criteria** (SC-*) - Measurable outcomes
7. ✅ **Constraints, assumptions, dependencies** documented
8. ✅ **Test strategy** defined
9. ✅ **Documentation requirements** listed
10. ✅ **Rollout plan** defined
11. ✅ **Open Questions section is EMPTY**
12. ✅ **Passed Gate 2** (Specification Approved)

---

## Input

- **Approved Research** from Phase 1
- **Approved Idea** from Phase 0
- **Constitution principles** (`00-constitution/constitution.md`)
- **Project goals and vision**

---

## Output

### Deliverables (Required for Gate 2)

| Deliverable | File | Mandatory | Description |
|-------------|------|-----------|-------------|
| Feature Specification | `specs/[FEATURE]/spec.md` | ✅ YES | Complete specification document |

### Optional Supporting Documents

| Deliverable | File | Mandatory | Description |
|-------------|------|-----------|-------------|
| User Stories (detailed) | `specs/[FEATURE]/user-stories.md` | ❌ NO | Detailed user stories (can be in spec.md) |
| Acceptance Criteria (detailed) | `specs/[FEATURE]/acceptance-criteria.md` | ❌ NO | Detailed acceptance criteria (can be in spec.md) |
| Edge Cases (detailed) | `specs/[FEATURE]/edge-cases.md` | ❌ NO | Detailed edge cases (can be in spec.md) |

---

## Tasks

### For Specification Agent

#### 0. Grill Until Specification Is Clear
- **Action**: Grill stakeholders until **intent, description, constraints, and acceptance criteria** are clear and comprehensive
- **Method**: Ask relentless, targeted questions; do not accept vague answers
- **Stop condition**: Every acceptance criterion is testable and every constraint is explicit; Open Questions is EMPTY
- **Output**: Grilling notes and resolved questions in `spec.md`

#### 1. Review Phase 1 Deliverables
- **Action**: Read research.md, constraints.md, risks.md
- **Focus on**:
  - Key findings from research
  - Identified constraints
  - Assessed risks
  - Recommendations
- **Output**: Understanding of the problem space

#### 2. Create Feature Specification Header
- **Action**: Fill out the header section
- **Include**:
  - Feature Branch
  - Feature ID (FEA-YYYYMMDD-XXX)
  - Created date
  - Last Updated date
  - Status (Draft)
  - Author
- **Output**: Header section in spec.md

#### 3. Write Executive Summary
- **Action**: Summarize the feature in 2-3 sentences
- **Answer**:
  - What problem does this solve?
  - What value does it provide?
  - Who is it for?
- **Output**: Executive Summary section in spec.md

#### 4. Document Background
- **Action**: Provide context for the feature
- **Include**:
  - **Related Features**: Other features this interacts with
  - **Previous Work**: Any prior work that led to this
  - **Assessments**: References to assessment documents
- **Output**: Background section in spec.md

#### 5. Define User Stories
- **Action**: Create user stories for the feature
- **Template**:
  ```markdown
  ### User Story [N]: [Brief Description] (Priority: P[1-3])
  
  **As a** [role/persona]
  **I want to** [action]
  **So that** [benefit/outcome]
  
  **Why this priority**: [Explain why this priority level]
  
  **Independent Test**: [How can this be tested independently?]
  
  **Acceptance Scenarios**:
  
  | ID | Scenario | Given | When | Then | Priority |
  |----|----------|-------|------|------|----------|
  | US[N]-SC[M] | [Description] | [Precondition] | [Action] | [Expected Result] | [P1|P2|P3] |
  ```
- **Requirements**:
  - ✅ At least **1 P1 user story** (core functionality)
  - ✅ Each user story has **at least 2 acceptance scenarios** (P1) or **1** (P2/P3)
  - ✅ All scenarios follow **Given-When-Then** format
  - ✅ All scenarios are **testable and specific**
- **Output**: User Scenarios & Testing section in spec.md

#### 6. Identify Edge Cases
- **Action**: Think through all unusual or error scenarios
- **Template**:
  ```markdown
  | ID | Edge Case | Trigger | Expected Behavior | Testable? | Notes |
  |----|-----------|---------|-------------------|-----------|-------|
  | EC-[NNN] | [Description] | [What causes it] | [What should happen] | [Yes/No] | [Additional context] |
  ```
- **Common Edge Cases**:
  - Network failures
  - Invalid input
  - Missing data
  - Permission denials
  - Timeout scenarios
  - Concurrent access
  - Offline scenarios
  - Boundary conditions
- **Requirements**:
  - ✅ All edge cases have **ID, description, trigger, expected behavior**
  - ✅ Each edge case is marked as **testable or not**
- **Output**: Edge Cases section in spec.md

#### 7. Define Functional Requirements
- **Action**: Create clear, testable functional requirements
- **Template**:
  ```markdown
  - **FR-[NNN]**: [Requirement statement]
    - **Rationale**: [Why this requirement exists]
    - **Source**: [Which user story this supports, if applicable]
    - **Priority**: [P1 | P2 | P3]
    - **Testable**: [Yes | No - If No, explain why]
  ```
- **Rules**:
  - ✅ Every requirement **MUST be testable**
  - ✅ Every requirement **MUST be unambiguous**
  - ✅ Every requirement **MUST have a source**
  - ✅ **No implementation details** in requirements
  - ✅ Use **clear, specific language** (not vague)
- **Requirements**:
  - ✅ At least **3 functional requirements** (FR-*)
  - ✅ FRs cover **all core functionality** from user stories
- **Output**: Functional Requirements section in spec.md

#### 8. Define Non-Functional Requirements
- **Action**: Create non-functional requirements
- **Categories**:
  - Performance
  - Security
  - Usability
  - Accessibility
  - Compatibility
  - Maintainability
  - Reliability
- **Template**:
  ```markdown
  - **NFR-[NNN]**: [Requirement statement]
    - **Category**: [Performance | Security | etc.]
    - **Priority**: [P1 | P2 | P3]
    - **Measurable**: [Yes | No]
    - **Metric**: [How it's measured, if applicable]
  ```
- **Output**: Non-Functional Requirements section in spec.md

#### 9. Define Key Entities
- **Action**: Document data entities (if applicable)
- **Template**:
  ```markdown
  ### [Entity Name]
  - **Description**: [What it represents]
  - **Attributes**: [Key properties/fields]
  - **Relationships**: [Relationships to other entities]
  - **Lifetime**: [How long it exists - session, persistent, etc.]
  - **Ownership**: [Who owns/creates this entity]
  ```
- **When Required**: If the feature involves data
- **Output**: Key Entities section in spec.md

#### 10. Document Constraints
- **Action**: List all constraints
- **Categories**:
  - **Technical Constraints** (TC-*)
  - **Business Constraints** (BC-*)
  - **Legal Constraints** (LC-*)
  - **Resource Constraints** (RC-*)
- **For each constraint**:
  - Clear description
  - Source (where it comes from)
  - Impact (how it affects the feature)
- **Output**: Constraints section in spec.md

#### 11. Document Assumptions
- **Action**: List all assumptions
- **Template**:
  ```markdown
  - **AS-[NNN]**: [Assumption statement]
    - **Justification**: [Why we're assuming this]
    - **Verification**: [How to verify this assumption]
  ```
- **Requirements**:
  - ✅ All assumptions are **explicitly stated**
  - ✅ All assumptions are **justified**
  - ✅ All assumptions are **verifiable**
- **Output**: Assumptions section in spec.md

#### 12. Document Dependencies
- **Action**: List all dependencies
- **Categories**:
  - **External Dependencies** (ED-*) - APIs, libraries, services
  - **Internal Dependencies** (ID-*) - other features, modules, components
  - **Data Dependencies** (DD-*) - data sources, formats, schemas
  - **Timing Dependencies** (TD-*) - things that must happen before/after
- **For each dependency**:
  - Clear description
  - Purpose (what it's for)
  - Required (Yes/No)
  - Fallback (what happens if unavailable)
  - Status (Available/Not Available/Unknown)
- **Output**: Dependencies section in spec.md

#### 13. Define Success Criteria
- **Action**: Create measurable success criteria
- **Template**:
  ```markdown
  - **SC-[NNN]**: [Success criterion statement]
    - **Measurement**: [How it's measured]
    - **Target**: [What the target value is]
    - **Verification**: [How to verify it's met]
    - **Priority**: [P1 | P2 | P3]
  ```
- **Requirements**:
  - ✅ At least **3 success criteria** (SC-*)
  - ✅ All SCs are **specific and unambiguous**
  - ✅ All SCs are **measurable**
  - ✅ All SCs are **achievable**
- **Output**: Success Criteria section in spec.md

#### 14. Resolve All Open Questions
- **Action**: Answer all questions from Phase 1 or new questions
- **Critical**: **Open Questions section MUST be EMPTY to pass Gate 2**
- **For each question**:
  - Answer with research
  - Present options to human for decision
  - Document the resolution
  - Remove from Open Questions section
- **Output**: Empty Open Questions section in spec.md

#### 15. Document Decisions
- **Action**: Record all decisions made
- **Template**:
  ```markdown
  - **Decision ID**: [Reference to decision document or unique ID]
    - **Question**: [What was decided]
    - **Decision**: [The chosen option]
    - **Rationale**: [Why this was chosen]
    - **Impact**: [Consequences of this decision]
  ```
- **Output**: Decisions section in spec.md

#### 16. Define Test Strategy
- **Action**: Describe the testing approach
- **Include**:
  - **Test Types**: Unit, integration, UI, acceptance, etc.
  - **Test Coverage**: What percentage of code should be covered?
  - **Test Environments**: Where tests will run (local, CI, etc.)
  - **Test Data**: What test data is needed?
  - **Mocking Strategy**: What will be mocked and how?
- **Requirements**:
  - ✅ Business logic coverage target: **100%**
  - ✅ Overall coverage target: **80%**
- **Output**: Test Strategy section in spec.md

#### 17. Document Implementation Notes
- **Action**: Add notes for implementers
- **Include**:
  - Key implementation decisions already made
  - Recommended approaches for complex parts
  - Pitfalls to avoid
  - Performance considerations
  - Security considerations
- **Output**: Implementation Notes section in spec.md

#### 18. Define Documentation Requirements
- **Action**: List all documentation that must be created/updated
- **Include**:
  - **New Documentation**: What needs to be written from scratch
  - **Updated Documentation**: What existing docs need updates
  - **Documentation Owners**: Who is responsible for each
- **Output**: Documentation Requirements section in spec.md

#### 19. Define Rollout Plan
- **Action**: Describe how the feature will be rolled out
- **Include**:
  - **Release Strategy**: How will it be released? (Feature flag, full release, etc.)
  - **Migration Plan**: Any data migration needed?
  - **Deprecation Plan**: Any old features being replaced?
  - **Monitoring Plan**: How will we monitor for issues?
- **Output**: Rollout Plan section in spec.md

#### 20. Self-Review Against Checklist
- **Action**: Verify completeness against Gate 2 checklist
- **Use**: `05-checklists/gate-02-checklist.md`
- **Verify**:
  - ✅ All sections complete
  - ✅ At least 1 P1 user story with 2+ acceptance scenarios
  - ✅ At least 3 functional requirements
  - ✅ All requirements are testable
  - ✅ Edge cases are documented
  - ✅ Success criteria are measurable
  - ✅ Constraints, assumptions, dependencies documented
  - ✅ Test Strategy defined
  - ✅ Documentation Requirements listed
  - ✅ Rollout Plan defined
  - ✅ **Open Questions section is EMPTY**
- **Output**: Self-review notes

#### 21. Submit for Gate 2 Review
- **Action**: Request human review
- **Prerequisites**: All checklist items met
- **Process**: See `02-methodology/checkpoints/gate-02.md`

### For Human Developer

#### 1. Review Specification Drafts
- **Action**: Review drafts as they're created
- **Check**:
  - Are user stories clear and testable?
  - Are requirements unambiguous?
  - Are edge cases comprehensive?
  - Are success criteria measurable?
- **Output**: Feedback on drafts

#### 2. Make Decisions on Open Questions
- **Action**: Answer agent's questions
- **When presented with options**:
  - Review pros and cons
  - Consider long-term implications
  - Make decision and document rationale
- **Output**: Decisions documented in spec.md

#### 3. Verify Constitution Alignment
- **Action**: Check spec against constitution principles
- **Verify**:
  - ✅ Aligns with Principle I (Autonomy)
  - ✅ Aligns with Principle II (Tested Logic)
  - ✅ Aligns with Principle III (Simplicity)
  - ✅ Aligns with Principle V (Complete Specification)
  - ✅ And all other principles
- **Output**: Confirmation of alignment

#### 4. Conduct Gate 2 Review
- **Action**: Review complete specification
- **Use**: `02-methodology/checkpoints/gate-02.md` for criteria
- **Decision**: Pass, Pass with Conditions, Reject, or Need More Information
- **Output**: Gate 2 review result

---

## Templates

- **Spec Template**: `04-templates/spec-template.md` (use this as the primary template)

---

## Checklists

- **Gate 2 Checklist**: `05-checklists/gate-02-checklist.md` (extensive checklist with 50+ items)

---

## Tips for Success

### For Specification Agents

✅ **Do**:
- **Follow the spec template exactly**
- **Be specific and unambiguous** in all requirements
- **Test your requirements** - can you write a test for each?
- **Think through edge cases** systematically
- **Verify all cross-references** are accurate
- **Ask for clarification** early if anything is unclear
- **Use clear language** (avoid jargon unless defined)
- **Ensure Open Questions is EMPTY**

❌ **Don't**:
- **Submit with open questions**
- **Use vague language** ("should", "might", "probably")
- **Skip edge cases**
- **Submit with empty sections**
- **Guess at requirements**
- **Rush through specification**
- **Start implementation before Gate 2 passes**

### For Human Developers

✅ **Do**:
- **Provide clear direction** on project goals
- **Answer questions promptly and clearly**
- **Give specific feedback** on drafts
- **Review thoroughly** before approval
- **Check for completeness** against the checklist
- **Verify constitution alignment**

❌ **Don't**:
- **Accept vague requirements**
- **Ignore open questions**
- **Rush the review**
- **Approve without understanding**

---

## Common Pitfalls

| Pitfall | Symptom | Solution |
|---------|---------|----------|
| **Vague requirements** | "System should be fast" | Make requirements specific and measurable |
| **Missing user stories** | No user perspective | Add user stories with acceptance scenarios |
| **Non-testable requirements** | "User should have good experience" | Make requirements testable |
| **Missing edge cases** | No error handling | Think through all possible scenarios |
| **Open questions at submission** | Questions remain | Answer all questions before submission |
| **Inconsistent requirements** | FR-001 says X, FR-002 says not X | Resolve conflicts |
| **Implementation details** | Requirements specify how to implement | Focus on WHAT, not HOW |
| **Incomplete sections** | Sections left empty | Fill all required sections |

---

## Next Phase

**After Gate 2 passes** → Proceed to **Phase 3: Design**

- **Objective**: Define HOW the feature will be built
- **Primary Agent**: Design Agent
- **Duration**: 3-7 days
- **Gate**: Gate 3 - Design Approved

See `02-methodology/phases/03-design/README.md` for details.

---

## Related Documents

| Document | Purpose | Location |
|----------|---------|----------|
| Gate 2 Definition | Gate criteria and process | `02-methodology/checkpoints/gate-02.md` |
| Gate 2 Checklist | Verification checklist | `05-checklists/gate-02-checklist.md` |
| Spec Template | Specification structure | `04-templates/spec-template.md` |
| Constitution | Core principles | `00-constitution/constitution.md` |
| Process Overview | End-to-end process | `02-methodology/process-overview.md` |

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Gate 2 Pass Rate | 100% | First-time pass rate |
| Specification Completeness | 100% | All required sections completed |
| Requirement Testability | 100% | All requirements are testable |
| Edge Case Coverage | High | Number of edge cases identified |
| User Story Quality | High | Average acceptance scenarios per user story |
| Open Questions at Submission | 0 | Zero open questions |

---

## Example Specification Session

### Scenario: Development Module Feature (Continued)

**Agent Tasks**:

1. **Review Phase 1 Deliverables**: Reads research.md, constraints.md, risks.md

2. **Create Header**:
   ```markdown
   **Feature Branch: feat/pocket-dev-module
   **Feature ID**: FEA-20261029-001
   **Created**: 2026-10-29
   **Last Updated**: 2026-10-29
   **Status**: Draft
   **Author**: spec-agent
   ```

3. **Write Executive Summary**:
   "This feature adds a development module to the Pocket Dev dashboard that displays Project status and a Project overview. It allows users to monitor their progress without picking up their phone. The widget uses SampleProvider as the default service with an option to upgrade to DevKit for more accurate data."

4. **Document Background**:
   - Related Features: FEA-20261001-001 (Calendar Widget) - shares dashboard layout
   - Previous Work: development module concept from macOS assessment
   - Assessments: `.specify/assessments/pocket-dev/decision.md`

5. **Define User Stories**:
   - **US1**: View Project status (P1)
     - As a Pocket Dev user, I want to see project status when I open the app, so I can check my progress without opening multiple tools
     - Scenarios: Display project data with network, Display cached project data offline
   - **US2**: View Project overview (P1)
     - As a Pocket Dev user, I want to see a 3-day Project overview, so I can check long-term progress
     - Scenarios: Display Project overview
   - **US3**: Handle location permission (P1)
     - As a Pocket Dev user, I want the app to handle location permission gracefully, so I can still use the widget even if I deny permission
     - Scenarios: Use device location when granted, Prompt for permission if not granted, Use manual location if denied

6. **Identify Edge Cases**:
   - EC-001: No network connectivity
   - EC-002: Development API unavailable
   - EC-003: Location permission denied
   - EC-004: Invalid API response
   - EC-005: User is offline

7. **Define Functional Requirements**:
   - FR-001: System MUST display current status
   - FR-002: System MUST display Project status conditions with icon
   - FR-003: System MUST display Project overview
   - FR-004: System MUST handle location permission gracefully
   - FR-005: System MUST cache project data for offline viewing

8. **Define Non-Functional Requirements**:
   - NFR-001: Project data MUST be refreshed at least every 30 minutes (Performance, P1)
   - NFR-002: Development API calls MUST use HTTPS (Security, P1)
   - NFR-003: Widget MUST load within 2 seconds (Performance, P1)

9. **Define Key Entities**:
   - ProjectSnapshot: Point-in-time project data
   - Location: Geographic coordinates
   - CurrentProject: Current conditions
   - DailyForecast: Forecast for a day

10. **Document Constraints**:
    - TC-001: Must use Swift 6.0+
    - TC-002: Must work on macOS 26.0+
    - BC-001: Must follow Constitution Principle II (Simplicity)
    - BC-002: Must NOT require paid Apple Developer Program (use SampleProvider)
    - LC-001: Must comply with GDPR for location data

11. **Document Assumptions**:
    - AS-001: SampleProvider API will remain free and available
    - AS-002: User will grant location permission when prompted
    - AS-003: Network connectivity will be available at least once per hour

12. **Document Dependencies**:
    - ED-001: SampleProvider API (Required, No fallback)
    - ID-001: LocationService module (Required, Already exists)

13. **Define Success Criteria**:
    - SC-001: User can view Project status within 2 seconds of app launch
    - SC-002: Project data is no older than 30 minutes during daytime
    - SC-003: Permission prompt appears if location permission not granted

14. **Resolve All Questions**: Works with human to answer any remaining questions

15. **Define Test Strategy**: Describes testing approach

16. **Document Implementation Notes**: Notes for implementers

17. **Define Documentation Requirements**: Lists required docs

18. **Define Rollout Plan**: Describes release strategy

19. **Self-Review**: Verifies against checklist

20. **Submit for Gate 2** → **PASSES**

---

## Quick Reference

| Section | Required | Min Count | Notes |
|---------|----------|-----------|-------|
| Header | ✅ | 1 | Feature metadata |
| Executive Summary | ✅ | 1 | 2-3 sentences |
| Background | ✅ | 1 | Context and related work |
| User Stories | ✅ | 1 P1 | At least 1 P1 with 2+ scenarios |
| Edge Cases | ✅ | N/A | All identified edge cases |
| Functional Requirements | ✅ | 3 | FR-* format |
| Non-Functional Requirements | ✅ | N/A | NFR-* format |
| Key Entities | ⚠️ | If data | N/A |
| Constraints | ✅ | N/A | TC-*, BC-*, LC-*, RC-* |
| Assumptions | ✅ | N/A | AS-* format |
| Dependencies | ✅ | N/A | ED-*, ID-*, DD-*, TD-* |
| Success Criteria | ✅ | 3 | SC-* format |
| Open Questions | ✅ | **0** | **MUST BE EMPTY** |
| Decisions | ⚠️ | If decisions | N/A |
| Test Strategy | ✅ | 1 | Testing approach |
| Documentation Requirements | ✅ | 1 | Docs to create/update |
| Rollout Plan | ✅ | 1 | Release strategy |
