# ASP.NET MVC 面试问答

## 1. 什么是 ASP.NET MVC？

ASP.NET MVC 是微软基于 `Model-View-Controller` 设计模式推出的 Web 开发框架，用来将请求处理、业务逻辑、页面展示拆分开。

- `Model`：负责业务数据和业务规则
- `View`：负责页面展示
- `Controller`：负责接收请求、调用业务逻辑、返回页面或数据

面试里可以这样回答：

> ASP.NET MVC 是一种分层的 Web 开发框架。它把展示层、业务逻辑和请求控制拆开，使项目结构更清晰，也更便于维护和测试。

---

## 2. ASP.NET MVC 的核心思想是什么？

核心思想是 **关注点分离**。

也就是：

- 页面展示的逻辑不要和业务逻辑混在一起
- 请求处理流程不要直接耦合数据库操作
- 不同层各司其职，降低耦合度

它的价值主要体现在：

- 代码更清晰
- 更容易维护
- 更容易做单元测试
- 更适合多人协作开发

---

## 3. MVC 中 Model、View、Controller 分别做什么？

### Model

负责数据和业务规则。

例如：

- 用户、订单、商品等实体类
- 表单提交对象
- 业务校验
- 数据访问逻辑或调用 Service 层

### View

负责把数据展示给用户，通常是 `.cshtml` 文件，使用 `Razor` 语法渲染 HTML。

### Controller

负责接收请求，组织处理流程。

比如：

1. 接收浏览器请求
2. 获取参数
3. 调用业务层
4. 把结果返回给 View 或者返回 JSON

---

## 4. ASP.NET MVC 的请求流程是什么？

这是高频面试题，建议按顺序回答：

1. 浏览器发起 HTTP 请求
2. 路由系统根据 URL 匹配到某个 `Controller` 和 `Action`
3. MVC 框架创建 Controller 实例
4. `Model Binding` 将请求参数绑定到 Action 参数或模型对象
5. 执行 Action 方法
6. Action 调用业务逻辑和数据访问逻辑
7. 返回 `ViewResult`、`JsonResult`、`RedirectResult` 等结果
8. 如果返回 View，则由 Razor 引擎渲染 HTML
9. 最终将响应返回给浏览器

一句话总结：

> ASP.NET MVC 的典型执行链路是 Route -> Controller -> Action -> Model/View -> Response。

---

## 5. 什么是路由（Routing）？

路由的作用是把用户访问的 URL 映射到具体的 Controller 和 Action。

比如：

`/Product/Details/5`

可能会映射到：

```csharp
public class ProductController : Controller
{
    public ActionResult Details(int id)
    {
        return View();
    }
}
```

面试里可以这样说：

> 路由是 ASP.NET MVC 的入口机制。它根据 URL 规则把请求转发给对应的 Controller 和 Action，使 URL 更清晰，也方便做 RESTful 风格设计和 SEO 优化。

---

## 6. 什么是 Controller 和 Action？

`Controller` 是控制器类，通常继承自 `Controller` 基类。  
`Action` 是控制器中处理请求的方法。

示例：

```csharp
public class HomeController : Controller
{
    public ActionResult Index()
    {
        return View();
    }
}
```

这里：

- `HomeController` 是控制器
- `Index()` 是 Action

---

## 7. ActionResult 有哪些常见类型？

`ActionResult` 是 Action 的常见返回类型，用于表示不同的响应结果。

常见类型包括：

- `ViewResult`：返回视图
- `JsonResult`：返回 JSON 数据
- `RedirectResult`：重定向到其他地址
- `RedirectToRouteResult`：重定向到路由
- `ContentResult`：返回字符串内容
- `FileResult`：返回文件

示例：

```csharp
public ActionResult Index()
{
    return View();
}

public JsonResult GetUser()
{
    return Json(new { Name = "Tom" }, JsonRequestBehavior.AllowGet);
}
```

---

## 8. 什么是 Razor 视图引擎？

Razor 是 ASP.NET MVC 常用的视图引擎，用 `@` 符号在 HTML 中嵌入 C# 代码。

示例：

```cshtml
<h1>@Model.Name</h1>
<p>@DateTime.Now</p>
```

优点：

- 语法简洁
- 可读性好
- 便于把后端数据渲染到页面

---

## 9. ViewData、ViewBag、TempData 有什么区别？

这是经典面试题。

### ViewData

- 类型是 `ViewDataDictionary`
- 通过 key-value 传值
- 只在当前请求有效

```csharp
ViewData["Name"] = "Alice";
```

### ViewBag

- 动态对象
- 本质上是对 `ViewData` 的包装
- 使用更方便

```csharp
ViewBag.Name = "Alice";
```

