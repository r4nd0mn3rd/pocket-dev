# Templates

> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This directory contains **all templates** used in the Solo Agent Development Framework. Templates provide consistent structure and ensure that all artifacts follow the same format and include all required information.

**Purpose**:
- Ensure consistency across all framework documents
- Provide clear guidance on what information to include
- Reduce effort required to create new artifacts
- Ensure compliance with Constitution Principles

---

## Template Types

### 1. Phase Templates

Templates for each phase of the development process:

| Template | Phase | Purpose |
|----------|-------|---------|
| [idea-template.md](./idea-template.md) | Phase 0 - Ideation | Capture initial feature idea and goals |
| [research-template.md](./research-template.md) | Phase 1 - Discovery | Document research findings and validation |
| [constraints-template.md](./constraints-template.md) | Phase 1 - Discovery | Identify technical and business constraints |
| [risks-template.md](./risks-template.md) | Phase 1 - Discovery | Identify and assess risks |
| [spec-template.md](./spec-template.md) | Phase 2 - Specification | Define detailed feature requirements |
| [design-template.md](./design-template.md) | Phase 3 - Design | Document architecture and component design |
| [plan-template.md](./plan-template.md) | Phase 3 - Design | Create implementation plan and task breakdown |

---

### 2. Phase 4 Templates

Templates for implementation phase:

| Template | Purpose |
|----------|---------|
| [task-list-template.md](./task-list-template.md) | Track implementation tasks and progress |

---

### 3. Gate Review Templates

Templates for gate reviews:

| Template | Gate | Purpose |
|----------|------|---------|
| [gate-review-template.md](./gate-review-template.md) | All Gates | Standard format for gate review submissions |

---

## Template Structure

All templates follow a **consistent structure**:

### Required Sections

1. **Header Block**
   - Document title
   - Template version
   - Document version
   - Status
   - Last updated date
   - Owner
   - Phase and gate information

2. **Overview**
   - Brief description of the document's purpose

3. **Main Content**
   - Phase-specific sections (varies by template)
   - Required fields and information

4. **Constitution Alignment**
   - Checklist of Constitution Principles
   - Compliance status for each principle

5. **Open Questions**
   - List of unresolved questions
   - Must be empty for gate submissions

6. **Next Steps**
   - Immediate actions
   - Follow-up actions

7. **Related Documents**
   - Links to related framework documents

8. **Document History**
   - Version history with changes

---

## Template Usage Guidelines

### When to Use Templates

✅ **Always use templates** when creating:
- New feature documentation
- Phase artifacts
- Gate submissions
- Framework documentation

❌ **Do NOT**:
- Modify template structure without approval
- Skip required sections
- Submit documents with open questions (for gates)

### How to Use Templates

1. **Copy the template** to the appropriate location
2. **Rename** the file to match the artifact (e.g., `spec.md`)
3. **Fill in all required fields** in the header block
4. **Complete all sections** with accurate information
5. **Remove placeholder text** and examples
6. **Verify Constitution alignment**
7. **Review for completeness** before submission

### Template Customization

**Minor customization is allowed**:
- Adding project-specific sections
- Reordering sections for clarity
- Adding examples or diagrams

**Major customization requires approval**:
- Removing required sections
- Changing template structure
- Modifying required fields

---

## Constitution Alignment

All templates are designed to **ensure Constitution alignment**:

| Principle | How Templates Support |
|-----------|----------------------|
| **I. Framework** | Templates follow framework patterns and structure |
| **II. Tested Logic** | Templates include testing requirements |
| **III. Simplicity** | Templates are simple and focused |
| **IV. Testing** | Templates ensure testing is documented |
| **V. Proof of Concepts** | Research template validates approaches |
| **VI. Intuitive** | Templates are intuitive and easy to use |
| **VII. Error Handling** | Templates include error handling sections |
| **VIII. Privacy** | Templates include privacy considerations |
| **IX. Local-First** | Templates include offline considerations |
| **X. Performance** | Templates include performance requirements |
| **A. Tech Stack** | Templates use Swift/SwiftUI/SwiftData conventions |
| **B. Integration** | Templates include integration requirements |
| **C.1 Concurrency** | Templates include concurrency considerations |
| **C.2 Threading** | Templates include threading considerations |
| **D.1 No Secrets** | Templates remind to not hardcode secrets |
| **D.2 HTTPS** | Templates require HTTPS for network calls |
| **D.3 Encryption** | Templates include encryption requirements |

---

## Template Maintenance

### Version Control

- Each template has a **version number** in the header
- Template versions follow **Semantic Versioning (MAJOR.MINOR.PATCH)**
- Version history is maintained in the template's **Document History** section

### Update Process

1. **Identify needed changes**
2. **Create change request** (if significant)
3. **Update template** with changes
4. **Update version number**
5. **Add entry to version history**
6. **Review changes** with team
7. **Announce changes** to all users

### Deprecation Process

1. **Mark as deprecated** in header
2. **Add deprecation notice** at top of template
3. **Create replacement template** (if applicable)
4. **Update documentation** to reference new template
5. **Remove deprecated template** after transition period

---

## Template Quality Standards

### Content Standards

✅ **Do**:
- Use clear, concise language
- Include examples where helpful
- Use consistent formatting
- Include all required sections
- Ensure Constitution alignment

❌ **Don't**:
- Use ambiguous language
- Include unnecessary information
- Use inconsistent formatting
- Skip required sections
- Ignore Constitution Principles

### Formatting Standards

- Use Markdown for all templates
- Use consistent heading hierarchy
- Use consistent list formatting
- Use code blocks for examples
- Use tables for structured data
- Include metadata in header block

---

## Template Index

### By Phase

| Phase | Templates |
|-------|-----------|
| Phase 0 | idea-template.md |
| Phase 1 | research-template.md, constraints-template.md, risks-template.md |
| Phase 2 | spec-template.md |
| Phase 3 | design-template.md, plan-template.md |
| Phase 4 | task-list-template.md |
| Phase 5 | (Uses previous templates for verification) |

### By Category

| Category | Templates |
|----------|-----------|
| Ideation | idea-template.md |
| Research | research-template.md |
| Constraints | constraints-template.md |
| Risks | risks-template.md |
| Specification | spec-template.md |
| Design | design-template.md, plan-template.md |
| Implementation | task-list-template.md |
| Review | gate-review-template.md |

---

## Quick Reference

### Template Selection Guide

| Need | Template to Use |
|------|-----------------|
| Starting a new feature | idea-template.md |
| Researching a feature | research-template.md |
| Identifying constraints | constraints-template.md |
| Assessing risks | risks-template.md |
| Defining requirements | spec-template.md |
| Designing architecture | design-template.md |
| Planning implementation | plan-template.md |
| Tracking tasks | task-list-template.md |
| Submitting for gate review | gate-review-template.md |

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Template not found | Check template is in correct directory |
| Template outdated | Check for newer version |
| Template doesn't fit needs | Customize template (minor changes only) |
| Missing required fields | Fill in all required fields in header |
| Constitution alignment unclear | Review Constitution Principles |

### Getting Help

1. **Check this README** for template information
2. **Review the Constitution** for Principles
3. **Check examples** in /07-examples/
4. **Ask the Solo Developer** for clarification
5. **Consult the Review Agent** for feedback

---

## Related Documents

- [Constitution](../00-constitution/constitution.md)
- [Process Overview](../02-methodology/process-overview.md)
- [Documentation Standards](../03-standards/documentation/README.md)
- [Checklists](../05-checklists/README.md)
- [Examples](../07-examples/README.md)
