# Gate 3: Design Approved

> **Gate ID**: Gate-03
> **Version**: 1.0.0
> **Phase**: Design (Phase 3)
> **Next Phase**: Implementation (Phase 4)
> **Reviewer**: Human Developer
> **Mandatory**: YES - Cannot proceed to Implementation without passing this gate

---

## Purpose

Gate 3 ensures that:
1. The **technical design is complete**
2. The **architecture is sound** and aligned with constitution principles
3. **Module boundaries** are well-defined
4. **Data models** are appropriate
5. **API contracts** are clear
6. **Technology selections** are justified
7. The design **satisfies all requirements** from the specification
8. **No open questions remain**

**Critical Rule**: Implementation CANNOT start until Gate 3 is passed (Constitution Principle V - Complete Specification Before Implementation extends to complete design).

---

## Input Requirements

Before requesting Gate 3 review, the following must be **complete**:

### Required Artifacts

| Artifact | Location | Mandatory | Description |
|----------|----------|-----------|-------------|
| Technical Design Document | `specs/[FEATURE]/design.md` | YES | Complete design document |
| Data Model | `specs/[FEATURE]/data-model.md` | YES | Data entities and relationships |
| Architecture Diagram | `specs/[FEATURE]/architecture-diagram.svg` (or .png, .drawio) | YES | Visual architecture representation |
| API/Module Contracts | `specs/[FEATURE]/contracts/` | YES | API specifications and module interfaces |
| Module Specifications | `specs/[FEATURE]/modules/` | YES | Detailed module specifications |

---

## Gate 3 Criteria

To pass Gate 3, **ALL** of the following criteria must be met:

### ✅ Mandatory Criteria (All Must Pass)

#### Documentation Quality
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-01 | Design Document exists | File `specs/[FEATURE]/design.md` exists | |
| G3-M-02 | Design follows template | All required sections present | Use `04-templates/design-template.md` |
| G3-M-03 | No empty sections | All sections filled (or marked N/A) | |
| G3-M-04 | Professional quality | Well-written, clear, organized | |

#### Architecture
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-05 | Architecture is described | Clear architecture overview | |
| G3-M-06 | Architecture diagram exists | Visual representation provided | SVG, PNG, or drawio |
| G3-M-07 | Architecture aligns with Principle III | Simplicity Over Abstraction | No unnecessary layers |
| G3-M-08 | Architecture aligns with Principle II | Business logic is explicit and testable | Separation of concerns |
| G3-M-09 | Modules are well-defined | Clear module boundaries | |
| G3-M-10 | Module responsibilities are clear | Each module has single responsibility | |
| G3-M-11 | Dependencies between modules are documented | Module dependencies mapped | |

#### Data Model
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-12 | Data Model document exists | File `specs/[FEATURE]/data-model.md` exists | |
| G3-M-13 | Entities are defined | All data entities documented | |
| G3-M-14 | Attributes are specified | Key properties for each entity | |
| G3-M-15 | Relationships are mapped | Entity relationships documented | |
| G3-M-16 | Data model aligns with spec | Matches entities from spec.md | |
| G3-M-17 | Storage strategy is defined | How data is persisted | |

#### API/Module Contracts
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-18 | Contracts directory exists | `specs/[FEATURE]/contracts/` exists | |
| G3-M-19 | API contracts are defined | All external APIs documented | |
| G3-M-20 | Module interfaces are defined | All module boundaries documented | |
| G3-M-21 | Contracts are unambiguous | Clear input/output specifications | |
| G3-M-22 | Versioning is considered | API versioning strategy | |

#### Module Specifications
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-23 | Module specifications exist | `specs/[FEATURE]/modules/` has entries | |
| G3-M-24 | Each module has clear purpose | What the module does | |
| G3-M-25 | Each module has clear interface | How to interact with it | |
| G3-M-26 | Each module has clear dependencies | What it depends on | |

#### Technology Selection
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-27 | Technologies are selected | Choices documented | |
| G3-M-28 | Technology justifications exist | Why each was chosen | |
| G3-M-29 | Technology aligns with stack constraints | Constitution Principle A | Apple-native first |
| G3-M-30 | Alternatives considered | Other options evaluated | |

#### Requirements Coverage
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-31 | All FRs are addressed | Every functional requirement has design | |
| G3-M-32 | All NFRs are addressed | Every non-functional requirement considered | |
| G3-M-33 | All edge cases are handled | Design accounts for edge cases | |
| G3-M-34 | All constraints are respected | Design works within constraints | |

