# Interview Questons

---

## 🧠 JavaScript Questions

---

### ❓ **Q1. What is a closure in JavaScript?**

**Answer:**  
A closure lets a function remember and use variables from where it was created, even after that outer function finishes running.

👉 Example:

```js
function outer() {
  let name = "Alex";
  function inner() {
    console.log(name);
  }
  return inner;
}
const sayName = outer();
sayName(); // prints "Alex"
```

---

### ❓ **Q2. When does a closure’s variable get garbage-collected?**

**Answer:**  
When the closure is no longer used (no references left), its variables are automatically removed from memory.

👉 Example:

```js
let greet = outer();
greet = null; // closure and its data can be cleaned up now
```

---

### ❓ **Q3. What are some common object methods in JavaScript?**

**Answer:**

-   `Object.keys(obj)` → property names
    
-   `Object.values(obj)` → property values
    
-   `Object.entries(obj)` → key-value pairs
    
-   `Object.freeze(obj)` → make read-only
    
-   `Object.seal(obj)` → can update but not add/remove
    

👉 Example:

```js
const user = { name: "John", age: 25 };
Object.keys(user); // ["name", "age"]
Object.freeze(user);
user.age = 30; // won’t change
```

---

### ❓ **Q4. Difference between a normal function and an arrow function?**

**Answer:**

-   Normal functions are **hoisted** and have their own `this`.
    
-   Arrow functions are **not hoisted** and **use `this` from outer scope**.
    

👉 Example:

```js
const obj = {
  name: "Lisa",
  normal() { console.log(this.name); }, // Lisa
  arrow: () => console.log(this.name)   // undefined
};
obj.normal();
obj.arrow();
```

---

### ❓ **Q5. What are `call`, `apply`, and `bind`?**

**Answer:**  
They help set a custom `this` value when calling a function.

-   `call()` → pass arguments separately.
    
-   `apply()` → pass arguments as an array.
    
-   `bind()` → returns a new function with bound `this`.
    

👉 Example:

```js
function greet(g) { console.log(g + ", " + this.name); }
const person = { name: "Asha" };
greet.call(person, "Hi");
greet.apply(person, ["Hello"]);
const fn = greet.bind(person, "Hey");
fn();
```

---

### ❓ **Q6. What happens if you access block-scoped variables outside their block?**

**Answer:**  
You’ll get a **ReferenceError**, since `let` and `const` only exist inside `{ }`.

👉 Example:

```js
{
  let x = 10;
}
console.log(x); // ReferenceError
```

---

### ❓ **Q7. What happens if we set `array.length = 0`?**

**Answer:**  
The array becomes empty, so accessing items returns `undefined`.

👉 Example:

```js
let arr = [1,2,3];
arr.length = 0;
console.log(arr[0]); // undefined
```

---

### ❓ **Q8. What is an IIFE (Immediately Invoked Function Expression)?**

**Answer:**  
An IIFE runs immediately after it’s defined. Useful for private scope.

👉 Example:

```js
(function() {
  console.log("Runs instantly!");
})();
```

---

### ❓ **Q9. How do you create a global variable in JavaScript?**

**Answer:**  
Assigning a value **without** `let`, `const`, or `var` makes it global (not recommended).

👉 Example:

```js
function test() { x = 5; }
test();
console.log(x); // 5
```

---

### ❓ **Q10. What is ES6 and what new features did it introduce?**

**Answer:**  
ES6 (2015) added many modern features:

-   `let`, `const`
    
-   Arrow functions
    
-   Template literals
    
-   Default parameters
    
-   Destructuring, Spread/Rest
    
-   Promises, `Map`, `Set`
    

---

### ❓ **Q11. What is a default parameter?**

**Answer:**  
If a function argument isn’t passed, a default value is used.

👉 Example:

```js
function greet(name = "Guest") {
  console.log("Hello", name);
}
greet(); // Hello Guest
```

---

### ❓ **Q12. What is a rest parameter?**

**Answer:**  
It collects multiple arguments into an array.

