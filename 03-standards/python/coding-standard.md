# Python Coding Standard

## Baseline
- Target Python 3.11+.
- Use type hints for all public functions and methods.
- Prefer `pathlib`, `dataclasses`, `typing` from the standard library.
- Format with `ruff format` (or `black`); lint with `ruff`.

## Project Layout
- `src/<package>/` for application code; `tests/` for tests.
- Keep modules small and focused (single responsibility).
- Avoid circular imports; move shared types to a `models` or `types` module.

## Style
- `snake_case` for functions/variables, `PascalCase` for classes, `UPPER_SNAKE` for constants.
- Maximum line length 100.
- Docstrings for public modules, classes, and functions (Google or NumPy style).

## Error Handling
- Raise specific exceptions; never bare `except`.
- Validate inputs at boundaries (CLI, HTTP, file I/O).
- Log with structured logging; do not print in library code.

## Testing
- Use `pytest`; coverage >= 80% for business logic.
- Fixtures over global state; avoid monkeypatching internals.
- Type-check with `mypy` or `pyright` in CI.

## Dependencies
- Pin with a lock file (`uv.lock`, `poetry.lock`, or `requirements.lock`).
- Prefer standard library; justify third-party additions.
