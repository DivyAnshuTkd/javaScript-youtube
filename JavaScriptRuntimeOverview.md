## 🧩 **JavaScript Runtime Overview**

When you run JS code, it doesn’t execute in isolation. The runtime environment provides the tools and handles **asynchronous behavior**.

The main components:

### 1️⃣ **V8 Engine**

* Core **JavaScript engine** used in **Chrome** and **Node.js**.
* Executes **JavaScript code** line by line.
* Handles **memory allocation, compilation, and execution**.
* Implements **call stack** (synchronous execution).

### 2️⃣ **Web APIs (Browser) or Node APIs**

* These are **provided by the environment**, not JS itself.
* Examples:

  * `DOM` manipulation → `document.getElementById()`
  * Timers → `setTimeout`, `setInterval`
  * HTTP requests → `fetch`, `XMLHttpRequest`
  * `console.log`
* These APIs run **outside the V8 engine** but interact with it.

### 3️⃣ **Callback Queue / Task Queue**

* When an asynchronous operation completes (like a timer or fetch), its **callback** is placed in a **queue**.
* The queue waits until the **call stack is empty**.

### 4️⃣ **Event Loop**

* Constantly monitors the **call stack** and the **callback queue**.
* If the call stack is empty, it takes the next callback from the queue and pushes it onto the stack.
* This is how JS handles **asynchronous tasks without blocking**.

---

## 🔹 **Execution Flow Example**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer done");
}, 1000);

console.log("End");
```

### Step-by-Step:

1. `"Start"` → goes on the call stack → printed → removed from stack.
2. `setTimeout` → uses **Web API timer** (runs in the environment, not V8) → after 1000ms, callback goes to **callback queue**.
3. `"End"` → goes on the call stack → printed → removed.
4. Event Loop sees **call stack is empty** → moves `setTimeout` callback from queue → pushes onto call stack → prints `"Timer done"`.

**Output:**

```
Start
End
Timer done
```


### ✅ **Key Takeaways**

* **V8 engine** executes JS code and manages memory.
* **Web APIs / Node APIs** provide functionality outside core JS (like `console.log`, DOM, timers).
* **Event loop** ensures async code executes in order without blocking the main thread.
* JS is **single-threaded**, but async tasks are handled efficiently using **callback queue + event loop**.

---
