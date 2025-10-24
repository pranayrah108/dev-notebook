# Interview Questons

---

### 🧠 1. How can you create an array of 100 random numbers in JavaScript?

**Answer:**  
You can use `Array.from()` or a loop to generate 100 random numbers.  
Each number can be created with `Math.random() * 100`, and to make it an integer, use `Math.floor()`.

```js
const randomNumbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
console.log(randomNumbers);
```

-   `Math.random()` → gives random decimal between 0 and 1
    
-   `Math.floor()` → removes decimals (e.g., 3.7 → 3)
    

---

---

### 🧩 **Option 1: Using `Array.from()` (cleanest and most common)**

```js
const randomNumbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
```

**Why it’s good:**

-   One line, very readable
    
-   `Array.from()` directly generates the array with values (no need for loops)
    

---


### 🧠 **Option 2: Old-school `for` loop (still very fast)**

```js
const randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
```

**Why it’s good:**

-   Very explicit (easy for beginners to understand)
    
-   Slightly faster in some browsers for very large arrays
    
-   No fancy syntax, just pure logic
    

---

### 🧩 2. What does the spread operator (`...`) do?

**Answer:**

> “The spread operator expands the elements of an array or the properties of an object. It’s like unpacking a box.  
> Example with an array:
> 
> ```js
> const arr = [1, 2, 3];
> const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
> ```
> 
> With objects:
> 
> ```js
> const user = { name: 'John' };
> const userDetails = { ...user, age: 25 }; // { name: 'John', age: 25 }
> ```
> 
> It’s very useful for cloning, merging, or adding values without changing the original array or object.”

---

### 🧱 3. What is destructuring in JavaScript?

**Answer:**

> “Destructuring allows you to extract values from objects or arrays into separate variables in a concise way.
> 
> ```js
> const person = { name: 'Alice', age: 25 };
> const { name, age } = person;
> console.log(name, age); // Alice 25
> ```
> 
> Without destructuring, you’d have to access each property manually, like `person.name`. It also works with arrays:
> 
> ```js
> const numbers = [10, 20];
> const [first, second] = numbers;
> console.log(first, second); // 10 20
> ```”
> ```

---

### 🌀 4. What is event propagation (capturing and bubbling)?

**Answer:**

> “Event propagation is how events travel through the DOM. There are two phases:
> 
> 1.  **Capturing** – the event moves from the document root down to the target element.
>     
> 2.  **Bubbling** – the event moves back up from the target to the root.
>     
> 
> ```js
> parent.addEventListener('click', () => console.log('Parent'), true); // capturing
> child.addEventListener('click', () => console.log('Child')); // bubbling
> ```
> 
> You can stop bubbling with `event.stopPropagation()`. It’s important when multiple elements have listeners on the same event.”

---

### 🪜 5. What is event delegation?

**Answer:**

> “Event delegation is a technique where a **parent element handles events for its children**. This avoids adding many listeners.
> 
> ```js
> document.getElementById('list').addEventListener('click', (e) => {
>   if (e.target.tagName === 'LI') {
>     console.log('Clicked:', e.target.textContent);
>   }
> });
> ```
> 
> The parent listens for clicks and checks which child triggered the event. This is memory-efficient and cleaner for large lists.”

---

### 🧮 6. What are default parameters in functions?

**Answer:**

> “Default parameters let you assign a value to a function argument if none is provided.
> 
> ```js
> function greet(name = 'Guest') {
>   console.log('Hello', name);
> }
> greet('Alice'); // Hello Alice
> greet();        // Hello Guest
> ```
> 
> Without default parameters, missing arguments would be `undefined`. This helps avoid errors and makes functions safer.”

---

### 🔑 7. What do `Object.keys()`, `Object.values()`, and `Object.entries()` do?

**Answer:**  
They help you work with object properties easily.

```js
const user = { name: "John", age: 30 };

console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["John", 30]
console.log(Object.entries(user));// [["name", "John"], ["age", 30]]
```

---

### 💡 8. What is the difference between `null` and `undefined`?

**Answer:**

-   `undefined` → a variable has been declared but not given a value.
    
-   `null` → a variable has been given an “empty” or “nothing” value **on purpose**.
    

```js
let a;
let b = null;
console.log(a); // undefined
console.log(b); // null
```

---

### 🌍 9. What are variable scopes in JavaScript?

**Answer:**

-   **Global scope:** accessible everywhere.
    
-   **Function scope:** created inside a function (with `var`).
    
-   **Block scope:** created inside `{}` (with `let` or `const`).
    

Example:

```js
let globalVar = "I am global";

function example() {
  var funcVar = "I am in a function";
  if (true) {
    let blockVar = "I am in a block";
    console.log(blockVar);
  }
}
example();
console.log(globalVar);
```

---

### ⚙️ 10. What is a **prototype** in JavaScript?

**Answer:**  
Every object in JS has a hidden link to another object called its **prototype** — which provides shared properties or methods.

Example:

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("Hi, I'm " + this.name);
};
const user = new Person("Alice");
user.sayHello(); // Hi, I'm Alice
```

The `sayHello` function is shared by all Person objects via the prototype.

---

### ⚡ 11. What’s the difference between **arrow functions** and **normal functions**?

**Answer:**  
Main difference: how they handle `this`.

```js
const person = {
  name: "John",
  normalFn: function() {
    console.log(this.name); // "John"
  },
  arrowFn: () => {
    console.log(this.name); // undefined (does not bind its own `this`)
  }
};
person.normalFn();
person.arrowFn();
```

Arrow functions **don’t have their own `this`**, they use the one from the outer scope.

---