# Interview Questons

---

## **❓ Question 1 — Should I focus on Angular or React for jobs?**

**Answer:**  
Both are good, but React has more job openings.  
However, companies mostly care about your **overall frontend skills**, not just one framework.  
Pick one as your **main strength** and learn the basics of the other.

---

## **❓ Question 2 — What’s the difference between `map()` and `forEach()` in JavaScript?**

**Answer:**

-   **map()** changes each item and **returns a new array**.
    
-   **forEach()** just loops and **returns nothing**.
    

**Example:**

```js
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2); // [2, 4, 6]
nums.forEach(n => console.log(n));  // prints values, returns nothing
```

---

## **❓ Question 3 — What does `filter()` do?**

**Answer:**  
It picks items that pass a **true/false test** and returns a new array.

**Example:**

```js
[1, 2, 3, 4].filter(n => n > 2) // [3, 4]
```

---

## **❓ Question 4 — What does `reduce()` do?**

**Answer:**  
It **combines** all values into one (like sum, product, etc.)

**Example:**

```js
[1, 2, 3].reduce((sum, n) => sum + n, 0) // 6
```

---

## **❓ Question 5 — What is the rest parameter (`...args`)?**

**Answer:**  
It lets you take **many arguments into one array**.

**Example:**

```js
function add(...nums) { return nums }
add(1, 2, 3) // [1, 2, 3]
```

---

## **❓ Question 6 — What is the spread operator?**

**Answer:**  
It **expands** an array into separate values.

**Example:**

```js
let arr = [1,2,3];
let newArr = [...arr, 4] // [1,2,3,4]
```

---

## **❓ Question 7 — What are template literals?**

**Answer:**  
They are strings written with **backticks** ( `) and allow`${variable}\` inside.

**Example:**

```js
let name = "John";
`Hello ${name}` // "Hello John"
```

---

## **❓ Question 8 — What is the difference between call, apply, and bind?**

**Answer:**  
They all set the **this** context of a function.

-   **call()** → call now, pass arguments normally.
    
-   **apply()** → call now, but pass arguments in an array.
    
-   **bind()** → don’t call now; returns a **new function** with fixed `this`.
    

---

## **❓ Question 9 — How does asynchronous JavaScript work?**

**Answer:**  
JavaScript normally runs one line at a time.  
Asynchronous code (like API calls) uses:

-   **Promises**
    
-   **async/await**
    
-   **callbacks**
    

It lets you wait for something without freezing the page.

---

## **❓ Question 10 — What are closures?**

**Answer:**  
A closure is when a function **remembers the variables** from where it was created.

**Example:**

```js
function outer() {
  let x = 5;
  return function inner() {
    return x; // remembers x
  }
}
```

---

## **❓ Question 11 — What is event propagation (bubbling / capturing / delegation)?**

**Answer:**

-   **Capturing:** event moves from parent → child
    
-   **Bubbling:** event moves from child → parent
    
-   **Delegation:** attach one event listener to a parent to handle events of many children
    

---

## **❓ Question 12 — What are JavaScript modules?**

**Answer:**  
They allow splitting code into separate files using `export` and `import`.

---

## **❓ Question 13 — How does `this` behave in JavaScript?**

**Answer:**  
`this` depends on **how** a function is called.

-   In objects → refers to the object
    
-   In regular functions → undefined / global
    
-   In arrow functions → takes `this` from parent scope
    

---

## **❓ Question 14 — What is the difference between the `arguments` object and rest parameter?**

**Answer:**

-   **arguments** → old, not an array, not in arrow functions
    
-   **rest (...args)** → new, real array, preferred
    

---

## **❓ Question 15 — What is an IIFE?**

**Answer:**  
Immediately Invoked Function Expression — a function that runs **as soon as it’s defined**.

**Example:**

```js
(function() { console.log("Hi!") })();
```

---

## **❓ Question 16 — What is the JavaScript event loop?**

**Answer:**  
It decides **which code runs next**, handling async tasks so the browser doesn’t freeze.

---

## **❓ Question 17 — What is debouncing?**

**Answer:**  
Waits until the user stops doing something.

**Example:** Search box waiting 300ms after typing.

---

## **❓ Question 18 — What is throttling?**

**Answer:**  
Runs a function at **fixed intervals** even if events happen many times.

**Example:** Mouse scroll event firing every 500ms.

---

## **❓ Question 19 — How do you handle authentication in Angular?**

**Answer:**

1.  Send email + password to API
    
2.  Receive **JWT token**
    
3.  Store it in **localStorage**
    
4.  Send token on each request
    

---

## **❓ Question 20 — What are Angular route guards?**

**Answer:**  
They protect routes.

-   **CanActivate** → block access if not logged in
    
-   **Resolver** → load data before entering route
    

---

## **❓ Question 21 — What is the difference between authentication and authorization?**

**Answer:**

-   **Authentication:** are you the right user? (login)
    
-   **Authorization:** what can you access? (roles)
    

---

## **❓ Question 22 — What is SSR (Server-Side Rendering) in Angular?**

**Answer:**  
The HTML is created on the **server**, not the browser.  
This makes the page faster and SEO-friendly.

---

## **❓ Question 23 — How to handle very large API data?**

**Answer:**  
Use **pagination** instead of loading everything at once.

---

## **❓ Question 24 — What are HTTP Interceptors in Angular?**

**Answer:**  
They let you **modify requests**, e.g., add token automatically.

---

## **❓ Question 25 — What are new features of Angular 16?**

**Answer:**

-   Standalone components
    
-   Signals
    
-   Optional zone.js
    

---

## **❓ Question 26 — What are Angular forms?**

**Answer:**

-   **Template-driven forms** → simple, use HTML
    
-   **Reactive forms** → more control, use TypeScript
    

Both use **Validators** to check fields.

---

## **❓ Question 27 — What is `trackBy` in `ngFor`?**

**Answer:**  
It tells Angular *how to identify list items* to avoid re-rendering everything.

---

## **❓ Question 28 — What are Angular directives?**

**Answer:**  
Types:

-   **Component directive** → has template
    
-   **Attribute directive** → change look (`ngClass`)
    
-   **Structural directive** → change DOM (`*ngIf`, `*ngFor`)
    

---

## **❓ Question 29 — What is HostBinding?**

**Answer:**  
It lets you set properties on the host element.

---

## **❓ Question 30 — What is HostListener?**

**Answer:**  
It allows listening to host element events (like click).

---

## **❓ Question 31 — What are smart vs dumb components?**

**Answer:**

-   **Smart components:** handle logic, API calls
    
-   **Dumb components:** only show UI, receive inputs and emit events
    

---