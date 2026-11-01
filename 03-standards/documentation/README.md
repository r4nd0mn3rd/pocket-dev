# Documentation Standards

> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This document defines the **documentation standards** for all artifacts produced using the Solo Agent Development Framework. These standards ensure that all documentation is **consistent, comprehensive, maintainable, and aligned with the Constitution Principles**.

**Key Principles**:
1. **Constitution Alignment**: All documentation must comply with Constitution Principles
2. **Clarity**: Documentation must be clear and easy to understand
3. **Completeness**: Documentation must be complete and comprehensive
4. **Consistency**: Documentation must be consistent across all artifacts
5. **Maintainability**: Documentation must be easy to maintain
6. **Accessibility**: Documentation must be accessible to all stakeholders
7. **Actionability**: Documentation must be actionable and practical

---

## Constitution Principle VI: Intuitive Solutions

**Requirement**: Solutions should be intuitive and obvious

**Documentation Implications**:
- [ ] Documentation must be intuitive
- [ ] Documentation must be easy to navigate
- [ ] Documentation must be self-explanatory
- [ ] Documentation must use familiar patterns
- [ ] Documentation must be consistent

**Intuitive Documentation Checklist**:
- [ ] Documentation uses familiar structure and format
- [ ] Navigation is intuitive
- [ ] Information is easy to find
- [ ] Language is clear and unambiguous
- [ ] Examples are provided where helpful

---

## Documentation Types

### 1. Framework Documentation

**Purpose**: Document the framework itself

**Includes**:
- Constitution
- Governance documents
- Methodology documents
- Standards documents
- Templates
- Checklists
- Examples

**Audience**: Framework maintainers, Solo Developer, Agents

**Standards**:
- [ ] Always up to date
- [ ] Consistent with each other
- [ ] Clear and unambiguous
- [ ] Complete and comprehensive

---

### 2. Feature Documentation

**Purpose**: Document individual features

**Includes**:
- Idea document
- Research document
- Constraints document
- Risks document
- Specification document
- Design document
- Implementation plan
- Task list
- Test documents

**Audience**: Solo Developer, Agents, Stakeholders

**Standards**:
- [ ] Follows defined templates
- [ ] Consistent with other features
- [ ] Complete for the phase
- [ ] Aligned with Constitution

---

### 3. Code Documentation

**Purpose**: Document code and implementation

**Includes**:
- Code comments
- API documentation
- README files
- CHANGELOG files
- CONTRIBUTING files

**Audience**: Developers, Reviewers

**Standards**:
- [ ] Follows language conventions
- [ ] Consistent with code style
- [ ] Accurate and up to date
- [ ] Useful and practical

---

### 4. Process Documentation

**Purpose**: Document processes and procedures

**Includes**:
- Process overviews
- Phase descriptions
- Gate definitions
- Checklists
- Guidelines

**Audience**: Solo Developer, Agents

**Standards**:
- [ ] Clear and unambiguous
- [ ] Complete and comprehensive
- [ ] Actionable and practical
- [ ] Consistent with framework

---

## Documentation Structure

### Directory Structure

```
FeatureName/
├── Docs/
│   ├── 00-idea/
│   │   └── idea.md
│   ├── 01-discovery/
│   │   ├── research.md
│   │   ├── constraints.md
│   │   └── risks.md
│   ├── 02-specification/
│   │   └── spec.md
│   ├── 03-design/
│   │   ├── design.md
│   │   └── plan.md
│   ├── 04-implementation/
│   │   └── task-list.md
│   ├── 05-verification/
│   │   └── verification.md
│   └── README.md
├── Sources/
│   └── ...
├── Tests/
│   └── ...
└── Package.swift
```

### Documentation Index

**File**: `Docs/README.md` or `Docs/index.md`

