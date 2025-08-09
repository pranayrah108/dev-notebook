# Nmjs-1

### Ep. 1: How JavaScript Works & Execution Context 🤷🏻‍♀️

1. Do you know how JavaScript works and how the code is executed?
2. Is JavaScript synchronous or asynchronous?

3. Is JavaScript single threaded or is it multi threaded?

Don’t worry we’ll cover everything

### Execution Context in JS 🤔

**_"Everything in JavaScript happens inside the Execution Context"_**

![Execution Context](assets/execution%20context.png)

Let’s just say this **_execution context_** to be a big box or a container 🎁 in which whole JavaScript code is executed. It has two components in it.

**The first component** is also known as the **_memory component_** 📝. So this is the place where all the variables and functions are stored as key-value pairs Key value, if suppose we have a variable ‘a’ which is equivalent to 10 and similarly functions are stored over here in this memory component. This memory component is also known as **Variable environment**

**The second component** of this execution context is the **_code component_** 📋. This is the place where code is executed one line at a time. It is also known as **Thread of execution**

![Execution Content Diagram](assets/execution%20content%20diagram.webp)

### Is JavaScript synchronous or asynchronous?🧐

JavaScript is a **_synchronous single-threaded_** language.

**single threaded**, means JavaScript can only execute one command at a time and **synchronous**, means in a specific order.

So that means that it can only go to the next line once the current line has been finished executing.

JavaScript is not possible without this beautiful execution context.

So, in the next part I’ll walk you through a real JS program. We will see how this whole beautiful execution context is created, how this memory section is created, how this code is executed inside this code component.

### Ep. 2 : How JavaScript Code is executed? ❤ & Call Stack 🤷🏻‍♀️

Do you know? When you run a JavaScript program, there are a lot of things happening behind the scenes inside the JavaScript engine. we’ll be covering everything right now.

Remember in the last article , we discussed that everything in JavaScript happens inside an **Execution Context**.

### So what happens when you run a JavaScript program?

_An execution context is created._

**Code Example for Execution Context Creation**

```js
var n = 3;
function square(num) {
  var output = num * num;
  return output;
}
var square3 = square(n);
var square4 = square(4);
```

So we have this variable ’n’ which is 3 and there is a function **_square_** which returns the square of a number which is being passed inside this function and there are two other variables, **_square3 & square4_**, which are just invoking this already created function.

So now let us see how this whole JavaScript code is run behind the scenes.

### Global Execution Context Creation 🤔

![GEC Phase](assets/GEC_phase.webp)

**In first phase of memory creation**, JavaScript will allocate memory to all the variables and functions.

So as soon as JS encounters this line 1, It **_allocates memory to n_**. So let us now allocate memory to n. How will it allocate? It will reserve a memory space here for n. Similarly, now JavaScript goes to line 2. It sees that there is a function, which is named square. So it will **_allocate memory to square_**.

In the first phase and in case of functions, it literally stores the whole code of the function inside this memory space

And now it will also **_allocate memory to square2 and square4_** and as there are another variables, it will again store undefined for them

so in the first phase, JS skims through the whole program

![Memory Creation](assets/MemoryCreation.webp)

Let us see what happens in the phase two

### The second phase is the code execution phase

So let’s see how this code is executed after the memory allocation. So JavaScript, once again runs through this whole JS program line by line and it executes the code now. So this is the point when all these functions and every calculation in the program is done. Okay? So as soon as **_it encounters this first line, n=3, it actually places the ‘3’ inside the ’n’_**. So till now, the value of n was undefined, now it is 3.

![Second Phase](assets/SecondPhase.webp)

So line number two to five, there is nothing to execute literally. So it moves to line number 6

### Function Invocation and Execution Context Creation

Here, we invoke a function

```js
var square3 = square(n);
```

**What do you mean by a function invocation?** _Whenever you see a function name, with these round brackets, it means that the function is now being executed._

So functions over here are like a mini program, and whenever a new function is invoked, you know, a mini program is invoked, an altogether new execution context is created 😃

So now, we will again go through the creation of this execution context and there will again be two phases involved.

In the memory creation phase, So we will be concerned about this piece of code only. When we are executing this **square(n)**,

