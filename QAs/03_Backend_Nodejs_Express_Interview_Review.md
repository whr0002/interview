---
title: "Node.js and Express Interview Review"
category: "backend"
tags: ["nodejs", "express", "api", "backend", "interview"]
language: "en"
source_type: "interview-notes"
---

# Node.js and Express Interview Review

## Knowledge Notes

## 1. What Are Node.js and Express?

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to run on the server side.
- **Express**: A lightweight and commonly used web framework for Node.js. It is used to quickly build web services and RESTful APIs.

Interview answer:

> Node.js provides the runtime environment, while Express provides the web development layer. Node.js handles lower-level capabilities such as the event loop, module system, file operations, and networking. Express builds on top of Node.js and provides common features such as routing, middleware, and request/response handling.

---

## 2. Core Node.js Concepts

### 2.1 Event Loop and Non-Blocking I/O

- The main thread that executes JavaScript in Node.js is single-threaded.
- When Node.js encounters I/O operations such as file reading, network requests, or database access, it does not block the main thread while waiting.
- These tasks are delegated to the underlying system or thread pool. When they finish, their callbacks are placed back into the queue and executed through the event loop.

Interview answer:

> Node.js supports high concurrency mainly because of its event-driven architecture and non-blocking I/O model. It does not create a large number of threads for requests. Instead, it coordinates asynchronous tasks through the event loop, which makes it very effective for I/O-intensive applications.

### 2.2 Suitable Use Cases for Node.js

Good use cases:

- API services
- Real-time communication
- Gateway services
- I/O-intensive applications

Less suitable use cases:

- Heavy CPU-intensive computation
- Long-running tasks that block the main thread

### 2.3 CommonJS and ES Modules

#### CommonJS

```js
const express = require('express');
module.exports = app;
```

#### ES Modules

```js
import express from 'express';
export default app;
```

Common differences:

- CommonJS uses `require` and `module.exports`.
- ES Modules use `import` and `export`.
- ES Modules are the official standard module system.
- Both are common in modern Node.js projects, but new projects are more likely to use ESM.

### 2.4 Asynchronous Programming Styles

- Callback functions
- Promise
- async/await

Interview tip:

> In modern projects, I mainly use `async/await` to handle asynchronous logic because it improves readability and makes error handling more consistent. Under the hood, it is still based on Promises.

---

## 3. Core Express Concepts

### 3.1 Basic Express Usage

```js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.json({ message: 'ok' });
});

app.listen(3000, () => {
  console.log('server running');
});
```

You should be able to explain:

- `express()`: creates an application instance
- `app.use()`: registers middleware
- `app.get()`: defines a GET route
- `req`: the request object
- `res`: the response object
- `app.listen()`: starts the server

### 3.2 What Is Middleware?

Middleware is essentially a function:

```js
(req, res, next) => {}
```

It can be used to:

- Process requests
- Modify `req` or `res`
- Run validation, authentication, or logging
- Call `next()` to pass control to the next middleware
- Send a response directly and end the request

Common middleware types:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware such as `express.json()` and `express.urlencoded()`

Interview answer:

> The core of Express is its middleware mechanism. A request passes through multiple middleware functions in order. Each layer handles a specific responsibility, such as logging, authentication, parameter validation, or error handling. This makes the code clearer and easier to reuse.

### 3.3 Purpose of `next()`

- It passes control to the next middleware or route handler.
- If neither `next()` is called nor a response is sent, the request may hang indefinitely.

### 3.4 Routes and Parameters

```js
app.get('/users/:id', (req, res) => {
  res.json({
    params: req.params,
    query: req.query
  });
});
```

Common parameter sources:

- `req.params`: route parameters
- `req.query`: query string parameters
- `req.body`: request body data

Examples:

- `/users/1` -> `req.params.id`
- `/users?page=1` -> `req.query.page`
- POST JSON data -> `req.body`

### 3.5 Difference Between `app.use()` and `app.get()` / `app.post()`

- `app.use()` is usually used to mount middleware and can match multiple HTTP methods by default.
- `app.get()` / `app.post()` are used to define routes for specific HTTP methods.

### 3.6 Error-Handling Middleware

