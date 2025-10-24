# Interview Questons

---

### **1\. What is JavaScript and why is it used?**

**Answer:** JavaScript is a programming language that makes web pages dynamic. It lets you interact with buttons, forms, and other elements without reloading the page.  
**Example:** Clicking a “like” button on a page updates the count instantly without refreshing.

---

### **2\. Why was Angular created?**

**Answer:** Angular is a framework to build **Single Page Applications (SPA)**. Unlike normal websites, SPAs update the content dynamically without reloading the whole page, improving speed and user experience.  
**Example:** Clicking tabs in Gmail changes the view without reloading the entire page.

---

### **3\. Difference between `async` and `defer` in scripts**

**Answer:**

-   **`async`**: Script loads in parallel and executes immediately when ready.
    
-   **`defer`**: Script loads in parallel but executes **after the HTML is fully parsed**.  
    **Example:** Use `defer` for scripts that manipulate DOM so that the HTML is fully loaded first.
    

---

---

## 🧩 The Basics

When you add a `<script>` tag in your HTML — like:

```html
<script src="app.js"></script>
```

the browser **stops reading the HTML**, downloads the script, and runs it right away.  
That can **slow down page loading** 😩 — especially if the script is big.

So we use `async` or `defer` to make it faster 🚀.

---

## 💡 Simple Explanation

| Attribute | What it does | When script runs |
| --- | --- | --- |
| `async` | Loads the script **while** the HTML is still loading, and **runs it as soon as it’s ready** | Right after the script finishes downloading (may interrupt HTML parsing) |
| `defer` | Loads the script **while** the HTML is still loading, but **waits** to run it | After the whole HTML is parsed |

---

## 🧠 Example — without async/defer

```html
<html>
  <head>
    <script src="bigScript.js"></script>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

🔸 The browser stops reading the HTML when it hits the `<script>`  
🔸 It downloads and runs `bigScript.js` first  
🔸 Then continues loading the rest of the page  
➡️ Page appears slower ⏳

---

## ⚡ Example — with `async`

```html
<script src="bigScript.js" async></script>
```

✅ The script downloads **in the background** while HTML keeps loading.  
🚨 But when it finishes downloading, it runs **immediately** — even if HTML isn’t fully ready.

So:

-   Faster page load 👍
    
-   But **script order is unpredictable** (they may run out of order) ⚠️
    
-   Not ideal if your script depends on the DOM or another script.
    

---

## 🕒 Example — with `defer`

```html
<script src="bigScript.js" defer></script>
```

✅ The script also downloads **in the background**  
✅ But it **waits to run until HTML is completely loaded and parsed**  
✅ Keeps the order of multiple scripts

➡️ Perfect for scripts that work with the DOM (like manipulating HTML elements).

---

## 🧩 Simple Analogy

Imagine you’re reading a book 📖 and your friend sends you a text message 📱:

-   **async:** You stop reading and check the message immediately (interrupts you)
    
-   **defer:** You finish reading the page first, then check the message (no interruption)
    

---

## 🧠 Quick Comparison Table

| Feature | `async` | `defer` |
| --- | --- | --- |
| Loads script while HTML loads | ✅ Yes | ✅ Yes |
| Executes as soon as it’s ready | ✅ Yes | ❌ No |
| Executes after HTML parsed | ❌ No | ✅ Yes |
| Keeps script order | ❌ No | ✅ Yes |
| Good for | Independent scripts (like analytics) | DOM-related scripts |

---

## ✅ Example (Best Practice)

```html
<!-- Good use of async: analytics (doesn’t depend on HTML) -->
<script src="analytics.js" async></script>

