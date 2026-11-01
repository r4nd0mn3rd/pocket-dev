# Testing Standards

> **Document Version**: 1.0.0
> **Status**: Active
> **Last Updated**: 2026-10-30
> **Owner**: Framework Maintainers

---

## Overview

This document defines the **testing standards** for all features developed using the Solo Agent Development Framework. These standards ensure that all code is **thoroughly tested, reliable, and maintainable**, and that all tests comply with the Constitution Principles.

**Key Principles**:
1. **Constitution Compliance**: All tests must comply with Constitution Principles
2. **Comprehensive Coverage**: All code must be covered by tests
3. **Maintainability**: Tests must be easy to maintain
4. **Reliability**: Tests must be reliable and deterministic
5. **Performance**: Tests must run quickly
6. **Readability**: Tests must be easy to read and understand

---

## Constitution Principle II: Business Logic Must Be Tested

**Requirement**: All business logic must have comprehensive unit tests

**Implications**:
- [ ] All business logic classes must have unit tests
- [ ] All business logic methods must have unit tests
- [ ] All edge cases must be covered
- [ ] All business logic must have 100% test coverage
- [ ] Tests must verify correctness, not just execution

**Business Logic Test Checklist**:
- [ ] All business logic classes have corresponding test classes
- [ ] All public methods have at least one test
- [ ] All edge cases are covered
- [ ] All error cases are covered
- [ ] Tests verify correctness, not just execution
- [ ] Tests cover all branches and paths

---

## Test Types

### 1. Unit Tests

**Purpose**: Test individual units of code in isolation

**Scope**:
- Individual functions
- Individual methods
- Individual classes
- Small components

**Characteristics**:
- Fast to write
- Fast to run
- Isolated
- Deterministic
- Easy to debug

**Standards**:
- [ ] Test one thing per test
- [ ] Use descriptive test names
- [ ] Use Arrange-Act-Assert pattern
- [ ] Use mock dependencies
- [ ] Test both happy path and edge cases
- [ ] Test error cases
- [ ] Keep tests independent
- [ ] Keep tests deterministic
- [ ] Run in < 100ms per test

---

### 2. Integration Tests

**Purpose**: Test interactions between multiple components

**Scope**:
- Component interactions
- Module interactions
- Layer interactions
- System interactions

**Characteristics**:
- Slower than unit tests
- More complex
- Test real interactions
- Catch integration issues

**Standards**:
- [ ] Test real interactions between components
- [ ] Use real dependencies where possible
- [ ] Use test doubles for external systems
- [ ] Test error handling
- [ ] Test edge cases
- [ ] Keep tests isolated
- [ ] Run in < 1 second per test

---

### 3. UI Tests

**Purpose**: Test user interface behavior

**Scope**:
- View rendering
- User interactions
- Navigation
- UI state changes
- Accessibility
- Localization

**Characteristics**:
- Slowest tests
- Most fragile
- Test actual UI behavior
- Catch UI issues

**Standards**:
- [ ] Test user journeys, not implementation details
- [ ] Use unique identifiers for UI elements
- [ ] Avoid testing implementation details
- [ ] Test on all supported platforms
- [ ] Test accessibility
- [ ] Test localization
- [ ] Run in < 10 seconds per test

---

### 4. End-to-End Tests

**Purpose**: Test complete user journeys

**Scope**:
- Complete user workflows
- Multi-step processes
- Cross-feature interactions
- Full application behavior

**Characteristics**:
- Very slow
- Very complex
- Test complete user experience
- Catch system-level issues

**Standards**:
- [ ] Test complete user journeys
- [ ] Use real data where possible
- [ ] Test on real devices
- [ ] Test all supported platforms
- [ ] Test error handling
- [ ] Test edge cases
- [ ] Run in < 30 seconds per test

---

### 5. Performance Tests

**Purpose**: Test performance characteristics

**Scope**:
- Execution speed
- Memory usage
- CPU usage
- Network usage
- Battery usage

**Characteristics**:
- Measure performance metrics
- Catch performance regressions
- Validate performance requirements

**Standards**:
- [ ] Define performance budgets
- [ ] Measure performance in CI
- [ ] Track performance over time
- [ ] Investigate performance regressions
- [ ] Optimize critical paths
- [ ] Run in dedicated performance test environment

---

### 6. Snapshot Tests

**Purpose**: Test UI rendering consistency

**Scope**:
- View rendering
- UI layout
- Visual appearance

