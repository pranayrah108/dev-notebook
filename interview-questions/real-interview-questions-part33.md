# Interview Questons

---

## **Q1️⃣ 🙋 What is the latest version of JavaScript / ES6 features?**

**Answer:**  
ES6 is a major JavaScript update that added many useful features like:

-   `let` and `const` (better variable declarations)
    
-   Arrow functions (`() => {}`)
    
-   Spread operator (`...`)
    
-   Destructuring
    
-   Template strings
    
-   Classes
    

**Example:**

```js
const person = {name: "Sara", age: 22};
const {name} = person;   // destructuring
```

---

## **Q2️⃣ 🙋 What are closures? How do they differ from normal functions?**

**Answer:**  
A **closure** is when a function remembers and uses variables from the function that created it—even after the outer function has finished running.

**Example:**

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}

const counter = outer();
counter(); // 1
counter(); // 2 → still remembers "count"
```

Normal functions **don’t** do this.

---

## **Q3️⃣ 🙋 How do you create a new array from an existing one?**

**Answer:**  
Use the **spread operator** to copy an array:

```js
const a = [1,2,3];
const b = [...a];
```

This does **not** affect the original array.

---

## **Q4️⃣ 🙋 Why does spreading objects still affect the original in nested cases?**

**Answer:**  
Spread operator makes a **shallow copy**, meaning deeper objects still share references.

**Example:**

```js
const obj = {user:{name:"A"}};
const copy = {...obj};
copy.user.name = "B";   // original also changes
```

---

## **Q5️⃣ 🙋 What is event capturing and bubbling?**

**Answer:**

-   **Bubbling:** event goes from child → parent
    
-   **Capturing:** event goes from parent → child
    

**Example:** clicking a button inside a div can trigger both button and div events.

---

## **Q6️⃣ 🙋 How to stop event propagation?**

**Answer:**  
Use:

```js
event.stopPropagation();
```

---

## **Q7️⃣ 🙋 What is stopImmediatePropagation()?**

**Answer:**  
Stops:

1.  Further handlers on the same element
    
2.  AND prevents bubbling up
    

---

## **Q8️⃣ 🙋 What is a limitation of arrow functions?**

**Answer:**

-   They don’t have their own **this**
    
-   They can’t use **arguments** keyword
    
-   They can’t be used as constructors
    

**Example:**

```js
const obj = {
  name: "A",
  say: () => console.log(this.name) // undefined
};
```

---

## **Q9️⃣ 🙋 Do let/const get hoisted? What is the Temporal Dead Zone?**

**Answer:**  
Yes, they get hoisted, but they **cannot be used** until the actual line of initialization.  
This unsafe period is the **Temporal Dead Zone**.

---

## **Q🔟 🙋 What are scopes in JavaScript?**

**Answer:**  
Three types:

1.  Global scope
    
2.  Function scope
    
3.  Block scope (`let`, `const`)
    

---

## **Q1️⃣1️⃣ 🙋 Do we need var/let/const to create variables?**

**Answer:**  
No. Without them, JS makes **global variables**—but this is bad practice.

---

## **Q1️⃣2️⃣ 🙋 What is the event loop?**

**Answer:**  
It is how JavaScript handles:

-   synchronous code
    
-   asynchronous tasks
    
-   microtasks (Promises)
    
-   macrotasks (setTimeout)
    

Promise callbacks run **before** setTimeout.

---

## **Q1️⃣3️⃣ 🙋 How does destructuring work?**

**Answer:**  
It extracts values from arrays/objects into variables.

```js
const [a,b] = [10,20];
```

---

## **Q1️⃣4️⃣ 🙋 How do you export/import in JavaScript?**

**Answer:**  
**Named export:**

```js
export const age = 20;
import {age} from './file';
```

**Default export:**

```js
export default function(){}
import anyName from './file';
```

---

## **Q1️⃣5️⃣ 🙋 How to make an API call in JavaScript?**

**Answer:**  
Using `fetch()`, which returns a Promise.

```js
fetch(url).then(res => res.json());
```

---

## **Q1️⃣6️⃣ 🙋 What are promise states?**

**Answer:**

1.  Pending
    
2.  Fulfilled
    
3.  Rejected
    

---

## **Q1️⃣7️⃣ 🙋 What are Promise.all / Promise.race / Promise.allSettled?**

**Answer:**

-   **all()** → waits for all to succeed
    
-   **race()** → returns first completed
    
-   **allSettled()** → returns results even if some fail
    

---

## **Q1️⃣8️⃣ 🙋 What are callbacks?**

**Answer:**  
A function passed into another function.

```js
setTimeout(() => console.log("Done"), 1000);
```

---

## **Q1️⃣9️⃣ 🙋 What are IIFEs? Why use them?**

**Answer:**  
A function that runs immediately.

```js
(function(){ console.log("run") })();
```

**Use:**

-   Avoid polluting global variables
    
-   Run initialization code once
    

---

## **Q2️⃣0️⃣ 🙋 Difference between sessionStorage and localStorage?**

**Answer:**

-   **sessionStorage:** lasts only for tab
    
-   **localStorage:** stays even after browser restart
    

---

## **Q2️⃣1️⃣ 🙋 How do you pass data between sibling Angular components?**

**Answer:**  
Use a **shared service** with **Subject** or **BehaviorSubject**.

---

## **Q2️⃣2️⃣ 🙋 What are types of RxJS Subjects?**

**Answer:**

-   **Subject** → no initial value
    
-   **BehaviorSubject** → stores latest value
    
-   **ReplaySubject** → stores multiple past values
    

---

## **Q2️⃣3️⃣ 🙋 How to prevent multiple API calls on every keystroke?**

**Answer:**  
Use **debounceTime()** in RxJS.

```ts
this.search.valueChanges
  .pipe(debounceTime(300))
  .subscribe(...)
