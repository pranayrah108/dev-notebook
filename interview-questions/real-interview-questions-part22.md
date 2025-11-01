# Interview Questons

---

### **1\. What is Dependency Injection (DI) in Angular?**

**Answer:**  
Dependency Injection is a design pattern that lets Angular automatically provide (inject) objects your component needs, instead of you creating them manually.  
Example:  
If your component needs to call APIs, you inject Angular’s `HttpClient` service:

```typescript
constructor(private http: HttpClient) {}
```

Then you can call `this.http.get('api/url')` anywhere in the component.

---

### **2\. Can we inject a service without using the constructor?**

**Answer:**  
Yes, in Angular 14+, you can use the `inject()` function instead of adding it to the constructor.  
Example:

```typescript
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const http = inject(HttpClient);
```

This makes code cleaner, especially in standalone components.

---

### **3\. What are the new features in Angular 16?**

**Answer:**  
Main highlights:

-   **Standalone Components:** You no longer need `NgModule` to use a component.
    
-   **Improved Dependency Injection:** You can use `inject()` directly.
    
-   **Signals:** A new way to handle reactivity (like RxJS observables but simpler).
    
-   **Faster Builds and Better SSR (Server-Side Rendering).**
    

Example:

```typescript
@Component({
  standalone: true,
  selector: 'app-hello',
  template: '<h1>Hello Angular 16!</h1>',
})
export class HelloComponent {}
```

---

### **4\. How does bootstrapping work without AppModule in Angular 16?**

**Answer:**  
Instead of using `AppModule`, you can directly bootstrap a **standalone component** in `main.ts`:

```typescript
bootstrapApplication(AppComponent);
```

This replaces the old method:

```typescript
platformBrowserDynamic().bootstrapModule(AppModule);
```

---

### **5\. How many ways can we create a form in Angular?**

**Answer:**  
Two main ways:

1.  **Template-driven forms** – simple, easy for small forms (use `ngModel`).
    
2.  **Reactive forms** – for complex logic, dynamic validation, and large forms.
    

Example:

-   Template-driven: `<input [(ngModel)]="name">`
    
-   Reactive: define controls in TypeScript using `FormGroup` and `FormControl`.
    

---

### **6\. What’s the difference between `setValue()` and `patchValue()`?**

**Answer:**

-   **`setValue()`**: You must provide values for *all* form controls.
    
-   **`patchValue()`**: You can update *only some* form fields.
    

Example:

```typescript
this.form.setValue({ name: 'John', age: 30 });
this.form.patchValue({ age: 25 }); // only updates 'age'
```

---

### **7\. What are Directives in Angular?**

**Answer:**  
Directives are instructions that tell Angular how to change the DOM (HTML).  
Three main types:

-   **Component** (a special directive with a template)
    
-   **Structural** (changes DOM structure) – e.g., `*ngIf`, `*ngFor`
    
-   **Attribute** (changes appearance) – e.g., `[ngClass]`, `[ngStyle]`
    

Example:

```html
<p *ngIf="isLoggedIn">Welcome back!</p>
```

---

### **8\. What are `@HostBinding` and `@HostListener`?**

**Answer:**  
They are used inside directives to interact with the element they’re attached to.

Example:

```typescript
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bgColor = 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'lightgreen';
  }
}
```

When you hover, the background color changes.

---

### **9\. Why did Angular introduce Standalone Components?**

**Answer:**  
To make development simpler by removing the need for `NgModule`.  
You can now use and share components directly without declaring them inside a module.

Example:

```typescript
bootstrapApplication(AppComponent); // no AppModule needed
```

---

### **10\. What is the `@defer` block in Angular?**

**Answer:**  
The `@defer` block helps **lazy-load** parts of the template — only showing content when needed (e.g., when visible on screen).

Example:

```html
@defer (on viewport)
  <app-heavy-chart></app-heavy-chart>
@end
```

This loads `<app-heavy-chart>` only when it appears in view.

---

### **11\. What is an Interceptor in Angular?**

**Answer:**  
An Interceptor is a class that **intercepts** HTTP requests and responses.  
It can add headers, tokens, or modify data before it reaches the server or client.

Example:

```typescript
req = req.clone({
  setHeaders: { Authorization: `Bearer ${token}` }
});
```

---

### **12\. How do you pass an Authorization token in a request header?**

**Answer:**  
You do it inside an HTTP interceptor by cloning the request and adding headers:

```typescript
req = req.clone({
  setHeaders: { Authorization: `Bearer ${token}` }
});
```

