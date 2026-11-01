# Examples

> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This directory contains **example implementations** of the Solo Agent Development Framework. Examples demonstrate how to use the framework, templates, and standards to develop features.

**Purpose**:
- Provide concrete examples of framework usage
- Demonstrate best practices
- Serve as reference implementations
- Help new users understand the framework
- Validate framework completeness

---

## Example Features

### 1. Development Module

**Location**: [pocket-dev-module/](./pocket-dev-module/)

**Description**: A complete example demonstrating the framework from ideation through specification.

**Includes**:
- Idea document
- Research document
- Constraints document
- Risks document
- Specification document
- Documentation index

**Constitution Alignment**: All 19 Constitution Principles are addressed

**Purpose**:
- Demonstrate complete documentation workflow
- Show how to fill out templates
- Example of cross-referencing between documents
- Reference for new features

**Status**: ✅ Complete (Phases 0-2)

---

## Example Structure

Each example feature follows this structure:

```
feature-name/
├── Docs/
│   ├── README.md                          # Documentation index
│   ├── 00-idea/
│   │   └── idea.md                        # Feature idea
│   ├── 01-discovery/
│   │   ├── research.md                    # Technology research
│   │   ├── constraints.md                 # Constraints
│   │   └── risks.md                       # Risks
│   ├── 02-specification/
│   │   └── spec.md                        # Requirements
│   ├── 03-design/
│   │   ├── design.md                      # Architecture
│   │   └── plan.md                        # Implementation plan
│   ├── 04-implementation/
│   │   └── task-list.md                   # Implementation tasks
│   └── 05-verification/
│       └── verification.md                # Verification report
└── Sources/                              # (Code would go here)
    └── ...
```

---

## Using Examples

### How to Use Examples

1. **Browse examples** to understand framework patterns
2. **Copy documents** as starting points for your features
3. **Compare with templates** to see how they're filled out
4. **Use as reference** for Constitution alignment
5. **Adapt to your needs** while maintaining structure

### Learning Path

**Beginner**:
1. Read the [Development Module README](./pocket-dev-module/Docs/README.md)
2. Review the [Idea document](./pocket-dev-module/Docs/00-idea/idea.md)
3. Follow links to other documents
4. Compare with templates

**Intermediate**:
1. Study how Constitution Principles are addressed
2. Review cross-references between documents
3. Examine risk and constraint identification
4. Understand validation and research

**Advanced**:
1. Use examples to identify framework gaps
2. Propose improvements based on examples
3. Create new examples for missing scenarios
4. Validate framework completeness

---

## Example Quality Standards

All examples must meet these standards:

### Content Standards

✅ **Do**:
- Follow all framework templates exactly
- Address all Constitution Principles
- Include all required sections
- Use realistic scenarios
- Document lessons learned

❌ **Don't**:
- Skip required sections
- Ignore Constitution Principles
- Use placeholder text
- Include unrealistic scenarios
- Violate framework standards

### Documentation Standards

- All documents must follow templates
- All cross-references must work
- All Constitution alignment must be verified
- All documents must be complete
- All examples must be maintainable

---

## Creating New Examples

### When to Create Examples

✅ **Create examples** when:
- Demonstrating a new framework feature
- Validating framework completeness
- Showing best practices
- Helping users understand complex concepts

❌ **Don't create examples** when:
- The scenario is too simple
- The example doesn't add value
- The framework doesn't support it yet

### Example Creation Process

1. **Identify need** for new example
2. **Select scenario** that demonstrates value
3. **Follow framework** exactly
4. **Document completely** using templates
5. **Verify Constitution alignment**
6. **Review with team**
7. **Add to this README**
8. **Maintain over time**

### Example Naming Convention

- Use **kebab-case** for directory names
- Use **descriptive names** that indicate purpose
- Avoid **generic names** like "example-1"
- Include **feature type** in name

---

## Example Maintenance

### Version Control

- Each example has its own version
- Examples are updated when framework changes
- Version history is maintained in example README

### Update Process

