# Interview Questons

---

### ❓Q1️⃣ — What version of Angular are you working with, and what’s the latest version?

**Answer:**  
I’m working with Angular 10. The latest version (as of 2025) is Angular 18.  
Each new version adds performance improvements and new features like **standalone components** (v15+), **signals** (v16+), etc.

---

### ❓Q2️⃣ — What new features were introduced in Angular 16?

**Answer:**  
Angular 16 introduced features like:

-   **Signals** for fine-grained reactivity.
    
-   **Improved hydration** for SSR (Server-Side Rendering).
    
-   **Standalone APIs** improvements (no need for NgModules in many cases).
    

🧠 *Example:*  
Instead of using `@NgModule`, you can directly bootstrap a component.

---

### ❓Q3️⃣ — When we create a component (`ng generate component info`), why does its selector become `app-info`?

**Answer:**  
Angular CLI automatically adds the **prefix (`app`)** defined in `angular.json` → under `"prefix": "app"`.  
You can change it if needed.

🧠 *Example:*  
If you set `"prefix": "myapp"`, your selector becomes `<myapp-info>`.

---

### ❓Q4️⃣ — What’s the difference between `ng serve` and `ng build`?

**Answer:**

-   `ng serve`: Compiles the app in memory and runs it locally (for development).
    
-   `ng build`: Creates optimized production files in the **`dist/` folder**.
    

🧠 *Example:*  
Use `ng serve` for testing, `ng build --prod` to deploy to a live site.

---

### ❓Q5️⃣ — How can you change the output directory of `ng build`?

**Answer:**  
In **`angular.json`**, find `"outputPath": "dist/myproject"` and change it to any folder name you want.

---

### ❓Q6️⃣ — How do you add Bootstrap to an Angular project?

**Answer:**

1.  Run `npm install bootstrap`.
    
2.  Import Bootstrap’s CSS in `angular.json` or `src/styles.scss`:
    
    ```scss
    @import "~bootstrap/dist/css/bootstrap.min.css";
    ```
    

🧠 *Avoid using CDN links* in Angular projects — local imports are better.

---

### ❓Q7️⃣ — What is lazy loading and preloading in Angular?

**Answer:**

-   **Lazy Loading:** Loads a module **only when needed** (for faster startup).
    
-   **Preloading:** Loads modules **in the background** after the main app loads.
    

🧠 *Example:*  
Use `PreloadAllModules` in your routing module to speed up navigation later.

---

### ❓Q8️⃣ — What’s the difference between `constructor` and `ngOnInit()`?

**Answer:**

-   **Constructor:** Used for dependency injection; runs when the component is created.
    
-   **ngOnInit():** Lifecycle hook that runs **after constructor**, perfect for API calls or setup.
    

🧠 *Example:*

```ts
constructor(private service: DataService) {}
ngOnInit() { this.service.getData(); }
```

---

### ❓Q9️⃣ — What are the types of forms in Angular?

**Answer:**

1.  **Template-driven forms** → simple, use `ngModel`.
    
2.  **Reactive forms** → more powerful, logic written in `.ts` file.
    

🧠 *Example:*  
Reactive forms are better for complex or dynamic forms.

---

### ❓Q🔟 — What is a FormControl and FormGroup?

**Answer:**

-   **FormControl:** Manages one form field (like name or email).
    
-   **FormGroup:** Groups multiple FormControls together (like a full form).
    

🧠 *Example:*

```ts
form = new FormGroup({
  name: new FormControl(''),
  email: new FormControl('')
});
```

---

### ❓Q11️⃣ — What are validators in Angular forms?

**Answer:**  
Validators check form input rules (like required fields, length, or range).

🧠 *Example:*

```ts
Validators.required
Validators.min(0)
Validators.max(100)
```

---

### ❓Q12️⃣ — What’s the difference between `setValue()` and `patchValue()`?

**Answer:**

-   `setValue()` → must set **all** form fields.
    
-   `patchValue()` → can set **some** fields.
    

🧠 *Example:*

```ts
form.patchValue({ firstName: 'John' });
```

---

### ❓Q13️⃣ — What is AOT compilation?

**Answer:**  
**Ahead Of Time (AOT)** compilation compiles Angular code at **build time**, not at runtime.  
It makes the app faster and smaller.

---

### ❓Q14️⃣ — What are directives in Angular?

**Answer:**

-   **Component directives:** Create UI components.
    
-   **Structural directives:** Change DOM layout (`*ngIf`, `*ngFor`).
    
-   **Attribute directives:** Change element appearance (`ngStyle`, `ngClass`).
    
-   **Custom directives:** You create your own behavior.
    

---

### ❓Q15️⃣ — What are HostBinding and HostListener?

**Answer:**  
Used inside **directives** to react to events and bind properties.

🧠 *Example:*

```ts
@HostListener('click') onClick() { alert('Clicked!'); }
@HostBinding('style.color') color = 'red';
```

---

### ❓Q16️⃣ — What is Dependency Injection (DI)?

