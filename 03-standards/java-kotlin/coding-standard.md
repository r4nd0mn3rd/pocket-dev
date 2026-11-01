# Java / Kotlin Coding Standard

## Baseline
- Java 17+ or Kotlin 1.9+.
- Prefer Kotlin for new code when the stack allows.
- Format with `google-java-format` / `ktlint`; lint in CI.

## Project Layout
- `src/main/java` (or `kotlin`) and `src/test/...`.
- Package by feature, not by layer, when practical.

## Style
- `camelCase` for methods/variables, `PascalCase` for classes, `UPPER_SNAKE` for constants.
- Keep classes focused; prefer composition over inheritance.
- Document public APIs with Javadoc/KDoc.

## Null Safety
- In Kotlin, avoid `!!`; use safe calls and `require`/`check`.
- In Java, annotate nullability (`@Nullable`, `@NonNull`) at boundaries.

## Error Handling
- Use checked exceptions only when callers can reasonably recover.
- Prefer result types for expected failures.

## Testing
- JUnit 5; coverage >= 80% for business logic.
- Use Testcontainers for integration tests where applicable.

## Dependencies
- Manage with Gradle/Maven and a version catalog.
- Keep dependency graph acyclic.
