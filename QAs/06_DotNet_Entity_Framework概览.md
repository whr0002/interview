---
title: "Entity Framework Overview"
category: "backend"
tags: ["entity-framework", "ef-core", "orm", "dotnet"]
language: "en"
source_type: "interview-notes"
---

# Entity Framework Overview

## Knowledge Notes

Entity Framework, usually shortened to **EF**, is Microsoft's ORM framework for .NET.

You can think of it like this:

- In a database, you work with tables, rows, and foreign keys
- In code, you work with classes, objects, and properties
- EF maps those two worlds together

That means you can interact with a database through C# objects instead of writing a lot of raw SQL by hand.

## What problem does it solve?

Without EF, database access often looks like this:

1. Write SQL manually
2. Open a database connection
3. Execute the command
4. Read the result set
5. Map each column into an object

EF abstracts most of that away, so your code can look more like this:

```csharp
var user = new User { Name = "Alice" };
context.Users.Add(user);
context.SaveChanges();
```

EF generates the corresponding `INSERT` SQL behind the scenes.

## Core concepts

### 1. DbContext

`DbContext` is like a session with the database. It manages connections, tracks entity changes, and coordinates reads and writes.

### 2. DbSet<T>

`DbSet<T>` represents a table-like collection of entities, such as `context.Users`, which usually maps to a `Users` table.

### 3. Entity

An entity is a C# class such as `User` or `Order` that represents data stored in the database.

### 4. Mapping

Mapping defines how classes relate to tables and how properties relate to columns.

### 5. Change Tracking

EF tracks what has changed in your objects. When you call `SaveChanges()`, it sends only the necessary updates to the database.

### 6. LINQ Queries

You can query the database using C# and LINQ:

```csharp
var adults = context.Users.Where(u => u.Age >= 18).ToList();
```

EF translates that expression into SQL.

## Entity Framework vs. EF Core

This distinction matters:

- **Entity Framework** often refers to the older **EF6**
- **Entity Framework Core** or **EF Core** is the modern version

Most new projects use **EF Core** because it is:

- Cross-platform
- Faster and more actively maintained
- Better aligned with modern .NET development

## Common development approaches

### Database First

You start with an existing database and generate entity classes and context code from it.

### Code First

You start by writing C# classes, then let EF create or evolve the database schema.

In EF Core, many teams prefer **Code First + Migrations**.

## What are Migrations?

Migrations are EF's way of versioning database schema changes.

For example, if you add a new property:

```csharp
public string Email { get; set; }
```

You can generate a migration so EF creates the corresponding schema update.

Common commands:

```bash
dotnet ef migrations add AddUserEmail
dotnet ef database update
```

## Advantages

- High development speed
- Less boilerplate code
- Natural querying with LINQ
- Easier maintenance of domain models
- Built-in schema migration support

## Disadvantages

- The abstraction can hide inefficient SQL
- Complex queries are sometimes easier to optimize by hand
- It is easy to misuse tracking, lazy loading, or `Include`
- Performance issues can appear in large systems if it is used carelessly

## When is Entity Framework a good fit?

Entity Framework works well for:

- Business applications
- Internal tools and back-office systems
- CRUD-heavy systems
- .NET projects that value developer productivity

It may be less suitable for:

- Extremely performance-sensitive systems
- Applications with very complex SQL requirements
- Systems that depend heavily on stored procedures or tightly controlled SQL

## One-sentence summary

Entity Framework lets you work with a relational database through C# objects instead of writing large amounts of SQL manually.

## Typical interview-level summary

If you need a short interview answer:

> Entity Framework is Microsoft's ORM for .NET. It maps C# classes to database tables, lets developers query data with LINQ, tracks entity changes, and can manage schema updates through migrations. In modern projects, EF Core is usually the preferred choice.

## Flashcards

### General
**Q:** What problem does it solve?
**A:** Without EF, database access often looks like this:

1. Write SQL manually
2. Open a database connection
3. Execute the command
4. Read the result set
5. Map each column into an object

EF abstracts most of that away, so your code can look more like this:

```csharp
var user = new User { Name = "Alice" };
context.Users.Add(user);
context.SaveChanges();
```

EF generates the corresponding `INSERT` SQL behind the scenes.

### Code First
**Q:** What are Migrations?
**A:** Migrations are EF's way of versioning database schema changes.

For example, if you add a new property:

```csharp
public string Email { get; set; }
```

You can generate a migration so EF creates the corresponding schema update.

Common commands:

```bash
dotnet ef migrations add AddUserEmail
dotnet ef database update
```

### Disadvantages
**Q:** When is Entity Framework a good fit?
**A:** Entity Framework works well for:

- Business applications
- Internal tools and back-office systems
- CRUD-heavy systems
- .NET projects that value developer productivity

It may be less suitable for:

- Extremely performance-sensitive systems
- Applications with very complex SQL requirements
- Systems that depend heavily on stored procedures or tightly controlled SQL