<!-- Good use of defer: main app (depends on HTML structure) -->
<script src="main.js" defer></script>
```

---

### 🎯 Final One-Line Answer (for interviews)

> `async` loads scripts in parallel and runs them as soon as they’re ready (can interrupt HTML),  
> while `defer` loads scripts in parallel but runs them only after the HTML is fully parsed — best for DOM-dependent scripts.

---


### **4\. What is hoisting in JavaScript?**

**Answer:** JavaScript moves **variable and function declarations** to the top before running the code.  
**Example:**

```javascript
console.log(x); // undefined
var x = 5;
```

Here, JS treats it like:

```javascript
var x;
console.log(x); // undefined
x = 5;
```

---

### **5\. What is an Immediately Invoked Function Expression (IIFE)?**

**Answer:** A function that runs **right after you create it**. Useful to keep variables private.  
**Example:**

```javascript
(function(){
   let secret = "hidden";
   console.log(secret); // hidden
})();
// console.log(secret); // Error, not accessible outside
```

---

### **6\. Difference between `call`, `apply`, and `bind`**

**Answer:**

-   **call** → invoke function with arguments one by one
    
-   **apply** → invoke function with arguments as an array
    
-   **bind** → create a new function with a specific `this` value, call it later
    

**Example:**

```javascript
function greet(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

const person = { name: "Alice" };

greet.call(person, "Paris", "France");  // Alice from Paris, France
greet.apply(person, ["Paris", "France"]);  // Same output
const bound = greet.bind(person, "Paris", "France");
bound();  // Same output
```

---

### **7\. Event Bubbling vs Capturing**

**Answer:**

-   **Bubbling:** Event starts from child element and goes up to parent
    
-   **Capturing:** Event starts from parent and goes down to child
    

**Example:** Clicking a button inside a div:

-   Bubbling → button → div → body
    
-   Capturing → body → div → button
    

---

---

## 🧩 What Are Event Bubbling and Capturing?

When you click something on a webpage — like a **button inside a div inside the body** —  
that **click event** doesn’t just happen on the button.

It actually **travels through layers of elements** in a specific order.

---

### 💬 Think of it like throwing a stone into a pond:

-   The **ripples** spread out from the center (child) → outward (parent).  
    That’s **bubbling** 🌊
    
-   Or imagine waves coming **inward from the edges** → center.  
    That’s **capturing** 🌪️
    

---

## 🔸 Event Bubbling (Default Behavior)

In **bubbling**, the event starts at the **innermost element** (the one you actually clicked)  
and **moves upward** through its ancestors — `button → div → body → document`.

### 👇 Example:

```html
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.body.addEventListener('click', () => console.log('Body clicked'));
  document.getElementById('parent').addEventListener('click', () => console.log('Div clicked'));
  document.getElementById('child').addEventListener('click', () => console.log('Button clicked'));
</script>
```

### 🧠 When you click the button:

```css
Button clicked
Div clicked
Body clicked
```

✅ That’s **bubbling** — the event “bubbles up” from the button to its parent elements.

---

## 🔹 Event Capturing (a.k.a. Trickling)

In **capturing**, the event goes in the **opposite direction** —  
from the **outermost element** to the **innermost** one.

So the order becomes: `body → div → button`.

You can activate capturing by passing a `true` value as the **third argument** in `addEventListener()`.

### 👇 Example:

```html
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.body.addEventListener('click', () => console.log('Body clicked'), true);
  document.getElementById('parent').addEventListener('click', () => console.log('Div clicked'), true);
  document.getElementById('child').addEventListener('click', () => console.log('Button clicked'), true);
</script>
```

### 🧠 When you click the button:

```css
Body clicked
Div clicked
Button clicked
```

✅ That’s **capturing** — the event “flows down” from parent to child.

---

## 🔄 Summary Table

| Feature | Bubbling | Capturing |
| --- | --- | --- |
| Direction | Child → Parent | Parent → Child |
| Default Mode | ✅ Yes | ❌ No (must be enabled) |
| Use Case | Most event handlers | Special advanced handling |
| Activation | Normal `addEventListener()` | `addEventListener(event, handler, true)` |

---

## 💡 Real-Life Analogy

Imagine a **manager (body)**, **team lead (div)**, and **employee (button)**.

-   **Bubbling:** The employee clicks a button → tells the team lead → who informs the manager.
    
-   **Capturing:** The manager gives an order → team lead passes it → employee receives it.
    

---

## 🧩 Bonus — Stop the Bubbling

Sometimes you only want the event to happen **once** and not bubble up.  
You can stop it with:

```js
event.stopPropagation();
```

Example:

```js
button.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Only button handled this event');
});
```

---

## 🎯 Final One-Line Answer (for interviews)

> **Bubbling:** Event starts from the child element and moves up to its parents.  
> **Capturing:** Event starts from the parent and moves down to the child.  
> By default, browsers use bubbling — capturing happens only if you enable it.

---

### **8\. Difference between `slice` and `splice` (Arrays)**

**Answer:**

-   **slice:** Returns a **copy** of a portion of an array, original array stays intact
    
-   **splice:** **Changes the original array** by adding/removing items
    

**Example:**

```javascript
let arr = [1,2,3,4];
arr.slice(1,3); // [2,3], arr still [1,2,3,4]
arr.splice(1,2); // [2,3], arr becomes [1,4]
```

---

### **9\. Arrow Functions vs Regular Functions**

**Answer:**

-   Arrow functions are **shorter** syntax
    
-   Arrow functions **don’t have their own `this`**
    
-   Regular functions **are hoisted**, arrow functions are not
    

**Example:**

```javascript
const obj = {
  name: "John",
  greet: () => console.log(this.name)
};
obj.greet(); // undefined because arrow takes 'this' from outside
```

---

### **10\. Angular: Difference between `ng serve` and `ng build`**

**Answer:**

-   **ng serve** → runs the app locally for development
    
-   **ng build** → prepares app for deployment by creating files to host
    

---


---

## 🧩 1️⃣ `ng serve` — Used for **Development**

### 🔹 What it does:

-   Compiles your Angular app **in memory** (not saved to disk)
    
-   Starts a **local development server**
    
-   Automatically reloads when you change code (via **Hot Module Replacement** or HMR)
    
-   Opens your app on a local URL (usually `http://localhost:4200`)
    

