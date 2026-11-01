# Rust Coding Standard

## Baseline
- Edition 2021 or newer.
- Run `rustfmt` and `clippy` (deny warnings in CI) on all code.

## Project Layout
- `src/` for library/binary; `tests/` for integration tests.
- Keep modules small; re-export public API from `lib.rs`.

## Style
- `snake_case` for functions/variables/modules, `PascalCase` for types/traits, `SCREAMING_SNAKE` for constants.
- Prefer owned types at boundaries; borrow internally.
- Avoid `unwrap`/`expect` in production paths; propagate with `?`.

## Error Handling
- Use `Result<T, E>`; define domain error enums.
- Use `thiserror` for libraries, `anyhow` for applications.

## Testing
- Unit tests in-module; integration tests in `tests/`.
- Coverage >= 80% for business logic (`cargo tarpaulin` or `llvm-cov`).

## Dependencies
- Lock with `Cargo.lock` (commit for binaries).
- Minimize dependency count; audit with `cargo audit`.