**Format**:
```markdown
# FeatureName Documentation

> **Version**: 1.0.0
> **Last Updated**: {YYYY-MM-DD}
> **Owner**: {Name}

## Overview
{Brief description of the feature}

## Documentation Index

### Phase 0: Ideation
- [Idea Document](./00-idea/idea.md)

### Phase 1: Discovery
- [Research Document](./01-discovery/research.md)
- [Constraints Document](./01-discovery/constraints.md)
- [Risks Document](./01-discovery/risks.md)

### Phase 2: Specification
- [Specification Document](./02-specification/spec.md)

### Phase 3: Design
- [Design Document](./03-design/design.md)
- [Implementation Plan](./03-design/plan.md)

### Phase 4: Implementation
- [Task List](./04-implementation/task-list.md)

### Phase 5: Verification
- [Verification Document](./05-verification/verification.md)

## Quick Links
- [Spec Document](./02-specification/spec.md)
- [Design Document](./03-design/design.md)
- [Task List](./04-implementation/task-list.md)

## Status
- [x] Phase 0: Ideation
- [x] Phase 1: Discovery
- [x] Phase 2: Specification
- [ ] Phase 3: Design
- [ ] Phase 4: Implementation
- [ ] Phase 5: Verification

## Constitution Compliance
- [x] Principle I (Framework)
- [x] Principle II (Tested Logic)
- [x] Principle III (Simplicity)
- [ ] ... (all principles)
```

---

## Documentation Standards

### General Standards

**All Documentation Must**:
- [ ] Follow the defined template for that document type
- [ ] Use consistent formatting and style
- [ ] Use clear and unambiguous language
- [ ] Be complete and comprehensive
- [ ] Be accurate and up to date
- [ ] Be aligned with Constitution Principles
- [ ] Be aligned with other documentation
- [ ] Use proper grammar and spelling
- [ ] Use consistent terminology

---

### Formatting Standards

#### Headers

```markdown
# Level 1 (Title)

## Level 2 (Section)

### Level 3 (Subsection)

#### Level 4 (Sub-subsection)
```

**Rules**:
- [ ] Use ATX-style headers (`# Header`)
- [ ] Always include space after `#`
- [ ] Use consistent capitalization
- [ ] Use title case for level 1 headers
- [ ] Use sentence case for level 2+ headers
- [ ] Don't skip header levels

#### Lists

```markdown
- Unordered list item
- Another unordered list item
  - Nested unordered list item

1. Ordered list item
2. Another ordered list item
   1. Nested ordered list item

- [ ] Task list item (unchecked)
- [x] Task list item (checked)
```

**Rules**:
- [ ] Use `-` for unordered lists
- [ ] Use `1.` for ordered lists
- [ ] Use consistent indentation (2 spaces)
- [ ] Use task lists for actionable items

#### Code Blocks

````markdown
```swift
// Swift code
func hello() {
    print("Hello")
}
```

```bash
# Bash command
echo "Hello"
```

```
Plain text
```
````

