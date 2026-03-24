"use strict";var Fe=Object.create;var U=Object.defineProperty;var $e=Object.getOwnPropertyDescriptor;var Me=Object.getOwnPropertyNames;var je=Object.getPrototypeOf,Ue=Object.prototype.hasOwnProperty;var We=(t,n)=>{for(var s in n)U(t,s,{get:n[s],enumerable:!0})},le=(t,n,s,c)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of Me(n))!Ue.call(t,a)&&a!==s&&U(t,a,{get:()=>n[a],enumerable:!(c=$e(n,a))||c.enumerable});return t};var I=(t,n,s)=>(s=t!=null?Fe(je(t)):{},le(n||!t||!t.__esModule?U(s,"default",{value:t,enumerable:!0}):s,t)),He=t=>le(U({},"__esModule",{value:!0}),t);var dt={};We(dt,{default:()=>_e});module.exports=He(dt);var i=require("@raycast/api"),C=I(require("react")),j=require("fs");var l=require("@raycast/api");var ue="claudecast-custom-prompts",de="claudecast-prompt-usage",Be=[{id:"spec-driven-planning",name:"Spec-Driven Planning",category:"planning",description:"Create a detailed spec before writing code",prompt:`You are a senior software architect creating a comprehensive specification for {{feature}}.{{#if projectPath}}

Project location: {{projectPath}}{{/if}}

Create a detailed specification document covering:

## 1. Executive Summary
- One-paragraph description of the feature
- Primary user benefit and business value

## 2. Functional Requirements
- **User Stories**: As a [user], I want [goal] so that [benefit]
- **Acceptance Criteria**: Specific, testable conditions for each requirement
- **Priority**: Must-have vs nice-to-have features

## 3. Technical Requirements
- **Performance**: Response times, throughput, resource limits
- **Scalability**: Expected load, growth projections
- **Security**: Authentication, authorization, data protection needs
- **Compatibility**: Browser/platform support, API versions

## 4. Data Model
- **Entities**: Key data structures with fields and types
- **Relationships**: How entities connect (1:1, 1:N, N:N)
- **Validation Rules**: Constraints and business rules
- **Migration Strategy**: How to handle existing data

## 5. API Contracts
- **Endpoints**: URLs, methods, request/response schemas
- **Error Handling**: Error codes, messages, retry behavior
- **Versioning**: How API changes will be managed

## 6. Edge Cases & Error Handling
- **Input Validation**: Invalid, missing, malformed data
- **State Transitions**: Invalid state changes, race conditions
- **External Failures**: Network issues, service unavailability
- **Resource Limits**: Memory, storage, rate limits

## 7. Testing Strategy
- **Unit Tests**: Key functions to test in isolation
- **Integration Tests**: Component interaction scenarios
- **E2E Tests**: Critical user journeys
- **Performance Tests**: Load and stress test scenarios

## 8. Risk Assessment
- **Technical Risks**: Complex integrations, new technologies
- **Dependencies**: External services, third-party libraries
- **Mitigation**: Fallback plans and contingencies

Be thorough but practical. Focus on decisions that will affect implementation. Flag any ambiguities that need clarification before coding begins.`,variables:[{name:"feature",description:"The feature to plan",type:"text"},{name:"projectPath",description:"Path to create the new project (optional)",type:"path",allowDirectories:!0}],isBuiltIn:!0,usageCount:0,icon:l.Icon.Document,tintColor:l.Color.Blue},{id:"architecture-review",name:"Architecture Review",category:"planning",description:"Review and suggest improvements to component architecture",prompt:`You are a senior software architect conducting a comprehensive architecture review of {{component}}.

Analyze the architecture across these dimensions:

## 1. SOLID Principles Assessment
- **Single Responsibility**: Does each module have one reason to change?
- **Open/Closed**: Can behavior be extended without modification?
- **Liskov Substitution**: Can subtypes substitute base types safely?
- **Interface Segregation**: Are interfaces focused and minimal?
- **Dependency Inversion**: Do high-level modules depend on abstractions?

## 2. Separation of Concerns
- **Layer Boundaries**: Are presentation, business logic, and data access separated?
- **Cross-Cutting Concerns**: How are logging, auth, caching handled?
- **Responsibility Distribution**: Is any component doing too much?

## 3. Coupling & Cohesion Analysis
- **Afferent Coupling**: How many modules depend on this component?
- **Efferent Coupling**: How many dependencies does this component have?
- **Cohesion Score**: Do related functions stay together?
- **Circular Dependencies**: Are there any dependency cycles?

## 4. Scalability Assessment
- **Horizontal Scaling**: Can this scale across multiple instances?
- **Bottlenecks**: What are the limiting factors for throughput?
- **State Management**: How is state handled across instances?
- **Async Patterns**: Are long-running operations non-blocking?

## 5. Testability Analysis
- **Dependency Injection**: Can dependencies be mocked/stubbed?
- **Pure Functions**: Are there side-effect-free functions to test?
- **Integration Seams**: Where can tests intercept behavior?
- **Test Data**: Can test scenarios be set up easily?

## 6. Maintainability Factors
- **Code Navigation**: Can developers find relevant code quickly?
- **Change Impact**: How far do changes ripple?
- **Documentation**: Is the architecture self-documenting?
- **Onboarding**: How long to understand the architecture?

## 7. Security Architecture
- **Attack Surface**: What entry points exist?
- **Trust Boundaries**: Where does trusted/untrusted code meet?
- **Data Flow**: Where does sensitive data travel?
- **Failure Modes**: What happens when security checks fail?

For each issue found, provide:
1. **Problem**: Clear description of the architectural concern
2. **Impact**: How this affects the system (scale: Low/Medium/High/Critical)
3. **Recommendation**: Specific, actionable improvement with code example
4. **Effort Estimate**: Rough complexity (Small/Medium/Large)

Prioritize recommendations by impact-to-effort ratio.`,variables:[{name:"component",description:"Component or module to review",type:"text"}],isBuiltIn:!0,usageCount:0,icon:l.Icon.Building,tintColor:l.Color.Purple},{id:"tdd-kickoff",name:"TDD Kickoff",category:"tdd",description:"Start TDD by writing failing tests first",prompt:`You are a test-driven development expert. We're implementing {{feature}} using strict TDD methodology.

Expected behaviors:
{{behaviors}}

## Your Task
Write comprehensive failing tests BEFORE any implementation code.

## Testing Pyramid Strategy
Structure tests across the pyramid:

### 1. Unit Tests (70% of tests)
- Test individual functions in isolation
- Mock all external dependencies
- Fast execution (< 10ms per test)
- Cover all code paths

### 2. Integration Tests (20% of tests)
- Test component interactions
- Use real dependencies where practical
- Test API contracts between modules

### 3. E2E Tests (10% of tests)
- Test critical user journeys
- Verify system works end-to-end

## Test Writing Guidelines

### Naming Convention
Use: \`describe [unit] when [condition] should [expected behavior]\`
Example: \`describe UserService when email is invalid should throw ValidationError\`

### AAA Pattern
Structure each test as:
- **Arrange**: Set up test data and mocks
- **Act**: Execute the code under test
- **Assert**: Verify the expected outcome

### Coverage Requirements
For each behavior, write tests for:
- **Happy Path**: Normal, expected inputs
- **Edge Cases**: Boundary values, empty inputs, max values
- **Error Cases**: Invalid inputs, exceptions, failures
- **Async Scenarios**: Timeouts, race conditions (if applicable)

### Assertion Best Practices
- One logical assertion per test (multiple expects for same concept OK)
- Use specific matchers (\`toEqual\`, \`toThrow\`, not just \`toBeTruthy\`)
- Test behavior, not implementation details
- Avoid testing private methods directly

## Mock Guidelines
- Only mock what you don't own (external services, APIs)
- Prefer dependency injection over module mocking
- Verify mock interactions when behavior depends on them

## Output Format
For each test file:
1. Imports and setup
2. Describe blocks organized by feature
3. Individual test cases with clear names
4. Helper functions at the bottom

After the tests, explain:
- What each test group verifies
- Why certain edge cases were included
- Any test utilities or fixtures needed

**IMPORTANT**: Do NOT implement the feature. Only write tests that will initially FAIL.`,variables:[{name:"feature",description:"Feature to test",type:"text"},{name:"behaviors",description:"Expected behaviors (one per line)",type:"text"}],isBuiltIn:!0,usageCount:0,icon:l.Icon.CheckCircle,tintColor:l.Color.Green},{id:"test-coverage-audit",name:"Test Coverage Audit",category:"tdd",description:"Find untested edge cases and write tests for gaps",prompt:`You are a QA engineer specializing in test coverage analysis. Audit the test coverage for:

{{code}}

## Analysis Framework

### 1. Code Path Analysis
- Identify all branches (if/else, switch, ternary)
- Map all possible execution paths
- Note which paths lack test coverage

### 2. Boundary Value Analysis
For each input parameter, check tests exist for:
- **Minimum value**: Lowest valid input
- **Maximum value**: Highest valid input
- **Just below minimum**: Invalid low boundary
- **Just above maximum**: Invalid high boundary
- **Typical value**: Common case
- **Empty/null/undefined**: Missing input

### 3. Equivalence Partitioning
- Group inputs into equivalence classes
- Verify at least one test per class
- Identify missing equivalence classes

### 4. Error Path Coverage
Check for tests covering:
- **Thrown exceptions**: Each throw statement
- **Rejected promises**: Async error paths
- **Error callbacks**: Error handler invocations
- **Validation failures**: Input validation errors
- **External failures**: API errors, network issues

### 5. State Transition Testing
- Map state transitions in the code
- Verify tests for each valid transition
- Test invalid state transitions

### 6. Integration Point Coverage
- Test interactions with dependencies
- Verify correct data passed to dependencies
- Test handling of dependency responses

### 7. Async/Timing Coverage
- Race condition scenarios
- Timeout handling
- Concurrent operation edge cases

## Coverage Gaps Report

For each gap found, provide:

### Gap #N: [Description]
**Location**: File:line number
**Type**: [Branch/Boundary/Error/Integration/Async]
**Risk Level**: [Low/Medium/High/Critical]
**What could break**: Specific failure scenario
**Test to add**:
\`\`\`typescript
// Complete, runnable test code
\`\`\`

## Coverage Metrics Assessment
- Estimate current line coverage %
- Estimate current branch coverage %
- Identify functions with 0% coverage
- Highlight high-risk low-coverage areas

## Prioritized Test Recommendations
Rank the missing tests by:
1. Risk of bugs reaching production
2. Frequency of code path execution
3. Effort to write the test

Focus on tests that would catch real bugs, not just increase coverage numbers.`,variables:[{name:"code",description:"Code to audit",type:"code",allowRepositoryPath:!0}],isBuiltIn:!0,usageCount:0,icon:l.Icon.BarChart,tintColor:l.Color.Green},{id:"security-review",name:"Security Review",category:"review",description:"Check for security vulnerabilities",prompt:`You are a senior security engineer performing a comprehensive security audit. Review this code:

{{code}}

## OWASP Top 10 Checklist

### A01: Broken Access Control
- [ ] Missing authorization checks on sensitive operations
- [ ] Insecure direct object references (IDOR)
- [ ] Path traversal vulnerabilities
- [ ] CORS misconfiguration
- [ ] Privilege escalation opportunities

### A02: Cryptographic Failures
- [ ] Sensitive data transmitted in cleartext
- [ ] Weak or deprecated algorithms (MD5, SHA1, DES)
- [ ] Hardcoded secrets, keys, or passwords
- [ ] Insufficient key length
- [ ] Missing encryption for sensitive data at rest

### A03: Injection
- [ ] SQL injection (parameterized queries?)
- [ ] NoSQL injection
- [ ] Command injection (shell commands)
- [ ] LDAP injection
- [ ] XPath injection
- [ ] Template injection (SSTI)
- [ ] Header injection

### A04: Insecure Design
- [ ] Missing rate limiting
- [ ] No account lockout mechanism
- [ ] Insufficient anti-automation
- [ ] Business logic flaws

### A05: Security Misconfiguration
- [ ] Debug mode enabled
- [ ] Default credentials
- [ ] Unnecessary features enabled
- [ ] Missing security headers
- [ ] Verbose error messages exposing internals

### A06: Vulnerable Components
- [ ] Known vulnerable dependencies
- [ ] Outdated libraries
- [ ] Unmaintained packages

### A07: Authentication Failures
- [ ] Weak password policy enforcement
- [ ] Missing brute force protection
- [ ] Session fixation vulnerabilities
- [ ] Insecure session management
- [ ] Missing multi-factor authentication option

### A08: Data Integrity Failures
- [ ] Missing integrity checks on critical data
- [ ] Insecure deserialization
- [ ] Unsigned software updates

### A09: Logging & Monitoring Failures
- [ ] Sensitive data in logs
- [ ] Missing audit trails
- [ ] Insufficient logging of security events

### A10: Server-Side Request Forgery (SSRF)
- [ ] Unvalidated URL inputs
- [ ] Missing allowlist for external requests

## Additional Security Checks

### Input Validation
- [ ] All user input validated server-side
- [ ] Proper type coercion
- [ ] Length limits enforced
- [ ] Dangerous characters sanitized

### Output Encoding
- [ ] XSS prevention (HTML encoding)
- [ ] Context-appropriate encoding (URL, JS, CSS)
- [ ] Content-Type headers set correctly

### Error Handling
- [ ] Errors don't leak sensitive info
- [ ] Stack traces hidden in production
- [ ] Consistent error responses

## Vulnerability Report Format

For each vulnerability found:

### [SEVERITY] Vulnerability Title
**CWE**: CWE-XXX (Common Weakness Enumeration ID)
**Location**: file:line
**Severity**: Critical/High/Medium/Low/Info
**CVSS Score**: X.X (if applicable)

**Description**: What the vulnerability is

**Vulnerable Code**:
\`\`\`
[problematic code snippet]
\`\`\`

**Proof of Concept**: How an attacker could exploit this

**Remediation**:
\`\`\`
[secure code example]
\`\`\`

**References**: Links to relevant security resources

## Summary
- Total vulnerabilities by severity
- Top 3 most critical issues to fix immediately
- Recommendations for security improvements`,variables:[{name:"code",description:"Code to review",type:"code",allowRepositoryPath:!0}],isBuiltIn:!0,usageCount:0,model:"opus",icon:l.Icon.Lock,tintColor:l.Color.Red},{id:"performance-audit",name:"Performance Audit",category:"review",description:"Analyze code for performance issues",prompt:`You are a performance engineer conducting a comprehensive performance audit. Analyze:

{{code}}

## Time Complexity Analysis

### Algorithm Assessment
For each function, determine:
- **Best Case**: O(?) - minimum operations
- **Average Case**: O(?) - typical operations
- **Worst Case**: O(?) - maximum operations

### Red Flags
- [ ] O(n\xB2) or worse nested loops
- [ ] O(n) operations inside loops (becoming O(n\xB2))
- [ ] Recursive calls without memoization
- [ ] String concatenation in loops
- [ ] Repeated array searches (use Set/Map instead)

## Memory Analysis

### Allocation Patterns
- [ ] Large objects created in hot paths
- [ ] Arrays growing dynamically (pre-size when possible)
- [ ] Closures capturing unnecessary scope
- [ ] Event listeners not cleaned up
- [ ] Circular references preventing GC

### Memory Leak Indicators
- [ ] Global variable accumulation
- [ ] Cache without eviction policy
- [ ] Unsubscribed observables/streams
- [ ] DOM references held after removal

## I/O Performance

### Database/API Calls
- [ ] N+1 query patterns (loop of individual queries)
- [ ] Missing database indexes (suggest based on queries)
- [ ] Over-fetching data (selecting unused columns)
- [ ] Missing pagination for large datasets
- [ ] Sequential calls that could be parallel

### File Operations
- [ ] Synchronous file operations blocking event loop
- [ ] Reading entire files when streaming would work
- [ ] Missing file handle cleanup

## Async Performance

### Concurrency Issues
- [ ] Sequential awaits that could be parallel (\`Promise.all\`)
- [ ] Missing request batching
- [ ] Blocking operations on main thread
- [ ] Missing debounce/throttle on frequent operations

### Resource Management
- [ ] Connection pool exhaustion risk
- [ ] Missing timeouts on external calls
- [ ] Retry logic without exponential backoff

## Caching Opportunities

### Computation Caching
- [ ] Repeated expensive calculations
- [ ] Results that could be memoized
- [ ] Derived data recalculated on every access

### Data Caching
- [ ] Frequently accessed data fetched repeatedly
- [ ] Missing HTTP caching headers
- [ ] API responses that could be cached

## Performance Report

For each issue found:

### Issue #N: [Title]
**Type**: [Algorithm/Memory/I/O/Async/Caching]
**Location**: file:line
**Impact**: [Critical/High/Medium/Low]
**Current Complexity**: O(?)
**Estimated Slowdown**: X times slower than optimal

**Problematic Code**:
\`\`\`
[code snippet]
\`\`\`

**Why It's Slow**: Technical explanation

**Optimized Solution**:
\`\`\`
[optimized code]
\`\`\`

**Expected Improvement**: X% faster / O(?) complexity

## Recommendations Summary
1. Quick wins (low effort, high impact)
2. Important improvements (medium effort, high impact)
3. Future optimizations (high effort, medium impact)

## Profiling Suggestions
- Key functions to profile
- Metrics to monitor
- Load test scenarios to run`,variables:[{name:"code",description:"Code to audit",type:"code",allowRepositoryPath:!0}],isBuiltIn:!0,usageCount:0,icon:l.Icon.Bolt,tintColor:l.Color.Yellow},{id:"pr-review",name:"PR Review",category:"review",description:"Review a diff as a senior engineer",prompt:`You are a senior software engineer reviewing a pull request. Provide thorough, constructive feedback.

{{diff}}

## Review Framework

### 1. Correctness
- Does the code do what it's supposed to do?
- Are there logic errors or incorrect assumptions?
- Do edge cases behave correctly?

### 2. Design & Architecture
- Does this fit the existing architecture?
- Are there better design patterns to use?
- Is the code organized logically?

### 3. Code Quality
- Is the code readable and maintainable?
- Are names clear and descriptive?
- Is there unnecessary duplication?

### 4. Testing
- Are changes adequately tested?
- Are edge cases covered?
- Would you trust these tests to catch regressions?

### 5. Security
- Any security concerns with these changes?
- Is input validated appropriately?
- Are there authorization checks where needed?

### 6. Performance
- Any performance implications?
- Are there more efficient approaches?

## Review Comments Format

Provide feedback as inline code review comments:

### file.ts:42 [SEVERITY]
**Category**: Bug/Design/Style/Performance/Security/Question
\`\`\`typescript
// The problematic code
\`\`\`
**Issue**: Clear description of the problem
**Suggestion**:
\`\`\`typescript
// Suggested improvement
\`\`\`

## Severity Levels
- **BLOCKER**: Must fix before merge (bugs, security issues)
- **MAJOR**: Should fix, significant quality concern
- **MINOR**: Nice to fix, style or minor improvements
- **NITPICK**: Optional, personal preference

## Review Checklist
- [ ] All tests pass
- [ ] Code follows project conventions
- [ ] No unnecessary changes included
- [ ] Commit messages are clear
- [ ] Documentation updated if needed
- [ ] No sensitive data or secrets

## Summary
- **Overall Assessment**: Approve / Request Changes / Needs Discussion
- **Key Concerns**: Top issues that must be addressed
- **Positive Highlights**: What was done well
- **Questions**: Anything needing clarification from the author

Be specific, be constructive, and explain the "why" behind suggestions. Focus on important issues rather than nitpicking.`,variables:[{name:"diff",description:"Git diff to review",type:"code",allowRepositoryPath:!0}],isBuiltIn:!0,usageCount:0,icon:l.Icon.Eye,tintColor:l.Color.Blue},{id:"extract-abstraction",name:"Extract & Abstract",category:"refactoring",description:"Extract reusable patterns from code",prompt:`You are a refactoring expert. Extract reusable patterns and reduce duplication in:

{{code}}

## Refactoring Principles

### Rule of Three
Only extract when you see the same pattern 3+ times. Premature abstraction is worse than duplication.

### SOLID Extraction Guidelines
- **Single Responsibility**: Each extracted unit does one thing
- **Interface Segregation**: Small, focused interfaces
- **Dependency Inversion**: Depend on abstractions, not concretions

## Analysis Steps

### 1. Identify Duplication
- Exact code duplicates
- Similar code with minor variations
- Repeated patterns (even if code differs)

### 2. Classify Duplication Type
- **Structural**: Same code structure, different data
- **Algorithmic**: Same algorithm, different types
- **Pattern**: Same design pattern usage

### 3. Choose Extraction Strategy
- **Extract Function**: For duplicated logic
- **Extract Class**: For related functions + data
- **Extract Interface**: For common contracts
- **Extract Module**: For cohesive feature sets
- **Parameterize**: For similar code with variations

## Refactoring Techniques

### Function Extraction
\`\`\`typescript
// Before: duplicated validation
if (user.age < 0 || user.age > 150) throw new Error('Invalid age');
if (employee.age < 0 || employee.age > 150) throw new Error('Invalid age');

// After: extracted function
function validateAge(age: number): void {
  if (age < 0 || age > 150) throw new Error('Invalid age');
}
\`\`\`

### Composition Over Inheritance
Prefer composing behaviors over creating inheritance hierarchies.

### Strategy Pattern
When similar code differs only in algorithm, extract strategies.

## Output Format

For each extraction:

### Extraction #N: [Name]
**Type**: Function/Class/Interface/Module
**Duplication Count**: X occurrences
**Lines Saved**: X lines

**Before** (showing all duplicates):
\`\`\`typescript
[original duplicated code]
\`\`\`

**After**:
\`\`\`typescript
[extracted abstraction]
\`\`\`

**Usage**:
\`\`\`typescript
[how to use the new abstraction]
\`\`\`

**Why This Abstraction**: Explain naming and design choices

## Summary
- Total extractions recommended
- Lines of code reduced
- Complexity impact
- Any extractions to AVOID (premature abstraction warnings)`,variables:[{name:"code",description:"Code to refactor",type:"code",allowRepositoryPath:!0}],isBuiltIn:!0,usageCount:0,icon:l.Icon.Hammer,tintColor:l.Color.Orange},{id:"simplify-complexity",name:"Simplify Complexity",category:"refactoring",description:"Reduce cyclomatic complexity",prompt:`You are a code quality expert specializing in complexity reduction. Simplify:

{{code}}

## Complexity Metrics

### Cyclomatic Complexity
Count decision points: if, else, case, for, while, &&, ||, ?:
- Target: < 10 per function
- Warning: 10-20
- Critical: > 20

### Cognitive Complexity
Measures how hard code is to understand:
- Nested structures add more than flat ones
- Breaks in linear flow add complexity

## Simplification Techniques

### 1. Early Returns (Guard Clauses)
\`\`\`typescript
// Before: Nested conditions
function process(user) {
  if (user) {
    if (user.active) {
      if (user.verified) {
        // actual logic here
      }
    }
  }
}

// After: Guard clauses
function process(user) {
  if (!user) return;
  if (!user.active) return;
  if (!user.verified) return;
  // actual logic here
}
\`\`\`

### 2. Extract Conditional Logic
\`\`\`typescript
// Before: Complex condition
if (user.age >= 18 && user.country === 'US' && user.hasLicense && !user.suspended) {

// After: Named condition
const canDrive = user.age >= 18 && user.country === 'US' && user.hasLicense && !user.suspended;
if (canDrive) {
// Or extract to function: if (canUserDrive(user)) {
\`\`\`

### 3. Replace Conditionals with Polymorphism
When switch/if-else selects behavior by type, use polymorphism instead.

### 4. Replace Nested Conditionals with Lookup
\`\`\`typescript
// Before: Nested if-else
if (type === 'A') { return 1; }
else if (type === 'B') { return 2; }
else if (type === 'C') { return 3; }

// After: Lookup table
const typeValues = { A: 1, B: 2, C: 3 };
return typeValues[type];
\`\`\`

### 5. Decompose Complex Functions
Split large functions into smaller, focused functions.

### 6. Use Optional Chaining and Nullish Coalescing
\`\`\`typescript
// Before
const name = user && user.profile && user.profile.name ? user.profile.name : 'Anonymous';

// After
const name = user?.profile?.name ?? 'Anonymous';
\`\`\`

## Refactoring Plan

For each simplification:

### Simplification #N: [Technique Used]
**Location**: file:line
**Complexity Before**: X
**Complexity After**: Y
**Reduction**: Z points

**Before**:
\`\`\`typescript
[complex code]
\`\`\`

**After**:
\`\`\`typescript
[simplified code]
\`\`\`

**Explanation**: Why this simplification improves readability

## Behavior Preservation Checklist
- [ ] All code paths still reachable
- [ ] Same outputs for same inputs
- [ ] Error handling preserved
- [ ] Side effects unchanged

## Summary
- Total complexity reduction
- Number of functions simplified
- Estimated readability improvement
- Suggested tests to verify behavior preserved`,variables:[{name:"code",description:"Complex code to simplify",type:"code",allowRepositoryPath:!0}],isBuiltIn:!0,usageCount:0,icon:l.Icon.Stars,tintColor:l.Color.Magenta},{id:"type-strengthening",name:"Type Strengthening",category:"refactoring",description:"Make types more precise and safe",prompt:`You are a TypeScript expert specializing in type safety. Strengthen the types in:

{{code}}

## Type Strengthening Goals
1. Catch bugs at compile time, not runtime
2. Make illegal states unrepresentable
3. Encode business rules in the type system
4. Improve IDE autocomplete and documentation

## Type Improvement Techniques

### 1. Replace \`any\` with Specific Types
\`\`\`typescript
// Before
function process(data: any): any

// After
function process(data: UserInput): ProcessedResult
\`\`\`

### 2. Discriminated Unions for State
\`\`\`typescript
// Before: Impossible states possible
interface Request {
  status: string;
  data?: Data;
  error?: Error;
}

// After: Only valid states representable
type Request =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: Data }
  | { status: 'error'; error: Error };
\`\`\`

### 3. Branded Types for Type-Safe IDs
\`\`\`typescript
// Before: Easy to mix up IDs
function getUser(userId: string, orgId: string)
getUser(orgId, userId) // Compiles but wrong!

// After: Compile-time safety
type UserId = string & { readonly brand: unique symbol };
type OrgId = string & { readonly brand: unique symbol };
function getUser(userId: UserId, orgId: OrgId)
\`\`\`

### 4. Const Assertions for Literals
\`\`\`typescript
// Before: string type
const ROLES = ['admin', 'user', 'guest'];
// roles: string[]

// After: literal union type
const ROLES = ['admin', 'user', 'guest'] as const;
// roles: readonly ['admin', 'user', 'guest']
type Role = typeof ROLES[number]; // 'admin' | 'user' | 'guest'
\`\`\`

### 5. Readonly for Immutability
\`\`\`typescript
// Before: Mutable
interface Config {
  apiUrl: string;
  timeout: number;
}

// After: Immutable
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}
// Or: Readonly<Config>
\`\`\`

### 6. Template Literal Types
\`\`\`typescript
// Before: Any string
type EventName = string;

// After: Structured string
type EventName = \`\${Lowercase<string>}:\${'created' | 'updated' | 'deleted'}\`;
// Matches: "user:created", "order:deleted", etc.
\`\`\`

### 7. Exhaustive Checks
\`\`\`typescript
function assertNever(x: never): never {
  throw new Error(\`Unexpected: \${x}\`);
}

function handle(status: Status) {
  switch (status) {
    case 'active': return handleActive();
    case 'inactive': return handleInactive();
    default: return assertNever(status); // Compile error if case missing
  }
}
\`\`\`

### 8. Utility Types
- \`Partial<T>\`: Make all properties optional
- \`Required<T>\`: Make all properties required
- \`Pick<T, K>\`: Select specific properties
- \`Omit<T, K>\`: Exclude specific properties
- \`Record<K, V>\`: Create object type

## Type Strengthening Report

For each improvement:

### Improvement #N: [Technique]
**Location**: file:line
**Risk Level Before**: High/Medium/Low (runtime error potential)
**Type Safety After**: Description of guarantees

**Before**:
\`\`\`typescript
[weak types]
\`\`\`

**After**:
\`\`\`typescript
[strong types]
\`\`\`

**Bugs Prevented**: What errors this catches at compile time

## Summary
- \`any\` usages eliminated: X
- Discriminated unions added: X
- Branded types introduced: X
- Estimated bugs prevented: X categories`,variables:[{name:"code",description:"Code to strengthen types",type:"code",allowRepositoryPath:!0}],isBuiltIn:!0,usageCount:0,icon:l.Icon.Shield,tintColor:l.Color.Blue},{id:"error-diagnosis",name:"Error Diagnosis",category:"debugging",description:"Diagnose an error and suggest fixes",prompt:`You are an expert debugger. Diagnose this error using systematic root cause analysis:

{{error}}

## Error Analysis Framework

### 1. Parse the Error
- **Error Type**: What category of error (TypeError, NetworkError, etc.)?
- **Error Message**: What does the message indicate?
- **Stack Trace**: Where did the error originate?
- **Context**: What operation was being performed?

### 2. Identify Error Location
- **File**: Which file threw the error?
- **Line**: Which line number?
- **Function**: Which function was executing?
- **Call Chain**: What sequence of calls led here?

### 3. Root Cause Hypotheses
Rank potential causes by probability:

| Rank | Hypothesis | Probability | Evidence |
|------|-----------|-------------|----------|
| 1 | [Most likely cause] | High | [Why you think this] |
| 2 | [Second likely cause] | Medium | [Supporting evidence] |
| 3 | [Less likely cause] | Low | [Possible but unlikely] |

### 4. Diagnostic Questions
What information would help narrow down the cause?
- What was the input data?
- What was the system state?
- Is this reproducible?
- When did it start happening?

## Diagnosis by Error Category

### Null/Undefined Errors
- Check for missing null checks
- Verify async data is loaded before access
- Check optional chaining usage

### Type Errors
- Check type coercion issues
- Verify API response shapes
- Check for incorrect function signatures

### Network Errors
- Check endpoint availability
- Verify request format
- Check authentication/authorization
- Look for CORS issues

### Syntax/Runtime Errors
- Check for typos
- Verify imports are correct
- Check for circular dependencies

## Recommended Fixes

For each hypothesis, provide a fix:

### Fix for Hypothesis #1: [Cause]
**Confidence**: High/Medium/Low
\`\`\`typescript
[code fix]
\`\`\`
**Why this works**: Explanation

### Fix for Hypothesis #2: [Cause]
**Confidence**: High/Medium/Low
\`\`\`typescript
[code fix]
\`\`\`

## Debugging Steps
If the fix isn't clear, suggest debugging steps:

1. **Add logging**: Where to add console.log/debugger
2. **Inspect state**: What variables to examine
3. **Isolate the issue**: How to create a minimal reproduction
4. **Binary search**: How to narrow down the cause

## Prevention Recommendations
How to prevent this type of error in the future:
- Type improvements
- Validation to add
- Tests to write
- Error handling to improve

## Additional Context Needed
If you can't fully diagnose, list what would help:
- Specific files to examine
- Environment information needed
- Related code to review`,variables:[{name:"error",description:"Error message and stack trace",type:"text"}],isBuiltIn:!0,usageCount:0,icon:l.Icon.MagnifyingGlass,tintColor:l.Color.Red},{id:"debug-strategy",name:"Debug Strategy",category:"debugging",description:"Create a systematic debugging plan",prompt:`You are a debugging strategist. Create a systematic plan to diagnose:

{{symptom}}

## Scientific Debugging Method

### 1. Define the Problem Precisely
- **Expected Behavior**: What should happen?
- **Actual Behavior**: What is happening?
- **Difference**: Exactly how do they differ?
- **Frequency**: Always, sometimes, or rarely?

### 2. Gather Information
What do we already know?
- When does it happen?
- When does it NOT happen?
- What changed recently?
- Who is affected?

### 3. Form Hypotheses
Based on the symptom, potential causes ranked by likelihood:

| # | Hypothesis | Why Likely | Test to Confirm/Refute |
|---|-----------|-----------|------------------------|
| 1 | [cause] | [reasoning] | [specific test] |
| 2 | [cause] | [reasoning] | [specific test] |
| 3 | [cause] | [reasoning] | [specific test] |

## Debugging Tactics

### Logging Strategy
Add strategic logging to trace execution:

\`\`\`typescript
// Entry points - log inputs
console.log('[FunctionName] Input:', { param1, param2 });

// Decision points - log conditions
console.log('[FunctionName] Condition check:', { condition, result });

// Exit points - log outputs
console.log('[FunctionName] Output:', { result });

// Error boundaries - log failures
console.error('[FunctionName] Error:', { error, context });
\`\`\`

**Specific logging points for this issue**:
1. [Location 1]: Log [what] to check [hypothesis]
2. [Location 2]: Log [what] to check [hypothesis]

### State Inspection Points
Examine these variables/states:
- [Variable 1]: Expected value vs actual
- [Variable 2]: Check at this point in execution
- [State]: Verify this condition

### Binary Search Approach
Narrow down the problem location:

1. **Start**: [Beginning of suspect code path]
2. **End**: [Where error manifests]
3. **Midpoint**: [Check state here first]
4. **Iterate**: Based on midpoint, check earlier or later half

### Minimal Reproduction
Steps to create isolated test case:

1. [Setup step]
2. [Action that triggers issue]
3. [Observe the symptom]

Minimal code to reproduce:
\`\`\`typescript
// Smallest code that shows the problem
\`\`\`

## Environment Checks
- [ ] Check environment variables
- [ ] Verify dependencies/versions
- [ ] Check configuration files
- [ ] Compare working vs non-working environments

## Timeline for Investigation
If time is limited, prioritize:

### Quick checks (5 min)
- [ ] Check 1
- [ ] Check 2

### Medium investigation (30 min)
- [ ] Investigation 1
- [ ] Investigation 2

### Deep dive (1+ hour)
- [ ] Deep investigation 1
- [ ] Deep investigation 2

## Escalation Path
If initial debugging doesn't work:
1. [Next step to try]
2. [Expert to consult]
3. [External resources to check]

## Documentation
When the bug is found, document:
- Root cause
- Fix applied
- How to prevent in future
- Tests added`,variables:[{name:"symptom",description:"The symptom or unexpected behavior",type:"text"}],isBuiltIn:!0,usageCount:0,icon:l.Icon.Bug,tintColor:l.Color.Red},{id:"explain-junior",name:"Explain for Junior Dev",category:"docs",description:"Explain code for a junior developer",prompt:`You are a patient senior developer explaining code to a junior team member. Explain:

{{code}}

## Explanation Framework

### 1. The Big Picture (30 seconds)
Start with a one-sentence summary a non-programmer could understand.

"This code [does what] for [whom] so that [benefit]."

### 2. What It Does (2 minutes)
Explain the purpose at a high level:
- What problem does this solve?
- Where does it fit in the larger system?
- Who/what calls this code?
- What does it output/return?

### 3. Step-by-Step Walkthrough (5 minutes)
Go through the code line by line or block by block:

\`\`\`typescript
// Line X-Y: [what this section does]
[code snippet]
\`\`\`
**Explanation**: [Why this is done, in plain language]
**Analogy**: [Real-world comparison if helpful]

### 4. Key Concepts Introduced
List concepts a junior might not know:

| Concept | What It Is | Why It's Used Here |
|---------|-----------|-------------------|
| [Term] | [Simple explanation] | [Purpose in this code] |

### 5. Design Decisions
Explain the "why" behind architectural choices:

**Q: Why is it done this way?**
A: [Explanation of the design decision]

**Q: What alternatives exist?**
A: [Other approaches and why this one was chosen]

### 6. Common Pitfalls
Mistakes to avoid when working with this code:

**Pitfall 1: [What could go wrong]**
- Why it happens: [Explanation]
- How to avoid: [Prevention strategy]

### 7. Related Concepts to Study
To fully understand this code, learn about:

1. **[Concept]**: [Brief description] - [Resource link/suggestion]
2. **[Concept]**: [Brief description] - [Resource link/suggestion]

### 8. Try It Yourself
Exercises to build understanding:

1. **Trace the execution**: Walk through with sample input [X]
2. **Modify it**: Try changing [Y] to see what happens
3. **Break it**: What happens if you [Z]?

## Glossary
Technical terms used, with simple definitions:
- **[Term]**: [Definition a beginner can understand]

Remember: There are no stupid questions. Ask if anything is unclear!`,variables:[{name:"code",description:"Code to explain",type:"code",allowRepositoryPath:!0}],isBuiltIn:!0,usageCount:0,model:"haiku",icon:l.Icon.Book,tintColor:l.Color.Blue},{id:"api-documentation",name:"API Documentation",category:"docs",description:"Generate API documentation",prompt:`You are a technical writer creating comprehensive API documentation for {{endpoint}}.

Generate documentation in OpenAPI/Swagger-compatible format:

## Endpoint Overview

### [HTTP Method] /path/to/endpoint
**Summary**: One-line description
**Description**: Detailed explanation of what this endpoint does, when to use it, and any important context.

**Tags**: [category1, category2]

---

## Authentication
**Required**: Yes/No
**Type**: Bearer Token / API Key / OAuth 2.0 / None
**Header**: \`Authorization: Bearer <token>\`

---

## Request

### Headers
| Header | Type | Required | Description |
|--------|------|----------|-------------|
| Content-Type | string | Yes | Must be \`application/json\` |
| Authorization | string | Yes | Bearer token for authentication |

### Path Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Unique identifier (UUID format) |

### Query Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| limit | integer | No | 20 | Number of results (1-100) |
| offset | integer | No | 0 | Pagination offset |

### Request Body
\`\`\`json
{
  "field1": "string (required) - Description",
  "field2": 123,
  "nested": {
    "subfield": "value"
  }
}
\`\`\`

**Schema**:
| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| field1 | string | Yes | 1-255 chars | Description |
| field2 | integer | No | 0-1000 | Description |

---

## Response

### Success Response (200 OK)
\`\`\`json
{
  "data": {
    "id": "uuid-here",
    "created_at": "2024-01-20T12:00:00Z",
    "field1": "value"
  },
  "meta": {
    "request_id": "req_123"
  }
}
\`\`\`

### Response Fields
| Field | Type | Description |
|-------|------|-------------|
| data | object | The requested resource |
| data.id | string | Unique identifier |
| meta.request_id | string | ID for support inquiries |

---

## Error Responses

### 400 Bad Request
\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      { "field": "email", "message": "Invalid email format" }
    ]
  }
}
\`\`\`

### 401 Unauthorized
**Cause**: Missing or invalid authentication
\`\`\`json
{ "error": { "code": "UNAUTHORIZED", "message": "Invalid token" } }
\`\`\`

### 403 Forbidden
**Cause**: Valid auth but insufficient permissions

### 404 Not Found
**Cause**: Resource doesn't exist

### 429 Too Many Requests
**Cause**: Rate limit exceeded
**Headers**: \`Retry-After: 60\`

### 500 Internal Server Error
**Cause**: Unexpected server error

---

## Error Codes Reference
| Code | HTTP Status | Description | Resolution |
|------|-------------|-------------|------------|
| VALIDATION_ERROR | 400 | Invalid input | Check request format |
| UNAUTHORIZED | 401 | Auth failed | Refresh token |
| NOT_FOUND | 404 | Resource missing | Verify ID exists |

---

## Rate Limiting
- **Limit**: 100 requests per minute
- **Headers**: \`X-RateLimit-Remaining\`, \`X-RateLimit-Reset\`
- **Exceeded**: Returns 429 with Retry-After header

---

## Examples

### cURL
\`\`\`bash
curl -X POST https://api.example.com/endpoint \\
  -H "Authorization: Bearer TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"field1": "value"}'
\`\`\`

### JavaScript (fetch)
\`\`\`javascript
const response = await fetch('https://api.example.com/endpoint', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ field1: 'value' })
});
\`\`\`

### Python (requests)
\`\`\`python
import requests
response = requests.post(
    'https://api.example.com/endpoint',
    headers={'Authorization': 'Bearer TOKEN'},
    json={'field1': 'value'}
)
\`\`\`

---

## Changelog
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024-01-01 | Initial release |`,variables:[{name:"endpoint",description:"API endpoint to document",type:"text"}],isBuiltIn:!0,usageCount:0,icon:l.Icon.List,tintColor:l.Color.Purple},{id:"adr-template",name:"Architecture Decision Record",category:"docs",description:"Create an ADR for a technical decision",prompt:`You are a software architect documenting an important technical decision. Create an Architecture Decision Record for:

{{decision}}

---

# ADR-[NUMBER]: [Title - Short Imperative Statement]

## Metadata
- **Status**: Proposed | Accepted | Deprecated | Superseded by ADR-XXX
- **Date**: [Date of decision]
- **Decision Makers**: [Who was involved]
- **Technical Area**: [Component/system affected]
- **Confidence Level**: High | Medium | Low

---

## Context

### Problem Statement
[What is the issue or opportunity we're addressing? Be specific.]

### Background
[Relevant history, prior decisions, or context that led to this decision point.]

### Constraints
- **Technical**: [Technical limitations or requirements]
- **Business**: [Business requirements or deadlines]
- **Team**: [Team skills, capacity, or preferences]
- **Budget**: [Cost constraints if relevant]

### Requirements
- [Functional requirement 1]
- [Non-functional requirement 1 (performance, security, etc.)]

---

## Decision Drivers
What factors are most important in making this decision?

1. **[Driver 1]** - [Why it matters]
2. **[Driver 2]** - [Why it matters]
3. **[Driver 3]** - [Why it matters]

---

## Considered Options

### Option 1: [Name]
**Description**: [What this option entails]

**Pros**:
- [Advantage 1]
- [Advantage 2]

**Cons**:
- [Disadvantage 1]
- [Disadvantage 2]

**Estimated Effort**: [Small/Medium/Large]

### Option 2: [Name]
[Same structure]

### Option 3: [Name]
[Same structure]

---

## Decision

**We will use Option [X]: [Name]**

### Rationale
[Detailed explanation of why this option was chosen over alternatives. Reference the decision drivers.]

### Trade-offs Accepted
[What are we consciously giving up or accepting as costs?]

---

## Consequences

### Positive
- [Good outcome 1]
- [Good outcome 2]

### Negative
- [Downside 1 and mitigation]
- [Downside 2 and mitigation]

### Neutral
- [Side effect that's neither good nor bad]

---

## Implementation Notes

### Action Items
- [ ] [Specific task 1] - Owner: [Name]
- [ ] [Specific task 2] - Owner: [Name]

### Migration Strategy
[If replacing something, how will we migrate?]

### Rollback Plan
[How can we reverse this if needed?]

---

## Related Decisions
- **ADR-XXX**: [Related decision and how it connects]
- **RFC-XXX**: [Related proposal]

---

## References
- [Link to relevant documentation]
- [Link to relevant discussion]
- [Link to technical resources]

---

## Review Notes
[Space for future notes, lessons learned, or updates]

---

*This ADR follows the [MADR template](https://adr.github.io/madr/) format.*`,variables:[{name:"decision",description:"The technical decision to document",type:"text"}],isBuiltIn:!0,usageCount:0,icon:l.Icon.Pencil,tintColor:l.Color.Orange},{id:"feature-pipeline",name:"Feature Pipeline",category:"advanced",description:"Full feature implementation with planning, coding, testing, and review",prompt:`You are a full-stack development team implementing {{feature}} through a complete development pipeline.{{#if projectPath}}

Project location: {{projectPath}}{{/if}}

Execute all four phases in sequence, producing concrete output for each.

---

# Phase 1: ARCHITECT

## 1.1 Requirements Analysis
- **User Story**: As a [user], I want [feature] so that [benefit]
- **Acceptance Criteria**: Specific, testable conditions
- **Out of Scope**: What this feature does NOT include

## 1.2 Technical Design
- **Architecture**: How this fits into the existing system
- **Data Model**: New or modified data structures
- **API Design**: Endpoints, request/response formats
- **Dependencies**: External services or libraries needed

## 1.3 Edge Cases
| Scenario | Expected Behavior |
|----------|------------------|
| [Edge case 1] | [How to handle] |
| [Edge case 2] | [How to handle] |

## 1.4 Risk Assessment
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| [Risk 1] | H/M/L | H/M/L | [Strategy] |

---

# Phase 2: BUILDER

## 2.1 Implementation Plan
Order of implementation:
1. [Component 1] - [Why first]
2. [Component 2] - [Dependencies]
3. [Component 3] - [Final integration]

## 2.2 Code Implementation

### File: [path/to/file.ts]
\`\`\`typescript
// Well-commented, production-ready code
// With proper error handling
// Following project conventions
\`\`\`

### File: [path/to/another-file.ts]
\`\`\`typescript
// Additional implementation files
\`\`\`

## 2.3 Configuration Changes
Any config, environment variables, or setup required.

---

# Phase 3: QA

## 3.1 Test Plan
| Test Type | Coverage Target | Priority |
|-----------|----------------|----------|
| Unit | 80%+ | High |
| Integration | Key flows | High |
| E2E | Happy paths | Medium |

## 3.2 Unit Tests
\`\`\`typescript
describe('[Component]', () => {
  // Comprehensive unit tests
  // Edge cases covered
  // Error scenarios tested
});
\`\`\`

## 3.3 Integration Tests
\`\`\`typescript
describe('[Feature] Integration', () => {
  // Component interaction tests
  // API contract tests
});
\`\`\`

## 3.4 Manual Test Scenarios
| # | Scenario | Steps | Expected Result |
|---|----------|-------|-----------------|
| 1 | [Name] | [Steps] | [Expected] |

---

# Phase 4: REVIEWER

## 4.1 Code Review Checklist
- [ ] Code follows project style guide
- [ ] No security vulnerabilities
- [ ] Error handling is comprehensive
- [ ] Performance is acceptable
- [ ] Tests are meaningful

## 4.2 Issues Found
| Severity | Location | Issue | Recommendation |
|----------|----------|-------|----------------|
| [H/M/L] | file:line | [Issue] | [Fix] |

## 4.3 Security Review
- [ ] Input validation
- [ ] Authentication/authorization
- [ ] Data exposure risks

## 4.4 Performance Review
- [ ] No N+1 queries
- [ ] Appropriate caching
- [ ] No blocking operations

## 4.5 Final Recommendation
**Status**: Ready for Merge / Needs Changes / Rejected
**Summary**: [Overall assessment and any remaining concerns]

---

# Deployment Checklist
- [ ] Database migrations
- [ ] Environment variables
- [ ] Feature flags
- [ ] Monitoring/alerting
- [ ] Documentation updated`,variables:[{name:"feature",description:"Feature to implement",type:"text"},{name:"projectPath",description:"Path to create the new project (optional)",type:"path",allowDirectories:!0}],isBuiltIn:!0,usageCount:0,model:"opus",icon:l.Icon.Rocket,tintColor:l.Color.Purple},{id:"codebase-onboarding",name:"Codebase Onboarding Guide",category:"advanced",description:"Create an onboarding guide for the codebase",prompt:`You are a senior developer creating an onboarding guide for new team members. Explore the current codebase and document everything a new developer needs to know.

# [Project Name] Onboarding Guide

## Quick Start (5 minutes to running)

### Prerequisites
- [ ] [Tool 1] version X+
- [ ] [Tool 2] installed
- [ ] Access to [service/repo]

### Get Running
\`\`\`bash
# Step-by-step commands to get the project running
git clone [repo]
cd [project]
[install dependencies]
[setup environment]
[run command]
\`\`\`

### Verify It Works
- [ ] [How to verify frontend is running]
- [ ] [How to verify backend is running]
- [ ] [How to verify database is connected]

---

## Architecture Overview

### System Diagram
\`\`\`
[ASCII diagram of major components and their relationships]
\`\`\`

### Tech Stack
| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | [Tech] | [Purpose] |
| Backend | [Tech] | [Purpose] |
| Database | [Tech] | [Purpose] |
| Infrastructure | [Tech] | [Purpose] |

### Key Design Decisions
1. **[Decision]**: [Why this choice was made]
2. **[Decision]**: [Why this choice was made]

---

## Project Structure

\`\`\`
project/
\u251C\u2500\u2500 src/
\u2502   \u251C\u2500\u2500 [folder]/     # [What this contains]
\u2502   \u251C\u2500\u2500 [folder]/     # [What this contains]
\u2502   \u2514\u2500\u2500 [folder]/     # [What this contains]
\u251C\u2500\u2500 tests/            # [Test organization]
\u251C\u2500\u2500 config/           # [Configuration files]
\u2514\u2500\u2500 [other]/          # [Other important directories]
\`\`\`

---

## Key Entry Points

### Where Execution Starts
- **Main entry**: \`[file]\` - [What happens here]
- **API routes**: \`[file]\` - [How routes are defined]
- **Database**: \`[file]\` - [Connection setup]

### Important Files to Read First
1. **\`[file]\`**: [Why it's important]
2. **\`[file]\`**: [Why it's important]
3. **\`[file]\`**: [Why it's important]

---

## Core Concepts & Patterns

### Data Flow
\`\`\`
[Diagram showing how data moves through the system]
User \u2192 [Layer] \u2192 [Layer] \u2192 [Layer] \u2192 Database
\`\`\`

### Patterns Used
| Pattern | Where Used | Example |
|---------|-----------|---------|
| [Pattern] | [Location] | \`[file:line]\` |

### Naming Conventions
- Files: [convention]
- Functions: [convention]
- Variables: [convention]
- Components: [convention]

---

## Development Workflow

### Branch Strategy
- \`main\`: [What this represents]
- \`develop\`: [What this represents]
- Feature branches: [Naming convention]

### Making Changes
1. Create branch from [base]
2. Make changes
3. Run tests: \`[command]\`
4. Run linter: \`[command]\`
5. Create PR to [branch]

### Testing
\`\`\`bash
# Run all tests
[command]

# Run specific tests
[command]

# Run with coverage
[command]
\`\`\`

---

## Configuration

### Environment Variables
| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| [VAR] | Yes/No | [What it does] | [Example value] |

### Configuration Files
- \`[file]\`: [What it configures]
- \`[file]\`: [What it configures]

---

## Common Tasks

### Add a New Feature
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Add a New API Endpoint
1. [Step 1 with file location]
2. [Step 2]
3. [Step 3]

### Debug an Issue
1. [How to enable debug logging]
2. [Where to find logs]
3. [Common debugging tools]

---

## Troubleshooting

### Common Issues
| Issue | Cause | Solution |
|-------|-------|----------|
| [Problem] | [Why it happens] | [How to fix] |

### Getting Help
- Documentation: [Link]
- Team channel: [Channel]
- Ask: [Who to ask about what]

---

## Glossary
| Term | Definition |
|------|-----------|
| [Domain term] | [What it means in this project] |

---

## Next Steps
After completing this guide:
1. [ ] Complete the tutorial: [link]
2. [ ] Fix a "good first issue": [link]
3. [ ] Review recent PRs to see code patterns
4. [ ] Pair with [team member] on a feature`,variables:[],isBuiltIn:!0,usageCount:0,icon:l.Icon.Map,tintColor:l.Color.Green},{id:"ralph-loop",name:"Ralph Loop",category:"advanced",description:"Autonomous agentic loop that breaks down tasks and executes them with fresh context per iteration. Touch .ralph/stop to halt gracefully.",prompt:"RALPH_FRESH_LOOP",variables:[{name:"projectPath",description:"Project directory (will be created if needed). A .ralph/ folder will be created here.",type:"path",allowDirectories:!0},{name:"task",description:"Describe the task you want Claude to work on autonomously",type:"text",multiline:!0},{name:"requirements",description:"Optional: specific requirements or acceptance criteria (one per line)",type:"text",multiline:!0},{name:"maxIterations",description:"Maximum iterations before stopping (safety limit). Can resume with .ralph/resume.sh",default:"20",type:"text"}],isBuiltIn:!0,usageCount:0,model:"opus",icon:l.Icon.RotateClockwise,tintColor:l.Color.Orange,terminalOnly:!0}];async function pe(){let t=await me(),n=await ge();return[...Be.map(c=>({...c,usageCount:n[c.id]||0})),...t]}async function me(){let t=await l.LocalStorage.getItem(ue);return t?JSON.parse(t):[]}async function he(t){let s=(await me()).filter(c=>c.id!==t);await l.LocalStorage.setItem(ue,JSON.stringify(s))}async function ge(){let t=await l.LocalStorage.getItem(de);return t?JSON.parse(t):{}}async function W(t){let n=await ge();n[t]=(n[t]||0)+1,await l.LocalStorage.setItem(de,JSON.stringify(n))}function J(t,n){return t.filter(s=>s.category===n)}function O(t){return{planning:{name:"Planning & Architecture",icon:l.Icon.Document,tintColor:l.Color.Blue},tdd:{name:"Test-Driven Development",icon:l.Icon.CheckCircle,tintColor:l.Color.Green},review:{name:"Code Review & Security",icon:l.Icon.Eye,tintColor:l.Color.Blue},refactoring:{name:"Refactoring",icon:l.Icon.Hammer,tintColor:l.Color.Orange},debugging:{name:"Debugging",icon:l.Icon.Bug,tintColor:l.Color.Red},docs:{name:"Documentation",icon:l.Icon.Book,tintColor:l.Color.Blue},advanced:{name:"Advanced Workflows",icon:l.Icon.Rocket,tintColor:l.Color.Purple}}[t]}function H(t,n){let s=t;s=s.replace(/\{\{#if\s+(\w+)\}\}([\s\S]*?)\{\{\/if\}\}/g,(c,a,e)=>{let u=n[a];return u&&u.trim()?e:""});for(let[c,a]of Object.entries(n))s=s.replace(new RegExp(`\\{\\{${c}\\}\\}`,"g"),a||"");return s}var B=require("child_process"),fe=require("util"),Q=require("@raycast/api"),z=I(require("path")),N=I(require("fs")),_=I(require("os")),Ge=(0,fe.promisify)(B.exec);async function ye(){let t=(0,Q.getPreferenceValues)();if(t.claudeCodePath)try{return await N.default.promises.access(t.claudeCodePath,N.default.constants.X_OK),t.claudeCodePath}catch{}let n=["/opt/homebrew/bin/claude","/usr/local/bin/claude",z.default.join(_.default.homedir(),".npm-global/bin/claude"),z.default.join(_.default.homedir(),".local/bin/claude")];for(let s of n)try{return await N.default.promises.access(s,N.default.constants.X_OK),s}catch{continue}try{let{stdout:s}=await Ge("which claude"),c=s.trim();if(c)return c}catch{}return null}async function Ce(t,n={}){let s=await ye();if(!s)throw new Error("Claude CLI not found. Please install Claude Code: npm install -g @anthropic-ai/claude-code");let c=(0,Q.getPreferenceValues)(),a=n.model||c.defaultModel||"sonnet",e=t;n.context&&(e=`Context:
${n.context}

Question/Task:
${t}`);let u=["-p",e,"--output-format","stream-json","--verbose","--model",a];n.sessionId&&u.push("-r",n.sessionId);let h={...process.env,PATH:`${process.env.PATH}:/usr/local/bin:/opt/homebrew/bin`,HOME:_.default.homedir()};return c.anthropicApiKey&&(h.ANTHROPIC_API_KEY=c.anthropicApiKey),c.oauthToken&&(h.CLAUDE_CODE_OAUTH_TOKEN=c.oauthToken),new Promise((g,P)=>{let o=(0,B.spawn)(s,u,{cwd:n.cwd||_.default.homedir(),env:h,stdio:["ignore","pipe","pipe"]}),d="",y="",m=setTimeout(()=>{o.kill(),P(new Error("Claude CLI timed out after 2 minutes"))},12e4);o.stdout.on("data",p=>{d+=p.toString()}),o.stderr.on("data",p=>{y+=p.toString()}),o.on("close",p=>{if(clearTimeout(m),p!==0&&!d){P(new Error(y||`Claude CLI exited with code ${p}`));return}try{let R=d.trim().split(`
`).filter(Boolean),A="",v="",K,X,L,Y=!1;for(let ae of R)try{let w=JSON.parse(ae);if(Y=!0,w.type==="result")K=w.session_id,X=w.total_cost_usd,L=w.usage,w.result&&(v=w.result);else if(w.type==="assistant"&&w.message?.content)for(let ce of w.message.content)ce.type==="text"&&(A+=ce.text);else w.result&&(v=w.result,K=w.session_id,X=w.total_cost_usd,L=w.usage)}catch{A+=ae}let D=A||v;(!D&&Y&&L?.output_tokens&&L.output_tokens>0||!D&&!Y)&&(D=d),g({result:D||"",session_id:K,total_cost_usd:X,usage:L})}catch{g({result:d||y,is_error:!!y&&!d})}}),o.on("error",p=>{clearTimeout(m),P(p)})})}async function qe(){return await ye()!==null}async function Z(){let t=await qe();if(!t){let{showToast:n,Toast:s}=await import("@raycast/api");await n({style:s.Style.Failure,title:"Claude Code not installed",message:"Install: npm install -g @anthropic-ai/claude-code"})}return t}var x=require("@raycast/api"),Te=require("child_process"),Se=require("util"),G=I(require("fs")),f=I(require("path")),E=I(require("os"));var Je=require("@raycast/api"),Ee=require("child_process"),Ie=require("util");var ee=I(require("path")),Pe=I(require("os"));var Ve=require("@raycast/api"),Ke=ee.default.join(Pe.default.homedir(),".claude"),gt=ee.default.join(Ke,"projects");var k=I(require("fs")),b=I(require("path")),F=I(require("os")),Xe=[b.default.join(F.default.homedir(),"Library/Application Support/Code/User/globalStorage/storage.json"),b.default.join(F.default.homedir(),"Library/Application Support/Code - Insiders/User/globalStorage/storage.json"),b.default.join(F.default.homedir(),"Library/Application Support/Cursor/User/globalStorage/storage.json"),b.default.join(F.default.homedir(),"Library/Application Support/VSCodium/User/globalStorage/storage.json")];function Ye(t){return t.startsWith("file://")?decodeURIComponent(t.replace("file://","")):t}async function we(){for(let t of Xe)try{let n=await k.default.promises.readFile(t,"utf8"),s=JSON.parse(n),c=s.backupWorkspaces?.folders||[];for(let e of c)if(e.folderUri){let u=Ye(e.folderUri);try{return await k.default.promises.access(u),await k.default.promises.access(b.default.join(u,".git")),u}catch{}}let a=s.lastKnownMenubarData?.menus?.File;if(a?.items){let e=a.items.find(u=>u.id==="submenuitem.MenubarRecentMenu");if(e?.submenu?.items){for(let u of e.submenu.items)if(u.id==="openRecentFolder"&&u.uri?.path){let h=u.uri.path;try{return await k.default.promises.access(h),await k.default.promises.access(b.default.join(h,".git")),h}catch{}}}}}catch{}}var te=(0,Ie.promisify)(Ee.exec);async function Ae(t){try{let{stdout:n}=await te("git branch --show-current",{cwd:t}),{stdout:s}=await te("git status --porcelain",{cwd:t}),c;try{let{stdout:a}=await te("git remote get-url origin",{cwd:t});c=a.trim()}catch{}return{branch:n.trim(),hasChanges:s.trim().length>0,remote:c}}catch{return null}}var ze=(0,Se.promisify)(Te.execFile),Qe=["Code","Cursor","Code - Insiders","VSCodium"];async function ve(){try{return(await(0,x.getSelectedText)()).trim()||void 0}catch{return}}async function be(){try{return(await x.Clipboard.readText())?.trim()||void 0}catch{return}}async function Ze(){for(let n of Qe)try{let s=`tell application "System Events" to tell process "${n}" to get name of front window`,{stdout:c}=await ze("osascript",["-e",s],{timeout:2e3}),a=c.trim();if(a){let e=et(a);if(e.projectPath){let u=await it(e.projectPath);if(u)return{projectPath:u,currentFile:e.currentFile}}}}catch{}let t=await tt();return t?{projectPath:t}:{}}function et(t){let n=t.split(" - "),s,c;return n.length>=2&&(n[0].includes(".")?(s=n[0],c=n[1]):c=n[0]),{projectPath:c,currentFile:s}}async function tt(){return we()}async function it(t){let n=[f.default.join(E.default.homedir(),"dev"),f.default.join(E.default.homedir(),"Development"),f.default.join(E.default.homedir(),"projects"),f.default.join(E.default.homedir(),"Projects"),f.default.join(E.default.homedir(),"code"),f.default.join(E.default.homedir(),"Code"),f.default.join(E.default.homedir(),"workspace"),f.default.join(E.default.homedir(),"work"),f.default.join(E.default.homedir(),"devstuff"),f.default.join(E.default.homedir(),"repos"),f.default.join(E.default.homedir(),"Documents"),f.default.join(E.default.homedir(),"Desktop")];for(let c of n){let a=f.default.join(c,t);try{return await G.default.promises.access(a),a}catch{}}let s=f.default.join(E.default.homedir(),".claude","projects");try{let c=await G.default.promises.readdir(s);for(let a of c){let e="/"+a.slice(1).replace(/-/g,"/"),u=f.default.normalize(e);if(!(!f.default.isAbsolute(u)||u.includes(".."))&&(e.endsWith(`/${t}`)||f.default.basename(e)===t))try{return await G.default.promises.access(u),u}catch{}}}catch{}}async function q(){let[t,n,s,c]=await Promise.all([ve(),be(),Ze(),(0,x.getFrontmostApplication)().catch(()=>null)]),a={selectedText:t,clipboard:n,projectPath:s.projectPath,currentFile:s.currentFile,frontmostApp:c?.name};if(a.projectPath){let e=await Ae(a.projectPath);e&&(a.gitBranch=e.branch,a.gitHasChanges=e.hasChanges)}return a}function nt(t){return[/function\s+\w+/,/const\s+\w+\s*=/,/let\s+\w+\s*=/,/var\s+\w+\s*=/,/class\s+\w+/,/import\s+.*from/,/export\s+(default\s+)?/,/def\s+\w+\s*\(/,/async\s+(function|def)/,/=>\s*{/,/\{\s*\n/,/^\s*(if|for|while|switch|try)\s*\(/m,/<[A-Z]\w+(\s|\/|>)/,/^\s*#include/m,/^\s*package\s+\w+/m,/^\s*impl\s+\w+/m,/fn\s+\w+\s*\(/].some(s=>s.test(t))}async function Re(){let t=await ve();if(t)return t;let n=await be();if(n&&nt(n))return n}var S=require("@raycast/api"),xe=require("child_process"),Le=require("util"),ne=require("fs"),oe=require("os"),$=require("path"),M=(0,Le.promisify)(xe.execFile);async function ie(t,n={}){let s=(0,S.getPreferenceValues)(),c=n.terminalApp||s.terminalApp||"Terminal",a=n.cwd||process.env.HOME||"/";try{switch(c){case"Terminal":await ke(t,a);break;case"iTerm":await ot(t,a);break;case"Warp":await st(t,a);break;case"kitty":await rt(t,a);break;case"Ghostty":await at(t,a);break;default:await ke(t,a)}}catch(e){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed to open terminal",message:e instanceof Error?e.message:String(e)})}}async function ke(t,n){let s=t.replace(/"/g,'\\"').replace(/\$/g,"\\$"),a=`
    tell application "Terminal"
      activate
      do script "cd \\"${n.replace(/"/g,'\\"')}\\" && ${s}"
    end tell
  `;await M("osascript",["-e",a])}async function ot(t,n){let s=t.replace(/"/g,'\\"').replace(/\$/g,"\\$"),a=`
    tell application "iTerm"
      activate
      create window with default profile
      tell current session of current window
        write text "cd \\"${n.replace(/"/g,'\\"')}\\" && ${s}"
      end tell
    end tell
  `;await M("osascript",["-e",a])}async function st(t,n){let s=encodeURIComponent(`cd "${n}" && ${t}`);await(0,S.open)(`warp://action/new_tab?command=${s}`)}async function rt(t,n){await M("kitty",["--single-instance",`--directory=${n}`,"-e","sh","-c",t])}async function at(t,n){let s=t.replace(/"/g,'\\"').replace(/\$/g,"\\$"),c=n.replace(/"/g,'\\"');try{await M("ghostty",[`--working-directory=${n}`,"-e","sh","-c",t])}catch{let a=`
      tell application "Ghostty"
        activate
      end tell
      delay 0.5
      tell application "System Events"
        keystroke "cd \\"${c}\\" && ${s}"
        keystroke return
      end tell
    `;await M("osascript",["-e",a])}}async function V(t){let n=["claude"];if(t.dangerouslySkipPermissions&&n.push("--dangerously-skip-permissions"),t.sessionId?(n.push("-r",t.sessionId),t.forkSession&&n.push("--fork-session")):t.continueSession&&n.push("-c"),t.prompt)if((t.prompt.includes(`
`)||t.prompt.includes("<")||t.prompt.includes(">"))&&!t.printMode){let a=(0,$.join)((0,oe.tmpdir)(),`claudecast-prompt-${Date.now()}.txt`);(0,ne.writeFileSync)(a,t.prompt,"utf-8");let e=`cat "${a}" | claude; rm "${a}"`;await ie(e,{cwd:t.projectPath});return}else t.printMode?n.push("-p",`"${t.prompt.replace(/"/g,'\\"')}"`):n.push(`"${t.prompt.replace(/"/g,'\\"')}"`);let s=n.join(" ");await ie(s,{cwd:t.projectPath})}async function De(t){let{projectPath:n,task:s,requirements:c,maxIterations:a}=t,e=lt(s,c,a),u=(0,$.join)((0,oe.tmpdir)(),`ralph-fresh-${Date.now()}.sh`);(0,ne.writeFileSync)(u,e,{mode:493});let h=(0,$.join)(n,".ralph"),g=(0,$.join)(h,"task.md"),P=ct(s,c),o=`
mkdir -p "${h}" && \\
cat > "${g}" << 'TASK_EOF'
${P}
TASK_EOF
bash "${u}"; rm -f "${u}"
`.trim();await ie(o,{cwd:n})}function ct(t,n){return`# Ralph Loop Task

## Main Goal
${t}

## Requirements
${n||"No specific requirements provided."}

---
_This file stores the original task. See plan.md for the breakdown into atomic tasks._
`}function lt(t,n,s){let c=t.replace(/'/g,"'\\''"),a=n.replace(/'/g,"'\\''"),e="$";return`#!/bin/bash
# Ralph Fresh Context Loop - Generated by ClaudeCast
# MARKER FILE APPROACH: Full TUI visibility + Fresh context per task
#
# Phase 1: Planning - Claude breaks down task into atomic steps (full TUI)
# Phase 2: Execution - Each step runs in a fresh context window (full TUI)
#
# Key: Claude creates .ralph/done marker file when finished, watcher kills process

set -e

RALPH_DIR=".ralph"
TASK_FILE="${e}{RALPH_DIR}/task.md"
PLAN_FILE="${e}{RALPH_DIR}/plan.md"
STOP_FILE="${e}{RALPH_DIR}/stop"
DONE_MARKER="${e}{RALPH_DIR}/done"
LOG_FILE="${e}{RALPH_DIR}/loop.log"
MAX_ITERATIONS=${s}
ITERATION=0

# Colors for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
BLUE='\\033[0;34m'
CYAN='\\033[0;36m'
NC='\\033[0m' # No Color

log() {
    echo -e "${e}{BLUE}[Ralph]${e}{NC} ${e}1"
    echo "[${e}(date '+%Y-%m-%d %H:%M:%S')] ${e}1" >> "${e}LOG_FILE"
}

log_success() {
    echo -e "${e}{GREEN}[Ralph]${e}{NC} ${e}1"
    echo "[${e}(date '+%Y-%m-%d %H:%M:%S')] SUCCESS: ${e}1" >> "${e}LOG_FILE"
}

log_warning() {
    echo -e "${e}{YELLOW}[Ralph]${e}{NC} ${e}1"
    echo "[${e}(date '+%Y-%m-%d %H:%M:%S')] WARNING: ${e}1" >> "${e}LOG_FILE"
}

log_error() {
    echo -e "${e}{RED}[Ralph]${e}{NC} ${e}1"
    echo "[${e}(date '+%Y-%m-%d %H:%M:%S')] ERROR: ${e}1" >> "${e}LOG_FILE"
}

log_phase() {
    echo -e "${e}{CYAN}[Ralph]${e}{NC} ${e}1"
    echo "[${e}(date '+%Y-%m-%d %H:%M:%S')] PHASE: ${e}1" >> "${e}LOG_FILE"
}

# Check if there are remaining unchecked tasks
has_remaining_tasks() {
    grep -q '^- \\[ \\]' "${e}PLAN_FILE" 2>/dev/null
}

# Count completed and remaining tasks
count_tasks() {
    local completed remaining total
    completed=${e}(grep -c '^- \\[x\\]' "${e}PLAN_FILE" 2>/dev/null || echo 0)
    remaining=${e}(grep -c '^- \\[ \\]' "${e}PLAN_FILE" 2>/dev/null || echo 0)
    total=${e}((completed + remaining))
    echo "${e}completed/${e}total"
}

# Get the next task description
get_next_task() {
    grep -m1 '^- \\[ \\]' "${e}PLAN_FILE" 2>/dev/null | sed 's/^- \\[ \\] //'
}

#######################################
# Run Claude with signal file detection
# Runs Claude normally (full TUI), watcher monitors signal file for stop token
# Only kills our specific Claude process (by PID), not other sessions
#######################################
STOP_TOKEN="###RALPH_TASK_COMPLETE###"
SIGNAL_FILE="${e}{RALPH_DIR}/signal"

run_claude_with_watcher() {
    local PROMPT_FILE="${e}1"
    local WATCHER_PID=""
    local CLAUDE_PID=""

    # Remove any existing signal file
    rm -f "${e}SIGNAL_FILE"

    # Run Claude in background so we can capture its PID
    cat "${e}PROMPT_FILE" | claude --dangerously-skip-permissions &
    CLAUDE_PID=${e}!

    # Start background watcher that monitors signal file for stop token
    (
        while true; do
            # Check if signal file exists and contains stop token
            if [[ -f "${e}SIGNAL_FILE" ]] && grep -q "${e}STOP_TOKEN" "${e}SIGNAL_FILE" 2>/dev/null; then
                # Give Claude a moment to finish any final output
                sleep 2
                # Kill only OUR Claude process by PID
                kill -9 ${e}CLAUDE_PID 2>/dev/null || true
                exit 0
            fi
            # Also check if Claude exited on its own
            if ! kill -0 ${e}CLAUDE_PID 2>/dev/null; then
                exit 0
            fi
            sleep 1
        done
    ) &
    WATCHER_PID=${e}!

    # Wait for Claude to finish (either naturally or killed by watcher)
    wait ${e}CLAUDE_PID 2>/dev/null || true

    # Cleanup watcher
    kill ${e}WATCHER_PID 2>/dev/null || true
    wait ${e}WATCHER_PID 2>/dev/null || true

    # Check if signal file contains stop token (indicates successful completion)
    if [[ -f "${e}SIGNAL_FILE" ]] && grep -q "${e}STOP_TOKEN" "${e}SIGNAL_FILE" 2>/dev/null; then
        rm -f "${e}SIGNAL_FILE"
        return 0
    else
        rm -f "${e}SIGNAL_FILE"
        return 1
    fi
}

log "=============================================="
log "   Ralph Fresh Context Loop"
log "=============================================="
log "Stop gracefully: touch ${e}STOP_FILE"
log "Full TUI visible during Claude sessions!"
log ""

#######################################
# Generate resume.sh script for continuing later
#######################################
generate_resume_script() {
    cat > "${e}RALPH_DIR/resume.sh" << 'RESUME_SCRIPT_EOF'
#!/bin/bash
# Ralph Loop Resume Script - Continue incomplete tasks
# Usage: bash .ralph/resume.sh [max-iterations]
#        Default: 10 iterations

set -e

MAX_ITERATIONS=${e}{1:-10}
RALPH_DIR=".ralph"
PLAN_FILE="${e}{RALPH_DIR}/plan.md"
STOP_FILE="${e}{RALPH_DIR}/stop"
SIGNAL_FILE="${e}{RALPH_DIR}/signal"
LOG_FILE="${e}{RALPH_DIR}/loop.log"
ITERATION=0

# Colors
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
BLUE='\\033[0;34m'
CYAN='\\033[0;36m'
NC='\\033[0m'

log() { echo -e "${e}{BLUE}[Ralph]${e}{NC} ${e}1"; echo "[${e}(date '+%Y-%m-%d %H:%M:%S')] ${e}1" >> "${e}LOG_FILE"; }
log_success() { echo -e "${e}{GREEN}[Ralph]${e}{NC} ${e}1"; echo "[${e}(date '+%Y-%m-%d %H:%M:%S')] SUCCESS: ${e}1" >> "${e}LOG_FILE"; }
log_warning() { echo -e "${e}{YELLOW}[Ralph]${e}{NC} ${e}1"; echo "[${e}(date '+%Y-%m-%d %H:%M:%S')] WARNING: ${e}1" >> "${e}LOG_FILE"; }
log_phase() { echo -e "${e}{CYAN}[Ralph]${e}{NC} ${e}1"; echo "[${e}(date '+%Y-%m-%d %H:%M:%S')] PHASE: ${e}1" >> "${e}LOG_FILE"; }

has_remaining_tasks() { grep -q '^- \\[ \\]' "${e}PLAN_FILE" 2>/dev/null; }
count_tasks() {
    local completed remaining total
    completed=${e}(grep -c '^- \\[x\\]' "${e}PLAN_FILE" 2>/dev/null || echo 0)
    remaining=${e}(grep -c '^- \\[ \\]' "${e}PLAN_FILE" 2>/dev/null || echo 0)
    total=${e}((completed + remaining))
    echo "${e}completed/${e}total"
}
get_next_task() { grep -m1 '^- \\[ \\]' "${e}PLAN_FILE" 2>/dev/null | sed 's/^- \\[ \\] //'; }

STOP_TOKEN="###RALPH_TASK_COMPLETE###"

run_claude_with_watcher() {
    local PROMPT_FILE="${e}1"
    local WATCHER_PID="" CLAUDE_PID=""
    rm -f "${e}SIGNAL_FILE"
    cat "${e}PROMPT_FILE" | claude --dangerously-skip-permissions &
    CLAUDE_PID=${e}!
    (
        while true; do
            if [[ -f "${e}SIGNAL_FILE" ]] && grep -q "${e}STOP_TOKEN" "${e}SIGNAL_FILE" 2>/dev/null; then
                sleep 2; kill -9 ${e}CLAUDE_PID 2>/dev/null || true; exit 0
            fi
            if ! kill -0 ${e}CLAUDE_PID 2>/dev/null; then exit 0; fi
            sleep 1
        done
    ) &
    WATCHER_PID=${e}!
    wait ${e}CLAUDE_PID 2>/dev/null || true
    kill ${e}WATCHER_PID 2>/dev/null || true; wait ${e}WATCHER_PID 2>/dev/null || true
    if [[ -f "${e}SIGNAL_FILE" ]] && grep -q "${e}STOP_TOKEN" "${e}SIGNAL_FILE" 2>/dev/null; then
        rm -f "${e}SIGNAL_FILE"; return 0
    else
        rm -f "${e}SIGNAL_FILE"; return 1
    fi
}

# Check prerequisites
if [[ ! -f "${e}PLAN_FILE" ]]; then
    echo -e "${e}{RED}[Ralph]${e}{NC} No plan.md found. Run Ralph Loop from Raycast first to create a plan."
    exit 1
fi

if ! has_remaining_tasks; then
    log_success "All tasks already completed! (${e}(count_tasks))"
    exit 0
fi

log "=============================================="
log "   Ralph Loop - Resuming"
log "=============================================="
log "Max iterations: ${e}MAX_ITERATIONS"
log "Progress: ${e}(count_tasks)"
log "Stop gracefully: touch ${e}STOP_FILE"
echo ""

while [ ${e}ITERATION -lt ${e}MAX_ITERATIONS ]; do
    ITERATION=${e}((ITERATION + 1))
    if [ -f "${e}STOP_FILE" ]; then log_warning "Stop file detected."; rm -f "${e}STOP_FILE"; exit 0; fi
    if ! has_remaining_tasks; then
        echo ""; log_success "=============================================="; log_success "   ALL TASKS COMPLETED! (${e}(count_tasks))"; log_success "=============================================="
        exit 0
    fi
    NEXT_TASK=${e}(get_next_task)
    log "=== Iteration ${e}ITERATION/${e}MAX_ITERATIONS (Progress: ${e}(count_tasks)) ==="
    log "Next task: ${e}NEXT_TASK"
    echo ""

    EXEC_PROMPT_FILE="${e}(mktemp)"
    cat > "${e}EXEC_PROMPT_FILE" << EXEC_EOF
You are an autonomous coding agent in a Ralph Loop - a workflow where EACH TASK runs in a FRESH CONTEXT.

=== CRITICAL: YOU HAVE NO MEMORY OF PREVIOUS SESSIONS ===
All prior work is saved in FILES. You must READ files to understand the current state.

=== YOUR CURRENT TASK ===
${e}NEXT_TASK

=== EXECUTION PROTOCOL ===
STEP 1: ORIENT - Read .ralph/plan.md, Architecture Notes, Technical Context, and existing source files
STEP 2: EXECUTE - Complete the task, follow existing patterns, meet acceptance criteria
STEP 3: VERIFY - Ensure task is FULLY complete
STEP 4: UPDATE - Mark task [x] in plan.md, add to Progress Log and Technical Context
STEP 5: SIGNAL - Run: echo "###RALPH_TASK_COMPLETE###" > .ralph/signal

=== RULES ===
1. Complete ONE task only
2. Do not ask questions - make reasonable decisions
3. When done, signal completion - don't ask 'anything else?'

Begin by reading .ralph/plan.md.
EXEC_EOF

    if run_claude_with_watcher "${e}EXEC_PROMPT_FILE"; then
        log_success "Task completed"
    else
        log_warning "Task session ended"
    fi
    rm -f "${e}EXEC_PROMPT_FILE"
    sleep 2; echo ""
done

log_warning "Max iterations (${e}MAX_ITERATIONS) reached"
if has_remaining_tasks; then
    REMAINING=${e}(grep -c '^- \\[ \\]' "${e}PLAN_FILE" 2>/dev/null || echo 0)
    log_warning "${e}REMAINING tasks remain."
    echo ""; echo -e "  ${e}{GREEN}bash .ralph/resume.sh 10${e}{NC}  # to continue"
    exit 1
fi
log_success "All tasks completed!"
RESUME_SCRIPT_EOF
    chmod +x "${e}RALPH_DIR/resume.sh"
}

# Generate resume script at startup
generate_resume_script

#######################################
# PHASE 1: PLANNING
#######################################
if [ ! -f "${e}PLAN_FILE" ]; then
    log_phase "PHASE 1: PLANNING"
    log "Breaking down task into atomic steps..."
    log "Watch Claude's TUI below:"
    echo ""

    # Write planning prompt to temp file
    PLANNING_PROMPT_FILE="${e}(mktemp)"
    cat > "${e}PLANNING_PROMPT_FILE" << 'PLANNING_EOF'
You are a senior software architect creating a detailed implementation plan for an autonomous coding system.

CRITICAL: This plan will be executed by AI agents with FRESH CONTEXT for each task. Each task must be:
- SELF-CONTAINED: An agent with no memory of previous tasks must be able to complete it
- ATOMIC: One focused unit of work (30-60 min equivalent)
- VERIFIABLE: Clear success criteria so the agent knows when it's done

=== PROJECT DETAILS ===

MAIN GOAL:
${c}

REQUIREMENTS:
${a}

=== PLANNING PHILOSOPHY: MVP FIRST ===

Build a FUNCTIONAL MVP first, then iterate. Avoid over-engineering.

DO:
- Start with the simplest working implementation
- Add complexity only when needed
- Get core functionality working before edge cases
- Use standard libraries/patterns over custom solutions
- Hardcode values initially, make configurable later if needed

DON'T:
- Build elaborate abstractions upfront
- Add features 'just in case'
- Optimize before measuring
- Create complex config systems for simple needs
- Over-architect for hypothetical scale

Structure phases as:
1. Foundation - Minimal setup to start coding
2. Core MVP - Basic working version of main features
3. Refinement - Error handling, edge cases, tests
4. Polish - UX improvements, documentation, nice-to-haves

=== YOUR TASK ===

Create a comprehensive implementation plan in .ralph/plan.md

Consider these aspects (but keep MVP-focused):
1. PROJECT SETUP - Minimal dependencies, basic structure
2. DATA LAYER - Core models only, simple schemas
3. CORE LOGIC - Essential business logic first
4. API/INTERFACE - Key endpoints/screens that deliver value
5. INTEGRATION - Connect the pieces
6. ERROR HANDLING - Basic validation, clear error messages
7. TESTING - Critical path tests, not 100% coverage
8. DOCUMENTATION - README with setup instructions
9. POLISH - Only after MVP works

=== FRONTEND-SPECIFIC GUIDANCE ===

If this project involves frontend/UI work:

DESIGN PRINCIPLES:
- Professional, clean aesthetic - NOT generic AI-generated 'slop'
- Consistent spacing, typography, and color scheme
- Proper visual hierarchy - users should know where to look
- Responsive design - works on mobile and desktop
- Accessible - proper contrast, keyboard navigation, ARIA labels

ARCHITECTURE:
- Component-based structure with clear separation
- Reusable UI components (buttons, inputs, cards)
- Centralized styling (CSS variables, theme, or Tailwind config)
- State management appropriate to complexity (local state for simple, context/store for complex)

TOOLS TO USE:
- Use Playwright MCP for browser testing and visual verification
- Use 21st.dev MCP for high-quality UI component inspiration
- Prefer established UI libraries (shadcn/ui, Radix) over building from scratch

AVOID:
- Rainbow gradients and excessive animations
- Inconsistent spacing (use a spacing scale: 4px, 8px, 16px, 24px, 32px)
- Too many different fonts or colors
- Walls of text without visual breaks
- Generic placeholder content - use realistic examples

=== PLAN FORMAT ===

Write to .ralph/plan.md using this EXACT structure:

# Implementation Plan

## Overview
[2-3 sentences: What we're building, key technologies, architecture approach]

## Architecture Notes
[Key technical decisions that future tasks need to know about]
- [Decision 1: e.g., 'Using PostgreSQL with Prisma ORM']
- [Decision 2: e.g., 'JWT tokens stored in httpOnly cookies']
- [Decision 3: e.g., 'All API responses follow {success, data, error} format']

## Tasks

### Phase 1: Foundation
- [ ] [Task]: [Specific description] | Acceptance: [How to verify it's done]
- [ ] [Task]: [Specific description] | Acceptance: [How to verify it's done]

### Phase 2: Core Features
- [ ] [Task]: [Specific description] | Acceptance: [How to verify it's done]

### Phase 3: Integration & Testing
- [ ] [Task]: [Specific description] | Acceptance: [How to verify it's done]

### Phase 4: Polish & Documentation
- [ ] [Task]: [Specific description] | Acceptance: [How to verify it's done]

## Progress Log
_Task completions will be logged here with timestamps_

## Technical Context
_Agents will add notes here about implementation details for future tasks_

=== EXAMPLES OF GOOD TASKS ===

BAD: '- [ ] Set up authentication'
GOOD: '- [ ] Create JWT utility module with generateToken(userId) and verifyToken(token) functions | Acceptance: Unit tests pass for valid/invalid/expired tokens'

BAD: '- [ ] Add tests'
GOOD: '- [ ] Write integration tests for POST /api/users endpoint covering: valid creation, duplicate email, invalid input | Acceptance: All 3 test cases pass'

BAD: '- [ ] Build the API'
GOOD: '- [ ] Implement GET /api/users/:id endpoint with authentication middleware | Acceptance: Returns user for valid ID, 404 for invalid, 401 for unauthenticated'

=== CONSTRAINTS ===

- Target ${Math.max(8,Math.min(30,s-2))} tasks (budget: ${s} iterations)
- Each task line MUST start with '- [ ] '
- Include acceptance criteria after ' | Acceptance: '
- Order tasks so each can be done with only prior tasks complete
- First 2-3 tasks should be setup (so later tasks have foundation)
- Include test tasks inline (not all at end)

=== CRITICAL: SIGNAL COMPLETION ===

When you have COMPLETED the plan and written it to .ralph/plan.md, you MUST signal the orchestrator by running this EXACT command:

echo "###RALPH_TASK_COMPLETE###" > .ralph/signal

This tells the orchestrator you are finished. After running this command, the session will end automatically.

Begin by creating .ralph/plan.md now.
PLANNING_EOF

    # Run Claude with watcher
    if run_claude_with_watcher "${e}PLANNING_PROMPT_FILE"; then
        log_success "Planning phase completed"
    else
        log_warning "Planning session ended (stop token may not have been detected)"
    fi

    rm -f "${e}PLANNING_PROMPT_FILE"

    # Verify plan was created
    if [ ! -f "${e}PLAN_FILE" ]; then
        log_error "Plan file was not created. Please check Claude's output."
        exit 1
    fi

    log ""
    log "Plan created with ${e}(grep -c '^- \\[ \\]' "${e}PLAN_FILE" 2>/dev/null || echo 0) tasks"
    log ""
    sleep 2
fi

#######################################
# PHASE 2: EXECUTION
#######################################
log_phase "PHASE 2: EXECUTION"
log "Executing tasks with fresh context per task..."
log "Full TUI visible for each Claude session!"
echo ""

while [ ${e}ITERATION -lt ${e}MAX_ITERATIONS ]; do
    ITERATION=${e}((ITERATION + 1))

    # Check for stop signal
    if [ -f "${e}STOP_FILE" ]; then
        log_warning "Stop file detected. Exiting gracefully..."
        rm -f "${e}STOP_FILE"
        exit 0
    fi

    # Check if all tasks are done
    if ! has_remaining_tasks; then
        echo ""
        log_success "=============================================="
        log_success "   ALL TASKS COMPLETED!"
        log_success "   (${e}(count_tasks) tasks done)"
        log_success "=============================================="
        exit 0
    fi

    NEXT_TASK=${e}(get_next_task)
    log "=== Iteration ${e}ITERATION/${e}MAX_ITERATIONS (Progress: ${e}(count_tasks)) ==="
    log "Next task: ${e}NEXT_TASK"
    log "Starting FRESH Claude session with TUI..."
    echo ""

    # Write execution prompt to temp file
    EXEC_PROMPT_FILE="${e}(mktemp)"
    cat > "${e}EXEC_PROMPT_FILE" << EXEC_EOF
You are an autonomous coding agent in a Ralph Loop - a workflow where EACH TASK runs in a FRESH CONTEXT.

=== CRITICAL: YOU HAVE NO MEMORY OF PREVIOUS SESSIONS ===
All prior work is saved in FILES. You must READ files to understand the current state.
Do not assume anything - verify by reading.

=== YOUR CURRENT TASK ===
${e}NEXT_TASK

=== EXECUTION PROTOCOL ===

STEP 1: ORIENT (Read files to understand context)
- Read .ralph/plan.md for the full plan and what's already done
- Read the 'Architecture Notes' and 'Technical Context' sections carefully
- Read existing source files to understand the codebase structure
- Identify what this task builds upon

STEP 2: EXECUTE (Complete the task thoroughly)
- Implement the task according to its description
- Follow patterns established in existing code
- Write clean, documented code with proper error handling
- If the task includes tests, write them and verify they pass
- Check the 'Acceptance' criteria - ensure you meet them

FOR FRONTEND TASKS:
- Use Playwright MCP to verify UI works correctly in browser
- Use 21st.dev MCP for component inspiration if building UI
- Follow the design system/theme established in the project
- Ensure responsive design (test at mobile and desktop widths)
- No 'AI slop' - professional, consistent, clean aesthetics
- Use proper spacing scale, typography hierarchy, color consistency

STEP 3: VERIFY (Confirm the task is complete)
- Re-read the acceptance criteria from the task
- Run any relevant tests or verification commands
- Ensure the task is FULLY complete, not partially done

STEP 4: UPDATE (Record progress)
- In .ralph/plan.md, change this task from '- [ ]' to '- [x]'
- Add a timestamped entry to the 'Progress Log' section:
  '[DATE] Completed: [task summary] - [brief notes about implementation]'
- If future tasks need to know something, add it to 'Technical Context'

STEP 5: SIGNAL COMPLETION
When you have FULLY COMPLETED the task and updated plan.md, signal the orchestrator:

Run this EXACT command: echo "###RALPH_TASK_COMPLETE###" > .ralph/signal

This tells the orchestrator you are finished. After running this command, the session will end automatically.

=== IMPORTANT RULES ===

1. Complete ONE task only - the one listed above
2. Do not start the next task - a fresh session will handle it
3. Do not ask questions - make reasonable decisions and document them
4. When done, run 'echo "###RALPH_TASK_COMPLETE###" > .ralph/signal' - don't ask 'anything else?'
5. If task is unclear, do your best interpretation and note it in Progress Log

=== CURRENT STATUS ===
Iteration: ${e}ITERATION of ${e}MAX_ITERATIONS

Begin now by reading .ralph/plan.md to orient yourself.
EXEC_EOF

    # Run Claude with watcher
    if run_claude_with_watcher "${e}EXEC_PROMPT_FILE"; then
        log_success "Task completed successfully"
    else
        log_warning "Task session ended (checking if task was marked complete...)"
    fi

    rm -f "${e}EXEC_PROMPT_FILE"

    # Small delay between iterations
    sleep 2
    echo ""
done

log_warning "Max iterations (${e}MAX_ITERATIONS) reached"
if has_remaining_tasks; then
    REMAINING=${e}(grep -c '^- \\[ \\]' "${e}PLAN_FILE" 2>/dev/null || echo 0)
    log_warning "${e}REMAINING tasks remain incomplete."
    echo ""
    log "To resume, run one of these commands:"
    echo ""
    echo -e "  ${e}{CYAN}# Resume with 10 more iterations:${e}{NC}"
    echo -e "  ${e}{GREEN}cd ${e}(pwd) && bash .ralph/resume.sh 10${e}{NC}"
    echo ""
    echo -e "  ${e}{CYAN}# Or specify a different number:${e}{NC}"
    echo -e "  ${e}{GREEN}cd ${e}(pwd) && bash .ralph/resume.sh <iterations>${e}{NC}"
    echo ""
    exit 1
else
    log_success "All tasks completed!"
    exit 0
fi
`}var r=require("react/jsx-runtime"),Oe=["planning","tdd","review","refactoring","debugging","docs","advanced"];function T(t){return t.replace(/([A-Z])/g," $1").replace(/^./,n=>n.toUpperCase()).trim()}function _e(){let[t,n]=(0,C.useState)(!0),[s,c]=(0,C.useState)([]),[a,e]=(0,C.useState)("all");async function u(){n(!0);let o=await pe();c(o),n(!1)}(0,C.useEffect)(()=>{u()},[]);function h(){return a==="all"?s:a==="frequent"?[...s].sort((o,d)=>d.usageCount-o.usageCount).slice(0,10):J(s,a)}let g=h(),P=a==="all"?Oe.reduce((o,d)=>{let y=J(g,d);return y.length>0&&(o[d]=y),o},{}):null;return(0,r.jsxs)(i.List,{isLoading:t,searchBarPlaceholder:"Search prompts...",searchBarAccessory:(0,r.jsxs)(i.List.Dropdown,{tooltip:"Filter by Category",onChange:o=>e(o),children:[(0,r.jsx)(i.List.Dropdown.Item,{title:"All Prompts",value:"all"}),(0,r.jsx)(i.List.Dropdown.Item,{title:"Frequently Used",value:"frequent"}),(0,r.jsx)(i.List.Dropdown.Section,{title:"Categories",children:Oe.map(o=>{let d=O(o);return(0,r.jsx)(i.List.Dropdown.Item,{icon:{source:d.icon,tintColor:d.tintColor},title:d.name,value:o},o)})})]}),children:[P?Object.entries(P).map(([o,d])=>{let y=O(o);return(0,r.jsx)(i.List.Section,{title:y.name,subtitle:`${d.length} prompts`,children:d.map(m=>(0,r.jsx)(Ne,{prompt:m,onRefresh:u},m.id))},o)}):g.map(o=>(0,r.jsx)(Ne,{prompt:o,onRefresh:u},o.id)),!t&&g.length===0&&(0,r.jsx)(i.List.EmptyView,{title:"No Prompts Found",description:"Try a different category or search term",icon:i.Icon.Document})]})}function Ne({prompt:t,onRefresh:n}){let{push:s}=(0,i.useNavigation)(),c=O(t.category),a=[];t.usageCount>0&&a.push({text:`${t.usageCount}x`,tooltip:`Used ${t.usageCount} times`}),t.model&&a.push({tag:{value:t.model,color:t.model==="opus"?i.Color.Purple:t.model==="haiku"?i.Color.Green:i.Color.Blue}}),t.isBuiltIn||a.push({tag:{value:"Custom",color:i.Color.Orange}});async function e(u={}){if(!await Z())return;let h=await q(),g=u.projectPath||h.projectPath;if(g&&!(0,j.existsSync)(g)){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Project path no longer exists",message:g});return}let P=H(t.prompt,u);await W(t.id),await V({projectPath:g,prompt:P}),await(0,i.popToRoot)()}return(0,r.jsx)(i.List.Item,{title:t.name,subtitle:t.description,icon:{source:t.icon||c.icon,tintColor:t.tintColor||c.tintColor},accessories:a,actions:(0,r.jsxs)(i.ActionPanel,{children:[(0,r.jsxs)(i.ActionPanel.Section,{title:"Execute",children:[t.variables.length>0?(0,r.jsx)(i.Action.Push,{title:"Run in Terminal",icon:i.Icon.Terminal,target:(0,r.jsx)(se,{prompt:t,mode:"terminal"})}):(0,r.jsx)(i.Action,{title:"Run in Terminal",icon:i.Icon.Terminal,onAction:()=>e()}),!t.terminalOnly&&(t.variables.length>0?(0,r.jsx)(i.Action.Push,{title:"Quick Execute in Raycast",icon:i.Icon.Play,shortcut:{modifiers:["cmd"],key:"e"},target:(0,r.jsx)(se,{prompt:t,mode:"raycast"})}):(0,r.jsx)(i.Action,{title:"Quick Execute in Raycast",icon:i.Icon.Play,shortcut:{modifiers:["cmd"],key:"e"},onAction:async()=>{s((0,r.jsx)(re,{prompt:t,variables:{}}))}})),(0,r.jsx)(i.Action.Push,{title:"View Prompt",icon:i.Icon.Eye,shortcut:{modifiers:["cmd"],key:"d"},target:(0,r.jsx)(ut,{prompt:t})})]}),(0,r.jsxs)(i.ActionPanel.Section,{title:"Manage",children:[(0,r.jsx)(i.Action.CopyToClipboard,{title:"Copy Prompt",content:t.prompt,shortcut:{modifiers:["cmd"],key:"c"}}),!t.isBuiltIn&&(0,r.jsx)(i.Action,{title:"Delete Prompt",icon:i.Icon.Trash,style:i.Action.Style.Destructive,shortcut:{modifiers:["ctrl"],key:"x"},onAction:async()=>{await he(t.id),n(),await(0,i.showToast)({style:i.Toast.Style.Success,title:"Prompt deleted"})}})]})]})})}function ut({prompt:t}){let n=O(t.category),s=`# ${t.icon||n.icon} ${t.name}

${t.description}

---

## Prompt Template

\`\`\`
${t.prompt}
\`\`\`

${t.variables.length>0?`
## Variables

${t.variables.map(c=>`- **{{${c.name}}}**: ${c.description}${c.default?` (default: ${c.default})`:""}`).join(`
`)}
`:""}

${t.systemPrompt?`
## System Prompt

\`\`\`
${t.systemPrompt}
\`\`\`
`:""}
`;return(0,r.jsx)(i.Detail,{markdown:s,metadata:(0,r.jsxs)(i.Detail.Metadata,{children:[(0,r.jsx)(i.Detail.Metadata.Label,{title:"Category",text:n.name}),t.model&&(0,r.jsx)(i.Detail.Metadata.Label,{title:"Model",text:t.model}),(0,r.jsx)(i.Detail.Metadata.Label,{title:"Usage",text:`${t.usageCount} times`}),(0,r.jsx)(i.Detail.Metadata.Label,{title:"Type",text:t.isBuiltIn?"Built-in":"Custom"})]}),actions:(0,r.jsxs)(i.ActionPanel,{children:[t.variables.length>0?(0,r.jsx)(i.Action.Push,{title:"Use Prompt",icon:i.Icon.Play,target:(0,r.jsx)(se,{prompt:t})}):(0,r.jsx)(i.Action.Push,{title:"Execute Prompt",icon:i.Icon.Play,target:(0,r.jsx)(re,{prompt:t,variables:{}})}),(0,r.jsx)(i.Action.CopyToClipboard,{title:"Copy Prompt",content:t.prompt})]})})}function se({prompt:t,mode:n="terminal"}){let{push:s}=(0,i.useNavigation)(),[c,a]=(0,C.useState)(),[e,u]=(0,C.useState)({});(0,C.useEffect)(()=>{Re().then(a)},[]);async function h(o){let d={};for(let[m,p]of Object.entries(o))Array.isArray(p)?d[m]=p[0]||"":d[m]=p;let y=t.id==="ralph-loop";for(let m of t.variables){let p=m.type==="path"&&!y;if(!d[m.name]?.trim()&&!m.default&&!p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:`Please provide ${m.name}`});return}}if(y){let m=d.projectPath;if(m&&!(0,j.existsSync)(m))try{(0,j.mkdirSync)(m,{recursive:!0}),await(0,i.showToast)({style:i.Toast.Style.Success,title:`Created directory: ${m}`})}catch(p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed to create directory",message:p instanceof Error?p.message:String(p)});return}}if(n==="terminal"){let m=await q();await W(t.id);let p=d.projectPath||m.projectPath;if(y){if(!p){await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Project path required for Ralph Loop"});return}let A=await(0,i.showToast)({style:i.Toast.Style.Animated,title:"Preparing Ralph Loop...",message:"Please wait for terminal to launch"});try{await De({projectPath:p,task:d.task||"",requirements:d.requirements||"",maxIterations:parseInt(d.maxIterations||"20",10)}),A.style=i.Toast.Style.Success,A.title="Ralph Loop launched",A.message=void 0,await(0,i.popToRoot)()}catch(v){A.style=i.Toast.Style.Failure,A.title="Failed to launch Ralph Loop",A.message=v instanceof Error?v.message:String(v)}return}let R=H(t.prompt,d);await V({projectPath:p,prompt:R}),await(0,i.popToRoot)()}else s((0,r.jsx)(re,{prompt:t,variables:d}))}let g=n==="terminal"?"Run in Terminal":"Execute",P=n==="terminal"?i.Icon.Terminal:i.Icon.Play;return(0,r.jsxs)(i.Form,{actions:(0,r.jsx)(i.ActionPanel,{children:(0,r.jsx)(i.Action.SubmitForm,{title:g,icon:P,onSubmit:h})}),children:[(0,r.jsx)(i.Form.Description,{title:"Prompt",text:t.name}),t.variables.map(o=>{if(t.id==="ralph-loop"&&o.name==="projectPath")return(0,r.jsx)(i.Form.TextField,{id:o.name,title:T(o.name),placeholder:"/path/to/project",info:o.description},o.name);if(o.type==="path")return(0,r.jsx)(i.Form.FilePicker,{id:o.name,title:T(o.name),info:o.description,allowMultipleSelection:!1,canChooseDirectories:o.allowDirectories!==!1,canChooseFiles:!o.allowDirectories},o.name);if((o.type==="code"||o.name.toLowerCase().includes("code"))&&o.allowRepositoryPath){let d=e[o.name]||"code";return(0,r.jsxs)(C.default.Fragment,{children:[(0,r.jsxs)(i.Form.Dropdown,{id:`${o.name}_mode`,title:`${T(o.name)} Input Type`,value:d,onChange:y=>{u(m=>({...m,[o.name]:y}))},info:"Choose to paste code or select a repository folder",children:[(0,r.jsx)(i.Form.Dropdown.Item,{value:"code",title:"Paste Code",icon:i.Icon.Code}),(0,r.jsx)(i.Form.Dropdown.Item,{value:"path",title:"Repository Path",icon:i.Icon.Folder})]}),d==="code"?(0,r.jsx)(i.Form.TextArea,{id:o.name,title:T(o.name),placeholder:o.description,defaultValue:c||o.default,info:o.description}):(0,r.jsx)(i.Form.FilePicker,{id:o.name,title:T(o.name),info:`Select a repository folder for: ${o.description}`,allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1})]},o.name)}return o.type==="code"||o.name.toLowerCase().includes("code")?(0,r.jsx)(i.Form.TextArea,{id:o.name,title:T(o.name),placeholder:o.description,defaultValue:c||o.default,info:o.description},o.name):o.type==="selection"?(0,r.jsx)(i.Form.TextArea,{id:o.name,title:T(o.name),placeholder:o.description,defaultValue:c||o.default,info:o.description},o.name):o.multiline?(0,r.jsx)(i.Form.TextArea,{id:o.name,title:T(o.name),placeholder:o.description,defaultValue:o.default,info:o.description,enableMarkdown:!1},o.name):(0,r.jsx)(i.Form.TextField,{id:o.name,title:T(o.name),placeholder:o.description,defaultValue:o.default,info:o.description},o.name)})]})}function re({prompt:t,variables:n}){let s=(0,i.getPreferenceValues)(),[c,a]=(0,C.useState)(!0),[e,u]=(0,C.useState)(null),[h,g]=(0,C.useState)(null),[P,o]=(0,C.useState)(),d=C.default.useRef(!1);if((0,C.useEffect)(()=>{if(d.current)return;d.current=!0;async function m(){try{if(!await Z()){g("Claude Code not installed"),a(!1);return}let p=await q();o(p.projectPath);let R=H(t.prompt,n),A=await Ce(R,{model:t.model||s.defaultModel,cwd:p.projectPath});await W(t.id),u(A)}catch(p){g(p instanceof Error?p.message:String(p))}finally{a(!1)}}m()},[]),c)return(0,r.jsx)(i.Detail,{isLoading:!0,markdown:`# Executing: ${t.name}

Processing your request...`});if(h)return(0,r.jsx)(i.Detail,{markdown:`# Error

${h}`,actions:(0,r.jsx)(i.ActionPanel,{children:(0,r.jsx)(i.Action.CopyToClipboard,{title:"Copy Error",content:h})})});let y=`# ${t.name}

${e?.result||"No response"}`;return(0,r.jsx)(i.Detail,{markdown:y,metadata:(0,r.jsxs)(i.Detail.Metadata,{children:[e?.total_cost_usd&&(0,r.jsx)(i.Detail.Metadata.Label,{title:"Cost",text:`$${e.total_cost_usd.toFixed(4)}`}),e?.usage&&(0,r.jsx)(i.Detail.Metadata.Label,{title:"Tokens",text:`${e.usage.input_tokens} in / ${e.usage.output_tokens} out`}),e?.session_id&&(0,r.jsx)(i.Detail.Metadata.Label,{title:"Session",text:e.session_id})]}),actions:(0,r.jsxs)(i.ActionPanel,{children:[(0,r.jsxs)(i.ActionPanel.Section,{title:"Response",children:[(0,r.jsx)(i.Action.CopyToClipboard,{title:"Copy Response",content:e?.result||"",shortcut:{modifiers:["cmd"],key:"c"}}),(0,r.jsx)(i.Action.Paste,{title:"Paste Response",content:e?.result||"",shortcut:{modifiers:["cmd","shift"],key:"v"}})]}),(0,r.jsx)(i.ActionPanel.Section,{title:"Session",children:(0,r.jsx)(i.Action,{title:"Continue in Terminal",icon:i.Icon.Terminal,shortcut:{modifiers:["cmd"],key:"t"},onAction:async()=>{await V({projectPath:P,sessionId:e?.session_id}),await(0,i.popToRoot)()}})})]})})}
