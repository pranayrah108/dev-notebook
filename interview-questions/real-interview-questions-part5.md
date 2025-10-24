# Interview Questons

---

### **JavaScript Questions**

1.  **Q: What is the difference between a normal function and an arrow function?**  
    **A:**
    
    -   Normal function: `this` depends on how the function is called.
        
    -   Arrow function: `this` inherits from the surrounding scope.
        
    
    **Example:**
    
    ```javascript
    const obj = {
        name: "Alice",
        normalFunc: function() { console.log(this.name); },
        arrowFunc: () => console.log(this.name)
    };
    
    obj.normalFunc(); // Alice
    obj.arrowFunc();  // undefined (this is not obj)
    ```
    

---

2.  **Q: What is hoisting in JavaScript?**  
    **A:** Hoisting means JavaScript moves **declarations** (variables/functions) to the top of the scope before running the code.
    
    -   Functions are hoisted completely.
        
    -   `var` variables are hoisted as `undefined`.
        
    -   `let`/`const` are hoisted but cannot be accessed before declaration.
        
    
    **Example:**
    
    ```javascript
    console.log(a); // undefined
    var a = 5;
    
    console.log(b); // Error
    let b = 10;
    ```
    

---

3.  **Q: What is destructuring? Can you alias variables?**  
    **A:** Destructuring is a way to unpack arrays or objects into separate variables.
    
    -   **Array:** `const [x, y] = [1, 2];` → x=1, y=2
        
    -   **Object:** `const {name: n, age: a} = {name: 'Alice', age: 25};` → n='Alice', a=25
        
    
    ✅ Aliasing example: `name: n` creates variable `n` from `name` property.
    

---

4.  **Q: What is event propagation? Explain bubbling and capturing.**  
    **A:** Event propagation is how events move through the DOM.
    
    -   **Bubbling:** Event starts from target element → moves up to parent.
        
    -   **Capturing:** Event starts from parent → moves down to target.
        
    
    **Example:**
    
    ```html
    <div id="parent">
        <button id="child">Click me</button>
    </div>
    <script>
    document.getElementById('parent').addEventListener('click', () => console.log('Parent'));
    document.getElementById('child').addEventListener('click', () => console.log('Child'));
    </script>
    // Clicking child button logs: "Child" then "Parent" (bubbling)
    ```
    

---

5.  **Q: Difference between `filter`, `reduce`, and `find` in arrays?**  
    **A:**
    
    -   `filter`: returns all items matching a condition.
        
    -   `find`: returns the **first** item matching a condition.
        
    -   `reduce`: combines array items into one value.
        
    
    **Example:**
    
    ```javascript
    const numbers = [1,2,3,4];
    numbers.filter(n => n>2); // [3,4]
    numbers.find(n => n>2);   // 3
    numbers.reduce((acc, n) => acc+n, 0); // 10 (sum)
    ```
    

---

6.  **Q: Difference between `for...of` and `for...in`?**  
    **A:**
    
    -   `for...of` → iterates **values** (use for arrays).
        
    -   `for...in` → iterates **keys** (use for objects).
        
    
    **Example:**
    
    ```javascript
    const arr = ['a','b'];
    for (const val of arr) console.log(val); // a b
    
    const obj = {x:1, y:2};
    for (const key in obj) console.log(key); // x y
    ```
    

---

### **Angular Questions**

7.  **Q: What is `inject()` in Angular 16?**  
    **A:** Replaces the need for constructor injection. You can directly get a service in a component or function.
    
    **Example:**
    
    ```typescript
    import { HttpClient, inject } from '@angular/common/http';
    
    const http = inject(HttpClient); // now you can use http.get() directly
    ```
    

---

8.  **Q: What are signals and how do they differ from observables?**  
    **A:**
    
    -   **Signals:** Angular 16 feature. They track values and update **only the affected component** (better performance).
        
    -   **Observables:** Stream of data; need `subscribe` and optionally `unsubscribe`.
        
    
    **Example:**
    
    ```typescript
    import { signal } from '@angular/core';
    const counter = signal(0);
    counter.set(5); // updates only component using this signal
    ```
    

---

9.  **Q: What is a standalone component?**  
    **A:** Component that doesn’t require a module.
    
    -   You can directly import other components or modules inside it.
        
    -   Makes performance better and reduces boilerplate.
        
    
    **Example:**
    
    ```typescript
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    
    @Component({
      selector: 'app-demo',
      standalone: true,
      imports: [CommonModule],
      template: `<p>Hello Standalone!</p>`
    })
    export class DemoComponent {}
    ```
    

---

10.  **Q: How do you handle back navigation when form data is unsaved?**  
    **A:** Use **`CanDeactivate` guard**.
    
    -   Shows a popup asking the user if they want to leave and lose unsaved changes.
        

---

11.  **Q: What observable methods do you know?**  
    **A:**
    
    -   `subscribe()`: listen to values.
        
    -   `unsubscribe()`: stop listening.
        
    -   `pipe()`: transform data with operators like `map` or `filter`.
        
    -   `next()`: send data (used in Subjects).
        
    -   `complete()`: finish the stream.
        

---

12.  **Q: Lazy loading and AOT compilation in Angular?**  
    **A:**
    
    -   **Lazy loading:** load modules only when needed → faster app startup.
        
    -   **AOT (Ahead-of-Time) compilation:** compiles templates at build time → smaller, faster apps.
        

---