1. **Framework changes** are identified
2. **Impact on examples** is assessed
3. **Examples are updated** to match framework
4. **Changes are reviewed**
5. **Version is updated**

### Deprecation Process

1. **Mark as deprecated** in README
2. **Add deprecation notice**
3. **Create replacement** (if applicable)
4. **Archive old example**
5. **Remove after transition period**

---

## Example Requests

### Requesting New Examples

If you need an example for a specific scenario:

1. **Check existing examples** first
2. **Identify the gap** in current examples
3. **Submit request** to Solo Developer
4. **Provide details** on what you need
5. **Prioritize based on** community need

### Example Request Template

```markdown
# Example Request: {Feature Name}

**Requested By**: {Name}
**Date**: {YYYY-MM-DD}
**Priority**: {High/Medium/Low}

## Scenario
{Description of the scenario you need an example for}

## Why This Example is Needed
{Explanation of why this example would be valuable}

## Expected Value
{How this example will help users}

## Constitution Principles to Demonstrate
- [ ] Principle I (Framework)
- [ ] Principle II (Tested Logic)
- [ ] ...
```

---

## Constitution Alignment in Examples

All examples **must** demonstrate Constitution alignment:

| Principle | How Examples Demonstrate |
|-----------|---------------------------|
| **I. Framework** | Examples follow framework patterns |
| **II. Tested Logic** | Examples include testing requirements |
| **III. Simplicity** | Examples show simple, focused solutions |
| **IV. Testing** | Examples include comprehensive testing |
| **V. Proof of Concepts** | Examples validate approaches |
| **VI. Intuitive** | Examples are intuitive and easy to understand |
| **VII. Error Handling** | Examples include error handling |
| **VIII. Privacy** | Examples respect privacy |
| **IX. Local-First** | Examples support offline usage |
| **X. Performance** | Examples meet performance requirements |
| **A. Tech Stack** | Examples use Swift + SwiftUI + SwiftData |
| **B. Integration** | Examples integrate with platform features |
| **C.1 Concurrency** | Examples handle concurrency |
| **C.2 Threading** | Examples protect main thread |
| **D.1 No Secrets** | Examples don't hardcode secrets |
| **D.2 HTTPS** | Examples use HTTPS |
| **D.3 Encryption** | Examples encrypt data at rest |

---

## Example Validation

### Validation Process

All examples are **validated** before being added:

1. **Framework compliance** is verified
2. **Constitution alignment** is checked
3. **Template usage** is validated
4. **Documentation completeness** is confirmed
5. **Cross-references** are verified
6. **Quality standards** are met

### Validation Checklist

- [ ] Follows all framework templates
- [ ] Addresses all Constitution Principles
- [ ] Includes all required sections
- [ ] Cross-references work correctly
- [ ] Documentation is complete
- [ ] Quality standards are met
- [ ] Maintainable over time

---

## Future Examples

### Planned Examples

| Feature | Priority | Status | Expected Completion |
|---------|----------|--------|---------------------|
| Notes App | Medium | Not Started | Q1 2027 |
| Task Manager | Medium | Not Started | Q1 2027 |
| Expense Tracker | Low | Not Started | Q2 2027 |

### Suggested Examples

| Feature | Purpose | Requester |
|---------|---------|-----------|
| Contact Manager | Demonstrate SwiftData relationships | Community |
| Calendar Integration | Show platform integration | Community |
| Settings Framework | Demonstrate settings | Community |

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Example not found | Check example exists in directory |
| Example outdated | Check for newer version |
| Example doesn't match framework | Framework may have changed - check version |
| Missing documents | Check example is complete |
| Constitution alignment unclear | Review Constitution Principles |

### Getting Help

1. **Check this README** for example information
2. **Review the Constitution** for Principles
3. **Check the Development Module example** as reference
4. **Ask the Solo Developer** for clarification
5. **Consult the Review Agent** for feedback

---

## Related Documents

- [Constitution](../00-constitution/constitution.md)
- [Process Overview](../02-methodology/process-overview.md)
- [Templates](../04-templates/README.md)
- [Checklists](../05-checklists/README.md)
- [Standards](../03-standards/README.md)
