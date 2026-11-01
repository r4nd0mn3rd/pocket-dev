# Getting Started with the Solo Agent Development Framework Framework

> **Framework Version**: 1.0.0
> **Last Updated**: 2026-10-29
> **Estimated Reading Time**: 15 minutes

## Welcome!

This framework is designed to help **you, as a solo developer**, work with **AI agents** to **plan, design, specify, and implement** applications **from idea to production** — with **complete autonomy** and **no ambiguity**.

---

## Quick Start Guide

### If You're the Human Developer

Follow these steps to get started:

#### 1. Read the Constitution (10 minutes)

Start with the core principles:
```bash
# Navigate to the framework directory
cd solo agent development framework/framework

# Read the constitution
cat 00-constitution/constitution.md
```

**Why**: The constitution defines the **non-negotiable principles** that govern all development. You must understand and agree with these before proceeding.

#### 2. Understand the Process (15 minutes)

Read the process overview:
```bash
cat 02-methodology/process-overview.md
```

**Why**: This explains the **6-phase, 6-gate process** and how you and agents will work together.

#### 3. Review Standards (20 minutes)

Read the Swift coding standards:
```bash
cat 03-standards/swift/coding-standard.md
```

**Why**: You need to know the **quality bar** for all code.

#### 4. Start Your First Feature

Use the **Ideation Phase** to refine your idea:
```bash
# Create a new feature directory
mkdir -p specs/[YOUR-FEATURE-NAME]

# Copy the idea template
cp 04-templates/idea-template.md specs/[YOUR-FEATURE-NAME]/idea.md

# Fill out the idea document
nano specs/[YOUR-FEATURE-NAME]/idea.md
```

#### 5. Assign Tasks to Agents

Use the **Agent Instructions** to delegate work:
```bash
# Read the spec agent instructions
cat 06-automation/agents/spec-agent.md

# Assign a task to an agent
# Example: "Create a specification for the calendar widget feature. Use the spec template."
```

---

### If You're an Agent

Follow these steps when assigned a task:

#### 1. Load Relevant Documentation

```bash
# Load the constitution
cat 00-constitution/constitution.md

# Load the process overview
cat 02-methodology/process-overview.md

# Load your role-specific instructions
cat 06-automation/agents/[YOUR-ROLE]-agent.md
```

#### 2. Understand the Task

Ask clarifying questions if needed:
- What is the **objective**?
- What are the **inputs**?
- What are the **expected outputs**?
- What are the **constraints**?
- What are the **acceptance criteria**?

#### 3. Use Templates

Always use the provided templates:
```bash
# Copy the appropriate template
cp 04-templates/[TEMPLATE-NAME].md [DESTINATION]

# Fill out the template completely
```

#### 4. Verify Against Checklists

Before submitting work, verify against checklists:
```bash
# Read the relevant checklist
cat 05-checklists/[CHECKLIST-NAME].md

# Check all items
```

#### 5. Request Review

When work is complete:
1. Self-review against checklist
2. Request human review
3. Address feedback
4. Resubmit if needed

---

## Framework Structure Overview