### TempData

- 用于跨请求传值
- 一般用于重定向后的提示消息
- 读取一次后通常会被清除

```csharp
TempData["Message"] = "Save success";
```

面试速答：

> `ViewData` 和 `ViewBag` 适合当前请求内从 Controller 传值到 View，`TempData` 适合跨一次重定向传值。

---

## 10. 什么是 Model Binding？

`Model Binding` 是指 MVC 框架自动把请求中的参数绑定到 Action 方法参数或模型对象。

例如：

```csharp
[HttpPost]
public ActionResult Create(UserViewModel model)
{
    return View();
}
```

这里表单提交的数据会自动绑定到 `model` 对象。

来源通常包括：

- Form 表单
- QueryString
- RouteData
- JSON 请求体

---

## 11. MVC 中如何做表单验证？

一般是前后端结合验证。

常见方式是使用 `Data Annotation`：

```csharp
public class UserViewModel
{
    [Required]
    [StringLength(50)]
    public string Name { get; set; }

    [Range(18, 60)]
    public int Age { get; set; }
}
```

在 Action 中通过 `ModelState.IsValid` 判断：

```csharp
[HttpPost]
public ActionResult Create(UserViewModel model)
{
    if (!ModelState.IsValid)
    {
        return View(model);
    }

    return RedirectToAction("Index");
}
```

面试里可以说：

> MVC 通常通过 Data Annotation 做模型验证，提交时先由 Model Binding 绑定数据，再通过 `ModelState.IsValid` 判断是否通过校验。

---

## 12. GET 和 POST 有什么区别？

### GET

- 一般用于查询数据
- 参数通常放在 URL 中
- 幂等性更强
- 不适合提交敏感或大量数据

### POST

- 一般用于新增、修改等提交操作
- 参数通常放在请求体中
- 更适合提交表单数据

在 MVC 中通常这样写：

```csharp
[HttpGet]
public ActionResult Create()
{
    return View();
}

[HttpPost]
public ActionResult Create(UserViewModel model)
{
    return View();
}
```

---

## 13. ASP.NET MVC 如何防止 CSRF？

常见做法是使用防伪令牌。

在 View 中：

```cshtml
@Html.AntiForgeryToken()
```

在 Action 中：

```csharp
[HttpPost]
[ValidateAntiForgeryToken]
public ActionResult Create(UserViewModel model)
{
    return View();
}
```

面试回答可以说：

> MVC 中防止 CSRF 的常见方式是使用 AntiForgeryToken，在表单中输出 token，并在服务端校验 token 的合法性。

---

## 14. Session 和 Cookie 的区别是什么？

### Session

- 数据保存在服务端
- 更安全
- 常用于保存登录状态、用户上下文

### Cookie

- 数据保存在客户端
- 容量较小
- 常用于记住用户偏好、标识信息

面试速答：

> Session 存在服务端，Cookie 存在客户端。Session 更适合保存敏感状态，Cookie 更适合保存轻量级的客户端信息。

---

## 15. 什么是过滤器（Filter）？

过滤器用于把一些公共逻辑抽离出来，统一应用到请求处理流程中。

常见过滤器：

- `Authorize`：权限控制
- `HandleError`：异常处理
- `OutputCache`：输出缓存
- 自定义 `ActionFilter`：日志记录、审计、性能统计

常见使用场景：

- 登录校验
- 权限判断
- 统一异常处理
- 请求日志记录

---

## 16. ASP.NET MVC 的优点是什么？

可以从这几个方面回答：

1. 分层清晰，关注点分离
2. 更利于单元测试
3. 代码可维护性更高
4. 路由灵活，URL 更友好
5. 更适合中大型项目
6. 扩展性较强，比如过滤器、模型绑定器、路由规则都可扩展

---

## 17. ASP.NET MVC 的缺点是什么？

也要会客观回答。

常见缺点：

1. 对初学者来说，路由、生命周期、过滤器等概念有一定学习成本
2. 小型项目可能会觉得结构偏重
3. 如果设计不好，容易把过多业务逻辑写进 Controller
4. 纯服务端渲染的模式在前后端分离场景下使用会减少

---

## 18. ASP.NET MVC 和 Web Forms 有什么区别？

这是非常经典的一题。

### Web Forms

- 更接近传统桌面事件驱动开发
- 有 `ViewState`
- 控件开发方式更强
- 页面生命周期相对复杂

### MVC

- 更贴近 HTTP 请求响应模型
- 没有 Web Forms 那种重量级页面状态机制
- 分层更清晰
- 更适合测试
- 更适合大型项目

面试里可以这样说：

> Web Forms 更偏向快速页面开发，MVC 更强调分层、可维护性和可测试性，也更贴近 Web 本身的请求响应机制。

