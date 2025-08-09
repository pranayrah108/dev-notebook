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

### Ep. 4: How functions work in JS ❤ & Variable Environment

Let’s take **function a()** and **function b()** which have variable with name x but different values. From here, **_we’ll learn how function invocation work behind the scenes._**

Also, introduce something in global space. Let take x with different value at top of program.
Then invoke functions : a and b.

_From last articles, you must remember that these functions can be invoked before even initialising that because of hoisting._

```js
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
```

**Response:**

![Ep4 Output 1](assets/Ep4output1.webp)

Let’s see how this program works behind the scene in javascript line by line. 🤔🤔

Everything we learn in this articles helps in understanding scope, closures

Steps:

When Javascript runs any program, **Global Execution Context(GEC)** is created. It will have two components : **Memory Component(Variable Environment) and Code Component.**

1. Memory will be allocated to all variables and functions present i.e **x, a() and b()**.

2. CallStack will be created and GEC will be pushed inside it.

![Ep4 Image 1](assets/Ep4img1.webp)

3. Now when code actually get executed that means

```html
var x = 1;
```

then **_1 will replace undefined_** in memory

![Ep4 Image 2](assets/Ep4img2.webp)

4. When **function a()** is invoked, then a **_new execution context_** is created which is limited to this function only. It will follow same phase as above i.e two components: memory and code where x will be all together different variable.

```js
function a() {
  var x = 10;
  console.log(x);
}
```

5. As soon as this new execution context get created for a(), it get pushed into call stack.

6. Now control is at Line 7.

7. At line 7 , 10 will replace undefined for x in memory

8. At Line 8, **_console will print 10 not 1 as it will look into local memory space_**

![Ep4 Image 3](assets/Ep4img3.webp)

9. At line 9, We finish executing function a(), so now whole execution context for a will be deleted. **_a() will be popped out from call stack_**

![Ep4 Image 4](assets/Ep4img4.webp)

10. Now GEC is at line 2 again and control moves to line 3

![Ep4 Image 5](assets/Ep4img5.webp)

11. Again is a function b() is invoked and executes same as above, creating memory and code components. As soon as new execution context get created for b(), it get pushed into call stack.

Now control is at Line 12.

At line 12, 100 will replace undefined for x in memory.

At Line 12, **_console will print 100 not 1 as it will look into local memory space_**

![Ep4 Image 6](assets/Ep4img6.webp)

12. At line 12, We finish executing function b(), so now whole execution context for a will be deleted.

![Ep4 Image 7](assets/Ep4img7.webp)

13. **_b() will be popped out from call stack_**

![Ep4 Image 8](assets/Ep4img8.webp)

14. Now GEC is at line 3 again and control moves to line 4. It will look for x in local memory of this particular execution context. **_And it prints 1 in console_**.

![Ep4 Image 9](assets/Ep4img9.webp)

15. After finish executing line 4 in GEC. Now, JS engine moves to next line and see there is nothing left to execute.

16. GEC will be deleted and GEC will be popped out from call stack.

![Ep4 Image 10](assets/Ep4img10.webp)

### This is how complete program get executed. 🎉

You can also check same in browser as well by adding breakpoints 🛑.

### Ep. 5: SHORTEST JS Program window & this keyword 🧐

Let’s just take an **empty JS file\*** where nothing to execute and see what happens behind the scenes.

1. Go to Source
2. Put debugger on and run program👩🏻‍💻
3. GEC will be created and JS engine still created GEC and set up memory space
4. There was nothing to setup as file was empty but it still did it’s job .🤷🏻‍♀️

![Ep5 Image 1](assets/Ep5image1.webp)

### Now comes new word “window” 🪟. What is that??

## When you go to console and type window, you’ll see something printed, a big object which consist functions and variable which are created by JS engine, in global space .

![Ep5 Image 2](assets/Ep5image2.webp)

This means you can access all these functions and variables anywhere in JS program

