# Interview Questons

---

### 🕐 (06:11) — **Q1. What is NPM and why do we use it?**

**Answer:**

-   **NPM** stands for **Node Package Manager**.
    
-   It is used to install and manage reusable pieces of code (called *packages* or *libraries*) in JavaScript/Angular projects.
    
-   Angular itself uses many NPM packages — like Angular CLI, RxJS, etc.
    
-   When you run:
    
    ```bash
    npm install package-name
    ```
    
    it adds that package inside the **node\_modules** folder and lists it in **package.json**.
    

**Example:**  
If you want to use Bootstrap in Angular:

```bash
npm install bootstrap
```

Then import it in `angular.json` → your app can use Bootstrap styles.

---

### 🕐 (07:30) — **Q2. What is an NPM library? When and why do we create our own?**

**Answer:**

-   An **NPM library** is a package that can be reused in multiple projects.
    
-   You create your own library if you want to share common code (like UI components, utility functions, etc.) across projects.
    
-   Once published, others can install it using:
    
    ```bash
    npm install your-library-name
    ```
    

**Example:**  
If your company uses the same custom button and input style in all apps, you can make an internal NPM library called `@company/ui` that holds those components.

---

### 🕐 (08:03) — **Q3. What is Storybook, and why is it used?**

**Answer:**

-   **Storybook** is a tool that lets you **build, test, and display UI components** separately — without running the whole app.
    
-   It’s useful for creating **component libraries** and ensuring consistent look and feel.
    

**Example:**  
You can preview how your `ButtonComponent` looks in different states (hover, disabled, active) inside Storybook before using it in your app.

---

### 🕐 (09:45) — **Q4. What are Micro-Frontends?**

**Answer:**

-   A **Micro-Frontend** means breaking one large front-end app into **small, independent apps** that can work together.
    
-   Each part (like header, product list, checkout) can be developed and deployed separately.
    

**Example:**  
In Amazon’s website:

-   The **cart** part could be a React app,
    
-   The **product page** could be an Angular app,
    
-   Both run together as one site.
    

---

### 🕐 (10:18) — **Q5. What is a Monorepo?**

**Answer:**

-   A **Monorepo** (mono-repository) is a single codebase that holds **multiple projects or apps** together.
    
-   It helps when multiple teams share code (like component libraries).
    

**Example:**  
Google keeps Gmail, Docs, Drive in one monorepo — shared components (like text box, header) are reused everywhere.

---

### 🕐 (12:05) — **Q6. How would you divide a page (like a checkout page) into Angular components?**

**Answer:**

-   Break big UI into **smaller components**.  
    Example structure:
    
    -   `HeaderComponent`
        
    -   `ProductListComponent`
        
    -   `SummaryComponent`
        
    -   `TotalComponent`
        
-   Each component handles its own data, and one **parent container** (like `CheckoutPageComponent`) manages them together.
    

---

### 🕐 (14:46) — **Q7. How do you display a list of items (like products) in Angular?**

**Answer:**

-   Use the `*ngFor` directive to loop through an array and render HTML for each item.
    

**Example:**

```html
<div *ngFor="let product of products">
  {{ product.name }} - ₹{{ product.price }}
</div>
```

---

### 🕐 (15:28) — **Q8. How do components communicate with each other in Angular?**

**Answer:**  
There are three main ways:

1.  **Parent → Child:** Using `@Input()`
    
2.  **Child → Parent:** Using `@Output()` and `EventEmitter`
    
3.  **Sibling → Sibling:** Using a **shared service** with `Subject` or `BehaviorSubject`
    

**Example:**

-   Parent passes data:
    
    ```html
    <child-comp [data]="parentValue"></child-comp>
    ```
    
-   Child sends event:
    
    ```ts
    @Output() clicked = new EventEmitter();
    this.clicked.emit('Clicked!');
    ```
    
-   Siblings use the same service to share updates.
    

---

### 🕐 (17:09) — **Q9. What are Standalone Components in Angular?**

**Answer:**

-   **Standalone components** don’t need to be declared inside a module (`NgModule`).
    
-   Introduced in Angular 14+ (used heavily in Angular 16).
    
-   Makes apps simpler — you import components directly where needed.
    

**Example:**

```ts
@Component({
  standalone: true,
  selector: 'app-hello',
  template: `<h1>Hello!</h1>`
})
export class HelloComponent {}
```

You can load this directly in routes using `loadComponent`.

---

### 🕐 (18:47) — **Q10. How do you enable routing inside a module (lazy loading)?**

**Answer:**

-   Use `loadChildren` in your app routing module to load a feature module only when needed.
    

**Example:**

```ts
const routes: Routes = [
  { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) }
];
```

This loads the checkout module **only when** `/checkout` is visited — improving performance.

---

### 🕐 (22:20) — **Q11. What is Lazy Loading in Angular?**

**Answer:**

-   **Lazy loading** means loading parts of your app (modules/components) **only when required**, instead of all at once.
    
-   It makes your app faster and reduces initial load time.
    

**Example:**  
You don’t load the “Admin” module unless the user goes to `/admin`.

---

### 🕐 (23:37) — **Q12. What is a Subscription in Angular? When do we unsubscribe?**

**Answer:**

-   A **Subscription** is what you get when you “listen” to an `Observable`.
    
-   You must **unsubscribe** to stop listening and avoid memory leaks — especially when a component is destroyed.
    

**Example:**

```ts
this.sub = this.dataService.getData().subscribe(data => console.log(data));

ngOnDestroy() {
  this.sub.unsubscribe();  // cleanup
}
```

If you have many, use `takeUntil()` or `Subscription.add()` to manage multiple at once.

---

### 🕐 (24:22) — **Q13. What is `angular.json` and how is it different from `package.json`?**

**Answer:**

-   **package.json:** lists all dependencies (packages, versions).
    
-   **angular.json:** controls Angular project settings — like build options, file paths, and style/script configurations.
    

**Example:**  
In `angular.json`, you can tell Angular which styles to include globally:

```json
"styles": ["src/styles.css", "node_modules/bootstrap/dist/css/bootstrap.min.css"]
```

---