👉 Example:

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1,2,3); // 6
```

---

### ❓ **Q13. What does `reduce()` do?**

**Answer:**  
It combines all items in an array into one value (like sum or product).

👉 Example:

```js
[1,2,3,4].reduce((a,b)=>a+b,0); // 10
```

---

### ❓ **Q14. Difference between `find()` and `filter()`?**

**Answer:**

-   `find()` → returns the first match.
    
-   `filter()` → returns all matches.
    

👉 Example:

```js
const nums = [1,2,3,4];
nums.find(n=>n>2); // 3
nums.filter(n=>n>2); // [3,4]
```

---

### ❓ **Q15. What does `array.flat()` do?**

**Answer:**  
It removes nested array levels and makes one flat array.

👉 Example:

```js
[1,[2,[3]]].flat(2); // [1,2,3]
```

---

### ❓ **Q16. What is `flatMap()`?**

**Answer:**  
It maps each element and flattens one level deep.

👉 Example:

```js
[1,2,3].flatMap(x => [x, x*2]); // [1,2,2,4,3,6]
```

---

### ❓ **Q17. What are JavaScript modules?**

**Answer:**  
They help split code into reusable files using `export` and `import`.

👉 Example:

```js
// math.js
export function add(a,b){return a+b;}
// main.js
import { add } from './math.js';
console.log(add(2,3)); // 5
```

---

## ⚙️ Angular & RxJS Questions

---

### ❓ **Q18. What are some RxJS operators you’ve used?**

**Answer:**

-   `map()` → modify data
    
-   `tap()` → perform side effects
    
-   `catchError()` → handle errors
    
-   `debounceTime()` → delay user input
    
-   `switchMap()` → cancel old requests and use the latest
    

---

### ❓ **Q19. What does `switchMap` do?**

**Answer:**  
It cancels previous API calls if a new one starts — keeps only the latest active call.  
👉 Example: Search boxes where you type quickly.

---

### ❓ **Q20. How to make multiple API calls and wait for all results?**

**Answer:**  
Use `forkJoin()` — it runs all calls in parallel and gives one combined result.

👉 Example:

```ts
forkJoin([api1(), api2()]).subscribe(([a,b])=>{
  console.log(a,b);
});
```

---

### ❓ **Q21. How do you unsubscribe or stop an observable?**

**Answer:**  
Use:

-   `take(n)` → stop after n values
    
-   `takeUntil()` → stop when another observable emits
    
-   or manually `unsubscribe()`
    

👉 Example:

```ts
const sub = interval(1000).subscribe(v=>console.log(v));
setTimeout(()=>sub.unsubscribe(), 3000);
```

---

### ❓ **Q22. Difference between attribute and structural directives?**

**Answer:**

-   **Structural** → changes DOM structure (e.g., `*ngIf`, `*ngFor`)
    
-   **Attribute** → changes look/behavior (e.g., `ngClass`, `ngStyle`)
    

👉 Example:

```html
<div *ngIf="isVisible">Visible</div>
<div [ngClass]="{'red':isActive}">Styled</div>
```

---

### ❓ **Q23. What are `@HostListener` and `@HostBinding`?**

**Answer:**

-   `@HostListener` → listens to events on the host element.
    
-   `@HostBinding` → binds a property/class to the host.
    

👉 Example:

```ts
@HostListener('click') onClick() { alert('Clicked!'); }
@HostBinding('class.active') isActive = true;
```

---

### ❓ **Q24. What is an HTTP Interceptor and why use it?**

**Answer:**  
It’s like a middleware for all HTTP calls — used to attach tokens, log requests, or handle errors globally.

👉 Example: Add auth token to all requests.

---

### ❓ **Q25. How to skip interceptor for specific API calls?**

**Answer:**  
Add a custom header flag (like `Skip-Auth`) and check it in the interceptor.

👉 Example:

```ts
if (req.headers.has('Skip-Auth')) return next.handle(req);
```

---

### ❓ **Q26. How do you handle backend errors in Angular?**

**Answer:**  
Use `catchError()` or a global error handler/interceptor.

👉 Example:

```ts
this.http.get('/api').pipe(
  catchError(err => { console.error(err); return throwError(()=>'Error'); })
);
```

---

### ❓ **Q27. How do you write test cases in Angular?**

**Answer:**  
Use **Jasmine** or **Jest** with **Karma** for unit testing.

👉 Example:

```ts
it('should add numbers', ()=>{
  expect(add(2,3)).toBe(5);
});
```

---

### ❓ **Q28. What should a developer improve for Angular interviews?**

**Answer:**

-   Strengthen JavaScript fundamentals
    
-   Learn RxJS deeply (`mergeMap`, `switchMap`, `forkJoin`)
    
-   Practice **clear, short answers**
    
-   Try writing unit tests
    

---