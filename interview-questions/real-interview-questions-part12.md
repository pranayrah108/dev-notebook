# Interview Questons

---

## 🧠 JavaScript Questions

### **1️⃣ What is synchronous and asynchronous execution?**

💡 **Answer:**

-   **Synchronous**: Code runs one line at a time — each line waits for the previous one.
    
-   **Asynchronous**: Some tasks (like fetching data) happen in the background so the rest of the code doesn’t wait.
    

🧩 **Example:**

```js
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
// Output: A, C, B
```

---

### **2️⃣ Why do we use `async` and `await`?**

💡 **Answer:**  
They help manage asynchronous code more easily.

-   `async` marks a function as asynchronous.
    
-   `await` pauses until a Promise (like a fetch) resolves.
    

🧩 **Example:**

```js
async function getData() {
  const res = await fetch("https://api.example.com");
  const data = await res.json();
  console.log(data);
}
```

---

### **3️⃣ What’s the difference between `null` and `undefined`?**

💡 **Answer:**

-   `undefined`: A variable is declared but not assigned a value.
    
-   `null`: The variable is explicitly set to have “no value.”
    

🧩 **Example:**

```js
let x;
console.log(x); // undefined
let y = null;
console.log(y); // null
```

---

### **4️⃣ What is an undeclared variable?**

💡 **Answer:**  
A variable that’s never declared in the code.

🧩 **Example:**

```js
console.log(a); // ReferenceError: a is not defined
```

---

### **5️⃣ How do you get the sum of numbers (1,2,3) without defining input parameters?**

💡 **Answer:**  
Use the special `arguments` object available inside normal functions.

🧩 **Example:**

```js
function sum() {
  let total = 0;
  for (let num of arguments) total += num;
  return total;
}
console.log(sum(1, 2, 3)); // 6
```

---

### **6️⃣ Why doesn’t `arguments` work in arrow functions?**

💡 **Answer:**  
Arrow functions don’t have their own `arguments` object. Use **rest parameters** instead.

🧩 **Example:**

```js
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3)); // 6
```

---

### **7️⃣ What is destructuring?**

💡 **Answer:**  
A way to easily extract values from arrays or objects.

🧩 **Example:**

```js
const user = { name: "Alex", age: 25 };
const { name, age } = user;
console.log(name, age); // Alex 25
```

---

### **8️⃣ What are template literals or tagged templates?**

💡 **Answer:**  
They allow embedding variables directly in strings using backticks `` ` ``.

🧩 **Example:**

```js
let name = "Alex";
console.log(`Hello, ${name}!`);
```

---

### **9️⃣ How do you create a global variable in JavaScript?**

💡 **Answer:**  
Declare it outside any function or attach it to the global object.

🧩 **Example:**

```js
var a = 10;       // global in browser
window.b = 20;    // also global
```

---

## ⚙️ Angular Questions

### **1️⃣0️⃣ If you use `@ViewChild`, in which lifecycle hook should you access it?**

💡 **Answer:**  
Use `ngAfterViewInit()` — it runs after Angular loads the child view.

🧩 **Example:**

```ts
@ViewChild('child') child!: ChildComponent;
ngAfterViewInit() {
  console.log(this.child);
}
```

---

### **1️⃣1️⃣ How do you open a dialog using Angular Material?**

💡 **Answer:**  
Use the `MatDialog` service and call its `open()` method.

🧩 **Example:**

```ts
constructor(private dialog: MatDialog) {}
openDialog() {
  this.dialog.open(MyDialogComponent, { width: '300px' });
}
```

---

### **1️⃣2️⃣ How do you get data back when a dialog closes?**

💡 **Answer:**  
Use `MatDialogRef` to send data from the dialog back to the parent.

🧩 **Example:**

```ts
constructor(private ref: MatDialogRef<MyDialogComponent>) {}
closeDialog() {
  this.ref.close('Saved!');
}
```

---

### **1️⃣3️⃣ How do you pass data to a dialog?**

💡 **Answer:**  
Pass a `data` property when calling `open()`.

🧩 **Example:**

```ts
this.dialog.open(MyDialogComponent, {
  data: { name: 'Alex' }
});
```

---

### **1️⃣4️⃣ What’s the difference between smart and dumb components?**

💡 **Answer:**

-   **Smart components:** Handle logic, data fetching, and pass data down.
    
-   **Dumb components:** Only display data from inputs and emit outputs.
    

🧩 **Example:**  
Smart → `UserListComponent`  
Dumb → `UserCardComponent`

---

### **1️⃣5️⃣ What does `ngOnChanges()` do?**

💡 **Answer:**  
It triggers whenever an `@Input()` value changes.

🧩 **Example:**

```ts
@Input() name: string = '';
ngOnChanges() {
  console.log('Name changed:', this.name);
}
```

---

### **1️⃣6️⃣ How do you detect changes in a reactive form when the user types?**

💡 **Answer:**  
Use `form.valueChanges` to listen for updates.

🧩 **Example:**

```ts
this.form.valueChanges.subscribe(values => console.log(values));
```

---

### **1️⃣7️⃣ How do you design Angular component architecture?**

💡 **Answer:**  
Organize your app into modules:

-   🧩 **Core module** – global services (auth, API).
    
-   🔄 **Shared module** – reusable UI components.
    
-   🏗️ **Feature modules** – domain-specific logic.
    

🧩 **Example Folder Structure:**

```bash
/core → auth.service.ts  
/shared → button.component.ts  
/users → users.module.ts
```

---

### **1️⃣8️⃣ What are standalone components?**

💡 **Answer:**  
Standalone components don’t need to be declared in a module — simpler and modern structure.

🧩 **Example:**

```ts
@Component({
  standalone: true,
  selector: 'app-hello',
  template: `<h1>Hello!</h1>`,
})
export class HelloComponent {}
```

---

### **1️⃣9️⃣ What is differential loading?**

💡 **Answer:**  
It delivers modern JavaScript to modern browsers and smaller, compatible bundles to older ones — improving performance automatically.

---

### **2️⃣0️⃣ What is deferred (lazy) loading in Angular?**

💡 **Answer:**  
Loads parts of the app only when needed, reducing initial load time.

🧩 **Example:**

```ts
{
  path: 'users',
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
}
```

---

### **2️⃣1️⃣ What are Angular signals?**

💡 **Answer:**  
Signals are a new way (from Angular 16+) to handle reactivity — track and update data automatically like state variables.

🧩 **Example:**

```ts
import { signal } from '@angular/core';
const count = signal(0);
count.set(count() + 1);
```

---

### **2️⃣2️⃣ Angular Version & Modern Features**

💬 The candidate mentioned using **Angular 9**.  
💡 The interviewer suggested learning about **Angular 13+**, focusing on:

-   ⚛️ **Standalone Components**
    
-   🔁 **Signals**
    
-   💤 **Deferred/Lazy Loading for HTML**
    

🚀 These updates make Angular apps faster, modular, and easier to maintain.

---