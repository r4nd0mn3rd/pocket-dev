# Go Coding Standard

## Baseline
- Target the latest two Go releases.
- Run `gofmt`/`gofumpt` and `golangci-lint` in CI.
- Follow Effective Go and the Go Code Review Comments.

## Project Layout
- Standard layout: `cmd/`, `internal/`, `pkg/`, `api/`.
- Keep `internal/` for non-public packages.

## Style
- `camelCase`/`PascalCase` per export rules; short variable names in small scopes.
- Errors are values: wrap with `%w`, check with `errors.Is`/`errors.As`.
- Context as first parameter for I/O and long-running calls.

## Concurrency
- Do not start goroutines without a clear owner and cancellation path.
- Prefer channels and `sync` primitives; avoid shared mutable state.

## Testing
- Table-driven tests; coverage >= 80% for business logic.
- Use `testify` sparingly; prefer standard `testing`.

## Dependencies
- Module mode (`go.mod`); tidy with `go mod tidy`.
- Avoid heavy frameworks; standard library first.