```
framework/
├── README.md                      # Framework documentation
├── GETTING-STARTED.md             # This file
│
├── 00-constitution/               # Core principles
│   └── constitution.md            # Must-read for everyone
│
├── 01-governance/                # Process and decision rules
│   ├── decision-process.md        # How decisions are made
│   ├── roles.md                   # Agent and human roles
│   └── changes.md                 # Change control process
│
├── 02-methodology/               # Development process
│   ├── process-overview.md        # End-to-end workflow
│   ├── phases/                    # Detailed phase documentation
│   │   └── [00-ideation, 01-discovery, 02-specification, 03-design, 04-implementation, 05-verification]/
│   └── checkpoints/               # Gate definitions
│       └── [gate-00.md, gate-01.md, gate-02.md, gate-03.md, gate-04.md, gate-05.md]
│
├── 03-standards/                 # Technical standards
│   ├── swift/                     # Swift-specific standards
│   │   ├── coding-standard.md     # Coding conventions
│   │   ├── api-design.md          # API design guidelines
│   │   └── performance.md         # Performance considerations
│   ├── architecture/              # System architecture
│   │   ├── layering.md            # Layering guidelines
│   │   ├── modularity.md          # Module design
│   │   └── patterns.md            # Design patterns
│   ├── testing/                   # Testing methodology
│   │   ├── unit-testing.md        # Unit test requirements
│   │   ├── integration-testing.md # Integration tests
│   │   └── test-quality.md        # Test quality criteria
│   └── documentation/             # Documentation standards
│       ├── code-comments.md       # Inline documentation
│       └── external-docs.md       # External documentation
│
├── 04-templates/                  # Reusable templates
│   ├── idea-template.md           # Idea document
│   ├── research-template.md       # Research findings
│   ├── spec-template.md           # Feature specification
│   ├── design-template.md         # Technical design
│   ├── plan-template.md           # Implementation plan
│   ├── task-list-template.md      # Task list
│   └── ...
│
├── 05-checklists/                # Quality checklists
│   ├── gate-00-checklist.md       # Gate 0: Idea Approved
│   ├── gate-01-checklist.md       # Gate 1: Discovery Complete
│   ├── gate-02-checklist.md       # Gate 2: Specification Approved
│   ├── gate-03-checklist.md       # Gate 3: Design Approved
│   ├── gate-04-checklist.md       # Gate 4: Implementation Complete
│   ├── gate-05-checklist.md       # Gate 5: Verification Passed
│   ├── spec-review.md             # Specification review
│   ├── design-review.md           # Design review
│   ├── code-review.md             # Code review
│   └── ...
│
├── 06-automation/                # Automation and agents
│   ├── scripts/                   # Useful scripts
│   │   └── validate-spec.py       # Specification validator
│   └── agents/                    # Agent instructions
│       ├── spec-agent.md          # Specification agent
│       ├── design-agent.md        # Design agent (to be created)
│       ├── code-agent.md          # Implementation agent (to be created)
│       └── review-agent.md        # Review agent (to be created)
│
└── 07-examples/                  # Example artifacts
    ├── example-idea.md            # Example idea document
    ├── example-research.md        # Example research findings
    ├── example-spec.md            # Example specification
    └── ...
```

---

## Development Lifecycle

### The 6 Phases

| Phase | Name | Duration | Primary Agent | Human Involvement | Gate |
|-------|------|----------|---------------|-------------------|------|
| 0 | Ideation | 1-2 days | Specification Agent | High (decision-making) | Gate 0 |
| 1 | Discovery | 2-5 days | Specification Agent | Medium (answering questions) | Gate 1 |
| 2 | Specification | 3-7 days | Specification Agent | High (reviews, decisions) | Gate 2 |
| 3 | Design | 3-7 days | Design Agent | Medium (reviews, decisions) | Gate 3 |
| 4 | Implementation | 5-14 days | Implementation Agent | Low (critical reviews only) | Gate 4 |
| 5 | Verification | 2-5 days | Verification Agent | Medium (approvals) | Gate 5 |

### The 6 Gates

| Gate | Name | Criteria | Reviewer | Next Phase |
|------|------|----------|----------|------------|
| 0 | Idea Approved | Idea is clear, feasible, aligned | Human | Discovery |
| 1 | Discovery Complete | Research complete, all questions answered | Human | Specification |
| 2 | Specification Approved | Spec is complete, unambiguous, approved | Human | Design |
| 3 | Design Approved | Design is complete, feasible, approved | Human | Implementation |
| 4 | Implementation Complete | Code complete, tested, reviewed | Human + Agent | Verification |
| 5 | Verification Passed | All tests pass, docs complete | Human | Production |

**Critical Rule**: **You cannot proceed to the next phase without passing the current gate.**

---

## Your First Feature: Step-by-Step

Let's walk through creating a new feature from scratch.

### Step 1: Ideation (Phase 0)

**Objective**: Turn your idea into a well-defined concept.

**Actions**:

1. Create a feature directory:
   ```bash
   mkdir -p specs/006-calendar-widget
   ```

2. Copy the idea template:
   ```bash
   cp 04-templates/idea-template.md specs/006-calendar-widget/idea.md
   ```

3. Fill out `idea.md`:
   - Elevator pitch
   - Problem statement
   - Proposed solution
   - Goals and success criteria
   - Scope (In Scope / Out of Scope)
   - Alignment with project goals
   - Feasibility assessment
   - Risks
   - Alternatives considered

