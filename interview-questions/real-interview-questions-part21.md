# Interview Questons

---

## 🟦 JavaScript Interview Questions

---

### (00:00) ❓What is the `this` keyword in JavaScript?

**Answer:**  
`this` refers to the object that is calling the current function.

-   Inside a method, `this` points to the object.
    
-   Inside a simple function (not attached to any object), `this` points to the global object (`window` in browsers).
    
-   In strict mode, `this` can be `undefined`.
    

**Example:**

```js
const person = {
  name: "John",
  greet() {
    console.log(this.name);
  }
};
person.greet(); // "John"
```

---

### (02:41) ❓What is the difference between **implicit** and **explicit** binding of `this`?

**Answer:**

-   **Implicit binding:** When you call a function as a method of an object, `this` refers to that object.
    
-   **Explicit binding:** When you manually set `this` using `.call()`, `.apply()`, or `.bind()`.
    

**Example:**

```js
function greet() { console.log(this.name); }

const person = { name: "Alice" };
greet.call(person);  // explicit binding → prints "Alice"
```

---

### (03:30) ❓What’s the difference between a normal function and an arrow function regarding `this`?

**Answer:**  
Arrow functions do not have their own `this`; they inherit it from the surrounding scope.  
Normal functions define their own `this` depending on how they are called.

**Example:**

```js
const obj = {
  name: "Tom",
  arrow: () => console.log(this.name), // from outside scope
  regular: function() { console.log(this.name); }
};
obj.arrow();    // undefined
obj.regular();  // "Tom"
```

---

### (05:22) ❓What is the difference between `call()` and `apply()`?

**Answer:**  
Both call a function and set `this` manually.  
The only difference is how you pass arguments:

-   `.call(thisArg, arg1, arg2, …)`
    
-   `.apply(thisArg, [arg1, arg2, …])`
    

**Example:**

```js
function say(greeting, name) { console.log(greeting, name); }
say.call(null, "Hello", "John");
say.apply(null, ["Hi", "Sam"]);
```

---

### (08:26) ❓What is a polyfill in JavaScript?

**Answer:**  
A **polyfill** is custom code that adds a missing feature to older browsers.  
It “fills in” functionality that newer JS versions have.

**Example:** Polyfill for `Array.prototype.includes`

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(value) {
    return this.indexOf(value) !== -1;
  };
}
```

---

### (11:07) ❓What does `Array.some()` do?

**Answer:**  
It checks if **at least one element** in an array passes a test, and returns `true` or `false`.

**Example:**

```js
const nums = [1, 2, 3, 4];
nums.some(n => n > 3); // true
```

---

### (12:25) ❓What is the difference between `forEach()` and `map()`?

**Answer:**

-   `forEach()` runs code for each element but **does not return** a new array.
    
-   `map()` runs code for each element and **returns** a new array.
    

**Example:**

```js
const nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2));  // logs 2,4,6 but returns undefined
const doubled = nums.map(n => n * 2);   // [2,4,6]
```

---

### (15:38) ❓What is currying and infinite currying?

**Answer:**  
Currying is breaking a function that takes multiple arguments into smaller functions that each take one argument.  
**Infinite currying** means the function keeps returning another function until you stop it.

**Example:**

```js
function add(a) {
  return function(b) {
    if (b !== undefined) return add(a + b);
    return a;
  };
}
console.log(add(2)(3)(4)()); // 9
```

---

### (27:23) ❓What is event delegation?

**Answer:**  
Instead of adding event listeners to every child element, we add one listener to a **parent** element and detect which child triggered it using `event.target`.

**Example:**

```js
document.getElementById("list").addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

---

### (28:01) ❓How can you stop event propagation?

**Answer:**  
Use `event.stopPropagation()` to stop the event from bubbling up to parent elements.  
Use `event.stopImmediatePropagation()` to stop other listeners on the same element from firing.

---

### (28:43) ❓What’s the difference between `for…in` and `for…of`?

**Answer:**

-   `for…in` → loops through **keys/indexes**
    
-   `for…of` → loops through **values**
    

**Example:**

```js
const arr = ["a", "b", "c"];
for (let i in arr) console.log(i); // 0,1,2
for (let v of arr) console.log(v); // a,b,c
```

---

### (30:48) ❓How do you flatten nested arrays in JavaScript?

**Answer:**  
Use `.flat()` — it flattens nested arrays into one.

**Example:**

```js
const arr = [1, [2, [3, 4]]];
arr.flat(Infinity); // [1,2,3,4]
```

If `.flat()` isn’t allowed, use recursion and the spread operator:

```js
function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) result.push(...flatten(item));
    else result.push(item);
  }
  return result;
}
```

---

## 🟩 Angular Interview Questions

---

### (39:44) ❓What are **standalone components** in Angular 17?

**Answer:**  
Standalone components don’t need to be declared inside an `NgModule`.  
They are **self-contained**—you can directly use them in your app.

**Example:**

```ts
@Component({
  standalone: true,
  selector: 'app-hello',
  template: `<h1>Hello!</h1>`
})
export class HelloComponent {}
```

---

### (41:15) ❓What new template features exist in Angular 17?

**Answer:**  
New syntax like:

-   `@if` replaces `*ngIf`
    
-   `@for` replaces `*ngFor`
    
-   `@defer` for lazy-loading DOM sections only when needed.
    

---

### (42:28) ❓How does Angular 17 bootstrap an app without `AppModule`?

**Answer:**  
Instead of `platformBrowserDynamic().bootstrapModule(AppModule)`,  
use `bootstrapApplication()` in `main.ts`.

**Example:**

```ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

---

### (43:46) ❓How can you use one component inside another in Angular 17?

**Answer:**  
Import that component in the `imports` array of the parent component.

**Example:**

```ts
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `<app-child></app-child>`
})
export class ParentComponent {}
```

---

### (46:48) ❓What is the `inject()` function in Angular, and how is it different from constructor injection?

**Answer:**  
`inject()` lets you access a service directly in your component or function **without using the constructor**.  
It helps avoid circular dependencies and makes standalone code cleaner.

**Example:**

```ts
const userService = inject(UserService);
```

---

### (52:12) ❓What is preloading in Angular?

**Answer:**  
Preloading loads lazy routes in the background after the main app loads.  
This makes navigation faster for future routes.

**Example:**

```ts
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
```

---

### (53:25) ❓How does routing work without modules in Angular 17?

**Answer:**  
Use `loadComponent` instead of `loadChildren` to lazy-load standalone components.

**Example:**

```ts
{
  path: 'home',
  loadComponent: () => import('./home.component').then(m => m.HomeComponent)
}
```

---

### (55:38) ❓What are Signals in Angular 17?

**Answer:**  
**Signals** are a new reactive system (like a simpler alternative to RxJS) for tracking and updating state automatically.

**Example:**

```ts
const count = signal(0);
effect(() => console.log(count()));
count.set(1); // Logs: 1
```

---

### (56:59) ❓Why should developers still focus on JavaScript basics before Angular?

**Answer:**  
Because frameworks like Angular are built on JavaScript.  
If you don’t understand JS fundamentals (scope, `this`, arrays, functions), debugging or optimizing Angular apps becomes very hard.

---

### (1:00:57) ❓What should developers learn next after Angular and JavaScript?

**Answer:**  
Learn the basics of **backend technologies (Node.js, APIs)** to understand full-stack applications and debug better.  
Even if you don’t write backend code, it helps you work effectively with backend teams.

---