Same as above JS engine creates **_this_** 👈🏻 keyword

Try typing **_“this”_** in console and you’ll see something will get printed.

![Ep5 Image 3](assets/Ep5image3.webp)

## Right now, “this” represents “window” in global space.👏🏼

### So, question here is what exactly is window? How to define that?

## window is a global object which is created along with GEC.

So, to **summaries** whenever a JS program runs:

1. GEC is created
2. global object is created i.e window
3. this variable is created and points to global object

#### Why it is called “window” ?

JS not just run on browsers, it runs on server and others. So, wherever JS is running there must be JS engine . Like in chrome, it’s V8, firefox and safari have their own engines. So, all these JS engines have responsibility to create global object. In case of browsers, it is known as “window”. It’ll be different for node or wherever JS is running but there will always be global object.

#### So, at global level in GEC this === window. 😃

![Ep5 Image 4](assets/Ep5image4.webp)

#### Now, you might have question: what is global space?🤔

Any code you write inside JS which is not inside a function is in global space.

Let see below example where we have variable **“y”** and **“function z()”**.

![Ep5 Image 5](assets/Ep5image5.webp)

So, **“y” and function z()** is in global space. It will get attached to global object i.e window. But variable a inside **function z()** will not be in global object.

![Ep5 Image 6](assets/Ep5image6.webp)

#### Now, how to access these?🧐

1. use **window.{variableName}**

2. directly use {**variableName**}

3. use **this.{variableName}**

![Ep5 Image 7](assets/Ep5image7.webp)

Note: Whenever we try to access any function or variable and we don’t put anything in front of it, it automatically assumes you are referring to global space.

so, all these referring to same place in memory space.

```js
(window.y === y) === this.y;
```

#### Summary

So now you can figure out the value of `this` by following these simple rules:

- By default, `this` refers to a global object, which is global in the case of NodeJS and a `window` object in the case of a browser

- When a method is called as a property of an object, then this refers to the parent object

Note: \* **empty JS file — Shortest JS program.**

### Ep. 6: undefined vs not defined in JS 🤨

**_undefined_** is a very special keyword in javascript and it is not there in other languages. It has a lot to do with how javascript code is executed.

_As we have studied in the previous articles also that javascript code is executed in a different way it creates a global execution context and allocates memory to all the variables and functions even before a single line of code is executed._

#### Code Example of undefined in JS

Suppose we created a variable a = 10, so even before this line of code is executed, javascript has tried to allocate memory to this even before this line of code is run.

Let us see with the help of debugger so i am putting the debugger right before this line is executed.
If we refresh the page this, line hasn’t been executed yet right but javascript has already allocated memory to this **“a”** .

![Ep6 Image 1](assets/Ep6image1.webp)

so we have already reserved memory for now. If we see here is the reserved memory so right now **_a is undefined_**.

#### Why this happened?

When it allocates memory to all the variables and functions, to the variables it tries to put a placeholder, it is like a placeholder which is placed in the memory. That special keyword is **_undefined_**

**_“undefined”_** _is very different than_ **_“not defined”._**

So suppose if i try to access something else like below to which we have not allocated memory.

```js
var a = 10;

console.log(x);
```

#### what will happen ?

“x” you won’t find anything that is known as **_“not defined ”_** 👈🏼

![Ep6 Image 2](assets/Ep6image2.webp)

If you run below code, First it will give a = undefined

```js
console.log("a = ", a);
var a = 10;
console.log("a = ", a);
console.log("x = ", x);
```

But after second line has been executed, you will see that the **value of a has changed to 10** .

![Ep6 Image 3](assets/Ep6image3.webp)

_So remember undefined is not equal to empty_

**_Some people 👥 think that undefined means empty_** _like it is not taking up any memory space._ 🤨 ❌

#### No, undefined is a special keyword it takes up its own memory but you can assume it to be like a placeholder which is kept for the time being until the variable is assigned some other value. 🤷🏻‍♀️

