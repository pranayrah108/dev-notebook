# Interview Questons

---

### **JavaScript Questions**

**1\. What is the Event Loop in JavaScript?**

-   **Answer:**  
    The event loop helps JavaScript run tasks one by one (since JavaScript is single-threaded).  
    It takes tasks from the **queue** and runs them on the **call stack**.
    
    -   **Microtasks** (like Promises) run before
        
    -   **Macrotasks** (like `setTimeout`)  
        **Example:**
        
    
    ```js
    console.log("A");
    setTimeout(() => console.log("B"), 0);
    Promise.resolve().then(() => console.log("C"));
    console.log("D");
    // Output: A, D, C, B
    ```
    

---

**2\. Which executes first — Promises or setTimeout?**

-   **Answer:** Promises run first because they’re **microtasks**, while `setTimeout` is a **macrotask**.  
    So, Promises have higher priority.
    

---

**3\. What does the Array method `flat()` do?**

-   **Answer:**  
    It removes nesting in arrays.  
    **Example:**
    
    ```js
    const arr = [1, [2, [3]]];
    console.log(arr.flat(2)); // [1, 2, 3]
    ```
    

---

**4\. How to check if an item exists in an array?**

-   **Answer:**
    
    -   Use `includes()` if you just want to check if a value exists.
        
    -   Use `some()` if you want to check based on a condition.  
        **Example:**
        
    
    ```js
    [1, 2, 3].includes(2); // true
    [{id:1},{id:2}].some(x => x.id === 2); // true
    ```
    

---

**5\. What are common Object methods in JavaScript?**

-   **Answer:**
    
    -   `Object.keys(obj)` → returns all keys.
        
    -   `Object.values(obj)` → returns all values.
        
    -   `Object.entries(obj)` → returns key–value pairs.  
        **Example:**
        
    
    ```js
    const user = { name: "Alex", age: 25 };
    Object.keys(user); // ['name', 'age']
    ```
    

---

**6\. How to make an object not changeable (immutable)?**

-   **Answer:**  
    Use `Object.freeze(obj)` → stops adding, deleting, or updating properties.  
    **Example:**
    
    ```js
    const user = Object.freeze({ name: "John" });
    user.name = "Sam"; // No effect
    console.log(user.name); // John
    ```
    

---

**7\. What are different Promise methods?**

-   **Answer:**
    
    -   `Promise.all()` → waits for all promises.
        
    -   `Promise.race()` → returns the first completed one.
        
    -   `Promise.allSettled()` → waits for all, even if some fail.
        
    -   `Promise.any()` → returns first successful one.
        
    -   `Promise.finally()` → runs after promise finishes (success/failure).
        

---

**8\. What is a Higher-Order Function (HOF)?**

-   **Answer:**  
    A function that takes another function as input or returns a function.  
    **Example:**
    
    ```js
    function greet(fn) { fn(); }
    greet(() => console.log("Hello!")); // Hello!
    ```
    

---

**9\. Difference between `replace()` and `replaceAll()` in strings?**

-   **Answer:**
    
    -   `replace()` → replaces the first match.
        
    -   `replaceAll()` → replaces all matches.  
        **Example:**
        
    
    ```js
    "I love JS. JS is great".replace("JS", "JavaScript");
    // "I love JavaScript. JS is great"
    "I love JS. JS is great".replaceAll("JS", "JavaScript");
    // "I love JavaScript. JavaScript is great"
    ```
    

---

**10\. What is Optional Chaining (`?.`) in JavaScript?**

-   **Answer:**  
    It helps safely access nested properties without errors.  
    **Example:**
    
    ```js
    const user = { profile: null };
    console.log(user.profile?.name); // undefined (no error)
    ```
    

---

**11\. What is `event.stopPropagation()` and `stopImmediatePropagation()`?**

-   **Answer:**
    
    -   `stopPropagation()` → stops the event from bubbling up to parent elements.
        
    -   `stopImmediatePropagation()` → stops bubbling **and** prevents other handlers on the same element.  
        **Example:**
        
    
    ```js
    element.addEventListener('click', e => e.stopPropagation());
    ```
    