```js
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || 'server error'
  });
});
```

Key points:

- Error-handling middleware must have four parameters.
- Express identifies it as error-handling middleware based on the number of parameters.
- In asynchronous code, you usually need `next(err)` or a shared async handler wrapper.

---

## 4. RESTful API Basics

### 4.1 Common HTTP Methods

- `GET`: retrieve resources
- `POST`: create resources
- `PUT`: fully update resources
- `PATCH`: partially update resources
- `DELETE`: delete resources

### 4.2 Common Status Codes

- `200 OK`
- `201 Created`
- `204 No Content`
- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`
- `500 Internal Server Error`

Interview answer:

> When designing APIs, I try to follow RESTful conventions. I use nouns to represent resources, HTTP methods to represent actions, and appropriate status codes in responses. This makes the API easier for front-end and back-end teams to collaborate on and maintain.

---

## 5. How to Explain Express Project Structure

Common folder structure:

- `routes/`: defines routes
- `controllers/`: handles requests and responses
- `services/`: contains business logic
- `models/`: contains data models
- `middlewares/`: contains middleware
- `utils/`: contains utility functions
- `app.js` / `server.js`: entry file

Interview answer:

> I usually use a layered structure. The route layer handles URL mapping, the controller layer receives requests and returns responses, the service layer handles business logic, and the model layer handles data access. This keeps responsibilities clear and makes the project easier to test and maintain.

---

## 6. Common Authentication Topics

### 6.1 Difference Between Session and JWT

#### Session

- Session information is stored on the server side.
- The client usually only stores a session id.
- It is suitable for traditional server-rendered applications.

#### JWT

- User information or claims are packaged inside a token.
- The server does not necessarily store session state.
- It is suitable for separated front-end/back-end systems and mobile applications.

Interview answer:

> For front-end/back-end separated applications, I usually consider JWT first because it fits stateless authentication better. For traditional web applications, Session is also common, especially when the server needs to manage user sessions centrally.

### 6.2 Pros and Cons of JWT

Advantages:

- Suitable for distributed systems
- Reduces server-side session storage pressure
- Convenient for separated front-end/back-end applications

Disadvantages:

- Once issued, it is difficult to invalidate before expiration.
- A leaked token creates security risk.
- It usually needs to be combined with refresh tokens or a blacklist mechanism.

---

## 7. Security Topics

You should be familiar with at least these concepts:

- SQL injection
- XSS
- CSRF
- Password hashing, such as `bcrypt`
- Managing sensitive information through environment variables
- Using `helmet` to add common security headers
- API rate limiting to prevent abuse

Interview answer:

> For security, I pay attention to input validation, authentication, password hashing, sensitive configuration isolation, and protection against common attacks such as XSS, CSRF, and SQL injection.

---

## 8. How to Discuss Performance Optimization

Common optimization ideas:

- Avoid blocking the event loop
- Use caching, such as Redis
- Use gzip compression
- Use database connection pooling
- Add logging and monitoring
- Use Nginx for reverse proxy and load balancing
- Use PM2 or cluster to improve resource utilization
- Move CPU-intensive tasks to independent services or Worker Threads

Interview answer:

> Node.js is well suited for high-concurrency I/O scenarios. If I encounter CPU-intensive tasks, I would consider splitting them into independent services, consuming them through a message queue, or processing them with Worker Threads to avoid blocking the main thread.

---

## 9. Express Example You Should Be Able to Write in an Interview

```js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id, name: 'Tom' });
});

app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: 'created',
    data: user
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || 'server error'
  });
});