#### What if i never put any value inside “a” , like what if I just declared it? 🧐

I never put any value to it throughout our whole program. It have this value undefined that placeholder kept inside and to show you that it is something in javascript.

![Ep6 Image 4](assets/Ep6image4.webp)

#### Mistake you should not make while using undefined.

**a = undefined** ❌ ❌

#### what does that mean?

undefined is a value, it is a keyword in javascript and it is totally possible to assign and define to any variable but it is kind of a mistake and it is a bad thing to do in javascript.

One should not do it because undefined is like a placeholder which is kept inside the variables and it states that in the whole code that variable was not assigned anything right so it is meant for a specific purpose so it is not generally a good way to put undefined like this

Though it is a totally okay to do this but it can lead to a lot of inconsistencies so it is not a good practice to do this.

**_Javascript is a loosely typed language. What does that mean?? 🫤_**

#### So loosely typed means that it does not attaches its variables to any specific data type.

Suppose if i created a and put in string in it so later on in the program i can also put numbers in it, i can also put boolean in it.

![Ep6 Image 5](assets/Ep6image5.webp)

### It is like javascript is very flexible in this case, it is loosely typed that is known as loosely type language.

If it was strict type then just like other languages just like **C** or **C++** .

If you assign a variable that if it is a string a so it will only hold string, it won’t hold numbers or booleans or anything else but it is not the case in **javascript** you can put anything and everything inside this variable.

So if i do **var a** for the time being it can like just hold undefined

```js
var a;
console.log("Step 1,  a = ", a);
```

![Ep6 Image 6](assets/Ep6image6.webp)

If i later on put **a = 10** here so it can hold numbers also

```js
var a;
console.log("Step 1,  a = ", a);
a = 10;
console.log("Step 2,  a = ", a);
```

![Ep6 Image 7](assets/Ep6image7.webp)

it can also hold a string again, so this is a perfectly valid javascript code

```js
var a;
console.log("Step 1,  a = ", a);
a = 10;
console.log("Step 2,  a = ", a);
a = "Hello World";
console.log("Step 3,  a = ", a);
```

![Ep6 Image 8](assets/Ep6image8.webp)

So until and unless any value is not specified there, it is a placeholder undefined, when you have put integer, string etc. It will print that.

**_JS is a loosely typed language a.k.a weakly typed language_**

### Ep. 7 The Scope Chain, Scope & Lexical Environment 🧐

In this article, we will cover:

1. What is Scope?

2. What is Lexical Environment?

3. What is Scope Chain?

Scope in JS is directly related to lexical Environment. Let’s take below example:

```js
function a() {
  console.log(b);
}
var b = 10;
a();
```

When JS engine reach line 2 and try to execute. JS engine will look for “b” in local memory space of function a. But it won’t be there because we never created “b” inside function a().

#### What will happen now? Will it print undefined or not defined or print value of variable?

Let’s run and see output

![Ep7 Image 1](assets/Ep7image1.webp)

So, it printed value somehow.

#### Let’s make it more complicated. Add another function inside function and try to print “b” inside that. Invoke function also. What will happen now?

```js
function a() {
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
a();
```

Let’s run and see output again

![Ep7 Image 2](assets/Ep7image2.webp)

So, it again printed value again.

#### Let’s take another example and move variable “b” inside the function but try to access it in global scope by printing it. What will happen now?

```js
function a() {
  var b = 10;
  c();
  function c() {}
}
a();
console.log(b);
```

Let’s run and see output again

![Ep7 Image 3](assets/Ep7image3.webp)

Here goes **ERROR**. which says **not defined**.

Now, Scope comes into picture.

### Scope means where you can access a specific function or variable .

It mainly have two aspects:

1. What is scope of this variable “b” ? Where can i access this variable “b” ?

