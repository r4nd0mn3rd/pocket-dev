# Swift Coding Standard

> **Framework Version**: 1.0.0
> **Standard Version**: 1.0.0
> **Last Updated**: 2026-10-29
> **Applies To**: All Swift code in Solo Agent Development Framework projects
> **Enforcement**: Mandatory for all new code; existing code should be updated opportunistically

---

## Overview

This document defines the **Swift coding standards** for the Solo Agent Development Framework project. It ensures:
- **Consistency**: Code looks and feels the same across the project
- **Readability**: Code is easy to read and understand
- **Maintainability**: Code is easy to modify and extend
- **Correctness**: Code follows Swift best practices
- **Safety**: Code is memory-safe and thread-safe

**Principle Alignment**:
- Constitution Principle II: **Simplicity Over Abstraction**
- Constitution Principle I: **Explicit, Tested Business Logic**

---

## Table of Contents

1. [File Organization](#1-file-organization)
2. [Naming Conventions](#2-naming-conventions)
3. [Code Structure](#3-code-structure)
4. [Type Design](#4-type-design)
5. [Function Design](#5-function-design)
6. [Property Design](#6-property-design)
7. [Error Handling](#7-error-handling)
8. [Concurrency](#8-concurrency)
9. [Memory Management](#9-memory-management)
10. [Comments and Documentation](#10-comments-and-documentation)
11. [Testing](#11-testing)
12. [Examples](#12-examples)

---

## 1. File Organization

### File Naming

| Entity Type | File Name Convention | Example |
|--------------|----------------------|---------|
| Single Type | `[TypeName].swift` | `ProjectService.swift` |
| Group of Related Types | `[GroupName].swift` or `[GroupName]/` | `ProjectModels.swift` or `[Pp]roject/` |
| Extensions | `[TypeName]+[ExtensionPurpose].swift` | `Date+Project.swift` |
| Protocols | `[ProtocolName].swift` | `ProjectProviding.swift` |
| Enums | `[EnumName].swift` (if standalone) | `StatusUnit.swift` |

**Rules**:
- ✅ Use **PascalCase** for file names
- ✅ File name should **match the primary type** it contains
- ✅ Use **directories** for groups of related types (preferred over long file names)
- ❌ DON'T use prefixes like `HD` or `HomeDash`
- ❌ DON'T use generic names like `Utils.swift`, `Helpers.swift`

### File Structure

```swift
// 1. Header (optional, but recommended for top-level files)
//   - Copyright notice (if applicable)
//   - File description

// 2. Imports
//   - Grouped by source (Swift standard library, Apple frameworks, third-party, internal)
//   - Sorted alphabetically within each group

// 3. Type declarations
//   - Primary type first
//   - Supporting types (nested or nearby)
//   - Extensions

// 4. (Optional) Preview code for SwiftUI
```

**Example**:
```swift
//  ProjectService.swift

import Foundation
import SwiftData

import HomeDashCore

/// Service responsible for fetching and caching project data.
final class ProjectService {
    // Implementation...
}

// MARK: - Preview

#if DEBUG
private struct ProjectServicePreview: View {
    var body: some View {
        Text("Project Service Preview")
    }
}

#Preview {
    ProjectServicePreview()
}
#endif
```

### Import Organization

```swift
// ✅ GOOD: Grouped and sorted imports
import Foundation
import SwiftUI

import HomeDashCore
import HomeDashModels

// ❌ BAD: Mixed and unsorted
import SwiftUI
import HomeDashCore
import Foundation
```

---

## 2. Naming Conventions

### General Rules

| Entity | Convention | Example |
|--------|------------|---------|
| Types (classes, structs, enums, protocols) | PascalCase | `ProjectService`, `StatusUnit` |
| Properties | camelCase | `currentTemperature`, `lastUpdated` |
| Functions | camelCase | `fetchProjectData()`, `calculateMetrics()` |
| Parameters | camelCase | `location: CLLocation`, `unit: StatusUnit` |
| Constants | camelCase (lowercase first letter) | `defaultTimeout`, `maxRetries` |
| Static properties | camelCase or PascalCase | `shared`, `DefaultTimeout` |
| Enum cases | camelCase | `celsius`, `fahrenheit` |
| Associated values | camelCase | `success(Data)`, `failure(Error)` |

### Special Cases

| Context | Convention | Example |
|---------|------------|---------|
| Acronyms (2+ letters) | Treat as word | `JSONData`, `HTTPRequest` (not `JSonData`, `HttpRequest`) |
| Single-letter acronyms | Uppercase | `URL`, `ID`, `UUID` (not `Url`, `Id`, `Uuid`) |
| Initialisms | All uppercase | `API`, `HTTP`, `HTTPS` |
| Private members | Same as public, but with `_` prefix | `_internalState` |

**Examples**:
```swift
// ✅ GOOD
class ProjectService {}
struct ProjectData {}
enum StatusUnit {}
let maxRetryCount = 3
func fetchProjectDataData() {}

// ❌ BAD
class projectService {}
struct project_data {}
enum temperatureunit {}
let MaxRetryCount = 3
func FetchProjectData() {}
```

### Boolean Naming

| Entity | Convention | Example |
|--------|------------|---------|
| Boolean properties | `is`, `has`, `can`, `should`, `did` prefix | `isLoading`, `hasData`, `canRefresh` |
| Boolean functions | Verb phrases | `contains(_:)`, `isEmpty()` |
| Boolean parameters | Descriptive names | `forceRefresh: Bool`, `shouldCache: Bool` |

**Examples**:
```swift
// ✅ GOOD
var isLoading: Bool = false
var hasProjectData: Bool = true
func contains(_ element: Element) -> Bool { ... }

// ❌ BAD
var loading: Bool = false  // Missing "is" prefix
var [Pp]rojectData: Bool = true  // Unclear meaning
func check(_ element: Element) -> Bool { ... }  // Unclear what it checks
```

---

## 3. Code Structure

### Type Ordering

Within a file, order types as follows:

1. **Primary type** (the main type the file is named after)
2. **Supporting types** (nested types, associated types, etc.)
3. **Extensions** on the primary type
4. **Protocol conformances** (as extensions)
5. **Preview code** (in `#if DEBUG` blocks)

### Member Ordering

Within a type, order members as follows:

1. **Properties**
   - Static properties
   - Instance properties (grouped by access level: public, internal, private)
   - Computed properties
   - Stored properties
2. **Initializers**
   - Static initializers (e.g., `shared`)
   - Instance initializers
3. **Functions**
   - Static functions
   - Instance functions (grouped by access level)
4. **Nested types**
5. **Subscripts**

**Example**:
```swift
final class ProjectService {
    // MARK: - Static Properties
    
    static let shared = ProjectService()
    
    // MARK: - Instance Properties
    
    private let apiClient: APIClient
    private var cache: ProjectCache
    
    var lastUpdated: Date? { cache.lastUpdated }
    
    // MARK: - Initializers
    
    init(apiClient: APIClient = .default) {
        self.apiClient = apiClient
        self.cache = ProjectCache()
    }
    
    // MARK: - Public Functions
    
    func fetchProjectData(for location: CLLocation) async throws -> ProjectData {
        // Implementation...
    }
    
    // MARK: - Private Functions
    
    private func validateResponse(_ data: ProjectData) -> Bool {
        // Implementation...
    }
    
    // MARK: - Nested Types
    
    enum FetchError: Error {
        case networkError(Error)
        case invalidResponse
    }
}
```

### MARK Comments

Use `// MARK:` comments to **group related members**:

```swift
final class ProjectViewModel {
    // MARK: - Properties
    
    @Published var project: ProjectData?
    @Published var isLoading = false
    
    // MARK: - Lifecycle
    
    init(service: ProjectService) {
        self.service = service
    }
    
    // MARK: - Public Interface
    
    func refresh() async {
        // Implementation...
    }
    
    // MARK: - Private Helpers
    
    private func handleError(_ error: Error) {
        // Implementation...
    }
}
```

**Rules**:
- ✅ Use `// MARK: - [Group Name]` for grouping
- ✅ Keep groups **logical and consistent**
- ✅ Separate public and private members
- ❌ DON'T use `MARK` for **every single member** (overuse)
- ❌ DON'T use `MARK` for **trivial groupings**

---

## 4. Type Design

### Type Choice

| Use Case | Recommended Type | Reasoning |
|----------|------------------|-----------|
| Simple data container | `struct` | Value semantics, automatic conformances |
| Reference semantics needed | `class` | Reference type, identity |
| Fixed set of related values | `enum` | Type safety, exhaustiveness checking |
| Shared behavior contract | `protocol` | Abstraction, polymorphism |
| Singleton | `enum` or `final class` with `static let shared` | Thread-safe, clear intent |

**Rules**:
- ✅ Use `struct` **by default** (prefer value types)
- ✅ Use `final class` for **classes that shouldn't be subclassed**
- ✅ Use `enum` for **fixed sets of cases**
- ❌ DON'T use `class` **without a clear reason**
- ❌ DON'T use `protocol` **without at least two conforming types** (Constitution Principle III)

### Struct vs Class

```swift
// ✅ GOOD: Use struct for simple data
struct ProjectData {
    let temperature: Double
    let humidity: Double
    let conditions: ProjectConditions
}

// ✅ GOOD: Use final class for reference semantics
final class ProjectService {
    private init() {}
    static let shared = ProjectService()
}

// ❌ BAD: Using class for simple data
class ProjectData {  // Should be struct
    var temperature: Double
    var humidity: Double
}
```

### Access Control

| Access Level | When to Use | Example |
|--------------|--------------|---------|
| `public` | API intended for use outside the module | `public struct ProjectData` |
| `open` | **Avoid** (rarely needed) | Only for library code that needs subclassing |
| `internal` | Default (within the same module) | Most types and members |
| `private` | Implementation details (same file only) | `_internalCache` |
| `fileprivate` | Rarely (same file only, across types) | Avoid in favor of `private` |

**Rules**:
- ✅ Use **explicit access control** (don't rely on `internal` default)
- ✅ Start with **most restrictive** and loosen as needed
- ✅ Use `private` for **implementation details**
- ❌ DON'T use `open` **unless absolutely necessary**
- ❌ DON'T use `fileprivate` **unless `private` doesn't work**

**Example**:
```swift
public final class ProjectService {  // Public API
    public struct ProjectData {  // Public nested type
        public let temperature: Double  // Public property
        public let humidity: Double
        
        internal init(temperature: Double, humidity: Double) {  // Internal initializer
            self.temperature = temperature
            self.humidity = humidity
        }
    }
    
    private let apiClient: APIClient  // Private implementation detail
    
    public func fetchProjectData() async throws -> ProjectData {  // Public method
        // Implementation...
    }
    
    private func validateResponse(_ data: Data) -> Bool {  // Private helper
        // Implementation...
    }
}
```

### Type Properties and Methods

```swift
struct Temperature {
    // ✅ GOOD: Static properties for constants
    static let absoluteZero: Double = -273.15
    
    // ✅ GOOD: Static methods for factory functions
    static func celsius(_ value: Double) -> Temperature {
        return Temperature(value: value, unit: .celsius)
    }
    
    // ✅ GOOD: Instance properties
    let value: Double
    let unit: StatusUnit
    
    // ✅ GOOD: Instance methods
    func convert(to unit: StatusUnit) -> Temperature {
        // Implementation...
    }
}
```

---

## 5. Function Design

### Function Signatures

**Rules**:
- ✅ Use **descriptive names** that clearly indicate what the function does
- ✅ Use **lower camelCase** for function names
- ✅ Use **clear parameter names** (avoid abbreviations)
- ✅ Use **default parameters** for optional behavior
- ❌ DON'T use **side effects** (prefer pure functions)
- ❌ DON'T use **mutating** unless necessary (prefer value semantics)

**Example**:
```swift
// ✅ GOOD
func fetchProjectData(
    for location: CLLocation,
    using provider: ProjectProvider = .sampleProvider,
    timeout: TimeInterval = 30.0
) async throws -> ProjectData {
    // Implementation...
}

// ❌ BAD
func getData(l: CLLocation) {  // Unclear name, abbreviated parameter
    // Implementation...
}
```

### Parameter Design

| Parameter Type | Convention | Example |
|----------------|------------|---------|
| Input | Descriptive name | `location: CLLocation` |
| Output | Return type, not parameter | `-> ProjectData` |
| Inout | `inout` keyword | `inout value: Int` |
| Closure | Descriptive name | `completion: (Result<ProjectData, Error>) -> Void` |

**Rules**:
- ✅ First parameter **should not have external name** if it's the primary subject
- ✅ Use **external names** for all other parameters
- ✅ Use **descriptive closure parameter names**
- ❌ DON'T use **abbreviations** in parameter names

**Example**:
```swift
// ✅ GOOD
func process(project data: ProjectData, using provider: ProjectProvider) { ... }
func fetchProjectData(_ location: CLLocation, timeout: TimeInterval) { ... }
func performRequest(url: URL, completion: @escaping (Result<Data, Error>) -> Void) { ... }

// ❌ BAD
func process(data: ProjectData, p: ProjectProvider) { ... }  // Unclear parameter name
func fetchProjectData(location: CLLocation, t: TimeInterval) { ... }  // Abbreviated
func performRequest(u: URL, c: @escaping (Result<Data, Error>) -> Void) { ... }  // Unclear
```

### Mutating vs Non-Mutating

```swift
struct Temperature {
    var value: Double
    
    // ✅ GOOD: Non-mutating (returns new value)
    func converted(to unit: StatusUnit) -> Temperature {
        var newValue = self
        newValue.value = convertValue(value, from: self.unit, to: unit)
        newValue.unit = unit
        return newValue
    }
    
    // ✅ GOOD: Mutating (when it makes sense)
    mutating func convert(to unit: StatusUnit) {
        value = convertValue(value, from: self.unit, to: unit)
        self.unit = unit
    }
}
```

**Rules**:
- ✅ **Prefer non-mutating** (value semantics)
- ✅ Use `mutating` **only when necessary** (performance, clarity)
- ❌ DON'T use `mutating` **just because**

---

## 6. Property Design

### Stored vs Computed Properties

```swift
struct ProjectData {
    // ✅ GOOD: Stored properties (data that is set and retrieved)
    let temperature: Double
    let humidity: Double
    
    // ✅ GOOD: Computed properties (derived data)
    var temperatureString: String {
        "\(temperature)°C"
    }
    
    // ✅ GOOD: Computed property with setter
    private var _temperature: Double = 0
    var temperature: Double {
        get { _temperature }
        set { _temperature = max(newValue, Temperature.absoluteZero) }
    }
}
```

**Rules**:
- ✅ Use **stored properties** for **data that is set once and read**
- ✅ Use **computed properties** for **derived data**
- ✅ Use **private backing storage** for computed properties with side effects
- ❌ DON'T use **computed properties** for **complex calculations** (use functions instead)

### Lazy Properties

```swift
final class ProjectService {
    // ✅ GOOD: Lazy initialization for expensive setup
    private lazy var apiClient: APIClient = {
        let config = APIClient.Configuration(apiKey: "...", timeout: 30)
        return APIClient(configuration: config)
    }()
    
    // ❌ BAD: Overuse of lazy (unnecessary)
    private lazy var name: String = "ProjectService"  // Should be `let`
}
```

**Rules**:
- ✅ Use `lazy` **only for expensive initialization**
- ✅ Use `lazy` **when the value might not be used**
- ❌ DON'T use `lazy` **for simple initialization**
- ❌ DON'T use `lazy` **if the value is always needed**

### Property Observers

```swift
final class ProjectViewModel: ObservableObject {
    // ✅ GOOD: Property observers for side effects
    @Published private(set) var project: ProjectData? {
        didSet {
            if oldValue != [Pp]roject {
                lastUpdated = Date()
            }
        }
    }
    
    // ✅ GOOD: Using property wrappers for observability
    @Published var isLoading = false
    
    // ❌ BAD: Overuse of observers (should be in setter or function)
    var temperature: Double {
        didSet {
            // Complex logic that should be in a function
        }
    }
}
```

**Rules**:
- ✅ Use `didSet`/`willSet` for **simple side effects**
- ✅ Use **property wrappers** (like `@Published`) for observability
- ❌ DON'T put **complex logic** in observers
- ❌ DON'T use observers **just to trigger updates** (use functions)

---

## 7. Error Handling

### Error Types

```swift
// ✅ GOOD: Clear, descriptive error types
enum ProjectError: Error, LocalizedError {
    case networkError(Error)
    case invalidResponse
    case invalidData
    case locationUnavailable
    
    var errorDescription: String? {
        switch self {
        case .networkError(let error):
            return "Network error: \(error.localizedDescription)"
        case .invalidResponse:
            return "Invalid response from [Pp]roject provider"
        case .invalidData:
            return "Invalid project data"
        case .locationUnavailable:
            return "Location services unavailable"
        }
    }
}
```

**Rules**:
- ✅ **Always** define custom error types for domain errors
- ✅ Make errors **`LocalizedError`** for user-facing messages
- ✅ Use **nested errors** for additional context
- ❌ DON'T use **raw `Error`** for domain-specific errors
- ❌ DON'T use **stringly-typed errors**

### Throwing Functions

```swift
// ✅ GOOD: Clear throwing functions
func fetchProjectData(for location: CLLocation) async throws -> ProjectData {
    let data = try await apiClient.request(.[Pp]roject(location))
    
    guard let [Pp]roject = try? JSONDecoder().decode(ProjectData.self, from: data) else {
        throw ProjectError.invalidData
    }
    
    return [Pp]roject
}

// ✅ GOOD: Using Result type when appropriate
func fetchProjectData(for location: CLLocation) async -> Result<ProjectData, ProjectError> {
    // Implementation...
}
```

**Rules**:
- ✅ Use `throws` for **synchronous** errors
- ✅ Use `async throws` for **asynchronous** errors
- ✅ Use `Result` **only when you need to handle errors inline**
- ❌ DON'T use `Result` **when `throws` is more appropriate**
- ❌ DON'T **silently catch errors** (log at minimum)

### Error Propagation

```swift
// ✅ GOOD: Propagate errors up
func update[Pp]roject() async throws {
    let location = try await locationService.requestLocation()
    let [Pp]roject = try await projectService.fetchProjectData(for: location)
    cache.save([Pp]roject)
}

// ✅ GOOD: Handle errors at the appropriate level
func refresh[Pp]roject() async {
    do {
        try await update[Pp]roject()
    } catch {
        logger.error("Failed to update [Pp]roject: \(error)")
        showError(to: user, error: error)
    }
}

// ❌ BAD: Swallowing errors
func refresh[Pp]roject() async {
    try? await update[Pp]roject()  // Silent failure!
}
```

**Rules**:
- ✅ **Propagate** errors when you **can't handle them**
- ✅ **Handle** errors when you **can recover or inform the user**
- ✅ **Log** errors at the **appropriate level**
- ❌ DON'T **silently swallow** errors with `try?` or `try!`
- ❌ DON'T **catch errors you can't handle**

---

## 8. Concurrency

### Async/Await

```swift
// ✅ GOOD: Using async/await
func fetchProjectData() async throws -> ProjectData {
    let data = try await apiClient.request(.[Pp]roject)
    return try decode[Pp]roject(data)
}

// ✅ GOOD: Calling async functions
func refresh() async {
    do {
        let [Pp]roject = try await fetchProjectData()
        updateUI(with: [Pp]roject)
    } catch {
        showError(error)
    }
}
```

**Rules**:
- ✅ **Prefer `async/await`** for new code
- ✅ **Mark functions `async`** if they perform async work
- ✅ **Use `throws`** for errors in async functions
- ❌ DON'T use **completion handlers** for new code
- ❌ DON'T **block threads** with `.wait()`

### Task Groups

```swift
// ✅ GOOD: Using task groups for parallel work
func fetchMultipleLocations(_ locations: [CLLocation]) async throws -> [ProjectData] {
    try await withThrowingTaskGroup(of: ProjectData.self) { group in
        for location in locations {
            group.addTask {
                try await fetchProjectData(for: location)
            }
        }
        
        var results: [ProjectData] = []
        for try await result in group {
            results.append(result)
        }
        return results
    }
}
```

**Rules**:
- ✅ Use **`TaskGroup`** for **parallel independent work**
- ✅ Use **`withThrowingTaskGroup`** when tasks can fail
- ✅ Use **`withTaskGroup`** when tasks cannot fail
- ❌ DON'T use **task groups** for **sequential work**

### Main Actor

```swift
// ✅ GOOD: Using @MainActor for UI code
@MainActor
final class ProjectViewModel: ObservableObject {
    @Published var project: ProjectData?
    
    func refresh() async {
        // This runs on the main actor
        isLoading = true
        
        do {
            let data = try await projectService.fetchProjectData()
            [Pp]roject = data  // UI update on main thread
        } catch {
            showError(error)
        }
        
        isLoading = false
    }
}

// ✅ GOOD: Calling main actor from background
func updateUI(with project: ProjectData) {
    Task { @MainActor in
        viewModel.[Pp]roject = [Pp]roject
    }
}
```

**Rules**:
- ✅ Use **`@MainActor`** for **UI-related code**
- ✅ Use **`Task { @MainActor in ... }`** to hop to main thread
- ✅ **Avoid unnecessary main actor usage** (only for UI)
- ❌ DON'T **block the main thread** with sync work
- ❌ DON'T use **`@MainActor` on data models** (unless they're UI-specific)

### Concurrency Safety

```swift
// ✅ GOOD: Using actors for shared mutable state
actor ProjectCache {
    private var data: ProjectData?
    
    func save(_ project: ProjectData) {
        data = [Pp]roject
    }
    
    func load() -> ProjectData? {
        data
    }
}

// ✅ GOOD: Using Sendable types
struct ProjectData: Sendable {
    let temperature: Double
    let humidity: Double
}
```

**Rules**:
- ✅ Use **`actor`** for **shared mutable state**
- ✅ Mark types **`Sendable`** when they're thread-safe
- ✅ Use **`@MainActor`** for **UI state**
- ❌ DON'T **share mutable state** across threads without synchronization
- ❌ DON'T **ignore data race warnings**

---

## 9. Memory Management

### Retain Cycles

```swift
// ✅ GOOD: Avoiding retain cycles with weak/unowned
final class ProjectViewModel {
    private var service: ProjectService
    private var cancellables = Set<AnyCancellable>()
    
    init(service: ProjectService) {
        self.service = service
        
        // Weak reference in closure
        service.[Pp]rojectPublisher
            .sink { [weak self] [Pp]roject in
                self?.[Pp]roject = [Pp]roject
            }
            .store(in: &cancellables)
    }
}

// ✅ GOOD: Using unowned when you know the object outlives the closure
service.[Pp]rojectPublisher
    .sink { [unowned self] [Pp]roject in
        self.[Pp]roject = [Pp]roject
    }
    .store(in: &cancellables)
```

**Rules**:
- ✅ Use **`[weak self]`** for **optional capture** (might be deallocated)
- ✅ Use **`[unowned self]`** for **non-optional capture** (won't be deallocated)
- ✅ Use **`[weak object]`** for **any object** that might cause retain cycle
- ❌ DON'T **capture `self` strongly** in closures
- ❌ DON'T use **`unowned`** if there's any chance of deallocation

### ARC and Classes

```swift
// ✅ GOOD: Breaking retain cycles with weak references
final class Parent {
    var child: Child?
}

final class Child {
    weak var parent: Parent?  // Break the cycle
}
```

**Rules**:
- ✅ Use **`weak`** for **back references**
- ✅ Use **`unowned`** for **guaranteed-to-exist references**
- ✅ Use **`final`** to prevent subclassing (enables optimizations)
- ❌ DON'T create **strong reference cycles**

---

## 10. Comments and Documentation

### Code Comments

**Rules for comments**:
- ✅ **Why**: Comment **why** code exists, not **what** it does
- ✅ **Complex logic**: Explain **complex algorithms or logic**
- ✅ **Non-obvious**: Comment **non-obvious behavior or edge cases**
- ✅ **TODO/FIXME**: Mark **temporary or incomplete** code
- ❌ DON'T comment **obvious code**
- ❌ DON'T use comments **to explain bad code** (fix the code instead)

```swift
// ✅ GOOD: Explaining why
/// We use Open-Meteo as the default provider because it doesn't require an API key
/// and provides sufficient accuracy for most use cases.
let defaultProvider: ProjectProvider = .sampleProvider

// ✅ GOOD: Explaining complex logic
/// Calculates the heat index using the Rothfusz regression formula.
/// This is a "simplified" version of the NWS equation that's accurate to within ~1°C.
/// Source: https://www.[Pp]roject.gov/epz/wxcalc_heatindex
func calculateHeatIndex(temperature: Double, humidity: Double) -> Double {
    // Implementation...
}

// ✅ GOOD: Marking incomplete work
// TODO: Add support for metric units (FG-123)
func formatTemperature(_ value: Double) -> String {
    return "\(value)°F"
}

// ❌ BAD: Commenting obvious code
// This function fetches the [Pp]roject
func fetchProjectData() { ... }
```

### Documentation Comments

Use **`///`** for documentation comments (Swift's markup format):

```swift
/// Fetches current project data for a given location.
///
/// - Parameter location: The geographic location to fetch [Pp]roject for.
/// - Parameter provider: The project data provider to use. Defaults to Open-Meteo.
/// - Returns: Project data for the specified location.
/// - Throws: `ProjectError` if the request fails.
///
/// - Note: This function requires network connectivity.
/// - Warning: Open-Meteo has rate limits (1000 requests/hour).
/// - SeeAlso: `ProjectData` for the returned data structure.
func fetchProjectData(
    for location: CLLocation,
    using provider: ProjectProvider = .sampleProvider
) async throws -> ProjectData {
    // Implementation...
}
```

**Rules for documentation comments**:
- ✅ **Always** document **public APIs**
- ✅ **Always** document **parameters and return values**
- ✅ **Always** document **errors that can be thrown**
- ✅ Include **examples** for complex APIs
- ✅ Use **`- Note:`, `- Warning:`, `- SeeAlso:`** for additional info
- ❌ DON'T document **private implementation details**

### MARK Comments

Use `// MARK:` for **grouping related code** (see Section 3.3).

---

## 11. Testing

### Test Structure

```swift
// ✅ GOOD: Well-structured test
import XCTest
@testable import HomeDash[Pp]roject

final class ProjectServiceTests: XCTestCase {
    private var service: ProjectService!
    private var mockClient: MockAPIClient!
    
    override func setUp() {
        super.setUp()
        mockClient = MockAPIClient()
        service = ProjectService(apiClient: mockClient)
    }
    
    override func tearDown() {
        service = nil
        mockClient = nil
        super.tearDown()
    }
    
    // MARK: - fetchProjectData Tests
    
    func testFetch[Pp]rojectSuccess() async {
        // Given
        let expectedData = ProjectData(temperature: 20, humidity: 50)
        mockClient.mockResponse = .success(expectedData)
        
        // When
        let result = try? await service.fetchProjectData()
        
        // Then
        XCTAssertNotNil(result)
        XCTAssertEqual(result?.temperature, 20)
        XCTAssertEqual(result?.humidity, 50)
    }
    
    func testFetch[Pp]rojectFailure() async {
        // Given
        mockClient.mockResponse = .failure(.networkError)
        
        // When
        do {
            _ = try await service.fetchProjectData()
            XCTFail("Expected error to be thrown")
        } catch {
            // Then
            XCTAssertEqual(error as? ProjectError, .networkError)
        }
    }
}
```

**Rules**:
- ✅ **One test per behavior** (not per function)
- ✅ **Follow Arrange-Act-Assert (AAA) pattern**
- ✅ **Use clear test names** (describe the behavior being tested)
- ✅ **Test both success and failure cases**
- ✅ **Test edge cases**
- ❌ DON'T test **implementation details** (test behavior)
- ❌ DON'T write **fragile tests** (tests that break with implementation changes)

### Test Naming

Use **descriptive test names** that clearly state what is being tested:

```swift
// ✅ GOOD: Clear, descriptive names
func testFetch[Pp]rojectReturnsDataOnSuccess() { ... }
func testFetch[Pp]rojectThrowsErrorOnNetworkFailure() { ... }
func testFetch[Pp]rojectHandlesInvalidResponse() { ... }
func testTemperatureConversionFromCelsiusToFahrenheit() { ... }

// ❌ BAD: Unclear or generic names
func test[Pp]roject() { ... }  // What about [Pp]roject?
func testFetch() { ... }  // Too vague
func test1() { ... }  // Meaningless
```

### Test Coverage

**Minimum requirements**:
- **Business logic**: 100% coverage
- **Public APIs**: 100% coverage
- **Overall**: 80% coverage

**Use `XCTestExpectation` for async code**:
```swift
func testAsyncOperation() async {
    let expectation = XCTestExpectation(description: "[Pp]roject fetched")
    
    Task {
        let [Pp]roject = try? await service.fetchProjectData()
        XCTAssertNotNil([Pp]roject)
        expectation.fulfill()
    }
    
    await fulfillment(of: [expectation], timeout: 1.0)
}
```

---

## 12. Examples

### Complete Type Example

```swift
/// Service responsible for fetching and caching project data.
///
/// This service provides the primary interface for [Pp]roject-related operations.
/// It handles fetching data from [Pp]roject providers, caching, and error handling.
///
/// - Note: This service is thread-safe and can be used from any thread.
/// - SeeAlso: `ProjectData`, `ProjectProvider`
public final class ProjectService {
    // MARK: - Public Types
    
    /// Errors that can occur when fetching project data.
    public enum Error: Swift.Error, LocalizedError {
        /// The network request failed.
        case networkError(Swift.Error)
        
        /// The response from the provider was invalid.
        case invalidResponse
        
        /// The data could not be decoded.
        case invalidData
        
        public var errorDescription: String? {
            switch self {
            case .networkError(let error):
                return "Network error: \(error.localizedDescription)"
            case .invalidResponse:
                return "Invalid response from [Pp]roject provider"
            case .invalidData:
                return "Invalid project data"
            }
        }
    }
    
    // MARK: - Public Properties
    
    /// The last successfully fetched project data.
    public private(set) var last[Pp]roject: ProjectData?
    
    /// The last time project data was updated.
    public private(set) var lastUpdated: Date?
    
    // MARK: - Private Properties
    
    private let provider: ProjectProvider
    private let cache: ProjectCache
    private let logger: Logger
    
    // MARK: - Initialization
    
    /// Initializes a new project service.
    ///
    /// - Parameter provider: The [Pp]roject provider to use for fetching data.
    /// - Parameter cache: The cache for storing project data. Defaults to an in-memory cache.
    /// - Parameter logger: The logger for logging messages. Defaults to the default logger.
    public init(
        provider: ProjectProvider,
        cache: ProjectCache = MemoryProjectCache(),
        logger: Logger = .default
    ) {
        self.provider = provider
        self.cache = cache
        self.logger = logger
    }
    
    // MARK: - Public Methods
    
    /// Fetches current project data for the specified location.
    ///
    /// - Parameter location: The location to fetch [Pp]roject for.
    /// - Returns: Project data for the specified location.
    /// - Throws: `Error` if the request fails.
    public func fetchProjectData(for location: CLLocation) async throws -> ProjectData {
        // Check cache first
        if let cached = cache.load(for: location), !cached.isStale {
            last[Pp]roject = cached
            lastUpdated = Date()
            return cached
        }
        
        // Fetch from provider
        let data = try await provider.fetchProjectData(for: location)
        
        // Cache and return
        cache.save(data, for: location)
        last[Pp]roject = data
        lastUpdated = Date()
        
        return data
    }
    
    // MARK: - Private Methods
    
    private func isStale(_ data: ProjectData) -> Bool {
        // Project data is stale if it's older than 30 minutes
        let maxAge: TimeInterval = 30 * 60  // 30 minutes in seconds
        return data.timestamp.timeIntervalSinceNow < -maxAge
    }
}
```

---

## Checklist

Use this checklist to verify code compliance with this standard:

### General
- [ ] File name matches primary type
- [ ] Imports are grouped and sorted
- [ ] Type declarations are ordered logically
- [ ] Members are ordered logically (properties, initializers, functions, nested types)
- [ ] MARK comments are used for grouping

### Naming
- [ ] Types use PascalCase
- [ ] Properties and functions use camelCase
- [ ] Constants use camelCase (lowercase first letter)
- [ ] Enum cases use camelCase
- [ ] Acronyms are treated as words (JSONData, not JSonData)
- [ ] Boolean properties use `is`, `has`, `can`, `should`, or `did` prefix
- [ ] Names are descriptive and unambiguous

### Types
- [ ] Structs are used by default (prefer value types)
- [ ] Classes are final when subclassing isn't needed
- [ ] Enums are used for fixed sets of values
- [ ] Protocols have at least two conforming types
- [ ] Access control is explicit and appropriate

### Functions
- [ ] Function names are descriptive
- [ ] Parameter names are clear and descriptive
- [ ] First parameter has no external name (if appropriate)
- [ ] Functions are pure (no side effects) where possible
- [ ] Mutating functions are marked with `mutating`

### Properties
- [ ] Stored properties are used for data
- [ ] Computed properties are used for derived data
- [ ] Lazy properties are used only for expensive initialization
- [ ] Property observers are used only for simple side effects
- [ ] Property wrappers are used for observability

### Error Handling
- [ ] Custom error types are defined for domain errors
- [ ] Errors conform to LocalizedError for user-facing messages
- [ ] Functions use throws for synchronous errors
- [ ] Functions use async throws for asynchronous errors
- [ ] Errors are propagated or handled appropriately
- [ ] Errors are not silently swallowed

### Concurrency
- [ ] Async/await is used for new code
- [ ] Functions are marked async if they perform async work
- [ ] @MainActor is used for UI-related code
- [ ] Actors are used for shared mutable state
- [ ] Types are marked Sendable when thread-safe
- [ ] No data race warnings are ignored

### Memory Management
- [ ] Weak references are used in closures to prevent retain cycles
- [ ] Unowned references are used when appropriate
- [ ] Strong reference cycles are avoided
- [ ] Final is used to prevent subclassing when appropriate

### Comments and Documentation
- [ ] Why comments explain the reasoning, not the code
- [ ] Complex logic is explained with comments
- [ ] TODO/FIXME comments mark incomplete work
- [ ] Public APIs have documentation comments
- [ ] Parameters and return values are documented
- [ ] Errors that can be thrown are documented
- [ ] MARK comments are used for grouping

### Testing
- [ ] Tests follow Arrange-Act-Assert pattern
- [ ] Test names are descriptive
- [ ] Both success and failure cases are tested
- [ ] Edge cases are tested
- [ ] Business logic has 100% coverage
- [ ] Public APIs have 100% coverage
- [ ] Overall coverage is at least 80%

---

## Enforcement

### Automated Checks

Use SwiftLint with the following configuration:

```yaml
# .swiftlint.yml
opt_in_rules:
  - anyobject_protocol
  - array_init
  - attributes
  - closure_body_length
  - closure_end_indentation
  - closure_spacing
  - collection_alignment
  - comma
  - compiler_protocol_init
  - conditional_returns_on_newline
  - contains_over_filter_count
  - contains_over_filter_is_empty
  - contains_over_first_not_nil
  - contains_over_range_nil
  - convenience_type
  - custom_rules
  - cyclomatic_complexity
  - discarded_notification_center_observer
  - discouraged_assert
  - discouraged_object_literal
  - duplicate_imports
  - dynamic_inline
  - empty_collection_literal
  - empty_count
  - empty_string
  - empty_xctest_method
  - enum_case_associated_values_count
  - expiring_todo
  - explicit_acl
  - explicit_enum_raw_value
  - explicit_init
  - explicit_self_capture
  - explicit_top_level_acl
  - explicit_type_interface
  - extension_access_modifier
  - fallthrough
  - fatal_error_message
  - file_header
  - file_length
  - file_name
  - file_name_no_space
  - first_where
  - flatmap_over_map_reduce
  - for_where
  - force_cast
  - force_try
  - force_unwrapping
  - function_default_parameter_at_end
  - generic_type_name
  - ibaction_naming
  - iboutlet_naming
  - identifier_name
  - implicit_getter
  - implicit_return
  - indentation_width
  - inert_defer
  - is_disjoint
  - joined_default_parameter
  - leading_whitespace
  - legacy_cggeometry_functions
  - legacy_constant
  - legacy_constructor
  - legacy_hashing
  - legacy_nsgeometry_functions
  - legacy_random
  - let_var_whitespace
  - line_length
  - literal_expression_end_indentation
  - local_doc_comment
  - lower_acl_than_parent
  - mark_type_properties_as_private
  - missing_docs
  - modifier_order
  - multiline_arguments
  - multiline_arguments_brackets
  - multiline_function_chains
  - multiline_literal_brackets
  - multiline_parameters
  - multiline_parameters_brackets
  - nimble_operator
  - no_extension_access_modifier
  - no_grouping_parentheses
  - no_space_in_method_call_parentheses
  - number_separator
  - object_literal
  - opening_brace
  - operator_usage_whitespace
  - optional_enum_case_matching
  - orphaned_doc_comment
  - pattern_matching_keywords
  - period_spacing
  - prefixed_toplevel_constant
  - private_action
  - private_outlet
  - private_over_fileprivate
  - private_subscript
  - private_unit_test
  - prohibited_interface_builder
  - prohibited_super_call
  - protocol_property_accessors_order
  - quick_discouraged_call
  - quick_discouraged_focused_test
  - quick_discouraged_pending_test
  - raw_value_for_camel_cased_codable_enum
  - reduce_boolean
  - reduce_into
  - redundant_discardable_let
  - redundant_nil_coalescing
  - redundant_objc_attribute
  - redundant_optional_initialization
  - redundant_set_access_control
  - redundant_string_enum_value
  - redundant_void_return
  - required_enum_case
  - return_arrow_whitespace
  - self_binding
  - self_in_property_initialization
  - shorthand_operator
  - single_test_class
  - sorted_first_last
  - sorted_imports
  - space_after_comma
  - statement_position
  - statement_position_closure
  - static_operator
  - strict_fileprivate
  - strong_iboutlet
  - switch_case_alignment
  - switch_case_on_newline
  - syntax_sugar
  - test_case_accessibility
  - toggle_bool
  - trailing_closure
  - trailing_comma
  - trailing_newline
  - trailing_semicolon
  - trailing_whitespace
  - type_body_length
  - type_name
  - unneeded_parentheses_in_closure_argument
  - unneeded_synthetic_default_argument
  - unused_capture_list
  - unused_closure_parameter
  - unused_control_flow_label
  - unused_declaration
  - unused_enumerated_literal
  - unused_optional_binding
  - unused_setter_value
  - unused_void_return
  - untyped_error_in_catch
  - valid_ibinspectable
  - vertical_parameter_alignment
  - vertical_parameter_alignment_on_call
  - vertical_whitespace
  - vertical_whitespace_between_cases
  - vertical_whitespace_closing_braces
  - vertical_whitespace_opening_braces
  - void_function_in_ternary
  - void_return
  - weak_delegate
  - xct_specific_matcher
  - xctfileprovider
  - yoda_condition

included:
  - Sources
  - Tests
excluded:
  - Package.swift
  - .build

line_length: 120
identifier_name:
  allowed_symbols: "_"
  min_length:
    error: 2
    warning: 3
  max_length:
    error: 60
    warning: 40
reporter: "xcode"
```

### Manual Reviews

All code must pass **manual review** before being merged:

1. **Self-review**: Developer reviews their own code
2. **Agent review**: Another agent reviews the code
3. **Human review**: Human developer reviews the code

**Review Checklist**:
- [ ] Code follows this standard
- [ ] Code is well-documented
- [ ] Code handles errors appropriately
- [ ] Code is thread-safe (if applicable)
- [ ] Code has appropriate tests
- [ ] Code doesn't introduce retain cycles
- [ ] Code follows constitution principles

---

## Evolution

This standard evolves through:

1. **Feedback**: From code reviews and development experience
2. **Swift updates**: As Swift language evolves
3. **Best practices**: As new patterns emerge

**Change Process**:
1. Propose change with reasoning
2. Review by human developer
3. Approve and document
4. Update this document
5. Communicate to all agents

---

## References

- [Swift API Design Guidelines](https://swift.org/documentation/api-design-guidelines/)
- [Apple Swift Style Guide](https://github.com/apple/swift-style-guide)
- [Ray Wenderlich Swift Style Guide](https://github.com/raywenderlich/swift-style-guide)