**Characteristics**:
- Fast to write
- Fast to run
- Catch UI regressions
- Validate visual consistency

**Standards**:
- [ ] Use for UI components
- [ ] Update snapshots intentionally
- [ ] Review snapshot changes
- [ ] Test on all supported platforms
- [ ] Run in < 100ms per test

---

## Test Pyramid

```
                    ┌─────────────┐
                    │   E2E Tests  │  5-10%
                    │   (UI Tests) │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │ Integration  │  10-20%
                    │   Tests      │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  Unit Tests │  70-80%
                    └─────────────┘
```

**Guidelines**:
- 70-80% of tests should be unit tests
- 10-20% of tests should be integration tests
- 5-10% of tests should be E2E/UI tests
- Focus on unit tests for business logic
- Use integration tests for component interactions
- Use E2E tests for critical user journeys

---

## Test Coverage Requirements

### Constitution-Specific Coverage

| Code Type | Required Coverage | Notes |
|-----------|-------------------|-------|
| Business Logic | 100% | Constitution Principle II |
| Data Layer | 100% | Critical for data integrity |
| Services | 100% | Critical for functionality |
| ViewModels | 100% | Critical for UI behavior |
| Utilities | 100% | All utility code must be tested |
| Views | N/A | UI tests cover behavior |
| Tests | N/A | Tests don't need tests |

### Coverage Metrics

**Line Coverage**: Percentage of lines executed by tests
- Business Logic: 100%
- Data Layer: 100%
- Services: 100%
- ViewModels: 100%

**Branch Coverage**: Percentage of branches executed by tests
- All code: 100%

**Path Coverage**: Percentage of paths executed by tests
- Critical code: 100%

---

## Test Organization

### Directory Structure

```
FeatureName/
├── Sources/
│   ├── BusinessLogic/
│   │   ├── Services/
│   │   ├── Models/
│   │   └── ...
│   ├── Data/
│   │   ├── Repositories/
│   │   ├── Entities/
│   │   └── ...
│   └── Presentation/
│       ├── Views/
│       ├── ViewModels/
│       └── ...
└── Tests/
    ├── UnitTests/
    │   ├── BusinessLogicTests/
    │   │   ├── ServicesTests/
    │   │   ├── ModelsTests/
    │   │   └── ...
    │   ├── DataTests/
    │   │   ├── RepositoriesTests/
    │   │   ├── EntitiesTests/
    │   │   └── ...
    │   └── ...
    ├── IntegrationTests/
    │   ├── BusinessLogicIntegrationTests/
    │   ├── DataIntegrationTests/
    │   └── ...
    ├── UITests/
    │   ├── ViewTests/
    │   ├── NavigationTests/
    │   └── ...
    └── TestHelpers/
        ├── Mocks/
        ├── Factories/
        ├── TestData/
        └── ...
```

### Test Naming Conventions

**Test Class Naming**:
- `{ClassUnderTest}Tests` (e.g., `ProjectServiceTests`)
- `{Module}Tests` (e.g., `ProjectModuleTests`)

**Test Method Naming**:
- `test{MethodUnderTest}_{Scenario}_{ExpectedBehavior}`
- `test{Feature}_{Scenario}_{ExpectedBehavior}`
- `testWhen{Condition}_Then{ExpectedResult}`

**Examples**:
- `testGetProjectData_ValidLocation_ReturnsProjectData`
- `testGetProjectData_InvalidLocation_ThrowsError`
- `testWhenLocationInvalid_ThenThrowsInvalidLocationError`
- `testUpdateSettings_ValidInput_UpdatesSettings`
- `testUpdateSettings_InvalidInput_ThrowsValidationError`

---

## Test Writing Standards

### Arrange-Act-Assert Pattern

**Structure**:
```swift
func test{Description}() {
    // Arrange (Setup)
    let dependency = MockDependency()
    let sut = ClassUnderTest(dependency: dependency)
    
    // Act (Execute)
    let result = sut.methodUnderTest(input: testInput)
    
    // Assert (Verify)
    XCTAssertEqual(result, expectedResult)
    XCTAssertTrue(dependency.methodCalled)
}
```

**Standards**:
- [ ] Clearly separate Arrange, Act, Assert
- [ ] Use descriptive variable names
- [ ] Keep Arrange section minimal
- [ ] Keep Act section to one line
- [ ] Keep Assert section clear and specific

