---
title: "React Interview Q&A"
category: "frontend"
tags: ["react", "javascript", "frontend", "interview"]
language: "en"
source_type: "interview-notes"
---

# React Interview Q&A

## Knowledge Notes

This guide is written for interview practice. Answers are short, direct, and easy to say out loud.

## Part 1: Q&A by 14 Core Topic Groups

### 1. React Basics

**Q: What is React?**  
**A:** React is a JavaScript library for building user interfaces. It is component-based and uses declarative rendering.

**Q: What is the difference between `props` and `state`?**  
**A:** `props` are read-only inputs passed from a parent. `state` is internal data managed by the component.

**Q: What is one-way data flow?**  
**A:** Data flows from parent to child through `props`. This makes the app easier to understand and debug.

**Q: What is declarative programming in React?**  
**A:** We describe what the UI should look like for a given state, and React handles the DOM updates.

**Q: What is the difference between Function Component and Class Component?**  
**A:** Function Components are simpler and use Hooks. Class Components use lifecycle methods and are less common in modern React.

**Q: What is the Virtual DOM?**  
**A:** It is a lightweight in-memory representation of the real DOM. React compares versions of it to update the UI efficiently.

**Q: What is reconciliation?**  
**A:** Reconciliation is the process React uses to compare the old and new Virtual DOM and update only what changed.

**Q: Why do we need `key` in lists?**  
**A:** `key` helps React identify which items changed, were added, or were removed.

**Q: Why is using array index as `key` risky?**  
**A:** If the list order changes, React may reuse the wrong DOM nodes and cause UI bugs.

### 2. Rendering

**Q: What causes a component to re-render?**  
**A:** A component re-renders when its `state` changes, its `props` change, or its parent re-renders.

**Q: Does React re-render the whole page?**  
**A:** No. React re-renders components, then updates the real DOM as efficiently as possible.

**Q: What is the difference between render and commit?**  
**A:** Render calculates what the UI should look like. Commit applies the changes to the DOM.

**Q: What happens when a parent component re-renders?**  
**A:** By default, child components also re-render unless optimization like `React.memo` prevents it.

**Q: What is batching?**  
**A:** Batching means React groups multiple state updates into one render for better performance.

**Q: Is `setState` synchronous?**  
**A:** Not exactly. State updates are scheduled, and React may batch them, so you should not rely on immediate updates.

### 3. Hooks

**Q: What does `useState` do?**  
**A:** It lets a Function Component store and update local state.

**Q: What does `useEffect` do?**  
**A:** It handles side effects like data fetching, subscriptions, timers, and DOM interactions.

**Q: What is the difference between `useEffect` and `useLayoutEffect`?**  
**A:** `useEffect` runs after paint. `useLayoutEffect` runs before paint and is used when layout measurement must happen synchronously.

**Q: What is the dependency array in `useEffect`?**  
**A:** It tells React when the effect should re-run based on the values it depends on.

**Q: What happens if dependencies are missing?**  
**A:** The effect may read stale values and cause bugs.

**Q: What is a stale closure?**  
**A:** It happens when a function captures old `state` or `props` from an earlier render.

**Q: How does `useRef` work?**  
**A:** It stores a mutable value that persists across renders without causing a re-render.

**Q: When should we use `useMemo`?**  
**A:** Use it to memoize expensive calculations when recomputation is unnecessary.

**Q: When should we use `useCallback`?**  
**A:** Use it to memoize a function reference, usually when passing callbacks to memoized children.

**Q: What is `useContext` used for?**  
**A:** It lets components read shared data from Context without passing props through every level.

**Q: What is a custom hook?**  
**A:** A custom hook is a reusable function that contains Hook logic and shares behavior across components.

### 4. Lifecycle

**Q: What are the main lifecycle phases of a component?**  
**A:** Mounting, updating, and unmounting.

**Q: How do lifecycle concepts map to Hooks?**  
**A:** `useEffect` can handle logic that used to be split across lifecycle methods in class components.

**Q: How do you clean up side effects?**  
**A:** Return a cleanup function from `useEffect` to remove listeners, clear timers, or cancel subscriptions.

### 5. Forms

**Q: What is a controlled component?**  
**A:** A controlled component gets its form value from React state.

**Q: What is an uncontrolled component?**  
**A:** An uncontrolled component stores its value in the DOM, often accessed with `ref`.