**Answer:**  
DI lets you use one class (like a service) inside another (like a component).

🧠 *Example:*

```ts
constructor(private myService: DataService) {}
```

---

### ❓Q17️⃣ — What are environment files in Angular?

**Answer:**  
They hold **environment-specific settings** (API URLs for dev, staging, prod).

🧠 *Example:*  
Run `ng build --configuration=production` to use `environment.prod.ts`.

---

## 💻 **JavaScript Interview Questions**

---

### ❓Q18️⃣ — What’s the difference between `let`, `const`, and `var`?

**Answer:**

-   `let`: Block-scoped, can be reassigned.
    
-   `const`: Block-scoped, cannot be reassigned.
    
-   `var`: Function-scoped, hoisted (old style, should avoid).
    

🧠 *Example:*

```js
let x = 5; const y = 10; var z = 15;
```

---

### ❓Q19️⃣ — Why is `var` problematic?

**Answer:**  
It’s **function-scoped** and allows **re-declaration**, causing bugs.

🧠 *Example:*

```js
var x = 5; var x = 10; // No error – but confusing!
```

---

### ❓Q20️⃣ — What’s the difference between `+` and `-` when mixing strings and numbers?

**Answer:**  
`+` concatenates, `-` converts to numbers.

🧠 *Example:*

```js
1 + "2" → "12"
"2" - 1 → 1
```

---

### ❓Q21️⃣ — What does `this` refer to?

**Answer:**  
`this` refers to the **current object** or context where a function is running.

🧠 *Example:*

```js
person = {name:'John', greet() { console.log(this.name); } }
person.greet(); // John
```

---

### ❓Q22️⃣ — Difference between normal function and arrow function?

**Answer:**

-   Normal functions have their own `this`.
    
-   Arrow functions **don’t** — they use `this` from the parent scope.
    

---

### ❓Q23️⃣ — Can you use `arguments` in arrow functions?

**Answer:**  
No. Arrow functions don’t have their own `arguments` object.  
Use **rest operator (`...args`)** instead.

🧠 *Example:*

```js
const add = (...nums) => nums.reduce((a,b)=>a+b);
```

---

### ❓Q24️⃣ — What’s the difference between `undefined` and `undeclared`?

**Answer:**

-   **Undefined:** Variable declared but no value.
    
-   **Undeclared:** Variable not declared at all.
    

🧠 *Example:*

```js
let a; console.log(a); // undefined
console.log(b); // error (undeclared)
```

---

### ❓Q25️⃣ — What are JavaScript data types?

**Answer:**

-   **Primitive:** string, number, boolean, null, undefined, symbol, bigint.
    
-   **Non-primitive:** object, array, function.
    

---

### ❓Q26️⃣ — What is array destructuring?

**Answer:**  
Extracting values from an array into variables.

🧠 *Example:*

```js
const [a,b] = [1,2]; // a=1, b=2
```

---

### ❓Q27️⃣ — What is function currying?

**Answer:**  
Breaking a function with multiple parameters into **a chain of functions** each taking one argument.

🧠 *Example:*

```js
const add = a => b => a + b;
add(2)(3); // 5
```

---

### ❓Q28️⃣ — What is a closure and lexical scoping?

**Answer:**  
A **closure** is when an inner function remembers variables from its outer function.  
**Lexical scope** means child functions can use variables from their parents.

🧠 *Example:*

```js
function outer() {
  let name = "John";
  return function inner() {
    console.log(name);
  };
}
outer()(); // John
```

---

### ❓Q29️⃣ — Difference between shallow copy and deep copy?

**Answer:**

-   **Shallow copy:** Copies only first level (references nested objects).
    
-   **Deep copy:** Copies everything including nested objects.
    

🧠 *Example:*

```js
let shallow = {...obj}; // shallow
let deep = structuredClone(obj); // deep
```

---

### ❓Q30️⃣ — What is an Immediately Invoked Function Expression (IIFE)?

**Answer:**  
A function that runs **as soon as it’s defined**.

🧠 *Example:*

```js
(function() { console.log('Runs instantly!'); })();
```

---

### ❓Q31️⃣ — What is a pure function?

**Answer:**  
A function that **always gives the same result** for the same input and has **no side effects**.

🧠 *Example:*

```js
function add(a,b){ return a+b; } // pure
```

---

### ❓Q32️⃣ — What are debouncing and throttling?

**Answer:**

-   **Debouncing:** Waits until user stops typing before running function.
    
-   **Throttling:** Runs function at fixed time intervals.
    

🧠 *Example:*  
Typing search input → debounce prevents calling API for every keystroke.

---

### ❓Q33️⃣ — Why use closures with IIFE?

**Answer:**  
To keep variables private and avoid polluting global scope.  
Closures allow access to inner variables safely.

---

### ❓Q34️⃣ — What is SCSS and why is it used?

**Answer:**  
SCSS is a CSS preprocessor that supports **variables, nesting, and mixins** — making styling more organized and reusable.

---

---
