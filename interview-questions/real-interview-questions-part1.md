# Interview Questons


---

## 🧩 1. What’s the difference between **Angular** and **React**?

**Answer:**

-   **Angular** is a full framework (it gives you everything: routing, forms, HTTP, etc.).
    
-   **React** is a library (you choose extra tools for routing, state, etc.).
    

**Example:**

-   Angular: You get a whole “meal” ready — rice, curry, spoon, plate.
    
-   React: You just get the rice; you decide which curry and plate to use.
    

---

## ⚙️ 2. How do components talk to each other in Angular?

**Answer:**  
There are 3 common ways:

1.  **Parent → Child:** use `@Input()`
    
2.  **Child → Parent:** use `@Output()` and `EventEmitter`
    
3.  **Unrelated components:** use a shared service with **RxJS Subject**
    

**Example:**  
Parent passing a message to Child:

```ts
// parent.html
<app-child [name]="userName"></app-child>

// child.ts
@Input() name: string;
```

Child sending data back to Parent:

```ts
// child.ts
@Output() sendData = new EventEmitter<string>();
sendToParent() {
  this.sendData.emit("Hello Parent!");
}
```



---
## 🧩 `@Input()` — What It Is

**`@Input()`** is a **decorator** (not a directive).

It’s used in **Angular components** to **receive data from a parent component**.

Think of it like **a way to pass values from parent → child** (like giving a gift 🎁 to your child component).


## 🧩 What is `@Output()`?

**`@Output()`** is a **decorator** (like `@Input()`),  
but it’s used for **sending data or events from a child component to its parent**.

👉 Think of it like **the child calling out to its parent** saying,

> “Hey! Something happened — here’s the data!”


---

## 🔄 3. What are **RxJS** and **Subjects** used for?

**Answer:**  
RxJS is a library that helps handle **asynchronous data** — like when you fetch data from an API, or listen to user actions over time.  
A **Subject** is like a messenger that can **send and receive** data between parts of your app.

**Example:**

```ts
// message.service.ts
message$ = new Subject<string>();

// component1.ts
this.messageService.message$.next("Hi from component 1");

// component2.ts
this.messageService.message$.subscribe(msg => console.log(msg));
```

---

## 🧠 4. How do you **unsubscribe** from Observables?

**Answer:**  
If you don’t unsubscribe, your app can keep running background tasks — wasting memory.  
You can unsubscribe by either:

-   calling `.unsubscribe()`, or
    
-   using the `takeUntil()` operator.
    

**Example:**

```ts
ngOnDestroy() {
  this.subscription.unsubscribe();
}
```

---

## 🧩 5. What are **standalone components** in Angular?

**Answer:**  
Before Angular 14, every component had to be declared inside a module (like `AppModule`).  
Now with **standalone components**, you can make components **without a module**.

**Example:**

```ts
@Component({
  standalone: true,
  selector: 'app-hello',
  template: `<h1>Hello!</h1>`
})
export class HelloComponent {}
```

This makes apps simpler and faster to load.

---

## 🧱 6. What are **directives** in Angular?

**Answer:**  
Directives are **instructions** in the HTML that tell Angular how to change the DOM.

-   **Attribute directives:** change look or behavior
    
    -   e.g. `ngClass`, `ngStyle`
        
-   **Structural directives:** add/remove HTML elements
    
    -   e.g. `*ngIf`, `*ngFor`
        

**Example:**

```html
<p *ngIf="isLoggedIn">Welcome back!</p>
<li *ngFor="let item of items">{{item}}</li>
```

---

## ⚡ 7. What is **Change Detection** and what does `OnPush` do?

**Answer:**  
Change detection means Angular checks if something on the screen needs updating.  
By default, Angular checks **everything** — even if data hasn’t changed.  
With `ChangeDetectionStrategy.OnPush`, Angular only checks when:

-   an input changes, or
    
-   an event (like click) happens.
    

**Example:**

```ts
@Component({
  selector: 'app-user',
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

This improves performance in big apps.

---

## 📜 8. What is `trackBy` in `*ngFor`?

**Answer:**  
`trackBy` helps Angular **identify items uniquely** in a list.  
Without it, if one item changes, Angular will re-render the whole list.  
With it, only the changed item updates — faster rendering.

**Example:**

```html
<li *ngFor="let user of users; trackBy: trackById">
  {{ user.name }}
</li>

trackById(index, user) {
  return user.id;
}
```

---

## 🧩 What is `trackBy` in \*ngFor?

When you use `*ngFor` to loop through a list (like users, products, etc.),  
Angular has to **keep track of which item is which**.

By default, Angular assumes:

> “Each item is new if the array changes — so I’ll recreate the whole list.”

That’s sometimes slow ⚠️ — especially when you have big lists.

✅ `trackBy` tells Angular **how to uniquely identify each item**,  
so it only updates what really changed — not the whole list.

---

## 💡 In Simple Words

👉 `trackBy` = “Hey Angular, use this property (like `id`) to know which item is which.”

---

## 🧠 Example without trackBy

```typescript
users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Mary' },
  { id: 3, name: 'Alex' }
];
```

```html
<li *ngFor="let user of users">
  {{ user.name }}