---

**12\. What is Throttling vs Debouncing?**

-   **Answer:**
    
    -   **Throttling:** Executes a function at regular intervals even if triggered often.
        
    -   **Debouncing:** Waits for a pause in activity before running the function.  
        **Example:**
        
    -   Throttle: limit window resize updates.
        
    -   Debounce: wait until user stops typing in a search box before fetching results.
        

---

**13\. What is `"use strict"` in JavaScript?**

-   **Answer:**  
    Enables strict mode — helps catch mistakes like undeclared variables.  
    **Example:**
    
    ```js
    "use strict";
    x = 10; // Error: x is not defined
    ```
    

---

**14\. What is Lexical Scoping?**

-   **Answer:**  
    Functions can access variables defined in their outer scope.  
    **Example:**
    
    ```js
    function outer() {
      const x = 10;
      function inner() { console.log(x); }
      inner(); // 10
    }
    ```
    

---

**15\. What is an IIFE (Immediately Invoked Function Expression)?**

-   **Answer:**  
    A function that runs as soon as it’s defined.  
    **Example:**
    
    ```js
    (function () {
      console.log("Runs immediately!");
    })();
    ```
    

---

### **Angular Questions**

**16\. How can data from one component update another without refreshing?**

-   **Answer:**  
    Use an **RxJS Subject or BehaviorSubject** in a shared service.  
    Components can **subscribe** to it to get updates instantly.  
    **Example:**
    
    -   Product added to cart → updates cart count in header.
        

---

**17\. What does `trackBy` do in `*ngFor`?**

-   **Answer:**  
    Helps Angular identify items in a list by unique IDs, so it only re-renders changed items — improves performance.  
    **Example:**
    
    ```html
    <li *ngFor="let item of list; trackBy: trackByFn">{{item.name}}</li>
    ```
    
    ```ts
    trackByFn(index, item) { return item.id; }
    ```
    

---

**18\. How to optimize Angular performance?**

-   **Answer:**
    
    -   Use `trackBy` in loops.
        
    -   Use `ChangeDetectionStrategy.OnPush`.
        
    -   Unsubscribe in `ngOnDestroy`.
        
    -   Use lazy loading.
        
    -   Use server-side pagination for big data.
        

---

**19\. What’s the difference between Pure and Impure Pipes?**

-   **Answer:**
    
    -   **Pure Pipe:** Runs only when input changes.
        
    -   **Impure Pipe:** Runs every time change detection runs (can affect performance).
        

---

**20\. How to handle large datasets in Angular?**

-   **Answer:**  
    Use **pagination** or **server-side rendering** so the browser doesn’t load all data at once.
    

---

**21\. How to share data between sibling components?**

-   **Answer:**
    
    -   Use a **shared service** with `Subject` or `BehaviorSubject`.
        
    -   Or use **NgRx** state management for larger apps.
        

---

**22\. What types of forms exist in Angular?**

-   **Answer:**
    
    -   **Template-driven forms:** For small forms like login.
        
    -   **Reactive forms:** For large, dynamic forms — better validation control.
        

---

**23\. How to fetch data from an API in Angular?**

-   **Answer:**  
    Use Angular’s `HttpClient` service with `get()`, `post()`, etc.  
    **Example:**
    
    ```ts
    this.http.get('https://api.example.com/data').subscribe(data => console.log(data));
    ```
    

---

**24\. What is a Progressive Web App (PWA)?**

-   **Answer:**  
    A web app that works offline and feels like a native mobile app using service workers and caching.
    

---

**25\. How to build a multi-step form in Angular?**

-   **Answer:**  
    Divide the form into steps using nested reactive forms or Angular Material Stepper.
    

---

**26\. How to add dark and light mode themes in Angular?**

-   **Answer:**  
    Use **SCSS variables** for colors. Switch between theme variables for dark/light mode.  
    **Example:**
    
    ```scss
    $bg-dark: #000;
    $bg-light: #fff;
    body.dark { background: $bg-dark; }
    body.light { background: $bg-light; }
    ```
    

---