```bash
ng serve
```

or shorthand:

```bash
ng s
```

---

### 💡 In Simple Words:

`ng serve` = “Run my app locally so I can test it right away.”

You can change code → save → and instantly see updates in the browser — no need to rebuild manually.

---

### ⚙️ What Happens Internally:

-   Angular CLI uses **Webpack Dev Server**.
    
-   It **builds the app in memory** (temporary files, not in the `dist/` folder).
    
-   It **serves** those files directly to your browser.
    
-   Any code change automatically **triggers a rebuild and refresh**.
    

---

### 🧠 Example:

```bash
ng serve --port 4300 --open
```

This will:

-   Run on `http://localhost:4300`
    
-   Automatically open your browser
    

---

### ✅ Use Case:

-   While you’re **coding and debugging**
    
-   During **UI development and testing**
    

---

## 🧩 2️⃣ `ng build` — Used for **Deployment**

### 🔹 What it does:

-   Compiles your Angular app **into static HTML, CSS, and JavaScript files**
    
-   Stores them in the **`dist/`** folder
    
-   Optimizes and minifies files for better performance (especially in **production mode**)
    

```bash
ng build
```

---

### 💡 In Simple Words:

`ng build` = “Pack my app into optimized files so I can upload it to a real server.”

The output is ready to host anywhere — like **Firebase Hosting, Netlify, AWS S3, or Apache**.

---

### ⚙️ Example:

```bash
ng build --configuration production
```

or shorthand:

```bash
ng build --prod
```

This:

-   Minifies and compresses JS and CSS
    
-   Removes debugging info
    
-   Optimizes bundle size for speed
    

You’ll find your production-ready files in:

```bash
dist/your-project-name/
```

---

## 🧠 Key Differences Side-by-Side

| Feature | `ng serve` | `ng build` |
| --- | --- | --- |
| Purpose | Development server | Prepare app for deployment |
| Where it runs | Local environment | Creates static files for hosting |
| Output location | In-memory (not saved) | Saved in `dist/` folder |
| Optimization | Minimal | Full optimization (minified, compressed) |
| Live reload | ✅ Yes | ❌ No |
| Usage | During development | Before deployment |
| Example command | `ng serve --open` | `ng build --configuration production` |

---

## 💡 Real-Life Analogy

Imagine you’re a chef 🍳:

