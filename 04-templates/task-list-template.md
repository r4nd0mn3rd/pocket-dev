# Task List Template

> **Template Version**: 1.0.0
> **Use For**: Implementation task tracking
> **Gate**: Used throughout implementation
> **Based On**: Constitution Principles IV, V

---

## Purpose

This template provides a **standardized task list format** for tracking implementation tasks. Each feature should have a task list that tracks all implementation work.

**Use**: Track progress, assign work, and ensure nothing is missed during implementation.

---

## Template

```markdown
# Task List: [Feature Name]

**Feature ID**: FEA-[YYYYMMDD]-[XXX]
**Plan ID**: PLA-[YYYYMMDD]-[XXX] (reference to implementation plan)
**Date Created**: YYYY-MM-DD
**Last Updated**: YYYY-MM-DD
**Status**: [Not Started | In Progress | On Hold | Completed]

## Summary

[Brief summary of current status]

**Example**:
> Development Module implementation is **75% complete**. Phase 1 (Foundation) and Phase 2 (Business Logic) are complete. Phase 3 (Presentation) is in progress with 5/11 tasks done. Phase 4 (Integration) and Phase 5 (Testing) not started. Overall: 22/42 tasks complete.

---

## Quick Stats

[Summary statistics at a glance]

```
| Metric | Value |
|--------|-------|
| Total Tasks | 42 |
| Completed | 22 |
| In Progress | 3 |
| Not Started | 17 |
| On Hold | 0 |
| Completion % | 52.4% |