**Rules**:
- [ ] Use fenced code blocks (```)
- [ ] Specify language for syntax highlighting
- [ ] Use consistent indentation
- [ ] Keep code blocks short

#### Links

```markdown
[Link text](url)
[Relative link](./path/to/file.md)
[Absolute link](/path/to/file.md)
[Web link](https://example.com)
```

**Rules**:
- [ ] Use descriptive link text
- [ ] Prefer relative links within repository
- [ ] Verify all links work
- [ ] Update links when files move

#### Images

```markdown
![Alt text](path/to/image.png)
![Alt text](path/to/image.png "Optional title")
```

**Rules**:
- [ ] Always include alt text
- [ ] Keep images in appropriate directory
- [ ] Use relative paths
- [ ] Optimize image size

#### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |
```

**Rules**:
- [ ] Use pipes for column separators
- [ ] Use dashes for header separator
- [ ] Align columns neatly
- [ ] Keep tables simple

#### Blockquotes

```markdown
> This is a blockquote
> 
> It can span multiple paragraphs

> - It can contain lists
> - And other elements
```

**Rules**:
- [ ] Use `>` for each line
- [ ] Leave space between paragraphs
- [ ] Use for quotes, notes, and emphasis

#### Horizontal Rules

```markdown
---

***

___
```

**Rules**:
- [ ] Use `---` for consistency
- [ ] Use to separate sections
- [ ] Don't overuse

---

### Content Standards

#### Document Metadata

**Required at the top of every document**:
```markdown
# Document Title

> **Document Version**: 1.0.0
> **Status**: Active / Draft / Deprecated
> **Last Updated**: 2026-10-30
> **Owner**: {Name or Team}

---
```

**Status Values**:
- `Active`: Document is current and in use
- `Draft`: Document is in progress
- `Review`: Document is under review
- `Deprecated`: Document is no longer used
- `Archived`: Document is archived

#### Versioning

**Version Format**: `MAJOR.MINOR.PATCH`
- `MAJOR`: Breaking changes
- `MINOR`: Backwards-compatible changes
- `PATCH`: Bug fixes and minor updates

**Version History**:
```markdown
## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-10-30 | Tom | Initial version |
| 1.0.1 | 2026-10-31 | Tom | Fixed typos |
| 1.1.0 | 2026-11-01 | Tom | Added new section |
```

---

#### Cross-References

**When Referencing Other Documents**:
- [ ] Use relative paths
- [ ] Use descriptive link text
- [ ] Verify links work
- [ ] Update when documents move

**Example**:
```markdown
See [Constitution](../../00-constitution/constitution.md) for framework principles.

For more details, see [Specification Document](./02-specification/spec.md).
```

---

## Documentation Templates

### Template Structure

All templates follow this structure:

```markdown
# {Document Type}

> **Template Version**: 1.0.0
> **Document Version**: 1.0.0
> **Status**: {Active / Draft / Review / Deprecated / Archived}
> **Last Updated**: {YYYY-MM-DD}
> **Owner**: {Name or Team}

---

## Overview

{Brief description of the document purpose}

---

## {Section 1}

{Content}

---

## {Section 2}

{Content}

---

## Related Documents

- [Related Document 1](../path/to/document1.md)
- [Related Document 2](../path/to/document2.md)
- [Related Document 3](../path/to/document3.md)

---

## Appendix

{Additional information, references, etc.}
```

---

### Template Requirements

**Every Template Must Include**:
1. Clear document purpose
2. Required sections
3. Optional sections
4. Examples and guidance
5. Related documents
6. Constitution alignment notes

**Every Template Must**:
- [ ] Be consistent with other templates
- [ ] Follow documentation standards
- [ ] Be easy to use
- [ ] Produce consistent output

---

## Documentation Lifecycle

### Creation

**Process**:
1. Identify documentation need
2. Select appropriate template
3. Create document following template
4. Add initial content
5. Review for completeness
6. Submit for review

**Requirements**:
- [ ] Follow template exactly
- [ ] Complete all required sections
- [ ] Use consistent formatting
- [ ] Use clear language
- [ ] Align with Constitution

### Review

**Process**:
1. Review Agent reviews documentation
2. Check for completeness
3. Check for consistency
4. Check for Constitution alignment
5. Provide feedback
6. Request changes if needed
7. Approve if acceptable

**Review Checklist**:
- [ ] All required sections are present
- [ ] Content is complete
- [ ] Formatting is consistent
- [ ] Language is clear
- [ ] Constitution alignment is verified
- [ ] Cross-references are correct
- [ ] Examples are provided where helpful

### Approval

**Process**:
1. Solo Developer reviews approved documentation
2. Verifies Constitution alignment
3. Verifies completeness
4. Verifies quality
5. Approves or rejects

**Approval Criteria**:
- [ ] Documentation is complete
- [ ] Documentation is consistent
- [ ] Documentation is aligned with Constitution
- [ ] Documentation is of high quality
- [ ] All feedback has been addressed

### Maintenance

**Process**:
1. Update documentation when code changes
2. Update documentation when requirements change
3. Update documentation when Constitution changes
4. Review documentation periodically
5. Archive deprecated documentation

**Maintenance Rules**:
- [ ] Update documentation with code changes
- [ ] Keep documentation up to date
- [ ] Review documentation regularly
- [ ] Archive, don't delete
- [ ] Maintain version history

---

## Documentation Quality Checklist

### Content Quality

- [ ] Content is accurate
- [ ] Content is complete
- [ ] Content is clear
- [ ] Content is concise
- [ ] Content is well-organized
- [ ] Content is actionable
- [ ] Content is up to date

### Formatting Quality

- [ ] Formatting is consistent
- [ ] Headers are used correctly
- [ ] Lists are used correctly
- [ ] Code blocks are formatted correctly
- [ ] Links work correctly
- [ ] Images have alt text
- [ ] Tables are formatted correctly

### Language Quality

- [ ] Grammar is correct
- [ ] Spelling is correct
- [ ] Language is clear
- [ ] Language is unambiguous
- [ ] Terminology is consistent
- [ ] Tone is appropriate

### Structure Quality

- [ ] Document has clear structure
- [ ] Sections are logical
- [ ] Navigation is easy
- [ ] Information is easy to find
- [ ] Related information is grouped
- [ ] Document is not too long

---

## Constitution Alignment Documentation

### Principle I: Framework for Agent Development

**Documentation Requirements**:
- [ ] All documentation follows framework patterns
- [ ] All documentation uses framework templates
- [ ] All documentation is consistent with framework
- [ ] Framework is documented completely

---

### Principle II: Business Logic Must Be Tested

**Documentation Requirements**:
- [ ] Test documentation is comprehensive
- [ ] Test documentation is clear
- [ ] Test documentation is actionable
- [ ] Test coverage is documented

---

### Principle III: Simplicity Over Complexity

**Documentation Requirements**:
- [ ] Documentation is simple and clear
- [ ] Documentation doesn't add unnecessary complexity
- [ ] Documentation is easy to understand
- [ ] Documentation is concise

---

### Principle IV: Comprehensive Testing

**Documentation Requirements**:
- [ ] Test documentation is comprehensive
- [ ] Test results are documented
- [ ] Test coverage is documented
- [ ] Test quality is documented

---

### Principle V: Proof of Concepts for Large Changes

**Documentation Requirements**:
- [ ] Proof of concept documentation is provided
- [ ] Architecture decisions are documented
- [ ] Feasibility is documented
- [ ] Lessons learned are documented

---

### Principle VI: Intuitive Solutions

**Documentation Requirements**:
- [ ] Documentation is intuitive
- [ ] Documentation is easy to navigate
- [ ] Documentation uses familiar patterns
- [ ] Documentation is self-explanatory

---

### Principle VII: Comprehensive Error Handling

**Documentation Requirements**:
- [ ] Error handling is documented
- [ ] Error cases are documented
- [ ] Error recovery is documented
- [ ] Error messages are documented

---

### Principle VIII: Privacy by Design

**Documentation Requirements**:
- [ ] Privacy considerations are documented
- [ ] Data protection is documented
- [ ] Privacy compliance is documented
- [ ] Security measures are documented

---

### Principle IX: Local-First Development

**Documentation Requirements**:
- [ ] Local development is documented
- [ ] Local testing is documented
- [ ] Offline functionality is documented
- [ ] Local data is documented

---

### Principle X: Performance First

**Documentation Requirements**:
- [ ] Performance requirements are documented
- [ ] Performance metrics are documented
- [ ] Performance testing is documented
- [ ] Performance optimization is documented

---

### Principle A: Tech Stack

**Documentation Requirements**:
- [ ] Tech stack is documented
- [ ] Swift-specific conventions are documented
- [ ] SwiftUI-specific conventions are documented
- [ ] SwiftData-specific conventions are documented

---

### Principle B: Integration

**Documentation Requirements**:
- [ ] Integration points are documented
- [ ] Integration requirements are documented
- [ ] Integration testing is documented
- [ ] Integration issues are documented

---

### Principle C.1: Concurrency

**Documentation Requirements**:
- [ ] Concurrency considerations are documented
- [ ] Thread safety is documented
- [ ] Race conditions are documented
- [ ] Concurrency testing is documented

---

### Principle C.2: Threading

**Documentation Requirements**:
- [ ] Threading considerations are documented
- [ ] Main thread usage is documented
- [ ] Background thread usage is documented
- [ ] Threading testing is documented

---

### Principle D.1: No Secrets in Code

**Documentation Requirements**:
- [ ] Secrets management is documented
- [ ] Secrets policies are documented
- [ ] Secrets scanning is documented
- [ ] Secrets rotation is documented

---

### Principle D.2: HTTPS for All Network Requests

**Documentation Requirements**:
- [ ] HTTPS usage is documented
- [ ] Certificate validation is documented
- [ ] TLS configuration is documented
- [ ] Security testing is documented

---

### Principle D.3: Encrypt Data at Rest

**Documentation Requirements**:
- [ ] Encryption is documented
- [ ] Encryption configuration is documented
- [ ] Key management is documented
- [ ] Security testing is documented

---

## Documentation Tools

### Recommended Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| VS Code | Markdown editing | Extensions for linting, preview |
| Typora | Markdown editing | Live preview, WYSIWYG |
| Markdown Lint | Linting | Enforce formatting rules |
| Prettier | Formatting | Auto-format markdown |
| GitHub | Hosting | Markdown preview, issue tracking |
| GitLab | Hosting | Markdown preview, issue tracking |

### VS Code Extensions

| Extension | Purpose |
|-----------|---------|
| Markdown All in One | Markdown editing |
| Markdown Preview Enhanced | Enhanced preview |
| Markdown Lint | Linting |
| Prettier | Formatting |
| Code Spell Checker | Spell checking |

---

## Documentation Best Practices

### General Best Practices

✅ **Do**:
- Write documentation as you code
- Keep documentation up to date
- Follow templates and standards
- Use clear and concise language
- Use examples where helpful
- Use visuals where helpful
- Review documentation regularly
- Get feedback on documentation

❌ **Don't**:
- Write documentation after coding
- Let documentation get out of date
- Ignore templates and standards
- Use unclear or ambiguous language
- Write walls of text
- Skip reviews
- Ignore feedback

### Specific Best Practices

**For Specification Documents**:
- [ ] Be specific and unambiguous
- [ ] Define clear requirements
- [ ] Include acceptance criteria
- [ ] Identify dependencies
- [ ] Define success criteria

**For Design Documents**:
- [ ] Include architecture diagrams
- [ ] Describe components clearly
- [ ] Define interfaces and contracts
- [ ] Describe data flow
- [ ] Include sequence diagrams

**For Implementation Documents**:
- [ ] Include task breakdown
- [ ] Define clear acceptance criteria
- [ ] Include estimates
- [ ] Track progress
- [ ] Document decisions

**For Test Documents**:
- [ ] Define test strategy
- [ ] Define test scope
- [ ] Define test cases
- [ ] Define test data
- [ ] Define test environment

---

## Documentation Metrics

### Quality Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Documentation Completeness | 100% | Percentage of required documents present |
| Documentation Accuracy | 100% | Percentage of accurate information |
| Documentation Freshness | < 7 days | Average age of documentation |
| Documentation Coverage | 100% | Percentage of features documented |
| Documentation Readability | > 4.5/5 | User satisfaction score |

### Process Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Documentation Review Time | < 24 hours | Average time to review |
| Documentation Update Time | < 48 hours | Average time to update after code change |
| Documentation Creation Time | < 1 day | Average time to create new document |

---

## Constitution Alignment

This documentation standard aligns with and supports all **Framework Constitution Principles**:

| Principle | Documentation Support | Status |
|-----------|------------------------|--------|
| **I. Solo Developer + Agents Autonomy** | Documentation enables agents to work autonomously with clear guidance | ✅ Core |
| **II. Explicit, Tested Business Logic** | Documentation makes business logic explicit and testable | ✅ Core |
| **III. Simplicity Over Abstraction** | Documentation favors simple, clear explanations | ✅ Core |
| **IV. Informed Decisions via Explicit Options** | Documentation provides explicit options and trade-offs | ✅ Core |
| **V. Complete Specification Before Implementation** | Documentation requires complete specifications | ✅ Core |
| **VI. Quality Gates Are Mandatory** | Documentation is required for all quality gates | ✅ Core |
| **VII. Documentation Is Part of the Code** | This standard enforces documentation as part of development | ✅ Core |
| **VIII. Personal and Private Data** | Documentation includes privacy and data protection guidelines | ✅ High |
| **IX. Local-First Architecture** | Documentation supports local-first development approach | ✅ Medium |
| **X. Observability and Trust** | Documentation enables observability and trust through transparency | ✅ Core |
| **A. Technology Stack Constraints** | Documentation works within Swift + SwiftUI + SwiftData | ✅ Core |
| **B. Testing Constraints** | Documentation supports testing requirements | ✅ High |
| **C. Performance Constraints** | Documentation includes performance guidelines | ✅ Medium |
| **D. Security Constraints** | Documentation includes security guidelines | ✅ High |

---

## Related Documents

- [Constitution](../../00-constitution/constitution.md)
- [Architecture Standards](../architecture/README.md)
- [Testing Standards](../testing/README.md)
- [Templates](../../04-templates/README.md)
- [Checklists](../../05-checklists/README.md)
