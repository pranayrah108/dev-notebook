# Interview Questons

---

### **1\. What version of Angular are you working with?**

**Answer:**  
I’m using **Angular 14**.  
➡️ Angular 14 introduced **Standalone Components** — a new way to build apps without using traditional modules.

---

### **2\. What are Standalone Components in Angular?**

**Answer:**  
Standalone components let you **create Angular components without modules**.  
Normally, you must declare components inside a module (like `AppModule`), but with standalone, you can skip that.  
✅ Example:

```typescript
@Component({
  standalone: true,
  selector: 'app-hello',
  template: `<h1>Hello</h1>`,
  imports: [CommonModule]
})
export class HelloComponent {}
```

You can directly use this component anywhere without adding it to a module.

---

### **3\. How do you migrate an existing project to Standalone Components?**

**Answer:**  
Angular provides commands that can **automatically convert components** into standalone ones.  
You can run Angular CLI migration commands to handle dependencies and remove module references.  
✅ Example commands:

```bash
ng g @angular/core:standalone
ng update @angular/core --migrate-only
```

These convert your existing setup to standalone mode.

---

### **4\. What new features were added around Angular 14–16?**

**Answer:**

-   **Angular Signals** – a new reactive system for managing state.
    
-   **Angular Universal** – for Server-Side Rendering (SSR) to improve SEO and performance.
    
-   **Standalone APIs** – easier lazy loading and module-free design.
    

---

### **5\. How do you lazy-load components (not modules) in newer Angular versions?**

**Answer:**  
You can use **`loadComponent()`** instead of loading whole modules.  
✅ Example:

```typescript
{
  path: 'home',
  loadComponent: () => import('./home.component').then(m => m.HomeComponent)
}
```

This loads only the needed component on demand, improving performance.

---

### **6\. What does `@Injectable()` do in Angular services?**

**Answer:**  
`@Injectable()` tells Angular that a **class can be used as a service** and injected into other parts of your app.  
It ensures one **shared instance** of the service across all components.  
✅ Example:

```typescript
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName = 'John';
}
```

All components that inject `UserService` will share the same `userName` value.

---

### **7\. What’s the difference between a Constructor and `ngOnInit()`?**

**Answer:**

-   **Constructor:** runs when the class is created — good for setting up variables.
    
-   **`ngOnInit()`:** runs **after Angular initializes** data bindings — good for API calls or setup that depends on bindings.  
    ✅ Example:
    

```typescript
constructor() {
  console.log('Constructor runs first');
}
ngOnInit() {
  console.log('ngOnInit runs after setup');
}
```

---

### **8\. What is `ngOnDestroy()` used for?**

**Answer:**  
It’s a **lifecycle hook** that runs just before a component is removed from the screen.  
Use it to **unsubscribe** from observables or stop timers to avoid memory leaks.  
✅ Example:

```typescript
ngOnDestroy() {
  this.subscription.unsubscribe();
}
```

---

### **9\. What is the `async` pipe and why do we use it?**

**Answer:**  
The **`async` pipe** automatically subscribes to an observable and displays its latest value.  
You don’t need to manually call `subscribe()` or `unsubscribe()`.  
✅ Example:

```html
<div *ngIf="user$ | async as user">
  {{ user.name }}
</div>
```

**Drawback:** It can cause performance issues if used too much in templates or if errors aren’t handled properly.

---

### **10\. Is `async` pipe pure or impure? What’s the difference?**

**Answer:**  
`async` pipe is **impure**, because it may change its output even if the input reference doesn’t change.

-   **Pure pipes** only run when input data changes.
    
-   **Impure pipes** run more frequently (e.g., every change detection cycle).
    

---

### **11\. What is AOT (Ahead-of-Time) compilation?**

**Answer:**  
AOT compiles your Angular code **before it runs in the browser** — making the app load faster and catch errors early.  
✅ Example:  
Without AOT → compilation happens at runtime (slower).  
With AOT → precompiled code loads instantly.  
After Angular 13, the **Ivy** engine replaced AOT as the default compiler for better performance.

---

### **12\. How do you share data between sibling components?**

**Answer:**  
There are several ways:

1.  **Input/Output decorators** – for parent–child data sharing.
    
2.  **Service with Subject/BehaviorSubject** – for sibling components.  
    ✅ Example using BehaviorSubject:
    

```typescript
// data.service.ts
data = new BehaviorSubject('Hello');
updateData(value: string) {
  this.data.next(value);
}
```

Both sibling components can subscribe to `data` to share updates.

---

### **13\. What’s the difference between `Subject`, `BehaviorSubject`, and `ReplaySubject`?**

**Answer:**

| Type | Default Value | Behavior |
| --- | --- | --- |
| **Subject** | None | Emits only new values to subscribers. |
| **BehaviorSubject** | Requires an initial value | Emits the latest value to new subscribers. |
| **ReplaySubject** | Can set a buffer (e.g., last 5 values) | Replays those past values to new subscribers. |

✅ Example:

```typescript
const sub = new ReplaySubject(2);
sub.next(1);
sub.next(2);
sub.next(3);
sub.subscribe(console.log); // prints 2, 3
```

---

### **14\. What is SSR (Server-Side Rendering) and why is it used?**

**Answer:**  
SSR renders Angular pages **on the server first**, sending ready HTML to the browser.  
✅ Benefits:

-   Faster first-page load
    
-   Better SEO  
    ✅ Example: Implemented with **Angular Universal**.
    

---

### **15\. What are the two types of Angular forms?**

**Answer:**

1.  **Template-driven forms:** simple, use directives like `ngModel`.
    
2.  **Reactive forms:** use TypeScript code to handle complex logic, validation, and dynamic fields.  
    ✅ Example (Reactive):
    

```typescript
form = new FormGroup({
  name: new FormControl('')
});
```

---

### **16\. What is a “Serverless” Angular application?**

**Answer:**  
A serverless app uses **cloud services** instead of a traditional backend.  
✅ Example: Using **Firebase** to store data, send notifications, and handle login — no need for Node.js or Java.

---

### **17\. What are performance optimization techniques in Angular?**

**Answer:**

-   Avoid functions in templates.
    
-   Use **lazy loading** for routes/components.
    
-   Use **ChangeDetectionStrategy.OnPush** to reduce unnecessary checks.
    
-   Reuse components and code.  
    ✅ Example:
    

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

---

### **18\. What are `FormControl`, `FormGroup`, and `FormArray` in Reactive Forms?**

**Answer:**

-   **FormControl:** represents one input field.
    
-   **FormGroup:** groups multiple controls together.
    
-   **FormArray:** dynamic list of controls.  
    ✅ Example:
    

```typescript
form = new FormGroup({
  name: new FormControl(''),
  skills: new FormArray([new FormControl('Angular')])
});
```

---

### **19\. What is Tree Shaking in Angular?**

**Answer:**  
Tree shaking removes **unused code** during the build process, reducing bundle size.  
✅ Example: If you import a library but don’t use some parts, they’re removed automatically.

---

### **20\. What is Lazy Loading in Angular?**

**Answer:**  
It loads **only the required parts** of an application when needed, improving load speed.  
✅ Example:

```typescript
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
```

---