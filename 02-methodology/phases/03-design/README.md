# Phase 3: Design

> **Phase ID**: 3
> **Name**: Design
> **Duration**: 3-7 days
> **Gate**: Gate 3 - Design Approved
> **Primary Agent**: Design Agent
> **Human Involvement**: Medium (reviews, architectural decisions)

---

## Purpose

**Define HOW the feature will be built to meet the specification.**

This phase creates a complete technical design that:
- Describes the architecture
- Defines module boundaries
- Specifies data models
- Defines API contracts
- Selects technologies
- Addresses all requirements from the specification

**Key Question**: "How will we build this to meet all requirements?"

**Critical Rule**: **NO implementation can start until Gate 3 is passed.**

---

## Objectives

By the end of Phase 3, you should have:

1. ✅ **Technical Design Document** (`design.md`)
2. ✅ **Data Model Definition** (`data-model.md`)
3. ✅ **Architecture Diagram** (visual representation)
4. ✅ **API/Module Contracts** (in `contracts/` directory)
5. ✅ **Module Specifications** (in `modules/` directory)
6. ✅ **Technology selections justified**
7. ✅ **All requirements addressed**
8. ✅ **All edge cases handled** in design
9. ✅ **All constraints respected**
10. ✅ **Testability considered**
11. ✅ **Open Questions section is EMPTY**
12. ✅ **Passed Gate 3** (Design Approved)

---

## Input

- **Approved Specification** from Phase 2 (`specs/[FEATURE]/spec.md`)
- **Research findings** from Phase 1
- **Constraints** from Phase 1
- **Constitution principles** (`00-constitution/constitution.md`)
- **Coding standards** (`03-standards/`)

---

## Output

### Deliverables (Required for Gate 3)

| Deliverable | File | Mandatory | Description |
|-------------|------|-----------|-------------|
| Technical Design Document | `specs/[FEATURE]/design.md` | ✅ YES | Complete design document |
| Data Model | `specs/[FEATURE]/data-model.md` | ✅ YES | Data entities and relationships |
| Architecture Diagram | `specs/[FEATURE]/architecture-diagram.svg` | ✅ YES | Visual architecture representation |
| API/Module Contracts | `specs/[FEATURE]/contracts/` | ✅ YES | API specifications and module interfaces |
| Module Specifications | `specs/[FEATURE]/modules/` | ✅ YES | Detailed module specifications |

---

## Tasks

### For Design Agent

#### 1. Review Approved Specification
- **Action**: Read and understand spec.md thoroughly
- **Focus on**:
  - Functional requirements (FR-*)
  - Non-functional requirements (NFR-*)
  - Edge cases
  - Constraints
  - Success criteria
- **Output**: Understanding of requirements

#### 2. Analyze Requirements
- **Action**: Categorize and prioritize requirements
- **Group by**:
  - Core functionality
  - Performance requirements
  - Security requirements
  - Integration points
- **Output**: Requirements analysis

#### 3. Design Architecture
- **Action**: Create high-level architecture
- **Consider**:
  - Constitution Principle III: **Simplicity Over Abstraction**
  - Constitution Principle II: **Explicit, Tested Business Logic**
  - Module decomposition
  - Layer separation
  - Data flow
- **Use**: Architecture patterns from `03-standards/architecture/`
- **Output**: Architecture section in design.md

#### 4. Create Architecture Diagram
- **Action**: Visualize the architecture
- **Tools**:
  - Draw.io (recommended)
  - Excalidraw
  - Mermaid.js (for markdown)
  - SVG (for version control)
- **Include**:
  - All major components
  - Data flow
  - External dependencies
  - Module boundaries
- **Output**: `architecture-diagram.svg` (or .png, .drawio)

#### 5. Define Modules
- **Action**: Break down the system into modules
- **For each module**:
  - **Name**: Module name
  - **Purpose**: What the module does
  - **Responsibilities**: Specific responsibilities
  - **Interface**: Public API
  - **Dependencies**: What it depends on
  - **Ownership**: Who owns the module
- **Rules**:
  - ✅ **Single Responsibility Principle**: Each module has one clear purpose
  - ✅ **Loose Coupling**: Minimize dependencies between modules
  - ✅ **High Cohesion**: Related functionality grouped together
  - ✅ **Testable**: Each module can be tested independently
