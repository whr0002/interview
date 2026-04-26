# .NET Core 面试速记版

这份文档只保留 `.NET Core` 相关内容，重点放在平台、运行时、ASP.NET Core、EF Core、认证、缓存、部署和性能优化。

---

## 1. .NET Core 是什么？

- `.NET Core` 是微软推出的跨平台、开源、高性能 .NET 实现
- 它包含运行时、基础类库，以及构建现代应用所需的基础设施
- 常用于开发 Web API、微服务、控制台程序、后台服务

一句话：

> .NET Core 是现代化的 .NET 平台，强调跨平台、高性能和云原生。

---

## 2. .NET Framework 和 .NET Core 区别

- `.NET Framework` 主要运行在 Windows
- `.NET Core` 支持 Windows、Linux、macOS
- `.NET Core` 更适合 Docker、Kubernetes、微服务
- `.NET Core` 开源且性能更好
- 后续统一演进为 `.NET 5+`

一句话：

> 老项目常见 .NET Framework，新项目一般优先选择现代 .NET。

---

## 3. .NET Core 为什么流行？

- 跨平台
- 开源
- 高性能
- 更适合容器化部署
- 更适合微服务架构
- 内置依赖注入、配置、日志体系

---

## 4. CoreCLR、JIT、GC 是什么？

**CoreCLR**

- `.NET Core` 的核心运行时

**JIT**

- 即时编译器
- 把 IL 编译成机器码执行

**GC**

- 垃圾回收器
- 负责管理托管内存

一句话：

> CoreCLR 负责运行，JIT 负责编译执行，GC 负责内存回收。

---

## 5. 什么是托管代码和托管运行时？

- 托管代码运行在 `.NET` 运行时之上
- 运行时负责内存管理、异常处理、类型安全、垃圾回收
- 这也是 .NET 开发效率高的重要原因之一

---

## 6. ASP.NET Core 是什么？

- 基于 `.NET Core` 的 Web 开发框架
- 可用于开发：
  - Web API
  - MVC 网站
  - Razor Pages
  - 微服务

特点：

- 高性能
- 跨平台
- 中间件管道清晰
- 内置 DI、日志、配置

---

## 7. ASP.NET Core 请求管道是什么？

- 请求进入应用后，会按顺序经过多个 **Middleware**
- 每个中间件都可以：
  - 处理请求
  - 调用下一个中间件
  - 在响应返回时继续处理

一句话：

> ASP.NET Core 是基于中间件管道的，请求按注册顺序流转。

---

## 8. 常见中间件有哪些？

- 异常处理
- 路由
- 静态文件
- CORS
- 认证
- 授权
- 日志

高频点：

> 中间件顺序很重要，尤其是路由、认证和授权。

---

## 9. 依赖注入 DI 是什么？

- 把对象创建和依赖管理交给容器
- 减少模块耦合
- 提高可测试性和可维护性

ASP.NET Core 内置 DI 容器。

---

## 10. DI 的三种生命周期

- `Transient`：每次解析都创建新实例
- `Scoped`：同一个请求共享一个实例
- `Singleton`：整个应用生命周期只有一个实例

常见场景：

- `Transient`：轻量无状态服务
- `Scoped`：请求级服务、`DbContext`
- `Singleton`：全局共享配置或线程安全服务

---

## 11. 为什么 `DbContext` 一般用 `Scoped`？

- `DbContext` 表示一次请求范围内的数据访问会话
- 它不适合全局共享
- 如果注册成 `Singleton`，容易出现线程安全和状态污染问题

一句话：

> `DbContext` 通常跟随请求生命周期，所以一般注册为 `Scoped`。

---

## 12. 为什么 Singleton 不能直接依赖 Scoped？

- `Singleton` 生命周期比 `Scoped` 长
- 会导致作用域不一致
- 可能拿到已释放实例

一句话：

> 长生命周期对象不能直接依赖短生命周期对象。

---

## 13. ASP.NET Core 配置系统有哪些来源？

常见来源：

- `appsettings.json`
- `appsettings.Development.json`
- 环境变量
- 命令行参数
- Secret Manager

一句话：

> ASP.NET Core 配置是分层覆盖的，后加载通常覆盖先加载。

---

## 14. ASP.NET Core 日志怎么做？

内置接口：

- `ILogger<T>`

常见级别：

- `Trace`
- `Debug`
- `Information`
- `Warning`
- `Error`
- `Critical`

项目中常见扩展：

- `Serilog`
- `Seq`
- `ELK`
- `Application Insights`

---

## 15. 什么是 `IHost` 和通用主机？

- `.NET Core` 使用 Host 模型管理应用生命周期
- 通用主机统一了：
  - 配置
  - 日志
  - 依赖注入
  - 后台服务

常见场景：

- Web 应用
- Worker Service
- 后台定时任务

---

## 16. `Program.cs` 在 .NET Core 中做什么？

- 配置应用入口
- 注册服务到 DI 容器
- 配置中间件
- 启动应用

一句话：

> `Program.cs` 是应用的启动和装配中心。

---

## 17. Web API 常见返回类型

- `IActionResult`
- `ActionResult<T>`

区别：

- `IActionResult` 适合返回多种结果
- `ActionResult<T>` 适合既有强类型返回，也可能返回错误状态码

---

## 18. 什么是 RESTful API？

核心思想：

- URL 表示资源
- HTTP 方法表示操作

常见方法：