**Q: Which is preferred and why?**  
**A:** Controlled components are usually preferred because the data flow is clearer and easier to validate.

**Q: How do you handle multiple inputs in a form?**  
**A:** Use a shared change handler and update state based on the input `name`.

### 6. State Management

**Q: When should state be local?**  
**A:** When only one component or a small part of the tree needs it.

**Q: What is lifting state up?**  
**A:** It means moving shared state to the closest common parent.

**Q: What is prop drilling?**  
**A:** It is passing props through many layers just to reach a deeply nested component.

**Q: When should you use Context?**  
**A:** Use Context for shared data like theme, language, or current user across many components.

**Q: What are the limitations of Context?**  
**A:** It can trigger broad re-renders and is not always a full replacement for dedicated state management.

**Q: What is the difference between Context, Redux, and local state?**  
**A:** Local state is component-scoped, Context shares simple global data, and Redux is better for complex global state logic.

### 7. Performance Optimization

**Q: What is `React.memo`?**  
**A:** It prevents a component from re-rendering if its props have not changed.

**Q: What is the difference between `useMemo` and `useCallback`?**  
**A:** `useMemo` memoizes a value. `useCallback` memoizes a function. useMemo can also memo a function, but it runs immediately for the first render and useCallback does not.

**Q: How do you prevent unnecessary re-renders?**  
**A:** Split components well, keep state minimal, use stable props, and apply memoization only where needed.

**Q: How do you optimize a large list?**  
**A:** Use list virtualization so only visible items are rendered.

**Q: Can overusing memoization be harmful?**  
**A:** Yes. It adds complexity and can hurt performance if used without a real bottleneck.

**Q: What tool helps investigate React performance?**  
**A:** React DevTools Profiler.

### 8. Closure and Async Behavior

**Q: What is a closure in JavaScript?**  
**A:** A closure is when a function remembers variables from its outer scope.

**Q: What is stale closure in React?**  
**A:** It is when a callback uses outdated `state` or `props` from an older render.

**Q: Why do `setTimeout` and `setInterval` often cause stale closure bugs?**  
**A:** Their callbacks run later, but they capture values from when they were created.

**Q: How do you get the latest value in an async callback?**  
**A:** Use `useRef`, correct dependencies, or a functional state update.

**Q: When should you use `useRef` instead of `state`?**  
**A:** Use `useRef` when you need a mutable value that does not trigger a re-render.

**Q: What is the difference between a snapshot and the latest value?**  
**A:** A snapshot is the value at a specific render. The latest value is the current value after later updates.

### 9. Component Communication

**Q: How do parent and child components communicate?**  
**A:** Parents pass data down with `props`, and children communicate up through callback props.

**Q: How do sibling components communicate?**  
**A:** Usually through their closest common parent.

**Q: How do you share data across deep component trees?**  
**A:** Use Context or a global state solution.

**Q: When would you use callbacks, Context, or a global store?**  
**A:** Use callbacks for local communication, Context for simple shared state, and a global store for more complex app-wide state.

### 10. Conditional Rendering and Lists

**Q: How do you do conditional rendering in React?**  
**A:** Use `if`, ternary operators, logical `&&`, or return different components.

**Q: What are common mistakes in list rendering?**  
**A:** Missing `key`, unstable `key`, and using array index when the list can change.

**Q: Why should `key` be stable and unique?**  
**A:** Stable keys help React preserve the correct component identity between renders.

### 11. Error Boundaries

**Q: What is an Error Boundary?**  
**A:** It is a React component that catches rendering errors in its child tree and shows a fallback UI.

**Q: What can Error Boundaries catch?**  
**A:** They catch errors during rendering, in lifecycle methods, and in constructors of child components.

**Q: Can Error Boundaries catch async errors?**  
**A:** No. They do not catch errors in async code, event handlers, or server-side rendering.

**Q: How do you handle API errors in React?**  
**A:** Catch them in async logic and store the error state to render a fallback message.

### 12. Scenario Questions

**Q: How do you fetch data in a component?**  
**A:** Use `useEffect` for the request and store the result in state, or use a dedicated data-fetching library.

**Q: How do you avoid duplicate API requests?**  
**A:** Centralize fetching logic, control dependencies carefully, and use caching tools when appropriate.

**Q: How do you cancel an in-flight request on unmount?**  
**A:** Use `AbortController` and abort it in the effect cleanup.

