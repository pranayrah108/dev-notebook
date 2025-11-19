# Interview Questons

---

## **Q1️⃣ What is function currying in JavaScript?**

**Answer:**  
Currying means breaking a function that takes multiple arguments into a series of smaller functions that take **one argument at a time**.

**Easy example:**

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}
add(2)(3); // 5
```

You give the first number, it returns a function waiting for the second number.

---

## **Q2️⃣ How does a curried function pass values from the outer function to the inner function?**

**Answer:**  
The inner function **remembers** the value that the outer function received. This happens because of **closures**.

**Example:**

```js
function greet(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}
```

The inner function still remembers `firstName` even after the outer function is done running.

---

## **Q3️⃣ What happens if you pass too many arguments to a curried function that only accepts a fixed number?**

**Answer:**  
It stops working correctly because the function is only designed to handle a certain number of arguments.  
If you call it with more than expected, the extra ones are ignored or cause errors.

---

## **Q4️⃣ How can we modify a curried function to accept multiple arguments (not just two)?**

**Answer:**  
We add logic to **check whether the next argument exists**.

-   If it exists, keep collecting values.
    
-   If there are no more arguments, return the final result.
    

**Simple example:**

```js
function add(a) {
  return function (b) {
    if (b === undefined) return a; 
    return add(a + b);
  };
}

add(2)(3)(4)(); // 9
```

Calling with empty parentheses `()` means “I’m done now.”

---

## **Q5️⃣ In a multi-argument curried function, why do we check if the second argument exists?**

**Answer:**  
Because that tells us whether to:

-   **keep collecting** more numbers, or
    
-   **stop and return** the final value.
    

If `b` is missing, that means no more values were passed.

---

## **Q6️⃣ How does the function accumulate results when called multiple times?**

**Answer:**  
Each time you call it with a number, it **adds** that number to the running total and returns a new function waiting for more.

**Example:**

```csharp
add(2)(3)(5)()  
→ 2 + 3 + 5 = 10
```

---

## **Q7️⃣ What is the difference between writing a curried function with normal functions vs arrow functions?**

**Answer:**  
Arrow functions just make the syntax **shorter**, but the behavior is the same.  
You don’t need to write `return` if it’s a one-liner.

**Example:**

```js
const multiply = a => b => a * b;

multiply(4)(5); // 20
```

---

## **Q8️⃣ Can currying be used for operations other than addition (like multiplication)?**

**Answer:**  
Yes, the technique works with **any** operation.  
Multiplication example:

```js
const mul = a => b => a * b;

mul(3)(4); // 12
```

---

## **Q9️⃣ Why is currying useful?**

**Answer:**  
Because it allows you to:

-   reuse partially filled functions
    
-   break problems into smaller, simpler steps
    
-   write cleaner, more modular code
    

**Example:**

```js
const add10 = add(10); 
add10(5); // 15
```

You “preset” the first value and reuse the function.

---