</li>
```

Now imagine you change **just one user’s name** or **add a new user**.  
Angular will **re-render the entire list of `<li>` elements** — even if only one changed.  
That’s wasteful and can cause flickering.

---

## 💪 Example with `trackBy`

```html
<li *ngFor="let user of users; trackBy: trackById">
  {{ user.name }}
</li>
```

```typescript
trackById(index: number, user: any): number {
  return user.id; // 🔑 each user is identified by id
}
```

Now Angular knows:

> “If user.id = 1, that’s John. Don’t re-create his `<li>` unless his data changes.”

✅ Result:

-   Only the changed or added items get re-rendered.
    
-   The rest stay as they are.
    
-   The page becomes faster and smoother.
    

---

## 🪄 Real-Life Analogy

Think of it like **name tags at a conference**:

-   Without `trackBy`: every time you add someone new, you throw away all name tags and print them again 😅
    
-   With `trackBy`: you just print a new tag for the new person and keep the old ones 🎟️
    

---

## ✅ When to Use `trackBy`

Use `trackBy` when:

-   Your list is large (e.g., 100+ items)
    
-   You update, add, or remove items frequently
    
-   Each item has a unique identifier (like `id`)
    

---

## ⚙️ Summary Table

| Feature | Without `trackBy` | With `trackBy` |
| --- | --- | --- |
| Re-render | Entire list | Only changed items |
| Performance | Slower | Faster |
| Identification | By index | By unique key (like `id`) |

---

### 🎯 Final One-Line Answer (for interviews)

> `trackBy` is used with `*ngFor` to tell Angular how to uniquely identify each item in a list, so only changed items are updated instead of re-rendering the whole list. It improves performance.

---

---

## 🧩 Short Answer:

**No — `trackBy` and `track` are not the same.**  
They do the **same job (tracking list items)**,  
but they belong to **different Angular syntaxes**.

---

## 🔸 1️⃣ `trackBy` — used with the old `*ngFor`

This is the **classic syntax** (still valid and widely used).

```html
<li *ngFor="let user of users; trackBy: trackById">
  {{ user.name }}
</li>
```

```typescript
trackById(index: number, user: any): number {
  return user.id;
}
```

✅ Used with `*ngFor`  
✅ Works in Angular 2 → 18+  
✅ Requires a **function reference** (like `trackById`)  
✅ Good for backward compatibility

---

## 🔹 2️⃣ `track` — used with the **new `@for` syntax**

Starting in **Angular 17**, we got a new, faster syntax for loops:  
👉 `@for` replaces `*ngFor`

It uses **`track`** instead of `trackBy`.

---

### 🧠 Example (new syntax):

```html
@for (user of users; track user.id) {
  <li>{{ user.name }}</li>
}
```

✅ Here, `track user.id` directly tells Angular:

> “Use the `user.id` as the unique identifier.”

You don’t need a separate function anymore.  
Cleaner, shorter, and faster 🚀.

---

## 🔍 Comparison Table

| Feature | `trackBy` | `track` |
| --- | --- | --- |
| Used with | `*ngFor` (old syntax) | `@for` (new syntax) |
| Introduced in | Angular 2 | Angular 17 |
| Tracking keyword | `trackBy` | `track` |
| Function required | ✅ Yes | ❌ No |
| Example | `trackBy: trackById` | `track user.id` |
| Recommended | ✅ Still works fine | ✅ Newer, preferred for future Angular versions |

---

## 🧩 In Simple Terms

| You’re writing this... | Means the same as... |
| --- | --- |
| `*ngFor="let item of list; trackBy: trackById"` | `@for (item of list; track item.id)` |

Both tell Angular **how to keep track of list items** so it updates only what changes.

---

### 💬 Summary Sentence

> `trackBy` is used with `*ngFor`, and `track` is used with the new `@for` loop.  
> They do the same thing — identify items uniquely to make rendering faster —  
> but `track` is the **newer, simpler** version.

---


---

## 🧮 9. What’s the difference between **Angular’s Ivy engine** and **React’s Virtual DOM**?

**Answer:**

-   **Angular Ivy:** Compiles your code into very small, optimized JavaScript and directly updates the real DOM.
    
-   **React Virtual DOM:** Creates a lightweight copy of the DOM, compares it (diffing), and updates only what’s changed.
    

**In simple terms:**  
Angular: “I’ll go straight to the real thing.”  
React: “I’ll compare my notes first, then make the smallest changes.”

---

## 🎯 10. Which version of Angular should you learn or mention in an interview?

**Answer:**  
Always learn and mention the **latest stable version** — currently Angular 14 or newer (if you’re using Angular 15+ at work, mention that).  
Employers like seeing that you keep up with the framework’s updates.

---
