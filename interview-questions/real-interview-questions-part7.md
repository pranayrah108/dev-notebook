# Interview Questons

---

## 🧩 **Question 1: What are the new features in Angular 17?**

### ✅ **Answer:**

Angular 17 introduced several major improvements:

---

### **1\. Standalone Components**

You can now create components that **don’t need an `NgModule`**.

```ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hello',
  template: `<h1>Hello, Angular 17!</h1>`
})
export class HelloComponent {}
```

---

### **2\. Functional Router Guards (New & Simplified)**

In Angular 17, instead of creating a guard class, you can define a **simple guard function**.

#### 🧠 *Before (Old way – class-based guard)*:

```ts
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
```

#### 🚀 *Now (Angular 17 functional guard)*:

```ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
```

And use it directly in your route definition:

```ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }
];
```

🟢 **Benefit:** Easier to read, no need for extra classes, and works well with Standalone Components.

---

### **3\. Functional Interceptors (Simplified Syntax)**

Interceptors can also be defined **as functions** rather than classes.

#### 🚀 *Example (Angular 17 Functional Interceptor)*:

```ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req);
};
```

Then register it in your application provider list:

```ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
});
```

🟢 **Benefit:** No need for `@Injectable()` classes; clean, function-based approach that aligns with Angular’s standalone design.

---

### **4\. New Template Syntax (`@if`, `@for`, `@switch`)**

Angular 17 replaced structural directives (`*ngIf`, `*ngFor`) with **modern control flow syntax**.

```html
@for (user of users; track user.id) {
  <p>{{ user.name }}</p>
} @empty {
  <p>No users found!</p>
}
```

🟢 **Benefit:** Easier to read and faster compile times.

---

### **5\. Improved SSR (Server-Side Rendering) and Hydration**

Angular 17 made SSR setup simpler and faster.

#### ⚙️ *How to add SSR:*

Run this command:

```bash
ng add @angular/ssr
```

This automatically sets up **server-side rendering** for your app.

#### 🧩 *Example structure:*

You’ll get:

-   `server.ts` → entry point for Express-based server
    
-   `main.server.ts` → server bootstrap file
    

Sample `server.ts`:

```ts
import 'zone.js/node';
import express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { ngExpressEngine } from '@nguniversal/express-engine';

const app = express();
const distFolder = join(process.cwd(), 'dist/browser');
const indexHtml = 'index.html';

app.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*.*', express.static(distFolder, { maxAge: '1y' }));

app.get('*', (req, res) => {
  res.render(indexHtml, { req });
});

app.listen(4000, () => console.log(`SSR running on http://localhost:4000`));
```

🟢 **Benefit:** Faster first load (since HTML is pre-rendered on the server), better SEO, and smoother hydration on the client.

---

### ✅ **Summary of Angular 17 Key Additions**

| Feature | Description | Example Type |
| --- | --- | --- |
| Standalone Components | No `NgModule` needed | Component |
| Functional Guards | Guard as a simple function | Routing |
| Functional Interceptors | Add interceptors using functions | HTTP |
| Modern Template Syntax | `@if`, `@for`, `@switch` | Template |
| SSR + Hydration | Built-in Universal support | Server |

---

### **Question 2: What is defer loading in Angular 17?**

**Answer:**  
Defer loading allows Angular to **load components only when needed** (like when you scroll to them).  
This improves performance.  
*Example:* A large image or chart loads only after it appears on screen.

---

## 🧩 **Question 3: What are the types of pipes in Angular?**

### ✅ **Answer:**

There are **two types of pipes** in Angular:

---

### **1\. Pure Pipes**

-   These **run only when the input value changes**.
    
-   Angular automatically marks pipes as **pure: true** by default.
    
-   They are **fast** and good for **simple, static transformations** (like formatting text or numbers).
    

#### 🧠 Example: **Pure Pipe (Default)**

This pipe **capitalizes** the first letter of a string.

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize' // default is pure: true
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
```

#### 🧩 Usage in Template:

```html
<p>{{ 'angular' | capitalize }}</p>
```

✅ Output:

```nginx
Angular
```

🟢 **Note:** It will only re-run when `'angular'` value changes.

---

### **2\. Impure Pipes**

-   These **run on every change detection cycle**, even if the input didn’t change.
    
-   They are used when data changes frequently (like arrays, objects, or lists).
    
-   Impure pipes can affect performance, so use them carefully.
    

