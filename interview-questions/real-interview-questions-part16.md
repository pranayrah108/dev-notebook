# Interview Questons

---

### 🔢 **Q1. What will this `setTimeout` inside a `for` loop print?**

🧠 **Answer:**  
When you use `setTimeout` inside a loop with `var`, all iterations share the same variable.  
So by the time the timeouts run, the loop is done — they all print the **final value**.

✅ **Example:**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 3 3 3
```

Using `let` creates a new variable for each loop:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 0 1 2
```

---

### 🔢 **Q2. What’s the difference between `let` and `const`?**

🧠 **Answer:**

-   `let` ➜ can be reassigned
    
-   `const` ➜ cannot be reassigned  
    Both are **block-scoped**.
    

✅ **Example:**

```js
let name = "Alice";
name = "Bob"; // ✅ works

const age = 25;
age = 30; // ❌ error
```

---

### 🔢 **Q3. If I redeclare `var a = 10` and inside a block do `var a = 20`, what prints?**

🧠 **Answer:**  
`var` is **function-scoped**, not block-scoped, so both refer to the same variable.

✅ **Example:**

```js
var a = 10;
{
  var a = 20;
}
console.log(a); // → 20
```

Using `let` would isolate the variable:

```js
let a = 10;
{
  let a = 20;
}
console.log(a); // → 10
```

---

### 🔢 **Q4. What is “scope” in JavaScript?**

🧠 **Answer:**  
Scope defines **where a variable is visible** in code.

📘 **Types of scope:**

-   🌍 Global scope → visible everywhere
    
-   🔧 Function scope → visible inside a function
    
-   🧱 Block scope → visible inside `{ }`
    

✅ **Example:**

```js
let x = 1; // global

function test() {
  let y = 2; // function scope
  if (true) {
    let z = 3; // block scope
  }
  console.log(z); // ❌ error
}
```

---

### 🔢 **Q5. What is the spread operator (`...`) used for?**

🧠 **Answer:**  
It helps **expand** or **combine** arrays/objects easily.

✅ **Example (arrays):**

```js
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b]; // → [1, 2, 3, 4]
```

✅ **Example (objects):**

```js
let person = { name: "Sam" };
let details = { age: 30 };
let user = { ...person, ...details }; // → { name: "Sam", age: 30 }
```

---

### 🔢 **Q6. How can you add a property to an object dynamically?**

🧠 **Answer:**  
You can use **dot** or **bracket** notation.

✅ **Example:**

```js
let user = { name: "Alex" };
user.age = 25;
user["country"] = "USA";
```

---

### 🔢 **Q7. What’s the difference between deep copy and shallow copy?**

🧠 **Answer:**

-   **Shallow copy:** only top-level copied
    
-   **Deep copy:** everything copied independently
    

✅ **Example:**

```js
let obj1 = { name: "A", address: { city: "NY" } };
let shallow = { ...obj1 };
shallow.address.city = "LA";

console.log(obj1.address.city); // LA (shared reference)

let deep = JSON.parse(JSON.stringify(obj1));
deep.address.city = "SF";
console.log(obj1.address.city); // LA (unaffected)
```

---

### 🔢 **Q8. What’s the difference between `for…in` and `for…of`?**

🧠 **Answer:**

-   `for…in` → loops over **keys/indexes**
    
-   `for…of` → loops over **values**
    

✅ **Example:**

```js
let arr = ['a', 'b', 'c'];

for (let i in arr) console.log(i); // 0 1 2
for (let v of arr) console.log(v); // a b c
```

---

### 🔢 **Q9. What is the `arguments` object in a function?**

🧠 **Answer:**  
It’s a special **array-like object** that holds all passed parameters.

✅ **Example:**

```js
function sum(a, b) {
  console.log(arguments[0]); // first arg
  console.log(arguments[1]); // second arg
}
sum(5, 10); // 5 10
```

⚠️ Not available in arrow functions.

---

### 🔢 **Q10. What is a `Subject` in Angular (RxJS)?**

🧠 **Answer:**  
A Subject is both **an Observable and an Observer**.  
It’s used to **send and receive data** (like an event bus).

