# Interview Questons

---

### 🟢 Angular & JavaScript Interview Q&A (Simplified)

**1️⃣ 👋 Personal background**  
*Question:* Can you introduce yourself and your experience?  
*Answer:* Share your career journey briefly: education, any jobs, projects, technologies you’ve worked on, and your experience with Angular, JavaScript, Node, or React.

---

**2️⃣ 📝 What is TypeScript?**  
*Answer:* TypeScript is like JavaScript but with extra “rules” for types. It helps catch mistakes before running your code.  
*Example:*

```ts
let name: string = "John"; // Can only store text
name = 123; // ❌ Error, not allowed
```

---

**3️⃣ 🖥 What is the DOM?**  
*Answer:* DOM (Document Object Model) is the structure of your webpage that JavaScript can read and change.  
*Example:*

```js
document.getElementById("myDiv").innerText = "Hello!"; // Changes text inside a div
```

---

**4️⃣ 💅 When is CSS applied to the DOM?**  
*Answer:* When a webpage loads, the browser reads HTML and CSS. CSS classes are applied to elements based on their selectors. The browser matches the class names in HTML to styles in CSS.

---

**5️⃣ 📜 What is ES6?**  
*Answer:* ES6 is a newer version of JavaScript with extra features like `let`, `const`, arrow functions, modules, and more.  
*Example:*

```js
const greet = (name) => `Hello, ${name}`;
```

---

**6️⃣ 📦 How do ES6 modules work?**  
*Answer:* Modules let you split code into different files and share functions or classes between them.  
*Example:*

```js
// file1.js
export function sayHi() { console.log("Hi"); }

// file2.js
import { sayHi } from './file1.js';
sayHi(); // Outputs: Hi
```

---

**7️⃣ 🔄 Spread operator — shallow or deep copy?**  
*Answer:* Spread operator `...` copies an object’s first layer only (shallow copy). Nested objects are still linked to the original.  
*Example:*

```js
let obj1 = {a:1, b:{c:2}};
let obj2 = {...obj1};
obj2.b.c = 5; 
console.log(obj1.b.c); // 5, because nested object is shared
```

---

**8️⃣ 🗑 How to remove duplicates from an array?**  
*Answer:* Use `Set` or `filter`.  
*Example:*

```js
let arr = [1,2,2,3];
let uniqueArr = [...new Set(arr)]; // [1,2,3]
```

---

**9️⃣ 🔢 Difference between `map` and `forEach`?**  
*Answer:*

-   `map` transforms each element and returns a new array.
    
-   `forEach` loops through elements but doesn’t return anything.  
    *Example:*
    

```js
let nums = [1,2,3];
let doubled = nums.map(x => x*2); // [2,4,6]
nums.forEach(x => console.log(x)); // 1 2 3
```

---

**🔟 🔁 Difference between `for…in` and `for…of`?**  
*Answer:*

-   `for…in` loops over **keys/indexes**.
    
-   `for…of` loops over **values**.  
    *Example:*
    

```js
let arr = ["a","b"];
for(let i in arr) console.log(i); // 0 1
for(let val of arr) console.log(val); // "a" "b"
```

---

**1️⃣1️⃣ ⏳ What is a Promise in JS?**  
*Answer:* A Promise waits for something to finish (like fetching data) before doing the next step.  
*Example:*

```js
fetch('url').then(response => console.log(response));
```

---

**1️⃣2️⃣ 🔐 Authentication vs Authorization?**  
*Answer:*

-   Authentication: Are you who you say you are? (Login check)
    
-   Authorization: Are you allowed to do this? (Access check)
    

---

**1️⃣3️⃣ 🚦 How to implement route authorization in Angular?**  
*Answer:* Use **guards** (`CanActivate`, `CanLoad`) and backend token checks. If unauthorized, redirect user.

---

**1️⃣4️⃣ 🏗 How does Angular app run in the DOM?**  
*Answer:*

1.  `index.html` loads → Angular bootstraps the app.
    
2.  Root module/component (`app-root`) loads.
    
3.  Eager modules and routes are loaded into the DOM.
    

---

**1️⃣5️⃣ 🛠 Difference between `ng build` and `ng serve`?**  
*Answer:*

-   `ng build` → creates production-ready files for deployment
    
-   `ng serve` → runs a local development server for testing
    

---

**1️⃣6️⃣ 🌐 What is a CORS error?**  
*Answer:* Happens when the frontend tries to access a backend on a **different domain** without proper permission.

---

**1️⃣7️⃣ ⚡ How to improve Angular app performance?**  
*Answer:*

-   Use **lazy loading** (load modules only when needed)
    
-   Use **tree-shaking** (remove unused code)
    
-   Minimize DOM updates
    

---

**1️⃣8️⃣ 🔄 What is change detection in Angular?**  
*Answer:* Angular tracks data changes and updates the HTML automatically.

---

**1️⃣9️⃣ 🚀 OnPush vs default change detection**  
*Answer:*

-   Default: Angular checks all components for changes automatically
    
-   OnPush: Angular only checks component if **input data changes** or **event occurs** → faster for performance
    

---

**2️⃣0️⃣ 💡 Smart vs Dumb components**  
*Answer:*

-   Smart: Knows about business logic and fetches data
    
-   Dumb: Only displays data (presentational component)
    

---
