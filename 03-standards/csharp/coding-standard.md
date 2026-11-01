# C# / .NET Coding Standard

## Baseline
- Target .NET 8 (LTS) or newer.
- Enable nullable reference types (`<Nullable>enable</Nullable>`).
- Format with `dotnet format`; analyze with Roslyn analyzers.

## Project Layout
- `src/` and `tests/` solution folders; one project per deployable unit.
- Namespace matches folder structure.

## Style
- `PascalCase` for types/methods/properties, `camelCase` for locals/parameters, `_camelCase` for private fields.
- Prefer records for immutable data; prefer `init`-only properties.
- Use `async`/`await` end-to-end; never block on async (`.Result`, `.Wait()`).

## Error Handling
- Throw specific exceptions; validate arguments with `ArgumentNullException.ThrowIfNull`.
- Use `Result`/`OneOf` patterns for expected failures in domain code.

## Testing
- xUnit (or NUnit); coverage >= 80% for business logic.
- Use `WebApplicationFactory` for integration tests.

## Dependencies
- Manage with NuGet; centralize versions in `Directory.Packages.props`.
- Keep package graph acyclic.
