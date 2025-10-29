# Interview Questons

---

### **Q1. What is `async` and what does it do?**

**Answer:**  
`async` makes a function work asynchronously — it can handle tasks that take time (like API calls) without blocking other code.

Example:

```js
async function fetchData() {
  return "Data loaded";
}
fetchData().then(console.log); // Output: Data loaded
```

An `async` function always returns a Promise.

---

### **Q2. What does “asynchronous” mean?**

**Answer:**  
“Asynchronous” means tasks don’t have to wait for one another.  
JavaScript can continue running while a long task finishes in the background.

Example:

```js
setTimeout(() => console.log("Done!"), 2000);
console.log("Running...");
```

Output:

```
Running...
Done!
```

---

### **Q3. Does `async/await` make a call synchronous or asynchronous?**

**Answer:**  
`async/await` looks like synchronous code but is actually asynchronous underneath.  
`await` pauses only inside the function until the Promise finishes.

Example:

```js
async function example() {
  console.log("Before");
  await new Promise(r => setTimeout(r, 2000));
  console.log("After 2 seconds");
}
example();
```

---

### **Q4. What is hoisting in JavaScript?**

**Answer:**  
Hoisting means JavaScript moves declarations (variables and functions) to the top of their scope before running the code.

Example:

```js
sayHello(); // Works because of hoisting
function sayHello() { console.log("Hello!"); }
```

But not for function expressions:

```js
sayHello(); // ❌ Error
const sayHello = function() { console.log("Hello!"); };
```

---

### **Q5. Write a function to find the longest word in a string.**

**Answer:**  
Split the sentence into words, compare lengths, and return the longest one.

Example:

```js
function longestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
console.log(longestWord("I love programming")); // "programming"
```

---

### **Q6. What is the Nullish Coalescing Operator (`??`)?**

**Answer:**  
It checks if a value is `null` or `undefined` and returns a fallback value.

Example:

```js
let name = null;
console.log(name ?? "Guest"); // Output: Guest
```

---

### **Q7. What does the `delete` operator do?**

**Answer:**  
It removes a property from an object.

Example:

```js
let user = { name: "Alex", age: 25 };
delete user.age;
console.log(user); // { name: "Alex" }
```

---

### **Q8. How do you prevent users from modifying an object?**

**Answer:**  
Use `Object.freeze()` to lock the object completely.

Example:

```js
const car = { brand: "Toyota" };
Object.freeze(car);
car.brand = "Honda"; // ❌ No change
console.log(car.brand); // Toyota
```

`Object.seal()` only stops adding or removing properties but allows changes to existing ones.

---

### **Q9. What is the difference between `let`, `const`, and `var`?**

**Answer:**

-   `var`: Function-scoped, can be redeclared.
    
-   `let`: Block-scoped, value can change.
    
-   `const`: Block-scoped, value cannot be reassigned.
    

Example:

```js
const arr = [1,2];
arr.push(3); // Works
arr = [4,5]; // ❌ Error
```

---

## ⚙️ Angular Section

---

### **Q10. What is `ng-container` and why do we use it?**

**Answer:**  
`ng-container` groups Angular directives without adding extra HTML tags.

Example:

```html
<ng-container *ngIf="isLoggedIn">
  <p>Welcome back!</p>
</ng-container>
```

---

### **Q11. What is `ng-template`?**

**Answer:**  
`ng-template` defines a block of HTML that Angular only renders when needed.

Example:

```html
<ng-template #noUser>
  <p>No user found</p>
</ng-template>

<div *ngIf="user; else noUser">
  <p>User: {{ user.name }}</p>
</div>
```

---

### **Q12. What is `ng-content` and how is it used?**

**Answer:**  
`ng-content` projects (inserts) content from a parent component into a child component.

Example:

```html
<!-- parent.html -->
<app-card>
  <p>This text goes inside the card!</p>
</app-card>

<!-- child.html -->
<div class="card">
  <ng-content></ng-content>
</div>
```

---

### **Q13. What are Standalone Components in Angular 16?**

**Answer:**  
Standalone components don’t need NgModules — they can work independently.  
This makes apps faster and simpler.

Example:

```ts
@Component({
  standalone: true,
  selector: 'app-hello',
  template: `<h1>Hello!</h1>`
})
export class HelloComponent {}
```

---

### **Q14. How do you lazy load a Standalone Component?**

**Answer:**  
Use `loadComponent` in routing.

Example:

```ts
{
  path: 'user',
  loadComponent: () => import('./user.component').then(m => m.UserComponent)
}
```

---

### **Q15. How do you protect routes so only logged-in users can access them?**

**Answer:**  
Use a **Route Guard** (`CanActivate`) that checks if the user has a valid token.

Example:

```ts
canActivate(): boolean {
  return !!localStorage.getItem('token');
}
```

---

### **Q16. How do you attach a token to every API request?**

**Answer:**  
Use an **HTTP Interceptor** to add the token automatically.

Example:

```ts
intercept(req, next) {
  const cloned = req.clone({
    setHeaders: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  return next.handle(cloned);
}
```

---

### **Q17. Can a component work without a constructor?**

**Answer:**  
Yes. Angular will create one automatically.  
You only need it for dependency injection or setup tasks.

---

### **Q18. What is the difference between `@ViewChild` and `@ViewChildren`?**

**Answer:**

-   `@ViewChild`: Selects **one** element/component.
    
-   `@ViewChildren`: Selects **multiple** elements/components.
    

Example:

```ts
@ViewChild('inputRef') input!: ElementRef;
@ViewChildren('boxes') boxes!: QueryList<ElementRef>;
```

Use them safely in `ngAfterViewInit()`.

---

### **Q19. What is a Subject in RxJS?**

**Answer:**  
A Subject is both an Observable and an Observer — it can send out new values using `.next()`.

Example:

```ts
const subject = new Subject();
subject.subscribe(v => console.log(v));
subject.next('Hello'); // Output: Hello
```

---

### **Q20. What are Smart and Dumb Components?**

**Answer:**

-   **Smart Components:** Handle data, logic, and APIs.
    
-   **Dumb Components:** Only display data using `@Input()`.
    

Example:

```html
<!-- Smart Component -->
<app-product-card [product]="p"></app-product-card>

<!-- Dumb Component -->
@Input() product!: Product;
```

---