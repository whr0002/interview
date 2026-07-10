---
title: "Node.js GeeksforGeeks Interview Q&A"
category: "backend"
tags: ["nodejs", "javascript", "backend", "interview"]
language: "en"
source_type: "interview-notes"
---

# Node.js GeeksforGeeks Interview Q&A

## Knowledge Notes

These flashcards are based on the GeeksforGeeks article "Node.js Interview Questions and Answers", updated on 30 Mar 2026:
https://www.geeksforgeeks.org/node-js/node-interview-questions-and-answers/

The answers below are rewritten as concise spoken interview answers, not copied from the article.

## Flashcards

### Freshers
**Q:** How does Node.js work?
**A:** Node.js runs JavaScript on the server using the V8 engine. It uses an event loop and non-blocking I/O, so slow tasks like file or network operations do not block the main thread.

**Q:** What is NPM?
**A:** NPM is the Node Package Manager. It helps install, update, remove, and manage JavaScript packages and project dependencies through `package.json`.

**Q:** Why is Node.js single-threaded?
**A:** Node.js keeps JavaScript execution single-threaded to make request handling lightweight. It still handles many concurrent I/O tasks through asynchronous APIs, the event loop, and libuv.

**Q:** If Node.js is single-threaded, how does it handle concurrency?
**A:** Node.js handles concurrency by starting I/O work asynchronously and continuing other work while it waits. When the I/O finishes, callbacks or promises are queued back to the event loop.

**Q:** Why is Node.js preferred over some backend technologies?
**A:** Node.js is strong for I/O-heavy and real-time applications. It is fast, uses JavaScript across frontend and backend, and has a large package ecosystem through NPM.

**Q:** What is the difference between synchronous and asynchronous functions?
**A:** Synchronous functions block until they finish. Asynchronous functions start work and return control quickly, then deliver the result later through callbacks, promises, or `async/await`.

**Q:** What is a module in Node.js?
**A:** A module is a reusable piece of code. Node.js has built-in modules like `fs`, `http`, and `path`, and projects can also define custom modules or install packages.

**Q:** What is the purpose of `require` in Node.js?
**A:** `require` imports CommonJS modules into a file. For example, `const fs = require("fs")` loads the file system module.

**Q:** What is the V8 engine in Node.js?
**A:** V8 is Google's JavaScript engine. Node.js uses it to compile and execute JavaScript outside the browser.

**Q:** How do you handle environment variables in Node.js?
**A:** Environment variables are read through `process.env`. In local development, projects often use `dotenv` to load values from a `.env` file.

**Q:** What is control flow in Node.js?
**A:** Control flow means managing the order of asynchronous work. It helps make sure dependent operations run in the right sequence even when tasks finish at different times.

**Q:** What is the event loop in Node.js?
**A:** The event loop is the mechanism that lets Node.js run callbacks for completed asynchronous tasks. It allows one JavaScript thread to coordinate many I/O operations.

**Q:** What is the usual order of asynchronous control flow?
**A:** Start the operation, let Node.js handle waiting work in the background, queue the callback or promise result, then continue execution when the event loop picks it up.

**Q:** What are the main disadvantages of Node.js?
**A:** Node.js is not ideal for CPU-heavy work on the main thread. It can also suffer from dependency risk, fast ecosystem changes, and callback or async complexity if code is not organized well.

**Q:** What is REPL in Node.js?
**A:** REPL means Read, Evaluate, Print, Loop. It is an interactive Node.js shell for quickly running and testing JavaScript expressions.

**Q:** How do you import a module in Node.js?
**A:** In CommonJS, use `require`. In ES modules, use `import`. Newer projects often use ES modules, but many Node.js projects still use CommonJS.

**Q:** What is the difference between Node.js and Angular?
**A:** Node.js is a server-side JavaScript runtime. Angular is a frontend framework for building browser-based user interfaces, usually with TypeScript.

**Q:** What is `package.json` in Node.js?
**A:** `package.json` stores project metadata, scripts, dependencies, and configuration. It is the main manifest file for a Node.js project.

**Q:** How do you create a simple HTTP server in Node.js?
**A:** Use the built-in `http` module, create a server with `http.createServer`, write a response, and call `server.listen(port)`.

**Q:** What are commonly used libraries in Node.js?
**A:** Common libraries include Express for web APIs and Mongoose for working with MongoDB. Real projects also often use libraries for validation, logging, auth, and testing.

**Q:** What are promises in Node.js?
**A:** A promise represents the future result of an asynchronous operation. It can be resolved, rejected, chained with `.then`, or handled with `async/await`.

**Q:** How do you install, update, and delete a dependency?
**A:** Use `npm install package`, `npm update package`, and `npm uninstall package`. These commands update dependency information in the project files.

**Q:** Which command or syntax is used to import external libraries?
**A:** After installing a package with NPM, CommonJS code imports it with `require("package")`, while ES module code uses `import`.

### Intermediate
**Q:** What is event-driven programming in Node.js?
**A:** Event-driven programming means code reacts to events such as requests, file completion, or messages. Event handlers run when those events are emitted.

**Q:** What is a Buffer in Node.js?
**A:** A Buffer is used to work with raw binary data. It is useful for files, network streams, and data that is not plain JavaScript text.

**Q:** What are streams in Node.js?
**A:** Streams process data in chunks instead of loading everything into memory. They are useful for large files, HTTP bodies, compression, and real-time data flow.

**Q:** What is the crypto module in Node.js?
**A:** The `crypto` module provides cryptographic features such as hashing, encryption, decryption, and secure random values.

