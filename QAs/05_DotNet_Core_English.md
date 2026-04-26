## 1. What is .NET Core?

- `.NET Core` is Microsoft's cross-platform, open-source, high-performance implementation of .NET.
- It includes the runtime, base class libraries, and the infrastructure needed to build modern applications.
- It is commonly used for Web APIs, microservices, console apps, and backend services.

In one sentence:

> .NET Core is the modern .NET platform, emphasizing cross-platform support, high performance, and cloud-native development.

---

## 2. Difference Between .NET Framework and .NET Core

- `.NET Framework` mainly runs on Windows.
- `.NET Core` supports Windows, Linux, and macOS.
- `.NET Core` is better suited for Docker, Kubernetes, and microservices.
- `.NET Core` is open source and generally has better performance.
- Later, the ecosystem was unified into `.NET 5+`.

In one sentence:

> Older projects often use .NET Framework, while new projects usually prioritize modern .NET.

---

## 3. Why Is .NET Core Popular?

- Cross-platform
- Open source
- High performance
- Better for containerized deployment
- Better for microservice architecture
- Built-in dependency injection, configuration, and logging

---

## 4. What Are CoreCLR, JIT, and GC?

**CoreCLR**

- The core runtime of `.NET Core`

**JIT**

- Just-In-Time compiler
- Compiles IL into machine code for execution

**GC**

- Garbage Collector
- Responsible for managed memory cleanup

In one sentence:

> CoreCLR runs the program, JIT compiles it for execution, and GC handles memory reclamation.

---

## 5. What Are Managed Code and the Managed Runtime?

- Managed code runs inside the `.NET` runtime.
- The runtime is responsible for memory management, exception handling, type safety, and garbage collection.
- This is also one of the key reasons .NET development is so productive.

---

## 6. What Is ASP.NET Core?

- A web development framework based on `.NET Core`
- It can be used to build:
  - Web APIs
  - MVC websites
  - Razor Pages
  - Microservices

Features:

- High performance
- Cross-platform
- Clear middleware pipeline
- Built-in DI, logging, and configuration

---

## 7. What Is the ASP.NET Core Request Pipeline?

- After a request enters the application, it passes through multiple **Middleware** components in order.
- Each middleware can:
  - Process the request
  - Call the next middleware
  - Continue processing when the response comes back

In one sentence:

> ASP.NET Core is based on a middleware pipeline, and requests flow through it in registration order.

---

## 8. What Are Common Middleware Components?

- Exception handling
- Routing
- Static files
- CORS
- Authentication
- Authorization
- Logging

High-frequency interview point:

> Middleware order is very important, especially for routing, authentication, and authorization.

---

## 9. What Is Dependency Injection (DI)?

- Hand over object creation and dependency management to a container.
- Reduce coupling between modules.
- Improve testability and maintainability.

ASP.NET Core has a built-in DI container.

---

## 10. The Three DI Lifetimes

- `Transient`: a new instance is created every time it is resolved
- `Scoped`: one shared instance per request
- `Singleton`: only one instance for the entire application lifetime

Common scenarios:

- `Transient`: lightweight stateless services
- `Scoped`: request-level services, `DbContext`
- `Singleton`: globally shared configuration or thread-safe services

---

## 11. Why Is `DbContext` Usually Registered as `Scoped`?

- `DbContext` represents a data access session within a request scope.
- It is not suitable for global sharing.
- If it is registered as `Singleton`, thread-safety issues and state pollution can easily occur.

In one sentence:

> `DbContext` usually follows the request lifetime, so it is typically registered as `Scoped`.

---

## 12. Why Can't a Singleton Directly Depend on a Scoped Service?

- The `Singleton` lifetime is longer than `Scoped`.
- This can cause scope mismatch.
- It may end up holding a disposed instance.

In one sentence:

> A long-lived object should not directly depend on a short-lived object.

---

## 13. What Are the Configuration Sources in ASP.NET Core?

Common sources:

- `appsettings.json`
- `appsettings.Development.json`
- Environment variables
- Command-line arguments
- Secret Manager

In one sentence:

> ASP.NET Core configuration is layered, and later-loaded sources usually override earlier ones.

---

## 14. How Is Logging Done in ASP.NET Core?

Built-in interface:

- `ILogger<T>`

Common levels:

- `Trace`
- `Debug`
- `Information`
- `Warning`
- `Error`
- `Critical`

Common ecosystem tools:

- `Serilog`
- `Seq`
- `ELK`
- `Application Insights`

---

## 15. What Are `IHost` and the Generic Host?

- `.NET Core` uses the Host model to manage the application lifecycle.
- The Generic Host unifies:
  - Configuration
  - Logging
  - Dependency Injection
  - Background services

Common scenarios:

- Web applications
- Worker Services
- Background scheduled jobs

---

## 16. What Does `Program.cs` Do in .NET Core?

- Configures the application entry point
- Registers services in the DI container
- Configures middleware
- Starts the application

In one sentence:

> `Program.cs` is the startup and composition center of the application.

---

## 17. Common Web API Return Types

- `IActionResult`
- `ActionResult<T>`

Difference:

- `IActionResult` is suitable when multiple kinds of results may be returned.
- `ActionResult<T>` is suitable when returning a strongly typed result but still possibly returning error status codes.

---

## 18. What Is a RESTful API?

Core idea:

- URLs represent resources
- HTTP methods represent operations

Common methods:

