# Interview Questons

---

### **1\. What is an AppInitializer in Angular?**

**Answer:**  
`APP_INITIALIZER` lets you run some code **before your app starts** — for example, loading config data or checking authentication before showing the first page.

**Example:**

```ts
export function loadAppConfig(configService: ConfigService) {
  return () => configService.loadConfig();
}

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadAppConfig,
      deps: [ConfigService],
      multi: true
    }
  ]
})
export class AppModule {}
```

---

### **2\. What’s the difference between a Resolver and a Guard in Angular routing?**

**Answer:**

-   **Guard** → decides **if a route can be accessed**.
    
-   **Resolver** → **loads data before route activates**.
    

**Example:**

```ts
// Guard
canActivate() { return this.authService.isLoggedIn(); }

// Resolver
resolve() { return this.userService.getUserProfile(); }
```

> Guard = “Can I go there?”  
> Resolver = “Get the data first.”

---

### **3\. How do you manage role-based authorization in Angular?**

**Answer:**  
Use **route guards** and **role checks** to control access.

**Example:**

```ts
canActivate() {
  const user = this.authService.currentUser;
  return user.role === 'admin';
}
```

Or hide UI:

```html
<button *ngIf="isAdmin">Delete User</button>
```

---

### **4\. What happens during `npm install`?**

**Answer:**

-   Reads `package.json` for dependencies.
    
-   Downloads packages from npm registry.
    
-   Saves them to `node_modules`.
    
-   Updates or creates `package-lock.json` for version consistency.
    

---

### **5\. What if `package-lock.json` is missing?**

**Answer:**

-   npm installs dependencies using `package.json`.
    
-   It may pick **different minor versions**.
    
-   Then it automatically **creates a new `package-lock.json`**.
    

---

### **6\. What happens if Node versions differ (e.g., 16.2 vs 16.14)?**

**Answer:**  
Different Node versions can cause:

-   Incompatible dependencies
    
-   Build or runtime errors  
    ✅ Always use the **same Node version** across your team (e.g., with `.nvmrc`).
    

---

### **7\. What does `npm install --force` do?**

**Answer:**  
It **forces installation** even if there are dependency conflicts.  
Useful for quick fixes but risky — may break the app.  
Use cautiously.

---

### **8\. If a child component adds a new @Input(), how should we handle it?**

**Answer:**  
Make it **optional** or set a **default value** so it doesn’t break existing parent components.

**Example:**

```ts
@Input() title: string = 'Default Title';
```

---

### **9\. How should you design the folder structure of an Angular app?**

**Answer:**  
Use the **Core–Shared–Feature** pattern:

```java
src/
├── app/
│   ├── core/        → singletons (services, interceptors, auth)
│   ├── shared/      → reusable components (buttons, modals)
│   ├── features/    → domain modules (products, orders)
│   └── app.module.ts
```

-   Core → services that load once
    
-   Shared → reusable UI parts
    
-   Features → main app sections
    

---

### **10\. What’s the difference between ViewChild and ViewChildren?**

**Answer:**

-   `@ViewChild()` → get **a single** child element or component.
    
-   `@ViewChildren()` → get **multiple** child elements/components.
    

**Example:**

```ts
@ViewChild('myDiv') div!: ElementRef;
@ViewChildren('item') items!: QueryList<ElementRef>;
```

---

### **11\. What causes memory leaks in Angular?**

**Answer:**  
Usually from **not unsubscribing** from Observables.  
The component gets destroyed but the subscription keeps running.

**Fix:**  
Use `takeUntil()` or `async` pipe.

**Example:**

```ts
this.data$.pipe(takeUntil(this.destroy$)).subscribe();
```

or

```html
<div *ngIf="data$ | async as data">{{ data }}</div>
```

---

### **12\. What is Change Detection in Angular?**

**Answer:**  
It’s the process where Angular **updates the view when data changes**.  
By default, Angular checks everything (using `zone.js`).  
For performance, use **OnPush** to update only when needed.

**Example:**

```ts
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

---

### **13\. What are the new features in Angular 17?**

**Answer:**

-   **Signals** → new reactive state management system
    
-   **Built-in control flow syntax**: `@if`, `@for`, `@switch`
    
-   **Improved SSR & hydration**
    
-   **Better performance for standalone components**
    

**Example:**

```html
@if (isLoggedIn) {
  <p>Welcome back!</p>
}
```

---

### \**14\. What does trackBy do in *ngFor?**

**Answer:**  
It helps Angular **track list items by ID** to update only changed items instead of re-rendering the entire list.

**Example:**

```html
<li *ngFor="let user of users; trackBy: trackById">{{ user.name }}</li>
```

```ts
trackById(index: number, user: any) {
  return user.id;
}
```

---

### **15\. What is content projection (ng-content)?**

**Answer:**  
It lets you **insert content from a parent** into a child component’s template.

**Example:**

```html
<!-- parent -->
<card>
  <p>This text comes from parent!</p>
</card>
```

```html
<!-- card.component.html -->
<div class="card">
  <ng-content></ng-content>
</div>
```

---

### **16\. What testing tools does Angular use?**

**Answer:**

-   **Jasmine** → test framework
    
-   **Karma** → test runner
    
-   **ng test** → runs tests
    
-   `--code-coverage` → generates coverage report
    

**Example:**

```bash
ng test --code-coverage
```

---

### **17\. What should a senior Angular developer focus on?**

**Answer:**

-   **Routing:** guards, resolvers, lazy loading
    
-   **Dependency management:** npm, Node versions
    
-   **RxJS:** Observables, Subjects, BehaviorSubjects
    
-   **Component communication:** @Input/@Output, services
    
-   **Change Detection:** OnPush
    
-   **Performance:** memory leaks, trackBy
    
-   **Core JS:** closures, `bind`, `apply`, async handling
    

---