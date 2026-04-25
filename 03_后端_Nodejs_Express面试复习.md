# Node.js + Express 面试复习整理

## 1. Node.js 和 Express 是什么

- **Node.js**：一个基于 Chrome V8 引擎的 JavaScript 运行时，用来在服务端执行 JavaScript。
- **Express**：Node.js 上常用的轻量级 Web 框架，用于快速搭建 Web 服务和 RESTful API。

面试里可以这样回答：

> Node.js 提供运行环境，Express 提供 Web 开发能力。Node.js 负责事件循环、模块系统、文件和网络等底层能力，Express 在它之上封装了路由、中间件、请求响应处理等常用功能。

---

## 2. Node.js 核心知识

### 2.1 事件循环和非阻塞 I/O

- Node.js 执行 JavaScript 的主线程是单线程。
- 遇到文件读取、网络请求、数据库访问等 I/O 操作时，不会一直阻塞等待。
- 这些任务会交给底层系统或线程池处理，完成后再通过事件循环把回调放回队列执行。

面试话术：

> Node.js 的高并发能力主要来自事件驱动和非阻塞 I/O。它不是靠创建大量线程来处理请求，而是通过事件循环协调异步任务，所以在 I/O 密集型场景下性能表现很好。

### 2.2 Node.js 适合什么场景

适合：

- API 服务
- 即时通信
- 网关服务
- I/O 密集型应用

不太适合：

- 大量 CPU 密集型计算
- 长时间阻塞主线程的任务

### 2.3 CommonJS 和 ES Module

#### CommonJS

```js
const express = require('express');
module.exports = app;
```

#### ES Module

```js
import express from 'express';
export default app;
```

常见区别：

- CommonJS 使用 `require` 和 `module.exports`
- ES Module 使用 `import` 和 `export`
- ES Module 是官方标准模块方案
- Node.js 现代项目中两种都常见，但新项目更偏向 ESM

### 2.4 异步编程方式

- 回调函数
- Promise
- async/await

面试建议：

> 现在项目里主要使用 `async/await` 处理异步逻辑，因为可读性更好，异常处理也更统一，但底层本质仍然是 Promise。

---

## 3. Express 核心机制

### 3.1 Express 的基本使用

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

你需要能解释：

- `express()`：创建应用实例
- `app.use()`：注册中间件
- `app.get()`：定义 GET 路由
- `req`：请求对象
- `res`：响应对象
- `app.listen()`：启动服务器

### 3.2 中间件是什么

中间件本质上是一个函数：

```js
(req, res, next) => {}
```

作用包括：

- 处理请求
- 修改 `req` 或 `res`
- 执行校验、鉴权、日志记录
- 调用 `next()` 交给下一个中间件
- 直接返回响应并结束请求

常见中间件类型：

- 应用级中间件
- 路由级中间件
- 错误处理中间件
- 内置中间件，如 `express.json()`、`express.urlencoded()`

面试话术：

> Express 的核心就是中间件机制。请求会按顺序经过多个中间件，每一层负责一类职责，比如日志、鉴权、参数校验、错误处理，这样代码更清晰，也更利于复用。

### 3.3 `next()` 的作用

- 把控制权交给下一个中间件或路由处理函数
- 如果既不调用 `next()`，也不返回响应，请求就可能一直挂起

### 3.4 路由和参数获取

```js
app.get('/users/:id', (req, res) => {
  res.json({
    params: req.params,
    query: req.query
  });
});
```

常见参数来源：

- `req.params`：路径参数
- `req.query`：查询参数
- `req.body`：请求体参数

例如：

- `/users/1` -> `req.params.id`
- `/users?page=1` -> `req.query.page`
- POST JSON 数据 -> `req.body`

### 3.5 `app.use()` 和 `app.get()` / `app.post()` 的区别

- `app.use()`：通常用于挂载中间件，默认匹配多个 HTTP 方法
- `app.get()` / `app.post()`：用于定义具体请求方法的路由

### 3.6 错误处理中间件

```js
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || 'server error'
  });
});
```

重点：

- 错误处理中间件必须是 4 个参数
- Express 通过参数个数识别它是不是错误处理中间件
- 在异步场景中，通常需要 `next(err)` 或统一封装 async handler

