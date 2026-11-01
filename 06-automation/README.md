# Automation

> **Section**: 06-automation
> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This directory contains **automation tools and agents** that support the Solo Agent Development Framework.

**Purpose**: Automate repetitive tasks, enforce standards, and enable autonomous agent work.

**Scope**: All automation tools, scripts, and agent configurations.

---

## Automation Structure

```
06-automation/
├── agents/              # Agent configurations and instructions
│   └── ...
├── scripts/             # Automation scripts
│   ├── framework-check.sh    # Framework sanity and completeness check
│   └── ...
└── README.md            # This document
```

---

## Automation Components

### Scripts

| Script | Purpose | Status |
|--------|---------|--------|
| [framework-check.sh](./scripts/framework-check.sh) | Comprehensive framework validation | ✅ Active |

#### Framework Check Script

The **framework-check.sh** script performs comprehensive validation of the framework:

**Features**:
- Validates framework structure and directory organization
- Checks Constitution alignment in key documents
- Verifies all required files are present
- Checks documentation completeness
- Validates governance and methodology documents
- Checks standards, templates, and checklists
- Verifies automation components
- Checks examples
- Validates file counts in directories
- Checks Git status

**Usage**:
```bash
# Full check (default)
./scripts/framework-check.sh

# Quick check (basic structure only)
./scripts/framework-check.sh --quick

# Verbose output
./scripts/framework-check.sh --verbose

# Attempt to fix minor issues
./scripts/framework-check.sh --fix

# Show help
./scripts/framework-check.sh --help
```

**Exit Codes**:
- `0` - All checks passed
- `1` - Warnings found (non-critical issues)
- `2` - Errors found (critical issues)
- `3` - Script error

**Example Output**:
```
================================
FRAMEWORK SANITY AND COMPLETENESS CHECK
================================

================================
CHECKING FRAMEWORK STRUCTURE
================================
[PASS]    Root directory: Directory exists
[PASS]    Root README: File exists
[PASS]    Section: 00-constitution: Directory exists
...

================================
CHECKING CONSTITUTION
================================
[PASS]    Constitution document: File exists
[PASS]    Constitution: Solo Developer + Agents Autonomy: Pattern found
...

================================
CHECK SUMMARY
================================

Total checks:    171
Passed:            165
Warnings:          6
Errors:            0

Framework check PASSED with 6 warning(s)
```

---

### Agents