### Given-When-Then Pattern

**Structure**:
```swift
func test{Description}() {
    // Given (Setup)
    givenDependencyReturnsValue(value)
    
    // When (Execute)
    let result = whenMethodIsCalled()
    
    // Then (Verify)
    thenResultShouldBe(expectedResult)
    thenDependencyShouldBeCalled()
}
```

**Standards**:
- [ ] Use helper methods for Given, When, Then
- [ ] Keep test methods readable
- [ ] Use descriptive helper method names

---

## Mocking and Test Doubles

### Test Double Types

| Type | Purpose | Implementation |
|------|---------|----------------|
| Dummy | Placeholder | Simple value/implementation |
| Stub | Provide canned responses | Pre-programmed responses |
| Spy | Record interactions | Track calls and arguments |
| Mock | Verify interactions | Expectations and verification |
| Fake | Simplified implementation | Working implementation with shortcuts |

### Mocking Standards

**When to Mock**:
- [ ] External services (APIs, databases)
- [ ] System dependencies (file system, network)
- [ ] Complex dependencies
- [ ] Dependencies with side effects

**When NOT to Mock**:
- [ ] Simple value types
- [ ] Pure functions
- [ ] Classes under test
- [ ] When real implementation is better

**Mocking Libraries**:
- Use protocol-oriented design for mockability
- Use dependency injection for testability
- Consider using mocking libraries (e.g., Mockingbird, Cuckoo)

---

## Test Quality Standards

### Test Readability

✅ **Do**:
- Use descriptive test names
- Use descriptive variable names
- Keep tests focused
- Keep tests short
- Use helper methods for complex setup
- Add comments for complex logic

❌ **Don't**:
- Use vague test names
- Use unclear variable names
- Test multiple things in one test
- Write long, complex tests
- Use magic numbers
- Write unclear assertions

### Test Maintainability

✅ **Do**:
- Keep tests independent
- Keep tests deterministic
- Avoid flaky tests
- Update tests when code changes
- Refactor tests when needed
- Delete tests for deleted code

❌ **Don't**:
- Create interdependent tests
- Create non-deterministic tests
- Create flaky tests
- Ignore failing tests
- Keep tests for deleted code

### Test Reliability

✅ **Do**:
- Use deterministic data
- Avoid randomness in tests
- Use controlled timing
- Handle async code properly
- Clean up after tests

❌ **Don't**:
- Use random data
- Use real timing
- Leak resources
- Create race conditions
- Ignore test cleanup

---

## Testing Constitution Principles

### Principle I: Framework for Agent Development

**Testing Focus**:
- Framework compliance
- Process adherence
- Template usage
- Checklist completion

**Test Types**:
- Documentation tests
- Process tests
- Framework tests

---

### Principle II: Business Logic Must Be Tested

**Testing Focus**:
- Business logic correctness
- Edge case handling
- Error handling
- Performance

**Test Types**:
- Unit tests (100% coverage)
- Integration tests
- Performance tests

**Standards**:
- [ ] All business logic has unit tests
- [ ] All business logic has 100% coverage
- [ ] Tests verify correctness, not just execution
- [ ] All edge cases are covered
- [ ] All error cases are covered

---

### Principle III: Simplicity Over Complexity

**Testing Focus**:
- Code simplicity
- Test simplicity
- Maintainability

**Test Types**:
- Code review tests
- Complexity metrics
- Maintainability tests

**Standards**:
- [ ] Tests are simple and focused
- [ ] Tests don't add unnecessary complexity
- [ ] Tests are easy to maintain

---

### Principle IV: Comprehensive Testing

**Testing Focus**:
- Test coverage
- Test quality
- Test completeness

**Test Types**:
- Coverage reports
- Quality metrics
- Completeness checks

**Standards**:
- [ ] All code is covered by tests
- [ ] Tests are comprehensive
- [ ] Tests are of high quality
- [ ] Tests cover all scenarios

---

### Principle V: Proof of Concepts for Large Changes

**Testing Focus**:
- Proof of concept validation
- Architecture validation
- Feasibility testing

**Test Types**:
- Proof of concept tests
- Prototype tests
- Feasibility tests

**Standards**:
- [ ] Proof of concepts are tested
- [ ] Architectures are validated
- [ ] Feasibility is verified

---

### Principle VI: Intuitive Solutions

**Testing Focus**:
- API usability
- Error message clarity
- User experience

**Test Types**:
- Usability tests
- API tests
- Error message tests