- `GET`：查询
- `POST`：新增
- `PUT`：更新
- `DELETE`：删除

---

## 19. 认证和授权区别

- **认证 Authentication**：确认用户是谁
- **授权 Authorization**：确认用户能做什么

---

## 20. JWT 是什么？

- 一种常见的无状态认证方案
- 很适合前后端分离和分布式系统

组成：

- `Header`
- `Payload`
- `Signature`

注意点：

- 不要在 `Payload` 放敏感明文
- 设置合理过期时间
- 做好签名校验

---

## 21. ASP.NET Core 里常见认证方式

- Cookie 认证
- JWT Bearer
- OAuth2
- OpenID Connect

面试里最常问的是：

> JWT 在前后端分离项目中的使用方式和优缺点。

---

## 22. EF Core 是什么？

- `.NET Core` 时代常用的 ORM
- 通过 LINQ 操作数据库
- 支持 Code First 和 Database First

核心对象：

- `DbContext`
- `DbSet<TEntity>`

---

## 23. `DbContext` 是什么？

- 数据库访问的核心上下文对象
- 负责连接管理、变更跟踪、查询和保存

一句话：

> `DbContext` 可以理解成一次数据库会话。

---

## 24. EF Core 的常见能力

- LINQ 查询
- 变更跟踪
- 关联映射
- 事务支持
- Migration

---

## 25. 什么是 Migration？

- EF Core 的数据库迁移机制
- 用于管理数据库结构变更

一句话：

> Migration 用来让代码模型和数据库结构保持同步演进。

---

## 26. EF Core 查询优化怎么做？

- `AsNoTracking()`：只读查询提高性能
- `Select()`：只查需要字段
- `Include()`：加载关联数据
- 分页：`Skip()` / `Take()`
- 避免 N+1 查询
- 给高频字段建立索引

---

## 27. 什么是 N+1 查询问题？

- 先查主数据
- 再对每条主数据逐条查关联数据
- 最终导致 SQL 次数过多

一句话：

> N+1 问题的本质是查询次数失控，常通过 `Include` 或投影查询优化。

---

## 28. `AsNoTracking()` 有什么用？

- 禁用实体变更跟踪
- 降低内存占用
- 提高只读查询性能

---

## 29. ASP.NET Core 缓存怎么做？

常见方式：

- 本地缓存 `MemoryCache`
- 分布式缓存 `Redis`

作用：

- 减少数据库压力
- 提高接口响应速度

注意：

- 缓存一致性
- 缓存穿透
- 缓存击穿
- 缓存雪崩

---

## 30. 什么是垃圾回收 GC？

- .NET 的自动内存管理机制
- 负责回收不再使用的托管对象

分代：

- `Gen 0`
- `Gen 1`
- `Gen 2`

补充：

- 大对象堆 `LOH`

---

## 31. `Dispose` 和 GC 区别

- `GC`：管理托管内存，何时执行不确定
- `Dispose`：用于主动释放非托管资源

常见资源：

- 数据库连接
- 文件句柄
- 网络连接

一句话：

> GC 管内存，`Dispose` 管外部资源。

---

## 32. `using` 是干什么的？

- 确保对象使用完成后自动调用 `Dispose`
- 常用于连接、文件流、网络流等场景

---

## 33. ASP.NET Core 性能优化怎么做？

- 使用异步 I/O
- 减少不必要对象分配
- 合理使用缓存
- 优化数据库查询
- 只返回必要字段
- 给接口做分页
- 使用连接池
- 避免热点路径重复序列化和高开销反射

---

## 34. Kestrel 是什么？

- ASP.NET Core 内置的跨平台 Web Server
- 通常用于承载应用服务
- 生产环境经常与 Nginx 或 IIS 配合使用

一句话：

> Kestrel 是 ASP.NET Core 默认的 Web 服务器。

---

## 35. 为什么 ASP.NET Core 适合微服务？

- 轻量
- 高性能
- 跨平台
- 易于容器化
- 配置、日志、DI 体系完整
- 很适合 Docker / Kubernetes 部署

---

## 36. 部署时常见组合

- 应用运行在 Kestrel 上
- 前面接 Nginx 或 IIS 做反向代理
- 部署到 Linux、Windows、Docker 容器或云平台

一句话：

> ASP.NET Core 在生产环境中通常不是单独裸跑，而是配合反向代理和部署平台一起使用。

---

## 37. 面试总结模板

你可以这样回答：

> .NET Core 是现代化的 .NET 平台，核心优势是跨平台、开源和高性能。面试中通常会围绕运行时机制、ASP.NET Core 中间件、依赖注入、配置和日志、EF Core 数据访问、JWT 认证、缓存和性能优化来提问。实际项目中，我会结合请求生命周期、数据访问方式和部署环境去做设计和优化。

---

## 面试前 1 分钟强记版

最后只记这些关键词：

- `.NET Core`：跨平台、开源、高性能
- `CoreCLR` / `JIT` / `GC`
- ASP.NET Core 中间件管道
- DI：`Transient` / `Scoped` / `Singleton`
- `DbContext` 用 `Scoped`
- 配置：`appsettings.json` + 环境变量
- 日志：`ILogger<T>`
- EF Core：`DbContext`、`DbSet`、`Migration`
- 查询优化：`AsNoTracking()`、`Include()`、分页、索引
- JWT
- 缓存：`MemoryCache` / `Redis`
- Kestrel
- Docker / 微服务 / 反向代理
