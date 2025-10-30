# Interview Questons

---

## 🧠 JavaScript Section

### (00:57) Q1: What’s the difference between `shift()` and `unshift()`?

**Answer:**

-   `shift()` → removes the **first element** from an array.
    
-   `unshift()` → adds one or more elements to the **beginning** of an array.  
    **Example:**
    

```js
let arr = [2, 3, 4];
arr.unshift(1); // [1, 2, 3, 4]
arr.shift();    // [2, 3, 4]
```

---

### (02:46) Q2: What’s the difference between `splice()` and `slice()`?

**Answer:**

-   `splice()` → changes the **original array** (can add/remove elements).
    
-   `slice()` → makes a **copy** of a part of the array (doesn’t change original).  
    **Example:**
    

```js
let arr = [1, 2, 3, 4];
arr.splice(1, 2); // removes 2, 3 → arr becomes [1, 4]
arr.slice(1, 3);  // returns [2, 3] but doesn’t change arr
```

---

### (03:36) Q3: What are Event Loop, Microtask, and Macrotask?

**Answer:**  
They manage how JavaScript runs asynchronous code (like promises or timeouts).

-   **Event Loop** → decides the order tasks run in.
    
-   **Macrotasks** → include `setTimeout`, `setInterval`.
    
-   **Microtasks** → include `Promise.then()`.  
    **Example:**
    

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
// Output: A D C B
```

(`C` runs before `B` because promises (microtasks) run before timeouts (macrotasks)).

---

### (04:25) Q4: What is a Promise, and why do we use it?

**Answer:**  
A **Promise** helps handle tasks that take time (like API calls) without blocking other code.  
**Example:**

```js
let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
p.then(msg => console.log(msg)); // Prints “Done!” after 1 second
```

---

### (05:25) Q5: What’s an alternative to Promises?

**Answer:**

-   **Async/Await** (modern syntax for using Promises easily).
    
-   **Observables** (from RxJS in Angular, can handle multiple values over time).
    

---

### (06:18) Q6: What is Prototype Inheritance?

**Answer:**  
Objects can inherit features from other objects using prototypes.  
**Example:**

```js
function Animal(name) { this.name = name; }
Animal.prototype.sayHello = function() {
  console.log(`Hi, I'm ${this.name}`);
};
const dog = new Animal('Buddy');
dog.sayHello(); // Hi, I'm Buddy
```

---

### (07:00) Q7: What does `this` refer to? How does it behave in arrow functions?

**Answer:**

-   In normal functions, `this` depends on **who calls the function**.
    
-   In arrow functions, `this` is **inherited** from where the function was created (no new binding).  
    **Example:**
    

```js
function normal() { console.log(this); }
const arrow = () => console.log(this);

normal(); // 'this' = window/global
arrow();  // 'this' = same as outer scope
```

---

### (07:57) Q8: Difference between `let`, `const`, and `var`?

**Answer:**

| Keyword | Scope | Reassign? | Hoisted? |
| --- | --- | --- | --- |
| var | Function/global | ✅ Yes | ✅ Yes |
| let | Block | ✅ Yes | 🚫 No |
| const | Block | 🚫 No (can’t reassign) | 🚫 No |

**Example:**

```js
let x = 10; 
const y = 20; 
var z = 30;
```

---

### (08:55) Q9: Can we change values of a `const` object?

**Answer:**  
You **can’t reassign** the variable, but you **can modify its properties**.  
**Example:**

```js
const user = { name: "A" };
user.name = "B"; // ✅ allowed
user = {};       // ❌ error
```

---

### (09:47) Q10: How to prevent changes to an object?

**Answer:**  
Use:

-   `Object.freeze(obj)` → prevents any modification.
    
-   `Object.seal(obj)` → allows changing existing properties but not adding/removing.  
    **Example:**
    

```js
const user = Object.freeze({ name: "A" });
user.name = "B"; // ❌ won't change
```

---

### (14:32) Q11: How to make a deep copy (not using JSON.stringify)?

**Answer:**  
Use the built-in `structuredClone()` method.  
**Example:**

```js
let obj = { a: 1, b: { c: 2 } };
let copy = structuredClone(obj);
copy.b.c = 5;
console.log(obj.b.c); // Still 2 → deep copy
```

---

### (15:20) Q12: What’s a Shallow Copy vs Deep Copy?

**Answer:**

-   **Shallow Copy:** Copies references (linked to same inner object).
    
-   **Deep Copy:** Creates a full, independent copy.  
    **Example:**
    

```js
let a = { x: { y: 1 } };
let shallow = Object.assign({}, a);
shallow.x.y = 2; // changes a.x.y too
let deep = structuredClone(a);
deep.x.y = 3; // doesn’t change a.x.y
```

---

## ⚡ Angular Section

### (19:56) Q13: What does `ngModel` do?

**Answer:**  
It creates **two-way data binding** between the view (HTML) and model (component).  
**Example:**

```html
<input [(ngModel)]="username" />
<p>{{ username }}</p>
```

---

### (20:54) Q14: What are Standalone Components?

**Answer:**  
Angular components that **don’t need an NgModule**.  
You set `standalone: true` and directly import dependencies.  
**Example:**

```ts
@Component({
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Hello!</h1>`
})
export class HelloComponent {}
```

---

### (22:29) Q15: What’s the difference between Observable and Promise?

**Answer:**

| Feature | Promise | Observable |
| --- | --- | --- |
| Emits | One value | Multiple values |
| Cancelable | ❌ No | ✅ Yes |
| Lazy | ❌ | ✅ |

**Example:**

-   Promise: one-time response from server.
    
-   Observable: stream of data (like live search results).
    

---

### (23:35) Q16: What is RxJS and why is it used?

**Answer:**  
**RxJS** = Reactive Extensions for JavaScript.  
Used to handle **asynchronous data streams** (e.g., user inputs, API calls).  
**Example:**

```ts
this.http.get('api/users').subscribe(data => console.log(data));
```

---

### (25:53) Q17: What is the `async` pipe?

**Answer:**

-   It automatically **subscribes** to an Observable in the template.
    
-   Updates the view with new data.
    
-   Automatically **unsubscribes** when destroyed.  
    **Example:**
    

```html
<p>{{ userData$ | async }}</p>
```

---

### (28:17) Q18: What happens when you run `ng build` and `ng serve`?

**Answer:**

-   `ng build` → compiles code into static files inside `/dist` folder.
    
-   `ng serve` → compiles and hosts it locally for development.
    

---

### (29:06) Q19: How to change the output folder (`dist/`) name?

**Answer:**  
In `angular.json`, update the `outputPath` property.  
**Example:**

```json
"outputPath": "my-custom-folder"
```

---

### (30:11) Q20: What is Angular Universal (Server-Side Rendering)?

**Answer:**  
It renders Angular pages **on the server** before sending them to the browser — improves SEO and load speed.

---

### (31:28) Q21: What’s the difference between Preloading and Eager Loading?

**Answer:**

-   **Eager Loading:** Loads all modules at startup.
    
-   **Preloading:** Loads modules **after** the main app loads, in the background.  
    Improves performance for large apps.
    

---

### (32:16) Q22: What are common weak points the interviewer noted?

**Answer:**

-   Event Loop & Microtasks.
    
-   Shallow vs Deep Copy.
    
-   Object references.
    
-   Understanding “why” code behaves a certain way.
    

---