-   **`ng serve`** = cooking and tasting food in your kitchen — still adjusting the flavor.
    
-   **`ng build`** = packaging the finished meal into containers — ready to deliver to customers.
    

---

## 🎯 Final Answer (for interviews)

> `ng serve` compiles and runs your Angular application locally using a development server.  
> It builds the app in memory, supports live reloading, and is mainly for testing during development.
> 
> `ng build` compiles your app into static, optimized files inside the `dist/` folder, ready for deployment to a web server.  
> It performs minification, bundling, and other optimizations for production performance.

---

---

## 🧩 What is HMR (Hot Module Replacement)?

**HMR (Hot Module Replacement)** means that when you change your code —  
Angular updates **only the parts of your app that changed**,  
**without refreshing the whole page.**

So instead of a **full reload**, Angular just **swaps out the changed modules** on the fly.

---

## 💡 In Simple Words

> HMR = “Update my app instantly without losing data or reloading everything.”

---

### 🧠 Example Without HMR

Let’s say you’re typing in an input box:

```html
<input [(ngModel)]="username">
<p>Hello {{ username }}</p>
```

You type:

```nginx
John
```

Then you edit your code (like fixing a typo in HTML).  
Normally — Angular rebuilds the app and **reloads the entire page** 😩  
➡️ You lose whatever was in the input box (like “John”).

---

### ⚙️ Example With HMR

With **Hot Module Replacement enabled**, Angular only replaces the changed code.  
So when you edit a component:

-   The browser updates instantly ⚡
    
-   The page doesn’t fully reload
    
-   Your input data (“John”) stays there 😎
    

This makes the development experience **much faster and smoother**.

---

## 🧠 How It Works Under the Hood

When HMR is on:

1.  Angular runs a lightweight Webpack Dev Server.
    
2.  When you save a file, only that module (component, style, etc.) is recompiled.
    
3.  Webpack sends that update to the browser.
    
4.  The browser replaces just that module in memory — no full reload.
    

---

## 🔹 How to Enable HMR in Angular

### 1️⃣ Add HMR to your project:

```bash
ng add @angular-devkit/build-angular
```

### 2️⃣ Run the app with HMR:

```bash
ng serve --hmr
```

Now, HMR is active.  
You’ll see a message like:

```vbnet
NOTICE: Hot Module Replacement (HMR) is enabled.
```

---

## 🧩 Visual Analogy

Imagine your Angular app is a **car engine** 🚗:

-   Without HMR → every time you fix something, you restart the entire engine 🔁
    
-   With HMR → you swap out just the part you fixed — while the engine keeps running ⚙️
    

---

## ⚙️ Summary Table

| Feature | Without HMR | With HMR |
| --- | --- | --- |
| Page reload | Full reload | Partial update |
| Keeps app state (inputs, scroll, etc.) | ❌ No | ✅ Yes |
| Speed | Slower | ⚡ Faster |
| Experience | Breaks flow | Seamless editing |
| Default in Angular? | ❌ No | ✅ Can be enabled with `--hmr` |

---

## ✅ When to Use HMR

Use it while developing:

-   Large Angular apps
    
-   Dynamic UIs with forms
    
-   When you want fast feedback while coding
    

---

## 🎯 Final Interview Answer

> **HMR (Hot Module Replacement)** allows Angular to update only the modified modules in your app without doing a full browser reload.  
> It keeps the app state intact (like form data) and greatly speeds up development.  
> You can enable it with `ng serve --hmr`.

---

### **11\. What are Angular signals?**

**Answer:** Signals are **reactive variables** that help Angular update the UI automatically when data changes, without relying on full change detection.

**Example:**

```typescript
const count = signal(0);
count.set(1); // UI updates automatically if bound to count
```

---

### **12\. Difference between `ngIf` and `*ngFor` in Angular**

**Answer:**

-   `*ngIf` → Shows/hides elements based on condition
    
-   `*ngFor` → Loops through a list of items
    

**Example:**

```html
<div *ngIf="show">Hello</div>
<li *ngFor="let item of items">{{item}}</li>
```

---