**Standards**:
- [ ] APIs are intuitive
- [ ] Error messages are clear
- [ ] User experience is tested

---

### Principle VII: Comprehensive Error Handling

**Testing Focus**:
- Error handling
- Exception handling
- Recovery mechanisms

**Test Types**:
- Error handling tests
- Exception tests
- Recovery tests

**Standards**:
- [ ] All error cases are tested
- [ ] Error handling is comprehensive
- [ ] Recovery mechanisms work
- [ ] Error messages are tested

---

### Principle VIII: Privacy by Design

**Testing Focus**:
- Data protection
- Privacy compliance
- Security

**Test Types**:
- Security tests
- Privacy tests
- Compliance tests

**Standards**:
- [ ] Privacy is tested
- [ ] Security is tested
- [ ] Compliance is verified

---

### Principle IX: Local-First Development

**Testing Focus**:
- Offline functionality
- Local data
- Local testing

**Test Types**:
- Offline tests
- Local data tests
- Local testing validation

**Standards**:
- [ ] Offline functionality is tested
- [ ] Local data is tested
- [ ] Local testing is possible

---

### Principle X: Performance First

**Testing Focus**:
- Performance metrics
- Performance budgets
- Performance regressions

**Test Types**:
- Performance tests
- Benchmark tests
- Regression tests

**Standards**:
- [ ] Performance is measured
- [ ] Performance budgets are defined
- [ ] Performance regressions are caught

---

### Principle A: Tech Stack

**Testing Focus**:
- Swift code quality
- SwiftUI rendering
- SwiftData functionality

**Test Types**:
- Swift unit tests
- SwiftUI tests
- SwiftData tests

**Standards**:
- [ ] All Swift code is tested
- [ ] All SwiftUI is tested
- [ ] All SwiftData is tested

---

### Principle B: Integration

**Testing Focus**:
- Integration points
- Platform features
- External systems

**Test Types**:
- Integration tests
- Platform tests
- External system tests

**Standards**:
- [ ] All integrations are tested
- [ ] Platform features are tested
- [ ] External systems are tested

---

### Principle C.1: Concurrency

**Testing Focus**:
- Concurrent execution
- Race conditions
- Thread safety

**Test Types**:
- Concurrency tests
- Race condition tests
- Thread safety tests

**Standards**:
- [ ] Concurrent execution is tested
- [ ] Race conditions are avoided
- [ ] Thread safety is verified

---

### Principle C.2: Threading

**Testing Focus**:
- Main thread usage
- Background thread usage
- Thread blocking

**Test Types**:
- Threading tests
- Main thread tests
- Background thread tests

**Standards**:
- [ ] Main thread is never blocked
- [ ] Background threads are used appropriately
- [ ] Thread usage is tested

---

### Principle D.1: No Secrets in Code

**Testing Focus**:
- Secrets detection
- Code scanning

**Test Types**:
- Secrets scanning tests
- Code analysis tests

**Standards**:
- [ ] No secrets in code
- [ ] Secrets are detected
- [ ] Code is scanned for secrets

---

### Principle D.2: HTTPS for All Network Requests

**Testing Focus**:
- HTTPS usage
- Certificate validation
- TLS configuration

**Test Types**:
- Network tests
- HTTPS tests
- Security tests

**Standards**:
- [ ] All network requests use HTTPS
- [ ] Certificates are validated
- [ ] TLS is configured securely

---

### Principle D.3: Encrypt Data at Rest

**Testing Focus**:
- Data encryption
- Encryption configuration
- Key management

**Test Types**:
- Encryption tests
- Security tests
- Configuration tests

**Standards**:
- [ ] All sensitive data is encrypted
- [ ] Encryption is configured securely
- [ ] Keys are managed securely

---

## Test Automation

### CI/CD Integration

**Requirements**:
- [ ] All tests run in CI
- [ ] Tests run on every commit
- [ ] Tests run on every PR
- [ ] Tests block merges if failing
- [ ] Test results are reported
- [ ] Test coverage is reported

**CI Pipeline**:
```yaml
jobs:
  test:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Unit Tests
        run: swift test --filter UnitTests
      - name: Run Integration Tests
        run: swift test --filter IntegrationTests
      - name: Run UI Tests
        run: xcodebuild test -scheme FeatureScheme -destination 'platform=iOS Simulator'
      - name: Generate Coverage Report
        run: swift test --enable-code-coverage
      - name: Upload Coverage
        uses: actions/upload-artifact@v4
        with:
          name: coverage
          path: .build/coverage
```