```js
function square(num) {
  var output = num * num;
  return output;
}
```

So now, let us see how the memory is allocated here in the first phase

In the phase one, first of all, don’t forget that the memory is allocated to variables and functions inside this function. And when I say variables and functions, it involves the parameters, like the **‘num’**, and the other variables and we don’t have a function so no need. so we will be allocating memory to _num_ and _output_.

Now comes the part of phase two. Okay? So, the phase two is the code execution phase. In this, we will be executing each line.

### What happens while executing return statement?🤔

This return keyword states that, now return the control of the program, to the place where this function was invoked.

![Executing Return Statement](assets/ExecutingReturnStatement.webp)

One more thing that happens when the whole function is executed, is that, this whole execution context, for that instance of that function, will be deleted. And the **control moves to line number 6**.

![Square Function](assets/SquareFn.webp)

After this replacement, we will go to line number 7. So in line number 7 we are again invoking a function, right, and just the difference is, we are now passing in 4 over here as an argument directly. That’s it.

As soon as this function invocation happens👇

1. Again, a brand new execution context will be created

2. Again it will have this memory

3. Again it will have a code component, remember?

4. And now, it will again go through those two phases.

5. Firstly memory is allocated to num, okay?

6. num will store the value undefined. Remember?

7. And, one more thing happens is, we allocate memory to output, which is again, undefined.

8. Our first phase is done.

9. Now in the second phase, In the code execution phase, What will happen is, num will get this argument, from the invocation in line number 7,

10. num will get this value 4.

11. In the code execution, the undefined will be replaced by (in the code execution phase) 4.

12. It will execute `num*num`, which is `4*4`, 16 and this 16 will now replace this undefined value inside the output. Right?

13. The control moves to line number 4. After 3 is done.

14. So now, this return statement takes back the control to line number 7, where, the function was actually invoked.

15. Now the value 16 will replace undefined in the square4 variable. Okay?

![Second Code Execution Phase](assets/SecondCodeExecutionPase.webp)

As soon as we are done with the function execution, this whole execution context is now deleted.

So JS is done with all it’s work.

![End Of Execution](assets/EndOfExecution.webp)

### But don’t you think that all this is too much to manage for the JS engine?🤔

Call Stack is answer for that.

### Introduction to Call Stack in JavaScript 📚

**Call Stack in JavaScript** It handles everything to manage this execution context creation, deletion, and the control.

_Note: To understand Call Stack , one need to understand Execution Context._

The call stack is like a stack. In the bottom of the stack we have our global execution context. That means, whenever any JS program is run, this call stack is populated with this Global execution context. This whole execution context is pushed inside this stack.

![Square Function](assets/SquareFn.webp)

Remember this. Whenever a function is invoked, or a new execution context is created, as in case here, in line number 6, we created this execution context, So this execution context is put inside the stack. So let me just denote it by E1, which is the execution context 1.This is how it happens.

Once we are done with executing this function ( square3 ), we return the output, now this E1 is moved out.

E1 is popped out of the stack, and the control goes back to the global execution context, where it left.

So the control goes back to line number 6. Got it? This is how it works. This will again literally pop out of the stack

![Square Function](assets/SquareFn.webp)

Now E1 will be popped off the stack and then we move on to line number 7, where the new function was invoked, and a new Execution context was created, and similarly this E2, will move up to the stack. This E2 was popped inside the stack. Once the whole function was executed, then E2 will also move out of stack, and the control goes back to Global Execution Context (GEC).

![Call Stack](assets/CallStack.webp)

**So this call stack is only for managing these Execution contexts.**

_Whenever an Execution context is created, it is pushed into the stack and whenever an Execution context is deleted, it will move out of the stack.So that is how the whole control is being managed._

This whole Execution context creation deletion everything is managed by JavaScript After this whole thing is executed, the call stack gets empty. The GEC is also gone from this call stack

Now Another interesting thing, **Call stack is also known as, Execution context stack, Program stack, Control stack, Runtime stack, Machine stack.** So, Next time when someone asks you any of these terms, don’t get confused and answer like a pro 😎 .

### Ep. 3: Hoisting in JavaScript (variables & functions)

Hoisting is a phenomenon in javascript by which you can access variables and functions even before you have initialised those or you have put some value in it.

