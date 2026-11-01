# JavaScript / TypeScript Coding Standard

## Baseline
- Prefer TypeScript for application code; enable `strict: true`.
- Target ES2022+; use native APIs before adding dependencies.
- Format with Prettier; lint with ESLint (or Biome).

## Project Layout
- `src/` for application code; `tests/` (or co-located `*.test.ts`) for tests.
- One component/module per file; barrel exports only at package boundaries.

## Style
- `camelCase` for variables/functions, `PascalCase` for types/components, `UPPER_SNAKE` for constants.
- Prefer `const`; avoid `var`.
- Prefer explicit return types on public functions.

## Type Discipline
- Avoid `any`; use `unknown` and narrow.
- Model domain data with interfaces/types; validate at I/O boundaries (zod or similar).
- No non-null assertions (`!`) without a comment.

## Error Handling
- Throw `Error` subclasses with meaningful messages.
- Handle promise rejections; never swallow errors silently.
- Log consistently; avoid `console.log` in library code.

## Testing
- Use Vitest/Jest; coverage >= 80% for business logic.
- Test behavior, not implementation details.

## Dependencies
- Lock with `package-lock.json` / `pnpm-lock.yaml` / `bun.lock`.
- Keep bundle size in mind for browser targets.
