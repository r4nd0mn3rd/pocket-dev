# Cross-Dependency Checklist

Use when creating a feature or before moving a feature to Implementation.

- [ ] All related features identified and listed in `spec.md` (Background → Related Features).
- [ ] Dependency direction is clear (this feature depends on X / X depends on this).
- [ ] Shared modules/components identified; reuse vs. new creation decided.
- [ ] External services/APIs identified with availability, limits, and fallback.
- [ ] Platform/version constraints documented.
- [ ] Data model changes assessed for impact on other features.
- [ ] Implementation order reflects dependencies (prerequisites first).
- [ ] Mocks/stubs planned for dependencies not yet implemented.
- [ ] Risks of dependency failure documented with mitigations.