---

## 19. 实际项目里 Controller 应该写多少逻辑？

面试官很喜欢借这个问题看你的工程意识。

推荐回答：

> 在实际项目中，我会让 Controller 尽量保持轻量，只负责接收请求、参数校验、调用业务层和返回结果。核心业务逻辑通常放在 Service 层，数据库操作放在 Repository 或数据访问层，这样职责更清晰，代码也更容易维护和测试。

这类分层通常是：

- `Controller`：请求入口和响应返回
- `Service`：业务逻辑
- `Repository/DAO`：数据访问
- `Entity/DTO/ViewModel`：数据模型

---

## 20. 什么是 Partial View？

`Partial View` 是局部视图，用于复用页面中的公共片段。

例如：

- 导航栏
- 评论区
- 商品列表
- 公共表单片段

优点：

- 提高复用性
- 减少重复代码
- 页面结构更清晰

---

## 21. 如何理解 ASP.NET MVC 的可测试性？

MVC 比较容易做测试，主要原因是：

- Controller 和 View 分离
- 业务逻辑可以下沉到 Service 层
- 路由和 Action 行为更清晰
- 不依赖 Web Forms 那种复杂页面生命周期

例如可以对 Controller 的 Action 做单元测试，验证：

- 是否返回了正确 View
- Model 是否正确
- 重定向是否正确

---

## 22. 面试官问“你怎么理解 MVC”，可以怎么回答？

可以直接用这一段：

> 我理解 MVC 的核心价值是分层。Controller 负责接收请求和控制流程，Model 负责业务数据和业务规则，View 负责展示。这样可以降低模块之间的耦合，提高系统的可维护性和可测试性。对于中大型项目来说，MVC 比较适合团队协作和后期扩展。

---

## 23. 面试官问“ASP.NET MVC 的执行流程”，可以怎么回答？

可以直接背这一段：

> 用户发起请求后，请求先进入路由系统，由路由匹配到对应的 Controller 和 Action。然后 MVC 框架完成参数绑定，执行 Action 方法。Action 再调用业务层和数据访问层获取结果，最后返回 View 或 JSON。如果返回的是 View，就由 Razor 视图引擎渲染 HTML，再响应给浏览器。

---

## 24. 面试官问“你在项目里怎么用 ASP.NET MVC”，可以怎么回答？

这是很实用的一段：

> 在项目中，我一般会用 MVC 来做后台管理系统或者传统服务端渲染页面。Controller 负责接收请求和返回结果，业务逻辑放到 Service 层，数据访问通常结合 Entity Framework 或 ADO.NET。对于表单提交，我会结合 ViewModel、Model Binding 和 Data Annotation 做参数绑定和校验；对于权限控制和日志记录，会使用过滤器或中间层统一处理。

---

## 25. ASP.NET MVC 常见高频追问

面试前建议再准备这些问题：

1. 路由原理是什么？
2. Model Binding 的底层思路是什么？
3. 过滤器的执行顺序是什么？
4. 如何统一处理异常？
5. 如何做登录认证和权限控制？
6. 如何防止 CSRF 和 XSS？
7. 如何做性能优化？
8. ASP.NET MVC 和 ASP.NET Core MVC 有什么区别？
9. 如何设计一个清晰的分层结构？
10. 为什么不建议把大量业务逻辑写在 Controller 里？

---

## 26. 面试速记版

适合最后突击记忆：

> ASP.NET MVC 是微软的 Web 开发框架，基于 Model-View-Controller 模式。请求先经过路由，定位到 Controller 的 Action，Action 调用 Model 处理业务逻辑，再把结果交给 View 渲染返回。它的优点是分层清晰、可维护、可测试、扩展性较强，适合中大型企业项目开发。

---

## 27. 一分钟自我表述模板

如果面试官让你简要介绍你对 ASP.NET MVC 的理解，可以这样说：

> 我认为 ASP.NET MVC 的核心优势在于分层和解耦。它通过 Controller 处理请求流程，通过 Model 承载业务数据和规则，通过 View 负责展示，使得整个项目结构更清晰。在实际开发里，我会尽量让 Controller 保持轻量，把业务逻辑放到 Service 层，把数据访问下沉到 Repository 或 ORM 层。这样既利于维护，也便于单元测试和后期扩展。

---

## 28. 面试回答小技巧

回答 ASP.NET MVC 时，尽量这样组织：

1. 先讲定义
2. 再讲请求流程
3. 再讲优点
4. 再讲项目中如何落地
5. 最后补充安全、验证、分层、测试这些工程化细节

这样会显得你不是只会背概念，而是知道怎么在项目里使用。