#### 🧠 Example: **Impure Pipe (with pure: false)**

This pipe filters an array every time the view updates — even if the array reference doesn’t change.

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterActive',
  pure: false // makes it impure
})
export class FilterActivePipe implements PipeTransform {
  transform(users: any[]): any[] {
    return users.filter(user => user.active);
  }
}
```

#### 🧩 Usage in Template:

```html
<ul>
  <li *ngFor="let user of users | filterActive">{{ user.name }}</li>
</ul>
```

✅ Example Data:

```ts
users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
];
```

✅ Output:

```nginx
Alice
Charlie
```

🟡 **Note:**  
If you toggle any user’s active state in the component, the impure pipe will re-run on **every change detection** — even if you didn’t reassign the array.

---

### 🧩 **Summary Table**

| Pipe Type | Trigger | Performance | Example Use |
| --- | --- | --- | --- |
| **Pure** | When input value changes | Fast ⚡ | Capitalizing text, formatting currency |
| **Impure** | Every change detection | Slow 🐢 | Filtering or transforming dynamic arrays |


---

## 🧩 **How Angular Decides Between Pure and Impure Pipes**

### ✅ **1\. By Default — All Pipes Are Pure**

When you create a pipe in Angular using the `@Pipe()` decorator, **it is pure by default**.  
That means you **don’t need to do anything extra** — Angular automatically treats it as a **pure pipe**.

```ts
@Pipe({
  name: 'myPipe'   // <-- pure: true by default
})
export class MyPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
```

So the above pipe is **pure** automatically because we didn’t set `pure: false`.

---

### ⚙️ **2\. How to Make a Pipe Impure**

If you want your pipe to run on **every change detection**, even when the input value hasn’t changed,  
then you explicitly mark it as **impure** by setting `pure: false`.

```ts
@Pipe({
  name: 'myImpurePipe',
  pure: false   // <-- this makes it an impure pipe
})
export class MyImpurePipe implements PipeTransform {
  transform(items: any[]): any[] {
    return items.filter(item => item.active);
  }
}
```

This pipe will now execute every time Angular checks the view —  
even if the input array itself hasn’t changed (only an item’s internal property changed).

---

### 🔍 **3\. How to Identify If a Pipe Is Pure or Impure**

| **Clue** | **Pure Pipe** | **Impure Pipe** |
| --- | --- | --- |
| `pure` property in `@Pipe` decorator | Not specified (default = true) | `pure: false` |
| Execution frequency | Runs **only when input changes** | Runs **on every change detection** |
| Performance | **Fast** – fewer checks | **Slower** – frequent re-runs |
| Typical use cases | Formatting, transforming strings or numbers | Filtering or sorting changing arrays/objects |
| Example | \`{{ price | currency }}\` |

---

### 🧠 **4\. Real-Life Example for Understanding**

#### Suppose you have this array:

```ts
users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false }
];
```

#### You display:

```html
<li *ngFor="let user of users | filterActive">{{ user.name }}</li>
```

If you **toggle `user.active`** (without creating a new array):

```ts
this.users[1].active = true;
```

➡️ **Pure pipe:** Won’t detect the change because the **array reference** is still the same.  
➡️ **Impure pipe:** Will detect it, because it re-runs every change detection cycle.

---

### ⚡ **In Short:**

| Property | Pure Pipe | Impure Pipe |
| --- | --- | --- |
| Default? | ✅ Yes | ❌ No |
| How to define? | Just create normally | Add `pure: false` |
| When it runs | When input changes | On every view update |
| Example | `date`, `currency`, `uppercase` | Custom `filter`, `sort`, `search` pipes |

---

### ✅ **Quick Tip to Remember**

> 🧩 *If your pipe changes output only when the input variable changes → Pure Pipe.*  
> 🔄 *If your pipe depends on changing inner data (like objects/arrays) → Impure Pipe.*

---

### **Question 4: Can we use multiple router outlets in Angular?**

**Answer:**  
✅ Yes! You can have **multiple named outlets**.

```html
<router-outlet name="header"></router-outlet>
<router-outlet name="content"></router-outlet>
```

Routing example:

```ts
{ path: 'home', component: HomeComponent, outlet: 'content' }
```


---

### ✅ **Short Answer (for quick recall in interview):**

> Yes! Angular allows **multiple named `<router-outlet>`s** in a single page layout.  
> Each outlet can render a **different component** based on its **outlet name** in the route configuration.

---

### 💬 **How to Explain in an Interview (Conceptual Understanding):**

In Angular, routing decides **which component to display** when a user navigates to a certain path.  
By default, we use a single `<router-outlet>` in our main app component — but in **complex layouts**, like dashboards or admin panels, we often want to **display multiple views at the same time** (e.g., header, sidebar, content area).

That’s where **multiple router outlets** — also called **named outlets** — come in.

They let you:

-   Render **different components simultaneously** in different areas of the screen.
    
-   Control each outlet **independently** using named routes.
    

---

### 🧠 **Example to Explain to Interviewer**

#### **HTML Template (App Component)**

```html
<header>
  <router-outlet name="header"></router-outlet>
