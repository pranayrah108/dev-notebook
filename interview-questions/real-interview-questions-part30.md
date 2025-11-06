# Interview Questons

---

### 🟢 Question 1

**Q:** What version of Angular are you working with, and what new features does it introduce (e.g., Angular 16)?  
**A:** Angular 16 introduced **standalone components**, meaning you don’t have to declare a component in a module to use it. You can just create it, import any dependencies it needs (like `CommonModule`), and it works independently.

*Example:*

```ts
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Hello!</p>`
})
export class ExampleComponent {}
```

---

### 🟡 Question 2

**Q:** What are standalone components in Angular?  
**A:** A **standalone component** is a component that doesn’t rely on Angular modules (`NgModule`) to work. It can be used on its own by importing the dependencies it needs.

*Example:* Think of it like a Lego block you can use anywhere without attaching it to a big Lego structure (module).

---

### 🟠 Question 3

**Q:** How do you handle large datasets in Angular projects?  
**A:** Use **pagination** or **infinite scroll**. Pagination loads data page by page from the server. Infinite scroll loads more data as the user scrolls down.

*Example:* On an e-commerce site, show 10 orders per page or load more orders when scrolling.

---

### 🔵 Question 4

**Q:** How do you optimize Angular app performance when the bundle file is too big?  
**A:** Use **lazy loading** for modules, which means load parts of the app only when needed. Also, use tools like `webpack-bundle-analyzer` to check which components are taking too much space.

*Example:* Load admin panel module only when the user clicks “Admin”.

---

### 🟣 Question 5

**Q:** What is the purpose of `angular.json`?  
**A:** `angular.json` is the main configuration file. It tells Angular how to **build the app**, where the files are, what styles to include, and other build settings.

*Example:* Think of it like a blueprint for your app’s build process.

---

### 🟤 Question 6

**Q:** What is the difference between constructor and `ngOnInit`?  
**A:**

-   **Constructor:** Runs first when the component is created; used for **dependency injection** (e.g., injecting a service).
    
-   **ngOnInit:** Runs after the constructor; used for **initializing data** or calling APIs.
    

*Example:* Constructor sets up the service; `ngOnInit` fetches the data from the server.

---

### 🟠 Question 7

**Q:** Have you faced CORS (Cross-Origin Resource Sharing) errors? How to resolve?  
**A:** CORS happens when the frontend and backend are on different domains. The backend must allow your domain to fetch data.

*Example:* If your Angular app is on `localhost:4200` and backend is `api.example.com`, backend needs to allow `localhost:4200` in its settings.

---

### 🔵 Question 8

**Q:** What are dumb and smart components?  
**A:**

-   **Dumb component:** Just shows data; doesn’t handle logic.
    
-   **Smart component:** Handles data and logic; passes data to dumb components.
    

*Example:* Smart component fetches orders, dumb component displays them in a table.

---

### 🟢 Question 9

**Q:** How do you pass data from parent to child component?  
**A:** Use `@Input()` decorator in the child component.

*Example:*

```ts
// Parent
<child [data]="orderList"></child>

// Child
@Input() data: any[];
```

---

### 🟡 Question 10

**Q:** How to fetch data before a component loads?  
**A:** Use **Angular Resolver** in the routing configuration. It calls a service before activating the route, so the component gets data immediately.

*Example:* Show user profile page only after fetching profile data.

---

### 🟠 Question 11

**Q:** What are route guards and how are they used?  
**A:** Route guards protect routes, e.g., login page access. Use `canActivate` to allow or prevent navigation based on conditions.

*Example:* Only logged-in users can go to `/dashboard`.

---

### 🔵 Question 12

**Q:** What are Angular directives?  
**A:** There are three types:

1.  **Components** – UI elements.
    
2.  **Structural directives** – change DOM layout, e.g., `*ngIf`, `*ngFor`.
    
3.  **Attribute directives** – change element appearance or behavior, e.g., `ngClass`, `ngStyle`.
    

*Example:* `*ngIf="isLoggedIn"` shows an element only if the user is logged in.

---

### 🟣 Question 13

**Q:** What are HostBinding and HostListener?  
**A:** Used in **custom directives**.

-   **HostBinding:** Binds a property to the host element.
    
-   **HostListener:** Listens to events on the host element.
    

*Example:* Change background color on mouse hover.

---

### 🟤 Question 14

**Q:** How do you prevent memory leaks in Angular?  
**A:** **Unsubscribe from observables** when the component is destroyed.

*Example:*

```ts
ngOnDestroy() {
  this.subscription.unsubscribe();
}
```

---

### 🟢 Question 15

**Q:** Difference between pure and impure pipes?  
**A:**

-   **Pure pipe:** Only runs when input changes.
    
-   **Impure pipe:** Runs every change-detection cycle.
    

*Example:* `date` pipe is pure; it only updates if the input date changes.

---

### 🟡 Question 16

**Q:** Difference between JIT and AOT compilation?  
**A:**

-   **JIT:** Compiles in the browser at runtime; slower, shows errors in browser.
    
-   **AOT:** Compiles ahead of time; faster, detects errors before loading app.
    

*Example:* AOT is like baking a cake completely before serving; JIT is like baking slice by slice while serving.

---

### 🟠 Question 17

**Q:** How to answer Angular interview questions effectively?  
**A:**

1.  Use **practical examples**, not just theory.
    
2.  Prepare **bullet points** for common questions.
    
3.  Write down all questions after interviews to review.
    

*Example:* When asked about CORS, mention domain mismatch and backend configuration with a small example.

---