| Phase | Total | Complete | In Progress | Not Started | % Complete |
|-------|-------|----------|--------------|-------------|------------|
| Phase 1: Foundation | 7 | 7 | 0 | 0 | 100% |
| Phase 2: Business Logic | 9 | 9 | 0 | 0 | 100% |
| Phase 3: Presentation | 11 | 5 | 3 | 3 | 45.5% |
| Phase 4: Integration | 6 | 0 | 0 | 6 | 0% |
| Phase 5: Testing | 9 | 1 | 0 | 8 | 11.1% |
```

---

## Phases

[Organize tasks by phase as defined in the Implementation Plan]

---

## Phase 1: Foundation

**Status**: [Not Started | In Progress | Completed]
**Progress**: [X/Y tasks complete, Z%]

| ID | Task | Assignee | Priority | Est. Hours | Status | Start Date | End Date | Notes |
|----|------|----------|----------|------------|--------|------------|---------|-------|
| P1-001 | Create project directory structure | Agent | High | 0.5 | [x] | 2026-10-29 | 2026-10-29 | Done |
| P1-002 | Create data models | Agent | High | 2 | [x] | 2026-10-29 | 2026-10-29 | Done |
| P1-003 | Set up SwiftData | Agent | High | 2 | [x] | 2026-10-29 | 2026-10-29 | Done |
| P1-004 | Implement ProjectService protocol | Agent | High | 1 | [x] | 2026-10-29 | 2026-10-29 | Done |
| P1-005 | Implement OpenMeteoService | Agent | High | 4 | [x] | 2026-10-29 | 2026-10-30 | Done |
| P1-006 | Implement ProjectRepository protocol | Agent | High | 1 | [x] | 2026-10-30 | 2026-10-30 | Done |
| P1-007 | Implement ProjectRepository | Agent | High | 3 | [x] | 2026-10-30 | 2026-10-31 | Done |

**Phase 1 Notes**:
- [ ] All tasks complete
- [ ] Code review passed
- [ ] Ready for Phase 2

---

## Phase 2: Business Logic

**Status**: [Not Started | In Progress | Completed]
**Progress**: [X/Y tasks complete, Z%]

| ID | Task | Assignee | Priority | Est. Hours | Status | Start Date | End Date | Notes |
|----|------|----------|----------|------------|--------|------------|---------|-------|
| P2-001 | Implement ProjectManager | Agent | High | 4 | [x] | 2026-10-31 | 2026-10-31 | Done |
| P2-002 | Implement LocationManager | Agent | High | 4 | [x] | 2026-10-31 | 2026-11-01 | Done |
| P2-003 | Implement CacheManager | Agent | Medium | 2 | [x] | 2026-11-01 | 2026-11-01 | Done |
| P2-004 | Implement ProjectViewModel | Agent | High | 3 | [x] | 2026-11-01 | 2026-11-01 | Done |
| P2-005 | Implement DevelopmentSettingsViewModel | Agent | High | 3 | [x] | 2026-11-02 | 2026-11-02 | Done |
| P2-006 | Implement DevelopmentSettings | Agent | Medium | 1 | [x] | 2026-11-02 | 2026-11-02 | Done |
| P2-007 | Unit tests for ProjectManager | Agent | High | 2 | [x] | 2026-11-02 | 2026-11-02 | Done |
| P2-008 | Unit tests for LocationManager | Agent | High | 2 | [x] | 2026-11-02 | 2026-11-03 | Done |
| P2-009 | Unit tests for ViewModels | Agent | High | 3 | [x] | 2026-11-03 | 2026-11-03 | Done |

**Phase 2 Notes**:
- [ ] All tasks complete
- [ ] Code review passed
- [ ] All tests pass
- [ ] Ready for Phase 3

---

## Phase 3: Presentation

**Status**: [Not Started | In Progress | Completed]
**Progress**: [X/Y tasks complete, Z%]

| ID | Task | Assignee | Priority | Est. Hours | Status | Start Date | End Date | Notes |
|----|------|----------|----------|------------|--------|------------|---------|-------|
| P3-001 | Implement DevelopmentModuleView | Agent | High | 4 | [-] | 2026-11-04 | | In progress |
| P3-002 | Implement CurrentProjectView | Agent | High | 2 | [ ] | | | |
| P3-003 | Implement LocationView | Agent | Medium | 1 | [ ] | | | |
| P3-004 | Implement TimestampView | Agent | Medium | 1 | [ ] | | | |
| P3-005 | Implement LoadingView | Agent | Medium | 1 | [ ] | | | |
| P3-006 | Implement ErrorView | Agent | Medium | 1 | [ ] | | | |
| P3-007 | Implement DevelopmentSettingsView | Agent | High | 4 | [ ] | | | |
| P3-008 | Add accessibility support | Agent | High | 3 | [ ] | | | |
| P3-009 | Add localization support | Agent | Medium | 2 | [ ] | | | |
| P3-010 | Create assets | Agent | Medium | 2 | [ ] | | | |
| P3-011 | Implement size adaptivity | Agent | Medium | 2 | [ ] | | | |

**Phase 3 Notes**:
- [ ] Need to finalize UI design
- [ ] Blocked by: None
- [ ] Estimated completion: 2026-11-06

---

## Phase 4: Integration

**Status**: [Not Started | In Progress | Completed]
**Progress**: [X/Y tasks complete, Z%]

| ID | Task | Assignee | Priority | Est. Hours | Status | Start Date | End Date | Notes |
|----|------|----------|----------|------------|--------|------------|---------|-------|
| P4-001 | Register with Dashboard | Agent | High | 2 | [ ] | | | |
| P4-002 | Implement widget lifecycle | Agent | High | 2 | [ ] | | | |
| P4-003 | Integrate with Settings | Agent | High | 2 | [ ] | | | |
| P4-004 | Test end-to-end flow | Agent | High | 2 | [ ] | | | |
| P4-005 | Fix integration issues | Agent | Medium | 1 | [ ] | | | |
| P4-006 | Performance testing | Agent | Medium | 1 | [ ] | | | |

**Phase 4 Notes**:
- [ ] Cannot start until Phase 3 is complete

---

## Phase 5: Testing & Polish

**Status**: [Not Started | In Progress | Completed]
**Progress**: [X/Y tasks complete, Z%]

| ID | Task | Assignee | Priority | Est. Hours | Status | Start Date | End Date | Notes |
|----|------|----------|----------|------------|--------|------------|---------|-------|
| P5-001 | Write additional unit tests | Agent | High | 2 | [ ] | | | |
| P5-002 | Write integration tests | Agent | High | 3 | [ ] | | | |
| P5-003 | Write UI tests | Agent | Medium | 2 | [ ] | | | |
| P5-004 | Manual testing | Developer | High | 2 | [ ] | | | |
| P5-005 | Fix bugs | Agent | High | 3 | [ ] | | | |
| P5-006 | Performance optimization | Agent | Medium | 2 | [ ] | | | |
| P5-007 | Documentation | Agent | Medium | 2 | [ ] | | | |
| P5-008 | Final code review | Developer | High | 2 | [ ] | | | |
| P5-009 | Prepare for release | Developer | High | 1 | [ ] | | | |

**Phase 5 Notes**:
- [ ] Cannot start until Phase 4 is complete

---

## Blockers

[List any tasks that are currently blocked and why]

| Task ID | Task | Blocker | Type | Impact | ETA for Resolution |
|---------|------|---------|------|--------|---------------------|
| P3-008 | Add accessibility support | Waiting for design review | Dependency | Medium | 2026-11-04 |

**Blocker Types**:
- **Dependency**: Waiting for another task to complete
- **Resource**: Waiting for resources (tools, access, etc.)
- **Decision**: Waiting for a decision
- **Technical**: Technical problem that needs to be resolved
- **External**: Waiting for external input (API, third-party, etc.)

---

## Recent Activity

[Track recent changes to the task list]

| Date | Task | Change | Made By | Notes |
|------|------|--------|---------|-------|
| 2026-11-04 | P3-001 | Started | Agent | Implementation in progress |
| 2026-11-03 | P2-009 | Completed | Agent | All tests pass |
| 2026-11-03 | Phase 2 | Completed | Agent | All tasks done |
| 2026-11-02 | P2-008 | Completed | Agent | LocationManager tests pass |

---

## Upcoming Milestones

[List upcoming milestones and deadlines]

| Milestone | Target Date | Status | Notes |
|-----------|-------------|--------|-------|
| Phase 3 Complete | 2026-11-06 | [ ] | 3 days remaining |
| Phase 4 Start | 2026-11-07 | [ ] | Depends on Phase 3 |
| Phase 4 Complete | 2026-11-08 | [ ] | 5 days remaining |
| Phase 5 Start | 2026-11-09 | [ ] | Depends on Phase 4 |
| Feature Complete | 2026-11-11 | [ ] | 7 days remaining |

---

## Task Status Definitions

| Status | Symbol | Meaning |
|--------|--------|---------|
| Not Started | [ ] | Task has not been started |
| In Progress | [-] | Task is actively being worked on |
| Completed | [x] | Task is 100% complete and verified |
| On Hold | [!] | Task is temporarily paused |
| Blocked | [B] | Task cannot proceed due to external factors |
| Skipped | [S] | Task was intentionally skipped |

---

## Priority Definitions

| Priority | Meaning | Color | SLA |
|----------|---------|-------|-----|
| Critical | Must be done immediately, blocks others | 🔴 | ASAP |
| High | Important, should be done next | 🟠 | Within 2 days |
| Medium | Nice to have, do after High priority | 🟡 | Within 1 week |
| Low | Can wait, do when nothing else | 🟢 | When convenient |

---

## Task Tracking Guidelines

### For Agents

✅ **Do**:
- **Update status daily** - keep the task list current
- **Log time spent** - track actual vs. estimated hours
- **Add notes** - document progress, issues, decisions
- **Identify blockers** - flag anything that's blocking progress
- **Break down large tasks** - if a task is > 4 hours, consider breaking it down

❌ **Don't**:
- **Leave tasks in "In Progress" too long** - update status regularly
- **Ignore blockers** - escalate if you're stuck
- **Skip documentation** - add notes to tasks
- **Underestimate remaining work** - be realistic

### For Developers (Humans)

✅ **Do**:
- **Review task list daily** - stay informed of progress
- **Remove blockers** - help unblock agents when needed
- **Make decisions** - provide timely decisions on open questions
- **Verify completions** - confirm tasks are truly done
- **Adjust priorities** - reprioritize as needed

❌ **Don't**:
- **Micromanage** - trust agents to do their work
- **Ignore the task list** - it's your visibility into progress
- **Delay decisions** - timely decisions keep things moving

---

## Constitution Alignment

[Verify that task tracking aligns with Constitution Principles]

- [ ] **Principle IV (Automated Testing)**: Testing tasks are included and tracked
- [ ] **Principle V (Proof of Concepts)**: High-risk tasks are prototyped first
- [ ] **All other principles**: Respected through implementation

---

## Checklist

[Use this checklist to verify the Task List is complete and accurate]

### Content

- [ ] All tasks from Implementation Plan are included
- [ ] All phases are represented
- [ ] Task IDs match Implementation Plan
- [ ] Task descriptions are clear
- [ ] Assignees are designated
- [ ] Priorities are assigned
- [ ] Estimates are included
- [ ] Dependencies are documented

### Status

- [ ] All task statuses are up to date
- [ ] Completion percentages are accurate
- [ ] Blockers are documented
- [ ] Recent activity is logged
- [ ] Milestones are current

### Quality

- [ ] Task list is easy to read and understand
- [ ] Information is accurate and reliable
- [ ] Task list is actionable (can be used for work)

---

## Related Documents

- [Implementation Plan Template](plan-template.md)
- [Gate 4 Definition](../../02-methodology/checkpoints/gate-04.md)
- [Gate 4 Checklist](../../05-checklists/gate-04-checklist.md)
- [Constitution](../../00-constitution/constitution.md)
