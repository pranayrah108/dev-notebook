# Interview Questons

---

#### ❓Q1️⃣: Which Angular version are you working with?

**Answer:**  
I currently work with **Angular 11**, but I also practice newer features like **Standalone Components (Angular 14)** and **Signals (Angular 16)**.  
👉 *Example:* Exploring Angular 16 Signals helps manage reactive state without using RxJS.

---

#### ❓Q2️⃣: What are pure and impure pipes?

**Answer:**

-   **Pure pipes** update only when the input value changes.
    
-   **Impure pipes** run every time a change happens in the app (even unrelated ones).
    

👉 *Example:*  
If you have a list filter pipe:

-   **Pure pipe** updates only when the list input changes.
    
-   **Impure pipe** updates every time you type, add, or remove an item — good for live search, but slower.
    

---

#### ❓Q3️⃣: Which pipe is better for optimization?

**Answer:**  
✅ **Pure pipes** — because they don’t run unnecessarily and make the app faster.

---

#### ❓Q4️⃣: What is the `async` pipe? Is it pure or impure?

**Answer:**

-   The **async pipe** is **impure**.
    
-   It automatically **subscribes and unsubscribes** from Observables or Promises in your HTML.
    
-   Helps avoid memory leaks and reduces code in the TypeScript file.
    

👉 *Example:*

```html
<p>{{ data$ | async }}</p>
```

This automatically gets data from an Observable and unsubscribes when the component is destroyed.

---

#### ❓Q5️⃣: What are standalone components in Angular?

**Answer:**  
Standalone components are **independent Angular components** that don’t need a module (`NgModule`).  
They can import dependencies directly.

👉 *Example:*

```bash
ng generate component hello --standalone
```

You can use this component anywhere without declaring it in `AppModule`.

---

#### ❓Q6️⃣: What command creates a standalone component?

**Answer:**

```bash
ng generate component component-name --standalone
```

---

#### ❓Q7️⃣: How does bootstrapping work in standalone components?

**Answer:**  
In **standalone apps**, you bootstrap directly from the `main.ts` file using `bootstrapApplication()`.

👉 *Example:*

```typescript
bootstrapApplication(AppComponent);
```

---

#### ❓Q8️⃣: What is `AppInitializer` in Angular?

**Answer:**  
`AppInitializer` runs some code **before your app loads** — for example, fetching config or user data.

👉 *Example:*  
You can use it to load API settings before the app starts.

---

#### ❓Q9️⃣: How do you route in standalone components?

**Answer:**  
Instead of `loadChildren`, use **`loadComponent`** for lazy loading.

👉 *Example:*

```typescript
{ path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) }
```

---

#### ❓Q🔟: What is `trackBy` in `*ngFor` and why use it?

**Answer:**  
`trackBy` helps Angular identify list items efficiently, so it doesn’t re-render unchanged items.

👉 *Example:*

```html
<li *ngFor="let item of items; trackBy: trackById">{{ item.name }}</li>
```

```typescript
trackById(index, item) { return item.id; }
```

This improves performance for large lists.

---

#### ❓Q1️⃣1️⃣: How do you reset a Reactive Form?

**Answer:**  
Use the **`form.reset()`** method in the TypeScript file.  
👉 *Example:*

```typescript
this.myForm.reset();
```

---

#### ❓Q1️⃣2️⃣: What’s the difference between `setValue()` and `patchValue()`?

**Answer:**

-   `setValue()` – needs values for **all** form controls.
    
-   `patchValue()` – updates **only some** controls.
    

👉 *Example:*

```typescript
this.form.patchValue({ firstName: 'John' });
```

---

#### ❓Q1️⃣3️⃣: What is a template-driven form?

**Answer:**  
Forms built directly in the **HTML template** using directives like `ngModel`.  
👉 *Example:*

```html
<input name="email" [(ngModel)]="user.email">
```

---

#### ❓Q1️⃣4️⃣: What is Zone.js in Angular?

**Answer:**  
`Zone.js` keeps track of asynchronous operations and **triggers change detection** automatically.  
It helps Angular know when to update the UI.

---

#### ❓Q1️⃣5️⃣: What is change detection in Angular?

**Answer:**  
It’s the process where Angular checks component data and updates the view when values change.

👉 *Example:*  
If a variable `count` changes, Angular re-renders the part of the UI showing `{{ count }}`.

---

#### ❓Q1️⃣6️⃣: How do you test Angular apps?

**Answer:**  
Use **Jasmine** (testing framework) and **Karma** (test runner).  
You write “spec” files with `it()` blocks to test components, services, etc.

👉 *Example:*

```typescript
it('should add numbers correctly', () => {
  expect(2 + 2).toBe(4);
});
```

---

