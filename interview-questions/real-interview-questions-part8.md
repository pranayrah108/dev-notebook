# Interview Questons

---

### ⚙️ **Question 1: What is the JavaScript Event Loop and how does asynchronous code work?**

**Answer:**

-   JavaScript runs in a *single thread*, so it can only do one thing at a time.
    
-   The **event loop** helps it handle tasks like `setTimeout`, `fetch`, or `promises` without freezing the browser.
    
-   It checks two queues:
    
    -   🧩 **Microtask queue:** for promises and `async/await`.
        
    -   ⏱️ **Macrotask queue:** for timers like `setTimeout`.
        
-   After finishing synchronous code, the event loop runs tasks from these queues in order.
    

**Example:**

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
```

**Output:**

```
1
3
2
```

Even with 0ms delay, `setTimeout` waits until the main work is done.

---

### 🧠 **Question 2: What’s the difference between Macrotasks and Microtasks?**

**Answer:**

-   **Macrotasks** → `setTimeout`, `setInterval`, user interactions, rendering.
    
-   **Microtasks** → Promises and `async/await`.
    
-   Microtasks run *before* the next macrotask starts.
    

**Example:**

```js
setTimeout(() => console.log("Macrotask"), 0);
Promise.resolve().then(() => console.log("Microtask"));
```

**Output:**

```nginx
Microtask
Macrotask
```

---

### 💾 **Question 3: What causes memory leaks in JavaScript, and how can you find them?**

**Answer:**

-   A **memory leak** happens when memory isn’t freed even when it’s not needed.
    
-   Common causes:
    
    -   Not removing event listeners.
        
    -   Using `setInterval` without clearing it.
        
    -   Keeping references in closures unnecessarily.
        
-   🔍 Use **Chrome DevTools → Memory tab** to track memory usage.
    

**Example:**

```js
const timer = setInterval(() => console.log("Hi"), 1000);
// Memory leak if not cleared:
clearInterval(timer);
```

---

### 📊 **Question 4: How to fix performance issues with large data tables in Angular?**

**Answer:**

-   Use **`trackBy`** in `*ngFor` to help Angular identify unchanged rows.
    
-   Add **pagination** or **infinite scroll** instead of loading everything at once.
    
-   Use **OnPush** change detection for performance.
    

**Example:**

```html
<tr *ngFor="let item of items; trackBy: trackById">
  <td>{{ item.name }}</td>
</tr>
```

```ts
trackById(index: number, item: any) {
  return item.id;
}
```

---

### 🚀 **Question 5: What is the OnPush change detection strategy in Angular?**

**Answer:**

-   By default, Angular checks *every* component for updates.
    
-   With **OnPush**, Angular updates a component only when:
    
    -   Its input changes,
        
    -   An event occurs inside it,
        
    -   Or an observable emits new data.
        
-   ✅ It makes large apps faster.
    

**Example:**

```ts
@Component({
  selector: 'app-user',
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

---

### 🛡️ **Question 6: What is DOM sanitization in Angular, and why is it important?**

**Answer:**

-   Sanitization protects against **XSS (Cross-Site Scripting)** attacks.
    
-   Angular automatically cleans HTML before rendering it.
    
-   Only use `bypassSecurityTrustHtml` if you *fully trust* the content.
    

**Example:**

```ts
import { DomSanitizer } from '@angular/platform-browser';

safeHtml = this.sanitizer.bypassSecurityTrustHtml('<p>Hello!</p>');
```

---

### 🔍 **Question 7: How do you check if your npm libraries have security issues?**

**Answer:**  
Use the built-in **npm audit** command:

```bash
npm audit
```

It shows all known vulnerabilities.  
To fix them automatically:

```bash
npm audit fix
```

---

### 🔐 **Question 8: How do you create a custom password validator in Angular?**

**Answer:**  
Write a **custom validator** that enforces password rules:

-   One uppercase letter
    
-   One number
    
-   Minimum 4 characters
    

**Example:**

```ts
import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl) {
  const value = control.value;
  const regex = /^(?=.*[A-Z])(?=.*\d).{4,}$/;
  return regex.test(value) ? null : { invalidPassword: true };
}
```

---

### 🧩 **Question 9: What are standalone components in Angular 16+?**

**Answer:**

-   Standalone components don’t need `NgModule`.
    
-   They can directly import other modules and dependencies.
    
-   This makes apps simpler and faster to load.
    

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

### 🧭 **Question 10: How do you define routes with parent and child standalone components?**

**Answer:**

-   Use `loadComponent` for lazy loading standalone components.
    
-   Use a `children` array for nested routes.
    

**Example:**

```ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./parent.component').then(m => m.ParentComponent),
    children: [
      { path: 'child', loadComponent: () => import('./child.component').then(m => m.ChildComponent) }
    ]
  }
];
```

---

### 🔁 **Question 11: How can you retry a failed promise up to 3 times?**

**Answer:**  
You can retry using recursion until it succeeds or reaches 3 attempts.

**Example:**

```js
function retryPromise(fn, retries = 3) {
  return fn().catch(err => {
    if (retries <= 1) throw err;
    return retryPromise(fn, retries - 1);
  });
}
```

---

### 🆕 **Question 12: Why should you learn the latest Angular versions (16–18)?**

**Answer:**

-   🚀 They include **signals**, **deferred loading**, and **standalone APIs**.
    
-   Modern Angular is **faster**, **lighter**, and **easier** to use.
    
-   Knowing the latest features gives you a strong edge in interviews and helps with real projects.
    