**Q: How do you implement search with debounce?**  
**A:** Delay the API call until the user stops typing for a short time.

**Q: How do you optimize a component that re-renders too often?**  
**A:** Measure first, then reduce state scope, stabilize props, and memoize only where it helps.

**Q: How do you preserve form state when switching tabs?**  
**A:** Keep the state in a parent component or a shared store instead of inside the tab content only.

**Q: How do you design a reusable modal component?**  
**A:** Make it controlled, composable, and flexible through props like `isOpen`, `onClose`, and `children`.

**Q: How do you synchronize UI with server data?**  
**A:** Treat server data and UI state separately, and revalidate when needed.

### 13. React 18

**Q: What is Concurrent Rendering?**  
**A:** It is React's ability to prepare multiple UI updates and prioritize more important ones.

**Q: What is `startTransition`?**  
**A:** It marks a state update as non-urgent, so urgent UI updates can stay responsive.

**Q: What is automatic batching?**  
**A:** React 18 batches more state updates automatically, even in async code.

**Q: What is `Suspense`?**  
**A:** It lets React show a fallback UI while waiting for a component or data to be ready.

**Q: What is hydration?**  
**A:** Hydration is when React attaches event handlers to HTML that was rendered on the server.

**Q: What is the difference between CSR and SSR?**  
**A:** CSR renders in the browser. SSR renders on the server first, which can improve first load and SEO.

### 14. Common Coding Tasks

**Q: What coding tasks are common in React interviews?**  
**A:** Counters, forms, custom hooks, stale closure fixes, list rendering, tabs, modals, and simple app features like todo lists.

**Q: Why do interviewers ask coding tasks in React?**  
**A:** They want to see whether you can apply core concepts, not just define them.

**Q: What should you focus on in a React coding interview?**  
**A:** Clear state management, correct data flow, clean component structure, and simple but correct logic.

## Part 2: Additional High-Frequency Questions

### Non-duplicate Additions

**1. How do you fix stale closure issues?**  
Use correct dependencies, `useRef`, or functional state updates.

**2. When should you use `React.memo`?**  
When a component re-renders often with the same props and the extra renders are actually expensive.

**3. What is the best way to answer React interview questions?**  
Give a short definition, explain the practical impact, and mention a common example or pitfall.

## Quick Answer Pattern

Use this structure in interviews:

1. Give a one-sentence definition.
2. Explain why it matters in real projects.
3. Add one example, tradeoff, or common pitfall.

Example:

**Q: What is `useRef`?**  
**A:** `useRef` stores a mutable value that persists across renders without causing a re-render. It is useful for DOM access and for keeping the latest value in async callbacks. A common example is fixing a stale closure bug in `setTimeout` or `setInterval`.

## Flashcards

### React Basics
**Q:** What is React?
**A:** React is a JavaScript library for building user interfaces. It is component-based and uses declarative rendering.

**Q:** What is the difference between `props` and `state`?
**A:** `props` are read-only inputs passed from a parent. `state` is internal data managed by the component.

**Q:** What is one-way data flow?
**A:** Data flows from parent to child through `props`. This makes the app easier to understand and debug.

**Q:** What is declarative programming in React?
**A:** We describe what the UI should look like for a given state, and React handles the DOM updates.

**Q:** What is the difference between Function Component and Class Component?
**A:** Function Components are simpler and use Hooks. Class Components use lifecycle methods and are less common in modern React.

**Q:** What is the Virtual DOM?
**A:** It is a lightweight in-memory representation of the real DOM. React compares versions of it to update the UI efficiently.

**Q:** What is reconciliation?
**A:** Reconciliation is the process React uses to compare the old and new Virtual DOM and update only what changed.

**Q:** Why do we need `key` in lists?
**A:** `key` helps React identify which items changed, were added, or were removed.

**Q:** Why is using array index as `key` risky?
**A:** If the list order changes, React may reuse the wrong DOM nodes and cause UI bugs.

### Rendering
**Q:** What causes a component to re-render?
**A:** A component re-renders when its `state` changes, its `props` change, or its parent re-renders.

**Q:** Does React re-render the whole page?
**A:** No. React re-renders components, then updates the real DOM as efficiently as possible.

**Q:** What is the difference between render and commit?
**A:** Render calculates what the UI should look like. Commit applies the changes to the DOM.