**Example**

```js
var x = 8;

function getName() {
  console.log("Hi Hoisting");
}

getName();
console.log(x);
```

**Output**

![Hoisting Output 1](assets/HostingOutput1.webp)

**Example 2:** Try to access getName and x even before we are initialising it.

```js
getName();
console.log(x);

var x = 8;

function getName() {
  console.log("Hi Hoisting");
}
```

**Output**

![Hoisting Output 2](assets/HostingOutput2.webp)

This means, _getName()_ somehow access the function and invoke the function. But _x is undefined_ 🤔.

**Example 3:** Remove var x = 8;

```js
getName();
console.log(x);

//var x = 8; // remove or comment this line

function getName() {
  console.log("Hi Hoisting");
}
```

**Output:**

![Hoisting Output 3](assets/HostingOutput3.webp)

This says **x is not defined** . 🤔🤔

_Is undefined and not defined are same thing? Nope_ 👎 🚫

**Example 4:**

```js
function getName() {
  console.log("Hi Hoisting");
}
console.log(getName);
```

**Output:**

![Hoisting Output 4](assets/HostingOutput4.webp)

It just print the function.

**Example 5:** What if try to get function name before initialising it like did for x which gives undefined?

```js
console.log(getName);
var x = 8;
function getName() {
  console.log("Hi Hoisting");
}
```

![Hoisting Output 5](assets/HostingOutput5.webp)

So

```js
getName();
console.log(x);
console.log(getName);

var x = 8;
function getName() {
  console.log("Hi Hoisting");
}
```

**Output:**

![Hoisting Output 6](assets/HostingOutput6.webp)

So, let’s dig down deep and see why it is behaving like this. Remember how Execution context works in previous Ep. 1 and Ep. 2.

So, **_even before this whole javascript code executes in javascript, memory gets allocated to each and every variable and function_**. Check below for reference. I put debugger here on first line of code, that means even first line of code is not executed yet and you can see variable and function already have memory allocated.

![Hoisting Output Dev Tool 1](assets/HostingOutputDevTool1.webp)

![Hoisting Output Dev Tool 2](assets/HostingOutputDevTool2.webp)

Even if you move console above and put debugger on first line then you can see memory is allocated .

```js
getName();
console.log(x);

console.log(getName);

var x = 8;

function getName() {
  console.log("Hi Hoisting");
}
```

![Hoisting Output Dev Tool 3](assets/HostingOutputDevTool3.webp)

![Hoisting Output Dev Tool 4](assets/HostingOutputDevTool4.webp)

So, if you will move next line to line and check console then you ‘ll see output as :

![Hoisting Output 7](assets/HostingOutput7.webp)

### Now, let’s come to undefined and not defined.

So, let’s remove **_var x = 8;_** then it means x is not in memory.

**_Memory is never allocated to x. As x is nowhere initialised in program._**

When code executes and check **_console.log(x);_** then it will give **_ReferenceError: x is not defined_**

```js
getName();
console.log(x);

console.log(getName);

function getName() {
  console.log("Hi Hoisting");
}
```

Now, let’s take an example of **_arrow function._**

```js
getName();
console.log(x);

console.log(getName);

var x = 8;

var getName = () => {
  console.log("Hi Hoisting");
};
```

**Output:**

![Hoisting Output 8](assets/HostingOutput8.webp)

**What happened?**

When you make _getName_ an **arrow function**, it started behaving like any other variable not as a function. And In memory allocation phase, just like any other variable , it allocates undefined.

![Hoisting Output Dev Tool 5](assets/HostingOutputDevTool5.webp)

Even if you try below syntax:

```js
getName();
console.log(x);

console.log(getName);

var x = 8;

var getName = () => {
  console.log("Hi Hoisting");
};

var getName2 = function () {
  console.log("Hi Hoisting");
};

function getName3() {
  console.log("Hi Hoisting");
}
```

you can see, only in case of proper function, it will copy the whole code and other two act as variables and have _**undefined**_ value

![Hoisting Output Dev Tool 6](assets/HostingOutputDevTool6.webp)

I hope this article provides a clear understands of how Hoisting works in JavaScript. Happy Coding.