</header>

<main>
  <router-outlet name="content"></router-outlet>
</main>

<footer>
  <router-outlet name="footer"></router-outlet>
</footer>
```

Here, you have **three named outlets**:

-   `header`
    
-   `content`
    
-   `footer`
    

---

#### **Routing Configuration**

```ts
import { Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent, outlet: 'header' },
  { path: 'home', component: HomeComponent, outlet: 'content' },
  { path: 'footer', component: FooterComponent, outlet: 'footer' }
];
```

---

#### **Navigation Example**

If you want to load both **header** and **home** components at once, you can navigate using **multiple outlets in the URL**:

```bash
http://localhost:4200/(header:header//content:home//footer:footer)
```

Each outlet name is separated using `//`.

---

### 🟢 **Interview Tip: How to Explain It Simply**

You could say:

> “Yes, Angular supports multiple named router outlets.  
> It’s useful when you want to show different sections of the page independently — like keeping a header fixed while swapping content in the main area.  
> You define each outlet using `<router-outlet name="...">` and specify which outlet to target in your route configuration using the `outlet` property.”

---

### ⚡ **Common Interview Follow-ups and Answers**

**Q1:** *Can you have one unnamed outlet and others named?*  
✅ Yes — the unnamed one is the **primary outlet** (default route). Named ones are **secondary outlets**.

**Q2:** *When would you use multiple outlets?*  
✅ For layouts like dashboards, master-detail views, or split screens — where you want to load different components side by side.

**Q3:** *Can we lazy load components in named outlets?*  
✅ Yes, you can — using `loadChildren` or `loadComponent` just like normal routes.

---

### ✅ **Quick Recap Table**

| Feature | Description | Example |
| --- | --- | --- |
| **Primary Outlet** | Default unnamed outlet | `<router-outlet></router-outlet>` |
| **Named Outlet** | Custom outlet with a name | `<router-outlet name="sidebar"></router-outlet>` |
| **Use Case** | Multi-section layout | Header + Content + Footer |
| **Route Example** | `{ path: 'home', component: HomeComponent, outlet: 'content' }` |  |
| **URL Example** | `/ (header:header // content:home)` |  |

---


## 🧩 **Question: Why do we use `<router-outlet>` in Angular?**

---

### ✅ **Simple Answer (for interview):**

> We use `<router-outlet>` as a **placeholder** where Angular dynamically loads and displays components based on the current **route (URL path)**.

In other words — it’s the **insertion point** in your HTML where the router decides **which component to show**.

---

### **Question 5: What’s the difference between `navigate()` and `navigateByUrl()`?**

**Answer:**

-   **`navigate()`** → can use **relative paths**.
    
    ```ts
    this.router.navigate(['../about']);
    ```
    
-   **`navigateByUrl()`** → needs a **full (absolute) path**.
    
    ```ts
    this.router.navigateByUrl('/home');
    ```
    

---

### ✅ **Short Answer (for quick recall in interview):**

> 🔹 `navigate()` is used for **relative navigation** (based on current route).  
> 🔹 `navigateByUrl()` is used for **absolute navigation** (full path from the root).

Both are methods of Angular’s **Router** service and are used to **change the route programmatically**.

---

### **Question 6: What’s the difference between relative and absolute paths?**

**Answer:**

-   **Relative path** → depends on the current route.  
    `/user` + `settings` → `/user/settings`
    
-   **Absolute path** → starts from root `/`.  
    `/settings` → always goes to `/settings`.
    

---

### **Question 7: What’s the difference between `ViewChild` and `ViewChildren`?**

**Answer:**

-   **`ViewChild`** → gets the **first matching** element/component.
    
-   **`ViewChildren`** → gets **all matching elements** as a list.
    

