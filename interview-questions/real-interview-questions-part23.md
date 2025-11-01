# Interview Questons

---

### **1\. What is NaN in JavaScript?**

**Answer:**  
`NaN` stands for **Not a Number**. It means the value you are trying to use is not a valid number.  
For example:

```js
Number("hello"); // NaN
isNaN("hello");  // true
```

Even though it means "not a number", its type is actually `"number"` — that’s just how JavaScript works.

---

### **2\. What does `typeof NaN` return?**

**Answer:**  
It returns `"number"`.  
That’s because `NaN` is technically considered a numeric type, even though it means “invalid number”.  
Example:

```js
typeof NaN; // "number"
```

---

### **3\. What is the use of the bind, call, and apply methods?**

**Answer:**  
They are used to **control how `this` works** inside a function.

-   `call()` and `apply()` run the function immediately.
    
-   `bind()` creates a new function that you can call later.
    

Example:

```js
const user = { name: "Alex" };
function sayHi() { console.log("Hi " + this.name); }

sayHi.call(user);  // Hi Alex
const bound = sayHi.bind(user);
bound();           // Hi Alex
```

---

### **4\. How to convert “contact\_details” to “Contact Details”?**

**Answer:**  
You can split the text by `_`, capitalize each word, and join them back with a space.  
Example:

```js
function formatText(str) {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
formatText("contact_details"); // "Contact Details"
```

---

### **5\. What is a Closure in JavaScript?**

**Answer:**  
A closure happens when a function **remembers** variables from its outer scope, even after the outer function is done.  
Example:

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

Here, `inner()` “remembers” `count` even after `outer()` finishes.

---

### **6\. What is the `this` keyword in JavaScript?**

**Answer:**  
`this` refers to **who is calling the function**. Its value depends on how the function is called.  
Example:

```js
const user = { name: "John", greet() { console.log(this.name); } };
user.greet(); // John

const greet = user.greet;
greet();      // undefined (because `this` now refers to global)
```

---

### **7\. What are the Spread and Rest operators (`...`)?**

**Answer:**  
They both use `...` but in different ways:

-   **Spread** expands arrays or objects.
    
-   **Rest** collects remaining values into an array.
    

Example:

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // Spread → [1, 2, 3, 4]

function sum(...nums) {      // Rest
  return nums.reduce((a, b) => a + b);
}
sum(1, 2, 3); // 6
```

---

### **8\. What is Debouncing and Throttling?**

**Answer:**  
They control how often a function runs — especially for search boxes or scroll events.

-   **Debounce:** Waits until you stop typing before running.
    
-   **Throttle:** Runs at regular intervals even if you keep typing.
    

Example:  
If you type in a search bar, debounce waits until you pause for 300 ms before searching.

---

### **9\. What’s the difference between Shallow Copy and Deep Copy?**

**Answer:**

-   **Shallow copy:** Copies only top-level values; nested objects still share the same reference.
    
-   **Deep copy:** Copies everything, including nested objects.
    

Example:

```js
const obj = { a: 1, b: { c: 2 } };
const shallow = { ...obj };
shallow.b.c = 5;
console.log(obj.b.c); // 5 → changed (shallow copy)

const deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 10;
console.log(obj.b.c); // 5 → unchanged (deep copy)
```

---

### **10\. Is JavaScript synchronous or asynchronous?**

**Answer:**  
JavaScript is **synchronous** by default — it runs one line at a time.  
But you can make it **asynchronous** using `callbacks`, `promises`, or `async/await`.  
Example:

```js
setTimeout(() => console.log("Async!"), 1000);
console.log("Sync!");

// Output:
// Sync!
// Async!
```

---

### **11\. What is Hoisting in JavaScript?**

**Answer:**  
Hoisting means JavaScript moves **variable and function declarations** to the top of the scope before execution.  
But only declarations move — not the values.  
Example:

```js
console.log(x); // undefined
var x = 10;
```

---

### **12\. What types of Scopes exist in JavaScript?**

**Answer:**

-   **Global Scope:** Variables accessible everywhere.
    
-   **Function Scope:** Variables declared with `var` inside a function.
    
-   **Block Scope:** Variables declared with `let` or `const` inside `{}`.
    

Example:

```js
if (true) {
  let a = 5; // block
  var b = 10; // function/global
}
console.log(b); // 10
// console.log(a); // Error
```

---

### **13\. What are the properties of Flexbox?**

**Answer:**  
Flexbox helps align items easily. Key properties:

-   `justify-content` (left, right, center, space-between)
    
-   `align-items` (top, center, bottom)
    
-   `flex-direction` (row or column)
    

Example:

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

### **14\. What is the CSS Box Model?**

**Answer:**  
Every element in CSS has:

-   **Content**
    
-   **Padding**
    
-   **Border**
    
-   **Margin**  
    These layers control how much space an element takes up.
    

---

### **15\. What are CSS position values, and what is the default one?**

**Answer:**

-   `static` (default)
    
-   `relative`
    
-   `absolute`
    
-   `fixed`
    
-   `sticky`
    

Example:

```css
div { position: absolute; top: 10px; left: 10px; }
```

`absolute` positions an element relative to its nearest parent with `position: relative`.

---

### **16\. What new changes came in Angular 16/17?**

**Answer:**  
Angular 16/17 introduced **standalone components**, removing the need for `NgModule` by default.  
Also, new syntax like `@if` and `@for` replaces `*ngIf` and `*ngFor`.

---

### **17\. What is a Standalone Component in Angular?**

**Answer:**  
A standalone component is a component that works **without a module**.  
You just add `standalone: true` in its decorator.

Example:

```ts
@Component({
  standalone: true,
  selector: 'app-hello',
  template: `<h1>Hello!</h1>`
})
export class HelloComponent {}
```

---

### **18\. What is Dependency Injection in Angular?**

**Answer:**  
It’s a way for Angular to **automatically provide services or objects** your class needs.  
Example:

```ts
constructor(private userService: UserService) {}
```

Angular gives you an instance of `UserService` automatically.

---

### **19\. What are HostBinding and HostListener in Angular?**

**Answer:**  
They are decorators used in directives or components.

-   `@HostBinding` binds a property to the host element.
    
-   `@HostListener` listens to events on the host element.  
    Example:
    

```ts
@HostListener('click') onClick() {
  console.log('Host element clicked!');
}
```

---

### **20\. What is an Interceptor in Angular?**

**Answer:**  
An interceptor lets you **modify HTTP requests or responses** globally — like adding a token or handling errors.  
Example:

```ts
intercept(req, next) {
  const cloned = req.clone({ setHeaders: { Authorization: 'Bearer token' } });
  return next.handle(cloned);
}
```

---

### **21\. What is Data Sharing in Angular?**

**Answer:**  
It means passing data between components — done using:

-   **Input/Output decorators**
    
-   **Services with Observables**
    
-   **Router parameters**
    

Example with service:

```ts
// service
data = new BehaviorSubject<string>('hello');
```

---

### **22\. What is the Default Position in the DOM?**

**Answer:**  
The default CSS position is **static**, meaning the element stays in the normal page flow and isn’t affected by top/left.

---

### **23\. Why is Communication Important in an Interview?**

**Answer:**  
Because explaining your logic clearly helps interviewers understand your thought process — even if your code isn’t perfect.

---