```

---

## **Q2️⃣4️⃣ 🙋 What is content projection in Angular?**

**Answer:**  
Using `<ng-content>` to insert custom content into a component.

---

## **Q2️⃣5️⃣ 🙋 What are Angular route guards?**

**Answer:**

-   CanActivate
    
-   CanActivateChild
    
-   CanLoad
    

Used to protect routes.

---

## **Q2️⃣6️⃣ 🙋 Difference between pure and impure pipes?**

**Answer:**

-   **Pure pipe:** runs only when input reference changes
    
-   **Impure pipe:** runs on every change detection cycle
    

---

## **Q2️⃣7️⃣ 🙋 How many ways to bind data in Angular?**

**Answer:**  
Four:

1.  Interpolation `{{ }}`
    
2.  Property binding `[prop]`
    
3.  Event binding `(click)`
    
4.  Two-way binding `[(ngModel)]`
    

---

## **Q2️⃣8️⃣ 🙋 What is ngOnChanges?**

**Answer:**  
Lifecycle hook that detects changes in `@Input()` properties.

---

## **Q2️⃣9️⃣ 🙋 Difference between structural and attribute directives?**

**Answer:**

-   **Structural:** change DOM layout (`*ngIf`, `*ngFor`)
    
-   **Attribute:** change behavior/appearance (`ngClass`, `ngStyle`)
    

---

## **Q3️⃣0️⃣ 🙋 What is an HTTP Interceptor used for?**

**Answer:**  
To modify outgoing requests (like adding auth token).

---

## **Q3️⃣1️⃣ 🙋 What is View Encapsulation?**

**Answer:**  
Controls how styles apply:

-   Emulated (default)
    
-   None
    
-   ShadowDom
    

---

## **Q3️⃣2️⃣ 🙋 How to improve Angular performance?**

**Answer:**

-   Unsubscribe from Observables
    
-   Use `async` pipe
    
-   Use `ChangeDetectionStrategy.OnPush`
    
-   Use pure pipes
    

---

## **Q3️⃣3️⃣ 🙋 When should you use NgRx?**

**Answer:**  
When the app has **complex state**, like:

-   many components sharing data
    
-   caching
    
-   undo/redo
    
-   predictable state management
    

---

## **Q3️⃣4️⃣ 🙋 Why use Chart.js / visualization libraries?**

**Answer:**  
For showing data visually—graphs, charts, dashboards.

---

## **Q3️⃣5️⃣ 🙋 Common coding question: convert string between cases (camelCase ↔ snake\_case).**

**Answer:**  
Example turning spaces into underscores:

```js
"Hello World".toLowerCase().replace(" ", "_")  
// hello_world
```

---