- **Output**: Module Specifications in `modules/` directory

#### 6. Design Data Model
- **Action**: Define data entities and their relationships
- **For each entity**:
  - **Name**: Entity name
  - **Description**: What it represents
  - **Attributes**: All properties/fields
  - **Relationships**: Relationships to other entities
  - **Lifetime**: How long it exists (session, persistent, etc.)
  - **Ownership**: Who owns/creates the entity
  - **Storage**: How it's stored (database, file, memory, etc.)
- **Verify**:
  - ✅ All entities from spec.md are included
  - ✅ All attributes needed for requirements are present
- **Output**: Complete `data-model.md`

#### 7. Define API/Module Contracts
- **Action**: Specify interfaces between components
- **For each contract**:
  - **Name**: Contract name
  - **Purpose**: What the contract is for
  - **Endpoints/Methods**: All public methods
  - **Input**: Parameters and types
  - **Output**: Return types and values
  - **Errors**: Error conditions and handling
  - **Version**: Version information
- **For external APIs**:
  - API documentation
  - Authentication requirements
  - Rate limits
  - Error codes
- **Output**: Contract files in `contracts/` directory

#### 8. Select Technologies
- **Action**: Choose technologies for implementation
- **For each technology**:
  - **Name**: Technology name
  - **Purpose**: What it's used for
  - **Justification**: Why this was chosen
  - **Alternatives**: Other options considered
  - **Version**: Specific version
  - **License**: License type and compatibility
- **Consider**:
  - Constitution Principle A: **Technology Stack Constraints** (Apple-native first)
  - Maturity and stability
  - Community support
  - Documentation quality
  - Integration complexity
- **Output**: Technology Selection section in design.md

#### 9. Map Requirements to Design
- **Action**: Verify all requirements are addressed
- **For each FR**:
  - Which module implements it?
  - How is it implemented?
- **For each NFR**:
  - How is it satisfied?
  - What design decisions support it?
- **Output**: Requirements Mapping section in design.md

#### 10. Handle Edge Cases
- **Action**: Ensure all edge cases are handled in design
- **For each edge case from spec.md**:
  - How is it detected?
  - How is it handled?
  - Which module is responsible?
- **Output**: Edge Case Handling section in design.md

#### 11. Consider Testability
- **Action**: Design for testability
- **Include**:
  - Dependency injection
  - Mockable interfaces
  - Test hooks
  - Test data strategies
- **Verify**:
  - ✅ All business logic can be tested in isolation
  - ✅ All external dependencies can be mocked
- **Output**: Testability Considerations section in design.md

#### 12. Consider Performance
- **Action**: Design for performance requirements
- **Address NFRs**:
  - Performance targets
  - Caching strategies
  - Optimization approaches
  - Scalability considerations
- **Output**: Performance Considerations section in design.md

#### 13. Consider Security
- **Action**: Design for security requirements
- **Address NFRs**:
  - Data protection
  - Authentication/authorization
  - Input validation
  - Secure communication
- **Output**: Security Considerations section in design.md

#### 14. Document Implementation Plan
- **Action**: Outline high-level implementation approach
- **Include**:
  - Implementation order
  - Milestones
  - Key decisions
- **Output**: Implementation Plan section in design.md

#### 15. Identify Design Decisions
- **Action**: Document all significant design decisions
- **For each decision**:
  - **Decision ID**: Unique identifier
  - **Question**: What was decided
  - **Options**: Alternatives considered
  - **Decision**: Chosen option
  - **Rationale**: Why this was chosen
  - **Impact**: Consequences
- **Use**: Decision process from `01-governance/decision-process.md`
- **Output**: Decisions section in design.md

#### 16. Resolve All Open Questions
- **Action**: Answer all design questions
- **Critical**: **Open Questions section MUST be EMPTY to pass Gate 3**
- **For each question**:
  - Present options to human
  - Get decision
  - Document resolution
- **Output**: Empty Open Questions section

#### 17. Self-Review Against Checklist
- **Action**: Verify completeness
- **Use**: `05-checklists/gate-03-checklist.md`
- **Verify**:
  - ✅ All deliverables exist
  - ✅ All requirements addressed
  - ✅ Architecture is sound
  - ✅ Modules are well-defined
  - ✅ Data model is complete
  - ✅ Contracts are defined
  - ✅ **Open Questions is EMPTY**
