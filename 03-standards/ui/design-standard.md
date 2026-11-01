# UI Design Standard

Condensed from top-rated Claude Code / OpenCode UI design skills (Anthropic
`frontend-design`, `ui-ux-pro-max`, Vercel web interface guidelines, and related
design-taste skills). Apply this standard to any feature with a user-facing
interface (Phase 2 specification, Phase 3 design, Phase 4 implementation).

## 1. Core Principles

- **Distinctive, not templated**: make deliberate, opinionated choices about
  palette, typography, and layout that fit the brief. Avoid generic AI defaults
  (warm-cream + terracotta, acid-green on black, identical rounded cards, ALL-CAPS
  eyebrows, `→` on every button, numbered markers without sequence).
- **Clarity over cleverness**: obvious affordances; plain-language labels.
- **Consistency**: reuse established patterns, spacing, and components.
- **Accessibility first**: keyboard navigation, screen readers, contrast, reduced motion.
- **Responsive by default**: mobile-first; no horizontal scroll; respect zoom.
- **Performance is UX**: fast loads, stable layout (CLS < 0.1), no jank.
- **Feedback for every action**: loading, success, error, empty, offline states.
- **Local-first / offline-aware**: show stale state explicitly; never fail silently.

## 2. Design Process

1. **Identify the subject**: product, audience, and primary job. If unspecified,
   propose one concrete subject and confirm.
2. **Plan tokens first**: color (4–6 named hex values), typefaces + roles, layout
   concept (with ASCII wireframes), and principles.
3. **Review the plan against the brief**: revise anything that reads as a generic
   default rather than a choice for this brief.
4. **Build**, then **critique** (screenshots if possible). Spend boldness in one
   place; remove one accessory before shipping.
5. **Persist the design system** when building multi-page apps:
   `design-system/<project>/MASTER.md` plus page overrides.

## 3. Aesthetic Direction

- Choose an aesthetic direction and commit (minimal, maximalist, editorial,
  brutalist, retro-futuristic, organic, luxury, playful, etc.).
- Let one element be memorable; keep everything else quiet and disciplined.
- Use real content and subject-matter vernacular, not lorem ipsum.
- Motion: one orchestrated moment beats scattered effects; motion that answers a
  user action is welcome; fade-and-slide on every section is the generic default.

## 4. Typography

- Typography carries personality. One family or two clearly distinct ones.
- Set a clear type scale (weights, widths, spacing) per *The Elements of
  Typographic Style*.
- Default line length < 80 chars; serif body gets slightly more line-height.
- Avoid: accenting a single word in a headline; all-caps labels; unnecessary
  eyebrows above content.
- Base body size >= 16px; line-height ~1.5.

## 5. Color

- Semantic color tokens (not raw hex in components).
- Dark mode: maintain contrast; test pairs.
- Accessible pairs: text 4.5:1, large text 3:1.
- Avoid gray-on-gray and low-contrast combinations.

## 6. Layout & Responsive

- Mobile-first breakpoints; viewport meta; no horizontal scroll; never disable zoom.
- No fixed px container widths; use fluid layouts.
- Reserve space for async content (CLS < 0.1).
- Use alignment deliberately (left/center/justified) and document it.

## 7. Interaction & Touch

- Minimum touch target 44×44px; 8px+ spacing between targets.
- Loading feedback for any action > 100ms.
- Do not rely on hover-only interactions.
- Immediate, visible state changes (no 0ms instant swaps without feedback).

## 8. Forms & Feedback

- Visible labels (not placeholder-only).
- Errors near the field; helper text; progressive disclosure.
- Inline validation where helpful; clear error messages.
- Empty states invite action; errors explain what happened and how to fix.

## 9. Navigation

- Predictable back behavior; deep linking.
- Bottom nav <= 5 items.
- Clear hierarchy; do not overload navigation.

## 10. Accessibility (CRITICAL)

- Contrast 4.5:1 (text), 3:1 (large).
- Alt text for images; aria-labels for icon-only buttons.
- Keyboard navigation; visible focus rings (never remove).
- Respect `prefers-reduced-motion`.
- Screen-reader-friendly structure (headings, landmarks, labels).

## 11. Performance

- Serve modern image formats (WebP/AVIF); lazy load.
- Reserve space to avoid CLS.
- Keep main thread free; debounce/throttle; virtualize long lists.
- Avoid layout thrashing; animate transform/opacity, not width/height.

## 12. Animation

- Context-aware timing; motion conveys meaning; spatial continuity.
- One duration per interaction type; exit faster than enter.
- Spring physics where appropriate; reduced-motion fallback.
- Do not animate width/height; prefer transform/opacity.

## 13. Content & Copy

- Write from the user's perspective; name things by user understanding.
- Active voice; CTAs state exactly what happens ("Save changes").
- Consistent vocabulary through a flow (Publish → Published).
- Plain verbs, sentence case, no filler; tone matched to brand/audience.
- Errors don't apologize and are never vague.

## 14. Charts & Data

- Legends, tooltips, accessible color (not color alone).
- Match chart type to data; avoid misleading scales.

## 15. UI Mockups for Decision Making

Use the low-token toolkit to scaffold mockups instead of generating full files:

```bash
06-automation/scripts/new-ui-mockup.sh <feature-id> <mockup-name> [title]
```

This creates `specs/[FEATURE]/mockups/<name>/index.html` from a minimal template.
The agent then edits only the `<!-- MOCKUP BODY START/END -->` block.

During Ideation/Specification, when UI choices are unclear, create quick mockups:

- **Location**: `specs/[FEATURE]/mockups/`
- **Stack**: TypeScript + React/Vue/Svelte or plain HTML/CSS (fast iteration).
- **Compare options** A/B/C; record what the mockup revealed (missing states,
  unclear flows, feasibility).
- **Record decision** in the spec's "UI Mockups (if applicable)" section.
- Mockups are throwaway; not production code.

## 16. Pre-Delivery Checklist

- [ ] Responsive down to mobile; no horizontal scroll.
- [ ] Keyboard-only navigation works; visible focus.
- [ ] Reduced motion respected.
- [ ] Contrast meets WCAG AA.
- [ ] Empty, loading, error, offline states implemented.
- [ ] Touch targets >= 44px; spacing >= 8px.
- [ ] Images optimized; CLS < 0.1.
- [ ] Copy reviewed for clarity and consistency.
- [ ] Design system tokens used (no raw hex/spacing).
- [ ] One memorable element; no unnecessary decoration.

## 17. Stack-Specific Guidance

Detect the stack from project files (`package.json`, `pubspec.yaml`,
`Package.swift`, etc.) and apply the matching rules. Prefer the platform's design
system/components. For web, follow semantic HTML and ARIA; for native, follow
platform HIG and safe-area rules.