4. Submit for **Gate 0 review**

**Gate 0 Checklist**:
- [ ] Idea document exists
- [ ] Feasibility assessment exists
- [ ] Elevator pitch is clear
- [ ] Problem statement is defined
- [ ] Proposed solution is described
- [ ] Goals are defined
- [ ] Scope is bounded
- [ ] Alignment is addressed
- [ ] Feasibility is assessed
- [ ] Risks are identified
- [ ] Alternatives are considered
- [ ] **Open Questions is EMPTY**

---

### Step 2: Discovery (Phase 1)

**Objective**: Gather all information needed to write a complete specification.

**Actions**:

1. Copy the research template:
   ```bash
   cp 04-templates/research-template.md specs/006-calendar-widget/research.md
   ```

2. Conduct research:
   - Domain research (calendar APIs, data structures)
   - Technology research (EventKit on macOS)
   - Constraint research (privacy, permissions)
   - Risk assessment

3. Document findings in `research.md`:
   - Executive summary
   - Domain research findings
   - Technology research findings
   - Constraint analysis
   - Risk assessment
   - Open questions (if any)
   - Recommendations
   - Sources

4. For each open question:
   - Present options to human
   - Wait for human decision
   - Document the decision

5. Submit for **Gate 1 review**

**Gate 1 Checklist**:
- [ ] Research document exists
- [ ] Domain research is complete
- [ ] Technology research is complete
- [ ] Constraints are identified
- [ ] Risks are assessed
- [ ] Recommendations are provided
- [ ] **All open questions are resolved**

---

### Step 3: Specification (Phase 2)

**Objective**: Define **what** the feature should do.

**Actions**:

1. Copy the spec template:
   ```bash
   cp 04-templates/spec-template.md specs/006-calendar-widget/spec.md
   ```

2. Create user stories:
   - US1: View today's calendar events (P1)
   - US2: View upcoming events (P2)
   - US3: Handle permission denial (P1)
   - Each with acceptance scenarios

3. Define requirements:
   - Functional requirements (FR-001, FR-002, etc.)
   - Non-functional requirements (NFR-001, NFR-002, etc.)

4. Define edge cases:
   - EC-001: No calendar permission
   - EC-002: No events in selected range
   - EC-003: Too many events to display

5. Define success criteria:
   - SC-001: Events load within 1 second
   - SC-002: Permission prompt appears if not granted

6. Document:
   - Key entities (if applicable)
   - Constraints
   - Assumptions
   - Dependencies

7. **Ensure Open Questions section is EMPTY**

8. Submit for **Gate 2 review**

**Gate 2 Checklist**:
- [ ] Executive Summary is clear and complete
- [ ] Background section references previous work
- [ ] At least one User Story with Acceptance Scenarios exists
- [ ] Edge Cases are identified and addressed
- [ ] Functional Requirements (FR-*) are complete and testable
- [ ] Non-Functional Requirements (NFR-*) are defined
- [ ] Key Entities are defined (if applicable)
- [ ] Constraints are listed
- [ ] Assumptions are documented and justified
- [ ] Dependencies are identified
- [ ] Success Criteria (SC-*) are measurable
- [ ] **Open Questions section is EMPTY**
- [ ] Decisions are recorded
- [ ] Test Strategy is defined
- [ ] Documentation Requirements are listed

---

### Step 4: Design (Phase 3)

**Objective**: Define **how** the feature will be built.

**Actions**:

1. Copy the design template:
   ```bash
   cp 04-templates/design-template.md specs/006-calendar-widget/design.md
   ```

2. Design the architecture:
   - Module decomposition
   - Data model
   - API contracts
   - Technology selection

3. Create:
   - Architecture diagram
   - Data model document
   - Module specifications

4. Submit for **Gate 3 review**

---

### Step 5: Implementation (Phase 4)

**Objective**: Build the feature.

**Actions**:

1. Create implementation plan:
   ```bash
   cp 04-templates/plan-template.md specs/006-calendar-widget/plan.md
   ```

2. Create task list:
   ```bash
   cp 04-templates/task-list-template.md specs/006-calendar-widget/tasks.md
   ```

