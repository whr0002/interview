window.QA_DATA = [
  {
    "fileName": "01_前端_React面试问答.md",
    "sourcePath": "01_前端_React面试问答.md",
    "title": "React Interview Q&A",
    "category": "frontend",
    "tags": [
      "react",
      "javascript",
      "frontend",
      "interview"
    ],
    "language": "en",
    "count": 80,
    "questions": [
      {
        "id": "ed98c5f3f070",
        "legacyId": "249060131566",
        "topic": "React Basics",
        "question": "What is React?",
        "answer": "React is a JavaScript library for building user interfaces. It is component-based and uses declarative rendering."
      },
      {
        "id": "0d6f64722339",
        "legacyId": "b03c3b90af3e",
        "topic": "React Basics",
        "question": "What is the difference between `props` and `state`?",
        "answer": "`props` are read-only inputs passed from a parent. `state` is internal data managed by the component."
      },
      {
        "id": "8ef792fbff22",
        "legacyId": "ac2fa79e9de9",
        "topic": "React Basics",
        "question": "What is one-way data flow?",
        "answer": "Data flows from parent to child through `props`. This makes the app easier to understand and debug."
      },
      {
        "id": "c40cee022644",
        "legacyId": "e59174eef0ff",
        "topic": "React Basics",
        "question": "What is declarative programming in React?",
        "answer": "We describe what the UI should look like for a given state, and React handles the DOM updates."
      },
      {
        "id": "205d6728e421",
        "legacyId": "29d7b66d013a",
        "topic": "React Basics",
        "question": "What is the difference between Function Component and Class Component?",
        "answer": "Function Components are simpler and use Hooks. Class Components use lifecycle methods and are less common in modern React."
      },
      {
        "id": "d44b096673c9",
        "legacyId": "65b635f152ba",
        "topic": "React Basics",
        "question": "What is the Virtual DOM?",
        "answer": "It is a lightweight in-memory representation of the real DOM. React compares versions of it to update the UI efficiently."
      },
      {
        "id": "a79e5a1eade9",
        "legacyId": "baa8f24bda6b",
        "topic": "React Basics",
        "question": "What is reconciliation?",
        "answer": "Reconciliation is the process React uses to compare the old and new Virtual DOM and update only what changed."
      },
      {
        "id": "0a7e1a361e7f",
        "legacyId": "b2b46e01bd8d",
        "topic": "React Basics",
        "question": "Why do we need `key` in lists?",
        "answer": "`key` helps React identify which items changed, were added, or were removed."
      },
      {
        "id": "c1f0501970a0",
        "legacyId": "7fb10742bc6d",
        "topic": "React Basics",
        "question": "Why is using array index as `key` risky?",
        "answer": "If the list order changes, React may reuse the wrong DOM nodes and cause UI bugs."
      },
      {
        "id": "9c9c7c462e53",
        "legacyId": "cb048d7c2e5e",
        "topic": "Rendering",
        "question": "What causes a component to re-render?",
        "answer": "A component re-renders when its `state` changes, its `props` change, or its parent re-renders."
      },
      {
        "id": "a704e62f1224",
        "legacyId": "e92bfad3402e",
        "topic": "Rendering",
        "question": "Does React re-render the whole page?",
        "answer": "No. React re-renders components, then updates the real DOM as efficiently as possible."
      },
      {
        "id": "f395de09de21",
        "legacyId": "f997120627ab",
        "topic": "Rendering",
        "question": "What is the difference between render and commit?",
        "answer": "Render calculates what the UI should look like. Commit applies the changes to the DOM."
      },
      {
        "id": "398eb9e82bde",
        "legacyId": "64f912676fe6",
        "topic": "Rendering",
        "question": "What happens when a parent component re-renders?",
        "answer": "By default, child components also re-render unless optimization like `React.memo` prevents it."
      },
      {
        "id": "6ed16edeb3fd",
        "legacyId": "6a091c29ee1c",
        "topic": "Rendering",
        "question": "What is batching?",
        "answer": "Batching means React groups multiple state updates into one render for better performance."
      },
      {
        "id": "2f4f941ae611",
        "legacyId": "aec54bceed8e",
        "topic": "Rendering",
        "question": "Is `setState` synchronous?",
        "answer": "Not exactly. State updates are scheduled, and React may batch them, so you should not rely on immediate updates."
      },
      {
        "id": "40ae569450f8",
        "legacyId": "b90707a56259",
        "topic": "Hooks",
        "question": "What does `useState` do?",
        "answer": "It lets a Function Component store and update local state."
      },
      {
        "id": "ba0011c2b1a9",
        "legacyId": "c04cb0041926",
        "topic": "Hooks",
        "question": "What does `useEffect` do?",
        "answer": "It handles side effects like data fetching, subscriptions, timers, and DOM interactions."
      },
      {
        "id": "2b92a628e891",
        "legacyId": "82e9e7a39a4e",
        "topic": "Hooks",
        "question": "What is the difference between `useEffect` and `useLayoutEffect`?",
        "answer": "`useEffect` runs after paint. `useLayoutEffect` runs before paint and is used when layout measurement must happen synchronously."
      },
      {
        "id": "6651da7673c3",
        "legacyId": "9fa46f722c55",
        "topic": "Hooks",
        "question": "What is the dependency array in `useEffect`?",
        "answer": "It tells React when the effect should re-run based on the values it depends on."
      },
      {
        "id": "247ada51d5a7",
        "legacyId": "e06751bb6f58",
        "topic": "Hooks",
        "question": "What happens if dependencies are missing?",
        "answer": "The effect may read stale values and cause bugs."
      },
      {
        "id": "c9044c1746c0",
        "legacyId": "61f3dc4adb9d",
        "topic": "Hooks",
        "question": "What is a stale closure?",
        "answer": "It happens when a function captures old `state` or `props` from an earlier render."
      },
      {
        "id": "ac19b6501d66",
        "legacyId": "74efccc31b19",
        "topic": "Hooks",
        "question": "How does `useRef` work?",
        "answer": "It stores a mutable value that persists across renders without causing a re-render."
      },
      {
        "id": "92432fb72e00",
        "legacyId": "88fd0b2f2f4c",
        "topic": "Hooks",
        "question": "When should we use `useMemo`?",
        "answer": "Use it to memoize expensive calculations when recomputation is unnecessary."
      },
      {
        "id": "254caa2a612f",
        "legacyId": "cc9428d85e88",
        "topic": "Hooks",
        "question": "When should we use `useCallback`?",
        "answer": "Use it to memoize a function reference, usually when passing callbacks to memoized children."
      },
      {
        "id": "392d01e92b88",
        "legacyId": "3d02b3035474",
        "topic": "Hooks",
        "question": "What is `useContext` used for?",
        "answer": "It lets components read shared data from Context without passing props through every level."
      },
      {
        "id": "9d305c85cc49",
        "legacyId": "85300b23ac90",
        "topic": "Hooks",
        "question": "What is a custom hook?",
        "answer": "A custom hook is a reusable function that contains Hook logic and shares behavior across components."
      },
      {
        "id": "b538c0af0cbd",
        "legacyId": "b1a80f79ca80",
        "topic": "Lifecycle",
        "question": "What are the main lifecycle phases of a component?",
        "answer": "Mounting, updating, and unmounting."
      },
      {
        "id": "571ee7377fcb",
        "legacyId": "86010241596b",
        "topic": "Lifecycle",
        "question": "How do lifecycle concepts map to Hooks?",
        "answer": "`useEffect` can handle logic that used to be split across lifecycle methods in class components."
      },
      {
        "id": "75b1c567c2e9",
        "legacyId": "420f99b98251",
        "topic": "Lifecycle",
        "question": "How do you clean up side effects?",
        "answer": "Return a cleanup function from `useEffect` to remove listeners, clear timers, or cancel subscriptions."
      },
      {
        "id": "31dda9e1458d",
        "legacyId": "79d00db3c051",
        "topic": "Forms",
        "question": "What is a controlled component?",
        "answer": "A controlled component gets its form value from React state."
      },
      {
        "id": "e4bf0454f3c1",
        "legacyId": "ab8219f892e3",
        "topic": "Forms",
        "question": "What is an uncontrolled component?",
        "answer": "An uncontrolled component stores its value in the DOM, often accessed with `ref`."
      },
      {
        "id": "d64bf13750e7",
        "legacyId": "6a201a63be3b",
        "topic": "Forms",
        "question": "Which is preferred and why?",
        "answer": "Controlled components are usually preferred because the data flow is clearer and easier to validate."
      },
      {
        "id": "ada4c36ab44e",
        "legacyId": "05b4d2c3d638",
        "topic": "Forms",
        "question": "How do you handle multiple inputs in a form?",
        "answer": "Use a shared change handler and update state based on the input `name`."
      },
      {
        "id": "f824e6bed40f",
        "legacyId": "5849864b428d",
        "topic": "State Management",
        "question": "When should state be local?",
        "answer": "When only one component or a small part of the tree needs it."
      },
      {
        "id": "2d20730097ca",
        "legacyId": "a67102a4401b",
        "topic": "State Management",
        "question": "What is lifting state up?",
        "answer": "It means moving shared state to the closest common parent."
      },
      {
        "id": "114302c251f0",
        "legacyId": "e3e88611eba6",
        "topic": "State Management",
        "question": "What is prop drilling?",
        "answer": "It is passing props through many layers just to reach a deeply nested component."
      },
      {
        "id": "c8840649059a",
        "legacyId": "b83e383c20c1",
        "topic": "State Management",
        "question": "When should you use Context?",
        "answer": "Use Context for shared data like theme, language, or current user across many components."
      },
      {
        "id": "7a817bd4f316",
        "legacyId": "dade047f3341",
        "topic": "State Management",
        "question": "What are the limitations of Context?",
        "answer": "It can trigger broad re-renders and is not always a full replacement for dedicated state management."
      },
      {
        "id": "009fcdbf0200",
        "legacyId": "ef4d03b418ca",
        "topic": "State Management",
        "question": "What is the difference between Context, Redux, and local state?",
        "answer": "Local state is component-scoped, Context shares simple global data, and Redux is better for complex global state logic."
      },
      {
        "id": "c9e34043210c",
        "legacyId": "f4f8ac53aeb0",
        "topic": "Performance Optimization",
        "question": "What is `React.memo`?",
        "answer": "It prevents a component from re-rendering if its props have not changed."
      },
      {
        "id": "375e27b4b474",
        "legacyId": "dd8f0044b2c5",
        "topic": "Performance Optimization",
        "question": "What is the difference between `useMemo` and `useCallback`?",
        "answer": "`useMemo` memoizes a value. `useCallback` memoizes a function. useMemo can also memo a function, but it runs immediately for the first render and useCallback does not."
      },
      {
        "id": "17195b08032b",
        "legacyId": "ecde7fd2211b",
        "topic": "Performance Optimization",
        "question": "How do you prevent unnecessary re-renders?",
        "answer": "Split components well, keep state minimal, use stable props, and apply memoization only where needed."
      },
      {
        "id": "ec8a4d6f5a42",
        "legacyId": "43b37eebab48",
        "topic": "Performance Optimization",
        "question": "How do you optimize a large list?",
        "answer": "Use list virtualization so only visible items are rendered."
      },
      {
        "id": "55f84e1e6f8d",
        "legacyId": "5180b778b988",
        "topic": "Performance Optimization",
        "question": "Can overusing memoization be harmful?",
        "answer": "Yes. It adds complexity and can hurt performance if used without a real bottleneck."
      },
      {
        "id": "8509787368c4",
        "legacyId": "5f815460705f",
        "topic": "Performance Optimization",
        "question": "What tool helps investigate React performance?",
        "answer": "React DevTools Profiler."
      },
      {
        "id": "ff9b818c1737",
        "legacyId": "9686d0831579",
        "topic": "Closure and Async Behavior",
        "question": "What is a closure in JavaScript?",
        "answer": "A closure is when a function remembers variables from its outer scope."
      },
      {
        "id": "88d2ec17a70d",
        "legacyId": "b0b2588333b4",
        "topic": "Closure and Async Behavior",
        "question": "What is stale closure in React?",
        "answer": "It is when a callback uses outdated `state` or `props` from an older render."
      },
      {
        "id": "3d19882f76f8",
        "legacyId": "3e19ace38ffa",
        "topic": "Closure and Async Behavior",
        "question": "Why do `setTimeout` and `setInterval` often cause stale closure bugs?",
        "answer": "Their callbacks run later, but they capture values from when they were created."
      },
      {
        "id": "6909df0e1290",
        "legacyId": "005c7d178b22",
        "topic": "Closure and Async Behavior",
        "question": "How do you get the latest value in an async callback?",
        "answer": "Use `useRef`, correct dependencies, or a functional state update."
      },
      {
        "id": "eba6d3a80f3c",
        "legacyId": "8161a2d59f34",
        "topic": "Closure and Async Behavior",
        "question": "When should you use `useRef` instead of `state`?",
        "answer": "Use `useRef` when you need a mutable value that does not trigger a re-render."
      },
      {
        "id": "c0b60624999c",
        "legacyId": "7e3262a5c985",
        "topic": "Closure and Async Behavior",
        "question": "What is the difference between a snapshot and the latest value?",
        "answer": "A snapshot is the value at a specific render. The latest value is the current value after later updates."
      },
      {
        "id": "fab3f5f0235c",
        "legacyId": "ce1ad723e29d",
        "topic": "Component Communication",
        "question": "How do parent and child components communicate?",
        "answer": "Parents pass data down with `props`, and children communicate up through callback props."
      },
      {
        "id": "29e1e99c15c0",
        "legacyId": "28fa26d9dd37",
        "topic": "Component Communication",
        "question": "How do sibling components communicate?",
        "answer": "Usually through their closest common parent."
      },
      {
        "id": "19798a842df2",
        "legacyId": "604e2934d94b",
        "topic": "Component Communication",
        "question": "How do you share data across deep component trees?",
        "answer": "Use Context or a global state solution."
      },
      {
        "id": "1fec0d231805",
        "legacyId": "f481e1a2d605",
        "topic": "Component Communication",
        "question": "When would you use callbacks, Context, or a global store?",
        "answer": "Use callbacks for local communication, Context for simple shared state, and a global store for more complex app-wide state."
      },
      {
        "id": "e0a382851bca",
        "legacyId": "e5b3788558cf",
        "topic": "Conditional Rendering and Lists",
        "question": "How do you do conditional rendering in React?",
        "answer": "Use `if`, ternary operators, logical `&&`, or return different components."
      },
      {
        "id": "dcee7ae60002",
        "legacyId": "4bf017506fa2",
        "topic": "Conditional Rendering and Lists",
        "question": "What are common mistakes in list rendering?",
        "answer": "Missing `key`, unstable `key`, and using array index when the list can change."
      },
      {
        "id": "364e45adac95",
        "legacyId": "f30119c9b2fb",
        "topic": "Conditional Rendering and Lists",
        "question": "Why should `key` be stable and unique?",
        "answer": "Stable keys help React preserve the correct component identity between renders."
      },
      {
        "id": "f72fb7d073bf",
        "legacyId": "18bba66d9783",
        "topic": "Error Boundaries",
        "question": "What is an Error Boundary?",
        "answer": "It is a React component that catches rendering errors in its child tree and shows a fallback UI."
      },
      {
        "id": "044120680e0a",
        "legacyId": "2357cd1af3e3",
        "topic": "Error Boundaries",
        "question": "What can Error Boundaries catch?",
        "answer": "They catch errors during rendering, in lifecycle methods, and in constructors of child components."
      },
      {
        "id": "3895686dc893",
        "legacyId": "f507cab9a6f5",
        "topic": "Error Boundaries",
        "question": "Can Error Boundaries catch async errors?",
        "answer": "No. They do not catch errors in async code, event handlers, or server-side rendering."
      },
      {
        "id": "3f0d03417379",
        "legacyId": "e1f1dde05199",
        "topic": "Error Boundaries",
        "question": "How do you handle API errors in React?",
        "answer": "Catch them in async logic and store the error state to render a fallback message."
      },
      {
        "id": "d3cc56ff9037",
        "legacyId": "031450ee98ae",
        "topic": "Scenario Questions",
        "question": "How do you fetch data in a component?",
        "answer": "Use `useEffect` for the request and store the result in state, or use a dedicated data-fetching library."
      },
      {
        "id": "fb66699e3ef3",
        "legacyId": "0dcb6e0af7ee",
        "topic": "Scenario Questions",
        "question": "How do you avoid duplicate API requests?",
        "answer": "Centralize fetching logic, control dependencies carefully, and use caching tools when appropriate."
      },
      {
        "id": "b4c5207d976d",
        "legacyId": "05460ee8cded",
        "topic": "Scenario Questions",
        "question": "How do you cancel an in-flight request on unmount?",
        "answer": "Use `AbortController` and abort it in the effect cleanup."
      },
      {
        "id": "8490d3877a3d",
        "legacyId": "6fb1547cfcfc",
        "topic": "Scenario Questions",
        "question": "How do you implement search with debounce?",
        "answer": "Delay the API call until the user stops typing for a short time."
      },
      {
        "id": "c40be94250e4",
        "legacyId": "8ff05ea909b2",
        "topic": "Scenario Questions",
        "question": "How do you optimize a component that re-renders too often?",
        "answer": "Measure first, then reduce state scope, stabilize props, and memoize only where it helps."
      },
      {
        "id": "c99383f69573",
        "legacyId": "a967647e897c",
        "topic": "Scenario Questions",
        "question": "How do you preserve form state when switching tabs?",
        "answer": "Keep the state in a parent component or a shared store instead of inside the tab content only."
      },
      {
        "id": "8375478e947a",
        "legacyId": "fe38eb00d049",
        "topic": "Scenario Questions",
        "question": "How do you design a reusable modal component?",
        "answer": "Make it controlled, composable, and flexible through props like `isOpen`, `onClose`, and `children`."
      },
      {
        "id": "dd28fbbacece",
        "legacyId": "c1a8d4474e3c",
        "topic": "Scenario Questions",
        "question": "How do you synchronize UI with server data?",
        "answer": "Treat server data and UI state separately, and revalidate when needed."
      },
      {
        "id": "4c7cc0af5239",
        "legacyId": "6c2a314f2d58",
        "topic": "React 18",
        "question": "What is Concurrent Rendering?",
        "answer": "It is React's ability to prepare multiple UI updates and prioritize more important ones."
      },
      {
        "id": "3e79876c061a",
        "legacyId": "421d71ef18e2",
        "topic": "React 18",
        "question": "What is `startTransition`?",
        "answer": "It marks a state update as non-urgent, so urgent UI updates can stay responsive."
      },
      {
        "id": "261dc462d870",
        "legacyId": "330a79970400",
        "topic": "React 18",
        "question": "What is automatic batching?",
        "answer": "React 18 batches more state updates automatically, even in async code."
      },
      {
        "id": "555581e4ca40",
        "legacyId": "295340d78106",
        "topic": "React 18",
        "question": "What is `Suspense`?",
        "answer": "It lets React show a fallback UI while waiting for a component or data to be ready."
      },
      {
        "id": "be87c2126dad",
        "legacyId": "245d4400ce91",
        "topic": "React 18",
        "question": "What is hydration?",
        "answer": "Hydration is when React attaches event handlers to HTML that was rendered on the server."
      },
      {
        "id": "29ec3bd5fb03",
        "legacyId": "64384e6599c8",
        "topic": "React 18",
        "question": "What is the difference between CSR and SSR?",
        "answer": "CSR renders in the browser. SSR renders on the server first, which can improve first load and SEO."
      },
      {
        "id": "5b5e2112e752",
        "legacyId": "869332a994c3",
        "topic": "Common Coding Tasks",
        "question": "What coding tasks are common in React interviews?",
        "answer": "Counters, forms, custom hooks, stale closure fixes, list rendering, tabs, modals, and simple app features like todo lists."
      },
      {
        "id": "f223172c95d5",
        "legacyId": "87910cc1b377",
        "topic": "Common Coding Tasks",
        "question": "Why do interviewers ask coding tasks in React?",
        "answer": "They want to see whether you can apply core concepts, not just define them."
      },
      {
        "id": "4e7052f173ac",
        "legacyId": "ceeb90bfb63b",
        "topic": "Common Coding Tasks",
        "question": "What should you focus on in a React coding interview?",
        "answer": "Clear state management, correct data flow, clean component structure, and simple but correct logic."
      },
      {
        "id": "2007ad4873f5",
        "legacyId": "339551bbf4b8",
        "topic": "uick Answer Pattern",
        "question": "What is `useRef`?",
        "answer": "`useRef` stores a mutable value that persists across renders without causing a re-render. It is useful for DOM access and for keeping the latest value in async callbacks. A common example is fixing a stale closure bug in `setTimeout` or `setInterval`."
      }
    ]
  },
  {
    "fileName": "02_前端_TypeScript复习.md",
    "sourcePath": "02_前端_TypeScript复习.md",
    "title": "TypeScript Interview Review",
    "category": "frontend",
    "tags": [
      "typescript",
      "javascript",
      "frontend",
      "interview"
    ],
    "language": "en",
    "count": 16,
    "questions": [
      {
        "id": "f11b93492dec",
        "legacyId": "7c3d9c80d9e4",
        "topic": "What is TypeScript?",
        "question": "What is TypeScript?",
        "answer": "TypeScript is a superset of JavaScript that adds static typing and compile-time checks. It helps developers catch errors earlier, improves maintainability, and provides better tooling support."
      },
      {
        "id": "2621a41df78f",
        "legacyId": "0b3475f8976a",
        "topic": "Why use TypeScript instead of JavaScript?",
        "question": "Why use TypeScript instead of JavaScript?",
        "answer": "TypeScript improves code quality by detecting many errors before runtime. It also makes large codebases easier to maintain, improves refactoring safety, and helps teams collaborate with clearer contracts."
      },
      {
        "id": "764fc7ffe148",
        "legacyId": "8d3e4381f74d",
        "topic": "What is the difference between `any` and `unknown`?",
        "question": "What is the difference between `any` and `unknown`?",
        "answer": "`any` disables type checking and allows any operation. `unknown` is safer because you must narrow the type before using it. In most cases, `unknown` is preferred over `any`."
      },
      {
        "id": "5ce21b1edc57",
        "legacyId": "1b71b5425173",
        "topic": "What is the difference between `type` and `interface`?",
        "question": "What is the difference between `type` and `interface`?",
        "answer": "Both can describe object shapes. `interface` is commonly used for object contracts and supports declaration merging. `type` is more flexible because it can also describe unions, intersections, tuples, and conditional types."
      },
      {
        "id": "f55e72051ad2",
        "legacyId": "b34e8f2ca067",
        "topic": "What is a union type?",
        "question": "What is a union type?",
        "answer": "A union type means a value can be one of several types. For example, `string | number` means the value can be either a string or a number."
      },
      {
        "id": "e45028b2c626",
        "legacyId": "519507b12294",
        "topic": "What is a generic?",
        "question": "What is a generic?",
        "answer": "A generic allows us to write reusable code while preserving type safety. Instead of hardcoding a specific type, we use a type parameter such as `T`."
      },
      {
        "id": "2e3a22ffe8ef",
        "legacyId": "0249ad4072de",
        "topic": "What does `extends` mean in generics?",
        "question": "What does `extends` mean in generics?",
        "answer": "In generics, `extends` is used as a constraint. It means the generic type must satisfy a certain structure. For example, `T extends { length: number }` means `T` must have a `length` property."
      },
      {
        "id": "39dc6fed46c5",
        "legacyId": "3b90f3924d82",
        "topic": "What is `Record` used for?",
        "question": "What is `Record` used for?",
        "answer": "`Record<K, T>` is used to create an object type where the keys are `K` and the values are `T`. It is useful for key-value mappings, such as config objects or lookup tables."
      },
      {
        "id": "37b07a6c5bd7",
        "legacyId": "d12fb2dd2543",
        "topic": "What is `ReturnType`?",
        "question": "What is `ReturnType`?",
        "answer": "`ReturnType<T>` is a utility type that extracts the return type of a function type. It helps avoid duplicating types and keeps function-related types in sync."
      },
      {
        "id": "dadf1dd0db06",
        "legacyId": "0a5a23e3fb28",
        "topic": "What is `Parameters`?",
        "question": "What is `Parameters`?",
        "answer": "`Parameters<T>` is a utility type that extracts the parameter types of a function and returns them as a tuple."
      },
      {
        "id": "9bcabe00ccc0",
        "legacyId": "a8142c88eb5c",
        "topic": "What is `never` used for?",
        "question": "What is `never` used for?",
        "answer": "`never` is used for values that should never happen. It is useful for exhaustive checks in unions and for functions that never successfully return."
      },
      {
        "id": "38f7a08b25f9",
        "legacyId": "54723adea9ee",
        "topic": "What is structural typing?",
        "question": "What is structural typing?",
        "answer": "Structural typing means TypeScript compares types by their shape, not by their names. If an object has the required properties, it is usually compatible."
      },
      {
        "id": "f4194999c31c",
        "legacyId": "326677fe936e",
        "topic": "Does TypeScript run in the browser?",
        "question": "Does TypeScript run in the browser?",
        "answer": "TypeScript itself does not run directly in the browser. It is compiled into JavaScript, and that JavaScript runs in the browser or Node.js."
      },
      {
        "id": "dff0baabe79e",
        "legacyId": "5744490f3cd8",
        "topic": "Does TypeScript exist at runtime?",
        "question": "Does TypeScript exist at runtime?",
        "answer": "No. Type information is erased during compilation, so TypeScript types do not exist at runtime."
      },
      {
        "id": "d17c1dc466c7",
        "legacyId": "6e97d7467527",
        "topic": "Can TypeScript prevent all bugs?",
        "question": "Can TypeScript prevent all bugs?",
        "answer": "No. TypeScript helps catch many type-related issues at compile time, but it cannot prevent logical bugs, runtime environment issues, or invalid external data by itself."
      },
      {
        "id": "40506bd5a231",
        "legacyId": "4e990224dc9b",
        "topic": "General",
        "question": "What TypeScript Is",
        "answer": "TypeScript is a superset of JavaScript that adds static typing, compile-time checks, and better tooling support.\n\nKey points:\n\n- It helps catch errors before runtime.\n- It improves maintainability in medium and large codebases.\n- It provides better autocomplete, navigation, and refactoring support.\n- It compiles to plain JavaScript, so it does not change the runtime nature of JavaScript."
      }
    ]
  },
  {
    "fileName": "03_Backend_Nodejs_Express_Interview_Review.md",
    "sourcePath": "03_Backend_Nodejs_Express_Interview_Review.md",
    "title": "Node.js and Express Interview Review",
    "category": "backend",
    "tags": [
      "nodejs",
      "express",
      "api",
      "backend",
      "interview"
    ],
    "language": "en",
    "count": 21,
    "questions": [
      {
        "id": "f0b3cf1cc528",
        "legacyId": "08b449aa38f7",
        "topic": "General",
        "question": "What Are Node.js and Express?",
        "answer": "- **Node.js**: A JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to run on the server side.\n- **Express**: A lightweight and commonly used web framework for Node.js. It is used to quickly build web services and RESTful APIs.\n\nInterview answer:\nNode.js provides the runtime environment, while Express provides the web development layer. Node.js handles lower-level capabilities such as the event loop, module system, file operations, and networking. Express builds on top of Node.js and provides common features such as routing, middleware, and request/response handling."
      },
      {
        "id": "36e036114347",
        "legacyId": "08780e53f194",
        "topic": "Core Express Concepts",
        "question": "What Is Middleware?",
        "answer": "Middleware is essentially a function:\n\n```js\n(req, res, next) => {}\n```\n\nIt can be used to:\n\n- Process requests\n- Modify `req` or `res`\n- Run validation, authentication, or logging\n- Call `next()` to pass control to the next middleware\n- Send a response directly and end the request\n\nCommon middleware types:\n\n- Application-level middleware\n- Router-level middleware\n- Error-handling middleware\n- Built-in middleware such as `express.json()` and `express.urlencoded()`\n\nInterview answer:\nThe core of Express is its middleware mechanism. A request passes through multiple middleware functions in order. Each layer handles a specific responsibility, such as logging, authentication, parameter validation, or error handling. This makes the code clearer and easier to reuse."
      },
      {
        "id": "600bdfce7dd2",
        "legacyId": "28e17626f034",
        "topic": "Core Express Concepts",
        "question": "Difference Between `app.use()` and `app.get()` / `app.post()`",
        "answer": "- `app.use()` is usually used to mount middleware and can match multiple HTTP methods by default.\n- `app.get()` / `app.post()` are used to define routes for specific HTTP methods."
      },
      {
        "id": "d47df0cb1db6",
        "legacyId": "59b402d22c4c",
        "topic": "Common Status Codes",
        "question": "How to Explain Express Project Structure",
        "answer": "Common folder structure:\n\n- `routes/`: defines routes\n- `controllers/`: handles requests and responses\n- `services/`: contains business logic\n- `models/`: contains data models\n- `middlewares/`: contains middleware\n- `utils/`: contains utility functions\n- `app.js` / `server.js`: entry file\n\nInterview answer:\nI usually use a layered structure. The route layer handles URL mapping, the controller layer receives requests and returns responses, the service layer handles business logic, and the model layer handles data access. This keeps responsibilities clear and makes the project easier to test and maintain."
      },
      {
        "id": "a72477558f5d",
        "legacyId": "dedfead500e4",
        "topic": "Common Authentication Topics",
        "question": "Difference Between Session and JWT",
        "answer": "#### Session\n\n- Session information is stored on the server side.\n- The client usually only stores a session id.\n- It is suitable for traditional server-rendered applications.\n\n#### JWT\n\n- User information or claims are packaged inside a token.\n- The server does not necessarily store session state.\n- It is suitable for separated front-end/back-end systems and mobile applications.\n\nInterview answer:\nFor front-end/back-end separated applications, I usually consider JWT first because it fits stateless authentication better. For traditional web applications, Session is also common, especially when the server needs to manage user sessions centrally."
      },
      {
        "id": "bd121db8f61f",
        "legacyId": "0d602696dbbf",
        "topic": "Security Topics",
        "question": "How to Discuss Performance Optimization",
        "answer": "Common optimization ideas:\n\n- Avoid blocking the event loop\n- Use caching, such as Redis\n- Use gzip compression\n- Use database connection pooling\n- Add logging and monitoring\n- Use Nginx for reverse proxy and load balancing\n- Use PM2 or cluster to improve resource utilization\n- Move CPU-intensive tasks to independent services or Worker Threads\n\nInterview answer:\nNode.js is well suited for high-concurrency I/O scenarios. If I encounter CPU-intensive tasks, I would consider splitting them into independent services, consuming them through a message queue, or processing them with Worker Threads to avoid blocking the main thread."
      },
      {
        "id": "9419f8e657c6",
        "legacyId": "6ec251e07642",
        "topic": "High-Frequency Interview Questions",
        "question": "Why Is Node.js Fast?",
        "answer": "**Reference answer:\nNode.js is fast mainly because of its event-driven architecture and non-blocking I/O model. When handling many I/O requests, it does not need to create one thread for each request. Instead, it coordinates tasks through the event loop, which reduces thread-switching overhead and provides strong concurrency capability."
      },
      {
        "id": "23f5f74c09f5",
        "legacyId": "60ebc7db2853",
        "topic": "High-Frequency Interview Questions",
        "question": "Node.js Is Single-Threaded. How Can It Support High Concurrency?",
        "answer": "**Reference answer:\nThe JavaScript execution part of Node.js is single-threaded, but many I/O operations are not completed synchronously on the main thread. They are delegated to the underlying system or thread pool. The main thread mainly receives the results and executes callbacks, so Node.js can support high concurrency on top of a single-threaded JavaScript model."
      },
      {
        "id": "bb291796ba97",
        "legacyId": "48baf4126066",
        "topic": "High-Frequency Interview Questions",
        "question": "What Does `next()` Do in Express?",
        "answer": "**Reference answer:\n`next()` passes the current request to the next middleware or route handler. If `next()` is not called and no response is sent, the request may remain stuck."
      },
      {
        "id": "1e39dcb5fa05",
        "legacyId": "2cfa8b5ff2c6",
        "topic": "High-Frequency Interview Questions",
        "question": "What Is the Execution Order of Middleware?",
        "answer": "**Reference answer:\nExpress middleware usually executes in the order it is registered. After a request enters the application, it passes through the matching middleware functions one by one. Therefore, middleware order is very important. For example, logging, authentication, and parameter parsing are usually placed near the beginning."
      },
      {
        "id": "feaaac9b90a9",
        "legacyId": "93eb1a53002a",
        "topic": "High-Frequency Interview Questions",
        "question": "What Is the Difference Between `req.params`, `req.query`, and `req.body`?",
        "answer": "**Reference answer:\n`req.params` is used to get route parameters, `req.query` is used to get URL query parameters, and `req.body` is used to get data from the request body, such as JSON submitted through POST. They correspond to different data sources."
      },
      {
        "id": "e60d7fed6409",
        "legacyId": "b8bbfb9eb803",
        "topic": "High-Frequency Interview Questions",
        "question": "Difference Between GET and POST",
        "answer": "**Reference answer:\nGET is usually used to query data, and parameters are usually placed in the URL. POST is usually used to submit data, and the data is usually placed in the request body. GET emphasizes idempotent querying, while POST is more commonly used for creation or submission operations."
      },
      {
        "id": "ffe1ac56e0f3",
        "legacyId": "6f728db66606",
        "topic": "High-Frequency Interview Questions",
        "question": "Difference Between PUT and PATCH",
        "answer": "**Reference answer:\nPUT usually represents a full update of a resource, while PATCH represents a partial update. In real projects, if only one field needs to be changed, PATCH is usually more appropriate."
      },
      {
        "id": "c59eebeb2172",
        "legacyId": "2753056deff5",
        "topic": "High-Frequency Interview Questions",
        "question": "What Is RESTful?",
        "answer": "**Reference answer:\nRESTful is an API design style. Its core idea is to model data as resources, identify resources through consistent URLs, and use HTTP methods to represent operations on those resources. For example, GET retrieves data, POST creates data, PUT updates data, and DELETE removes data."
      },
      {
        "id": "9bf5e4fbdb3d",
        "legacyId": "e63dbd1cbbd1",
        "topic": "High-Frequency Interview Questions",
        "question": "Why Do We Use Layered Project Structure?",
        "answer": "**Reference answer:\nLayering mainly reduces coupling and separates responsibilities between routing, business logic, and data access. This makes the code clearer and easier to test, extend, and maintain."
      },
      {
        "id": "c6e0e57aa853",
        "legacyId": "93692330f83a",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Choose Between Session and JWT?",
        "answer": "**Reference answer:\nFor traditional server-rendered applications, Session is common. For front-end/back-end separated systems, mobile applications, or distributed systems, JWT is more common. The final choice depends on the system architecture, scalability requirements, and security strategy."
      },
      {
        "id": "6558279dbd0d",
        "legacyId": "7bec035fa869",
        "topic": "High-Frequency Interview Questions",
        "question": "What Are the Disadvantages of JWT?",
        "answer": "**Reference answer:\nThe main issue with JWT is that it is usually difficult to invalidate immediately after it has been issued. This makes requirements such as forced logout or immediate permission change more complex. In practice, it is often combined with a blacklist mechanism, or with short-lived access tokens plus refresh tokens."
      },
      {
        "id": "bb989efb93f4",
        "legacyId": "c1966c06e13b",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Handle Global Errors in Express?",
        "answer": "**Reference answer:\nI usually register a global error-handling middleware at the end of the application to handle exception responses centrally. For asynchronous logic, I use `try/catch` with `next(err)`, or wrap route handlers with an asyncHandler to capture errors consistently."
      },
      {
        "id": "ad0a82171ac2",
        "legacyId": "6fc1e0184e3e",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Understand Cross-Origin Requests?",
        "answer": "**Reference answer:\nCross-origin issues come from the browser's same-origin policy. If the front end and back end use different domains, ports, or protocols, cross-origin restrictions may occur. The server usually solves this by configuring CORS to allow access from specified origins."
      },
      {
        "id": "5af148f1f9f4",
        "legacyId": "48c21e62ab6d",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Validate Request Parameters?",
        "answer": "**Reference answer:\nParameter validation is usually placed in the middleware layer. The request parameters are validated before entering the business logic. This prevents invalid data from entering the system and makes it easier to return consistent error messages. Common tools include `joi` and `express-validator`."
      },
      {
        "id": "84eed0063a16",
        "legacyId": "5f027d581720",
        "topic": "High-Frequency Interview Questions",
        "question": "How Do You Improve the Stability of a Node.js Service?",
        "answer": "**Reference answer:\nI would improve stability through unified error handling, logging and monitoring, rate limiting, process management, health checks, caching, reasonable timeout settings, and avoiding event loop blocking. For critical services, I would also use load balancing and multi-instance deployment."
      }
    ]
  },
  {
    "fileName": "05_DotNet_Core_English.md",
    "sourcePath": "05_DotNet_Core_English.md",
    "title": ".NET Core Interview Review",
    "category": "backend",
    "tags": [
      "dotnet",
      "aspnet-core",
      "ef-core",
      "backend",
      "interview"
    ],
    "language": "en",
    "count": 31,
    "questions": [
      {
        "id": "2ab7723631d0",
        "legacyId": "bb166cedb7db",
        "topic": "General",
        "question": "What is .NET Core?",
        "answer": "- `.NET Core` is Microsoft's cross-platform, open-source, high-performance implementation of .NET.\n- It includes the runtime, base class libraries, and the infrastructure needed to build modern applications.\n- It is commonly used for Web APIs, microservices, console apps, and backend services.\n\nIn one sentence:\n.NET Core is the modern .NET platform, emphasizing cross-platform support, high performance, and cloud-native development."
      },
      {
        "id": "fdf9321c484c",
        "legacyId": "c7c4d039e2ba",
        "topic": "What is .NET Core?",
        "question": "Difference Between .NET Framework and .NET Core",
        "answer": "- `.NET Framework` mainly runs on Windows.\n- `.NET Core` supports Windows, Linux, and macOS.\n- `.NET Core` is better suited for Docker, Kubernetes, and microservices.\n- `.NET Core` is open source and generally has better performance.\n- Later, the ecosystem was unified into `.NET 5+`.\n\nIn one sentence:\nOlder projects often use .NET Framework, while new projects usually prioritize modern .NET."
      },
      {
        "id": "3ab1fd997ee1",
        "legacyId": "1644eddf1756",
        "topic": "Difference Between .NET Framework and .NET Core",
        "question": "Why Is .NET Core Popular?",
        "answer": "- Cross-platform\n- Open source\n- High performance\n- Better for containerized deployment\n- Better for microservice architecture\n- Built-in dependency injection, configuration, and logging"
      },
      {
        "id": "5ecffe5bd158",
        "legacyId": "44465de0c143",
        "topic": "Why Is .NET Core Popular?",
        "question": "What Are CoreCLR, JIT, and GC?",
        "answer": "**CoreCLR\n\n- The core runtime of `.NET Core`\n\n**JIT**\n\n- Just-In-Time compiler\n- Compiles IL into machine code for execution\n\n**GC**\n\n- Garbage Collector\n- Responsible for managed memory cleanup\n\nIn one sentence:\nCoreCLR runs the program, JIT compiles it for execution, and GC handles memory reclamation."
      },
      {
        "id": "aed1d9228518",
        "legacyId": "21778e68913b",
        "topic": "What Are CoreCLR, JIT, and GC?",
        "question": "What Are Managed Code and the Managed Runtime?",
        "answer": "- Managed code runs inside the `.NET` runtime.\n- The runtime is responsible for memory management, exception handling, type safety, and garbage collection.\n- This is also one of the key reasons .NET development is so productive."
      },
      {
        "id": "12c25276c8a3",
        "legacyId": "07130a6ec393",
        "topic": "What Are Managed Code and the Managed Runtime?",
        "question": "What Is ASP.NET Core?",
        "answer": "- A web development framework based on `.NET Core`\n- It can be used to build:\n  - Web APIs\n  - MVC websites\n  - Razor Pages\n  - Microservices\n\nFeatures:\n\n- High performance\n- Cross-platform\n- Clear middleware pipeline\n- Built-in DI, logging, and configuration"
      },
      {
        "id": "e2a21dd3b60d",
        "legacyId": "6f8ce90e4d53",
        "topic": "What Is ASP.NET Core?",
        "question": "What Is the ASP.NET Core Request Pipeline?",
        "answer": "- After a request enters the application, it passes through multiple **Middleware** components in order.\n- Each middleware can:\n  - Process the request\n  - Call the next middleware\n  - Continue processing when the response comes back\n\nIn one sentence:\nASP.NET Core is based on a middleware pipeline, and requests flow through it in registration order."
      },
      {
        "id": "e464ea605dde",
        "legacyId": "fd6a65ad526e",
        "topic": "What Is the ASP.NET Core Request Pipeline?",
        "question": "What Are Common Middleware Components?",
        "answer": "- Exception handling\n- Routing\n- Static files\n- CORS\n- Authentication\n- Authorization\n- Logging\n\nHigh-frequency interview point:\nMiddleware order is very important, especially for routing, authentication, and authorization."
      },
      {
        "id": "7594916b6142",
        "legacyId": "7a127efca184",
        "topic": "What Are Common Middleware Components?",
        "question": "What Is Dependency Injection (DI)?",
        "answer": "- Hand over object creation and dependency management to a container.\n- Reduce coupling between modules.\n- Improve testability and maintainability.\n\nASP.NET Core has a built-in DI container."
      },
      {
        "id": "3aa3df41d484",
        "legacyId": "6c129c0ad11b",
        "topic": "The Three DI Lifetimes",
        "question": "Why Is `DbContext` Usually Registered as `Scoped`?",
        "answer": "- `DbContext` represents a data access session within a request scope.\n- It is not suitable for global sharing.\n- If it is registered as `Singleton`, thread-safety issues and state pollution can easily occur.\n\nIn one sentence:\n`DbContext` usually follows the request lifetime, so it is typically registered as `Scoped`."
      },
      {
        "id": "34f57a479cee",
        "legacyId": "ee7ebe632e32",
        "topic": "Why Is `DbContext` Usually Registered as `Scoped`?",
        "question": "Why Can't a Singleton Directly Depend on a Scoped Service?",
        "answer": "- The `Singleton` lifetime is longer than `Scoped`.\n- This can cause scope mismatch.\n- It may end up holding a disposed instance.\n\nIn one sentence:\nA long-lived object should not directly depend on a short-lived object."
      },
      {
        "id": "81afafbde0bc",
        "legacyId": "9c61610c7847",
        "topic": "Why Can't a Singleton Directly Depend on a Scoped Service?",
        "question": "What Are the Configuration Sources in ASP.NET Core?",
        "answer": "Common sources:\n\n- `appsettings.json`\n- `appsettings.Development.json`\n- Environment variables\n- Command-line arguments\n- Secret Manager\n\nIn one sentence:\nASP.NET Core configuration is layered, and later-loaded sources usually override earlier ones."
      },
      {
        "id": "b5d1aaa0fa0a",
        "legacyId": "5f759a36ad36",
        "topic": "What Are the Configuration Sources in ASP.NET Core?",
        "question": "How Is Logging Done in ASP.NET Core?",
        "answer": "Built-in interface:\n\n- `ILogger<T>`\n\nCommon levels:\n\n- `Trace`\n- `Debug`\n- `Information`\n- `Warning`\n- `Error`\n- `Critical`\n\nCommon ecosystem tools:\n\n- `Serilog`\n- `Seq`\n- `ELK`\n- `Application Insights`"
      },
      {
        "id": "7d89ecfaac01",
        "legacyId": "d9873b6cc641",
        "topic": "How Is Logging Done in ASP.NET Core?",
        "question": "What Are `IHost` and the Generic Host?",
        "answer": "- `.NET Core` uses the Host model to manage the application lifecycle.\n- The Generic Host unifies:\n  - Configuration\n  - Logging\n  - Dependency Injection\n  - Background services\n\nCommon scenarios:\n\n- Web applications\n- Worker Services\n- Background scheduled jobs"
      },
      {
        "id": "5c08f09979e2",
        "legacyId": "45afc2b30556",
        "topic": "What Are `IHost` and the Generic Host?",
        "question": "What Does `Program.cs` Do in .NET Core?",
        "answer": "- Configures the application entry point\n- Registers services in the DI container\n- Configures middleware\n- Starts the application\n\nIn one sentence:\n`Program.cs` is the startup and composition center of the application."
      },
      {
        "id": "9f8869b60b8b",
        "legacyId": "cc1596249c58",
        "topic": "Common Web API Return Types",
        "question": "What Is a RESTful API?",
        "answer": "Core idea:\n\n- URLs represent resources\n- HTTP methods represent operations\n\nCommon methods:\n\n- `GET`: query\n- `POST`: create\n- `PUT`: update\n- `DELETE`: delete"
      },
      {
        "id": "f709d6948dec",
        "legacyId": "452c77abab16",
        "topic": "What Is a RESTful API?",
        "question": "Difference Between Authentication and Authorization",
        "answer": "- **Authentication**: confirms who the user is\n- **Authorization**: confirms what the user is allowed to do"
      },
      {
        "id": "7a44c5db4375",
        "legacyId": "52c42215da9f",
        "topic": "Difference Between Authentication and Authorization",
        "question": "What Is JWT?",
        "answer": "- A common stateless authentication solution\n- Very suitable for frontend-backend separation and distributed systems\n\nStructure:\n\n- `Header`\n- `Payload`\n- `Signature`\n\nNotes:\n\n- Do not store sensitive plaintext data in the `Payload`.\n- Set a reasonable expiration time.\n- Validate signatures properly."
      },
      {
        "id": "a148208c3524",
        "legacyId": "f1188db34d69",
        "topic": "Common Authentication Methods in ASP.NET Core",
        "question": "What Is EF Core?",
        "answer": "- A commonly used ORM in the `.NET Core` era\n- Uses LINQ to operate on the database\n- Supports both Code First and Database First\n\nCore objects:\n\n- `DbContext`\n- `DbSet<TEntity>`"
      },
      {
        "id": "9e2bfc889bc3",
        "legacyId": "893e4aa015e4",
        "topic": "What Is EF Core?",
        "question": "What Is `DbContext`?",
        "answer": "- The core context object for database access\n- Responsible for connection management, change tracking, querying, and saving\n\nIn one sentence:\n`DbContext` can be understood as a database session."
      },
      {
        "id": "2995225298e2",
        "legacyId": "cc4f7aaa0a19",
        "topic": "Common EF Core Capabilities",
        "question": "What Is a Migration?",
        "answer": "- EF Core's database migration mechanism\n- Used to manage schema changes\n\nIn one sentence:\nMigrations keep the code model and database schema evolving together."
      },
      {
        "id": "53f9b74333d3",
        "legacyId": "3e31b22a6956",
        "topic": "What Is a Migration?",
        "question": "How Do You Optimize EF Core Queries?",
        "answer": "- `AsNoTracking()`: improve performance for read-only queries\n- `Select()`: only fetch needed fields\n- `Include()`: load related data\n- Pagination: `Skip()` / `Take()`\n- Avoid N+1 queries\n- Add indexes to high-frequency fields"
      },
      {
        "id": "6c44988258de",
        "legacyId": "9de183188823",
        "topic": "How Do You Optimize EF Core Queries?",
        "question": "What Is the N+1 Query Problem?",
        "answer": "- First query the main data\n- Then query related data once for each row of main data\n- This leads to too many SQL executions\n\nIn one sentence:\nThe essence of the N+1 problem is uncontrolled query count, usually optimized with `Include` or projection queries."
      },
      {
        "id": "61b33fa9f5a2",
        "legacyId": "d1e82a400104",
        "topic": "What Is the N+1 Query Problem?",
        "question": "What Is `AsNoTracking()` Used For?",
        "answer": "- Disables entity change tracking\n- Reduces memory usage\n- Improves read-only query performance"
      },
      {
        "id": "79d2aa494e6f",
        "legacyId": "e58e897791fd",
        "topic": "What Is `AsNoTracking()` Used For?",
        "question": "How Is Caching Done in ASP.NET Core?",
        "answer": "Common approaches:\n\n- Local cache: `MemoryCache`\n- Distributed cache: `Redis`\n\nBenefits:\n\n- Reduce database pressure\n- Improve API response speed\n\nPay attention to:\n\n- Cache consistency\n- Cache penetration\n- Cache breakdown\n- Cache avalanche"
      },
      {
        "id": "79d462356339",
        "legacyId": "97b2ec5118cb",
        "topic": "How Is Caching Done in ASP.NET Core?",
        "question": "What Is Garbage Collection (GC)?",
        "answer": "- .NET's automatic memory management mechanism\n- Responsible for reclaiming managed objects that are no longer in use\n\nGenerations:\n\n- `Gen 0`\n- `Gen 1`\n- `Gen 2`\n\nAdditional point:\n\n- Large Object Heap `LOH`"
      },
      {
        "id": "51ef0b1b4b3b",
        "legacyId": "63a872512596",
        "topic": "What Is Garbage Collection (GC)?",
        "question": "Difference Between `Dispose` and GC",
        "answer": "- `GC`: manages managed memory, but the execution time is not deterministic\n- `Dispose`: used to proactively release unmanaged resources\n\nCommon resources:\n\n- Database connections\n- File handles\n- Network connections\n\nIn one sentence:\nGC handles memory, while `Dispose` handles external resources."
      },
      {
        "id": "bb94d39eeb21",
        "legacyId": "e4b629c195c5",
        "topic": "Difference Between `Dispose` and GC",
        "question": "What Is `using` For?",
        "answer": "- Ensures `Dispose` is called automatically after the object is used\n- Commonly used for connections, file streams, network streams, and similar scenarios"
      },
      {
        "id": "56ca07a0eb44",
        "legacyId": "d429a64e0bce",
        "topic": "What Is `using` For?",
        "question": "How Do You Optimize ASP.NET Core Performance?",
        "answer": "- Use asynchronous I/O\n- Reduce unnecessary object allocations\n- Use caching appropriately\n- Optimize database queries\n- Return only necessary fields\n- Add pagination to APIs\n- Use connection pooling\n- Avoid repeated serialization and expensive reflection on hot paths"
      },
      {
        "id": "72dbbe3305c5",
        "legacyId": "0af7a284b61b",
        "topic": "How Do You Optimize ASP.NET Core Performance?",
        "question": "What Is Kestrel?",
        "answer": "- The built-in cross-platform web server in ASP.NET Core\n- Usually used to host the application service\n- In production it is often used together with Nginx or IIS\n\nIn one sentence:\nKestrel is the default web server for ASP.NET Core."
      },
      {
        "id": "b1cdc7bd153a",
        "legacyId": "11c990f802f7",
        "topic": "What Is Kestrel?",
        "question": "Why Is ASP.NET Core Suitable for Microservices?",
        "answer": "- Lightweight\n- High performance\n- Cross-platform\n- Easy to containerize\n- Complete configuration, logging, and DI ecosystem\n- Very suitable for Docker / Kubernetes deployment"
      }
    ]
  },
  {
    "fileName": "06_DotNet_Entity_Framework概览.md",
    "sourcePath": "06_DotNet_Entity_Framework概览.md",
    "title": "Entity Framework Overview",
    "category": "backend",
    "tags": [
      "entity-framework",
      "ef-core",
      "orm",
      "dotnet"
    ],
    "language": "en",
    "count": 3,
    "questions": [
      {
        "id": "6e3121195597",
        "legacyId": "fb77b6e3b223",
        "topic": "General",
        "question": "What problem does it solve?",
        "answer": "Without EF, database access often looks like this:\n\n1. Write SQL manually\n2. Open a database connection\n3. Execute the command\n4. Read the result set\n5. Map each column into an object\n\nEF abstracts most of that away, so your code can look more like this:\n\n```csharp\nvar user = new User { Name = \"Alice\" };\ncontext.Users.Add(user);\ncontext.SaveChanges();\n```\n\nEF generates the corresponding `INSERT` SQL behind the scenes."
      },
      {
        "id": "cbeae97859d1",
        "legacyId": "c253ca2b4e8e",
        "topic": "Code First",
        "question": "What are Migrations?",
        "answer": "Migrations are EF's way of versioning database schema changes.\n\nFor example, if you add a new property:\n\n```csharp\npublic string Email { get; set; }\n```\n\nYou can generate a migration so EF creates the corresponding schema update.\n\nCommon commands:\n\n```bash\ndotnet ef migrations add AddUserEmail\ndotnet ef database update\n```"
      },
      {
        "id": "608080649648",
        "legacyId": "4fb1baf9eafe",
        "topic": "Disadvantages",
        "question": "When is Entity Framework a good fit?",
        "answer": "Entity Framework works well for:\n\n- Business applications\n- Internal tools and back-office systems\n- CRUD-heavy systems\n- .NET projects that value developer productivity\n\nIt may be less suitable for:\n\n- Extremely performance-sensitive systems\n- Applications with very complex SQL requirements\n- Systems that depend heavily on stored procedures or tightly controlled SQL"
      }
    ]
  },
  {
    "fileName": "07_数据库_基础面试问答.md",
    "sourcePath": "07_数据库_基础面试问答.md",
    "title": "Database Interview Q&A",
    "category": "database",
    "tags": [
      "database",
      "sql",
      "transactions",
      "indexes",
      "interview"
    ],
    "language": "en",
    "count": 47,
    "questions": [
      {
        "id": "bd7a28e0616c",
        "legacyId": "04adc8c46dca",
        "topic": "Common Database Interview Questions",
        "question": "What is a database?",
        "answer": "A database is an organized system for storing, managing, and retrieving data efficiently. It allows applications and users to insert, update, query, and analyze information in a structured way."
      },
      {
        "id": "6f18dea20706",
        "legacyId": "ce04d6e93c28",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between SQL and NoSQL databases?",
        "answer": "SQL databases are relational, use structured schemas, and are typically queried with SQL. They are strong when you need joins, transactions, and strict consistency. NoSQL databases are often schema-flexible and are designed for use cases such as large-scale document storage, caching, graph traversal, or high-throughput distributed workloads."
      },
      {
        "id": "6372784d973e",
        "legacyId": "89049e684799",
        "topic": "Common Database Interview Questions",
        "question": "What is a primary key?",
        "answer": "A primary key is a column or set of columns that uniquely identifies each row in a table. It must contain unique values and cannot be null."
      },
      {
        "id": "661e275ad823",
        "legacyId": "d9f4adb5775b",
        "topic": "Common Database Interview Questions",
        "question": "What is a foreign key?",
        "answer": "A foreign key is a column or set of columns in one table that references the primary key of another table. It enforces referential integrity between related tables."
      },
      {
        "id": "686de425b062",
        "legacyId": "3a48de7ccf20",
        "topic": "Common Database Interview Questions",
        "question": "What is normalization?",
        "answer": "Normalization is the process of organizing data to reduce redundancy and improve data integrity. Common normal forms include 1NF, 2NF, and 3NF."
      },
      {
        "id": "ae15e98df874",
        "legacyId": "0eb871c012f5",
        "topic": "Common Database Interview Questions",
        "question": "When would you denormalize a database?",
        "answer": "You denormalize when read performance is more important than strict normalization, especially in reporting, analytics, or high-read systems where reducing joins improves speed."
      },
      {
        "id": "adb58504f316",
        "legacyId": "0f77d8eb79b8",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between DELETE, TRUNCATE, and DROP?",
        "answer": "- `DELETE` removes selected rows and can be used with a `WHERE` clause.\n- `TRUNCATE` removes all rows from a table quickly, usually with minimal logging.\n- `DROP` removes the entire table structure and its data."
      },
      {
        "id": "e3bfb063e076",
        "legacyId": "a88a16e7f28c",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between WHERE and HAVING?",
        "answer": "`WHERE` filters rows before grouping. `HAVING` filters groups after `GROUP BY` has been applied."
      },
      {
        "id": "d2332a31bb73",
        "legacyId": "00cd0d89d012",
        "topic": "Common Database Interview Questions",
        "question": "What is a JOIN?",
        "answer": "A JOIN combines rows from two or more tables based on a related column."
      },
      {
        "id": "95d8ec7e8cd4",
        "legacyId": "5f2d21635ce7",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between INNER JOIN and LEFT JOIN?",
        "answer": "`INNER JOIN` returns only matching rows from both tables. `LEFT JOIN` returns all rows from the left table and matching rows from the right table, with nulls when no match exists."
      },
      {
        "id": "81facc2b3a6a",
        "legacyId": "46bec0ede10d",
        "topic": "Common Database Interview Questions",
        "question": "What is an index?",
        "answer": "An index is a data structure that improves lookup speed on one or more columns. It helps queries avoid full table scans, though it adds storage cost and can slow down inserts, updates, and deletes."
      },
      {
        "id": "35d8489e6506",
        "legacyId": "88e8b61d5748",
        "topic": "Common Database Interview Questions",
        "question": "What are constraints in a database?",
        "answer": "Constraints are rules enforced on data to maintain integrity. Common examples are `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, and `CHECK`."
      },
      {
        "id": "0f058c7aeb86",
        "legacyId": "8f21ef924057",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between UNIQUE and PRIMARY KEY?",
        "answer": "Both enforce uniqueness, but a primary key uniquely identifies the main record in a table and cannot be null. A table has one primary key, while it may have multiple unique constraints depending on the database engine."
      },
      {
        "id": "2e635a1b1606",
        "legacyId": "c45ccf0c7024",
        "topic": "Common Database Interview Questions",
        "question": "What is a transaction?",
        "answer": "A transaction is a sequence of database operations treated as a single unit of work. It either fully succeeds and commits, or fails and rolls back."
      },
      {
        "id": "af6623665434",
        "legacyId": "ff1ada6b6508",
        "topic": "Common Database Interview Questions",
        "question": "What does ACID mean?",
        "answer": "- **Atomicity**: all operations in a transaction succeed or none do.\n- **Consistency**: the database remains in a valid state.\n- **Isolation**: concurrent transactions do not interfere improperly.\n- **Durability**: committed changes survive failures."
      },
      {
        "id": "adf42aa398a0",
        "legacyId": "4436cfae341e",
        "topic": "Common Database Interview Questions",
        "question": "What is the difference between a clustered and non-clustered index?",
        "answer": "A clustered index determines the physical order of data storage in the table. A non-clustered index stores a separate structure with pointers to the actual rows. A table generally has one clustered index but can have many non-clustered indexes."
      },
      {
        "id": "590216ffc2eb",
        "legacyId": "440cf9cc2f1f",
        "topic": "Common Database Interview Questions",
        "question": "What is a composite index?",
        "answer": "A composite index is an index on multiple columns. It is useful when queries commonly filter or sort by those columns together."
      },
      {
        "id": "3d996148b6a8",
        "legacyId": "80de3a4f1f6c",
        "topic": "Common Database Interview Questions",
        "question": "What is the N+1 query problem?",
        "answer": "The N+1 query problem happens when an application performs one query to fetch a list of records and then executes an additional query for each record to fetch related data. It causes unnecessary round trips and poor performance."
      },
      {
        "id": "66f78a622a30",
        "legacyId": "89f66a1105b5",
        "topic": "Common Database Interview Questions",
        "question": "What is a view?",
        "answer": "A view is a virtual table based on the result of a query. It can simplify complex queries, improve reusability, and sometimes provide a security abstraction."
      },
      {
        "id": "411500d598e5",
        "legacyId": "7929de94f292",
        "topic": "Common Database Interview Questions",
        "question": "What is a stored procedure?",
        "answer": "A stored procedure is a reusable set of SQL statements stored in the database. It can encapsulate business logic, improve consistency, and reduce repeated SQL in applications."
      },
      {
        "id": "26d2d8356bef",
        "legacyId": "0a3a81362a65",
        "topic": "Advanced Database Interview Questions",
        "question": "What are database isolation levels?",
        "answer": "Isolation levels define how transactions interact with one another:\n- `Read Uncommitted`: allows dirty reads.\n- `Read Committed`: prevents dirty reads.\n- `Repeatable Read`: prevents dirty and non-repeatable reads.\n- `Serializable`: highest isolation, prevents dirty, non-repeatable, and phantom reads, but reduces concurrency."
      },
      {
        "id": "5cc3567830be",
        "legacyId": "08f1ffe6d0df",
        "topic": "Advanced Database Interview Questions",
        "question": "What are dirty reads, non-repeatable reads, and phantom reads?",
        "answer": "- **Dirty read**: reading uncommitted data from another transaction.\n- **Non-repeatable read**: getting different values when reading the same row twice in one transaction.\n- **Phantom read**: seeing different sets of rows when rerunning a query in one transaction because another transaction inserted or deleted matching rows."
      },
      {
        "id": "aac82e93c2cd",
        "legacyId": "e0490b6d5ba9",
        "topic": "Advanced Database Interview Questions",
        "question": "What is a deadlock?",
        "answer": "A deadlock happens when two or more transactions wait on each other to release locks, so none can proceed. Databases usually detect deadlocks and abort one transaction."
      },
      {
        "id": "ee04ca13050b",
        "legacyId": "762ab43c51fd",
        "topic": "Advanced Database Interview Questions",
        "question": "How can you reduce the chance of deadlocks?",
        "answer": "You can reduce deadlocks by accessing tables in a consistent order, keeping transactions short, indexing properly to reduce lock duration, and avoiding unnecessary user interaction inside transactions."
      },
      {
        "id": "3786cfc2f76a",
        "legacyId": "7fb53b456719",
        "topic": "Advanced Database Interview Questions",
        "question": "What is optimistic locking vs pessimistic locking?",
        "answer": "Optimistic locking assumes conflicts are rare and checks for changes before commit, often using a version column. Pessimistic locking locks data early to prevent concurrent modification, which is safer for contention-heavy scenarios but reduces concurrency."
      },
      {
        "id": "ca3a1c60a36d",
        "legacyId": "948b4dd323af",
        "topic": "Advanced Database Interview Questions",
        "question": "How would you optimize a slow SQL query?",
        "answer": "Start by checking the execution plan. Look for full table scans, expensive joins, sorts, and missing indexes. Then reduce scanned rows, add or refine indexes, rewrite inefficient predicates, avoid unnecessary columns, and verify whether schema or query structure should change."
      },
      {
        "id": "5f6de2f7ceec",
        "legacyId": "43e4a8f24204",
        "topic": "Advanced Database Interview Questions",
        "question": "What is an execution plan?",
        "answer": "An execution plan shows how the database engine will execute a query, including scans, seeks, joins, sorts, and estimated or actual costs. It is one of the main tools for diagnosing performance issues."
      },
      {
        "id": "a90e861017d1",
        "legacyId": "0bbed43b6dc1",
        "topic": "Advanced Database Interview Questions",
        "question": "Why might a query not use an index?",
        "answer": "Common reasons include low selectivity, outdated statistics, small table size, functions applied to indexed columns, implicit type conversions, leading wildcards in `LIKE`, or because the optimizer estimates a scan is cheaper."
      },
      {
        "id": "5648ba926dd9",
        "legacyId": "77d5d6a13497",
        "topic": "Advanced Database Interview Questions",
        "question": "What is partitioning?",
        "answer": "Partitioning splits a large table or index into smaller logical pieces while still presenting it as one object. It can improve manageability and, in some cases, query performance when filters align with the partition key."
      },
      {
        "id": "6843ac1b0e33",
        "legacyId": "238f1a0a0484",
        "topic": "Advanced Database Interview Questions",
        "question": "What is sharding?",
        "answer": "Sharding distributes data across multiple independent database servers, usually by a shard key. It helps scale horizontally, but it increases complexity around joins, transactions, and rebalancing."
      },
      {
        "id": "4af4546283b7",
        "legacyId": "e3f7adb904f1",
        "topic": "Advanced Database Interview Questions",
        "question": "What is replication?",
        "answer": "Replication is the process of copying data from one database server to others. It is commonly used for high availability, disaster recovery, and read scaling."
      },
      {
        "id": "4099e65f3d0b",
        "legacyId": "c6b7a1e5bfa7",
        "topic": "Advanced Database Interview Questions",
        "question": "What is the CAP theorem?",
        "answer": "The CAP theorem says that in a distributed system, during a network partition you can choose at most two of the following three guarantees: consistency, availability, and partition tolerance. Since partitions can happen, systems often make tradeoffs between consistency and availability."
      },
      {
        "id": "83ce91e5e393",
        "legacyId": "90b5b9eab733",
        "topic": "Advanced Database Interview Questions",
        "question": "What is eventual consistency?",
        "answer": "Eventual consistency means that if no new updates occur, all replicas will eventually converge to the same value. It is common in distributed systems that prioritize availability and performance."
      },
      {
        "id": "01daf62db4bb",
        "legacyId": "d58b38138ab7",
        "topic": "Advanced Database Interview Questions",
        "question": "What is a covering index?",
        "answer": "A covering index includes all the columns needed to satisfy a query, so the database can return results directly from the index without going back to the base table."
      },
      {
        "id": "43c8a21a10ac",
        "legacyId": "a157f2fa2cc2",
        "topic": "Advanced Database Interview Questions",
        "question": "What is cardinality in databases?",
        "answer": "Cardinality can refer to relationship type, such as one-to-many, or to the number of distinct values in a column. In query optimization, higher cardinality often makes an index more useful."
      },
      {
        "id": "71f8d9f39b19",
        "legacyId": "8ba937bd3053",
        "topic": "Advanced Database Interview Questions",
        "question": "What is the difference between OLTP and OLAP?",
        "answer": "OLTP systems handle many short, transactional operations such as inserts and updates in business applications. OLAP systems are optimized for analytical queries, aggregations, and reporting across large datasets."
      },
      {
        "id": "cb2bdf239fac",
        "legacyId": "245f755b1ad6",
        "topic": "Advanced Database Interview Questions",
        "question": "What are materialized views?",
        "answer": "Materialized views store the results of a query physically, unlike standard views which are computed at query time. They improve read performance for expensive queries but require refresh management."
      },
      {
        "id": "785ef0dba3a3",
        "legacyId": "62360e28e0a2",
        "topic": "Advanced Database Interview Questions",
        "question": "What is database caching?",
        "answer": "Database caching stores frequently accessed data in a faster layer, such as Redis or application memory, to reduce database load and improve latency."
      },
      {
        "id": "d6b8b1430d97",
        "legacyId": "8ade5a150205",
        "topic": "Advanced Database Interview Questions",
        "question": "What are database statistics, and why do they matter?",
        "answer": "Statistics describe data distribution and help the query optimizer estimate row counts and choose efficient execution plans. Poor or stale statistics can cause bad plans and slow queries."
      },
      {
        "id": "ccc81ba6422c",
        "legacyId": "483edfbf0a23",
        "topic": "Advanced Database Interview Questions",
        "question": "What is a schema migration?",
        "answer": "A schema migration is a controlled change to the database structure, such as adding tables, columns, indexes, or constraints. Good migration practice includes versioning, rollback planning, and backward compatibility for live systems."
      },
      {
        "id": "e269112a6bb0",
        "legacyId": "b7bc4d1b69bf",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you design a database for an e-commerce application?",
        "answer": "I would start with core entities such as users, products, categories, carts, orders, order items, payments, and inventory. I would normalize transactional tables, add indexes for common lookups, and carefully model inventory and order state changes with transactions. For scale, I would consider caching, read replicas, and search services for product discovery."
      },
      {
        "id": "2b12691e08f7",
        "legacyId": "6334a71eac4a",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you handle a table with hundreds of millions of rows?",
        "answer": "I would review access patterns first, then add or refine indexes, archive cold data if appropriate, and consider partitioning. I would also check whether queries can be narrowed by date or tenant and whether expensive reporting should move to a separate analytical system."
      },
      {
        "id": "5084f6efd744",
        "legacyId": "4b853f152d4f",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you safely add a new non-null column to a large production table?",
        "answer": "I would usually add it as nullable first, backfill in batches, update the application to write the new value, validate completeness, and only then enforce the non-null constraint. This reduces lock time and deployment risk."
      },
      {
        "id": "3566ab1d84f8",
        "legacyId": "538c1a35738f",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you investigate high database CPU usage?",
        "answer": "I would identify the top expensive queries, inspect execution plans, check waits and locks, review recent deployments, and confirm whether missing indexes, bad plans, parameter sniffing, or unexpected traffic spikes are involved."
      },
      {
        "id": "ff0973a58a7d",
        "legacyId": "732f5e6e5efc",
        "topic": "Scenario-Based Questions and Answers",
        "question": "How would you prevent duplicate records in a concurrent system?",
        "answer": "I would use a unique constraint or unique index at the database level, because application-only checks are vulnerable to race conditions. Then I would handle duplicate-key errors gracefully in the application."
      },
      {
        "id": "a7d26ec1e96d",
        "legacyId": "c4e844dee3b4",
        "topic": "Short SQL Prompts You May Be Asked",
        "question": "Explain the difference between COUNT(*), COUNT(1), and COUNT(column).",
        "answer": "`COUNT(*)` counts all rows. `COUNT(1)` is generally treated the same by modern optimizers. `COUNT(column)` counts only rows where that column is not null."
      },
      {
        "id": "cddc8b891d83",
        "legacyId": "8d4945fd59d8",
        "topic": "Short SQL Prompts You May Be Asked",
        "question": "What makes a strong database answer in interviews?",
        "answer": "A strong answer balances correctness, tradeoffs, and practical experience. Good candidates explain not just what a concept is, but when it matters, what can go wrong, and how they have approached it in real systems."
      }
    ]
  },
  {
    "fileName": "08_Nodejs_GeeksforGeeks_Interview_QA.md",
    "sourcePath": "08_Nodejs_GeeksforGeeks_Interview_QA.md",
    "title": "Node.js GeeksforGeeks Interview Q&A",
    "category": "backend",
    "tags": [
      "nodejs",
      "javascript",
      "backend",
      "interview"
    ],
    "language": "en",
    "count": 58,
    "questions": [
      {
        "id": "5abf469c9369",
        "legacyId": "b106ca5532d1",
        "topic": "Freshers",
        "question": "How does Node.js work?",
        "answer": "Node.js runs JavaScript on the server using the V8 engine. It uses an event loop and non-blocking I/O, so slow tasks like file or network operations do not block the main thread."
      },
      {
        "id": "d5cd8ca26e11",
        "legacyId": "857f4bfe96f5",
        "topic": "Freshers",
        "question": "What is NPM?",
        "answer": "NPM is the Node Package Manager. It helps install, update, remove, and manage JavaScript packages and project dependencies through `package.json`."
      },
      {
        "id": "d2732ce67043",
        "legacyId": "10af013915de",
        "topic": "Freshers",
        "question": "Why is Node.js single-threaded?",
        "answer": "Node.js keeps JavaScript execution single-threaded to make request handling lightweight. It still handles many concurrent I/O tasks through asynchronous APIs, the event loop, and libuv."
      },
      {
        "id": "79b9680a5a8b",
        "legacyId": "722c23b93c1d",
        "topic": "Freshers",
        "question": "If Node.js is single-threaded, how does it handle concurrency?",
        "answer": "Node.js handles concurrency by starting I/O work asynchronously and continuing other work while it waits. When the I/O finishes, callbacks or promises are queued back to the event loop."
      },
      {
        "id": "fc3fb4f6d3f1",
        "legacyId": "062f1dc83185",
        "topic": "Freshers",
        "question": "Why is Node.js preferred over some backend technologies?",
        "answer": "Node.js is strong for I/O-heavy and real-time applications. It is fast, uses JavaScript across frontend and backend, and has a large package ecosystem through NPM."
      },
      {
        "id": "e6a386cd85fc",
        "legacyId": "b7ade1107e33",
        "topic": "Freshers",
        "question": "What is the difference between synchronous and asynchronous functions?",
        "answer": "Synchronous functions block until they finish. Asynchronous functions start work and return control quickly, then deliver the result later through callbacks, promises, or `async/await`."
      },
      {
        "id": "6261bd558c22",
        "legacyId": "154e8a03e868",
        "topic": "Freshers",
        "question": "What is a module in Node.js?",
        "answer": "A module is a reusable piece of code. Node.js has built-in modules like `fs`, `http`, and `path`, and projects can also define custom modules or install packages."
      },
      {
        "id": "6bc1c7209fcb",
        "legacyId": "3fd8c3c066bb",
        "topic": "Freshers",
        "question": "What is the purpose of `require` in Node.js?",
        "answer": "`require` imports CommonJS modules into a file. For example, `const fs = require(\"fs\")` loads the file system module."
      },
      {
        "id": "cd966b5a6cc1",
        "legacyId": "3c70c347b50f",
        "topic": "Freshers",
        "question": "What is the V8 engine in Node.js?",
        "answer": "V8 is Google's JavaScript engine. Node.js uses it to compile and execute JavaScript outside the browser."
      },
      {
        "id": "9faebc95e50c",
        "legacyId": "61bb550323d1",
        "topic": "Freshers",
        "question": "How do you handle environment variables in Node.js?",
        "answer": "Environment variables are read through `process.env`. In local development, projects often use `dotenv` to load values from a `.env` file."
      },
      {
        "id": "2f7dc2202b88",
        "legacyId": "b6b8d334ef0a",
        "topic": "Freshers",
        "question": "What is control flow in Node.js?",
        "answer": "Control flow means managing the order of asynchronous work. It helps make sure dependent operations run in the right sequence even when tasks finish at different times."
      },
      {
        "id": "4c1359e24887",
        "legacyId": "3251ba326466",
        "topic": "Freshers",
        "question": "What is the event loop in Node.js?",
        "answer": "The event loop is the mechanism that lets Node.js run callbacks for completed asynchronous tasks. It allows one JavaScript thread to coordinate many I/O operations."
      },
      {
        "id": "b1e8eedd4d75",
        "legacyId": "80b348ddffba",
        "topic": "Freshers",
        "question": "What is the usual order of asynchronous control flow?",
        "answer": "Start the operation, let Node.js handle waiting work in the background, queue the callback or promise result, then continue execution when the event loop picks it up."
      },
      {
        "id": "a7941c3703b5",
        "legacyId": "3486c9e6687c",
        "topic": "Freshers",
        "question": "What are the main disadvantages of Node.js?",
        "answer": "Node.js is not ideal for CPU-heavy work on the main thread. It can also suffer from dependency risk, fast ecosystem changes, and callback or async complexity if code is not organized well."
      },
      {
        "id": "2a433e9a4cb2",
        "legacyId": "4009be641a32",
        "topic": "Freshers",
        "question": "What is REPL in Node.js?",
        "answer": "REPL means Read, Evaluate, Print, Loop. It is an interactive Node.js shell for quickly running and testing JavaScript expressions."
      },
      {
        "id": "ae4a58e2f766",
        "legacyId": "bd8fd124b79b",
        "topic": "Freshers",
        "question": "How do you import a module in Node.js?",
        "answer": "In CommonJS, use `require`. In ES modules, use `import`. Newer projects often use ES modules, but many Node.js projects still use CommonJS."
      },
      {
        "id": "81c63c7ad81c",
        "legacyId": "2a9a304c3d36",
        "topic": "Freshers",
        "question": "What is the difference between Node.js and Angular?",
        "answer": "Node.js is a server-side JavaScript runtime. Angular is a frontend framework for building browser-based user interfaces, usually with TypeScript."
      },
      {
        "id": "972cb1355800",
        "legacyId": "dd7a3a219223",
        "topic": "Freshers",
        "question": "What is `package.json` in Node.js?",
        "answer": "`package.json` stores project metadata, scripts, dependencies, and configuration. It is the main manifest file for a Node.js project."
      },
      {
        "id": "8f27a088935d",
        "legacyId": "9d1c96b6fe70",
        "topic": "Freshers",
        "question": "How do you create a simple HTTP server in Node.js?",
        "answer": "Use the built-in `http` module, create a server with `http.createServer`, write a response, and call `server.listen(port)`."
      },
      {
        "id": "e328c68775a3",
        "legacyId": "5f29959953f3",
        "topic": "Freshers",
        "question": "What are commonly used libraries in Node.js?",
        "answer": "Common libraries include Express for web APIs and Mongoose for working with MongoDB. Real projects also often use libraries for validation, logging, auth, and testing."
      },
      {
        "id": "c74e0ff7ec60",
        "legacyId": "fcf02da6fcfa",
        "topic": "Freshers",
        "question": "What are promises in Node.js?",
        "answer": "A promise represents the future result of an asynchronous operation. It can be resolved, rejected, chained with `.then`, or handled with `async/await`."
      },
      {
        "id": "546d3dcd33e3",
        "legacyId": "973b0cf28c42",
        "topic": "Freshers",
        "question": "How do you install, update, and delete a dependency?",
        "answer": "Use `npm install package`, `npm update package`, and `npm uninstall package`. These commands update dependency information in the project files."
      },
      {
        "id": "4fb0b139e474",
        "legacyId": "143f909adc54",
        "topic": "Freshers",
        "question": "Which command or syntax is used to import external libraries?",
        "answer": "After installing a package with NPM, CommonJS code imports it with `require(\"package\")`, while ES module code uses `import`."
      },
      {
        "id": "a3d9c9969a15",
        "legacyId": "bc6c7fb2c90b",
        "topic": "Intermediate",
        "question": "What is event-driven programming in Node.js?",
        "answer": "Event-driven programming means code reacts to events such as requests, file completion, or messages. Event handlers run when those events are emitted."
      },
      {
        "id": "39ae6f4cdcd8",
        "legacyId": "c269a03ee6d8",
        "topic": "Intermediate",
        "question": "What is a Buffer in Node.js?",
        "answer": "A Buffer is used to work with raw binary data. It is useful for files, network streams, and data that is not plain JavaScript text."
      },
      {
        "id": "67c5d658aa68",
        "legacyId": "5d34634c2c4f",
        "topic": "Intermediate",
        "question": "What are streams in Node.js?",
        "answer": "Streams process data in chunks instead of loading everything into memory. They are useful for large files, HTTP bodies, compression, and real-time data flow."
      },
      {
        "id": "43f749439501",
        "legacyId": "33eb4166d740",
        "topic": "Intermediate",
        "question": "What is the crypto module in Node.js?",
        "answer": "The `crypto` module provides cryptographic features such as hashing, encryption, decryption, and secure random values."
      },
      {
        "id": "77bd839859ac",
        "legacyId": "4f65369236e0",
        "topic": "Intermediate",
        "question": "What is callback hell?",
        "answer": "Callback hell happens when many callbacks are nested inside each other. It makes code hard to read and can be improved with promises or `async/await`."
      },
      {
        "id": "c31e84788d48",
        "legacyId": "6c6df91adcee",
        "topic": "Intermediate",
        "question": "What is the timers module in Node.js?",
        "answer": "Timers schedule code to run later or repeatedly. Common timer functions include `setTimeout`, `setInterval`, and `setImmediate`."
      },
      {
        "id": "da277a134ab9",
        "legacyId": "d83eed1efe46",
        "topic": "Intermediate",
        "question": "What is the difference between `setImmediate` and `process.nextTick`?",
        "answer": "`process.nextTick` runs before the event loop continues to the next phase, so overusing it can block I/O. `setImmediate` runs in a later event loop phase, usually after I/O callbacks."
      },
      {
        "id": "cbcb89a5c4bc",
        "legacyId": "fd9e175faac1",
        "topic": "Intermediate",
        "question": "What are common HTTP request methods?",
        "answer": "Common methods are `GET` for reading, `POST` for creating, `PUT` for full updates, `PATCH` for partial updates, and `DELETE` for removing resources."
      },
      {
        "id": "5e16ffb935f9",
        "legacyId": "64a4fa1f2bd4",
        "topic": "Intermediate",
        "question": "What is the difference between `spawn()` and `fork()`?",
        "answer": "`spawn()` runs an external command or process. `fork()` starts another Node.js process and includes an IPC channel for communication."
      },
      {
        "id": "aea8b69bf2a7",
        "legacyId": "3f809ae4c1b9",
        "topic": "Intermediate",
        "question": "What is Passport in Node.js?",
        "answer": "Passport is authentication middleware. It supports many login strategies, such as local login, OAuth, Google, GitHub, and JWT-style flows."
      },
      {
        "id": "cf7d4834707c",
        "legacyId": "8d29ef143bad",
        "topic": "Intermediate",
        "question": "What is a fork in Node.js?",
        "answer": "A fork creates a child Node.js process. It is useful for running work in a separate process and communicating with the parent process."
      },
      {
        "id": "a30bb6f700f1",
        "legacyId": "eea1948f88d1",
        "topic": "Intermediate",
        "question": "What are three ways to avoid callback hell?",
        "answer": "Use promises, `async/await`, or split callback logic into named functions. In modern Node.js, `async/await` is usually the clearest option."
      },
      {
        "id": "c3994c2a25d5",
        "legacyId": "3aaa6041db3e",
        "topic": "Intermediate",
        "question": "What is body-parser in Node.js?",
        "answer": "Body-parser is middleware that parses request bodies before route handlers use them. In modern Express, `express.json()` and `express.urlencoded()` cover many common cases."
      },
      {
        "id": "0ce7552d3605",
        "legacyId": "216917f2671b",
        "topic": "Intermediate",
        "question": "What is CORS in Node.js?",
        "answer": "CORS is a browser security mechanism for cross-origin requests. In Express, the `cors` package is often used to set the required CORS headers."
      },
      {
        "id": "32b15600a38e",
        "legacyId": "7ca04af345a6",
        "topic": "Intermediate",
        "question": "What is the TLS module in Node.js?",
        "answer": "The `tls` module supports secure network connections using TLS or SSL. It is used when encrypted communication is required."
      },
      {
        "id": "1c663e772e4a",
        "legacyId": "d0d9c780405c",
        "topic": "Intermediate",
        "question": "Can Node.js access the DOM?",
        "answer": "No. The DOM belongs to the browser environment. Node.js runs on the server and does not have a browser DOM unless a library simulates one."
      },
      {
        "id": "688df09d90f9",
        "legacyId": "545849aa308e",
        "topic": "Intermediate",
        "question": "How do you manage packages in a Node.js project?",
        "answer": "Use NPM or another package manager, keep dependencies in `package.json`, and commit the lock file to make installs more reproducible."
      },
      {
        "id": "19a366c41f0a",
        "legacyId": "36e7d3f81f25",
        "topic": "Intermediate",
        "question": "What is the purpose of `NODE_ENV`?",
        "answer": "`NODE_ENV` tells the app which environment it is running in, such as development, test, or production. Apps use it to change logging, debugging, and performance behavior."
      },
      {
        "id": "efe2e0b3b268",
        "legacyId": "05f1e10640ec",
        "topic": "Intermediate",
        "question": "What is a test pyramid in Node.js?",
        "answer": "A test pyramid means many fast unit tests at the base, fewer integration tests in the middle, and a small number of end-to-end tests at the top."
      },
      {
        "id": "2dbbc9f213ce",
        "legacyId": "8bc43a4e5c2e",
        "topic": "Experienced",
        "question": "What is piping in Node.js?",
        "answer": "Piping sends data from one stream directly into another stream. It is useful for efficient file, network, compression, or response handling."
      },
      {
        "id": "60c4a564ce37",
        "legacyId": "037c3b290d20",
        "topic": "Experienced",
        "question": "What is clustering in Node.js?",
        "answer": "Clustering runs multiple worker processes so a Node.js app can use multiple CPU cores. A primary process manages the workers."
      },
      {
        "id": "407dfff234e3",
        "legacyId": "08e11c9997e2",
        "topic": "Experienced",
        "question": "What are common cluster methods or properties in Node.js?",
        "answer": "Common cluster features include `fork()` to create workers, worker checks, process references, `send()` for messages, and worker termination methods."
      },
      {
        "id": "058ad7b5df32",
        "legacyId": "f96eb34edac2",
        "topic": "Experienced",
        "question": "How do you manage sessions in Node.js?",
        "answer": "In Express, sessions are often managed with `express-session`. The browser stores a session id, while session data should usually be stored server-side or in a shared store."
      },
      {
        "id": "1a3bdaea48f3",
        "legacyId": "f588c6542a78",
        "topic": "Experienced",
        "question": "How many types of API functions are there in Node.js?",
        "answer": "Node.js APIs are often grouped as asynchronous non-blocking functions and synchronous blocking functions. Async versions are preferred for server request paths."
      },
      {
        "id": "beed44eb9b24",
        "legacyId": "9e245f9439e4",
        "topic": "Experienced",
        "question": "How can you implement authentication and authorization in Node.js?",
        "answer": "Authentication can use sessions, Passport, OAuth, or JWT. Authorization checks roles, permissions, or ownership before allowing access to a resource."
      },
      {
        "id": "d2f528938c82",
        "legacyId": "93ad5e84446f",
        "topic": "Experienced",
        "question": "Which package is commonly used for file uploading in Node.js?",
        "answer": "Multer is commonly used for handling `multipart/form-data` uploads in Express applications."
      },
      {
        "id": "b38fb964d119",
        "legacyId": "55ceea9e2b21",
        "topic": "Experienced",
        "question": "How is Node.js different from server-side scripting languages like Python?",
        "answer": "Node.js runs JavaScript and is event-driven by default, which is strong for I/O-heavy concurrency. Python is a general-purpose language and is often stronger for CPU-heavy, scripting, data, or ML workloads."
      },
      {
        "id": "b217fd9c074d",
        "legacyId": "0060918f3eba",
        "topic": "Experienced",
        "question": "How do you connect Node.js to MongoDB?",
        "answer": "A common approach is to install Mongoose, define a connection string, and call `mongoose.connect()` during application startup."
      },
      {
        "id": "914c9d920c76",
        "legacyId": "3636dd20594f",
        "topic": "Experienced",
        "question": "How do you read command-line arguments in Node.js?",
        "answer": "Use `process.argv`. It contains the Node executable, script path, and any extra arguments passed from the command line."
      },
      {
        "id": "8111b8e2e5cb",
        "legacyId": "afcc46227e05",
        "topic": "Experienced",
        "question": "What is Redis used for with Node.js?",
        "answer": "Redis is often used as a cache, session store, rate-limit store, queue backend, or pub/sub system. It helps reduce database load and improve response speed."
      },
      {
        "id": "0a5de3062922",
        "legacyId": "0c6e562a8cd1",
        "topic": "Experienced",
        "question": "What is WebSocket?",
        "answer": "WebSocket is a protocol for persistent two-way communication between client and server. It is useful for chat, notifications, dashboards, and real-time apps."
      },
      {
        "id": "065614fa508e",
        "legacyId": "64cfd94cb966",
        "topic": "Experienced",
        "question": "What is the util module in Node.js?",
        "answer": "The `util` module provides helper functions for Node.js, such as promisifying callback APIs, formatting, debugging helpers, and type checks."
      },
      {
        "id": "95d6e8116414",
        "legacyId": "19e45d839d14",
        "topic": "Experienced",
        "question": "What is the DNS module in Node.js?",
        "answer": "The `dns` module resolves hostnames and performs DNS lookups. It helps convert domain names into network addresses."
      },
      {
        "id": "2c17c0956878",
        "legacyId": "365dc6b14132",
        "topic": "Experienced",
        "question": "What is the difference between `setImmediate()` and `setTimeout()`?",
        "answer": "`setTimeout()` schedules a callback after a delay. `setImmediate()` schedules a callback after the current event loop cycle, often after I/O callbacks."
      },
      {
        "id": "1819bba86723",
        "legacyId": "2dd476acdd44",
        "topic": "Experienced",
        "question": "What is an EventEmitter in Node.js?",
        "answer": "EventEmitter is a class from the `events` module. It lets objects emit named events and lets listeners react to those events."
      }
    ]
  }
];