---

## Test Metrics

### Test Quality Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Test Success Rate | 100% | Percentage of passing tests |
| Test Coverage | 100% (business logic) | Percentage of code covered |
| Test Flakiness | 0% | Percentage of flaky tests |
| Test Execution Time | < 1 min (unit tests) | Total test execution time |
| Test Maintenance Cost | Low | Time spent maintaining tests |

### Test Performance Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Unit Test Time | < 100ms | Average time per unit test |
| Integration Test Time | < 1s | Average time per integration test |
| UI Test Time | < 10s | Average time per UI test |
| Total Test Time | < 5 min | Total time for all tests |

---

## Test Review Process

### Code Review Checklist

**For All Tests**:
- [ ] Test names are descriptive
- [ ] Test structure is clear (AAA or GWT)
- [ ] Test assertions are specific
- [ ] Test covers the intended scenario
- [ ] Test is deterministic
- [ ] Test is independent
- [ ] Test cleanup is performed

**For Unit Tests**:
- [ ] Tests one unit of code
- [ ] Uses mock dependencies
- [ ] Tests happy path
- [ ] Tests edge cases
- [ ] Tests error cases

**For Integration Tests**:
- [ ] Tests real interactions
- [ ] Tests component integration
- [ ] Tests error handling
- [ ] Tests edge cases

**For UI Tests**:
- [ ] Tests user journeys
- [ ] Uses unique identifiers
- [ ] Tests accessibility
- [ ] Tests localization

---

## Test Templates

### Unit Test Template

```swift
import XCTest
@testable import FeatureName

final class {ClassUnderTest}Tests: XCTestCase {
    
    // MARK: - Properties
    
    private var sut: {ClassUnderTest}!
    private var mockDependency: Mock{Dependency}! 
    
    // MARK: - Lifecycle
    
    override func setUp() {
        super.setUp()
        mockDependency = Mock{Dependency}()
        sut = {ClassUnderTest}(dependency: mockDependency)
    }
    
    override func tearDown() {
        sut = nil
        mockDependency = nil
        super.tearDown()
    }
    
    // MARK: - Test Cases
    
    func test{MethodUnderTest}_HappyPath_ReturnsExpectedResult() {
        // Arrange
        let input = {TestInput}()
        let expectedOutput = {ExpectedOutput}()
        mockDependency.stubMethodReturnValue = expectedOutput
        
        // Act
        let result = sut.{methodUnderTest}(input: input)
        
        // Assert
        XCTAssertEqual(result, expectedOutput)
        XCTAssertTrue(mockDependency.methodCalled)
    }
    
    func test{MethodUnderTest}_EdgeCase_ReturnsExpectedResult() {
        // Arrange
        let edgeCaseInput = {EdgeCaseInput}()
        let expectedOutput = {ExpectedOutput}()
        mockDependency.stubMethodReturnValue = expectedOutput
        
        // Act
        let result = sut.{methodUnderTest}(input: edgeCaseInput)
        
        // Assert
        XCTAssertEqual(result, expectedOutput)
    }
    
    func test{MethodUnderTest}_ErrorCase_ThrowsExpectedError() {
        // Arrange
        let invalidInput = {InvalidInput}()
        mockDependency.stubMethodThrowsError = {ExpectedError}()
        
        // Act & Assert
        XCTAssertThrowsError(
            try sut.{methodUnderTest}(input: invalidInput)
        ) { error in
            XCTAssertEqual(error as? {ExpectedError}, {ExpectedError}())
        }
    }
}

// MARK: - Mocks

private final class Mock{Dependency}: {DependencyProtocol} {
    var methodCalled = false
    var methodInput: {InputType}?
    var stubMethodReturnValue: {ReturnType}?
    var stubMethodThrowsError: Error?
    
    func method(input: {InputType}) throws -> {ReturnType} {
        methodCalled = true
        methodInput = input
        
        if let error = stubMethodThrowsError {
            throw error
        }
        
        guard let returnValue = stubMethodReturnValue else {
            throw {DefaultError}()
        }
        
        return returnValue
    }
}
```

---

### Integration Test Template