3. Implement:
   - Follow coding standards
   - Write unit tests
   - Write integration tests
   - Request code reviews

4. Submit for **Gate 4 review**

---

### Step 6: Verification (Phase 5)

**Objective**: Verify the feature works correctly.

**Actions**:

1. Run acceptance tests
2. Run performance tests
3. Run security tests
4. Review documentation
5. Prepare deployment
6. Submit for **Gate 5 review**

---

## Working with Agents

### Assigning Tasks to Agents

When you assign a task to an agent, provide:

```markdown
**Task**: [Brief description]

**Objective**: [What needs to be accomplished]

**Input**:
- [List of inputs, documents, or data]

**Output**:
- [List of deliverables]

**Constraints**:
- [List of constraints to follow]
- [Reference to relevant standards]

**Acceptance Criteria**:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

**Due**: [Date/Time]

**Notes**: [Any additional context]
```

**Example**:
```markdown
**Task**: Create specification for calendar widget

**Objective**: Create a complete, unambiguous specification for the calendar widget feature that passes Gate 2.

**Input**:
- Idea document: `specs/006-calendar-widget/idea.md`
- Research findings: `specs/006-calendar-widget/research.md`
- Spec template: `04-templates/spec-template.md`

**Output**:
- Complete spec.md in `specs/006-calendar-widget/spec.md`

**Constraints**:
- Follow spec template exactly
- All acceptance criteria must be testable
- Open Questions section must be empty
- Follow Constitution Principle V (Complete Specification Before Implementation)

**Acceptance Criteria**:
- [ ] All sections of spec template are filled out
- [ ] At least 2 user stories with acceptance scenarios
- [ ] All functional requirements are testable
- [ ] All edge cases are identified
- [ ] Open Questions section is empty
- [ ] Passes Gate 2 checklist

**Due**: End of day tomorrow

**Notes**: Focus on the core functionality first (viewing today's events). Defer advanced features like recurrence handling to future slices.
```

### Reviewing Agent Work

When reviewing agent work:

1. **Check against checklist**: Verify all checklist items are complete
2. **Check for completeness**: No sections are empty or incomplete
3. **Check for quality**: Work meets quality standards
4. **Check for alignment**: Work aligns with project goals and constitution
5. **Provide specific feedback**: Be clear about what needs to change

**Feedback Template**:
```markdown
**Overall Assessment**: [Pass | Pass with Changes | Fail]

**Strengths**:
- [What was done well]
- [What was done well]

**Issues**:
- [ ] **Critical**: [Description] - [Must fix before approval]
- [ ] **Major**: [Description] - [Should fix before approval]
- [ ] **Minor**: [Description] - [Nice to fix]

**Specific Feedback**:
- [Section]: [Feedback]
- [Section]: [Feedback]

**Next Steps**:
- [ ] Action 1
- [ ] Action 2
```

---

## Common Questions

### Q: What if I don't have time to do all this documentation?

**A**: The framework is designed to **save you time** in the long run. While documentation takes time upfront, it:
- **Prevents rework** from unclear requirements
- **Enables agents** to work more independently
- **Improves quality** by catching issues early
- **Makes maintenance easier**

**Tip**: Start with the **minimum viable documentation** (spec + design) and add more as needed.

### Q: What if my feature is very simple?

**A**: Even simple features benefit from the framework. However, you can:
- Combine phases (e.g., do Discovery and Specification together)
- Use **lightweight templates** (simpler versions of the full templates)
- Skip some sections if truly not applicable

**But**: Never skip **Gate 2** (Specification Approved). This is critical for quality.

### Q: What if I disagree with the framework?

**A**: The framework can be **amended** through the change process:
1. Propose a change with reasoning
2. Review by human and agents
3. Approve and update

**However**: Don't bypass the framework **without approval**. This leads to inconsistency and quality issues.

### Q: How do I handle urgent features?

**A**: For truly urgent features:
1. **Defer non-critical documentation** (but document decisions)
2. **Use lightweight versions** of templates
3. **Still pass all gates** (even if quickly)
4. **Document properly after the fact**

**Warning**: Skipping the framework **increases risk** of bugs, rework, and technical debt.

### Q: How do I know if I'm doing this right?

