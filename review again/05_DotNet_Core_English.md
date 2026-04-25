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