```ts
@ViewChild('btn') button!: ElementRef;
@ViewChildren('item') items!: QueryList<ElementRef>;
```

They’re accessible in `ngAfterViewInit()`.

---

### **Question 8: What’s the difference between a Promise and an Observable?**

**Answer:**

-   **Promise** → one-time async result.
    
-   **Observable** → multiple values over time (like a live stream).  
    *Example:*
    
-   Promise → one API response.
    
-   Observable → continuous chat messages.
    

---

### ✅ **Short Answer (for quick recall):**

> -   **Promise**: Handles **a single asynchronous value** (once resolved or rejected).
>     
> -   **Observable**: Can emit **multiple values over time** (streams) and is **lazy**, meaning it only starts when subscribed.
>     

---

### 🧠 **Explanation for Interview:**

1.  **Promise**
    
    -   Represents **a single future value**.
        
    -   Once it resolves or rejects, it’s done — no more updates.
        
    -   **Eager**: starts immediately when created.
        
    -   Commonly used for **one-time API calls**.
        
2.  **Observable**
    
    -   Represents a **stream of values over time**.
        
    -   Can emit **0, 1, or many values** asynchronously.
        
    -   **Lazy**: nothing happens until you `subscribe()`.
        
    -   Supports operators (`map`, `filter`, `switchMap`) for **transforming streams**.
        
    -   Can be **canceled/unsubscribed** to prevent memory leaks.
        

---

### 🧩 **Visual Analogy (Interview-Friendly)**

| Concept | Analogy |
| --- | --- |
| Promise | A **parcel delivery**: you get **one package**, then done. |
| Observable | A **live TV channel**: streams **multiple events** over time; you can stop watching anytime. |

---

### 🔹 **Example in Angular**

#### **Promise Example: Single API Call**

```ts
// Simulate API call
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log('Promise Result:', data))
  .catch(err => console.error(err));
```

-   Runs once, gets **one response**, then done.
    

---

#### **Observable Example: Continuous Stream**

```ts
import { interval } from 'rxjs';

const numbers$ = interval(1000); // emits 0,1,2,3,... every second

const subscription = numbers$.subscribe(num => console.log('Observable Value:', num));

// Stop listening after 5 seconds
setTimeout(() => subscription.unsubscribe(), 5000);
```

-   Emits **multiple values over time**.
    
-   Can unsubscribe anytime to stop listening.
    

---

### ⚡ **Angular Specific Example: HTTP Calls**

-   Angular HTTP client returns **Observables**, not Promises.
    

```ts
this.http.get('https://api.example.com/users').subscribe(
  data => console.log(data),
  error => console.error(error)
);
```

-   Even for **single API calls**, Angular uses Observables because you can apply operators (`map`, `catchError`, etc.) easily.
    

---

### ⚖️ **Comparison Table (Interview-Friendly)**

| Feature | Promise | Observable |
| --- | --- | --- |
| Values | One-time | Multiple over time |
| Lazy | ❌ (runs immediately) | ✅ (runs on subscribe) |
| Cancelable | ❌ | ✅ (unsubscribe) |
| Operators | Limited | Powerful (`map`, `filter`, `switchMap`) |
| Common Use | One API call | Event streams, WebSocket, interval timers |

---

### 💬 **Sample Interview Answer**

> “A Promise gives a **single async result** and runs immediately, while an Observable can **emit multiple values over time** and is lazy — it only starts when subscribed.  
> In Angular, the HTTP client returns Observables because it’s more powerful: we can transform data, handle errors, and unsubscribe when needed.”


---

### **Question 9: What’s the difference between `of()` and `from()` in RxJS?**

**Answer:**

-   `of([1,2,3])` → emits `[1,2,3]` once.
    
-   `from([1,2,3])` → emits `1`, then `2`, then `3`.
    

---

### ✅ **Short Answer (for Interview)**

> -   **`of()`**: Emits the **entire argument as a single value**.
>     
> -   **`from()`**: Converts an **iterable, Promise, or Observable-like object** into a stream, emitting **each element separately**.
>     

---

### 🧠 **Detailed Explanation**

1.  **`of()`**
    
    -   Takes **any arguments** (array, number, object, string) and emits it **as one single value**.
        
    -   Useful when you want to create an **observable from a constant or literal value**.
        

#### Example:

```ts
import { of } from 'rxjs';

const obs1$ = of([1, 2, 3]);

obs1$.subscribe(val => console.log('of() emits:', val));
```

**Output:**