**A**: You're doing it right if:
- ✅ Features are **completed on time**
- ✅ Features have **few bugs**
- ✅ Features **meet user needs**
- ✅ Code is **maintainable**
- ✅ Agents can **work independently**
- ✅ You're **not constantly putting out fires**

If you're **not seeing these results**, review the framework and your process.

---

## Troubleshooting

### Problem: Gate keeps failing

**Symptoms**: Same feedback repeated across multiple gate submissions

**Causes**:
- Agent not understanding requirements
- Human not providing clear feedback
- Standards are unclear

**Solutions**:
- **For agents**: Ask for **more specific feedback**
- **For humans**: Provide **clearer acceptance criteria**
- **For both**: **Improve templates and checklists**

### Problem: Taking too long

**Symptoms**: Features taking longer than expected

**Causes**:
- Scope creep (feature growing)
- Over-engineering
- Inefficient process
- Agent inefficiency

**Solutions**:
- **Narrow scope**: Break into smaller features
- **Simplify**: Follow Constitution Principle III (Simplicity Over Abstraction)
- **Streamline**: Identify process bottlenecks
- **Train agents**: Improve agent instructions

### Problem: Quality issues in production

**Symptoms**: Bugs, crashes, or poor performance in production

**Causes**:
- Incomplete specifications
- Insufficient testing
- Skipping gates
- Poor code reviews

**Solutions**:
- **Strengthen Gate 2**: Ensure specifications are complete
- **Improve testing**: Add more test coverage
- **Enforce gates**: Never skip gates
- **Better reviews**: Improve code review process

---

## Next Steps

Now that you've read this guide, here's what to do next:

### For Human Developers:

1. **Read the Constitution** (`00-constitution/constitution.md`)
2. **Read the Process Overview** (`02-methodology/process-overview.md`)
3. **Read the Swift Coding Standards** (`03-standards/swift/coding-standard.md`)
4. **Start your first feature** using the step-by-step guide above
5. **Assign tasks to agents** using the task template

### For Agents:

1. **Read the Constitution** (`00-constitution/constitution.md`)
2. **Read your role-specific instructions** (`06-automation/agents/[YOUR-ROLE]-agent.md`)
3. **Read the Process Overview** (`02-methodology/process-overview.md`)
4. **Wait for task assignment** from the human developer

### For Everyone:

- **Ask questions** if anything is unclear
- **Provide feedback** on the framework
- **Suggest improvements** as you use it
- **Document lessons learned** after each feature

---

## Support

If you need help:

1. **Read the documentation** (this framework)
2. **Ask the human developer** (for agents)
3. **Review past examples** in `07-examples/`
4. **Consult the constitution** for principles

---

## Appendix: Framework Evolution

This framework will **evolve over time** based on:

1. **Lessons learned** from each completed feature
2. **Feedback** from human developers and agents
3. **Changes in technology** (Swift updates, new platforms, etc.)
4. **Changes in project needs** (new requirements, constraints, etc.)

**Change Process**:
1. Identify improvement opportunity
2. Propose change with reasoning
3. Review by human and agents
4. Approve and implement
5. Document the change
6. Communicate to all stakeholders

---

## Appendix: Glossary

| Term | Definition |
|------|------------|
| **Agent** | An AI assistant that executes tasks |
| **Constitution** | Core principles that govern development |
| **Gate** | Quality checkpoint between phases |
| **Phase** | A stage in the development process |
| **Specification** | Document defining what a feature should do |
| **Template** | Reusable document structure |
| **Checklist** | List of criteria for completeness |
| **User Story** | Description of a feature from user perspective |
| **Acceptance Criteria** | Conditions that must be met for a user story |
| **Functional Requirement** | What the system must do |
| **Non-Functional Requirement** | How the system must do it (performance, security, etc.) |
| **Edge Case** | Unusual or extreme scenario |
| **Success Criterion** | Measurable outcome of a feature |

---

## Final Words

This framework is designed to **empower you** to build **high-quality software** with the help of agents. It may seem **overwhelming at first**, but with practice, it will become **second nature**.

**Remember**: The goal is **not to follow the framework blindly**, but to **use it as a tool** to build better software, faster, with fewer issues.

**Good luck, and happy building!** 🚀
