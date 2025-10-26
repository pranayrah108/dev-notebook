# Interview Questons

---

### 💡 Q1: How would you rate yourself in JavaScript and Angular?

*(Not technical — self-assessment question.)*

---

### 🧠 Q2: What is a closure in JavaScript?

A **closure** is when a function remembers the variables from where it was created, even after that outer function is done running.

**Example:**

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}

const counter = outer();
counter(); // 1
counter(); // 2
```

`inner()` remembers `count` even after `outer()` is finished.

---

### 🧱 Q3: What are some object methods in JavaScript?

Common ones:

-   `Object.keys(obj)` → list of keys
    
-   `Object.values(obj)` → list of values
    
-   `Object.entries(obj)` → list of key–value pairs
    
-   `Object.create(proto)` → new object with prototype
    
-   `delete obj.prop` → remove a property
    

**Example:**

```js
const user = { name: "Tom", age: 25 };
console.log(Object.keys(user)); // ["name", "age"]
```

---

### 🔒 Q4: What does `Object.seal()` do?

It **prevents adding or deleting** properties but still allows updating existing ones.

**Example:**

```js
const car = { brand: "Tesla" };
Object.seal(car);
car.brand = "BMW"; // ✅ allowed
car.color = "red"; // ❌ cannot add
delete car.brand;  // ❌ cannot delete
```

---

### 🧊 Q5: What does `Object.freeze()` do?

It makes the object **read-only** — no add, delete, or change allowed.

**Example:**

```js
const user = { name: "Alex" };
Object.freeze(user);
user.name = "John"; // ❌ no effect
```

---

### ⚡ Q6: What’s the difference between normal and arrow functions?

-   **Normal functions:** hoisted, have their own `this`.
    
-   **Arrow functions:** not hoisted, use parent’s `this`.
    

**Example:**

```js
const user = {
  name: "Ava",
  normal: function() { console.log(this.name); },
  arrow: () => console.log(this.name)
};
user.normal(); // "Ava"
user.arrow();  // undefined
```

---

### 🧩 Q7: What are `call()`, `apply()`, and `bind()`?

They let you control what `this` means when running a function.

-   `call(thisArg, a, b)` → runs instantly
    
-   `apply(thisArg, [a, b])` → runs instantly with array
    
-   `bind(thisArg, a, b)` → returns a new function
    

**Example:**

```js
function greet(msg) { console.log(msg + " " + this.name); }
const person = { name: "Lisa" };
greet.call(person, "Hi"); // "Hi Lisa"
greet.apply(person, ["Hello"]); // "Hello Lisa"
const greetLisa = greet.bind(person, "Hey");
greetLisa(); // "Hey Lisa"
```

---

### 🧭 Q8: What’s the difference between `var`, `let`, and `const`?

-   `var` → function-scoped
    
-   `let`, `const` → block-scoped
    

**Example:**

```js
if (true) {
  let x = 5;
}
console.log(x); // ❌ ReferenceError
```

---

### 🧹 Q9: What happens if you set `array.length = 0`?

It **clears the array** instantly.

**Example:**

```js
let arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // []
```

---

### ⚙️ Q10: What is an IIFE (Immediately Invoked Function Expression)?

It’s a function that runs right after it’s defined.

**Example:**

```js
(function() {
  console.log("Runs immediately!");
})();
```

---

### 🌍 Q11: How do you create a global variable in JavaScript?

If you don’t use `let`, `var`, or `const`, it becomes global (in non-strict mode).

**Example:**

```js
function test() {
  globalVar = 10; // becomes global
}
test();
console.log(globalVar); // 10
```

*(Not recommended — can cause bugs!)*

---

### 🚀 Q12: What is ES6 (ECMAScript 2015)?

A big update to JavaScript that added:  
`let`, `const`, arrow functions, classes, modules, destructuring, spread/rest operators, template literals, etc.

---

### 🧮 Q13: What are default and rest parameters?

-   **Default:** gives a value if none is passed.
    
-   **Rest:** collects extra arguments into an array.
    

**Example:**

```js
function greet(name = "Guest") { console.log("Hi " + name); }
greet(); // "Hi Guest"