---

## 4. RESTful API 基础

### 4.1 常见 HTTP 方法

- `GET`：查询资源
- `POST`：创建资源
- `PUT`：整体更新资源
- `PATCH`：部分更新资源
- `DELETE`：删除资源

### 4.2 常见状态码

- `200 OK`
- `201 Created`
- `204 No Content`
- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`
- `500 Internal Server Error`

面试话术：

> 我设计接口时会尽量遵循 RESTful 风格，用名词表示资源，用 HTTP 方法表示动作，同时返回合适的状态码，便于前后端协作和接口维护。

---

## 5. Express 项目结构怎么答

常见目录划分：

- `routes/`：定义路由
- `controllers/`：处理请求和响应
- `services/`：封装业务逻辑
- `models/`：数据模型
- `middlewares/`：中间件
- `utils/`：工具函数
- `app.js` / `server.js`：入口文件

面试话术：

> 我一般会采用分层结构。路由层负责 URL 映射，controller 负责接收请求并返回结果，service 负责业务逻辑，model 负责数据访问。这样职责清晰，也方便测试和维护。

---

## 6. 登录鉴权常见考点

### 6.1 Session 和 JWT 的区别

#### Session

- 会话信息保存在服务端
- 客户端通常只保存 session id
- 适合传统服务端渲染项目

#### JWT

- 用户信息或声明封装在 token 中
- 服务端不一定保存会话状态
- 适合前后端分离和移动端场景

面试话术：

> 如果是前后端分离项目，我通常会优先考虑 JWT，因为它更适合无状态认证；如果是传统 Web 应用，Session 也很常见，尤其是在服务端统一管理会话时更方便。

### 6.2 JWT 的优缺点

优点：

- 适合分布式系统
- 服务端压力相对更小
- 前后端分离下使用方便

缺点：

- 一旦签发，过期前很难主动失效
- token 泄露会有安全风险
- 通常需要配合刷新机制、黑名单机制使用

---

## 7. 安全相关知识点

至少要熟悉这些概念：

- SQL 注入
- XSS
- CSRF
- 密码加密存储，例如 `bcrypt`
- 环境变量管理敏感信息
- 使用 `helmet` 增加常见安全头
- 接口限流，防止恶意刷接口

面试可以补一句：

> 安全方面我会关注输入校验、鉴权、密码加密、敏感配置隔离，以及常见攻击手段的防护，比如 XSS、CSRF 和 SQL 注入。

---

## 8. 性能优化怎么答

常见优化思路：

- 避免阻塞事件循环
- 使用缓存，例如 Redis
- 使用 gzip 压缩
- 数据库连接池
- 加日志和监控
- 通过 Nginx 做反向代理和负载均衡
- 使用 PM2 或 cluster 提升利用率
- CPU 密集型任务拆到独立服务或 Worker 中

面试话术：

> Node.js 比较适合高并发 I/O 场景，如果遇到 CPU 密集型任务，我会考虑拆分成独立服务、消息队列消费任务，或者用 Worker Threads 处理，避免阻塞主线程。

---

## 9. 面试中最好会写的 Express 示例

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

要能讲清楚：

- JSON 解析中间件
- 路由参数
- 请求体获取
- 状态码使用
- 错误处理中间件

---

## 10. 高频面试问题整理

### 10.1 Node.js 为什么快

**参考回答：**

> Node.js 快的原因主要是事件驱动和非阻塞 I/O。它在处理大量 I/O 请求时，不需要为每个请求都创建一个线程，而是通过事件循环协调任务，所以线程切换成本低，并发能力强。

### 10.2 Node.js 是单线程，为什么还能支持高并发

**参考回答：**

> Node.js 执行 JavaScript 的部分是单线程，但很多 I/O 操作并不是在主线程里同步完成的，而是交给底层系统或线程池处理。主线程只负责接收结果并执行回调，所以可以在单线程 JS 的基础上支持高并发。

### 10.3 Express 中 `next()` 有什么作用

**参考回答：**

> `next()` 的作用是把当前请求交给下一个中间件或路由处理函数。如果不调用 `next()`，又没有返回响应，请求就可能一直卡住。

### 10.4 中间件的执行顺序是什么

**参考回答：**

> Express 中间件通常按照注册顺序执行。请求进入后会依次经过匹配到的中间件，所以中间件的定义顺序非常重要，比如日志、鉴权、参数解析通常会放在前面。

### 10.5 `req.params`、`req.query`、`req.body` 有什么区别

**参考回答：**

> `req.params` 用来获取路径参数，`req.query` 用来获取 URL 查询参数，`req.body` 用来获取请求体里的数据，比如 POST 提交的 JSON。它们分别对应不同的数据来源。

### 10.6 GET 和 POST 的区别

**参考回答：**

> GET 一般用于查询数据，参数通常放在 URL 上；POST 一般用于提交数据，数据通常放在请求体中。GET 更强调幂等查询，POST 更常用于新增或提交操作。

### 10.7 PUT 和 PATCH 的区别

**参考回答：**

> PUT 一般表示对资源进行整体更新，PATCH 表示部分更新。在实际项目里，如果只修改一个字段，更适合用 PATCH。

### 10.8 什么是 RESTful

**参考回答：**

> RESTful 是一种接口设计风格，核心思想是把数据抽象成资源，通过统一的 URL 标识资源，通过 HTTP 方法表示对资源的操作，比如 GET 查询、POST 创建、PUT 更新、DELETE 删除。

### 10.9 为什么要做项目分层

**参考回答：**

> 分层主要是为了降低耦合，让路由、业务逻辑、数据访问职责分离。这样代码更清晰，更方便测试、扩展和维护。

### 10.10 Session 和 JWT 怎么选

**参考回答：**

> 如果是传统服务端渲染项目，Session 会比较常见；如果是前后端分离、移动端或者分布式场景，JWT 更常见。具体要看系统架构、扩展需求以及安全策略。

### 10.11 JWT 有什么缺点

**参考回答：**

> JWT 的问题在于签发后通常不能轻易失效，所以用户强制下线、权限变更后立即生效这类需求处理起来更复杂，通常需要配合黑名单或短时效 token 加 refresh token。

### 10.12 如何处理 Express 的全局错误

**参考回答：**

> 我通常会在最后统一挂一个错误处理中间件，集中处理异常响应；对于异步逻辑，会通过 `try/catch` 配合 `next(err)`，或者封装一个 asyncHandler 来统一捕获错误。

### 10.13 如何理解跨域

**参考回答：**

> 跨域本质上是浏览器的同源策略限制。前后端域名、端口或协议不同就可能产生跨域问题，服务端通常可以通过 CORS 配置允许指定来源访问。

### 10.14 如何做参数校验

**参考回答：**

> 参数校验一般放在中间件层，先校验请求参数是否合法，再进入业务逻辑。这样可以避免无效数据进入系统，也方便统一返回错误信息。常见做法是使用 `joi`、`express-validator` 等工具。

### 10.15 如何提升 Node.js 服务稳定性

**参考回答：**

> 我会从几个方面入手：统一错误处理、日志监控、接口限流、进程守护、健康检查、缓存、合理设置超时，以及避免阻塞事件循环。对于关键服务，还会配合负载均衡和多实例部署。

---

## 11. 面试速背版

> Node.js 是一个基于事件驱动和非阻塞 I/O 的 JavaScript 运行时，适合高并发 I/O 场景。Express 是 Node.js 上常用的 Web 框架，核心是路由和中间件机制。实际开发中我会把项目拆成 route、controller、service 等层次，并结合 JWT、参数校验、统一错误处理、日志和安全中间件来构建 API 服务。

---

## 12. 临场表达建议

- 先说定义，再说原理，再说项目实践
- 不要只背概念，尽量联系实际项目
- 回答时尽量带关键词：事件循环、非阻塞 I/O、中间件、分层、鉴权、错误处理、性能优化
- 如果被追问，就举一个你做过的接口或项目例子

一个比较自然的表达方式：

> 我在项目里一般用 Express 来搭 API 服务，先通过中间件处理 JSON、日志和鉴权，再进入 controller 和 service。对外提供 RESTful 接口，同时会做统一错误处理、参数校验和 token 鉴权。如果服务压力比较大，也会考虑缓存、PM2 多进程和链路监控这些方案。
