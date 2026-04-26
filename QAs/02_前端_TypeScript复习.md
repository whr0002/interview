# TypeScript Interview Review

This document summarizes core TypeScript knowledge for interviews, along with common questions and concise model answers.

## 1. What TypeScript Is

TypeScript is a superset of JavaScript that adds static typing, compile-time checks, and better tooling support.

Key points:

- It helps catch errors before runtime.
- It improves maintainability in medium and large codebases.
- It provides better autocomplete, navigation, and refactoring support.
- It compiles to plain JavaScript, so it does not change the runtime nature of JavaScript.

## 2. Core Fundamentals

### 2.1 Basic Types

Common primitive and built-in types:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`
- `object`

Example:

```ts
let username: string = "Alice";
let age: number = 28;
let isActive: boolean = true;
```

### 2.2 Arrays and Tuples

Arrays:

```ts
const ids: number[] = [1, 2, 3];
const names: Array<string> = ["Alice", "Bob"];
```

Tuples:

```ts
const user: [string, number] = ["Alice", 28];
```

### 2.3 `any`, `unknown`, `void`, `never`

`any`:

- Turns off type checking.
- Useful only in rare situations.
- Overuse weakens TypeScript significantly.

```ts
let value: any = 123;
value = "hello";
```

`unknown`:

- Safer alternative to `any`.
- Must be narrowed before use.

```ts
let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

`void`:

- Usually used as a function return type when nothing is returned.

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

`never`:

- Represents values that never occur.
- Often used for functions that always throw or for exhaustive checks.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

### 2.4 Type Inference

TypeScript can infer types automatically from values.

```ts
const city = "Edmonton"; // inferred as string
```

In interviews, a good point is:

- Type inference reduces boilerplate.
- Explicit types are still useful for public APIs, function parameters, and important return values.

### 2.5 Union and Intersection Types

Union:

```ts
let id: string | number;
id = 1001;
id = "A-1001";
```

Intersection:

```ts
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;
```

### 2.6 Literal Types

Literal types restrict a value to exact values.

```ts
let direction: "left" | "right";
direction = "left";
```

### 2.7 Type Aliases and Interfaces

Type alias:

```ts
type ID = string | number;
```

Interface:

```ts
interface User {
  id: number;
  name: string;
  age?: number;
}
```

General rule:

- Use `interface` for object shapes and contracts.
- Use `type` for unions, intersections, mapped types, and utility-heavy cases.

### 2.8 Functions

Function types include parameter types and return types.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Optional parameters:

```ts
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : name;
}
```

### 2.9 Type Assertions

Type assertions tell the compiler how to treat a value.

```ts
const someValue: unknown = "hello";
const strLength = (someValue as string).length;
```

Important interview point:

- Type assertion does not change the runtime value.
- It is not the same as type conversion.

### 2.10 Generics

Generics let us write reusable and type-safe code.

```ts
function identity<T>(value: T): T {
  return value;
}
```

Generic constraint:

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

## 3. Important Advanced Concepts

### 3.1 `keyof`

Creates a union of property names from an object type.

```ts
type User = { id: number; name: string };
type UserKeys = keyof User; // "id" | "name"
```

### 3.2 `typeof`

Gets the type of an existing variable or function in a type position.

```ts
const user = { id: 1, name: "Alice" };
type UserType = typeof user;
```

### 3.3 `Record`

Creates an object type with a set of keys and one value type.

```ts
type Role = "admin" | "user" | "guest";
type PermissionMap = Record<Role, boolean>;
```

### 3.4 `extends`

`extends` is used in several ways:

- Interface or class inheritance
- Generic constraints
- Conditional types

Example:

```ts
function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}
```

### 3.5 Utility Types

Important utility types to know:

- `Partial<T>`
- `Required<T>`
- `Readonly<T>`
- `Pick<T, K>`
- `Omit<T, K>`
- `Record<K, T>`
- `Exclude<T, U>`
- `Extract<T, U>`
- `ReturnType<T>`
- `Parameters<T>`

Examples:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "id" | "name">;
type UserWithoutEmail = Omit<User, "email">;
type PartialUser = Partial<User>;
```

### 3.6 `ReturnType`

Extracts the return type of a function.

```ts
function createUser() {
  return { id: 1, name: "Alice" };
}

type CreatedUser = ReturnType<typeof createUser>;
```

### 3.7 `Parameters`

Extracts a function's parameter types as a tuple.

```ts
function login(username: string, password: string): boolean {
  return true;
}