✅ **Example:**

```ts
// service.ts
subject = new Subject();

sendData() {
  this.subject.next('Hello');
}

// component.ts
this.service.subject.subscribe(data => console.log(data));
```

---

### 🔢 **Q11. What is a `ReplaySubject`?**

🧠 **Answer:**  
It’s like a Subject, but it **remembers past values** and replays them to new subscribers.

✅ **Example:**

```ts
let subject = new ReplaySubject(2); // remember last 2
subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe(console.log); // prints 2, 3
```

---

### 🔢 **Q12. How can you communicate between Angular components?**

🧠 **Answer:**  
Use a **shared service** with a Subject/Observable.

✅ **Example:**

```ts
// service
message = new Subject();

// sender
this.service.message.next('Hi');

// receiver
this.service.message.subscribe(res => console.log(res));
```

---

### 🔢 **Q13. What is the `async` pipe in Angular?**

🧠 **Answer:**  
The `async` pipe **automatically subscribes and unsubscribes** from Observables.

✅ **Example:**

```html
<p>{{ user$ | async }}</p>
```

No need to manually `.subscribe()` in your component.

---

### 🔢 **Q14. How do you apply conditional colors in a table (e.g., age > 20)?**

🧠 **Answer:**  
Use the **`ngClass` directive**.

✅ **Example:**

```html
<tr [ngClass]="{'red': age > 20, 'green': age <= 20}">
  {{ age }}
</tr>
```

---

### 🔢 **Q15. How to color alternate table rows (even/odd)?**

🧠 **Answer:**  
Use `even` and `odd` variables in `ngFor`.

✅ **Example:**

```html
<tr *ngFor="let item of list; let e = even; let o = odd"
    [ngClass]="{ 'gray': e, 'white': o }">
</tr>
```

---

### 🔢 **Q16. What is `trackBy` in `ngFor`?**

🧠 **Answer:**  
It helps Angular track items by a unique key, avoiding unnecessary re-renders.

✅ **Example:**

```html
<li *ngFor="let user of users; trackBy: trackById">{{user.name}}</li>
```

```ts
trackById(index, user) {
  return user.id;
}
```

---

### 🔢 **Q17. How can you unsubscribe from a subscription in Angular?**

🧠 **Answer:**  
You can:

1.  Call `.unsubscribe()` manually in `ngOnDestroy()`, or
    
2.  Use RxJS operators like `takeUntil()`.
    

✅ **Example:**

```ts
ngOnDestroy() {
  this.sub.unsubscribe();
}
```

or

```ts
this.obs$.pipe(takeUntil(this.destroy$)).subscribe();
```

---

### 🔢 **Q18. What’s the difference between `take` and `takeUntil`?**

🧠 **Answer:**

-   `take(n)` → completes after *n* values
    
-   `takeUntil(notifier)` → completes when another observable emits
    

✅ **Example:**

```ts
interval(1000).pipe(take(3)).subscribe(console.log); // 0,1,2

interval(1000).pipe(takeUntil(timer(3000))).subscribe(console.log);
```

---

### 🔢 **Q19. Where do you use RxJS operators in Angular?**

🧠 **Answer:**  
Inside `.pipe()` before `.subscribe()` — for transforming data.

✅ **Example:**

```ts
this.api.getUsers()
  .pipe(map(users => users.filter(u => u.active)))
  .subscribe(result => console.log(result));
```

---

### 🔢 **Q20. How should you structure your resume for Angular interviews?**

🧠 **Answer:**

-   🧾 Start with a 1-line summary of your skills
    
-   💼 Focus on **achievements**, not company details
    
-   🧠 Keep it concise and 1-page ideally
    

---

### 🔢 **Q21. What’s a good career roadmap for a front-end developer?**

🧠 **Answer:**

1.  Master **JavaScript fundamentals**
    
2.  Be strong in **one framework** (Angular or React)
    
3.  Learn **monorepos (Nx)**, **micro-frontends**, and **Storybook**
    
4.  Build reusable **component libraries**
    
5.  Understand **RxJS**, **performance**, and **architecture**
    

---
