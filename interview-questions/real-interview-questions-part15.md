# Interview Questons

---

### 🧾 00:54 – Resume & Testing

**Q1.** What testing framework or tool do you use for application testing?  
**A:** In Angular, common testing tools are **Jasmine** and **Karma**.

-   *Example:* Jasmine is used to write unit tests (`it("should add item", () => {...})`) and Karma runs them in a browser.
    
-   For end-to-end (E2E) tests, tools like **Protractor** (older) or **Cypress** (newer) are often used.
    

---

### 🧩 05:05 – Coding Task

**Q2.** How would you implement push, pop, pick, and check-empty operations in Angular?  
**A:**  
You can maintain an array and use buttons for operations:

-   **Push:** Add an element → `this.list.push(value)`
    
-   **Pop:** Remove last element → `this.list.pop()`
    
-   **Pick:** Show last element → `this.list[this.list.length - 1]`
    
-   **Check empty:** `this.list.length === 0`  
    *Example:*
    

```ts
if (this.list.length === 0) console.log("List is empty");
```

---

### 🧠 35:00 – Code Optimization

**Q3.** Instead of writing four different button functions, how can we simplify the logic?  
**A:** Use **one function** with a parameter for the action.  
*Example:*

```ts
perform(action: string) {
  switch(action) {
    case 'push': this.list.push(this.item); break;
    case 'pop': this.list.pop(); break;
    case 'empty': this.list = []; break;
  }
}
```

---

### 💡 37:10 – JavaScript / ES6

**Q4.** What are array methods like `map`, `filter`, and `reduce` used for?  
**A:**

-   **map()** → Creates a new array by changing each element.  
    *Example:* `[1,2,3].map(x => x * 2)` → `[2,4,6]`
    
-   **filter()** → Keeps only elements that meet a condition.  
    *Example:* `[1,2,3,4].filter(x => x > 2)` → `[3,4]`
    
-   **reduce()** → Combines all elements into one result.  
    *Example:* `[1,2,3].reduce((a,b)=>a+b,0)` → `6`
    

---

### 🧭 38:34 – JavaScript Objects

**Q5.** What are `Object.keys()`, `Object.values()`, and `Object.entries()` used for?  
**A:**  
They let you work with object properties easily:

```js
const user = {name:"Tom", age:25};
Object.keys(user);    // ["name","age"]
Object.values(user);  // ["Tom",25]
Object.entries(user); // [["name","Tom"],["age",25]]
```

---

### ⚡ 39:08 – IIFE

**Q6.** What is an Immediately-Invoked Function Expression (IIFE)?  
**A:**  
It’s a function that runs right after it’s defined.  
*Example:*

```js
(function() {
  console.log("Runs immediately!");
})();
```

Useful for running setup code without polluting global scope.

---

### 🧱 41:06 – Angular Core

**Q7.** What is `APP_INITIALIZER` in Angular?  
**A:**  
It’s a special Angular feature that runs code **before** your app starts — for setup or loading config.  
*Example:*  
Use it to fetch settings before showing UI:

```ts
{ provide: APP_INITIALIZER, useFactory: loadConfig, deps: [ConfigService], multi: true }
```

---

### 🧾 41:42 – JavaScript Variables

**Q8.** How many ways can you declare a variable in JS?  
**A:**

-   `var` → Function-scoped (older)
    
-   `let` → Block-scoped (preferred for mutable values)
    
-   `const` → Block-scoped (for constants)  
    If you don’t use any keyword, it becomes a **global variable** — avoid that!
    

---

### 📦 42:23 – npm

**Q9.** What is npm in Angular?  
**A:**  
**npm (Node Package Manager)** installs and manages libraries your Angular project needs.  
*Example:*  
`npm install @angular/material` → installs Angular Material.

---

### 🎨 43:44 – Adding Bootstrap

**Q10.** How can you add Bootstrap to an Angular app?  
**A:**

-   **Preferred:** Run `npm install bootstrap` and import it in `angular.json`.
    
-   **Alternative:** Add Bootstrap **CDN link** in `index.html`.  
    npm method is faster and more reliable.
    

---

### 📁 44:25 – Package Lock

**Q11.** What is `package-lock.json` used for?  
**A:**  
It “locks” the versions of all packages so that your teammate installs **the same versions**.  
*Example:* Ensures your Angular 17 project stays on 17.0.2 and doesn’t auto-update to 17.1 unexpectedly.

---

### ⚙️ 46:37 – Dependencies

**Q12.** What’s the difference between dependencies and devDependencies?  
**A:**

-   **dependencies** → Needed **when app runs** (e.g., `@angular/core`)
    
-   **devDependencies** → Needed **only for development** (e.g., testing tools like Jasmine).  
    When you build the app for production, only dependencies are included.
    

---

### 🔄 47:13 – Upgrading Angular

**Q13.** How do you upgrade an Angular app to a newer version?  
**A:**  
Run `ng update` commands step-by-step.  
*Example:*

```bash
ng update @angular/core@13 @angular/cli@13
```

Check official guide: update.angular.io.

---

### ⚙️ 48:50 – Multiple Router Outlets

**Q14.** Can we use multiple `<router-outlet>` tags in Angular?  
**A:**  
Yes. You can have one for the main content and another (named outlet) for a sidebar or popup.  
*Example:*

```html
<router-outlet></router-outlet>
<router-outlet name="popup"></router-outlet>
```

---

### 🧩 49:34 – Multiple Interceptors

**Q15.** Can you use multiple HTTP interceptors, and how do you control the order?  
**A:**  
Yes. Angular runs them in the order they’re **provided**.  
To ensure one runs first, list it first in the providers array.  
*Example:*

```ts
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
]
```

---

### 🧱 50:12 – Standalone Components

**Q16.** If Angular no longer uses modules (NgModule), how do routing and providers work?  
**A:**  
In Angular 16+, **Standalone Components** handle this:

-   Routing defined in `app.config.ts`
    
-   App bootstrapped in `main.ts` with `bootstrapApplication(AppComponent, appConfig)`
    
-   Providers imported directly inside config file.  
    This makes apps simpler and modular.
    

---

### ⚡ 52:27 – Lazy Loading Components

**Q17.** How do you lazy-load a component (without modules) in Angular 16/17?  
**A:**  
Use `loadComponent` in your route definition.  
*Example:*

```ts
{
  path: 'profile',
  loadComponent: () => import('./profile.component').then(m => m.ProfileComponent)
}
```

The component loads **only when needed**, improving performance.

---

### ⚙️ 56:25 – Angular Signals

**Q18.** What are Angular Signals?  
**A:**  
A new reactivity system (introduced in Angular 16).  
They store reactive values — if the value changes, the UI updates automatically.  
*Example:*

```ts
count = signal(0);
increase() { this.count.set(this.count() + 1); }
```

No need for RxJS Observables in simple state cases.

---

### ⚙️ 58:15 – JavaScript Fundamentals

**Q19.** What are closures in JavaScript?  
**A:**  
A closure lets an inner function access variables from an outer function, even after the outer one has finished.  
*Example:*

```js
function outer() {
  let x = 10;
  return function inner() {
    console.log(x); // still can access x
  };
}
const fn = outer();
fn(); // prints 10
```

---