# Interview Questons

---

### 🧠 (03:55) Angular Versions and Features

**Q1.** What new features were introduced in Angular 16?  
✅ **Answer:**  
Main features of Angular 16:

-   **Standalone components:** Build apps without NgModules.
    
-   **Signals:** A new, faster way to manage reactive state (like React’s `useState`).
    
-   **Improved Server-Side Rendering (SSR):** Faster page loads with Angular Universal.
    
-   **ESBuild:** Replaces Webpack for quicker builds.
    

**Q2.** Which features belong to Angular 17?  
✅ **Answer:**  
Angular 17 added new control-flow syntax: `@if`, `@for`, `@switch`, replacing `*ngIf`, `*ngFor`, and `*ngSwitch`.

---

### 🧪 (04:40) Testing in Angular

**Q3.** Have you written test cases in Angular? What are test cases?  
✅ **Answer:**  
Test cases check whether your code works as expected.  
Angular uses **Karma** (test runner) and **Jasmine** (testing framework).  
Example:

```typescript
it('should add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
```

---

### 🔄 (06:54) Data Binding

**Q4.** How many ways can we bind data in Angular?  
✅ **Answer:**  
Four main ways:

1.  **Interpolation (`{{ }}`):** One-way from component to HTML → `{{ username }}`
    
2.  **Property Binding (`[ ]`):** One-way to element property → `<img [src]="imageUrl">`
    
3.  **Event Binding (`( )`):** From HTML to component → `<button (click)="sayHello()">Click</button>`
    
4.  **Two-way Binding (`[( )]`):** Both directions → `<input [(ngModel)]="name">`
    

---

### 🧩 (07:53) Components and Files

**Q5.** What is a component in Angular?  
✅ **Answer:**  
A **component** is a small, reusable part of an app with its own HTML, TypeScript, and CSS.  
Example: `home.component.ts`, `home.component.html`, `home.component.css`.

**Q6.** What is `main.ts` in Angular?  
✅ **Answer:**  
`main.ts` is the entry file that starts your Angular app. It loads `AppModule` and runs it in the browser.

---

### 🧰 (08:43) Forms

**Q7.** What’s the difference between template-driven and reactive forms?  
✅ **Answer:**

-   **Template-driven:** Logic mostly in HTML — best for small forms (like login).
    
    ```html
    <input [(ngModel)]="user.name">
    ```
    
-   **Reactive:** Logic mostly in TypeScript — best for large or dynamic forms.
    
    ```typescript
    this.form = new FormGroup({
      name: new FormControl('')
    });
    ```
    

**Q8.** What do we use inside reactive forms?  
✅ **Answer:**  
**FormGroup** and **FormControl** handle data and validation.  
Example:

```typescript
this.form = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
});
```

---

### 🔁 (10:11) Looping and \*ngFor

**Q9.** How do you loop through a list in Angular?  
✅ **Answer:**  
Use `*ngFor`.

```html
<li *ngFor="let item of items">{{ item }}</li>
```

**Q10.** How to color even/odd rows differently?  
✅ **Answer:**  
Use `even` and `odd` values available in `*ngFor`.

```html
<li *ngFor="let item of items; let even = even"
    [style.color]="even ? 'red' : 'green'">
  {{ item }}
</li>
```

**Q11.** What is `trackBy` in Angular?  
✅ **Answer:**  
Improves performance by tracking items with a unique ID.

```html
<li *ngFor="let user of users; trackBy: trackById">{{ user.name }}</li>

trackById(index, user) { return user.id; }
```

---

### ⚡ (12:03) Observables and Promises

**Q12.** What is an Observable in Angular?  
✅ **Answer:**  
An **Observable** handles asynchronous data (like API calls).  
You *subscribe* to get data when it’s ready.

```typescript
this.http.get('api/users').subscribe(data => console.log(data));
```

**Q13.** What’s the difference between Promise and Observable?  
✅ **Answer:**

| Feature | Promise | Observable |
| --- | --- | --- |
| Emits | Once | Many times |
| Cancel | No | Yes (`unsubscribe()`) |
| Runs only when subscribed | No | Yes |
| Example: Promise = one delivery; Observable = ongoing subscription. |  |  |

---

### 📡 (17:04) Subjects in RxJS

**Q14.** Difference between Subject and Observable?  
✅ **Answer:**

-   **Observable:** Sends data one way.
    
-   **Subject:** Sends and receives (acts like both).  
    Example:
    

```typescript
const subject = new Subject();
subject.subscribe(v => console.log(v));
subject.next('Hello'); // prints “Hello”
```

**Q15.** What’s the difference between Subject and BehaviorSubject?  
✅ **Answer:**

-   **BehaviorSubject:** Must have an initial value and remembers the last emitted value.  
    Example:
    

```typescript
const bs = new BehaviorSubject(0);
bs.next(1);
bs.subscribe(v => console.log(v)); // prints 1
```

---

### 🧮 (20:22) RxJS Operators

**Q16.** What are RxJS operators like `map` and `filter` used for?  
✅ **Answer:**  
They transform data in an observable stream.  
Example:

```typescript
this.http.get('api/users').pipe(
  map(users => users.filter(u => u.age > 30))
);
```

→ Only users older than 30 returned.

---

### 🧬 (32:57) Lifecycle and Constructors

**Q17.** Why does the constructor get called first in a component?  
✅ **Answer:**  
Because a component is a **class**, and in classes the **constructor** runs first to set things up.

```typescript
class Car {
  constructor() { console.log('Car created'); }
}
new Car(); // “Car created”
```

---

### 🧑‍💻 (35:54) TypeScript vs JavaScript

**Q18.** What’s the difference between TypeScript and JavaScript?  
✅ **Answer:**

-   TypeScript = JavaScript + type checking.
    
-   It’s compiled into plain JavaScript for browsers.
    

```typescript
let age: number = 25; // checked at compile time
```

TS helps catch errors early in big projects.

---

### ⚙️ (37:40) Commands and Environments

**Q19.** Difference between `ng serve` and `ng build`?  
✅ **Answer:**

-   **ng serve:** Runs app locally for development.
    
-   **ng build:** Creates production files in `/dist` for deployment.
    

**Q20.** What is `environment.ts` used for?  
✅ **Answer:**  
Stores environment-specific values (like API URLs).

```typescript
export const environment = { apiUrl: 'https://api.example.com' };
```

---

### 🪄 (41:05 – 43:39) Practice Guidance

**Q21.** How to prepare for Angular and JavaScript interviews?  
✅ **Answer:**

-   Practice small coding tasks (RxJS, *ngFor*, forms).
    
-   Review Angular + JS cheat sheets.
    
-   Use StackBlitz to code mini projects (e.g., fetch users and display them).
    

---