**Q:** What happens when a parent component re-renders?
**A:** By default, child components also re-render unless optimization like `React.memo` prevents it.

**Q:** What is batching?
**A:** Batching means React groups multiple state updates into one render for better performance.

**Q:** Is `setState` synchronous?
**A:** Not exactly. State updates are scheduled, and React may batch them, so you should not rely on immediate updates.

### Hooks
**Q:** What does `useState` do?
**A:** It lets a Function Component store and update local state.

**Q:** What does `useEffect` do?
**A:** It handles side effects like data fetching, subscriptions, timers, and DOM interactions.

**Q:** What is the difference between `useEffect` and `useLayoutEffect`?
**A:** `useEffect` runs after paint. `useLayoutEffect` runs before paint and is used when layout measurement must happen synchronously.

**Q:** What is the dependency array in `useEffect`?
**A:** It tells React when the effect should re-run based on the values it depends on.

**Q:** What happens if dependencies are missing?
**A:** The effect may read stale values and cause bugs.

**Q:** What is a stale closure?
**A:** It happens when a function captures old `state` or `props` from an earlier render.

**Q:** How does `useRef` work?
**A:** It stores a mutable value that persists across renders without causing a re-render.

**Q:** When should we use `useMemo`?
**A:** Use it to memoize expensive calculations when recomputation is unnecessary.

**Q:** When should we use `useCallback`?
**A:** Use it to memoize a function reference, usually when passing callbacks to memoized children.

**Q:** What is `useContext` used for?
**A:** It lets components read shared data from Context without passing props through every level.

**Q:** What is a custom hook?
**A:** A custom hook is a reusable function that contains Hook logic and shares behavior across components.

### Lifecycle
**Q:** What are the main lifecycle phases of a component?
**A:** Mounting, updating, and unmounting.

**Q:** How do lifecycle concepts map to Hooks?
**A:** `useEffect` can handle logic that used to be split across lifecycle methods in class components.

**Q:** How do you clean up side effects?
**A:** Return a cleanup function from `useEffect` to remove listeners, clear timers, or cancel subscriptions.

### Forms
**Q:** What is a controlled component?
**A:** A controlled component gets its form value from React state.

**Q:** What is an uncontrolled component?
**A:** An uncontrolled component stores its value in the DOM, often accessed with `ref`.

**Q:** Which is preferred and why?
**A:** Controlled components are usually preferred because the data flow is clearer and easier to validate.

**Q:** How do you handle multiple inputs in a form?
**A:** Use a shared change handler and update state based on the input `name`.

### State Management
**Q:** When should state be local?
**A:** When only one component or a small part of the tree needs it.

**Q:** What is lifting state up?
**A:** It means moving shared state to the closest common parent.

**Q:** What is prop drilling?
**A:** It is passing props through many layers just to reach a deeply nested component.

**Q:** When should you use Context?
**A:** Use Context for shared data like theme, language, or current user across many components.

**Q:** What are the limitations of Context?
**A:** It can trigger broad re-renders and is not always a full replacement for dedicated state management.

**Q:** What is the difference between Context, Redux, and local state?
**A:** Local state is component-scoped, Context shares simple global data, and Redux is better for complex global state logic.

### Performance Optimization
**Q:** What is `React.memo`?
**A:** It prevents a component from re-rendering if its props have not changed.

**Q:** What is the difference between `useMemo` and `useCallback`?
**A:** `useMemo` memoizes a value. `useCallback` memoizes a function. useMemo can also memo a function, but it runs immediately for the first render and useCallback does not.

**Q:** How do you prevent unnecessary re-renders?
**A:** Split components well, keep state minimal, use stable props, and apply memoization only where needed.

**Q:** How do you optimize a large list?
**A:** Use list virtualization so only visible items are rendered.

**Q:** Can overusing memoization be harmful?
**A:** Yes. It adds complexity and can hurt performance if used without a real bottleneck.

**Q:** What tool helps investigate React performance?
**A:** React DevTools Profiler.

### Closure and Async Behavior
**Q:** What is a closure in JavaScript?
**A:** A closure is when a function remembers variables from its outer scope.

**Q:** What is stale closure in React?
**A:** It is when a callback uses outdated `state` or `props` from an older render.