2. Is “b” inside the scope?? Like Is “b” inside the scope of function c?? Which means Can I access “b” inside function c??

#### What happen when program runs?

```js
function a() {
  var b = 10;
  c();
  function c() {}
}
a();
console.log(b);
```

1. When we run this program, GEC is created and pushed inside Call Stack.

2. When you run program, it will try to assign values to global variables and function. Example : It will assign value to function a().

3. Then it will invoke the function a(), which will result in creating execution context for a().

4. Now, function a() will reserve memory for variable b and function c().

5. So variable b= undefined and function c = function reference

6. Once, code starts executing b = 10.

7. At line 3, function c is invoking which results in new execution context and pushed to call stack.
   Press enter or click to view image in full size

![Ep7 Image 4](assets/Ep7image4.webp)

#### What is Lexical Env?

### Where ever an execution context is created, a lexical env is also created. So, Lexical env is local memory, along with lexical environment of it’s parent.

_Lexical means hierarchy or in sequence._

**In below example**, function c() is lexically sitting inside function a(). And function a() is lexically inside the global scope.

```js
function a() {
  var b = 10;
  c();
  function c() {}
}
a();
console.log(b);
```

So, Let’s assume **orange box inside memory which represents lexical env of it’s parent.**

1. In case of function c() execution context, it will represent lexical env of a() and a()’s parent i.e GEC.

2. In case of function a() execution context , it will represent lexical env of GEC.

3. In case of GEC, it represents outer env which is null.

![Ep7 Image 5](assets/Ep7image5.webp)

#### What happens if you try to do console.log for b inside function c( ) ?? Will it print value of b or gives not defined?

```js
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();
console.log(b);
```

1. When JS engine encounter this line, it tries to find out this inside the local memory of function c().

2. It won’t find it because there is no variable b inside function c() memory.

3. Now, JS engine goes to orange reference which goes to lexical environment of it’s parent which is function a()’s memory.

4. Now, it find variable b inside function a()’s memory.

5. **It goes back and prints value of b as 10.**

![Ep7 Image 6](assets/Ep7image6.webp)

#### If variable b is moved outside function a(). What happens if you try to do console.log for b inside function c( ) ?? Will it print value ?

```js
function a() {
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
a();
console.log(b);
```

Answer is , **_YES_**. Check below for explanation ⬇️

![Ep7 Image 7](assets/Ep7image7.webp)

#### If variable b is removed. What happens if you try to do console.log for b inside function c( ) ?? Will it print value ?

```js
function a() {
  c();
  function c() {
    console.log(b);
  }
}
a();
```

Answer is , **_NO_**. Check below for explanation ⬇️

![Ep7 Image 8](assets/Ep7image8.webp)

Output:

![Ep7 Image 9](assets/Ep7image9.webp)

Here, we can say: **\*_“b is not in the scope”._**

So, this whole mechanism of searching b in local memory and if not found then into reference of the outer parent lexical env and so on is known as **_“SCOPE CHAIN”_**

#### Summary:

1. Lexical environment is created whenever an execution context is created. So, Lexical environment = Local memory + Reference to lexical env of parent.

2. Parent i.e Lexical Parent is where actually that function sits inside the code.

3. Chain of Lexical Env is known as Scope Chain. And it defines whether a variable or function is present inside the scope or not.

#### Let’s see same in browser as well:

1. Call stack with GEC, a()’s execution context and c()’s execution context⬇️

![Ep7 Image 10](assets/Ep7image10.webp)

2. function a() have Local memory + lexical env of parent as “Global” ⬇️

![Ep7 Image 11](assets/Ep7image11.webp)

3. function c() have Local memory + lexical env of parent i.e a()’s memory + lexical env of it’s parent’s parent i.e a()’s parent which is GEC ⬇️

![Ep7 Image 12](assets/Ep7image12.webp)

_Note: You can see “Closure” keyword in above screenshot. It’ll be covered in future articles._