---

### **13\. What are RxJS Operators and why are they used?**

**Answer:**  
RxJS operators help work with **observables** — they transform or filter data streams.  
Common operators:

-   `map()`: modify data
    
-   `filter()`: select specific data
    
-   `take(1)`: take first value only
    
-   `catchError()`: handle errors
    

Example:

```typescript
this.http.get('api/data').pipe(
  map(data => data.items),
  take(1)
).subscribe();
```

---

### **14\. How do you handle errors in Observables?**

**Answer:**  
Use the `catchError()` operator in the pipe chain:

```typescript
this.http.get('api/data').pipe(
  catchError(err => {
    console.error('Error:', err);
    return throwError(() => err);
  })
);
```

---

### **15\. What’s the difference between Pure and Impure Pipes?**

**Answer:**

-   **Pure pipes** run **only** when the input value changes.
    
-   **Impure pipes** run on **every change detection cycle** (even if value same).
    

Example:  
Use pure pipes for static data and impure pipes for live, dynamic data (like time updates).

---

### **16\. How do you use a custom pipe in a component?**

**Answer:**

-   Create the pipe with `@Pipe({ name: 'myPipe' })`.
    
-   Export the class implementing `PipeTransform`.
    
-   Import it:
    
    -   In **module** (if using modules) → add to `declarations`
        
    -   In **standalone component** → add to `imports`.
        

---

### **17\. What is Server-Side Rendering (SSR)?**

**Answer:**  
SSR means rendering your Angular app **on the server** before sending it to the browser.  
It improves performance and SEO (search visibility).  
Implemented using **Angular Universal**.

---

### **18\. How do you share data between multiple components that are not parent-child?**

**Answer:**  
Use a **shared service** with a `BehaviorSubject` or `Subject` from RxJS.  
Example:

```typescript
// shared.service.ts
data = new BehaviorSubject<string>('default');

// comp1.ts
this.service.data.next('New value');

// comp2.ts
this.service.data.subscribe(val => console.log(val));
```

All components see the same data updates.

---

### **19\. What’s the difference between Subject and BehaviorSubject?**

**Answer:**

-   **Subject**: no initial value; subscribers only get new updates.
    
-   **BehaviorSubject**: has an initial value and always gives the **latest value** to new subscribers.
    

---

### **20\. Can we use Subject for sharing data between components?**

**Answer:**  
Yes, but BehaviorSubject is often better because it keeps the latest value for new subscribers.

---

### **21\. What is Change Detection Strategy in Angular?**

**Answer:**  
It’s how Angular checks for changes in component data and updates the DOM.  
Two strategies:

-   **Default**: checks all components every time.
    
-   **OnPush**: checks only when input data changes (better performance).
    

Example:

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

---

### **22\. What is Lazy Loading and Eager Loading?**

**Answer:**

-   **Eager Loading:** Loads all modules at startup.
    
-   **Lazy Loading:** Loads modules only when needed (like visiting a route).  
    Example:
    

```typescript
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
```

---

### **23\. What are some commonly asked Angular build questions?**

**Answer:**

-   `ng build`: builds the project
    
-   `AOT` (Ahead-of-Time Compilation): compiles code before running → faster startup
    
-   `ng serve`: runs in development mode
    

---

### **24\. What is NGRX?**

**Answer:**  
NgRx is a state management library for Angular (similar to Redux).  
It helps store and manage app state in one central place.

---

### **25\. What is the difference between `EventEmitter` and `Subject` for communication?**

**Answer:**

-   **EventEmitter:** used for parent-child component communication.
    
-   **Subject:** used for communication between *any* components through a shared service.
    

---

### **26\. How should you present your experience level in interviews?**

**Answer:**  
Be honest — only mention Angular version and experience you’re confident about.  
If you claim Angular 16 knowledge, expect advanced questions.

---

### **27\. What is FormBuilder, FormGroup, and FormControl in Reactive Forms?**

**Answer:**

-   **FormBuilder:** helps create forms quickly.
    
-   **FormGroup:** group of controls (like a form).
    
-   **FormControl:** single field control.
    

Example:

```typescript
this.form = this.fb.group({
  name: [''],
  age: ['']
});
```

---

### **28\. What is the best way to prepare for Angular interviews?**

**Answer:**

-   Start with basics (directives, components, forms).
    
-   Learn advanced topics (RxJS, interceptors, change detection, signals).
    
-   Practise explaining with examples.
    
-   Be honest about your experience.
    

---