- **Output**: Self-review notes

#### 18. Submit for Gate 3 Review
- **Action**: Request human review
- **Process**: See `02-methodology/checkpoints/gate-03.md`

### For Human Developer

#### 1. Review Design Drafts
- **Action**: Review design documents as they're created
- **Check**:
  - Does architecture align with project architecture?
  - Are module boundaries appropriate?
  - Are technology selections justified?
  - Are all requirements addressed?
- **Output**: Feedback on drafts

#### 2. Make Architectural Decisions
- **Action**: Decide on major architectural choices
- **When presented with options**:
  - Review trade-offs
  - Consider long-term implications
  - Make decision and document rationale
- **Output**: Architectural decisions documented

#### 3. Verify Constitution Alignment
- **Action**: Check design against constitution principles
- **Verify**:
  - ✅ Aligns with Principle II (Explicit, Tested Business Logic)
  - ✅ Aligns with Principle III (Simplicity Over Abstraction)
  - ✅ Aligns with Principle IV (Informed Decisions)
  - ✅ And all other relevant principles
- **Output**: Confirmation of alignment

#### 4. Conduct Gate 3 Review
- **Action**: Review complete design
- **Use**: `02-methodology/checkpoints/gate-03.md` for criteria
- **Decision**: Pass, Pass with Conditions, Reject, or Need More Information
- **Output**: Gate 3 review result

---

## Templates

- **Design Template**: `04-templates/design-template.md`

---

## Checklists

- **Gate 3 Checklist**: `05-checklists/gate-03-checklist.md`

---

## Tips for Success

### For Design Agents

✅ **Do**:
- **Follow Constitution Principle III**: Simplicity Over Abstraction
- **Design for testability** from the start
- **Consider all requirements** from the spec
- **Document all decisions** with rationale
- **Use diagrams** to illustrate complex concepts
- **Verify requirements mapping**
- Ensure **Open Questions is EMPTY**

❌ **Don't**:
- **Over-engineer** the solution
- **Add unnecessary abstractions**
- **Ignore requirements** from the spec
- **Skip edge case handling**
- **Submit with open questions**
- **Guess at design decisions**

### For Human Developers

✅ **Do**:
- **Review architecture** against project standards
- **Consider long-term implications** of design decisions
- **Verify all requirements are addressed**
- **Check constitution alignment**

❌ **Don't**:
- **Approve incomplete designs**
- **Accept unclear architecture**
- **Ignore constitution violations**

---

## Common Pitfalls

| Pitfall | Symptom | Solution |
|---------|---------|----------|
| **Over-engineering** | Too many layers/abstractions | Follow Principle III: Simplicity |
| **Unclear architecture** | Module boundaries unclear | Redesign with clearer boundaries |
| **Missing requirements** | FRs not addressed | Verify all FRs are covered |
| **Poor testability** | Hard to test design | Design for testability |
| **Performance not considered** | Doesn't meet NFRs | Add performance considerations |
| **Security not considered** | No security in design | Add security considerations |
| **Open questions at submission** | Questions remain | Answer all questions |

---

## Next Phase

**After Gate 3 passes** → Proceed to **Phase 4: Implementation**

- **Objective**: Build the feature according to the design
- **Primary Agent**: Implementation Agent
- **Duration**: 5-14 days
- **Gate**: Gate 4 - Implementation Complete

See `02-methodology/phases/04-implementation/README.md` for details.

---

## Related Documents

| Document | Purpose | Location |
|----------|---------|----------|
| Gate 3 Definition | Gate criteria and process | `02-methodology/checkpoints/gate-03.md` |
| Gate 3 Checklist | Verification checklist | `05-checklists/gate-03-checklist.md` |
| Design Template | Design document structure | `04-templates/design-template.md` |
| Architecture Standards | Architecture patterns | `03-standards/architecture/` |
| Constitution | Core principles | `00-constitution/constitution.md` |
| Coding Standards | Language standards | `03-standards/swift/coding-standard.md` |

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Gate 3 Pass Rate | 100% | First-time pass rate |
| Design Completeness | 100% | All required artifacts created |
| Requirements Coverage | 100% | All FRs and NFRs addressed |
| Testability | High | Design allows for easy testing |
| Open Questions at Submission | 0 | Zero open questions |
