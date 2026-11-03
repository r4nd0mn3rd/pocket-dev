---
name: pocket-dev-standards
description: |
  Content-only skill: Pocket Dev's language and UI standards, templates, and ADR/glossary rules.
  Install via `npx skills add <repo> --skill pocket-dev-standards` for agent context without the CLI/board.

triggers:
  - name: standards
    patterns:
      - "apply pocket dev standards"
      - "use pocket dev templates"
    priority: 6
---

# Pocket Dev Standards (content pack)

This skill ships standards and templates only. It does not provide a board or CLI.
Use `pocket-dev init` if you want the full framework + board.

Includes: language coding standards (03-standards), templates (04-templates),
decision-map + lazy docs rules (CONTEXT.md, ADR three-part test).