#### Quality & Completeness
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-35 | Design is testable | Can write tests against design | |
| G3-M-36 | Design is maintainable | Easy to understand and modify | |
| G3-M-37 | Design is scalable | Can handle expected load | |
| G3-M-38 | Performance considered | Meets NFR performance requirements | |
| G3-M-39 | Security considered | Meets NFR security requirements | |

#### Open Questions
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-40 | **Open Questions is EMPTY** | No open questions remain | **CRITICAL - BLOCKS GATE** |

#### Cross-Checks
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-41 | Design aligns with spec | Design implements all requirements | |
| G3-M-42 | Architecture aligns with modules | Modules fit the architecture | |
| G3-M-43 | Data model aligns with requirements | Stores all needed data | |
| G3-M-44 | Contracts align with modules | Contracts match module interfaces | |

#### Constitution Alignment
| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-M-45 | Aligns with Principle I | Agents can implement the design | Autonomy |
| G3-M-46 | Aligns with Principle II | Business logic is explicit and testable | Tested Logic |
| G3-M-47 | Aligns with Principle III | No unnecessary abstractions | Simplicity |
| G3-M-48 | Aligns with Principle IV | Design decisions are explicit | Informed Decisions |
| G3-M-49 | Aligns with Principle V | Design completes before implementation | Complete Spec |
| G3-M-50 | Aligns with Principle VII | Design docs are part of deliverable | Documentation as Code |
| G3-M-51 | Aligns with Principle VIII | Personal data handled appropriately | Privacy |
| G3-M-52 | Aligns with Principle IX | Local-first architecture | Local-First |
| G3-M-53 | Aligns with Principle X | Observability built into design | Observability |

### ⚠️ Advisory Criteria (Should Pass, But Not Blocking)

| # | Criterion | How to Verify | Notes |
|---|-----------|----------------|-------|
| G3-A-01 | Design is innovative | Novel or improved solution | |
| G3-A-02 | Design is elegant | Clean, well-structured | |
| G3-A-03 | Technology is modern | Uses current best practices | |
| G3-A-04 | Design is future-proof | Can accommodate likely changes | |

---

## Review Process

### Step 1: Agent Self-Review

Before requesting Gate 3 review:

1. **Verify all design deliverables exist**
2. **Verify all required sections are complete**
3. **Verify all requirements are addressed**
4. **Run the Gate 3 checklist**: `05-checklists/gate-03-checklist.md`
5. **Verify cross-dependency checklist**: `05-checklists/cross-dependency-checklist.md`
6. **Confirm Open Questions is EMPTY**
7. **Address any issues found**

### Step 2: Agent Requests Review

The agent creates a **Gate 3 Review Request**:

```markdown
# Gate 3 Review Request: [Feature Name]

**Gate**: Gate 3 - Design Approved
**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Date**: YYYY-MM-DD
**Requested by**: [Agent Name]
**Design Document**: `specs/[FEATURE]/design.md`

## Checklist Verification

- [ ] All mandatory criteria from `05-checklists/gate-03-checklist.md` are met
- [ ] All required artifacts exist (design.md, data-model.md, architecture-diagram, contracts/, modules/)
- [ ] Architecture is described and diagram exists
- [ ] Data model is complete
- [ ] API/Module contracts are defined
- [ ] Module specifications are complete
- [ ] Technology selections are justified
- [ ] All FRs and NFRs are addressed
- [ ] All edge cases are handled in design
- [ ] All constraints are respected
- [ ] Design is testable and maintainable
- [ ] **Open Questions section is EMPTY**
- [ ] Cross-dependency checklist passed
- [ ] Self-review passed

## Summary

[Brief summary of the design and its readiness for implementation.]

## Key Highlights

- **Architecture**: [Description]
- **Modules**: [Count] modules defined
- **Data Entities**: [Count] entities
- **API Contracts**: [Count] contracts
- **Technology Stack**: [List]

## Design Decisions

[List key design decisions made, with brief rationale.]

## Questions for Reviewer

[Any specific questions or areas of concern for the reviewer.]
```

### Step 3: Human Review

The human reviews:

1. **Design Quality**
   - Is the design well-structured and clear?
   - Does it follow best practices?
   - Is it maintainable and testable?

2. **Completeness**
   - Are all required artifacts present?
   - Are all requirements addressed?

3. **Architecture**
   - Is the architecture sound?
   - Are module boundaries appropriate?
   - Is the design scalable?

4. **Feasibility**
   - Is the design technically feasible?
   - Are resources available?
   - Are timelines reasonable?

