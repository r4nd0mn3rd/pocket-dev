# Cross-Dependency Management

## Purpose
Prevent features from being specified or implemented in isolation when they depend on
other features, shared modules, external services, or platform capabilities.

## When to Check
Cross-dependencies MUST be checked:
1. **When a new task/feature is created** (Phase 0/1).
2. **Before a task is set to Implementation** (Phase 4 entry).
3. **When a dependency changes** (re-evaluate affected features).

## What to Check
- Related features in `specs/` that share data, UI surfaces, or services.
- Shared modules/components this feature will reuse or modify.
- External services/APIs and their availability/limits.
- Platform capabilities and minimum OS versions.
- Data model changes that affect other features.
- Migration or compatibility requirements.

## Required Artifacts
- `spec.md` → **Background → Related Features** and **Dependencies** sections.
- `design.md` → module boundaries and integration points.
- `plan.md` → dependency-ordered task list.

## Gate Impact
- Gate 2 (Specification): all known cross-dependencies must be documented.
- Gate 3 (Design): integration points must be defined.
- Gate 4 (Implementation): dependencies must be implemented or explicitly mocked.

## Checklist
See `05-checklists/cross-dependency-checklist.md`.