type LoginParams = Parameters<typeof login>; // [string, string]
```

## 4. Structural Typing

TypeScript uses structural typing, which means compatibility depends on shape rather than explicit inheritance.

```ts
interface Point {
  x: number;
  y: number;
}

const p = { x: 1, y: 2, z: 3 };
const point: Point = p;
```

Interview answer:

- If two types have the same required structure, they are compatible.

## 5. Type Narrowing and Type Guards

Type narrowing reduces a broad type into a more specific one.

Common narrowing methods:

- `typeof`
- `instanceof`
- `in`
- discriminated unions
- custom type guards

Custom type guard example:

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

## 6. Common Interview Questions and Answers

### Q1. What is TypeScript?

Answer:

TypeScript is a superset of JavaScript that adds static typing and compile-time checks. It helps developers catch errors earlier, improves maintainability, and provides better tooling support.

### Q2. Why use TypeScript instead of JavaScript?

Answer:

TypeScript improves code quality by detecting many errors before runtime. It also makes large codebases easier to maintain, improves refactoring safety, and helps teams collaborate with clearer contracts.

### Q3. What is the difference between `any` and `unknown`?

Answer:

`any` disables type checking and allows any operation. `unknown` is safer because you must narrow the type before using it. In most cases, `unknown` is preferred over `any`.

### Q4. What is the difference between `type` and `interface`?

Answer:

Both can describe object shapes. `interface` is commonly used for object contracts and supports declaration merging. `type` is more flexible because it can also describe unions, intersections, tuples, and conditional types.

### Q5. What is a union type?

Answer:

A union type means a value can be one of several types. For example, `string | number` means the value can be either a string or a number.

### Q6. What is a generic?

Answer:

A generic allows us to write reusable code while preserving type safety. Instead of hardcoding a specific type, we use a type parameter such as `T`.

### Q7. What does `extends` mean in generics?

Answer:

In generics, `extends` is used as a constraint. It means the generic type must satisfy a certain structure. For example, `T extends { length: number }` means `T` must have a `length` property.

### Q8. What is `Record` used for?

Answer:

`Record<K, T>` is used to create an object type where the keys are `K` and the values are `T`. It is useful for key-value mappings, such as config objects or lookup tables.

### Q9. What is `ReturnType`?

Answer:

`ReturnType<T>` is a utility type that extracts the return type of a function type. It helps avoid duplicating types and keeps function-related types in sync.

### Q10. What is `Parameters`?

Answer:

`Parameters<T>` is a utility type that extracts the parameter types of a function and returns them as a tuple.

### Q11. What is `never` used for?

Answer:

`never` is used for values that should never happen. It is useful for exhaustive checks in unions and for functions that never successfully return.

### Q12. What is structural typing?

Answer:

Structural typing means TypeScript compares types by their shape, not by their names. If an object has the required properties, it is usually compatible.

### Q13. Does TypeScript run in the browser?

Answer:

TypeScript itself does not run directly in the browser. It is compiled into JavaScript, and that JavaScript runs in the browser or Node.js.

### Q14. Does TypeScript exist at runtime?

Answer:

No. Type information is erased during compilation, so TypeScript types do not exist at runtime.

### Q15. Can TypeScript prevent all bugs?

Answer:

No. TypeScript helps catch many type-related issues at compile time, but it cannot prevent logical bugs, runtime environment issues, or invalid external data by itself.

## 7. Practical Interview Notes

A good short summary for interviews:

> TypeScript is JavaScript with static typing. It helps catch errors earlier, improves maintainability, and makes large applications easier to refactor and scale.

What interviewers often want to hear:

- You understand the difference between compile time and runtime.
- You know when to use `interface`, `type`, generics, and utility types.
- You prefer safer patterns such as `unknown` over `any`.
- You can explain how TypeScript improves real project maintainability.

## 8. Quick Review Checklist

Make sure you can explain these clearly:

- basic types
- arrays and tuples
- `any`, `unknown`, `never`, `void`
- union and intersection types
- type aliases and interfaces
- function typing
- type inference
- type narrowing and type guards
- generics and generic constraints
- `keyof` and `typeof`
- `Record`, `Pick`, `Omit`, `Partial`
- `ReturnType` and `Parameters`
- structural typing
- compile time vs runtime

## 9. Final Tip

For interviews, do not only memorize definitions. Try to answer in this pattern:

1. Give a one-sentence definition.
2. Explain why it is useful.
3. Give a small example or real project use case.

That structure makes your answers sound clear, practical, and confident.