```swift
import XCTest
@testable import FeatureName

final class {Component}IntegrationTests: XCTestCase {
    
    // MARK: - Properties
    
    private var sut: {Component}!
    private var realDependencyA: {DependencyA}!
    private var realDependencyB: {DependencyB}!
    
    // MARK: - Lifecycle
    
    override func setUp() {
        super.setUp()
        realDependencyA = {DependencyA}()
        realDependencyB = {DependencyB}()
        sut = {Component}(dependencyA: realDependencyA, dependencyB: realDependencyB)
    }
    
    override func tearDown() {
        sut = nil
        realDependencyA = nil
        realDependencyB = nil
        super.tearDown()
    }
    
    // MARK: - Test Cases
    
    func test{Scenario}_ComponentsInteractCorrectly() {
        // Arrange
        let input = {TestInput}()
        let expectedOutput = {ExpectedOutput}()
        
        // Act
        let result = sut.{methodUnderTest}(input: input)
        
        // Assert
        XCTAssertEqual(result, expectedOutput)
        // Verify component interaction
    }
    
    func test{Scenario}_ErrorHandlingWorksCorrectly() {
        // Arrange
        let invalidInput = {InvalidInput}()
        
        // Act & Assert
        XCTAssertThrowsError(
            try sut.{methodUnderTest}(input: invalidInput)
        ) { error in
            XCTAssertEqual(error as? {ExpectedError}, {ExpectedError}())
        }
    }
}
```

---

## Test Best Practices

### General Best Practices

✅ **Do**:
- Write tests first (TDD) when possible
- Write tests for all business logic
- Write tests for all edge cases
- Write tests for all error cases
- Keep tests focused and fast
- Keep tests maintainable
- Keep tests readable
- Run tests frequently

❌ **Don't**:
- Write tests that test implementation details
- Write tests that are hard to maintain
- Write tests that are slow
- Write tests that are flaky
- Write tests that are unclear
- Ignore failing tests
- Skip writing tests

### Swift-Specific Best Practices

✅ **Do**:
- Use XCTest framework
- Use @testable import for internal access
- Use XCTAssert functions for assertions
- Use XCTestExpectation for async code
- Use XCTWait for async code
- Use XCTestCase for test classes

❌ **Don't**:
- Use print statements for debugging
- Use sleep for timing
- Use force unwrap in tests
- Use shared state between tests
- Use global variables in tests

### SwiftUI-Specific Best Practices

✅ **Do**:
- Use ViewInspector for SwiftUI tests
- Test user interactions
- Test UI state changes
- Test accessibility
- Test localization

❌ **Don't**:
- Test implementation details
- Test private properties
- Create complex view hierarchies in tests
- Use real devices for all tests

---

## Constitution Alignment

This testing standard aligns with and supports all **Framework Constitution Principles**:

| Principle | Testing Support | Status |
|-----------|-----------------|--------|
| **I. Solo Developer + Agents Autonomy** | Testing enables agents to verify work autonomously | ✅ Core |
| **II. Explicit, Tested Business Logic** | Core principle: all business logic must have automated tests | ✅ Core |
| **III. Simplicity Over Abstraction** | Testing approach favors simple, testable code | ✅ Core |
| **IV. Informed Decisions via Explicit Options** | Test results provide data for informed decisions | ✅ High |
| **V. Complete Specification Before Implementation** | Tests verify complete specification implementation | ✅ Core |
| **VI. Quality Gates Are Mandatory** | Tests are required for all quality gates | ✅ Core |
| **VII. Documentation Is Part of the Code** | Tests serve as executable documentation | ✅ Core |
| **VIII. Personal and Private Data** | Tests verify privacy and data protection | ✅ High |
| **IX. Local-First Architecture** | Tests verify offline functionality | ✅ Medium |
| **X. Observability and Trust** | Tests verify logging and debugging capabilities | ✅ High |
| **A. Technology Stack Constraints** | Tests work within Swift + SwiftUI + SwiftData | ✅ Core |
| **B. Testing Constraints** | This document defines testing constraints | ✅ Core |
| **C. Performance Constraints** | Performance tests verify performance constraints | ✅ Core |
| **D. Security Constraints** | Security tests verify security constraints | ✅ Core |

---

## Related Documents

- [Constitution](../../00-constitution/constitution.md)
- [Architecture Standards](../architecture/README.md)
- [Documentation Standards](../documentation/README.md)
- [Implementation Phase Checklist](../../02-methodology/phases/04-implementation/checklist.md)
- [Gate 4 Checklist](../../05-checklists/gate-04-checklist.md)