**Q:** What is callback hell?
**A:** Callback hell happens when many callbacks are nested inside each other. It makes code hard to read and can be improved with promises or `async/await`.

**Q:** What is the timers module in Node.js?
**A:** Timers schedule code to run later or repeatedly. Common timer functions include `setTimeout`, `setInterval`, and `setImmediate`.

**Q:** What is the difference between `setImmediate` and `process.nextTick`?
**A:** `process.nextTick` runs before the event loop continues to the next phase, so overusing it can block I/O. `setImmediate` runs in a later event loop phase, usually after I/O callbacks.

**Q:** What are common HTTP request methods?
**A:** Common methods are `GET` for reading, `POST` for creating, `PUT` for full updates, `PATCH` for partial updates, and `DELETE` for removing resources.

**Q:** What is the difference between `spawn()` and `fork()`?
**A:** `spawn()` runs an external command or process. `fork()` starts another Node.js process and includes an IPC channel for communication.

**Q:** What is Passport in Node.js?
**A:** Passport is authentication middleware. It supports many login strategies, such as local login, OAuth, Google, GitHub, and JWT-style flows.

**Q:** What is a fork in Node.js?
**A:** A fork creates a child Node.js process. It is useful for running work in a separate process and communicating with the parent process.

**Q:** What are three ways to avoid callback hell?
**A:** Use promises, `async/await`, or split callback logic into named functions. In modern Node.js, `async/await` is usually the clearest option.

**Q:** What is body-parser in Node.js?
**A:** Body-parser is middleware that parses request bodies before route handlers use them. In modern Express, `express.json()` and `express.urlencoded()` cover many common cases.

**Q:** What is CORS in Node.js?
**A:** CORS is a browser security mechanism for cross-origin requests. In Express, the `cors` package is often used to set the required CORS headers.

**Q:** What is the TLS module in Node.js?
**A:** The `tls` module supports secure network connections using TLS or SSL. It is used when encrypted communication is required.

**Q:** Can Node.js access the DOM?
**A:** No. The DOM belongs to the browser environment. Node.js runs on the server and does not have a browser DOM unless a library simulates one.

**Q:** How do you manage packages in a Node.js project?
**A:** Use NPM or another package manager, keep dependencies in `package.json`, and commit the lock file to make installs more reproducible.

**Q:** What is the purpose of `NODE_ENV`?
**A:** `NODE_ENV` tells the app which environment it is running in, such as development, test, or production. Apps use it to change logging, debugging, and performance behavior.

**Q:** What is a test pyramid in Node.js?
**A:** A test pyramid means many fast unit tests at the base, fewer integration tests in the middle, and a small number of end-to-end tests at the top.

### Experienced
**Q:** What is piping in Node.js?
**A:** Piping sends data from one stream directly into another stream. It is useful for efficient file, network, compression, or response handling.

**Q:** What is clustering in Node.js?
**A:** Clustering runs multiple worker processes so a Node.js app can use multiple CPU cores. A primary process manages the workers.

**Q:** What are common cluster methods or properties in Node.js?
**A:** Common cluster features include `fork()` to create workers, worker checks, process references, `send()` for messages, and worker termination methods.

**Q:** How do you manage sessions in Node.js?
**A:** In Express, sessions are often managed with `express-session`. The browser stores a session id, while session data should usually be stored server-side or in a shared store.

**Q:** How many types of API functions are there in Node.js?
**A:** Node.js APIs are often grouped as asynchronous non-blocking functions and synchronous blocking functions. Async versions are preferred for server request paths.

**Q:** How can you implement authentication and authorization in Node.js?
**A:** Authentication can use sessions, Passport, OAuth, or JWT. Authorization checks roles, permissions, or ownership before allowing access to a resource.

**Q:** Which package is commonly used for file uploading in Node.js?
**A:** Multer is commonly used for handling `multipart/form-data` uploads in Express applications.

**Q:** How is Node.js different from server-side scripting languages like Python?
**A:** Node.js runs JavaScript and is event-driven by default, which is strong for I/O-heavy concurrency. Python is a general-purpose language and is often stronger for CPU-heavy, scripting, data, or ML workloads.

**Q:** How do you connect Node.js to MongoDB?
**A:** A common approach is to install Mongoose, define a connection string, and call `mongoose.connect()` during application startup.

**Q:** How do you read command-line arguments in Node.js?
**A:** Use `process.argv`. It contains the Node executable, script path, and any extra arguments passed from the command line.

**Q:** What is Redis used for with Node.js?
**A:** Redis is often used as a cache, session store, rate-limit store, queue backend, or pub/sub system. It helps reduce database load and improve response speed.

**Q:** What is WebSocket?
**A:** WebSocket is a protocol for persistent two-way communication between client and server. It is useful for chat, notifications, dashboards, and real-time apps.

**Q:** What is the util module in Node.js?
**A:** The `util` module provides helper functions for Node.js, such as promisifying callback APIs, formatting, debugging helpers, and type checks.

**Q:** What is the DNS module in Node.js?
**A:** The `dns` module resolves hostnames and performs DNS lookups. It helps convert domain names into network addresses.

**Q:** What is the difference between `setImmediate()` and `setTimeout()`?
**A:** `setTimeout()` schedules a callback after a delay. `setImmediate()` schedules a callback after the current event loop cycle, often after I/O callbacks.

**Q:** What is an EventEmitter in Node.js?
**A:** EventEmitter is a class from the `events` module. It lets objects emit named events and lets listeners react to those events.
