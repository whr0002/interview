**Q: What happens when a parent component re-renders?**  
**A:** By default, child components also re-render unless optimization like `React.memo` prevents it.

**Q: How does `useRef` work?**  
**A:** It stores a mutable value that persists across renders without causing a re-render.

**Q: What is `useContext` used for?**  
**A:** It lets components read shared data from Context without passing props through every level.

**Q: What is a custom hook?**  
**A:** A custom hook is a reusable function that contains Hook logic and shares behavior across components.

**Q: How do you prevent unnecessary re-renders?**  
**A:** Split components well, keep state minimal, use stable props, and apply memoization only where needed.

**Q: How do you optimize a large list?**  
**A:** Use list virtualization so only visible items are rendered.

**Q: What tool helps investigate React performance?**  
**A:** React DevTools Profiler.

**Q: What is a closure in JavaScript?**  
**A:** A closure is when a function remembers variables from its outer scope.

**Q: What is stale closure in React?**  
**A:** It is when a callback uses outdated `state` or `props` from an older render.

**Q: How do you do conditional rendering in React?**  
**A:** Use `if`, ternary operators, logical `&&`, or return different components.

**Q: How do you optimize a component that re-renders too often?**  
**A:** Measure first, then reduce state scope, stabilize props, and memoize only where it helps.

**1. How do you fix stale closure issues?**  
Use correct dependencies, `useRef`, or functional state updates.