```scss
of() emits: [1, 2, 3]
```

✅ Emits **the entire array once**, not each element individually.

---

2.  **`from()`**
    
    -   Converts an **iterable (array, string), Promise, or Observable-like object** into an Observable.
        
    -   Emits **each item one by one**.
        
    -   Useful when you want to process **each element individually** in a stream.
        

#### Example with Array:

```ts
import { from } from 'rxjs';

const obs2$ = from([1, 2, 3]);

obs2$.subscribe(val => console.log('from() emits:', val));
```

**Output:**

```scss
from() emits: 1
from() emits: 2
from() emits: 3
```

#### Example with Promise:

```ts
const promise = Promise.resolve('Hello RxJS!');
from(promise).subscribe(val => console.log('from() promise emits:', val));
```

**Output:**

```scss
from() promise emits: Hello RxJS!
```

-   Here, `from()` converts the **Promise** into an Observable.
    

---

### ⚡ **Key Differences Table**

| Feature | `of()` | `from()` |
| --- | --- | --- |
| Input | Anything (single value, array, object) | Iterable (array, string), Promise, Observable-like |
| Emits | Single value | Multiple values (each element individually) |
| Typical Use | Wrap constants, literals | Convert arrays, promises, iterables into Observables |
| Example | `of([1,2,3])` → `[1,2,3]` | `from([1,2,3])` → `1,2,3` |

---

### 💡 **Real-world Use Case**

-   **`of()`**:  
    Suppose you want to **emit a default value** if an API fails:
    
    ```ts
    of({ id: 0, name: 'Default User' });
    ```
    
    -   Useful for **mock data** or **default fallback**.
        
-   **`from()`**:  
    Suppose you have a **list of items** and want to **process each item one by one asynchronously**:
    
    ```ts
    from(['Alice', 'Bob', 'Charlie']).subscribe(name => console.log('Processing:', name));
    ```
    
    -   Useful for **iterating arrays, converting Promises to streams**, or working with **async data** in RxJS.
        

---

### 💬 **How to Answer in an Interview**

> “`of()` emits the entire argument as a single value, while `from()` takes an iterable, Promise, or Observable-like object and emits each item one by one.  
> Use `of()` when you want to emit a **single value or mock data**, and `from()` when you want to **process a collection or Promise as a stream**.”

---

### **Question 10: What is `tsconfig.json` used for?**

**Answer:**  
It tells TypeScript **how to compile the project** — which files to include, what target (ES5, ES6), and how strict typing should be.  
*Example:*

```json
"compilerOptions": { "strict": true }
```

---

### **Question 11: What is `angular.json` and what happens during `ng build` or `ng serve`?**

**Answer:**  
`angular.json` defines **project settings** (build paths, styles, assets, environments).  
When you run:

-   `ng build` → compiles TS → JS and bundles files.
    
-   `ng serve` → builds and serves locally with live reload.
    

---

### ✅ **Short Answer (for quick recall)**

> -   **angular.json**: Configuration file for an Angular project. Defines **project structure, build options, assets, styles, environments, and scripts**.
>     
> -   **ng build**: Compiles TypeScript → JavaScript, bundles files, and prepares the app for production or development.
>     
> -   **ng serve**: Builds the project **in memory**, serves it locally with **live reload** for development.
>     

---

### 🧠 **Detailed Explanation (Interview-Ready)**

#### 1️⃣ **What is `angular.json`?**

-   It’s the **main configuration file** for Angular CLI projects.
    
-   Located at the **root of your project**.
    
-   It tells Angular **how to build, serve, test, and deploy your project**.
    

Key sections in `angular.json`:

| Section | Description |
| --- | --- |
| `projects` | Lists all projects (app, library) in the workspace. |
| `architect/build` | Configurations for building (output path, main file, tsconfig, assets, styles, scripts). |
| `architect/serve` | Configurations for serving locally (`ng serve`). |
| `architect/test` | Settings for running unit tests. |
| `architect/e2e` | Settings for end-to-end tests. |
| `defaultProject` | Specifies which project CLI commands apply to by default. |

Example snippet:

```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "assets": ["src/assets"],
            "styles": ["src/styles.css"]
          }
        },
        "serve": {
          "options": {
            "browserTarget": "my-app:build"
          }
        }
      }
    }
  }
}
```

---

#### 2️⃣ **What happens during `ng build`?**

When you run:

```bash
ng build
```

