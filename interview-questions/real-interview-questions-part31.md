# Interview Questons

---

### 🥇 **Q1: Tell me about yourself.**

**Answer:**  
Start with your **role and experience**, mention **technologies** you’ve worked with, and highlight **a recent project**.  
Example:

> “I’m a front-end developer with 4 years of experience in Angular, TypeScript, and JavaScript. In my current project, I worked on migrating an old web app to Angular 15, focusing on performance optimization and reusable components.”

✅ *Tip:* Don’t mention personal details — focus on your **tech stack**, **project**, and **responsibilities**.

---

### ⚙️ **Q2: What is a Promise in JavaScript?**

**Answer:**  
A **Promise** is a special object that helps you handle **async (wait-for-something)** work like fetching data from a server.  
It has three states:

-   **Pending** – waiting
    
-   **Resolved** – success
    
-   **Rejected** – failed
    

Example:

```js
let promise = new Promise((resolve, reject) => {
  let dataFound = true;
  dataFound ? resolve("Data received!") : reject("Error!");
});
promise.then(msg => console.log(msg)).catch(err => console.log(err));
```

---

### ⚡ **Q3: How do you handle errors in Promises?**

**Answer:**  
Use **`.catch()`** to handle errors.

Example:

```js
fetchData()
  .then(res => console.log(res))
  .catch(err => console.log("Something went wrong:", err));
```

---

### 🕐 **Q4: What is `async` and `await`?**

**Answer:**  
They make async code look like normal code.  
`async` tells JavaScript that a function will have async code.  
`await` waits until a promise finishes.

Example:

```js
async function getUser() {
  let user = await fetchUserFromServer();
  console.log(user);
}
```

---

### 💬 **Q5: What’s the difference between an Arrow Function and a Normal Function?**

**Answer:**

-   **Arrow functions** are shorter and **don’t have their own `this`**.
    
-   **Normal functions** are longer and **do have their own `this`**.
    

Example:

```js
// Normal
function sayHi() { console.log("Hi"); }

// Arrow
const sayHiArrow = () => console.log("Hi");
```

---

### 🚫 **Q6: What is Function Hoisting?**

**Answer:**  
Normal functions are **hoisted**, meaning you can call them **before they are defined**.  
Arrow functions are **not hoisted** — you must define them first.

Example:

```js
sayHi(); // works
function sayHi() { console.log("Hello"); }

sayHello(); // ❌ Error
const sayHello = () => console.log("Hi");
```

---

### 🧩 **Q7: What is a Closure in JavaScript?**

**Answer:**  
A **closure** is when a function remembers variables from its outer function even after that outer function is done running.

Example:

```js
function outer() {
  let name = "Angular";
  return function inner() {
    console.log(name); // inner remembers 'name'
  };
}
const call = outer();
call(); // "Angular"
```

---

### ❓ **Q8: What’s the difference between “undefined” and “undeclared”?**

**Answer:**

-   **Undefined** – the variable exists but has no value yet.
    
-   **Undeclared** – the variable was never created.
    

Example:

```js
let x;
console.log(x); // undefined
console.log(y); // ❌ ReferenceError (undeclared)
```

---

### 🔁 **Q9: Difference between `for...in` and `for...of`?**

**Answer:**

-   `for...in` → loops through **keys (indexes)**.
    
-   `for...of` → loops through **values**.
    

Example:

```js
let arr = ["A", "B", "C"];
for (let i in arr) console.log(i); // 0,1,2
for (let val of arr) console.log(val); // A,B,C
```

---

### 🔤 **Q10: What is the Event Loop in JavaScript?**

**Answer:**  
The **event loop** helps JS handle multiple tasks — it runs **synchronous code first**, then async tasks like `setTimeout` or Promises.

Example:

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

Output → A, C, B

---

### 🧠 **Q11: What is a Prototype in JavaScript?**

**Answer:**  
Every object in JS has a **prototype** — a template object it can inherit methods from.  
You can add new functions to a prototype.

Example:

```js
function Car(name) { this.name = name; }
Car.prototype.start = function() { console.log(this.name + " started"); };

let myCar = new Car("Tesla");
myCar.start(); // "Tesla started"
```

---

### 🧩 **Q12: What is a Polyfill?**

**Answer:**  
A **polyfill** is code that adds a feature that an old browser doesn’t support.

Example:

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(val) {
    return this.indexOf(val) !== -1;
  };
}
```

---

### 🧭 **Q13: How to get route parameters in Angular?**

**Answer:**  
Use **`ActivatedRoute`** service.

Example:

```ts
import { ActivatedRoute } from '@angular/router';
constructor(private route: ActivatedRoute) {
  const id = this.route.snapshot.paramMap.get('id');
}
```

---

### 🚦 **Q14: What are Guards and Resolvers in Angular?**

**Answer:**

-   **Guards**: check *before entering* a route (like authentication).
    
-   **Resolvers**: fetch data *before* the page loads.
    

Example:

```ts
canActivate() { return isLoggedIn(); }
resolve() { return this.userService.getUser(); }
```

---

### 🧱 **Q15: What’s the difference between Authentication and Authorization?**

**Answer:**

-   **Authentication** = Who you are (login).
    
-   **Authorization** = What you can do (permissions).
    

Example:  
Logging into Gmail = authentication.  
Accessing Admin Dashboard = authorization.

---

### 🧩 **Q16: What are Directives in Angular?**

**Answer:**  
Directives change the behavior or look of elements.

-   **Structural** (`*ngIf`, `*ngFor`) → change the DOM structure.
    
-   **Attribute** (`[ngClass]`, `[disabled]`) → change the appearance.
    

Example:

```html
<p *ngIf="isLoggedIn">Welcome!</p>
```

---

### 🖱️ **Q17: What are HostBinding and HostListener?**

**Answer:**  
Used in directives to react to host element events or properties.

Example:

```ts
@HostBinding('style.color') color = 'blue';
@HostListener('mouseenter') onHover() { this.color = 'red'; }
```

---

### 🧰 **Q18: Difference between `ng serve` and `ng build`?**

**Answer:**

-   `ng serve` → runs the app in development mode with live reload.
    
-   `ng build` → creates optimized files for deployment.
    

---

### 🧳 **Q19: How do components communicate with each other in Angular?**

**Answer:**

-   **Parent → Child:** `@Input()`
    
-   **Child → Parent:** `@Output()`
    
-   **Sibling → Sibling:** via **Shared Service** using `Subject`.
    

Example:

```ts
// shared.service.ts
subject = new Subject<string>();
this.subject.next('update');
```

---

### 🔔 **Q20: What’s the difference between Subject and Observable?**

**Answer:**

-   **Observable:** can only be subscribed to (read-only).
    
-   **Subject:** can emit (`next()`) and be subscribed to (read/write).
    

Example:

```ts
const subject = new Subject();
subject.subscribe(data => console.log(data));
subject.next('Hello'); // prints 'Hello'
```

---

### 🧱 **Q21: What happens in the constructor of a component?**

**Answer:**  
It’s the **first lifecycle hook** — used for basic setup, dependency injection, etc.  
Avoid heavy logic or API calls here; use `ngOnInit` instead.

---