The **agents/** directory contains agent configurations and instructions.

**Purpose**: Enable AI agents to work autonomously on framework tasks.

**Agent Types**:
- **Specification Agent** - Leads Discovery and Specification phases
- **Design Agent** - Leads Design phase
- **Implementation Agent** - Leads Implementation phase
- **Review Agent** - Reviews all artifacts and gate submissions

**Agent Capabilities**:
- Autonomous task execution
- Document creation and editing
- Code generation
- Testing and validation
- Review and feedback

---

## Constitution Alignment

All automation components align with **Framework Constitution Principles**:

| Principle | How Automation Supports | Relevance |
|-----------|-------------------------|-----------|
| **I. Solo Developer + Agents Autonomy** | Automation enables agents to work autonomously with minimal human intervention | ✅ Core |
| **II. Explicit, Tested Business Logic** | Automation scripts verify business logic is explicit and testable | ✅ Core |
| **III. Simplicity Over Abstraction** | Automation is simple and focused, avoiding unnecessary complexity | ✅ High |
| **IV. Informed Decisions via Explicit Options** | Automation provides data and insights for informed decisions | ✅ High |
| **V. Complete Specification Before Implementation** | Automation verifies complete specifications before implementation | ✅ Core |
| **VI. Quality Gates Are Mandatory** | Automation enforces quality gates through automated checks | ✅ Core |
| **VII. Documentation Is Part of the Code** | Automation treats documentation as a first-class deliverable | ✅ Core |
| **VIII. Personal and Private Data** | Automation respects privacy and data protection | ✅ Medium |
| **IX. Local-First Architecture** | Automation supports local-first development | ✅ Medium |
| **X. Observability and Trust** | Automation provides observability into framework health | ✅ Core |
| **A. Technology Stack Constraints** | Automation works within defined technology stack | ✅ Core |
| **B. Testing Constraints** | Automation enforces testing requirements | ✅ Core |
| **C. Performance Constraints** | Automation verifies performance requirements | ✅ Medium |
| **D. Security Constraints** | Automation enforces security requirements | ✅ Medium |

---

## Automation Benefits

### For Solo Developer

1. **Time Savings** - Automate repetitive tasks
2. **Quality Assurance** - Automated checks catch issues early
3. **Consistency** - Standards enforced uniformly
4. **Oversight** - Easy monitoring of framework health

### For Agents

1. **Guidance** - Clear instructions and templates
2. **Validation** - Automated checks verify work quality
3. **Autonomy** - Agents can work independently
4. **Feedback** - Immediate feedback on work quality

### For Framework

1. **Maintainability** - Easy to keep framework up-to-date
2. **Scalability** - Framework can scale with automation
3. **Reliability** - Automated checks ensure consistency
4. **Evolution** - Easy to add new automation

---

## Automation Strategy

### Current State

| Area | Automation Level | Status |
|------|------------------|--------|
| Framework Validation | Full | ✅ Complete |
| Constitution Alignment | Full | ✅ Complete |
| Structure Validation | Full | ✅ Complete |
| Documentation Checks | Full | ✅ Complete |
| Code Generation | Partial | 🟡 In Progress |
| Testing | Partial | 🟡 In Progress |
| Deployment | None | ❌ Not Started |

### Future Enhancements

| Enhancement | Priority | Status | Expected Completion |
|-------------|----------|--------|---------------------|
| Agent orchestration scripts | High | Not Started | Q1 2027 |
| Code generation templates | High | Not Started | Q1 2027 |
| Automated testing framework | Medium | Not Started | Q2 2027 |
| CI/CD pipeline | Medium | Not Started | Q2 2027 |
| Documentation generation | Medium | Not Started | Q2 2027 |

---

## Getting Started with Automation

### Prerequisites

- Bash shell (for scripts)
- Git (for version control)
- Node.js (for TypeScript-based automation)
- AI agent access (for agent-based automation)

### Running Framework Check

```bash
# Navigate to framework root
cd /path/to/agent_framework

# Run full check
./06-automation/scripts/framework-check.sh

# Run with verbose output
./06-automation/scripts/framework-check.sh --verbose

# Run quick check
./06-automation/scripts/framework-check.sh --quick
```

### Interpreting Results

**Pass (✅)**:
- Check passed successfully
- No action required

**Warning (⚠️)**:
- Non-critical issue found
- Recommended to address
- Framework still functional

**Error (❌)**:
- Critical issue found
- Must be addressed
- Framework may not work correctly

---

## Best Practices

### For Script Development

1. **Follow Standards** - Use consistent coding style
2. **Document Code** - Add comments and documentation
3. **Test Thoroughly** - Test with various scenarios
4. **Handle Errors** - Graceful error handling
5. **Log Appropriately** - Provide useful logging

### For Agent Development

1. **Clear Instructions** - Provide explicit, unambiguous instructions
2. **Define Boundaries** - Clearly define what agents can and cannot do
3. **Provide Templates** - Use templates for consistent output
4. **Validate Output** - Automated validation of agent output
5. **Document Decisions** - Agents must document all decisions

---

## Troubleshooting

### Common Automation Issues

| Issue | Solution | Prevention |
|-------|----------|------------|
| Script not executable | `chmod +x script.sh` | Set permissions correctly |
| Missing dependencies | Install required tools | Document dependencies |
| Permission denied | Run with appropriate permissions | Use proper permissions |
| Unexpected output | Check script logic | Test thoroughly |
| Slow execution | Optimize scripts | Profile and optimize |

### Debugging Tips

1. **Use Verbose Mode** - Run with `--verbose` flag for detailed output
2. **Check Logs** - Review script output for error messages
3. **Test Incrementally** - Test small sections of scripts
4. **Validate Inputs** - Ensure all inputs are correct
5. **Review Documentation** - Check script documentation

---

## Related Documents

- [Constitution](../00-constitution/README.md)
- [Governance](../01-governance/README.md)
- [Methodology](../02-methodology/README.md)
- [Standards](../03-standards/README.md)
- [Templates](../04-templates/README.md)
- [Checklists](../05-checklists/README.md)
- [Examples](../07-examples/README.md)