1.  **TypeScript Compilation**
    
    -   Angular CLI uses `tsconfig.json` and Angular compiler (Ivy) to convert `.ts` files → `.js`.
        
2.  **Template & Style Compilation**
    
    -   Converts Angular templates (`.html`) and styles (`.css`/`.scss`) into **JavaScript modules**.
        
3.  **Bundling**
    
    -   Bundles all JS, CSS, and assets into a folder (`dist/`) for deployment.
        
4.  **Environment Configuration**
    
    -   Replaces `environment.ts` with `environment.prod.ts` if `--prod` flag is used.
        
5.  **Optimization (Production Build)**
    
    -   Minifies JS/CSS, removes unused code, tree-shakes modules to reduce size.
        

---

#### 3️⃣ **What happens during `ng serve`?**

When you run:

```bash
ng serve
```

-   Angular builds the project **in memory** — it does **not write to disk** like `ng build`.
    
-   Starts a **development server** (default: `http://localhost:4200`).
    
-   Supports **live reload**: any change in your source code triggers a rebuild and refreshes the browser automatically.
    
-   Uses `angular.json` to figure out:
    
    -   Which entry file (`main.ts`) to run.
        
    -   Where assets, styles, and scripts are located.
        
    -   Which environment file to use.
        

---

### 🔹 **Visual Flow (Interview-Friendly)**

**ng build**:

```css
src/**/*.ts, html, css → TypeScript + Angular Compiler → JS Bundles → dist/ folder → ready for deployment
```

**ng serve**:

```css
src/**/*.ts, html, css → Compiler → Memory Bundles → Dev Server → Browser (live reload)
```

---

### ⚡ **Tips for Interview Answer**

-   Mention **angular.json** as the “brain of Angular CLI” — it controls **build, serve, assets, environments**.
    
-   Explain **difference between ng build and ng serve**:
    
    -   `ng build` → production-ready bundles on disk.
        
    -   `ng serve` → dev server with live reload, bundles in memory.
        
-   Optionally mention **environment replacement** (`environment.ts` → `environment.prod.ts`).
    

---

### 💬 **Sample Interview Answer**

> “`angular.json` is the main configuration file for an Angular project. It defines how the project should be built, served, tested, and deployed — including build paths, assets, styles, scripts, and environment files.
> 
> When we run `ng build`, Angular compiles TypeScript into JavaScript, bundles all files, replaces environment configurations, and writes them to the `dist/` folder for deployment.
> 
> When we run `ng serve`, Angular builds the project in memory, starts a development server on localhost, and provides live reload for any code changes. It uses the same configurations from `angular.json` but doesn’t write files to disk.”

---

### **Question 12: How do you build Angular for different environments (dev/prod)?**

**Answer:**  
Use different files:

-   `environment.ts` → development
    
-   `environment.prod.ts` → production  
    Build using:
    

```bash
ng build --configuration=production
```

---

### **Question 13: How can you inject a service without using the constructor?**

**Answer:**  
Use the new `inject()` function.

```ts
import { inject } from '@angular/core';
const userService = inject(UserService);
```

No need for `constructor(private userService: UserService)`.

---

### **Question 14: What are HTTP interceptors and how do you add a token?**

**Answer:**  
Interceptors run **before every HTTP call** to modify requests (e.g., add tokens).

```ts
req = req.clone({
  setHeaders: { Authorization: `Bearer ${token}` }
});
return next.handle(req);
```

You can skip URLs (like login) by checking `req.url`.

---

### **Question 15: What does `switchMap` do in RxJS?**

**Answer:**  
`switchMap` switches to a **new observable** and cancels the previous one if new data comes in.  
*Example:* For a search box, each new keystroke cancels the previous API request.

---

### ✅ **Short Answer**

> `switchMap` takes the value from the source observable, maps it to a new observable, and **cancels the previous observable** if a new value comes in.  
> Very useful for avoiding outdated results in **API calls**, like search boxes.

---

### 🧠 **Interview Explanation**

1.  **Problem without switchMap:**
    
    -   User types "A", API request starts.
        
    -   Then types "AB" quickly, a **new API request** starts.
        
    -   The first request might complete **after the second**, causing **outdated results**.
        
2.  **Solution with switchMap:**
    
    -   Automatically cancels the previous request when a new one comes in.
        
    -   Ensures the UI only shows results for the **latest input**.
        

---

### 🔹 **Angular Example: Search Box with HTTP Request**