#### ❓Q1️⃣7️⃣: What is `router-outlet`?

**Answer:**  
`<router-outlet>` is a placeholder that tells Angular **where to display routed components** on the page.

👉 *Example:*  
Between header and footer, it loads the main content area.

---

#### ❓Q1️⃣8️⃣: Can we use multiple `router-outlet`s?

**Answer:**  
✅ Yes, you can use **named outlets** for multiple areas.  
👉 *Example:*

```html
<router-outlet name="sidebar"></router-outlet>
```

---

#### ❓Q1️⃣9️⃣: How do you handle errors in Observables?

**Answer:**  
Use the **`catchError()`** operator in RxJS.

👉 *Example:*

```typescript
this.api.getData().pipe(
  catchError(err => of([]))
);
```

---

#### ❓Q2️⃣0️⃣: How do you handle errors in Promises?

**Answer:**  
Use `.catch()` at the end of your promise chain.

👉 *Example:*

```javascript
fetch('/data').then(res => res.json()).catch(err => console.log(err));
```

---

#### ❓Q2️⃣1️⃣: What are some RxJS operators you’ve used?

**Answer:**  
Common ones:

-   `map` – transforms data
    
-   `filter` – filters data
    
-   `switchMap` – cancels previous request if a new one starts
    
-   `forkJoin` – waits for multiple observables to finish, then returns results together
    

👉 *Example:*

```typescript
forkJoin([api1$, api2$]).subscribe(([data1, data2]) => {...});
```

---

#### ❓Q2️⃣2️⃣: What is the difference between `forkJoin` and `switchMap`?

**Answer:**

-   **`forkJoin`** waits for **all** observables to complete → returns combined result.
    
-   **`switchMap`** cancels old request when a new one starts → useful for search or live typing.
    

---

#### ❓Q2️⃣3️⃣: What types of directives exist in Angular?

**Answer:**

1.  **Component Directives** – have a template (e.g., your normal components).
    
2.  **Structural Directives** – change DOM structure (e.g., `*ngIf`, `*ngFor`).
    
3.  **Attribute Directives** – change look/behavior (e.g., `ngClass`, custom directives).
    

---

#### ❓Q2️⃣4️⃣: What are `HostListener` and `HostBinding`?

**Answer:**

-   **HostListener** – listens to DOM events on the host element.
    
-   **HostBinding** – binds a property or style to the host element.
    

👉 *Example:*

```typescript
@Directive({ selector: '[hoverColor]' })
export class HoverColorDirective {
  @HostBinding('style.background') bg = 'white';
  @HostListener('mouseenter') onEnter() { this.bg = 'yellow'; }
  @HostListener('mouseleave') onLeave() { this.bg = 'white'; }
}
```

---

#### ❓Q2️⃣5️⃣: What’s the difference between `ng serve` and `ng build`?

**Answer:**

-   **ng serve** → for development; runs local server and auto-reloads changes.
    
-   **ng build** → for production; compiles and minifies files into a `dist/` folder for deployment.
    

---

#### ❓Q2️⃣6️⃣: Where does Angular put the build files?

**Answer:**  
In the `dist/` folder by default. You can change the location in `angular.json` under `"outputPath"`.

---

#### ❓Q2️⃣7️⃣: How to handle environment-specific settings?

**Answer:**  
Use **environment files** (`environment.ts`, `environment.prod.ts`) and **file replacements** in `angular.json`.

👉 *Example:*  
Different API URLs for dev vs prod.

---

#### ❓Q2️⃣8️⃣: What’s the difference between dependencies and devDependencies?

**Answer:**

-   **Dependencies:** Needed for the app to run (e.g., Angular, RxJS).
    
-   **DevDependencies:** Needed only for development/testing (e.g., Jasmine, TypeScript).
    

---

#### ❓Q2️⃣9️⃣: What is an HTTP interceptor?

**Answer:**  
A service that **intercepts HTTP requests and responses** to modify them globally.

👉 *Example:*  
Add an auth token or handle errors in one place.

---

#### ❓Q3️⃣0️⃣: What are the different types of data binding in Angular?

**Answer:**

1.  **Interpolation:** `{{ value }}`
    
2.  **Property Binding:** `[value]="data"`
    
3.  **Event Binding:** `(click)="onClick()"`
    
4.  **Two-way Binding:** `[(ngModel)]="name"`
    

---

#### ❓Q3️⃣1️⃣: How to prepare for Angular interviews effectively?

**Answer:**

-   Practice coding real examples from your project.
    
-   Revise core topics like Forms, RxJS, Directives, and Lifecycle.
    
-   Review at least 40–50 questions (like this list).
    
-   Build small apps using latest Angular features (Standalone, Signals).
    

---