function sum(...nums) { return nums.reduce((a,b)=>a+b); }
console.log(sum(1,2,3)); // 6
```

---

### ➕ Q14: What is `reduce()` used for?

It combines all array items into one value.

**Example:**

```js
let total = [10, 20, 30].reduce((sum, val) => sum + val);
console.log(total); // 60
```

---

### 🔍 Q15: What’s the difference between `find()` and `filter()`?

-   `find()` → first match only
    
-   `filter()` → all matches
    

**Example:**

```js
let arr = [1, 2, 3, 2];
arr.find(x => x === 2);   // 2
arr.filter(x => x === 2); // [2, 2]
```

---

### 🧺 Q16: What does `flat()` do?

It flattens nested arrays.

**Example:**

```js
[1, [2, [3]]].flat(Infinity); // [1, 2, 3]
```

---

### 🪄 Q17: What is `flatMap()`?

It runs `map()` then flattens one level deep.

**Example:**

```js
[1, 2, 3].flatMap(x => [x, x * 2]);
// [1, 2, 2, 4, 3, 6]
```

---

### 📦 Q18: What are JavaScript modules?

They let you split your code into separate files.

**Example:**

```js
// file1.js
export const name = "Sam";

// file2.js
import { name } from "./file1.js";
```

---

### ➕➖ Q19: How to increment/decrement a value in Angular?

Use property binding and click events in the template.

**Example:**

```html
<p>{{ count }}</p>
<button (click)="count++">+</button>
<button (click)="count--">-</button>
```

---

### 🔁 Q20: What is `switchMap()` in RxJS?

It cancels old requests and switches to the latest one — useful for APIs.

**Example:**

```ts
this.searchInput.valueChanges.pipe(
  switchMap(text => this.api.search(text))
);
```

---

### 🤝 Q21: How to wait for multiple API calls before proceeding?

Use `forkJoin()` from RxJS.

**Example:**

```ts
forkJoin([
  this.api.getUser(),
  this.api.getPosts(),
  this.api.getComments()
]).subscribe(([user, posts, comments]) => {
  console.log(user, posts, comments);
});
```

---

### 🔄 Q22: How to unsubscribe automatically in RxJS?

Use operators like `take()`, `takeWhile()`, or `takeUntil()`.

**Example:**

```ts
interval(1000).pipe(take(3)).subscribe(console.log);
// Prints 0, 1, 2 then stops
```

---

### 🧱 Q23: What’s the difference between structural and attribute directives?

-   **Structural:** changes DOM structure → `*ngIf`, `*ngFor`
    
-   **Attribute:** changes look or behavior → `[ngClass]`, `[ngStyle]`
    

---

### 🧲 Q24: What are `@HostListener` and `@HostBinding`?

-   `@HostListener` → listens to host element events.
    
-   `@HostBinding` → binds a property on the host element.
    

**Example:**

```ts
@HostListener('click') onClick() { alert('Clicked!'); }
@HostBinding('style.color') color = 'blue';
```

---

### 🌐 Q25: What is an HTTP interceptor in Angular?

It intercepts HTTP requests to modify or log them (like adding tokens).

**Example:**

```ts
intercept(req, next) {
  const cloned = req.clone({ setHeaders: { Authorization: 'Bearer token' } });
  return next.handle(cloned);
}
```

---

### 🚫 Q26: How to skip adding headers for specific API calls?

Use a custom flag and check before modifying.

**Example:**

```ts
if (!req.headers.has('Skip-Auth')) {
  req = req.clone({ setHeaders: { Authorization: 'token' } });
}
```

---

### ⚠️ Q27: How to handle HTTP errors in Angular?

Use `catchError()` in RxJS or handle in an interceptor.

**Example:**

```ts
this.http.get('/api').pipe(
  catchError(err => {
    console.error('Error:', err);
    return throwError(() => err);
  })
);
```

---

### 🧪 Q28: How to write test cases in Angular?

Use testing tools like **Jasmine**, **Karma**, or **Jest**.

**Example:**

```ts
describe('AppComponent', () => {
  it('should create', () => {
    expect(true).toBeTrue();
  });
});
```

---

### 📚 Q29: Why should Angular developers learn JavaScript?

Because Angular is built on JavaScript — strong JS knowledge helps debug, optimize, and interview confidently.

---