- `GET`: query
- `POST`: create
- `PUT`: update
- `DELETE`: delete

---

## 19. Difference Between Authentication and Authorization

- **Authentication**: confirms who the user is
- **Authorization**: confirms what the user is allowed to do

---

## 20. What Is JWT?

- A common stateless authentication solution
- Very suitable for frontend-backend separation and distributed systems

Structure:

- `Header`
- `Payload`
- `Signature`

Notes:

- Do not store sensitive plaintext data in the `Payload`.
- Set a reasonable expiration time.
- Validate signatures properly.

---

## 21. Common Authentication Methods in ASP.NET Core

- Cookie authentication
- JWT Bearer
- OAuth2
- OpenID Connect

A very common interview question:

> How JWT is used in frontend-backend separated projects, along with its pros and cons.

---

## 22. What Is EF Core?

- A commonly used ORM in the `.NET Core` era
- Uses LINQ to operate on the database
- Supports both Code First and Database First

Core objects:

- `DbContext`
- `DbSet<TEntity>`

---

## 23. What Is `DbContext`?

- The core context object for database access
- Responsible for connection management, change tracking, querying, and saving

In one sentence:

> `DbContext` can be understood as a database session.

---

## 24. Common EF Core Capabilities

- LINQ queries
- Change tracking
- Relationship mapping
- Transaction support
- Migrations

---

## 25. What Is a Migration?

- EF Core's database migration mechanism
- Used to manage schema changes

In one sentence:

> Migrations keep the code model and database schema evolving together.

---

## 26. How Do You Optimize EF Core Queries?

- `AsNoTracking()`: improve performance for read-only queries
- `Select()`: only fetch needed fields
- `Include()`: load related data
- Pagination: `Skip()` / `Take()`
- Avoid N+1 queries
- Add indexes to high-frequency fields

---

## 27. What Is the N+1 Query Problem?

- First query the main data
- Then query related data once for each row of main data
- This leads to too many SQL executions

In one sentence:

> The essence of the N+1 problem is uncontrolled query count, usually optimized with `Include` or projection queries.

---

## 28. What Is `AsNoTracking()` Used For?

- Disables entity change tracking
- Reduces memory usage
- Improves read-only query performance

---

## 29. How Is Caching Done in ASP.NET Core?

Common approaches:

- Local cache: `MemoryCache`
- Distributed cache: `Redis`

Benefits:

- Reduce database pressure
- Improve API response speed

Pay attention to:

- Cache consistency
- Cache penetration
- Cache breakdown
- Cache avalanche

---

## 30. What Is Garbage Collection (GC)?

- .NET's automatic memory management mechanism
- Responsible for reclaiming managed objects that are no longer in use

Generations:

- `Gen 0`
- `Gen 1`
- `Gen 2`

Additional point:

- Large Object Heap `LOH`

---

## 31. Difference Between `Dispose` and GC

- `GC`: manages managed memory, but the execution time is not deterministic
- `Dispose`: used to proactively release unmanaged resources

Common resources:

- Database connections
- File handles
- Network connections

In one sentence:

> GC handles memory, while `Dispose` handles external resources.

---

## 32. What Is `using` For?

- Ensures `Dispose` is called automatically after the object is used
- Commonly used for connections, file streams, network streams, and similar scenarios

---

## 33. How Do You Optimize ASP.NET Core Performance?

- Use asynchronous I/O
- Reduce unnecessary object allocations
- Use caching appropriately
- Optimize database queries
- Return only necessary fields
- Add pagination to APIs
- Use connection pooling
- Avoid repeated serialization and expensive reflection on hot paths

---

## 34. What Is Kestrel?

- The built-in cross-platform web server in ASP.NET Core
- Usually used to host the application service
- In production it is often used together with Nginx or IIS

In one sentence:

> Kestrel is the default web server for ASP.NET Core.

---

## 35. Why Is ASP.NET Core Suitable for Microservices?

- Lightweight
- High performance
- Cross-platform
- Easy to containerize
- Complete configuration, logging, and DI ecosystem
- Very suitable for Docker / Kubernetes deployment

---

## 36. Common Deployment Combination

- The application runs on Kestrel
- Nginx or IIS in front acts as a reverse proxy
- Deploy to Linux, Windows, Docker containers, or cloud platforms

In one sentence:

> In production, ASP.NET Core is usually not run alone, but together with a reverse proxy and deployment platform.

---

## 37. Interview Summary Template

You can answer like this:

> .NET Core is the modern .NET platform. Its core advantages are cross-platform support, open source, and high performance. In interviews, questions usually focus on runtime mechanisms, ASP.NET Core middleware, dependency injection, configuration and logging, EF Core data access, JWT authentication, caching, and performance optimization. In real projects, I combine request lifecycles, data access patterns, and deployment environments to design and optimize solutions.

---

## Final 1-Minute Memorization

At the end, just remember these keywords:

- `.NET Core`: cross-platform, open source, high performance
- `CoreCLR` / `JIT` / `GC`
- ASP.NET Core middleware pipeline
- DI: `Transient` / `Scoped` / `Singleton`
- `DbContext` uses `Scoped`
- Configuration: `appsettings.json` + environment variables
- Logging: `ILogger<T>`
- EF Core: `DbContext`, `DbSet`, `Migration`
- Query optimization: `AsNoTracking()`, `Include()`, pagination, indexes
- JWT
- Caching: `MemoryCache` / `Redis`
- Kestrel
- Docker / microservices / reverse proxy