**Q:** Why do `setTimeout` and `setInterval` often cause stale closure bugs?
**A:** Their callbacks run later, but they capture values from when they were created.

**Q:** How do you get the latest value in an async callback?
**A:** Use `useRef`, correct dependencies, or a functional state update.

**Q:** When should you use `useRef` instead of `state`?
**A:** Use `useRef` when you need a mutable value that does not trigger a re-render.

**Q:** What is the difference between a snapshot and the latest value?
**A:** A snapshot is the value at a specific render. The latest value is the current value after later updates.

### Component Communication
**Q:** How do parent and child components communicate?
**A:** Parents pass data down with `props`, and children communicate up through callback props.

**Q:** How do sibling components communicate?
**A:** Usually through their closest common parent.

**Q:** How do you share data across deep component trees?
**A:** Use Context or a global state solution.

**Q:** When would you use callbacks, Context, or a global store?
**A:** Use callbacks for local communication, Context for simple shared state, and a global store for more complex app-wide state.

### Conditional Rendering and Lists
**Q:** How do you do conditional rendering in React?
**A:** Use `if`, ternary operators, logical `&&`, or return different components.

**Q:** What are common mistakes in list rendering?
**A:** Missing `key`, unstable `key`, and using array index when the list can change.

**Q:** Why should `key` be stable and unique?
**A:** Stable keys help React preserve the correct component identity between renders.

### Error Boundaries
**Q:** What is an Error Boundary?
**A:** It is a React component that catches rendering errors in its child tree and shows a fallback UI.

**Q:** What can Error Boundaries catch?
**A:** They catch errors during rendering, in lifecycle methods, and in constructors of child components.

**Q:** Can Error Boundaries catch async errors?
**A:** No. They do not catch errors in async code, event handlers, or server-side rendering.

**Q:** How do you handle API errors in React?
**A:** Catch them in async logic and store the error state to render a fallback message.

### Scenario Questions
**Q:** How do you fetch data in a component?
**A:** Use `useEffect` for the request and store the result in state, or use a dedicated data-fetching library.

**Q:** How do you avoid duplicate API requests?
**A:** Centralize fetching logic, control dependencies carefully, and use caching tools when appropriate.

**Q:** How do you cancel an in-flight request on unmount?
**A:** Use `AbortController` and abort it in the effect cleanup.

**Q:** How do you implement search with debounce?
**A:** Delay the API call until the user stops typing for a short time.

**Q:** How do you optimize a component that re-renders too often?
**A:** Measure first, then reduce state scope, stabilize props, and memoize only where it helps.

**Q:** How do you preserve form state when switching tabs?
**A:** Keep the state in a parent component or a shared store instead of inside the tab content only.

**Q:** How do you design a reusable modal component?
**A:** Make it controlled, composable, and flexible through props like `isOpen`, `onClose`, and `children`.

**Q:** How do you synchronize UI with server data?
**A:** Treat server data and UI state separately, and revalidate when needed.

### React 18
**Q:** What is Concurrent Rendering?
**A:** It is React's ability to prepare multiple UI updates and prioritize more important ones.

**Q:** What is `startTransition`?
**A:** It marks a state update as non-urgent, so urgent UI updates can stay responsive.

**Q:** What is automatic batching?
**A:** React 18 batches more state updates automatically, even in async code.

**Q:** What is `Suspense`?
**A:** It lets React show a fallback UI while waiting for a component or data to be ready.

**Q:** What is hydration?
**A:** Hydration is when React attaches event handlers to HTML that was rendered on the server.

**Q:** What is the difference between CSR and SSR?
**A:** CSR renders in the browser. SSR renders on the server first, which can improve first load and SEO.

### Common Coding Tasks
**Q:** What coding tasks are common in React interviews?
**A:** Counters, forms, custom hooks, stale closure fixes, list rendering, tabs, modals, and simple app features like todo lists.

**Q:** Why do interviewers ask coding tasks in React?
**A:** They want to see whether you can apply core concepts, not just define them.

**Q:** What should you focus on in a React coding interview?
**A:** Clear state management, correct data flow, clean component structure, and simple but correct logic.

### uick Answer Pattern
**Q:** What is `useRef`?
**A:** `useRef` stores a mutable value that persists across renders without causing a re-render. It is useful for DOM access and for keeping the latest value in async callbacks. A common example is fixing a stale closure bug in `setTimeout` or `setInterval`.