5. **Alignment**
   - Does the design align with the specification?
   - Does the design align with constitution principles?
   - Does the design consider cross-dependencies?

### Step 4: Human Decision

The human makes one of the following decisions:

| Decision | Action | Next Steps |
|----------|--------|------------|
| **Pass** | Design is approved | Proceed to Phase 4: Implementation | Start implementation planning |
| **Pass with Conditions** | Design is approved with changes | Proceed with conditions | Address conditions, then start implementation |
| **Reject** | Design is not approved | Do not proceed | Revise and resubmit for Gate 3 |
| **Need More Information** | More info needed | Gather more information | Address feedback, resubmit for Gate 3 |

### Step 5: Feedback and Documentation

The human provides:
1. **Decision**: Clear pass/fail decision
2. **Feedback**: Specific feedback on what to improve
3. **Next Steps**: Clear instructions on what to do next

The agent documents the result:

```markdown
# Gate 3 Review Result: [Feature Name]

**Gate**: Gate 3 - Design Approved
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

### Architecture Feedback
- [Architecture-specific feedback]

### Design Feedback
- [Design-specific feedback]

## Conditions (if applicable)

- [ ] Condition 1
- [ ] Condition 2

## Next Steps

- [ ] Action 1
- [ ] Action 2

## Approval

| Role | Name | Date | Approval | Notes |
|------|------|------|----------|-------|
| Design Lead | [Agent Name] | YYYY-MM-DD | Approved | |
| Reviewer | [Agent Name] | YYYY-MM-DD | Approved | Design review passed |
| Architect | [Human Name] | YYYY-MM-DD | **Approved** | **Gate 3 PASSED** |

## History

- [YYYY-MM-DD] Initial submission by [Agent]
- [YYYY-MM-DD] Reviewed by [Human], decision: [Decision]
```

---

## Common Reasons for Failure

| Reason | Example | How to Fix |
|--------|---------|------------|
| **Incomplete design** | Missing modules or contracts | Complete all design artifacts |
| **Architecture issues** | Poor module boundaries | Redesign with clearer boundaries |
| **Unaddressed requirements** | FR-001 not in design | Add design for all requirements |
| **Open questions** | Unresolved design questions | Answer all questions before submission |
| **Constitution violations** | Violates Simplicity principle | Redesign to remove unnecessary complexity |
| **Poor quality** | Design is unclear or disorganized | Improve design documentation |
| **Missing artifacts** | No data model or diagram | Create all required artifacts |
| **Performance not considered** | Doesn't meet NFRs | Add performance considerations |
| **Security not considered** | No security in design | Add security considerations |

---

## Tips for Success

### For Design Agents

✅ **Do**:
- Follow the **design template** exactly
- Keep **architecture simple** (Principle III)
- Make **module boundaries clear**
- **Address all requirements** from the spec
- **Consider all constraints**
- **Document all decisions** with rationale
- **Use diagrams** to illustrate complex concepts
- **Verify cross-references** with spec
- Ensure **Open Questions is EMPTY**

❌ **Don't**:
- Add **unnecessary abstractions**
- Create **overly complex architecture**
- Ignore **requirements from spec**
- Skip **constraints or edge cases**
- Submit with **open questions**
- **Guess** at design decisions

### For Human Developers

✅ **Do**:
- Provide **clear direction** on architecture preferences
- Review **design against spec** thoroughly
- Check **constitution alignment**
- Verify **all requirements are addressed**
- Consider **long-term maintainability**

❌ **Don't**:
- Approve **incomplete designs**
- Accept **unclear architecture**
- Ignore **constitution violations**
- **Rush the review**
- Approve **without understanding** the design

---

## Templates and Checklists

- **Design Template**: `04-templates/design-template.md`
- **Gate 3 Checklist**: `05-checklists/gate-03-checklist.md`
- **Cross-Dependency Checklist**: `05-checklists/cross-dependency-checklist.md`

---

## Related Documents

- [Process Overview](../process-overview.md) - End-to-end process
- [Phase 3: Design](../phases/03-design/README.md) - Design phase details
- [Phase 4: Implementation](../phases/04-implementation/README.md) - Next phase after Gate 3
- [Constitution](../../00-constitution/constitution.md) - Core principles
- [Decision Process](../../01-governance/decision-process.md) - How to make decisions
- [Coding Standards](../../03-standards/swift/coding-standard.md) - Language standards
- [Cross-Dependencies](../../01-governance/cross-dependencies.md) - Dependency management