```ts
// search.component.ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `
    <input type="text" [formControl]="searchInput" placeholder="Search users..." />
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `
})
export class SearchComponent {
  searchInput = new FormControl('');
  users: any[] = [];

  constructor(private http: HttpClient) {
    this.searchInput.valueChanges.pipe(
      debounceTime(300),               // Wait 300ms after typing stops
      distinctUntilChanged(),          // Only emit if value changed
      switchMap(query => this.searchUsers(query)) // Cancel previous API call if new value comes
    ).subscribe(results => {
      this.users = results;
    });
  }

  searchUsers(query: string) {
    if (!query) return []; // Return empty if input is blank
    return this.http.get<any[]>(`https://api.example.com/users?search=${query}`);
  }
}
```

---

### 🔹 **Key Points for Interview**

-   **`debounceTime(300)`** → reduces API calls by waiting after typing stops.
    
-   **`distinctUntilChanged()`** → avoids duplicate API calls for the same value.
    
-   **`switchMap()`** → cancels the previous HTTP request automatically, only emits latest results.
    

---

### 🔹 **Simplified Analogy**

> Imagine typing in Google Search. Each letter triggers a new search, but the app only shows results for the **latest query**, not old ones — that’s `switchMap` in action.

---

### **Question 16: What does the `tap()` operator do?**

**Answer:**  
`tap()` performs **side effects** (like logging or debugging) without changing data.

```ts
getData().pipe(tap(val => console.log(val)));
```

---

### ✅ **Short Answer**

> `tap()` allows you to **peek at the data passing through an Observable** and perform **side effects** (like logging, debugging, or updating a variable) **without modifying the data itself**.

---

### 🧠 **Detailed Explanation**

1.  **Purpose**:
    
    -   Used for **debugging or executing side effects** in an Observable chain.
        
    -   Does **not transform or alter** the data — the next operator receives the original value.
        
2.  **Common Use Cases**:
    
    -   Logging values for debugging.
        
    -   Triggering some side action (e.g., setting a loading flag).
        
    -   Calling a function without changing the stream’s output.
        

---

### 🔹 **Basic Example**

```ts
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

