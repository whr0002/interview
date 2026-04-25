### 10.1 Why Is Node.js Fast?

**Reference answer:**

> Node.js is fast mainly because of its event-driven architecture and non-blocking I/O model. When handling many I/O requests, it does not need to create one thread for each request. Instead, it coordinates tasks through the event loop, which reduces thread-switching overhead and provides strong concurrency capability.

### 10.2 Node.js Is Single-Threaded. How Can It Support High Concurrency?

**Reference answer:**

> The JavaScript execution part of Node.js is single-threaded, but many I/O operations are not completed synchronously on the main thread. They are delegated to the underlying system or thread pool. The main thread mainly receives the results and executes callbacks, so Node.js can support high concurrency on top of a single-threaded JavaScript model.

### 10.10 How Do You Choose Between Session and JWT?

**Reference answer:**

> For traditional server-rendered applications, Session is common. For front-end/back-end separated systems, mobile applications, or distributed systems, JWT is more common. The final choice depends on the system architecture, scalability requirements, and security strategy.

### 10.11 What Are the Disadvantages of JWT?

**Reference answer:**

> The main issue with JWT is that it is usually difficult to invalidate immediately after it has been issued. This makes requirements such as forced logout or immediate permission change more complex. In practice, it is often combined with a blacklist mechanism, or with short-lived access tokens plus refresh tokens.

### 10.14 How Do You Validate Request Parameters?

**Reference answer:**

> Parameter validation is usually placed in the middleware layer. The request parameters are validated before entering the business logic. This prevents invalid data from entering the system and makes it easier to return consistent error messages. Common tools include `joi` and `express-validator`.

### 10.15 How Do You Improve the Stability of a Node.js Service?

**Reference answer:**

> I would improve stability through unified error handling, logging and monitoring, rate limiting, process management, health checks, caching, reasonable timeout settings, and avoiding event loop blocking. For critical services, I would also use load balancing and multi-instance deployment.
