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

### Q4. What is the difference between `type` and `interface`?

Answer:

Both can describe object shapes. `interface` is commonly used for object contracts and supports declaration merging. `type` is more flexible because it can also describe unions, intersections, tuples, and conditional types.

### Q6. What is a generic?

Answer:

A generic allows us to write reusable code while preserving type safety. Instead of hardcoding a specific type, we use a type parameter such as `T`.

### Q7. What does `extends` mean in generics?

Answer:

In generics, `extends` is used as a constraint. It means the generic type must satisfy a certain structure. For example, `T extends { length: number }` means `T` must have a `length` property.

### Q12. What is structural typing?

Answer:

Structural typing means TypeScript compares types by their shape, not by their names. If an object has the required properties, it is usually compatible.

### Q15. Can TypeScript prevent all bugs?

Answer:

No. TypeScript helps catch many type-related issues at compile time, but it cannot prevent logical bugs, runtime environment issues, or invalid external data by itself.