of(1, 2, 3).pipe(
  tap(val => console.log('Before map:', val)),  // side effect
  map(val => val * 2),
  tap(val => console.log('After map:', val))    // side effect
).subscribe(final => console.log('Final value:', final));
```

**Output:**

```yaml
Before map: 1
After map: 2
Final value: 2
Before map: 2
After map: 4
Final value: 4
Before map: 3
After map: 6
Final value: 6
```

✅ Notice how `tap()` **does not change the values**; it just lets you observe them.

---

### 🔹 **Angular Example (HTTP Request)**

```ts
this.http.get('/api/users').pipe(
  tap(users => console.log('Fetched users:', users)),  // side effect for debugging
).subscribe(users => {
  this.users = users; // main logic
});
```

-   Here, `tap()` allows logging **without affecting** the HTTP response.
    

---

### ⚡ **Key Points for Interview**

-   **Side effect only** — doesn’t modify the stream.
    
-   Often used for **logging, debugging, or updating UI flags**.
    
-   Useful to **peek inside Observable chains** without breaking them.
    

---

### 💬 **Sample Interview Answer**

> “The `tap()` operator lets you perform **side effects** inside an Observable chain without changing the data itself.  
> For example, we can log the values for debugging or set a loading flag before the next operator processes the data. It’s very handy for monitoring or debugging Observables.”

---

### **Question 17: What does the `retry()` operator do?**

**Answer:**  
Retries a failed request automatically.

```ts
http.get(url).pipe(retry(3)); // tries 3 times
```


---

### ✅ **Short Answer**

> The `retry()` operator **automatically resubscribes** to a failed Observable and **tries again** a specified number of times before throwing an error.

---

### 🧠 **Detailed Explanation**

1.  **What It Does:**
    
    -   When an Observable (like an HTTP request) **fails with an error**, `retry(n)` will **retry it up to `n` times**.
        
    -   If it still fails after all retries, the error is passed down to the subscriber.
        
2.  **Why It’s Useful:**
    
    -   Helpful for **unstable network requests** or temporary API failures.
        
    -   Avoids manually re-calling APIs on transient errors.
        

---

### 🔹 **Basic Example**

```ts
import { of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

let attempt = 0;

const apiCall$ = of('data').pipe(
  // simulate failure on first two attempts
  tap(() => {
    attempt++;
    if (attempt < 3) throw new Error('Temporary error!');
  }),
  retry(2), // retry 2 times
  catchError(err => of('Fallback data'))
);

apiCall$.subscribe({
  next: val => console.log('Received:', val),
  error: err => console.error('Error:', err)
});
```

**Output:**

```kotlin
Received: data
```

✅ The observable retried twice before succeeding on the third attempt.

---

### 🔹 **Real-World Example (Angular HTTP Request)**

```ts
import { retry, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

this.http.get('https://api.example.com/users').pipe(
  retry(3),  // Retry failed HTTP call up to 3 times
  catchError(error => {
    console.error('API failed after 3 retries:', error);
    return of([]); // return empty list as fallback
  })
).subscribe(data => {
  this.users = data;
});
```

✅ **Explanation:**

-   If the request fails, it automatically retries 3 times.
    
-   If it still fails after 3 tries, it returns fallback data instead of breaking the app.
    

---

### ⚙️ **Key Points (For Interview)**

| Concept | Description |
| --- | --- |
| **Purpose** | Automatically retry a failed Observable. |
| **Syntax** | `retry(count)` |
| **Use Case** | Network/API retries, temporary backend failure. |
| **Works With** | Any Observable (e.g., HTTP calls, WebSocket streams). |
| **Stops retrying when** | Observable succeeds or max retry count is reached. |

---

### ⚡ **Bonus: retryWhen()**

If you need **custom retry logic** (like waiting a few seconds between retries), you can use `retryWhen()`:

```ts
import { retryWhen, delay, take } from 'rxjs/operators';

this.http.get('/api/data').pipe(
  retryWhen(errors =>
    errors.pipe(
      delay(2000), // wait 2s before retry
      take(3)      // only retry 3 times
    )
  )
);
```

---

### 💬 **Sample Interview Answer**

> “The `retry()` operator is used to **automatically retry a failed Observable** — like an HTTP request — for a given number of times.  
> For example, `retry(3)` will attempt the request three more times before failing. It’s especially useful for **unstable network connections** or **temporary server errors**.  
> If we need more control over delay or retry timing, we can use `retryWhen()`.”

---

### **Question 18: How do you unsubscribe from observables automatically?**

**Answer:**  
Two ways:

1.  Manually in `ngOnDestroy()` → `this.sub.unsubscribe()`
    
2.  Use `async` pipe in templates (auto-handles it):
    

```html
<div *ngIf="data$ | async as data">{{ data }}</div>
```

---

### **Question 19: What’s the disadvantage of using the `async` pipe?**

**Answer:**  
The template may appear blank while waiting for the data (not user-friendly for slow networks).

---

### **Question 20: What built-in pipes have you used? Can we make custom pipes?**

**Answer:**  
Built-ins: `date`, `currency`, `percent`, `async`.  
Yes, we can create custom pipes:

```ts
@Pipe({ name: 'greet' })
export class GreetPipe implements PipeTransform {
  transform(name: string) {
    return `Hello ${name}`;
  }
}
```

---

### **Question 21: What is a ReplaySubject?**

**Answer:**  
It **stores previous values** and replays them to new subscribers.

```ts
const subject = new ReplaySubject(2);
subject.next(1); subject.next(2); subject.next(3);
// new subscriber gets 2 and 3
```

---

### **Question 22: What are unit tests and why do we write them?**

**Answer:**  
Unit tests check **if each part of your code works correctly**.  
*Example:*  
If `add(2,3)` should return `5`, the test ensures it doesn’t break later.

---

### **Question 23: What is `forkJoin` used for?**

**Answer:**  
`forkJoin()` waits for **multiple API calls** to complete, then combines the results.

```ts
forkJoin([api1$, api2$])
  .subscribe(([r1, r2]) => console.log(r1, r2));
```

---

### **Question 24: What is content projection in Angular?**

**Answer:**  
It lets a **parent component inject HTML** into a child component.  
Parent:

```html
<app-card><p>This is inside the card!</p></app-card>
```

Child:

```html
<ng-content></ng-content>
```

---

### **Question 25: What are Signals and Defer Loading in Angular 17?**

**Answer:**

-   **Signals** – A new reactive way to store data. When the value changes, the UI updates automatically.
    
    ```ts
    count = signal(0);
    count.set(count() + 1);
    ```
    
-   **Defer Loading** – Loads components only when they’re needed (on scroll or user action) for faster performance.
    

---
