# Interview Questons

---

### **1️⃣ Is JavaScript synchronous or asynchronous? ⚙️**

**Answer:**  
JavaScript is **synchronous** (runs one line at a time), but we can make it act **asynchronous** (non-blocking) using **callbacks**, **promises**, or **async/await** to handle tasks like API calls.

**Example:**

```js
console.log("Start");
setTimeout(() => console.log("After 2 seconds"), 2000);
console.log("End");
```

🧠 Output → Start → End → After 2 seconds

---

### **2️⃣ What are callbacks, promises, and observables used for? 🔄**

**Answer:**  
They’re used to handle **asynchronous tasks** (like waiting for data).

-   🔁 **Callback:** Run later when something finishes.
    
-   💬 **Promise:** Handle results with `.then()` / `.catch()`.
    
-   📡 **Observable:** Used in Angular for data streams and live updates.
    

---

### **3️⃣ What are async and await in JavaScript? ⏳**

**Answer:**  
`async` and `await` make it easier to work with promises and make code look more readable.

-   `async` = marks a function that returns a promise.
    
-   `await` = pauses code until promise resolves.
    

**Example:**

```js
async function fetchData() {
  let data = await fetch('https://api.example.com');
  console.log("Data received");
}
```

---

### **4️⃣ What are the different types of Promises? 🤝**

**Answer:**

-   **Promise.all()** → waits for all promises to finish ✅
    
-   **Promise.race()** → returns the first one to finish 🏁
    
-   **Promise.allSettled()** → waits for all (success or fail) 🧾
    
-   **Promise.reject()** → creates a rejected promise ❌
    

---

### **5️⃣ What is the Set operator in JavaScript? 🧮**

**Answer:**  
A **Set** stores **unique** values — no duplicates allowed.

**Example:**

```js
let numbers = [1, 2, 2, 3];
let unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3]
```

---

### **6️⃣ What is the difference between map() and forEach()? 🗺️🔁**

**Answer:**

-   **map()** → creates and returns a new array 🎯
    
-   **forEach()** → runs on each item but returns nothing
    

**Example:**

```js
let nums = [1, 2, 3];
nums.map(x => x * 2);     // [2, 4, 6]
nums.forEach(x => x * 2); // Does nothing useful
```

---

### **7️⃣ What are JavaScript modules? 📦**

**Answer:**  
Modules help organize code by splitting it into separate files.  
You can **export** something from one file and **import** it into another.

**Example:**

```js
// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

---

### **8️⃣ What is the difference between for...of and for...in loops? 🔁🔑**

**Answer:**

-   **for...of** → loops through **values** (arrays).
    
-   **for...in** → loops through **keys** (objects).
    

**Example:**

```js
let arr = [10, 20, 30];
for (let val of arr) console.log(val); // 10, 20, 30

let obj = { a: 1, b: 2 };
for (let key in obj) console.log(key); // a, b
```

---

### **9️⃣ What is the difference between find() and filter()? 🔍**

**Answer:**

-   **find()** → returns the **first** match only.
    
-   **filter()** → returns **all** matches as a new array.
    

**Example:**

```js
let nums = [1, 2, 3, 4];
nums.find(n => n > 2);   // 3
nums.filter(n => n > 2); // [3, 4]
```

---

### **🔟 What is the reduce() method used for? ➕**

**Answer:**  
Used to **combine all items** into one value (like sum, average, etc.).

**Example:**

```js
let nums = [1, 2, 3];
let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 6
```

---

### **11️⃣ How to make a deep copy of an object? 🧬**

**Answer:**  
A **deep copy** creates a totally new copy of an object, including nested ones.

**Example:**

```js
let obj1 = { name: "Sam", address: { city: "NY" } };
let copy = structuredClone(obj1);
copy.address.city = "LA";
console.log(obj1.address.city); // NY (unchanged)
```

---

### **12️⃣ What is a shallow copy? 💧**

**Answer:**  
A **shallow copy** copies only the first level; nested objects still share references.

**Example:**

```js
let obj1 = { name: "Sam", address: { city: "NY" } };
let copy = { ...obj1 };
copy.address.city = "LA";
console.log(obj1.address.city); // LA (changed)
```

---

### **13️⃣ What is a CORS (Cross-Origin Resource Sharing) error? 🚫🌐**

**Answer:**  
It happens when your site tries to call another domain’s server without permission.  
Browsers block it for safety.

**Fix:**  
Ask the backend to allow your site’s domain, or (for testing only) disable browser security.

---

### **14️⃣ What are Smart and Dumb components in Angular? 🧠🪆**

**Answer:**

-   **Smart components** → handle logic, data fetching, and user actions.
    
-   **Dumb components** → only display data given to them, no logic inside.
    

**Example:**  
Parent (smart) fetches product → Child (dumb) just shows it on screen.

---

### **15️⃣ What are Angular directives? 🧱**

**Answer:**  
Directives change how HTML behaves or looks.  
Types:

-   🧩 **Structural** – change DOM layout (`*ngIf`, `*ngFor`).
    
-   🎨 **Attribute** – change style or behavior (`[ngClass]`, `[hidden]`).
    
-   ⚙️ **Component** – custom directive with its own HTML and logic.
    

**Example:**

```html
<p *ngIf="isLoggedIn">Welcome back!</p>
```

---