app.listen(3000, () => {
  console.log('server started on 3000');
});
```

You should be able to explain:

- JSON parsing middleware
- Route parameters
- Request body access
- Status code usage
- Error-handling middleware

---

## 10. High-Frequency Interview Questions

### 10.1 Why Is Node.js Fast?

**Reference answer:**

> Node.js is fast mainly because of its event-driven architecture and non-blocking I/O model. When handling many I/O requests, it does not need to create one thread for each request. Instead, it coordinates tasks through the event loop, which reduces thread-switching overhead and provides strong concurrency capability.

### 10.2 Node.js Is Single-Threaded. How Can It Support High Concurrency?

**Reference answer:**

> The JavaScript execution part of Node.js is single-threaded, but many I/O operations are not completed synchronously on the main thread. They are delegated to the underlying system or thread pool. The main thread mainly receives the results and executes callbacks, so Node.js can support high concurrency on top of a single-threaded JavaScript model.

### 10.3 What Does `next()` Do in Express?

**Reference answer:**

> `next()` passes the current request to the next middleware or route handler. If `next()` is not called and no response is sent, the request may remain stuck.

### 10.4 What Is the Execution Order of Middleware?

**Reference answer:**

> Express middleware usually executes in the order it is registered. After a request enters the application, it passes through the matching middleware functions one by one. Therefore, middleware order is very important. For example, logging, authentication, and parameter parsing are usually placed near the beginning.

### 10.5 What Is the Difference Between `req.params`, `req.query`, and `req.body`?

**Reference answer:**

> `req.params` is used to get route parameters, `req.query` is used to get URL query parameters, and `req.body` is used to get data from the request body, such as JSON submitted through POST. They correspond to different data sources.

### 10.6 Difference Between GET and POST

**Reference answer:**

> GET is usually used to query data, and parameters are usually placed in the URL. POST is usually used to submit data, and the data is usually placed in the request body. GET emphasizes idempotent querying, while POST is more commonly used for creation or submission operations.

### 10.7 Difference Between PUT and PATCH

**Reference answer:**

> PUT usually represents a full update of a resource, while PATCH represents a partial update. In real projects, if only one field needs to be changed, PATCH is usually more appropriate.

### 10.8 What Is RESTful?

**Reference answer:**

> RESTful is an API design style. Its core idea is to model data as resources, identify resources through consistent URLs, and use HTTP methods to represent operations on those resources. For example, GET retrieves data, POST creates data, PUT updates data, and DELETE removes data.

### 10.9 Why Do We Use Layered Project Structure?

**Reference answer:**

> Layering mainly reduces coupling and separates responsibilities between routing, business logic, and data access. This makes the code clearer and easier to test, extend, and maintain.

### 10.10 How Do You Choose Between Session and JWT?

**Reference answer:**

> For traditional server-rendered applications, Session is common. For front-end/back-end separated systems, mobile applications, or distributed systems, JWT is more common. The final choice depends on the system architecture, scalability requirements, and security strategy.

### 10.11 What Are the Disadvantages of JWT?

**Reference answer:**

> The main issue with JWT is that it is usually difficult to invalidate immediately after it has been issued. This makes requirements such as forced logout or immediate permission change more complex. In practice, it is often combined with a blacklist mechanism, or with short-lived access tokens plus refresh tokens.

### 10.12 How Do You Handle Global Errors in Express?

**Reference answer:**

> I usually register a global error-handling middleware at the end of the application to handle exception responses centrally. For asynchronous logic, I use `try/catch` with `next(err)`, or wrap route handlers with an asyncHandler to capture errors consistently.

### 10.13 How Do You Understand Cross-Origin Requests?

**Reference answer:**

> Cross-origin issues come from the browser's same-origin policy. If the front end and back end use different domains, ports, or protocols, cross-origin restrictions may occur. The server usually solves this by configuring CORS to allow access from specified origins.

### 10.14 How Do You Validate Request Parameters?

**Reference answer:**

> Parameter validation is usually placed in the middleware layer. The request parameters are validated before entering the business logic. This prevents invalid data from entering the system and makes it easier to return consistent error messages. Common tools include `joi` and `express-validator`.

### 10.15 How Do You Improve the Stability of a Node.js Service?

**Reference answer:**

> I would improve stability through unified error handling, logging and monitoring, rate limiting, process management, health checks, caching, reasonable timeout settings, and avoiding event loop blocking. For critical services, I would also use load balancing and multi-instance deployment.

---

## 11. Quick Memorization Version

> Node.js is a JavaScript runtime based on event-driven architecture and non-blocking I/O. It is suitable for high-concurrency I/O scenarios. Express is a commonly used web framework on top of Node.js, and its core concepts are routing and middleware. In real projects, I usually split the application into layers such as routes, controllers, and services, and combine JWT, parameter validation, centralized error handling, logging, and security middleware to build API services.

---

## 12. Interview Delivery Tips

- Start with the definition, then explain the principle, then connect it to project practice.
- Do not only memorize concepts. Try to connect your answers to real project experience.
- Use keywords such as event loop, non-blocking I/O, middleware, layering, authentication, error handling, and performance optimization.
- If the interviewer asks follow-up questions, give an example of an API or project you have worked on.

A natural way to express it:

> In my projects, I usually use Express to build API services. First, middleware handles JSON parsing, logging, and authentication, and then the request goes into the controller and service layers. The service exposes RESTful APIs and includes centralized error handling, parameter validation, and token-based authentication. If the service has high traffic, I would also consider caching, PM2 multi-process deployment, and request tracing or monitoring.

## Flashcards

### General
**Q:** What Are Node.js and Express?
**A:** - **Node.js**: A JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to run on the server side.
- **Express**: A lightweight and commonly used web framework for Node.js. It is used to quickly build web services and RESTful APIs.

Interview answer:
Node.js provides the runtime environment, while Express provides the web development layer. Node.js handles lower-level capabilities such as the event loop, module system, file operations, and networking. Express builds on top of Node.js and provides common features such as routing, middleware, and request/response handling.

### Core Express Concepts
**Q:** What Is Middleware?
**A:** Middleware is essentially a function:

```js
(req, res, next) => {}
```

It can be used to:

- Process requests
- Modify `req` or `res`
- Run validation, authentication, or logging
- Call `next()` to pass control to the next middleware
- Send a response directly and end the request

Common middleware types:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware such as `express.json()` and `express.urlencoded()`

Interview answer:
The core of Express is its middleware mechanism. A request passes through multiple middleware functions in order. Each layer handles a specific responsibility, such as logging, authentication, parameter validation, or error handling. This makes the code clearer and easier to reuse.

**Q:** Difference Between `app.use()` and `app.get()` / `app.post()`
**A:** - `app.use()` is usually used to mount middleware and can match multiple HTTP methods by default.
- `app.get()` / `app.post()` are used to define routes for specific HTTP methods.

### Common Status Codes
**Q:** How to Explain Express Project Structure
**A:** Common folder structure:

- `routes/`: defines routes
- `controllers/`: handles requests and responses
- `services/`: contains business logic
- `models/`: contains data models
- `middlewares/`: contains middleware
- `utils/`: contains utility functions
- `app.js` / `server.js`: entry file

Interview answer:
I usually use a layered structure. The route layer handles URL mapping, the controller layer receives requests and returns responses, the service layer handles business logic, and the model layer handles data access. This keeps responsibilities clear and makes the project easier to test and maintain.

### Common Authentication Topics
**Q:** Difference Between Session and JWT
**A:** #### Session

- Session information is stored on the server side.
- The client usually only stores a session id.
- It is suitable for traditional server-rendered applications.

#### JWT

- User information or claims are packaged inside a token.
- The server does not necessarily store session state.
- It is suitable for separated front-end/back-end systems and mobile applications.

Interview answer:
For front-end/back-end separated applications, I usually consider JWT first because it fits stateless authentication better. For traditional web applications, Session is also common, especially when the server needs to manage user sessions centrally.

### Security Topics
**Q:** How to Discuss Performance Optimization
**A:** Common optimization ideas:

- Avoid blocking the event loop
- Use caching, such as Redis
- Use gzip compression
- Use database connection pooling
- Add logging and monitoring
- Use Nginx for reverse proxy and load balancing
- Use PM2 or cluster to improve resource utilization
- Move CPU-intensive tasks to independent services or Worker Threads

Interview answer:
Node.js is well suited for high-concurrency I/O scenarios. If I encounter CPU-intensive tasks, I would consider splitting them into independent services, consuming them through a message queue, or processing them with Worker Threads to avoid blocking the main thread.

### High-Frequency Interview Questions
**Q:** Why Is Node.js Fast?
**A:** **Reference answer:**
Node.js is fast mainly because of its event-driven architecture and non-blocking I/O model. When handling many I/O requests, it does not need to create one thread for each request. Instead, it coordinates tasks through the event loop, which reduces thread-switching overhead and provides strong concurrency capability.

**Q:** Node.js Is Single-Threaded. How Can It Support High Concurrency?
**A:** **Reference answer:**
The JavaScript execution part of Node.js is single-threaded, but many I/O operations are not completed synchronously on the main thread. They are delegated to the underlying system or thread pool. The main thread mainly receives the results and executes callbacks, so Node.js can support high concurrency on top of a single-threaded JavaScript model.

**Q:** What Does `next()` Do in Express?
**A:** **Reference answer:**
`next()` passes the current request to the next middleware or route handler. If `next()` is not called and no response is sent, the request may remain stuck.

**Q:** What Is the Execution Order of Middleware?
**A:** **Reference answer:**
Express middleware usually executes in the order it is registered. After a request enters the application, it passes through the matching middleware functions one by one. Therefore, middleware order is very important. For example, logging, authentication, and parameter parsing are usually placed near the beginning.

**Q:** What Is the Difference Between `req.params`, `req.query`, and `req.body`?
**A:** **Reference answer:**
`req.params` is used to get route parameters, `req.query` is used to get URL query parameters, and `req.body` is used to get data from the request body, such as JSON submitted through POST. They correspond to different data sources.

**Q:** Difference Between GET and POST
**A:** **Reference answer:**
GET is usually used to query data, and parameters are usually placed in the URL. POST is usually used to submit data, and the data is usually placed in the request body. GET emphasizes idempotent querying, while POST is more commonly used for creation or submission operations.

**Q:** Difference Between PUT and PATCH
**A:** **Reference answer:**
PUT usually represents a full update of a resource, while PATCH represents a partial update. In real projects, if only one field needs to be changed, PATCH is usually more appropriate.

**Q:** What Is RESTful?
**A:** **Reference answer:**
RESTful is an API design style. Its core idea is to model data as resources, identify resources through consistent URLs, and use HTTP methods to represent operations on those resources. For example, GET retrieves data, POST creates data, PUT updates data, and DELETE removes data.

**Q:** Why Do We Use Layered Project Structure?
**A:** **Reference answer:**
Layering mainly reduces coupling and separates responsibilities between routing, business logic, and data access. This makes the code clearer and easier to test, extend, and maintain.

**Q:** How Do You Choose Between Session and JWT?
**A:** **Reference answer:**
For traditional server-rendered applications, Session is common. For front-end/back-end separated systems, mobile applications, or distributed systems, JWT is more common. The final choice depends on the system architecture, scalability requirements, and security strategy.

**Q:** What Are the Disadvantages of JWT?
**A:** **Reference answer:**
The main issue with JWT is that it is usually difficult to invalidate immediately after it has been issued. This makes requirements such as forced logout or immediate permission change more complex. In practice, it is often combined with a blacklist mechanism, or with short-lived access tokens plus refresh tokens.

**Q:** How Do You Handle Global Errors in Express?
**A:** **Reference answer:**
I usually register a global error-handling middleware at the end of the application to handle exception responses centrally. For asynchronous logic, I use `try/catch` with `next(err)`, or wrap route handlers with an asyncHandler to capture errors consistently.

**Q:** How Do You Understand Cross-Origin Requests?
**A:** **Reference answer:**
Cross-origin issues come from the browser's same-origin policy. If the front end and back end use different domains, ports, or protocols, cross-origin restrictions may occur. The server usually solves this by configuring CORS to allow access from specified origins.

**Q:** How Do You Validate Request Parameters?
**A:** **Reference answer:**
Parameter validation is usually placed in the middleware layer. The request parameters are validated before entering the business logic. This prevents invalid data from entering the system and makes it easier to return consistent error messages. Common tools include `joi` and `express-validator`.

**Q:** How Do You Improve the Stability of a Node.js Service?
**A:** **Reference answer:**
I would improve stability through unified error handling, logging and monitoring, rate limiting, process management, health checks, caching, reasonable timeout settings, and avoiding event loop blocking. For critical services, I would also use load balancing and multi-instance deployment.
