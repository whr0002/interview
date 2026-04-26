window.QA_DATA = [
  {
    "fileName": "01_前端_React面试问答.md",
    "sourcePath": "01_前端_React面试问答.md",
    "title": "React Interview Q&A",
    "count": 81,
    "questions": [
      {
        "id": "249060131566",
        "topic": "React Basics",
        "question": "What is React?",
        "answer": "React is a JavaScript library for building user interfaces. It is component-based and uses declarative rendering."
      },
      {
        "id": "b03c3b90af3e",
        "topic": "React Basics",
        "question": "What is the difference between `props` and `state`?",
        "answer": "`props` are read-only inputs passed from a parent. `state` is internal data managed by the component."
      },
      {
        "id": "ac2fa79e9de9",
        "topic": "React Basics",
        "question": "What is one-way data flow?",
        "answer": "Data flows from parent to child through `props`. This makes the app easier to understand and debug."
      },
      {
        "id": "e59174eef0ff",
        "topic": "React Basics",
        "question": "What is declarative programming in React?",
        "answer": "We describe what the UI should look like for a given state, and React handles the DOM updates."
      },
      {
        "id": "29d7b66d013a",
        "topic": "React Basics",
        "question": "What is the difference between Function Component and Class Component?",
        "answer": "Function Components are simpler and use Hooks. Class Components use lifecycle methods and are less common in modern React."
      },
      {
        "id": "65b635f152ba",
        "topic": "React Basics",
        "question": "What is the Virtual DOM?",
        "answer": "It is a lightweight in-memory representation of the real DOM. React compares versions of it to update the UI efficiently."
      },
      {
        "id": "baa8f24bda6b",
        "topic": "React Basics",
        "question": "What is reconciliation?",
        "answer": "Reconciliation is the process React uses to compare the old and new Virtual DOM and update only what changed."
      },
      {
        "id": "b2b46e01bd8d",
        "topic": "React Basics",
        "question": "Why do we need `key` in lists?",
        "answer": "`key` helps React identify which items changed, were added, or were removed."
      },
      {
        "id": "7fb10742bc6d",
        "topic": "React Basics",
        "question": "Why is using array index as `key` risky?",
        "answer": "If the list order changes, React may reuse the wrong DOM nodes and cause UI bugs."
      },
      {
        "id": "cb048d7c2e5e",
        "topic": "Rendering",
        "question": "What causes a component to re-render?",
        "answer": "A component re-renders when its `state` changes, its `props` change, or its parent re-renders."
      },
      {
        "id": "e92bfad3402e",
        "topic": "Rendering",
        "question": "Does React re-render the whole page?",
        "answer": "No. React re-renders components, then updates the real DOM as efficiently as possible."
      },
      {
        "id": "f997120627ab",
        "topic": "Rendering",
        "question": "What is the difference between render and commit?",
        "answer": "Render calculates what the UI should look like. Commit applies the changes to the DOM."
      },
      {
        "id": "64f912676fe6",
        "topic": "Rendering",
        "question": "What happens when a parent component re-renders?",
        "answer": "By default, child components also re-render unless optimization like `React.memo` prevents it."
      },
      {
        "id": "6a091c29ee1c",
        "topic": "Rendering",
        "question": "What is batching?",
        "answer": "Batching means React groups multiple state updates into one render for better performance."
      },
      {
        "id": "aec54bceed8e",
        "topic": "Rendering",
        "question": "Is `setState` synchronous?",
        "answer": "Not exactly. State updates are scheduled, and React may batch them, so you should not rely on immediate updates."
      },
      {
        "id": "b90707a56259",
        "topic": "Hooks",
        "question": "What does `useState` do?",
        "answer": "It lets a Function Component store and update local state."
      },
      {
        "id": "c04cb0041926",
        "topic": "Hooks",
        "question": "What does `useEffect` do?",
        "answer": "It handles side effects like data fetching, subscriptions, timers, and DOM interactions."
      },
      {
        "id": "82e9e7a39a4e",
        "topic": "Hooks",
        "question": "What is the difference between `useEffect` and `useLayoutEffect`?",
        "answer": "`useEffect` runs after paint. `useLayoutEffect` runs before paint and is used when layout measurement must happen synchronously."
      },
      {
        "id": "9fa46f722c55",
        "topic": "Hooks",
        "question": "What is the dependency array in `useEffect`?",
        "answer": "It tells React when the effect should re-run based on the values it depends on."
      },
      {
        "id": "e06751bb6f58",
        "topic": "Hooks",
        "question": "What happens if dependencies are missing?",
        "answer": "The effect may read stale values and cause bugs."
      },
      {
        "id": "61f3dc4adb9d",
        "topic": "Hooks",
        "question": "What is a stale closure?",
        "answer": "It happens when a function captures old `state` or `props` from an earlier render."
      },
      {
        "id": "74efccc31b19",
        "topic": "Hooks",
        "question": "How does `useRef` work?",
        "answer": "It stores a mutable value that persists across renders without causing a re-render."
      },
      {
        "id": "88fd0b2f2f4c",
        "topic": "Hooks",
        "question": "When should we use `useMemo`?",
        "answer": "Use it to memoize expensive calculations when recomputation is unnecessary."
      },
      {
        "id": "cc9428d85e88",
        "topic": "Hooks",
        "question": "When should we use `useCallback`?",
        "answer": "Use it to memoize a function reference, usually when passing callbacks to memoized children."
      },
      {
        "id": "3d02b3035474",
        "topic": "Hooks",
        "question": "What is `useContext` used for?",
        "answer": "It lets components read shared data from Context without passing props through every level."
      },
      {
        "id": "85300b23ac90",
        "topic": "Hooks",
        "question": "What is a custom hook?",
        "answer": "A custom hook is a reusable function that contains Hook logic and shares behavior across components."
      },
      {
        "id": "b1a80f79ca80",
        "topic": "Lifecycle",
        "question": "What are the main lifecycle phases of a component?",
        "answer": "Mounting, updating, and unmounting."
      },
      {
        "id": "86010241596b",
        "topic": "Lifecycle",
        "question": "How do lifecycle concepts map to Hooks?",
        "answer": "`useEffect` can handle logic that used to be split across lifecycle methods in class components."
      },
      {
        "id": "420f99b98251",
        "topic": "Lifecycle",
        "question": "How do you clean up side effects?",
        "answer": "Return a cleanup function from `useEffect` to remove listeners, clear timers, or cancel subscriptions."
      },
      {
        "id": "79d00db3c051",
        "topic": "Forms",
        "question": "What is a controlled component?",
        "answer": "A controlled component gets its form value from React state."
      },
      {
        "id": "ab8219f892e3",
        "topic": "Forms",
        "question": "What is an uncontrolled component?",
        "answer": "An uncontrolled component stores its value in the DOM, often accessed with `ref`."
      },
      {
        "id": "6a201a63be3b",
        "topic": "Forms",
        "question": "Which is preferred and why?",
        "answer": "Controlled components are usually preferred because the data flow is clearer and easier to validate."
      },
      {
        "id": "05b4d2c3d638",
        "topic": "Forms",
        "question": "How do you handle multiple inputs in a form?",
        "answer": "Use a shared change handler and update state based on the input `name`."
      },
      {
        "id": "5849864b428d",
        "topic": "State Management",
        "question": "When should state be local?",
        "answer": "When only one component or a small part of the tree needs it."
      },
      {
        "id": "a67102a4401b",
        "topic": "State Management",
        "question": "What is lifting state up?",
        "answer": "It means moving shared state to the closest common parent."
      },
      {
        "id": "e3e88611eba6",
        "topic": "State Management",
        "question": "What is prop drilling?",
        "answer": "It is passing props through many layers just to reach a deeply nested component."
      },
      {
        "id": "b83e383c20c1",
        "topic": "State Management",
        "question": "When should you use Context?",
        "answer": "Use Context for shared data like theme, language, or current user across many components."
      },
      {
        "id": "dade047f3341",
        "topic": "State Management",
        "question": "What are the limitations of Context?",
        "answer": "It can trigger broad re-renders and is not always a full replacement for dedicated state management."
      },
      {
        "id": "ef4d03b418ca",
        "topic": "State Management",
        "question": "What is the difference between Context, Redux, and local state?",
        "answer": "Local state is component-scoped, Context shares simple global data, and Redux is better for complex global state logic."
      },
      {
        "id": "f4f8ac53aeb0",
        "topic": "Performance Optimization",
        "question": "What is `React.memo`?",
        "answer": "It prevents a component from re-rendering if its props have not changed."
      },
      {
        "id": "dd8f0044b2c5",
        "topic": "Performance Optimization",
        "question": "What is the difference between `useMemo` and `useCallback`?",
        "answer": "`useMemo` memoizes a value. `useCallback` memoizes a function. useMemo can also memo a function, but it runs immediately for the first render and useCallback does not."
      },
      {
        "id": "ecde7fd2211b",
        "topic": "Performance Optimization",
        "question": "How do you prevent unnecessary re-renders?",
        "answer": "Split components well, keep state minimal, use stable props, and apply memoization only where needed."
      },
      {
        "id": "43b37eebab48",
        "topic": "Performance Optimization",
        "question": "How do you optimize a large list?",
        "answer": "Use list virtualization so only visible items are rendered."
      },
      {
        "id": "5180b778b988",
        "topic": "Performance Optimization",
        "question": "Can overusing memoization be harmful?",
        "answer": "Yes. It adds complexity and can hurt performance if used without a real bottleneck."
      },
      {
        "id": "5f815460705f",
        "topic": "Performance Optimization",
        "question": "What tool helps investigate React performance?",
        "answer": "React DevTools Profiler."
      },
      {
        "id": "9686d0831579",
        "topic": "Closure and Async Behavior",
        "question": "What is a closure in JavaScript?",
        "answer": "A closure is when a function remembers variables from its outer scope."
      },
      {
        "id": "b0b2588333b4",
        "topic": "Closure and Async Behavior",
        "question": "What is stale closure in React?",
        "answer": "It is when a callback uses outdated `state` or `props` from an older render."
      },
      {
        "id": "3e19ace38ffa",
        "topic": "Closure and Async Behavior",
        "question": "Why do `setTimeout` and `setInterval` often cause stale closure bugs?",
        "answer": "Their callbacks run later, but they capture values from when they were created."
      },
      {
        "id": "005c7d178b22",
        "topic": "Closure and Async Behavior",
        "question": "How do you get the latest value in an async callback?",
        "answer": "Use `useRef`, correct dependencies, or a functional state update."
      },
      {
        "id": "8161a2d59f34",
        "topic": "Closure and Async Behavior",
        "question": "When should you use `useRef` instead of `state`?",
        "answer": "Use `useRef` when you need a mutable value that does not trigger a re-render."
      },
      {
        "id": "7e3262a5c985",
        "topic": "Closure and Async Behavior",
        "question": "What is the difference between a snapshot and the latest value?",
        "answer": "A snapshot is the value at a specific render. The latest value is the current value after later updates."
      },
      {
        "id": "ce1ad723e29d",
        "topic": "Component Communication",
        "question": "How do parent and child components communicate?",
        "answer": "Parents pass data down with `props`, and children communicate up through callback props."
      },
      {
        "id": "28fa26d9dd37",
        "topic": "Component Communication",
        "question": "How do sibling components communicate?",
        "answer": "Usually through their closest common parent."
      },
      {
        "id": "604e2934d94b",
        "topic": "Component Communication",
        "question": "How do you share data across deep component trees?",
        "answer": "Use Context or a global state solution."
      },
      {
        "id": "f481e1a2d605",
        "topic": "Component Communication",
        "question": "When would you use callbacks, Context, or a global store?",
        "answer": "Use callbacks for local communication, Context for simple shared state, and a global store for more complex app-wide state."
      },
      {
        "id": "e5b3788558cf",
        "topic": "Conditional Rendering and Lists",
        "question": "How do you do conditional rendering in React?",
        "answer": "Use `if`, ternary operators, logical `&&`, or return different components."
      },
      {
        "id": "4bf017506fa2",
        "topic": "Conditional Rendering and Lists",
        "question": "What are common mistakes in list rendering?",
        "answer": "Missing `key`, unstable `key`, and using array index when the list can change."
      },
      {
        "id": "f30119c9b2fb",
        "topic": "Conditional Rendering and Lists",
        "question": "Why should `key` be stable and unique?",
        "answer": "Stable keys help React preserve the correct component identity between renders."
      },
      {
        "id": "18bba66d9783",
        "topic": "Error Boundaries",
        "question": "What is an Error Boundary?",
        "answer": "It is a React component that catches rendering errors in its child tree and shows a fallback UI."
      },
      {
        "id": "2357cd1af3e3",
        "topic": "Error Boundaries",
        "question": "What can Error Boundaries catch?",
        "answer": "They catch errors during rendering, in lifecycle methods, and in constructors of child components."
      },
      {
        "id": "f507cab9a6f5",
        "topic": "Error Boundaries",
        "question": "Can Error Boundaries catch async errors?",
        "answer": "No. They do not catch errors in async code, event handlers, or server-side rendering."
      },
      {
        "id": "e1f1dde05199",
        "topic": "Error Boundaries",
        "question": "How do you handle API errors in React?",
        "answer": "Catch them in async logic and store the error state to render a fallback message."
      },
      {
        "id": "031450ee98ae",
        "topic": "Scenario Questions",
        "question": "How do you fetch data in a component?",
        "answer": "Use `useEffect` for the request and store the result in state, or use a dedicated data-fetching library."
      },
      {
        "id": "0dcb6e0af7ee",
        "topic": "Scenario Questions",
        "question": "How do you avoid duplicate API requests?",
        "answer": "Centralize fetching logic, control dependencies carefully, and use caching tools when appropriate."
      },
      {
        "id": "05460ee8cded",
        "topic": "Scenario Questions",
        "question": "How do you cancel an in-flight request on unmount?",
        "answer": "Use `AbortController` and abort it in the effect cleanup."
      },
      {
        "id": "6fb1547cfcfc",
        "topic": "Scenario Questions",
        "question": "How do you implement search with debounce?",
        "answer": "Delay the API call until the user stops typing for a short time."
      },
      {
        "id": "8ff05ea909b2",
        "topic": "Scenario Questions",
        "question": "How do you optimize a component that re-renders too often?",
        "answer": "Measure first, then reduce state scope, stabilize props, and memoize only where it helps."
      },
      {
        "id": "a967647e897c",
        "topic": "Scenario Questions",
        "question": "How do you preserve form state when switching tabs?",
        "answer": "Keep the state in a parent component or a shared store instead of inside the tab content only."
      },
      {
        "id": "fe38eb00d049",
        "topic": "Scenario Questions",
        "question": "How do you design a reusable modal component?",
        "answer": "Make it controlled, composable, and flexible through props like `isOpen`, `onClose`, and `children`."
      },
      {
        "id": "c1a8d4474e3c",
        "topic": "Scenario Questions",
        "question": "How do you synchronize UI with server data?",
        "answer": "Treat server data and UI state separately, and revalidate when needed."
      },
      {
        "id": "6c2a314f2d58",
        "topic": "React 18",
        "question": "What is Concurrent Rendering?",
        "answer": "It is React's ability to prepare multiple UI updates and prioritize more important ones."
      },
      {
        "id": "421d71ef18e2",
        "topic": "React 18",
        "question": "What is `startTransition`?",
        "answer": "It marks a state update as non-urgent, so urgent UI updates can stay responsive."
      },
      {
        "id": "330a79970400",
        "topic": "React 18",
        "question": "What is automatic batching?",
        "answer": "React 18 batches more state updates automatically, even in async code."
      },
      {
        "id": "295340d78106",
        "topic": "React 18",
        "question": "What is `Suspense`?",
        "answer": "It lets React show a fallback UI while waiting for a component or data to be ready."
      },
      {
        "id": "245d4400ce91",
        "topic": "React 18",
        "question": "What is hydration?",
        "answer": "Hydration is when React attaches event handlers to HTML that was rendered on the server."
      },
      {
        "id": "64384e6599c8",
        "topic": "React 18",
        "question": "What is the difference between CSR and SSR?",
        "answer": "CSR renders in the browser. SSR renders on the server first, which can improve first load and SEO."
      },
      {
        "id": "869332a994c3",
        "topic": "Common Coding Tasks",
        "question": "What coding tasks are common in React interviews?",
        "answer": "Counters, forms, custom hooks, stale closure fixes, list rendering, tabs, modals, and simple app features like todo lists."
      },
      {
        "id": "87910cc1b377",
        "topic": "Common Coding Tasks",
        "question": "Why do interviewers ask coding tasks in React?",
        "answer": "They want to see whether you can apply core concepts, not just define them."
      },
      {
        "id": "ceeb90bfb63b",
        "topic": "Common Coding Tasks",
        "question": "What should you focus on in a React coding interview?",
        "answer": "Clear state management, correct data flow, clean component structure, and simple but correct logic."
      },
      {
        "id": "339551bbf4b8",
        "topic": "uick Answer Pattern",
        "question": "What is `useRef`?",
        "answer": "`useRef` stores a mutable value that persists across renders without causing a re-render. It is useful for DOM access and for keeping the latest value in async callbacks. A common example is fixing a stale closure bug in `setTimeout` or `setInterval`."
      },
      {
        "id": "02a0b8551daa",
        "topic": "Part 1: Q&A by 14 Core Topic Groups",
        "question": "Common Coding Tasks",
        "answer": "**Q: What coding tasks are common in React interviews?**  \nA: Counters, forms, custom hooks, stale closure fixes, list rendering, tabs, modals, and simple app features like todo lists.\n\n**Q: Why do interviewers ask coding tasks in React?**  \nA: They want to see whether you can apply core concepts, not just define them.\n\n**Q: What should you focus on in a React coding interview?**  \nA: Clear state management, correct data flow, clean component structure, and simple but correct logic."
      }
    ]
  },
  {
    "fileName": "02_前端_TypeScript复习.md",
    "sourcePath": "02_前端_TypeScript复习.md",
    "title": "TypeScript Interview Review",
    "count": 16,
    "questions": [
      {
        "id": "7c3d9c80d9e4",
        "topic": "What is TypeScript?",
        "question": "What is TypeScript?",
        "answer": "TypeScript is a superset of JavaScript that adds static typing and compile-time checks. It helps developers catch errors earlier, improves maintainability, and provides better tooling support."
      },
      {
        "id": "0b3475f8976a",
        "topic": "Why use TypeScript instead of JavaScript?",
        "question": "Why use TypeScript instead of JavaScript?",
        "answer": "TypeScript improves code quality by detecting many errors before runtime. It also makes large codebases easier to maintain, improves refactoring safety, and helps teams collaborate with clearer contracts."
      },
      {
        "id": "8d3e4381f74d",
        "topic": "What is the difference between `any` and `unknown`?",
        "question": "What is the difference between `any` and `unknown`?",
        "answer": "`any` disables type checking and allows any operation. `unknown` is safer because you must narrow the type before using it. In most cases, `unknown` is preferred over `any`."
      },
      {
        "id": "1b71b5425173",
        "topic": "What is the difference between `type` and `interface`?",
        "question": "What is the difference between `type` and `interface`?",
        "answer": "Both can describe object shapes. `interface` is commonly used for object contracts and supports declaration merging. `type` is more flexible because it can also describe unions, intersections, tuples, and conditional types."
      },
      {
        "id": "b34e8f2ca067",
        "topic": "What is a union type?",
        "question": "What is a union type?",
        "answer": "A union type means a value can be one of several types. For example, `string | number` means the value can be either a string or a number."
      },
      {
        "id": "519507b12294",
        "topic": "What is a generic?",
        "question": "What is a generic?",
        "answer": "A generic allows us to write reusable code while preserving type safety. Instead of hardcoding a specific type, we use a type parameter such as `T`."
      },
      {
        "id": "0249ad4072de",
        "topic": "What does `extends` mean in generics?",
        "question": "What does `extends` mean in generics?",
        "answer": "In generics, `extends` is used as a constraint. It means the generic type must satisfy a certain structure. For example, `T extends { length: number }` means `T` must have a `length` property."
      },
      {
        "id": "3b90f3924d82",
        "topic": "What is `Record` used for?",
        "question": "What is `Record` used for?",
        "answer": "`Record<K, T>` is used to create an object type where the keys are `K` and the values are `T`. It is useful for key-value mappings, such as config objects or lookup tables."
      },
      {
        "id": "d12fb2dd2543",
        "topic": "What is `ReturnType`?",
        "question": "What is `ReturnType`?",
        "answer": "`ReturnType<T>` is a utility type that extracts the return type of a function type. It helps avoid duplicating types and keeps function-related types in sync."
      },
      {
        "id": "0a5a23e3fb28",
        "topic": "What is `Parameters`?",
        "question": "What is `Parameters`?",
        "answer": "`Parameters<T>` is a utility type that extracts the parameter types of a function and returns them as a tuple."
      },
      {
        "id": "a8142c88eb5c",
        "topic": "What is `never` used for?",
        "question": "What is `never` used for?",
        "answer": "`never` is used for values that should never happen. It is useful for exhaustive checks in unions and for functions that never successfully return."
      },
      {
        "id": "54723adea9ee",
        "topic": "What is structural typing?",
        "question": "What is structural typing?",
        "answer": "Structural typing means TypeScript compares types by their shape, not by their names. If an object has the required properties, it is usually compatible."
      },
      {
        "id": "326677fe936e",
        "topic": "Does TypeScript run in the browser?",
        "question": "Does TypeScript run in the browser?",
        "answer": "TypeScript itself does not run directly in the browser. It is compiled into JavaScript, and that JavaScript runs in the browser or Node.js."
      },
      {
        "id": "5744490f3cd8",
        "topic": "Does TypeScript exist at runtime?",
        "question": "Does TypeScript exist at runtime?",
        "answer": "No. Type information is erased during compilation, so TypeScript types do not exist at runtime."
      },
      {
        "id": "6e97d7467527",
        "topic": "Can TypeScript prevent all bugs?",
        "question": "Can TypeScript prevent all bugs?",
        "answer": "No. TypeScript helps catch many type-related issues at compile time, but it cannot prevent logical bugs, runtime environment issues, or invalid external data by itself."
      },
      {
        "id": "4e990224dc9b",
        "topic": "Interview Practice",
        "question": "What TypeScript Is",
        "answer": "TypeScript is a superset of JavaScript that adds static typing, compile-time checks, and better tooling support.\n\nKey points:\n\n- It helps catch errors before runtime.\n- It improves maintainability in medium and large codebases.\n- It provides better autocomplete, navigation, and refactoring support.\n- It compiles to plain JavaScript, so it does not change the runtime nature of JavaScript."
      }
    ]
  },
  {
    "fileName": "03_Backend_Nodejs_Express_Interview_Review.md",
    "sourcePath": "03_Backend_Nodejs_Express_Interview_Review.md",
    "title": "Node.js + Express Interview Review",
    "count": 23,
    "questions": [
      {
        "id": "08b449aa38f7",
        "topic": "Interview Practice",
        "question": "What Are Node.js and Express?",
        "answer": "- **Node.js**: A JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to run on the server side.\n- **Express**: A lightweight and commonly used web framework for Node.js. It is used to quickly build web services and RESTful APIs.\n\nInterview answer:\nNode.js provides the runtime environment, while Express provides the web development layer. Node.js handles lower-level capabilities such as the event loop, module system, file operations, and networking. Express builds on top of Node.js and provides common features such as routing, middleware, and request/response handling."
      },
      {
        "id": "08780e53f194",
        "topic": "Core Express Concepts",
        "question": "What Is Middleware?",
        "answer": "Middleware is essentially a function:\n\n```js\n(req, res, next) => {}\n```\n\nIt can be used to:\n\n- Process requests\n- Modify `req` or `res`\n- Run validation, authentication, or logging\n- Call `next()` to pass control to the next middleware\n- Send a response directly and end the request\n\nCommon middleware types:\n\n- Application-level middleware\n- Router-level middleware\n- Error-handling middleware\n- Built-in middleware such as `express.json()` and `express.urlencoded()`\n\nInterview answer:\nThe core of Express is its middleware mechanism. A request passes through multiple middleware functions in order. Each layer handles a specific responsibility, such as logging, authentication, parameter validation, or error handling. This makes the code clearer and easier to reuse."
      },
      {
        "id": "28e17626f034",
        "topic": "Core Express Concepts",
        "question": "Difference Between `app.use()` and `app.get()` / `app.post()`",
        "answer": "- `app.use()` is usually used to mount middleware and can match multiple HTTP methods by default.\n- `app.get()` / `app.post()` are used to define routes for specific HTTP methods."
      },
      {
        "id": "b86f29084aff",
        "topic": "RESTful API Basics",
        "question": "Common HTTP Methods",
        "answer": "- `GET`: retrieve resources\n- `POST`: create resources\n- `PUT`: fully update resources\n- `PATCH`: partially update resources\n- `DELETE`: delete resources"
      },
      {
        "id": "9749a4b1ae78",
        "topic": "RESTful API Basics",
        "question": "Common Status Codes",
        "answer": "- `200 OK`\n- `201 Created`\n- `204 No Content`\n- `400 Bad Request`\n- `401 Unauthorized`\n- `403 Forbidden`\n- `404 Not Found`\n- `500 Internal Server Error`\n\nInterview answer:\nWhen designing APIs, I try to follow RESTful conventions. I use nouns to represent resources, HTTP methods to represent actions, and appropriate status codes in responses. This makes the API easier for front-end and back-end teams to collaborate on and maintain."
      },
      {
        "id": "59b402d22c4c",
        "topic": "Common Status Codes",
        "question": "How to Explain Express Project Structure",
        "answer": "Common folder structure:\n\n- `routes/`: defines routes\n- `controllers/`: handles requests and responses\n- `services/`: contains business logic\n- `models/`: contains data models\n- `middlewares/`: contains middleware\n- `utils/`: contains utility functions\n- `app.js` / `server.js`: entry file\n\nInterview answer:\nI usually use a layered structure. The route layer handles URL mapping, the controller layer receives requests and returns responses, the service layer handles business logic, and the model layer handles data access. This keeps responsibilities clear and makes the project easier to test and maintain."
      },
      {
        "id": "dedfead500e4",
        "topic": "Common Authentication Topics",
        "question": "Difference Between Session and JWT",
        "answer": "#### Session\n\n- Session information is stored on the server side.\n- The client usually only stores a session id.\n- It is suitable for traditional server-rendered applications.\n\n#### JWT\n\n- User information or claims are packaged inside a token.\n- The server does not necessarily store session state.\n- It is suitable for separated front-end/back-end systems and mobile applications.\n\nInterview answer:\nFor front-end/back-end separated applications, I usually consider JWT first because it fits stateless authentication better. For traditional web applications, Session is also common, especially when the server needs to manage user sessions centrally."
      },
      {
        "id": "0d602696dbbf",
        "topic": "Security Topics",
        "question": "How to Discuss Performance Optimization",
        "answer": "Common optimization ideas:\n\n- Avoid blocking the event loop\n- Use caching, such as Redis\n- Use gzip compression\n- Use database connection pooling\n- Add logging and monitoring\n- Use Nginx for reverse proxy and load balancing\n- Use PM2 or cluster to improve resource utilization\n- Move CPU-intensive tasks to independent services or Worker Threads\n\nInterview answer:\nNode.js is well suited for high-concurrency I/O scenarios. If I encounter CPU-intensive tasks, I would consider splitting them into independent services, consuming them through a message queue, or processing them with Worker Threads to avoid blocking the main thread."
      },
      {
        "id": "46bf2f59904f",
        "topic": "High-Frequency Interview Questions",
        "question": "Why Is Node.js Fast?",
        "answer": "**Reference answer:**\nNode.js is fast mainly because of its event-driven architecture and non-blocking I/O model. When handling many I/O requests, it does not need to create one thread for each request. Instead, it coordinates tasks through the event loop, which reduces thread-switching overhead and provides strong concurrency capability."
      },
      {
        "id": "b600624c25ac",
        "topic": "High-Frequency Interview Questions",
        "question": "Node.js Is Single-Threaded. How Can It Support High Concurrency?",
        "answer": "**Reference answer:**\nThe JavaScript execution part of Node.js is single-threaded, but many I/O operations are not completed synchronously on the main thread. They are delegated to the underlying system or thread pool. The main thread mainly receives the results and executes callbacks, so Node.js can support high concurrency on top of a single-threaded JavaScript model."
      },
      {
        "id": "430b4fc70d36",
        "topic": "High-Frequency Interview Questions",
        "question": "What Does `next()` Do in Express?",
        "answer": "**Reference answer:**\n`next()` passes the current request to the next middleware or route handler. If `next()` is not called and no response is sent, the request may remain stuck."
      },
      {
        "id": "5d444013ebe1",
        "topic": "High-Frequency Interview Questions",
        "question": "What Is the Execution Order of Middleware?",
        "answer": "**Reference answer:**\nExpress middleware usually executes in the order it is registered. After a request enters the application, it passes through the matching middleware functions one by one. Therefore, middleware order is very important. For example, logging, authentication, and parameter parsing are usually placed near the beginning."
      },
      {
        "id": "cf462b3e6467",
        "topic": "High-Frequency Interview Questions",
        "question": "What Is the Difference Between `req.params`, `req.query`, and `req.body`?",
        "answer": "**Reference answer:**\n`req.params` is used to get route parameters, `req.query` is used to get URL query parameters, and `req.body` is used to get data from the request body, such as JSON submitted through POST. They correspond to different data sources."
      },
      {
        "id": "b68425bbd83b",
        "topic": "High-Frequency Interview Questions",
        "question": "Difference Between GET and POST",
        "answer": "**Reference answer:**\nGET is usually used to query data, and parameters are usually placed in the URL. POST is usually used to submit data, and the data is usually placed in the request body. GET emphasizes idempotent querying, while POST is more commonly used for creation or submission operations."
      },
      {
        "id": "23ed582371e7",
        "topic": "High-Frequency Interview Questions",
        "question": "Difference Between PUT and PATCH",
        "answer": "**Reference answer:**\nPUT usually represents a full update of a resource, while PATCH represents a partial update. In real projects, if only one field needs to be changed, PATCH is usually more appropriate."
      },
      {
        "id": "9a18e056f389",
        "topic": "High-Frequency Interview Questions",
        "question": "What Is RESTful?",
        "answer": "**Reference answer:**\nRESTful is an API design style. Its core idea is to model data as resources, identify resources through consistent URLs, and use HTTP methods to represent operations on those resources. For example, GET retrieves data, POST creates data, PUT updates data, and DELETE removes data."
      },
      {
        "id": "defc72b45080",
        "topic": "High-Frequency Interview Questions",
        "question": "Why Do We Use Layered Project Structure?",
        "answer": "**Reference answer:**\nLayering mainly reduces coupling and separates responsibilities between routing, business logic, and data access. This makes the code clearer and easier to test, extend, and maintain."
      },
      {
        "id": "a3ae14968478",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Choose Between Session and JWT?",
        "answer": "**Reference answer:**\nFor traditional server-rendered applications, Session is common. For front-end/back-end separated systems, mobile applications, or distributed systems, JWT is more common. The final choice depends on the system architecture, scalability requirements, and security strategy."
      },
      {
        "id": "f9fc68d5e742",
        "topic": "High-Frequency Interview Questions",
        "question": "What Are the Disadvantages of JWT?",
        "answer": "**Reference answer:**\nThe main issue with JWT is that it is usually difficult to invalidate immediately after it has been issued. This makes requirements such as forced logout or immediate permission change more complex. In practice, it is often combined with a blacklist mechanism, or with short-lived access tokens plus refresh tokens."
      },
      {
        "id": "ce33da598cc9",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Handle Global Errors in Express?",
        "answer": "**Reference answer:**\nI usually register a global error-handling middleware at the end of the application to handle exception responses centrally. For asynchronous logic, I use `try/catch` with `next(err)`, or wrap route handlers with an asyncHandler to capture errors consistently."
      },
      {
        "id": "d10bc80286d0",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Understand Cross-Origin Requests?",
        "answer": "**Reference answer:**\nCross-origin issues come from the browser's same-origin policy. If the front end and back end use different domains, ports, or protocols, cross-origin restrictions may occur. The server usually solves this by configuring CORS to allow access from specified origins."
      },
      {
        "id": "ab92225f2fc7",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Validate Request Parameters?",
        "answer": "**Reference answer:**\nParameter validation is usually placed in the middleware layer. The request parameters are validated before entering the business logic. This prevents invalid data from entering the system and makes it easier to return consistent error messages. Common tools include `joi` and `express-validator`."
      },
      {
        "id": "e18a4978278e",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Improve the Stability of a Node.js Service?",
        "answer": "**Reference answer:**\nI would improve stability through unified error handling, logging and monitoring, rate limiting, process management, health checks, caching, reasonable timeout settings, and avoiding event loop blocking. For critical services, I would also use load balancing and multi-instance deployment."
      }
    ]
  },
  {
    "fileName": "05_DotNet_Core_English.md",
    "sourcePath": "05_DotNet_Core_English.md",
    "title": "05_DotNet_Core_English",
    "count": 36,
    "questions": [
      {
        "id": "bb166cedb7db",
        "topic": "Interview Practice",
        "question": "What is .NET Core?",
        "answer": "- `.NET Core` is Microsoft's cross-platform, open-source, high-performance implementation of .NET.\n- It includes the runtime, base class libraries, and the infrastructure needed to build modern applications.\n- It is commonly used for Web APIs, microservices, console apps, and backend services.\n\nIn one sentence:\n.NET Core is the modern .NET platform, emphasizing cross-platform support, high performance, and cloud-native development."
      },
      {
        "id": "c7c4d039e2ba",
        "topic": "What is .NET Core?",
        "question": "Difference Between .NET Framework and .NET Core",
        "answer": "- `.NET Framework` mainly runs on Windows.\n- `.NET Core` supports Windows, Linux, and macOS.\n- `.NET Core` is better suited for Docker, Kubernetes, and microservices.\n- `.NET Core` is open source and generally has better performance.\n- Later, the ecosystem was unified into `.NET 5+`.\n\nIn one sentence:\nOlder projects often use .NET Framework, while new projects usually prioritize modern .NET."
      },
      {
        "id": "1644eddf1756",
        "topic": "Difference Between .NET Framework and .NET Core",
        "question": "Why Is .NET Core Popular?",
        "answer": "- Cross-platform\n- Open source\n- High performance\n- Better for containerized deployment\n- Better for microservice architecture\n- Built-in dependency injection, configuration, and logging"
      },
      {
        "id": "069bb257a121",
        "topic": "Why Is .NET Core Popular?",
        "question": "What Are CoreCLR, JIT, and GC?",
        "answer": "**CoreCLR**\n\n- The core runtime of `.NET Core`\n\n**JIT**\n\n- Just-In-Time compiler\n- Compiles IL into machine code for execution\n\n**GC**\n\n- Garbage Collector\n- Responsible for managed memory cleanup\n\nIn one sentence:\nCoreCLR runs the program, JIT compiles it for execution, and GC handles memory reclamation."
      },
      {
        "id": "21778e68913b",
        "topic": "What Are CoreCLR, JIT, and GC?",
        "question": "What Are Managed Code and the Managed Runtime?",
        "answer": "- Managed code runs inside the `.NET` runtime.\n- The runtime is responsible for memory management, exception handling, type safety, and garbage collection.\n- This is also one of the key reasons .NET development is so productive."
      },
      {
        "id": "07130a6ec393",
        "topic": "What Are Managed Code and the Managed Runtime?",
        "question": "What Is ASP.NET Core?",
        "answer": "- A web development framework based on `.NET Core`\n- It can be used to build:\n  - Web APIs\n  - MVC websites\n  - Razor Pages\n  - Microservices\n\nFeatures:\n\n- High performance\n- Cross-platform\n- Clear middleware pipeline\n- Built-in DI, logging, and configuration"
      },
      {
        "id": "6f8ce90e4d53",
        "topic": "What Is ASP.NET Core?",
        "question": "What Is the ASP.NET Core Request Pipeline?",
        "answer": "- After a request enters the application, it passes through multiple **Middleware** components in order.\n- Each middleware can:\n  - Process the request\n  - Call the next middleware\n  - Continue processing when the response comes back\n\nIn one sentence:\nASP.NET Core is based on a middleware pipeline, and requests flow through it in registration order."
      },
      {
        "id": "fd6a65ad526e",
        "topic": "What Is the ASP.NET Core Request Pipeline?",
        "question": "What Are Common Middleware Components?",
        "answer": "- Exception handling\n- Routing\n- Static files\n- CORS\n- Authentication\n- Authorization\n- Logging\n\nHigh-frequency interview point:\nMiddleware order is very important, especially for routing, authentication, and authorization."
      },
      {
        "id": "7a127efca184",
        "topic": "What Are Common Middleware Components?",
        "question": "What Is Dependency Injection (DI)?",
        "answer": "- Hand over object creation and dependency management to a container.\n- Reduce coupling between modules.\n- Improve testability and maintainability.\n\nASP.NET Core has a built-in DI container."
      },
      {
        "id": "2c0bdbf3e7aa",
        "topic": "What Is Dependency Injection (DI)?",
        "question": "The Three DI Lifetimes",
        "answer": "- `Transient`: a new instance is created every time it is resolved\n- `Scoped`: one shared instance per request\n- `Singleton`: only one instance for the entire application lifetime\n\nCommon scenarios:\n\n- `Transient`: lightweight stateless services\n- `Scoped`: request-level services, `DbContext`\n- `Singleton`: globally shared configuration or thread-safe services"
      },
      {
        "id": "6c129c0ad11b",
        "topic": "The Three DI Lifetimes",
        "question": "Why Is `DbContext` Usually Registered as `Scoped`?",
        "answer": "- `DbContext` represents a data access session within a request scope.\n- It is not suitable for global sharing.\n- If it is registered as `Singleton`, thread-safety issues and state pollution can easily occur.\n\nIn one sentence:\n`DbContext` usually follows the request lifetime, so it is typically registered as `Scoped`."
      },
      {
        "id": "ee7ebe632e32",
        "topic": "Why Is `DbContext` Usually Registered as `Scoped`?",
        "question": "Why Can't a Singleton Directly Depend on a Scoped Service?",
        "answer": "- The `Singleton` lifetime is longer than `Scoped`.\n- This can cause scope mismatch.\n- It may end up holding a disposed instance.\n\nIn one sentence:\nA long-lived object should not directly depend on a short-lived object."
      },
      {
        "id": "9c61610c7847",
        "topic": "Why Can't a Singleton Directly Depend on a Scoped Service?",
        "question": "What Are the Configuration Sources in ASP.NET Core?",
        "answer": "Common sources:\n\n- `appsettings.json`\n- `appsettings.Development.json`\n- Environment variables\n- Command-line arguments\n- Secret Manager\n\nIn one sentence:\nASP.NET Core configuration is layered, and later-loaded sources usually override earlier ones."
      },
      {
        "id": "5f759a36ad36",
        "topic": "What Are the Configuration Sources in ASP.NET Core?",
        "question": "How Is Logging Done in ASP.NET Core?",
        "answer": "Built-in interface:\n\n- `ILogger<T>`\n\nCommon levels:\n\n- `Trace`\n- `Debug`\n- `Information`\n- `Warning`\n- `Error`\n- `Critical`\n\nCommon ecosystem tools:\n\n- `Serilog`\n- `Seq`\n- `ELK`\n- `Application Insights`"
      },
      {
        "id": "d9873b6cc641",
        "topic": "How Is Logging Done in ASP.NET Core?",
        "question": "What Are `IHost` and the Generic Host?",
        "answer": "- `.NET Core` uses the Host model to manage the application lifecycle.\n- The Generic Host unifies:\n  - Configuration\n  - Logging\n  - Dependency Injection\n  - Background services\n\nCommon scenarios:\n\n- Web applications\n- Worker Services\n- Background scheduled jobs"
      },
      {
        "id": "45afc2b30556",
        "topic": "What Are `IHost` and the Generic Host?",
        "question": "What Does `Program.cs` Do in .NET Core?",
        "answer": "- Configures the application entry point\n- Registers services in the DI container\n- Configures middleware\n- Starts the application\n\nIn one sentence:\n`Program.cs` is the startup and composition center of the application."
      },
      {
        "id": "e1a132fef5f6",
        "topic": "What Does `Program.cs` Do in .NET Core?",
        "question": "Common Web API Return Types",
        "answer": "- `IActionResult`\n- `ActionResult<T>`\n\nDifference:\n\n- `IActionResult` is suitable when multiple kinds of results may be returned.\n- `ActionResult<T>` is suitable when returning a strongly typed result but still possibly returning error status codes."
      },
      {
        "id": "cc1596249c58",
        "topic": "Common Web API Return Types",
        "question": "What Is a RESTful API?",
        "answer": "Core idea:\n\n- URLs represent resources\n- HTTP methods represent operations\n\nCommon methods:\n\n- `GET`: query\n- `POST`: create\n- `PUT`: update\n- `DELETE`: delete"
      },
      {
        "id": "452c77abab16",
        "topic": "What Is a RESTful API?",
        "question": "Difference Between Authentication and Authorization",
        "answer": "- **Authentication**: confirms who the user is\n- **Authorization**: confirms what the user is allowed to do"
      },
      {
        "id": "52c42215da9f",
        "topic": "Difference Between Authentication and Authorization",
        "question": "What Is JWT?",
        "answer": "- A common stateless authentication solution\n- Very suitable for frontend-backend separation and distributed systems\n\nStructure:\n\n- `Header`\n- `Payload`\n- `Signature`\n\nNotes:\n\n- Do not store sensitive plaintext data in the `Payload`.\n- Set a reasonable expiration time.\n- Validate signatures properly."
      },
      {
        "id": "3bb1257d2e97",
        "topic": "What Is JWT?",
        "question": "Common Authentication Methods in ASP.NET Core",
        "answer": "- Cookie authentication\n- JWT Bearer\n- OAuth2\n- OpenID Connect\n\nA very common interview question:\nHow JWT is used in frontend-backend separated projects, along with its pros and cons."
      },
      {
        "id": "f1188db34d69",
        "topic": "Common Authentication Methods in ASP.NET Core",
        "question": "What Is EF Core?",
        "answer": "- A commonly used ORM in the `.NET Core` era\n- Uses LINQ to operate on the database\n- Supports both Code First and Database First\n\nCore objects:\n\n- `DbContext`\n- `DbSet<TEntity>`"
      },
      {
        "id": "893e4aa015e4",
        "topic": "What Is EF Core?",
        "question": "What Is `DbContext`?",
        "answer": "- The core context object for database access\n- Responsible for connection management, change tracking, querying, and saving\n\nIn one sentence:\n`DbContext` can be understood as a database session."
      },
      {
        "id": "f2baaa88147e",
        "topic": "What Is `DbContext`?",
        "question": "Common EF Core Capabilities",
        "answer": "- LINQ queries\n- Change tracking\n- Relationship mapping\n- Transaction support\n- Migrations"
      },
      {
        "id": "cc4f7aaa0a19",
        "topic": "Common EF Core Capabilities",
        "question": "What Is a Migration?",
        "answer": "- EF Core's database migration mechanism\n- Used to manage schema changes\n\nIn one sentence:\nMigrations keep the code model and database schema evolving together."
      },
      {
        "id": "3e31b22a6956",
        "topic": "What Is a Migration?",
        "question": "How Do You Optimize EF Core Queries?",
        "answer": "- `AsNoTracking()`: improve performance for read-only queries\n- `Select()`: only fetch needed fields\n- `Include()`: load related data\n- Pagination: `Skip()` / `Take()`\n- Avoid N+1 queries\n- Add indexes to high-frequency fields"
      },
      {
        "id": "9de183188823",
        "topic": "How Do You Optimize EF Core Queries?",
        "question": "What Is the N+1 Query Problem?",
        "answer": "- First query the main data\n- Then query related data once for each row of main data\n- This leads to too many SQL executions\n\nIn one sentence:\nThe essence of the N+1 problem is uncontrolled query count, usually optimized with `Include` or projection queries."
      },
      {
        "id": "d1e82a400104",
        "topic": "What Is the N+1 Query Problem?",
        "question": "What Is `AsNoTracking()` Used For?",
        "answer": "- Disables entity change tracking\n- Reduces memory usage\n- Improves read-only query performance"
      },
      {
        "id": "e58e897791fd",
        "topic": "What Is `AsNoTracking()` Used For?",
        "question": "How Is Caching Done in ASP.NET Core?",
        "answer": "Common approaches:\n\n- Local cache: `MemoryCache`\n- Distributed cache: `Redis`\n\nBenefits:\n\n- Reduce database pressure\n- Improve API response speed\n\nPay attention to:\n\n- Cache consistency\n- Cache penetration\n- Cache breakdown\n- Cache avalanche"
      },
      {
        "id": "97b2ec5118cb",
        "topic": "How Is Caching Done in ASP.NET Core?",
        "question": "What Is Garbage Collection (GC)?",
        "answer": "- .NET's automatic memory management mechanism\n- Responsible for reclaiming managed objects that are no longer in use\n\nGenerations:\n\n- `Gen 0`\n- `Gen 1`\n- `Gen 2`\n\nAdditional point:\n\n- Large Object Heap `LOH`"
      },
      {
        "id": "63a872512596",
        "topic": "What Is Garbage Collection (GC)?",
        "question": "Difference Between `Dispose` and GC",
        "answer": "- `GC`: manages managed memory, but the execution time is not deterministic\n- `Dispose`: used to proactively release unmanaged resources\n\nCommon resources:\n\n- Database connections\n- File handles\n- Network connections\n\nIn one sentence:\nGC handles memory, while `Dispose` handles external resources."
      },
      {
        "id": "e4b629c195c5",
        "topic": "Difference Between `Dispose` and GC",
        "question": "What Is `using` For?",
        "answer": "- Ensures `Dispose` is called automatically after the object is used\n- Commonly used for connections, file streams, network streams, and similar scenarios"
      },
      {
        "id": "d429a64e0bce",
        "topic": "What Is `using` For?",
        "question": "How Do You Optimize ASP.NET Core Performance?",
        "answer": "- Use asynchronous I/O\n- Reduce unnecessary object allocations\n- Use caching appropriately\n- Optimize database queries\n- Return only necessary fields\n- Add pagination to APIs\n- Use connection pooling\n- Avoid repeated serialization and expensive reflection on hot paths"
      },
      {
        "id": "0af7a284b61b",
        "topic": "How Do You Optimize ASP.NET Core Performance?",
        "question": "What Is Kestrel?",
        "answer": "- The built-in cross-platform web server in ASP.NET Core\n- Usually used to host the application service\n- In production it is often used together with Nginx or IIS\n\nIn one sentence:\nKestrel is the default web server for ASP.NET Core."
      },
      {
        "id": "11c990f802f7",
        "topic": "What Is Kestrel?",
        "question": "Why Is ASP.NET Core Suitable for Microservices?",
        "answer": "- Lightweight\n- High performance\n- Cross-platform\n- Easy to containerize\n- Complete configuration, logging, and DI ecosystem\n- Very suitable for Docker / Kubernetes deployment"
      },
      {
        "id": "1f7a0e42f6c2",
        "topic": "Why Is ASP.NET Core Suitable for Microservices?",
        "question": "Common Deployment Combination",
        "answer": "- The application runs on Kestrel\n- Nginx or IIS in front acts as a reverse proxy\n- Deploy to Linux, Windows, Docker containers, or cloud platforms\n\nIn one sentence:\nIn production, ASP.NET Core is usually not run alone, but together with a reverse proxy and deployment platform."
      }
    ]
  },
  {
    "fileName": "06_DotNet_Entity_Framework概览.md",
    "sourcePath": "06_DotNet_Entity_Framework概览.md",
    "title": "Entity Framework Overview",
    "count": 4,
    "questions": [
      {
        "id": "fb77b6e3b223",
        "topic": "Interview Practice",
        "question": "What problem does it solve?",
        "answer": "Without EF, database access often looks like this:\n\n1. Write SQL manually\n2. Open a database connection\n3. Execute the command\n4. Read the result set\n5. Map each column into an object\n\nEF abstracts most of that away, so your code can look more like this:\n\n```csharp\nvar user = new User { Name = \"Alice\" };\ncontext.Users.Add(user);\ncontext.SaveChanges();\n```\n\nEF generates the corresponding `INSERT` SQL behind the scenes."
      },
      {
        "id": "fa4a02942881",
        "topic": "Entity Framework vs. EF Core",
        "question": "Common development approaches",
        "answer": "### Database First\n\nYou start with an existing database and generate entity classes and context code from it.\n\n### Code First\n\nYou start by writing C# classes, then let EF create or evolve the database schema.\n\nIn EF Core, many teams prefer **Code First + Migrations**."
      },
      {
        "id": "c253ca2b4e8e",
        "topic": "Code First",
        "question": "What are Migrations?",
        "answer": "Migrations are EF's way of versioning database schema changes.\n\nFor example, if you add a new property:\n\n```csharp\npublic string Email { get; set; }\n```\n\nYou can generate a migration so EF creates the corresponding schema update.\n\nCommon commands:\n\n```bash\ndotnet ef migrations add AddUserEmail\ndotnet ef database update\n```"
      },
      {
        "id": "4fb1baf9eafe",
        "topic": "Disadvantages",
        "question": "When is Entity Framework a good fit?",
        "answer": "Entity Framework works well for:\n\n- Business applications\n- Internal tools and back-office systems\n- CRUD-heavy systems\n- .NET projects that value developer productivity\n\nIt may be less suitable for:\n\n- Extremely performance-sensitive systems\n- Applications with very complex SQL requirements\n- Systems that depend heavily on stored procedures or tightly controlled SQL"
      }
    ]
  },
  {
    "fileName": "07_数据库_基础面试问答.md",
    "sourcePath": "07_数据库_基础面试问答.md",
    "title": "Database Interview Questions and Answers",
    "count": 47,
    "questions": [
      {
        "id": "04adc8c46dca",
        "topic": "Common Database Interview Questions",
        "question": "What is a database?",
        "answer": "A database is an organized system for storing, managing, and retrieving data efficiently. It allows applications and users to insert, update, query, and analyze information in a structured way."
      },
      {
        "id": "ce04d6e93c28",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between SQL and NoSQL databases?",
        "answer": "SQL databases are relational, use structured schemas, and are typically queried with SQL. They are strong when you need joins, transactions, and strict consistency. NoSQL databases are often schema-flexible and are designed for use cases such as large-scale document storage, caching, graph traversal, or high-throughput distributed workloads."
      },
      {
        "id": "89049e684799",
        "topic": "Common Database Interview Questions",
        "question": "What is a primary key?",
        "answer": "A primary key is a column or set of columns that uniquely identifies each row in a table. It must contain unique values and cannot be null."
      },
      {
        "id": "d9f4adb5775b",
        "topic": "Common Database Interview Questions",
        "question": "What is a foreign key?",
        "answer": "A foreign key is a column or set of columns in one table that references the primary key of another table. It enforces referential integrity between related tables."
      },
      {
        "id": "3a48de7ccf20",
        "topic": "Common Database Interview Questions",
        "question": "What is normalization?",
        "answer": "Normalization is the process of organizing data to reduce redundancy and improve data integrity. Common normal forms include 1NF, 2NF, and 3NF."
      },
      {
        "id": "0eb871c012f5",
        "topic": "Common Database Interview Questions",
        "question": "When would you denormalize a database?",
        "answer": "You denormalize when read performance is more important than strict normalization, especially in reporting, analytics, or high-read systems where reducing joins improves speed."
      },
      {
        "id": "0f77d8eb79b8",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between DELETE, TRUNCATE, and DROP?",
        "answer": "- `DELETE` removes selected rows and can be used with a `WHERE` clause.\n- `TRUNCATE` removes all rows from a table quickly, usually with minimal logging.\n- `DROP` removes the entire table structure and its data."
      },
      {
        "id": "a88a16e7f28c",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between WHERE and HAVING?",
        "answer": "`WHERE` filters rows before grouping. `HAVING` filters groups after `GROUP BY` has been applied."
      },
      {
        "id": "00cd0d89d012",
        "topic": "Common Database Interview Questions",
        "question": "What is a JOIN?",
        "answer": "A JOIN combines rows from two or more tables based on a related column."
      },
      {
        "id": "5f2d21635ce7",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between INNER JOIN and LEFT JOIN?",
        "answer": "`INNER JOIN` returns only matching rows from both tables. `LEFT JOIN` returns all rows from the left table and matching rows from the right table, with nulls when no match exists."
      },
      {
        "id": "46bec0ede10d",
        "topic": "Common Database Interview Questions",
        "question": "What is an index?",
        "answer": "An index is a data structure that improves lookup speed on one or more columns. It helps queries avoid full table scans, though it adds storage cost and can slow down inserts, updates, and deletes."
      },
      {
        "id": "88e8b61d5748",
        "topic": "Common Database Interview Questions",
        "question": "What are constraints in a database?",
        "answer": "Constraints are rules enforced on data to maintain integrity. Common examples are `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, and `CHECK`."
      },
      {
        "id": "8f21ef924057",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between UNIQUE and PRIMARY KEY?",
        "answer": "Both enforce uniqueness, but a primary key uniquely identifies the main record in a table and cannot be null. A table has one primary key, while it may have multiple unique constraints depending on the database engine."
      },
      {
        "id": "c45ccf0c7024",
        "topic": "Common Database Interview Questions",
        "question": "What is a transaction?",
        "answer": "A transaction is a sequence of database operations treated as a single unit of work. It either fully succeeds and commits, or fails and rolls back."
      },
      {
        "id": "ff1ada6b6508",
        "topic": "Common Database Interview Questions",
        "question": "What does ACID mean?",
        "answer": "- **Atomicity**: all operations in a transaction succeed or none do.\n- **Consistency**: the database remains in a valid state.\n- **Isolation**: concurrent transactions do not interfere improperly.\n- **Durability**: committed changes survive failures."
      },
      {
        "id": "4436cfae341e",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between a clustered and non-clustered index?",
        "answer": "A clustered index determines the physical order of data storage in the table. A non-clustered index stores a separate structure with pointers to the actual rows. A table generally has one clustered index but can have many non-clustered indexes."
      },
      {
        "id": "440cf9cc2f1f",
        "topic": "Common Database Interview Questions",
        "question": "What is a composite index?",
        "answer": "A composite index is an index on multiple columns. It is useful when queries commonly filter or sort by those columns together."
      },
      {
        "id": "80de3a4f1f6c",
        "topic": "Common Database Interview Questions",
        "question": "What is the N+1 query problem?",
        "answer": "The N+1 query problem happens when an application performs one query to fetch a list of records and then executes an additional query for each record to fetch related data. It causes unnecessary round trips and poor performance."
      },
      {
        "id": "89f66a1105b5",
        "topic": "Common Database Interview Questions",
        "question": "What is a view?",
        "answer": "A view is a virtual table based on the result of a query. It can simplify complex queries, improve reusability, and sometimes provide a security abstraction."
      },
      {
        "id": "7929de94f292",
        "topic": "Common Database Interview Questions",
        "question": "What is a stored procedure?",
        "answer": "A stored procedure is a reusable set of SQL statements stored in the database. It can encapsulate business logic, improve consistency, and reduce repeated SQL in applications."
      },
      {
        "id": "0a3a81362a65",
        "topic": "Advanced Database Interview Questions",
        "question": "What are database isolation levels?",
        "answer": "Isolation levels define how transactions interact with one another:\n- `Read Uncommitted`: allows dirty reads.\n- `Read Committed`: prevents dirty reads.\n- `Repeatable Read`: prevents dirty and non-repeatable reads.\n- `Serializable`: highest isolation, prevents dirty, non-repeatable, and phantom reads, but reduces concurrency."
      },
      {
        "id": "08f1ffe6d0df",
        "topic": "Advanced Database Interview Questions",
        "question": "What are dirty reads, non-repeatable reads, and phantom reads?",
        "answer": "- **Dirty read**: reading uncommitted data from another transaction.\n- **Non-repeatable read**: getting different values when reading the same row twice in one transaction.\n- **Phantom read**: seeing different sets of rows when rerunning a query in one transaction because another transaction inserted or deleted matching rows."
      },
      {
        "id": "e0490b6d5ba9",
        "topic": "Advanced Database Interview Questions",
        "question": "What is a deadlock?",
        "answer": "A deadlock happens when two or more transactions wait on each other to release locks, so none can proceed. Databases usually detect deadlocks and abort one transaction."
      },
      {
        "id": "762ab43c51fd",
        "topic": "Advanced Database Interview Questions",
        "question": "How can you reduce the chance of deadlocks?",
        "answer": "You can reduce deadlocks by accessing tables in a consistent order, keeping transactions short, indexing properly to reduce lock duration, and avoiding unnecessary user interaction inside transactions."
      },
      {
        "id": "7fb53b456719",
        "topic": "Advanced Database Interview Questions",
        "question": "What is optimistic locking vs pessimistic locking?",
        "answer": "Optimistic locking assumes conflicts are rare and checks for changes before commit, often using a version column. Pessimistic locking locks data early to prevent concurrent modification, which is safer for contention-heavy scenarios but reduces concurrency."
      },
      {
        "id": "948b4dd323af",
        "topic": "Advanced Database Interview Questions",
        "question": "How would you optimize a slow SQL query?",
        "answer": "Start by checking the execution plan. Look for full table scans, expensive joins, sorts, and missing indexes. Then reduce scanned rows, add or refine indexes, rewrite inefficient predicates, avoid unnecessary columns, and verify whether schema or query structure should change."
      },
      {
        "id": "43e4a8f24204",
        "topic": "Advanced Database Interview Questions",
        "question": "What is an execution plan?",
        "answer": "An execution plan shows how the database engine will execute a query, including scans, seeks, joins, sorts, and estimated or actual costs. It is one of the main tools for diagnosing performance issues."
      },
      {
        "id": "0bbed43b6dc1",
        "topic": "Advanced Database Interview Questions",
        "question": "Why might a query not use an index?",
        "answer": "Common reasons include low selectivity, outdated statistics, small table size, functions applied to indexed columns, implicit type conversions, leading wildcards in `LIKE`, or because the optimizer estimates a scan is cheaper."
      },
      {
        "id": "77d5d6a13497",
        "topic": "Advanced Database Interview Questions",
        "question": "What is partitioning?",
        "answer": "Partitioning splits a large table or index into smaller logical pieces while still presenting it as one object. It can improve manageability and, in some cases, query performance when filters align with the partition key."
      },
      {
        "id": "238f1a0a0484",
        "topic": "Advanced Database Interview Questions",
        "question": "What is sharding?",
        "answer": "Sharding distributes data across multiple independent database servers, usually by a shard key. It helps scale horizontally, but it increases complexity around joins, transactions, and rebalancing."
      },
      {
        "id": "e3f7adb904f1",
        "topic": "Advanced Database Interview Questions",
        "question": "What is replication?",
        "answer": "Replication is the process of copying data from one database server to others. It is commonly used for high availability, disaster recovery, and read scaling."
      },
      {
        "id": "c6b7a1e5bfa7",
        "topic": "Advanced Database Interview Questions",
        "question": "What is the CAP theorem?",
        "answer": "The CAP theorem says that in a distributed system, during a network partition you can choose at most two of the following three guarantees: consistency, availability, and partition tolerance. Since partitions can happen, systems often make tradeoffs between consistency and availability."
      },
      {
        "id": "90b5b9eab733",
        "topic": "Advanced Database Interview Questions",
        "question": "What is eventual consistency?",
        "answer": "Eventual consistency means that if no new updates occur, all replicas will eventually converge to the same value. It is common in distributed systems that prioritize availability and performance."
      },
      {
        "id": "d58b38138ab7",
        "topic": "Advanced Database Interview Questions",
        "question": "What is a covering index?",
        "answer": "A covering index includes all the columns needed to satisfy a query, so the database can return results directly from the index without going back to the base table."
      },
      {
        "id": "a157f2fa2cc2",
        "topic": "Advanced Database Interview Questions",
        "question": "What is cardinality in databases?",
        "answer": "Cardinality can refer to relationship type, such as one-to-many, or to the number of distinct values in a column. In query optimization, higher cardinality often makes an index more useful."
      },
      {
        "id": "8ba937bd3053",
        "topic": "Advanced Database Interview Questions",
        "question": "What is the difference between OLTP and OLAP?",
        "answer": "OLTP systems handle many short, transactional operations such as inserts and updates in business applications. OLAP systems are optimized for analytical queries, aggregations, and reporting across large datasets."
      },
      {
        "id": "245f755b1ad6",
        "topic": "Advanced Database Interview Questions",
        "question": "What are materialized views?",
        "answer": "Materialized views store the results of a query physically, unlike standard views which are computed at query time. They improve read performance for expensive queries but require refresh management."
      },
      {
        "id": "62360e28e0a2",
        "topic": "Advanced Database Interview Questions",
        "question": "What is database caching?",
        "answer": "Database caching stores frequently accessed data in a faster layer, such as Redis or application memory, to reduce database load and improve latency."
      },
      {
        "id": "8ade5a150205",
        "topic": "Advanced Database Interview Questions",
        "question": "What are database statistics, and why do they matter?",
        "answer": "Statistics describe data distribution and help the query optimizer estimate row counts and choose efficient execution plans. Poor or stale statistics can cause bad plans and slow queries."
      },
      {
        "id": "483edfbf0a23",
        "topic": "Advanced Database Interview Questions",
        "question": "What is a schema migration?",
        "answer": "A schema migration is a controlled change to the database structure, such as adding tables, columns, indexes, or constraints. Good migration practice includes versioning, rollback planning, and backward compatibility for live systems."
      },
      {
        "id": "b7bc4d1b69bf",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you design a database for an e-commerce application?",
        "answer": "I would start with core entities such as users, products, categories, carts, orders, order items, payments, and inventory. I would normalize transactional tables, add indexes for common lookups, and carefully model inventory and order state changes with transactions. For scale, I would consider caching, read replicas, and search services for product discovery."
      },
      {
        "id": "6334a71eac4a",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you handle a table with hundreds of millions of rows?",
        "answer": "I would review access patterns first, then add or refine indexes, archive cold data if appropriate, and consider partitioning. I would also check whether queries can be narrowed by date or tenant and whether expensive reporting should move to a separate analytical system."
      },
      {
        "id": "4b853f152d4f",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you safely add a new non-null column to a large production table?",
        "answer": "I would usually add it as nullable first, backfill in batches, update the application to write the new value, validate completeness, and only then enforce the non-null constraint. This reduces lock time and deployment risk."
      },
      {
        "id": "538c1a35738f",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you investigate high database CPU usage?",
        "answer": "I would identify the top expensive queries, inspect execution plans, check waits and locks, review recent deployments, and confirm whether missing indexes, bad plans, parameter sniffing, or unexpected traffic spikes are involved."
      },
      {
        "id": "732f5e6e5efc",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you prevent duplicate records in a concurrent system?",
        "answer": "I would use a unique constraint or unique index at the database level, because application-only checks are vulnerable to race conditions. Then I would handle duplicate-key errors gracefully in the application."
      },
      {
        "id": "c4e844dee3b4",
        "topic": "Short SQL Prompts You May Be Asked",
        "question": "Explain the difference between COUNT(*), COUNT(1), and COUNT(column).",
        "answer": "`COUNT(*)` counts all rows. `COUNT(1)` is generally treated the same by modern optimizers. `COUNT(column)` counts only rows where that column is not null."
      },
      {
        "id": "8d4945fd59d8",
        "topic": "Short SQL Prompts You May Be Asked",
        "question": "What makes a strong database answer in interviews?",
        "answer": "A strong answer balances correctness, tradeoffs, and practical experience. Good candidates explain not just what a concept is, but when it matters, what can go wrong, and how they have approached it in real systems."
      }
    ]
  }
];
