# 1

Here’s your blog draft, keeping your original content intact but formatting it properly for a blog post:

---

# Mastering TypeScript: From Basics to Advanced with Real-World Scenarios

**Hi everyone,**

Welcome to an amazing tutorial of **TypeScript**.

You may have a question — _when there are so many resources of TypeScript, why would you want another tutorial of it?_

Well, the only reason I would say is because **I'm going to teach you from basics to advanced TypeScript along with practical scenarios and marathon interview questions with detailed answers**.

By mastering this tutorial content, I assure you that **neither you will get scared to face any level of interview, nor will you be stuck implementing TypeScript with its advanced types, object-oriented features, and much more**.

So let's begin the journey to master TypeScript.

---

## What is TypeScript?

We already have JavaScript, so why do we need TypeScript?

To understand, you need to learn a lot of concepts — but let’s start with a quick introduction.

**Theoretically, TypeScript is called a strongly typed superset of JavaScript.**

---

## Exploring TypeScript in the Playground

Let’s try to understand how.  
I’m opening the official site of TypeScript, and here I’m going to click on **Playground**.

This is a place where:

- On the **left-hand side**, you see the TypeScript code.
- On the **right-hand side**, you see the JavaScript equivalent code.

At the moment, I’m going to clear everything from this place — so you see this is what the JavaScript section looks like.

---

### Writing a Simple Function in TypeScript

Let me type some TypeScript code:

```typescript
const sum = (a, b) => {
  return a + b;
};
```

Now, when I call this function:

```typescript
sum("4", 5);
```

If we’re practicing **JavaScript**, this works without errors.  
But in **TypeScript**, you’ll notice something different:

- Parameters `a` and `b` are of type `any` by default.
- Passing a string and a number will show a **type error**.

---

### Adding Type Annotations

To fix this, I can declare that both `a` and `b` must be numbers:

```typescript
const sum = (a: number, b: number) => {
  return a + b;
};
```

Now, if I try:

```typescript
sum("4", 5); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

TypeScript forces me to pass **numeric values**:

```typescript
sum(4, 5); // ✅ Works perfectly
```

This is one of the biggest advantages of TypeScript — **type safety at compile time**.

---

## How TypeScript Runs

When you write JavaScript, the file is **directly executed in the browser** because browsers understand JavaScript natively.

But with TypeScript:

1.  You write `.ts` files.
2.  TypeScript Compiler (`tsc`) converts `.ts` files into `.js` files.
3.  The resulting JavaScript file is what actually runs in the browser.

Here’s a quick flow:

```scss
first.ts  →  (tsc compiler)  →  first.js  →  Browser Execution
```

If you try to directly run `.ts` in the browser, it won’t work — the compilation step is mandatory.

---

## Coming Up Next

In the next section, we’ll see **how to install and configure the TypeScript compiler** and start writing code in a regular IDE like **Visual Studio Code**.

---

# 2

---

# Installing TypeScript and Setting Up the Compiler

In the previous section, we learned that **TypeScript needs to be converted into JavaScript before it can run in the browser**.

When we say _installing TypeScript_, what we actually mean is installing **TSC — the TypeScript Compiler**.

---

## Step 1: Install Node.js

Since the TypeScript compiler is distributed via **NPM** (_Node Package Manager_), the first step is to install Node.js.

1.  Go to the official Node.js website: **[NodeJS.org](https://nodejs.org/)**
2.  You will see two download options:

    - **Latest Version**
    - **LTS (Long-Term Support)** — recommended for most users.

3.  Click **LTS version** and download the installer.
4.  Once downloaded, double-click the file and follow the on-screen instructions to install Node.js.

---

### Verifying Node.js Installation

To check if Node.js is installed successfully:

1.  Open **Visual Studio Code** or your terminal.
2.  Type:

```bash
node -v
```

This will display the installed Node.js version.

_Example output:_

```
v12.16.3
```

Your version may be different depending on the latest release.

---

## Step 2: Install TypeScript Compiler

Once Node.js is installed, you can install TypeScript globally on your machine:

```bash
npm install -g typescript
```

This command downloads and installs the **TypeScript compiler (TSC)** globally so you can use it from anywhere in your terminal.

You can also find this installation command on the official TypeScript website.

---

### Verifying TypeScript Installation

To check if TypeScript is installed:

```bash
tsc -v
```

You should see the installed TypeScript version in your terminal.

---

## Step 3: Creating Your First TypeScript File

Let’s create a simple TypeScript example.

1.  In your project folder, create a file named:

```
first.ts
```

2.  Add the following code:

```typescript
const sum = (a, b) => {
  return a + b;
};

sum(4, 5);
```

Currently, we are **not using strict typing** — so `a` and `b` default to `any` type, meaning they can accept any value.

---

## Step 4: Compiling TypeScript to JavaScript

Remember — TypeScript files (`.ts`) **cannot run directly in the browser**.  
We must first compile them to JavaScript using the **TSC command**:

```bash
tsc first.ts
```

This generates a new file:

```
first.js
```

If you open `first.js`, you’ll see the JavaScript version of your code.

---

## Step 5: Running the JavaScript File

Once compiled, you can run the JavaScript file using Node.js:

```bash
node first.js
```

Since we didn’t add any `console.log` statements, you won’t see any output in the terminal — but the code has executed successfully.

---

✅ **Key takeaway:**

- Write `.ts` files for TypeScript code.
- Use the **TypeScript Compiler (`tsc`)** to convert them into `.js` files.
- Run the `.js` files in the browser or with Node.js.

---

In the **next section**, we’ll start working with **TypeScript data types** and other **fundamental concepts** to make our code more robust and maintainable.

---

# 3

---

# Variables and Data Types in TypeScript

To begin with any programming language, the **first thing we need to discuss is variables and data types**.

When we are talking about **TypeScript data types**, there are two important reasons to focus on this topic:

1.  TypeScript is a **typed language**.
2.  Variables define how data is stored and accessed in a program.

---

## Variables in TypeScript

JavaScript has `var` and `let` to declare variables, and `const` to declare constants.  
TypeScript supports the same, but with one major advantage — **you can explicitly define the data type**.

In modern JavaScript or TypeScript, you should use `let` (or `const` for constants) instead of `var`, because `var` behaves differently due to **hoisting**.  
We will discuss hoisting in a separate lecture.

---

### Declaring a Variable

Example:

```typescript
let a;
```

In JavaScript, this variable would have a value of `undefined` by default.  
In TypeScript, if you hover over `a` in your editor, you’ll see its type is `any`.

If we log this variable:

```typescript
console.log(a);
```

The output will be:

```javascript
undefined;
```

---

### Declaring a Variable with a Type

In TypeScript, you can explicitly define the type:

```typescript
let a: number;
console.log(a); // undefined
```

You can also assign a value during declaration:

```typescript
let a: number = 9;
console.log(a); // 9
```

If you try to assign a string to `a`, TypeScript will show an error **before compilation**:

```typescript
let a: number = 9;
a = "test"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

If you run this code in pure JavaScript, it will work (because JS doesn’t have type checking).  
But when compiled via TypeScript (`tsc`), it will fail to generate a `.js` file, preventing type errors at runtime.

---

## Syntax of Variable Declaration in TypeScript

The general syntax is:

```csharp
let | const | var variableName: dataType = value;
```

Examples:

```typescript
let n: number;
let m: number = 9;
```

---

## Declaring Constants

When declaring a constant, you must assign the value immediately:

```typescript
const a: number = 56;
```

If you try to reassign later, TypeScript will throw an error:

```typescript
a = 100; // ❌ Error: Cannot assign to 'a' because it is a constant.
```

---

## Variable Naming Rules in TypeScript

These are the common rules (also found in most programming languages):

1.  **Allowed characters:** Alphabets, numbers, `_` (underscore), and `$` (dollar).
2.  **Cannot start with a number:**

    ```typescript
    let 1employee: number; // ❌ Invalid
    ```

3.  **No spaces allowed in names:**

    ```typescript
    let product code: string; // ❌ Invalid
    ```

    Instead, use:

    ```typescript
    let product_code: string;
    ```

4.  **CamelCase or snake_case** naming is common in JavaScript/TypeScript projects.

Example of a valid variable:

```typescript
let employee1: number = 101;
```

---

## Key Takeaways

- **Use `let` and `const`** instead of `var` for better scoping and readability.
- Always **declare variable types** in TypeScript for better compile-time safety.
- Follow **naming conventions and rules** to avoid errors and improve code quality.

---

In the **next lecture**, we will discuss the **primitive type `number` (numeric type)** in detail.

---

# 4

---

# Primitive Data Types in TypeScript – Numbers

Now we are going to start learning about **primitive data types**.

The first primitive data type we will look at is **numbers**.

This lesson also covers two relative questions about how numbers work in TypeScript.

---

## Numbers in TypeScript

When I say **number**, it means:

- Numeric values (e.g., `42`, `3.14`)
- Hexadecimal values
- Binary values
- Octal values

All of these fall under the **same numeric category** in both JavaScript and TypeScript.

---

## Declaring a Number Variable

In the **TypeScript Playground**, following the standard syntax for variable declaration:

```typescript
let a: number = 9;
console.log(a); // 9
```

You can also declare the variable first and assign a value later:

```typescript
let a: number;
a = 9;
```

---

## Type Safety in Action

If you try to assign a string to a variable declared as `number`:

```typescript
let a: number = 9;
a = "Hello"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

When compiled in **VS Code** with the TypeScript compiler (`tsc`), it will stop with an error, preventing invalid assignments.

---

## Number Type Covers Floats Too

Like JavaScript, TypeScript’s `number` type is used for **both integers and floating-point values**:

```typescript
let a: number = 9;
let b: number = 0.109;

console.log(a, b); // 9 0.109
```

---

## Binary, Hexadecimal, and Octal Numbers

TypeScript supports multiple number bases using prefixes:

- **Binary:** `0b` (zero + lowercase b)
- **Hexadecimal:** `0x` (zero + lowercase x)
- **Octal:** `0o` (zero + lowercase o)

Example:

```typescript
let binary: number = 0b111010; // Binary
let hex: number = 0x27; // Hexadecimal
let octal: number = 0o270; // Octal

console.log(binary, hex, octal);
```

Output:

```
58 39 184
```

---

## Relative Questions

### 1\. What types of values can a `number` store in TypeScript?

- Numeric values
- Floating-point values
- Hexadecimal values
- Binary values
- Octal values

TypeScript uses JavaScript as its base, so unlike traditional languages with `int`, `float`, `double`, etc., all numbers in TypeScript are represented using the single `number` type.

---

### 2\. How do you store binary or hex values in TypeScript?

- **Binary:** Prefix with `0b` (e.g., `0b1010`)
- **Hexadecimal:** Prefix with `0x` (e.g., `0x1F`)
- **Octal:** Prefix with `0o` (e.g., `0o77`)

These prefixes work in TypeScript exactly as they do in JavaScript.

---

In the **next section**, we will explore other **primitive data types** and see how TypeScript enforces type safety for them.

---

# 5

---

# Understanding Boolean in TypeScript

Another commonly used primitive data type is **Boolean**, which I am going to discuss in this particular lecture with one relative question.

A **boolean** variable contains `true` or `false` values.

Similar to JavaScript, the value you assign to a boolean variable has to be **true** or **false** in **lowercase**.

You cannot say `True` or `TRUE` like this,  
or `False` or `FALSE` in this way.

---

## Trying It in TypeScript Playground

Let's try all these possibilities in the editor.

I'll open the **TypeScript playground** and I'm declaring a variable:

```typescript
let a: boolean = true;
let b: boolean = false;

console.log(a);
console.log(b);
```

I also want to show you the type of these variables.

---

## Type Conversion & Rules

Here you see that the TypeScript which I have written again gets converted into JavaScript.  
So certainly, it's a basic JavaScript which will show us the output.

In case of JavaScript, we know that **true** and **false** have to be in lowercase.  
If I just say:

```typescript
let a: boolean = True; // ❌ Error
```

…it’s not going to work.  
It immediately shows me the error.

That’s what I wanted to tell you — we have to follow lowercase only.

---

## Using `typeof` with Boolean Variables

Let's also try the `typeof` operator with these variables.

```typescript
console.log(typeof a); // "boolean"
console.log(typeof b); // "boolean"
```

The `typeof` operator is actually from JavaScript,  
but it is used in TypeScript as well.  
When I run, it's going to show me the data type.

---

## Negating Boolean Values

With boolean variables, you have a **logical NOT operator** (`!`).  
You can use an **exclamation sign** to negate a value.

For example:

```typescript
console.log(!a); // false
console.log(!b); // true
```

Whatever might be the value inside that variable will be reversed,  
and that value is returned.

So here **true** will become **false**  
and **false** becomes **true**.

---

## Relative Question

Let’s say there is a variable:

```typescript
let a: boolean = !true;
console.log(!a);
```

The question is — **What will be the output?**

- When the exclamation is used, `true` will become `false` and will be assigned to `a`.
- Then again, we say `!a`, so `false` will become `true`.

**Output:**

```arduino
true
```

---

✅ **Conclusion:** Boolean in TypeScript is straightforward — it accepts only lowercase `true` or `false`, supports `typeof` checks, and can be inverted with the `!` operator.

---

# 6

---

# Understanding `null`, `undefined`, and `void` in JavaScript & TypeScript

One of the most debated and confusing topics in JavaScript is **null versus undefined**.

Now in TypeScript you have **void** to add more confusion to it, but it's a matter of time till you finish this lecture.

---

## Understanding `undefined`

Let me begin with **undefined**, as you might be knowing that whenever you declare a variable in JavaScript, it is treated as undefined.

Let me declare a variable here.

I say:

```ts
let a;
console.log(a);
```

So eventually it gets converted to JavaScript.

It says **undefined**.

This is what the JavaScript code is.

---

### With a data type in TypeScript

Now in case if I assign the data type here, let's give `number` then also it's not going to make any major changes in the JavaScript code.

```ts
let a: number;
console.log(a);
```

If I run this without any value assigned to it, certainly it is **undefined**.

---

### What is `undefined`?

`undefined` is basically a **data type**.

Undefined means that the variable is written there, but there is **no existence of it in the memory**.

For example:

```ts
let a;
console.log(typeof a); // "undefined"
```

It will certainly show me that yes, that is a variable, but it is undefined.

So by default, any variable you declare in TypeScript (like JavaScript) is going to be **undefined**.

---

Even if I change this data type to `string`, the output will also be undefined because this gets converted to JavaScript.

That’s how we get undefined.

---

## Understanding `null`

In traditional programming where you may have a string as `""` (empty string), that is not the case with TypeScript.

Also, if I initially assign a value, say for example, **null**:

```ts
let a = null;
console.log(typeof a); // "object"
```

The moment I assign null to it, this **cannot be a string** (if typed).

If I do not give any data type and simply say:

```ts
let a = null;
```

Then, if I run and display the type, it tells me that it is an **object**.

---

**Important point:**

- `undefined` is a data type itself.
- `null` is treated as an **object**.

---

### `null` in operations

If you try to apply primitive operations on it, it's not going to be the only object — it will be treated as `0`.

Example:

```ts
let a = null;
let b: number = 5;
console.log(a + 5); // 5
```

The reason: `a` when applied with primitive operations is treated as **zero**.

---

But for `undefined`:

```ts
let u = undefined;
console.log(u + 5); // NaN
```

This is `undefined + number` which results in **NaN**.

---

## Functions and the `void` Data Type

In traditional programming languages like C, C++, C#, or Java, whenever you write a function you see that you will have a **return type**.

Example:

```c
int sum(int a, int b) {
    return a + b;
}
```

This means the function will return an integer value.

---

### Return type in TypeScript

Here in TypeScript you can decide the return type also.

Example:

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

When I write `number` after the parentheses, it means the function will return a number.

If the function returns a string, I should write `string`.

---

### If no return value

In JavaScript, by default, any function returns **undefined** if you do not write a return statement.

Example:

```ts
function test() {
  console.log("Hi");
}

console.log(test());
// Output: "Hi" and then "undefined"
```

The reason: The function returned `undefined`.

---

### Using `void`

When there is a function which is **not returning any value**, then in TypeScript we can use `void`:

```ts
function greet(): void {
  console.log("Hello");
}
```

`void` is basically a kind of data type which says that there is **nothing to be returned or assigned**.

---

## Quick Summary

### Difference between `null` and `undefined`

1.  **Null** is an assignable value, whereas you don't need to assign **undefined** — any variable you declare becomes undefined.
2.  **Null** is considered zero in primitive operations, whereas undefined results in NaN.
3.  `typeof null` → `"object"`, whereas `typeof undefined` → `"undefined"`.

---

### When to use `void`?

When a function is not returning any type of value, generally we use the `void` data type.  
This has been a practice in traditional languages as well.

---

# 7

---

# Understanding the `any` Data Type in TypeScript

In this lecture, I am discussing about the type, the data type called **any**.

There is only one relative question about this topic.

---

## What is `any`?

`any` is one data type in TypeScript which can hold **any type of value**.

If you don't specify the type, it will be considered as `any`.

For example:

```ts
let A = 9;
```

Right now it is showing me the number.

But the moment I put a semicolon here in the output, it will certainly tell me that it is **undefined**.

However, if I roll over the mouse, you see that it shows `any` data type.

It means TypeScript is prepared that **this variable can have any type of value**.

---

## Declaring `any` Manually

`any` is something which you can even **manually** fix.

So you can give the data type identifier here:

```ts
let a: any;
```

This is going to be a variable which can hold any type of value later on.

---

## Default Behavior in JavaScript

As such, by default, you generally see that when you declare a variable in JavaScript, a variable can hold **any type of value**.

You don't generally manually define `any` like this.

---

## Type Checking in JavaScript

This also means let's say I declare a variable here, right?

What if I try to display the type of `a`:

```ts
let a: any;
console.log(typeof a); // "undefined"
```

You can easily make out that `typeof a` is going to be `undefined` because **JavaScript doesn't have a type called any**.

So this is just an information about `any` data type.

---

## When is `any` Useful?

The relative question is: **When do you think `any` type is useful in your code?**

`any` is often used when you do not know which type of value will be assigned to a variable in future.

For example, you have data returning from **third-party APIs** and you want to avoid TypeScript compile-time error.

Then you declare a variable as `any`.

---

### Common Practice

This is a common practice we see when we are not sure about what type of value will be returned into a variable.

---

# 8

---

# Understanding Type Annotation and Type Inference in TypeScript

In this lecture, I'm discussing just a behavior or a facility which is provided by TypeScript.

There is one relative question to this topic.

You already know that we can fix the data type with this syntax, where I say `let`, `const`, or even `var`, then the variable name, then you have a colon sign and you give the data type.

The datatype given after a colon sign is basically the **type annotation**.  
It means you are fixing the data type.

As such, you can declare a variable without data type, but in that case TypeScript will consider it as `any` — and that we have already seen in the previous lecture.  
But with the colon sign following this syntax, you actually annotate the data type explicitly.

---

## Type Inference in Action

Now there is one more point.

Let's take an example:

```typescript
let x = 3;
```

Here, when I roll over the mouse, it automatically says that **x is a number**.  
That means `x` is of number type.

So here, in spite of not giving any data type, `x` is considered as number data type in TypeScript.  
It is because when there is no explicit type annotation, the TypeScript compiler **infers** — that is, it assumes — the type according to the assigned value.

---

Let’s take one more example:

```typescript
let a = "test";
```

Now, if I roll over the mouse, then it is assumed that it's a string, and `x` is a number.

So certainly, you have a choice to annotate — that is, the type annotation you give the type after the colon sign.

But in case if you don't and there is a value assigned to it, then this is called **inference**.  
That means TypeScript infers or assumes the type depending on the assigned value.

---

## TypeScript’s Enforcement

This also means in case if I try:

```typescript
a = x; // Error
```

The error you see is that **number is not assignable to type string**.

So the data type is fixed by TypeScript when you assign the value.

When you see this error, it clearly means that depending on the type of value assigned to a variable, TypeScript **infers** or assumes (or in other words, decides) the data type as well.

---

## Type Annotation vs. Type Inference

In this lecture, we discussed about a feature or a behavior of TypeScript called **type annotation** and **type inference**.

---

## Relative Question: When Does TypeScript Infer the Data Type?

There are various situations where even though you have not given the type annotation — that is, if you have not explicitly defined the data type — TypeScript **infers** the data type.

Here are three situations:

---

### 1\. When a Value is Assigned Immediately

If you have a value assigned to it:

```typescript
let x = 3; // Inferred as number
```

Here you have already given `3`, which is a number, so TypeScript infers that `x` is a number.

---

### 2\. Default Parameter Values in Functions

In case of functions, if you assign default values:

```typescript
function sum(a = 3, b = 5) {
  return a + b;
}
```

Here, `a` and `b` are treated as numbers because I have given default numeric values.  
When you apply a default value for function parameters, TypeScript automatically infers the data type.

---

### 3\. Function Return Values

When a function returns a specific type of value:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

let result = sum(5, 10); // Inferred as number
```

Here also, the type is inferred.  
The reason is because this function is going to return a numeric value, which means `result` will be a number data type.

---

## Summary

To summarize, these are **three situations** where TypeScript infers the data type:

1.  When a variable is assigned a value immediately.
2.  When function parameters have default values.
3.  When a function returns a known type of value.

Type annotation lets you **explicitly** define a type, while type inference allows TypeScript to **automatically decide** it for you.

---

# 9

# 10

---

# Understanding String Basics in TypeScript

In this lecture, I'm discussing **string basics** — specifically the **string data type** in TypeScript.

The string data type in TypeScript is easy to handle, just like in JavaScript.  
TypeScript does not have a single character data type, the same as JavaScript, unlike C++ or other traditional languages where you declare a separate character. In TypeScript, **string** is a separate data type but can be used for a single character or multiple characters.

---

## Declaring a String Variable

When declaring a variable as a string, you can use:

- Double quotes (`"`)
- Single quotes (`'`)
- Backticks (`` ` ``)

> Backticks are part of a newer feature called **Template Literals** introduced in ES6, which we will discuss in the next lecture.

Example using double and single quotes:

```typescript
let str: string = "I am not new to TypeScript";
console.log(str);
```

When you run this, the message will be displayed.

---

## Handling Quotes Inside Strings

If you want to display an apostrophe inside a string, you can use double quotes for declaration:

```typescript
let str: string = "I'm not new to TypeScript";
console.log(str);
```

If you try to declare the same string with single quotes without escaping, it will give an error because the single quote inside the string will be considered as the end of the string.

Similarly:

```typescript
let str: string = 'He said, "TypeScript is great"';
console.log(str);
```

Here, because we used single quotes for the string, double quotes inside it are fine.

---

## Using Escape Sequences

In JavaScript (and therefore in TypeScript), escape sequences are special character combinations starting with a backslash `\` that allow you to include special characters in strings.

For example:

```typescript
let str: string = "I'm not new to TypeScript";
console.log(str);
```

Here, `\'` tells TypeScript to treat the apostrophe as part of the string, not as the end of it.

Common escape sequences include:

- `\n` → New line
- `\t` → Tab
- `\r` → Carriage return
- `\\` → Backslash

Example:

```typescript
let str: string = "First line\nSecond line";
console.log(str);

let tabbed: string = "Name\tAge";
console.log(tabbed);

let backslash: string = "This is a backslash: \\";
console.log(backslash);
```

---

## Why Escape Sequences are Useful

Escape sequences allow you to:

- Insert special formatting (like new lines or tabs) into strings.
- Display characters that would otherwise be treated as code syntax (like quotes or backslashes).

---

## Relative Question

**Explain various ways of declaring a string variable.**

- Using **double quotes** → `"Hello"`
- Using **single quotes** → `'Hello'`
- Using **backticks** → `` `Hello` `` (for template literals)
- Using **escape sequences** to handle special characters within strings.

---

Next, we’ll look at **template literals** in TypeScript, which make working with strings even more powerful.

---

# 11

---

# Handling Unicode Values with the String Data Type in TypeScript

In this lecture, I am discussing **handling Unicode values** with the `string` data type in TypeScript.

As I mentioned about **escape sequence characters**, I must also mention one very useful escape sequence — and that is **`\u`**. The `\u` sequence allows you to work with **Unicode characters**.

---

## Understanding Unicode in TypeScript

As such, the `string` data type is stored in **UTF-16** format, but in case there is a special character to be displayed, Unicode is represented with a **four-digit hexadecimal number**.

To display this character, you can use `\u` followed by a **four-digit hexadecimal value**.

---

## Example: Displaying a Copyright Sign

Let’s practically try one.

For example, you want to show the **copyright sign**.

The hexadecimal value for a copyright sign is **00A9**.

If you just write the number:

```typescript
let str: string = "00A9";
console.log(str);
```

It will directly show the value itself:

```
00A9
```

Now, if you give an instruction that this is a Unicode value by adding **`\u`**:

```typescript
let str: string = "\u00A9";
console.log(str);
```

When you run this, the output will be:

```
©
```

---

## Handling Long Unicode Characters

Sometimes, you may want to refer to **longer Unicode numbers**.

For example, if you check the Unicode chart, you will see that **the emoticon range is from `1F601` to `1F64F`**.

That means it is **not a four-digit hexadecimal**, but a **five-digit long hexadecimal**.

---

### Example Without Curly Braces

If you try this:

```typescript
let smiley = "\u1F601";
console.log(smiley);
```

It will **not display** the desired result.

---

### The Correct Way: Using Curly Braces

When it comes to longer Unicode values, you must wrap the hexadecimal value inside **curly brackets**:

```typescript
let smiley = "\u{1F601}";
console.log(smiley);
```

✅ Output: 😁

You can change the last digit to get a different emoji:

```typescript
let anotherSmiley = "\u{1F603}";
console.log(anotherSmiley);
```

✅ Output: 😃

---

## Dealing with Unicode in Strings

So, you can deal with Unicode using `\u` inside a string.

- For **4-digit Unicode values**, use `\uXXXX` (e.g., `\u00A9` → ©)
- For **long Unicode values**, use `\u{XXXXX}` (e.g., `\u{1F601}` → 😁)

---

## Relative Questions

**Q1: How will you deal with Unicode characters?**  
You use the `\u` escape sequence. Example:

```typescript
console.log("\u00A9"); // ©
```

---

**Q2: How can you deal with long Unicode characters?**  
You wrap the Unicode value inside curly brackets `{}`. Example:

```typescript
console.log("\u{1F601}"); // 😁
```

---

Next, we’ll explore **Template Literals** in TypeScript, which will allow you to combine Unicode, variables, and multi-line strings in a cleaner way.

---

# 12

---

# Template Strings (Template Literals) in TypeScript

In this lecture, we are discussing a **newer way to declare a string** introduced with **ECMAScript 6 (ES6)**.

It is known as the **template string** or **template literal**.  
In this post, we’ll look at how to use it, its advantages, and answer three related questions.

---

## Declaring a Template Literal

To declare a string variable using a template literal, you use **backticks** instead of single (`'`) or double (`"`) quotes.

Example:

```typescript
let str: string = `This is a template string`;
console.log(str);
```

When you run this, it will display the string as we normally expect.

---

## Why Use Template Literals?

The main advantage of a template literal is that it allows you to embed **expressions directly inside the string** without having to break and concatenate strings.

For example:

```typescript
let a: number = 90;
console.log(`Value of a is ${a}`);
```

Here:

- `${a}` is replaced with the actual value of the variable `a`.
- You don’t need to close the quotes, add a `+`, and then reopen quotes again.

---

## Example: Without Template Literal (Old Way)

```typescript
let a: number = 90;
console.log("Value of a is " + a);
```

This works, but it’s less clean and requires manual concatenation.

---

## Preserving String Formatting

Another great advantage of backticks is that **the string is displayed exactly as you write it**, including spaces, tabs, and new lines — no need for escape sequences like `\n` or `\t`.

Example:

```typescript
let str = `This is first line.  
  This is second line.  
      This is the third one.`;

console.log(str);
```

✅ Output preserves:

- Line breaks
- Spaces
- Indentation

---

## Why Programmers Prefer Backticks in ES6+

1.  **Expression embedding** — Easily insert variables or even calculations inside the string using `${expression}`.
2.  **Formatting preservation** — Write your string exactly how you want it displayed.

---

## Relative Questions

**Q1: What is a template literal or template string?**  
A newer approach to creating strings using backticks. It allows embedding variables and writing multi-line strings without special escape sequences.

---

**Q2: How do you display a value or an expression inside a template string?**  
Use `${expression}` inside the backticks. Example:

```typescript
let a = 90;
console.log(`Value of a is ${a}`);
```

---

**Q3: What are the advantages of using template strings?**

1.  Execute expressions without breaking the string.
2.  Preserve formatting (spaces, new lines) exactly as written.

---

# 13

---

# Understanding Type Aliases in TypeScript

In this article, we’re going to discuss a very useful feature in TypeScript called **type aliases**.

Type aliases let you **define your own data type** in TypeScript, making your code more readable, maintainable, and type-safe.

---

## Why Do We Need a Type Alias?

Assume a situation where you need a data type called **`Address`**, which should have:

- **Street** (string)
- **City** (string)
- **PIN code** (number)

Instead of rewriting the structure every time, you can use the `type` keyword to define the structure once and reuse it anywhere.

---

## Defining a Custom Type

Let’s see this practically.

```typescript
type Address = {
  street: string;
  city: string;
  pin: number;
};
```

Here:

- We used the `type` keyword to create our own **`Address`** type.
- This type has **three properties**: `street`, `city`, and `pin` with their respective types.

---

## Using the Custom Type in a Function

Now, let’s define a function that receives one parameter of type `Address`.

```typescript
function showData(obj: Address) {
  console.log(obj.street, obj.city, obj.pin);
}
```

Here:

- The parameter `obj` **must** be an object of type `Address`.
- This ensures that the passed object has **exactly** the required properties with correct types.

---

## Calling the Function

```typescript
showData({
  street: "Piscataway",
  city: "New Jersey",
  pin: 8854,
});
```

When we run this code, the function prints:

```sql
Piscataway New Jersey 8854
```

---

## Why This Is Important

By defining the type `Address`, we:

- Ensure **type safety** — a variable of type `Address` must have `street`, `city`, and `pin`.
- Avoid repeating property declarations.
- Make the code easier to read and understand.

---

## Type Aliases with Union Types

Type aliases can also be used with **union types**.

Example:

```typescript
type PinCode = number | string;

let p: PinCode;

p = 12345; // ✅ valid
p = "12345"; // ✅ valid
```

Here:

- `PinCode` can be either a **number** or a **string**.
- Both values are valid assignments.

---

## Key Takeaways

**Q: How can you define your own or custom data type in TypeScript?**  
A: Use the `type` keyword to define a **type alias**.

**Q: What is a Type Alias?**  
A: A type alias is a custom name you give to a type — it can be an object structure, a union type, or any other type.

**Syntax:**

```typescript
type TypeName = typeDefinition;
```

---

✅ **In short:** Type aliases are an essential TypeScript feature for creating reusable, custom, and clear data type definitions.

---

# 14

---

# Understanding the **Never** Type in TypeScript

In bigger applications, we sometimes create functions that handle errors, and these functions **never** return anything. In fact, they generate errors, meaning the function doesn’t complete the process — it breaks or crashes in between.

This behavior occurs because of a `throw` statement. As I mentioned, such functions never return anything, so in TypeScript, you can use the **`never`** type as a return type for them.

---

## A Practical Example

Let’s create a situation to understand this better.

```typescript
function raiseError(n: number, ed: string): never {
  // There might be some process in between
  // At the moment, I'll directly throw an object with an error
  throw {
    errorNumber: n,
    errorDescription: ed,
  };
}

// Somewhere in the program, while handling or generating error
// you might raise or generate the error
raiseError(101, "Invalid user");
```

When we run this code, we see in the console that the error is thrown.

This function will **always** break or crash when the `throw` statement is executed. This is what I meant earlier — such functions **do not have anything to return**.

---

## Why Not Use `void`?

When you do not have anything to return, you might think of using `void`. However, `never` is more appropriate in this case. Here’s why:

- `void` means the function doesn’t explicitly return a value, but it still returns `undefined`.
- `never` means the function **will not complete execution at all** and will never return.

---

### Example Showing the Difference

```typescript
let x: void;
x = undefined; // ✅ Valid
x = null; // ✅ Valid (with --strictNullChecks off)

let u: never;
u = undefined; // ❌ Error: Type 'undefined' is not assignable to type 'never'
u = null; // ❌ Error: Type 'null' is not assignable to type 'never'
```

So, while you can assign `null` or `undefined` to a `void` variable, you **cannot** do the same with `never`.

---

## Summary of Key Points

1.  **What is `never` type?**

    - A type used for functions that **never** complete normally (e.g., always throw errors or run infinite loops).
    - Example:

      ```typescript
      function raiseError(n: number, ed: string): never {
        throw { errorNumber: n, errorDescription: ed };
      }
      ```

2.  **Difference between `void` and `never`:**

    - `void` functions return `undefined` implicitly and can accept `null` or `undefined` values.
    - `never` functions do not return **at all** and cannot accept `null` or `undefined`.

---

With this understanding, `never` makes more sense from a TypeScript developer’s perspective. It tells you and anyone reading your code that this function will never successfully complete, making your intent crystal clear.

---

# 15

---

# Understanding TypeScript Compiler Options – Watch Mode Explained

In this section, we’ll discuss the TypeScript compiler and project configuration, focusing on how a project is managed and compiled inside an editor. I’m using **VS Code** for this demonstration, but the concepts apply to any editor.

---

## A Typical TypeScript Project Setup

In a real-world project, you will usually have:

- **HTML files**
- **CSS files**
- **TypeScript files**

For our example, let’s create:

- `index.html` – our HTML file
- `app.ts` – our TypeScript file

Inside `app.ts`, let’s write a simple example:

```typescript
let a: number = 5;
console.log(a);
```

---

## Compiling TypeScript to JavaScript

As we already know, browsers can only execute JavaScript. So we use the **TypeScript compiler (TSC)** to convert `.ts` files to `.js`.

To compile:

```bash
tsc app.ts
```

Once executed, a `app.js` file will be generated:

```javascript
var a = 5;
console.log(a);
```

---

## Making Changes and Recompiling

Let’s say we update `app.ts` like this:

```typescript
let a: number = 5;
let b: string = "Hi";

console.log(a);
console.log(b);
```

After saving, you’ll **need to re-run**:

```bash
tsc app.ts
```

This works fine, but in larger projects it becomes tiring to manually compile after every change.

---

## Using Watch Mode for Automatic Compilation

To solve this, TypeScript provides **watch mode**. This automatically recompiles your `.ts` file whenever changes are saved.

Run:

```bash
tsc app.ts --watch
```

Once you see:

```nginx
Starting compilation in watch mode...
```

You can make edits to your TypeScript file, save, and see the `.js` file update automatically without manually running TSC each time.

---

### Example: Live Update in Watch Mode

1.  Start watch mode:

    ```bash
    tsc app.ts --watch
    ```

2.  Remove a line from `app.ts`:

    ```typescript
    let a: number = 5;
    console.log(a);
    ```

3.  Save the file – you’ll notice that the compiler automatically refreshes and updates `app.js`.

---

## Watch Mode for Single Files vs. Projects

Right now, we are running watch mode **for a single file** (`app.ts`).

In real projects, there are usually **multiple TypeScript files**. You can also run watch mode on **all files** in a project – we’ll explore that in the next part of this section.

---

## Interview Question

**Q: What is watch mode and how do you run the TypeScript compiler in watch mode?**

**A:**  
Watch mode in TypeScript automatically compiles `.ts` files to `.js` whenever changes are detected, eliminating the need to manually recompile.

**Command for a single file:**

```bash
tsc filename.ts --watch
```

---

With this, you now understand how watch mode works in TypeScript and how it can save you time during development by enabling **automatic compilation**.

---

# 16

---

# Running the TypeScript Compiler for the Entire Project with `tsconfig.json`

---

## Introduction

In the previous lecture, we have seen how we can run the TypeScript compiler in watch mode for individual files.

In this lecture, we are going to configure a project and see how we can run the TypeScript compiler for the entire project.

---

## The Problem with File-Specific Watch Mode

Now you know how to run the TypeScript compiler in watch mode.  
But the issue is that it watches for **one file only**.

Now we want it to watch for the **entire project**.

---

## Creating a `products.ts` File

Let’s practically see how it can happen.

I’ll add a `products.ts` file here.  
Assume that this is going to contain the product component related details.

At the moment, I’m just pasting code here with:

- `pCode`
- `pName`

And I’m trying to display the values of `pCode` and `pName`.

---

## Running TSC on Specific Files

In the project, we have:

- `products.ts`
- `app.ts`

If I just run the TypeScript compiler on a specific file (`app.ts`), then it will generate only the `app.js` file.

In fact, if I use the `-w` flag, it will watch for **only `app.ts`**.

---

## Running TSC for the Entire Project

Instead, I want the TypeScript compiler to execute for the **entire project**.  
Even if I run it in watch mode, it should keep on watching changes in **all files**.

To do this, I can run:

```bash
tsc --init
```

This is similar to `npm init`.

---

## Generating `tsconfig.json`

The `tsc --init` command generates a JSON file: `tsconfig.json`, which contains a lot of compiler options.

At the moment, we don’t need to understand each setting, but once you run `tsc --init`, the project is **initiated**.

This means:

- When you run `tsc`, it compiles **all files** in the folder and subfolders.

---

## Watching All Files

To run the TypeScript compiler:

```bash
tsc
```

Now, two files will be generated:

- `app.js`
- `product.js`

To run in watch mode:

```bash
tsc --watch
# or
tsc -w
```

You **do not** need to specify any file name — it watches **all files**.

---

## Testing the Watch Mode

- I open `app.ts` — it contains a variable declaration.
- I open `product.ts` — it contains traditional JavaScript-like code.

If I **add**:

```typescript
console.log("New line");
```

…in `product.ts` and save, the compiler re-runs.

`product.js` now includes the new line.

If I edit `app.ts`, it recompiles instantly.

---

## Adding a Temporary File

If I create a temporary file like `a.ts` and press Enter, the `.js` file is automatically created because the compiler is **watching the entire project**.

---

## The Role of `tsconfig.json`

`tsc --init` creates `tsconfig.json`, which helps configure TypeScript execution for the **current project**.

---

## Excluding Files

You can **exclude** files from compilation.  
For example, in `tsconfig.json`:

```json
{
  "exclude": ["products.ts", "node_modules"]
}
```

- **Files** in the list are not compiled.
- You can also exclude **folders** like `node_modules`.

---

## Using Wildcards

You can exclude using patterns:

```json
{
  "exclude": ["*.dev.css"]
}
```

This means **all `.dev.css` files** will not be compiled.

---

## Including Files

Similarly, you can **include** files:

```json
{
  "include": ["src/**/*"]
}
```

When you use `include`, **only** the specified files/folders are compiled.  
Everything else is automatically excluded.

---

## `files` Property

You can also use:

```json
{
  "files": ["app.ts", "products.ts"]
}
```

⚠️ This **does not** support folders — so it’s less commonly used.

---

## Reference from Official Documentation

From the official TypeScript site:

- `exclude` often includes `node_modules`
- `"**/*.spec.ts"` means: exclude **all `.spec.ts` files** from current and subfolders.

---

## Summary Q&A

### 1\. **What is the use of `tsconfig.json` and how to create it?**

- It contains configuration for the **entire project**.
- Create it with:

```bash
tsc --init
```

---

### 2\. **How can you run a specific file in watch mode?**

- Watch mode = automatically compiles on save without restarting.
- Command:

```bash
tsc filename.ts -w
```

---

### 3\. **How can you avoid selected files from compilation?**

- Use the `exclude` property in `tsconfig.json`.

```json
{
  "exclude": ["products.ts", "node_modules"]
}
```

---

## Conclusion

With `tsconfig.json`, you can:

- Run TSC for the **entire project**
- Watch all files for changes
- Include or exclude files and folders
- Manage compilation efficiently

This makes TypeScript projects easier to maintain and compile without manually running commands for each file.

---

# 17

---

# Understanding the `target` Option in `tsconfig.json`

In this section, I'm discussing about setting the target of compiled files.

And this itself is a question that **what is the purpose of target option in `tsconfig.json`?** Or **how can you set the compiled file target or compiled file version?**

---

## Recap: What is `tsconfig.json`?

So now you know how `tsconfig` is created and what is the use?  
Let's try to explore a few more options of this file.

As you can see, there is a key named **compilerOptions** containing a lot of information.

As per the official document, this property can be omitted if you want to go with default settings.

---

## Introducing the `target` Option

Let's check a few options in this lecture.  
We are going to see the **target** option.

The **target** option basically decides that the code converted by the TypeScript compiler should be in **which version of JavaScript**.

As you can see here, these are the various options available.

In fact, if I just delete this option and press **Control + Space**, then you can get the suggestion from the list.

By default, it was **ES5**, which we will keep intact, and I will show you a few things.

---

## Example Code

Now I am going to write some code here:

```typescript
function test() {
  let i: number;
  i = 10;
  console.log(i);
}

test();
```

Now, the moment I compile here, let's say I'll write:

```bash
tsc
```

and press enter.

So the `app.js` is created.  
It was already there though, because I tried a few things earlier, but it will have the new code.

---

## Output with ES5 Target

If I open this `app.js` file, then you see that the code generated has the syntax of ES5.  
That means you see the **var** keyword:

```javascript
function test() {
  var i;
  i = 10;
  console.log(i);
}
test();
```

---

## Changing the Target to ES2015 (ES6)

Now let's go to `tsconfig.json`, and here I press just **Ctrl + Space** and here I have the list of options.

Let's say I want to go with **ES6** (that is ES2015), so I select it here:

```json
{
  "compilerOptions": {
    "target": "ES2015"
  }
}
```

Let me just save this file.

---

## Output with ES2015 Target

Now we have the same code here again, I'm going to compile with:

```bash
tsc
```

So the new `app.js` is generated.

Now if you see the code — instead of `var`, we have the **let** keyword:

```javascript
function test() {
  let i;
  i = 10;
  console.log(i);
}
test();
```

Because we have set the target **ES2015**, it could generate the code in the newer version.

---

## Conclusion

There are various other options which you can try — any version you want the JavaScript code to be generated in, you can set that using the **target** option.

This small setting in `tsconfig.json` can completely change the output syntax your TypeScript compiler produces, making it compatible with older browsers or leveraging newer JavaScript features.

---

# 18

---

# Understanding the **lib** Option in TypeScript

In this lecture, I’m discussing the **lib** option in TypeScript and how it affects the availability of APIs in your project.

---

## Setting the Stage: A Small DOM Application

Let’s create a small DOM application and try to run it with the TypeScript compiler.

We have an `index.html` file that imports `app.js`, which will be compiled after running the TypeScript compiler. The HTML contains:

- An `<h1>` element that displays **"Text before click"**
- A `<button>` that triggers a function when clicked

```html
<h1 id="txt">Text before click</h1>
<button onclick="test()">Click Me</button>
<script src="app.js"></script>
```

---

## Writing the TypeScript Code

In `app.ts`, I’m defining the function `test()` which will be called on button click.  
I want to change the `<h1>` text after clicking the button.

```typescript
function test() {
  let txt = document.getElementById("txt")!;
  txt.innerHTML = "Text after click";
}
```

---

### Key Observations

- When I use the `document` API in TypeScript, it works without any issues because **the DOM library is included by default**.
- The **lib** option controls which libraries (JavaScript or browser APIs) TypeScript includes for type checking.

---

## Modifying the `lib` Option

If I manually change the `lib` option in `tsconfig.json` to **only include ES5**, the DOM APIs will no longer be available:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5"]
  }
}
```

Now, in `app.ts`, `document` will show an error because **the DOM library isn’t included**.

To fix this, I can add `"dom"` to the `lib` array:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"]
  }
}
```

Now `document` works again without errors. ✅

---

## Where Do These Libraries Come From?

When you install TypeScript, it comes with **various JavaScript APIs** such as:

- Array methods (`map`, `filter`, etc.)
- Promises
- And a few browser APIs like DOM, `setTimeout`, `fetch`, Web Workers, and even `console.log`

These library definitions are stored inside the **`lib` directory** of your TypeScript installation.

You can check the list of available libraries in the official [TypeScript GitHub repository](https://github.com/microsoft/TypeScript/tree/main/src/lib).

---

## How the `target` Affects `lib` Defaults

The **default value of `lib`** depends on the `target` you set in `tsconfig.json`:

- If you set `"target": "es5"`, APIs like `Promise` will not be available because they were introduced in **ES2015 (ES6)**.
- If you don’t set `lib` explicitly, TypeScript automatically includes the relevant libraries for your chosen `target`.

However, you can **manually add** any library you need using the `lib` option.

---

## 📌 Relative Questions & Answers

**Q1: What is the purpose of the `lib` option?**  
The `lib` option allows you to specify which libraries (JavaScript or browser APIs) your project should include. This determines which types and APIs are available for type checking.

**Q2: What is the default value of `lib`?**  
It depends on the `target`. If not set manually, TypeScript will include almost everything by default. But once you define `target`, it only includes libraries relevant to that target version unless you explicitly add more.

---

By understanding the **lib** option, you can better control your TypeScript environment and ensure only the APIs you actually need are included — making your type checking both accurate and efficient.

---

# 19

---

# Understanding the `module` Option in `tsconfig.json`

In this section, I’m discussing one more option in **`tsconfig.json`**, and that is the **`module`** option.

As you see in this `tsconfig` file, I have `module` defined as **ES2020**.  
Right now, I have created one application where I implement modules as well.

To implement modules, I’m using **`import`** and **`export`** statements.

---

## Quick Recap on Modules in TypeScript

In another section, I’m discussing in detail about how **modules** and **namespaces** work in TypeScript.  
But for now, just to understand this `module` option, you can get a basic idea of how `import` and `export` work in this particular application.

---

## The Example Application

I have created an **app** file where I’m importing **two functions** from a file called `calc.ts`.

- This file (`calc.ts`) is in the same folder.
- It contains three functions, but I’ve only called two of them.
- The `export` keyword is used before the function to make it available outside its file.

In TypeScript, **a file is considered a module** when it contains an `export` or `import` statement.

---

## Changing the Module Setting

Right now in `tsconfig.json`, the module setting is `ES2020`.  
For example, let’s change it to **`commonjs`**:

```json
{
  "compilerOptions": {
    "module": "commonjs"
  }
}
```

Save this file, and then run:

```bash
tsc
```

---

## Observing the Generated Code

When we check the compiled JavaScript files:

- With **`commonjs`**, the generated code includes Node.js style module loading such as:

```javascript
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunction = void 0;
```

and uses the **`require`** statement to import modules.

`CommonJS` is the module system used when you want your TypeScript code to work in **Node.js** environments.

---

If we now switch back to:

```json
"module": "ES2020"
```

and compile again:

```bash
tsc
```

We’ll see that in modern JavaScript (`ES2020`), we can directly use:

```javascript
export function myFunction() { ... }
```

without older-style boilerplate code.

---

## Why the `module` Setting Matters

When you create your application using the `module` option, you are essentially telling the TypeScript compiler:

> “Generate JavaScript compatible with this particular module system.”

Examples:

- **CommonJS** → For Node.js (uses `require` / `module.exports`)
- **ES2020 / ESNext** → For modern browsers or ES module-based environments

---

## Overriding Module Setting from the Command Line

Sometimes, you might want to compile **a single TypeScript file** with a specific module type without changing `tsconfig.json`.

You can do that with:

```bash
tsc --module commonjs myfile.ts
```

This tells TypeScript to compile only that file using **CommonJS** module style.

---

## Quick Q&A

**Q1: What is the purpose of the `module` option?**  
The `module` option decides the type of module system for the generated JavaScript code.

Example:  
If you use `import` and `export` in TypeScript but your runtime environment is Node.js, you must compile using `commonjs` so that Node understands the syntax.

---

**Q2: How can you compile a file with a specific module type from CLI?**  
Use the `--module` flag:

```bash
tsc --module commonjs myfile.ts
```

This will generate JavaScript using the specified module system without altering `tsconfig.json`.

---

**Final Note:**  
Choosing the right module setting is essential for ensuring that your compiled code runs correctly in your target environment. If you’re targeting Node.js, go with **CommonJS** (or **NodeNext** for newer module support). For browser-based ES modules, go with **ES2020** or **ESNext**.

---

# 20

---

# Understanding the `outDir` Option in `tsconfig.json`

So now let's discuss one more option — the **out directory**.  
Some people call it `outDir` also — it’s basically the **output directory**.

---

## The Default Behavior

By default, when we type `tsc`, it compiles all the TypeScript files and converts them to JavaScript files, storing them in the **same path**.

For example:  
Here, in the Project Explorer, we have TypeScript files. Now if I type `tsc` here, then you would see that all the files are generated **in the same path**.

This is **not** the preferred practice for larger projects.

---

## The Standard Practice

Whenever we create a TypeScript project, we generally have the TypeScript files inside a **source folder** — usually named `src`.

Let’s replicate this structure:

1.  Add a folder named `src`.
2.  Move all your TypeScript files into the `src` folder.
3.  Also, shift the `calci.ts` file.
4.  Remove the generated `.js` files.

This is how we keep our **source files**.

---

## Introducing the `dist` Folder

Generally, we also have **subfolders** (which we’ll discuss in a moment).  
But first, let’s focus on the **output directory**.

I don’t prefer putting the compiled JavaScript files inside the `src` folder.  
Instead, I choose a **`dist`** folder — short for **distribution** — which contains all the compiled files.

We can set this path in `tsconfig.json` using the `outDir` option.

---

### Setting `outDir` in `tsconfig.json`

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

Once saved, run:

```bash
tsc
```

**Before compilation:** Only `src` folder exists.  
**After compilation:** A `dist` folder is created automatically, containing all compiled JavaScript files.

---

## Behavior with Subfolders

If you have subfolders inside `src`, TypeScript will **preserve the same folder structure** inside the output directory.

Example:

```css
src/
 ├── app.ts
 └── calci/
      └── calci.ts
```

After running `tsc` with `outDir` set to `dist`:

```markdown
dist/
├── app.js
└── calci/
└── calci.js
```

This means you don’t need to worry about manually creating matching subfolders — TypeScript handles that automatically.

---

## Key Questions & Answers

**Q1:** How do you set a separate path for all the compiled files?  
**A:** Use the `outDir` (output directory) property in `tsconfig.json`.

**Q2:** What happens to the subfolders of the source folder when you compile?  
**A:** TypeScript keeps the same folder structure inside the output directory.

---

With this setup, your **source files stay cleanly separated from compiled files**, making your project structure much easier to maintain.

---

# 21

---

# Understanding the `outFile` Option in `tsconfig.json`

The next compiler option I am discussing here is **outFile**.

The `outFile` compiler option tells TypeScript to combine the compiled JavaScript files into a **bundle file** — a single JavaScript file.

---

## The Purpose of `outFile`

We generally see that we put **bundle.js** in the distribution folder.

So now let's set the `outFile` option to the distribution folder.

---

## Setting `outFile` in `tsconfig.json`

First of all, I'll uncomment this option and then I'll say:

> In the distribution folder, I want `bundle.js` and just save this.

---

## Compilation Behavior

Before compilation: There is nothing in the `dist` folder.

After running:

```bash
tsc
```

If I expand the folder, then you see that there is a **bundle.js** file.

I have two `console.log` statements in `app.ts` and `calci.ts` has two functions — because we have compiled the JavaScript files into `bundle.js`.

It should contain all the TypeScript files’ code compiled into the single `bundle.js`.

If I click it, you will see that it has the `console.log` statements and the functions as well.

---

## Common Practice

Generally, this is a practice that whenever we have the distribution folder, we keep a `bundle.js` file which **comprises all the compiled JavaScript files**.

---

## The Catch with `module` Settings

But still there is a catch.

If you have set the `module` option — let’s say to **ES2020** — then this will not work.

Example:  
If I save the configuration and try to run it again, you will see that it shows an **error**.

The reason is:  
When you have a newer module and if you put the `outFile`, it will not work the way we are expecting.

---

## Supported Modules for `outFile`

The `outFile` option will work only if the module is set to:

- `none`
- `system`
- `amd`

Otherwise, it will not work.

---

## Bundling with Other Module Systems

**What if you want to work with CommonJS or ES2020 and still you want to have a bundle?**

In that case, you don’t have to worry because tools like **Webpack** will take care of it.

Webpack can create a bundle for you, so you don’t have to worry if you have other modules.

Later, Webpack will also take care to load the respective module at runtime in case you are using `import` and `export` statements and you are using the CommonJS or ES2020 module.

---

## Using `outFile` via CLI

Let me just comment the `module` option because we are discussing about the `outFile`.

We use `outFile` in one more case:

> Let’s say you have **namespaces** and you want to compile to a single JavaScript file.

Even at the CLI, you can explicitly give a command so that all the TypeScript files will be combined into one JavaScript file.

---

### Example: Compiling via CLI

For example:

```bash
tsc --outFile b.js ./src/app.ts ./src/calci/calci.ts
```

Here’s what happens:

1.  I list two TypeScript files that will be compiled.
2.  They will be compiled and saved into `b.js` in the root folder.
3.  The generated `b.js` will have code of both files compiled as JavaScript.

---

## Summary

The `outFile` option is one way to bundle various TypeScript files into a single JavaScript file.

---

### Key Questions

**Q1:** How can you compile all files into a single bundle of JavaScript code?  
**A:**

- Use the `outFile` option in `tsconfig.json`
- Or compile via CLI with `tsc --outFile <outputFile> <file1> <file2> ...`

**Q2:** What should you check before using `outFile`?  
**A:**

- Make sure `module` is set to `none`, `system`, or `amd`.
- For other module types (like CommonJS or ES2020), use **Webpack** or similar bundlers.

---

With this, you now know how to use the `outFile` option to combine multiple TypeScript files into a single JavaScript bundle.

---

# 22

---

# Understanding the `rootDir` Compiler Option in TypeScript

The **`rootDir`** compiler option in TypeScript stands for **root directory**. This option allows you to explicitly set the **input directory** for your TypeScript project.

When you set the root directory, that folder is considered the **input** or **source** folder for all your TypeScript files.

---

## Default Behavior: The Common Path

If you don’t set a value for `rootDir`, TypeScript automatically uses the **common path** for all your included files.

### What is a Common Path?

The common path is the shared starting directory for all files included in your project.

For example, consider this project structure:

```pgsql
C:/typescript/
├── tsconfig.json
├── index.ts
└── src/
    └── app.ts
```

Here, the common path for all files is:

```bash
C:/typescript
```

If `rootDir` is **not** explicitly set, TypeScript will use this common path by default.

---

## Setting a Custom Root Directory

You can set the `rootDir` in your `tsconfig.json` file. For example:

```json
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}
```

This means **all input/source files** must come from the `src` folder.

If any file is outside `src`, TypeScript will throw an error.

---

### Example: Error for Files Outside Root Directory

Suppose you have:

```bash
/src/app.ts
/x.ts
```

If you set:

```json
"rootDir": "./src"
```

When compiling, TypeScript will show an error:

```csharp
error TS6059: File 'x.ts' is not under 'rootDir' './src'.
```

This happens because `x.ts` is outside the designated `rootDir`.

---

## Relationship Between `rootDir` and `outDir`

An important detail:  
If you **don’t set `outDir`**, TypeScript uses the value of `rootDir` as the `outDir` by default.

Example:

```json
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}
```

In this case, the compiled files will also be placed in `./src` unless you explicitly set an `outDir`.

---

## When Should You Use `rootDir`?

- **With build tools like Webpack:** You generally **don’t need** to set `rootDir`. Webpack already manages your input files.
- **Without bundlers:** If you want to explicitly define where all TypeScript source files should be located, set `rootDir` to your source folder.

---

## Quick Questions & Answers

**Q1:** What is the purpose of setting the root directory?  
**A:** It defines the source folder for all TypeScript input files, ensuring that all code comes from a specific directory.

**Q2:** Which value is considered in `outDir` by default if it’s not set?  
**A:** If `outDir` is not set, it defaults to the value of `rootDir`.

---

✅ **Key takeaway:** The `rootDir` option helps enforce a clear input directory structure for your TypeScript project, but in modern workflows with tools like Webpack, it’s often left unset.

---

# 23

---

# Understanding `removeComments` and `noEmit` in TypeScript

In this section, I am discussing the **`removeComments`** and **`noEmit`** options in TypeScript.  
And in a way, this lecture is also a question:

> **Explain the purpose of `removeComments` and `noEmit` options.**

These two compiler options are quite useful, especially when you are optimizing for production or running specific analysis.

---

## 1\. `removeComments`

As the name suggests, this option **removes comments while compiling**.

If you have comments placed inside a file, they will **not** be part of your compiled JavaScript code when this option is enabled.  
This is good practice for production builds, as you don’t want unnecessary text (and size) in your final code.

### Example:

I go to `tsconfig.json` and uncomment the `removeComments` option.  
I also add a comment inside my TypeScript file:

```ts
// This is explanation of the code
console.log("Hello TypeScript");
```

When I run the compile command:

```bash
tsc
```

The `dist` folder has all the compiled files.  
If I open the generated JavaScript, there are **no comments**.

If this option is set to the default (`false`), then comments will be preserved in the compiled JavaScript.  
For production code, it’s best to set:

```json
"removeComments": true
```

---

## 2\. `noEmit`

If `noEmit` is set to **`true`**, then the TypeScript compiler will **not generate**:

- JavaScript (`.js`) files
- Source maps (`.map`)
- Declaration files (`.d.ts`)

This means **no output files are produced**.

---

### Why use `noEmit` if no code is generated?

Sometimes you want to **analyze the code, run type-checks, or gather statistics** without generating any build files.  
In such cases, you can set:

```json
"noEmit": true
```

The compiler will still check your TypeScript files for errors, but will not produce any compiled JavaScript.

---

## Summary

- **`removeComments`** → Removes all comments from compiled JavaScript. Useful for **production builds** to reduce file size.
- **`noEmit`** → Prevents output file generation. Useful for **type-checking only** scenarios.

Both options can be combined with other `tsconfig.json` settings depending on your development or production needs.

---

# 24

---

# Understanding the TypeScript `sourceMap` Compiler Option

In this discussion, we’ll explore another very important TypeScript compiler option — **`sourceMap`**. Let’s practically understand what a source map is, why it’s important, and how the `mapRoot` setting works.

---

## What is a Source Map?

If the `sourceMap` option is set to `true`, TypeScript will generate a **source map file** during compilation.

Let’s see this in action.

At the moment, I have one `index.html` file where I’ve placed a button with an `onClick` event that calls a `test` function. This `test` function is defined in the `app.ts` file, where I simply display an alert.

---

### Step 1 – Compile the Code

I run:

```bash
tsc
```

This generates the `app.js` file. Now, if I open `index.html` in the browser and click the button, the alert is displayed.

When I open the browser’s **Developer Tools** and check the debugger, I see only the **JavaScript** file (`app.js`).

---

### Step 2 – Why We Need Source Maps

In a real project, you often have **large code files**. When debugging in the browser, it’s much easier to see your **TypeScript** code instead of just the compiled JavaScript. This is where **source maps** help.

A **source map** is basically the **relationship** between:

- The TypeScript (development code)
- The JavaScript (compiled production code)

---

### Step 3 – Enable `sourceMap`

I go to `tsconfig.json` and set:

```json
"sourceMap": true
```

Now I run:

```bash
tsc
```

This time, along with the JS file, a `.map` file is also generated.

---

### Step 4 – Inside a Source Map File

If I open the `.map` file, it contains:

- **version** – The map file version
- **file** – The output file name
- **sources** – The original TypeScript file reference
- **mappings** – Base64-encoded values linking TypeScript code to JavaScript code

---

### Step 5 – Debugging with Source Maps

When I refresh the browser, I now see both `app.js` and `app.ts` in the debugger.

- I can set breakpoints directly in the TypeScript file.
- The browser uses the **source mapping URL** at the end of the JavaScript file to locate the `.map` file.

Example in JS output:

```js
//# sourceMappingURL=app.js.map
```

This comment is automatically added by TypeScript when `sourceMap` is enabled.

---

## What is `mapRoot`?

The **`mapRoot`** property specifies where the browser debugger should look for `.map` files.

If you set:

```json
"mapRoot": "http://sitename.com/dist"
```

Then the **sourceMappingURL** inside the JS file will be:

```arduino
http://sitename.com/dist/app.js.map
```

This is helpful when your `.map` files are hosted separately from your JS files.

---

## Questions and Answers

**Q1: What is a source map file, and what’s the advantage of it?**  
A source map is a mapping file between the original TypeScript code and the generated JavaScript code. The main advantage is **debugging convenience** — you can debug directly in TypeScript rather than reading through compiled JS.

**Q2: What is the purpose of `mapRoot`?**  
The `mapRoot` property tells the debugger where to look for `.map` files.

**Q3: How does `mapRoot` affect `sourceMappingURL`?**  
If `mapRoot` is set, its value will be **prefixed** to the map file name in the `sourceMappingURL` comment inside the JS file. If `mapRoot` is not set, the `.map` file is assumed to be in the same directory as the JS file.

---

✅ **Summary:**

- `sourceMap: true` → Generates `.map` files linking TS to JS for easier debugging.
- `mapRoot` → Defines the URL/path where the debugger should fetch `.map` files.
- Together, they make browser debugging in TypeScript seamless and production-friendly.

---

# 25

---

# Understanding Inline Sources in TypeScript

In our previous discussion, we explored how a source map is created and what its purpose is.  
Now, let's move a step further and talk about another very useful compiler option — **inline sources**.

---

## Setting Up Inline Sources

At the moment, the screen you see has the `app.js.map` (the map file) open.  
There are many compiler options in TypeScript, but let's focus on **inlineSources**.

We start by opening the `tsconfig.json` file. Inside it, we have the `inlineSources` property, which can be enabled by uncommenting and setting it to `true`:

```json
{
  "compilerOptions": {
    "inlineSources": true
  }
}
```

---

## Before Enabling Inline Sources

When we look at the map file **before** enabling this option, the **last entry** is the `mappings` property.

---

## After Enabling Inline Sources

Once we set `inlineSources` to `true` and recompile the code using:

```bash
tsc
```

…we can observe a **new key** in the map file: `sourcesContent`.

This means that the **content of the file** (in this case, the JavaScript file) is added **inside** the map file itself.

---

## How Inline Sources Work

- The `sources` property in a map file contains a **list of files** to be fetched **on demand** from the server during debugging.
- If you want to **avoid fetching these files on demand**, you can **embed** them directly into the map file.
- Embedding means keeping the **content inline** rather than loading it separately.

By setting:

```json
"inlineSources": true
```

…TypeScript **emits the sources and the source maps in a single file**.

---

## Why Use Inline Sources?

When `inlineSources` is enabled:

- The map file contains the **actual content** of your source files.
- This allows debugging **without the browser needing to fetch** the original source files from the server.
- Everything you need for debugging is contained in the **map file itself**.

---

## Summary

**Question:** What is the use of `inlineSources`?  
**Answer:**  
If you set `inlineSources` to `true`, the compiler embeds the original source code into the source map file. This eliminates the need for fetching files from the server during debugging, since the content is already part of the `.map` file.

---

# 26

---

# Understanding Arrays in JavaScript and TypeScript

In this section, I'm going to discuss about a very important entity for any programming language, and that is the **array**.

There are three relative questions to this topic in JavaScript and TypeScript arrays are equally important.

---

## What is an Array?

Normally when you declare a variable, it stores one value at a time.

For example:

```ts
let a = 5;
```

Here `a` is a memory location.

Now in the next line, if I write:

```ts
a = 90;
```

Then `5` is overwritten by `90`.

So there is always a memory location with an address. When you say `a`, it refers to this address.

But imagine you have **100 values to store** or even when the count of values is not fixed. In such a situation, **array is the most useful data structure** in JavaScript.

---

## JavaScript vs TypeScript Arrays

When you declare an array in **JavaScript**, it can store any type of value.  
But in **TypeScript**, it has to be of a **similar data type only**.

### Syntax in TypeScript

If you want to declare an array which can store numbers:

```ts
let a: number[] = [3, 6, 8];
```

Now, if the fourth value you try to assign is a string:

```ts
a.push("test"); // ❌ Error
```

It will not allow, since **TypeScript is strictly typed**.

But in **JavaScript**, the same code is allowed because JS arrays are dynamic and can hold multiple data types.

---

## Accessing Array Elements

Each element in the array has a unique **index number**.

For example:

```ts
let a: number[] = [3, 6, 8, 90];
console.log(a[0]); // 3
console.log(a[1]); // 6
```

The index always starts from **0** and goes till **n-1**.

Here `n` is the length of the array.

---

## Looping Through an Array

To display all elements, we can use a **for loop**:

```ts
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
```

Output:

```
3
6
8
90
```

You can also use `forEach`, `map`, and many other looping methods which we will cover in later discussions.

---

## Important Behavior in TypeScript Arrays

When declaring arrays, you must remember:

```ts
let a: number[];
a[1] = 67; // ❌ Error
```

This will not work because TypeScript expects the array to be **initialized properly**.

Correct way:

```ts
let a: number[] = [];
a[1] = 67;
console.log(a); // [empty, 67]
```

So, always declare with `[]` if you plan to assign values later.

---

## Common Questions About Arrays

### 1\. What is an Array?

In **TypeScript**, an array is a **collection of similar data types** like other languages.  
Each element is accessed using an **index number**.

You can store multiple values, and the array name represents the **first address** of the entire array.

---

### 2\. How to Get the Last Element of an Array?

The **length property** returns the total number of elements in an array.  
So the last element will always be at `length - 1`.

Example:

```ts
let a: string[] = ["Hi", "B", "Hello"];
console.log(a[a.length - 1]); // Hello
```

If we add another element:

```ts
a.push("Last");
console.log(a[a.length - 1]); // Last
```

---

### 3\. Get All Odd Numbers from an Array

We can loop through the array and use a condition:

```ts
let a: number[] = [3, 6, 8, 90, 7, 8, 9];

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 !== 0) {
    console.log(a[i]);
  }
}
```

Output:

```
3
7
9
```

---

## Conclusion

Arrays are one of the most powerful and essential data structures in JavaScript and TypeScript.

- In JavaScript, arrays are **flexible** and can store multiple data types.
- In TypeScript, arrays are **type-safe** and enforce strict data types.
- Arrays allow you to access values by index, loop through elements, and apply conditions like filtering odd numbers.

Mastering arrays is a must for solving real-world problems in programming.

---

# 27

---

# Understanding Tuples in TypeScript

We have already seen arrays, which can hold **similar types of data**.  
That is:

- A string array holds only string values.
- A number array stores only numbers.

But **TypeScript** also offers another useful data structure called a **tuple**.

Some people call it **tuple** or **tuple** (different pronunciations), but I’ll go with **tuple** here.

---

## What is a Tuple?

A tuple is like an array, but with one major difference:  
➡️ It can store **different types of data together** in a fixed sequence.

For example, let’s take an array:

```ts
let R = ["Hi", 5];
```

At first glance, this looks like a normal array.  
But if you hover the mouse over `R` in TypeScript, you’ll see it says this array can store a **string | number**.

Here, the **pipe sign ( | )** means **union** (we’ll cover union types later).

So effectively, `R` can behave like a tuple because it has the provision to store different types of values.

---

## Tuples vs Arrays

At this point, you may wonder: _“It looks like a JavaScript array. So what’s special about a tuple?”_

Here’s the key difference:

- In a **normal array**, the number of elements and their data types are not fixed.
- In a **tuple**, both the **number of elements** and their **data types** are fixed.

In other words, a tuple is somewhat similar to a **structure in C programming**.

---

## Defining a Tuple

Let’s define a tuple with exactly **two values**:

- First value: a string (person’s name)
- Second value: a boolean (married or not)

```ts
let person: [string, boolean];
```

This means:

- The **first value must be a string**.
- The **second value must be a boolean**.
- No extra values are allowed.

---

## Using a Tuple

Example:

```ts
let person1: [string, boolean] = ["P", true]; // ✅ valid
```

Now, if I try to change it:

```ts
person1 = [5, true]; // ❌ Error: number is not assignable to string
```

TypeScript will throw an error because the first value must always be a string.

---

## Fixing Values in Tuples

Tuples also fix the number of values.

For example:

```ts
person1[0] = "John"; // ✅ valid
person1[0] = 42; // ❌ Error: number not assignable to string
```

If you try to add a **third value**, TypeScript won’t allow it:

```ts
person1[2] = 6; // ❌ Error: type '6' is not assignable
```

---

## What About `push()`?

Interestingly, if you use the `push()` method, TypeScript does not throw an error:

```ts
person1.push("extra"); // ✅ allowed
console.log(person1);
```

This works, but it **breaks the original rule** of fixed elements.  
We’ll see later in this tutorial how to handle such cases properly.

---

## Common Question: Tuple vs Array

**Q: What is a tuple and how is it different from an array?**

- A **tuple** is like an array because it can store multiple values.
- But unlike a normal array, a tuple:

  - Allows **different data types** in fixed positions.
  - Enforces both the **number of elements** and their **data types**.

Example difference:

```ts
// Array
let arr: string[] = ["A", "B", "C"]; // only strings, unlimited count

// Tuple
let person: [string, boolean] = ["Alice", true]; // string + boolean, fixed count
```

---

## Conclusion

- **Arrays** in TypeScript hold values of the same type.
- **Tuples** allow storing different types of values, but in a **fixed order** and **fixed length**.
- They provide structure and are useful when you know the **exact shape** of your data.

So while an array is flexible, a tuple gives you **predictability** in both the number and type of values it can hold.

---

# 28

---

# Understanding Union Data Type in TypeScript

In this lecture, I'm discussing about **union data type** or **union type** in TypeScript.

---

## Declaring a Union Variable

Now to understand, let me first of all, declare a variable.

I'm declaring a **number data type**.

Now, when I assign a number, it is absolutely valid whether I give the annotation that is the type annotation or even if I do not annotate, then you already know that it will infer this as a number.

There might be a situation where you need a variable which can store **two types of values**.

Let's say I want a variable **a** be capable of storing either a number or a string.

In that case, TypeScript gives me a **pipe sign (`|`)** that is a union where I can decide two or maybe more data types together.

Here, if I want that, this variable can be a number or it can be a string.

I will not assign the value initially.

Here, I'll just say `a = true`.

So now this is something which we have not given. That's why it gives an error here.

It says that **boolean is not assignable to type, string or number**.

Similarly, if I just assign a number here, it doesn't give me any problem.

Or if I convert this into a string, let's say `"hi"`, then also, this will not give any problem.

---

## Why Union Types?

When you want that a variable should be able to handle two or more data types, then you can use a **pipe sign `|`**.

That is the **union type**.

Let's say in this case I want that it should also handle a boolean variable as well.

So I can add a pipe and say **boolean**.

So this is how the union type works.

---

## Union Type in Functions

Similar situation can also be in a function.

Let's say I have a function called **test** and here I have a variable where I can pass a number or a string.

So this function takes one parameter and that can store either number or string.

Union can be used at various places.

Whether you are declaring a variable or when you have function parameters.

Not only in the variable or function, but you can also define an array which can be of union type.

---

## Union Type in Arrays

Let's try that as well.

I'm just showing you the syntax here.

I'll say:

```ts
let r: number[] | string[];
```

So now if I just roll the mouse, you can see that it shows **number array or string array**.

So union type can be included with **variables, function arguments, or even with arrays**.

---

## Interview Questions

1.  **How can you define a variable with more than one data type?**

    - This is how you can do it.
    - You declare a variable with multiple types, that is union.
    - You may have a function like this in which you can have multiple types.
    - Or you may also have an array which can have union data type.

2.  **Is it possible to have an array of union data type?**

    - Yes, of course it is possible.
    - When you declare an array, you can have a number, string, or even a boolean value.
    - For example:

    ```ts
    let arr: (number | string | boolean)[];
    ```

    This means it can have either number, string, or boolean values in an array.

---

✅ So that’s the basics of **union data type** in TypeScript!

---

# 29

---

# Understanding Narrowing in TypeScript

Now let's discuss about one more concept.

When we have discussed with **union types**, there comes another concept called **narrowing**.

Narrowing is showing you how you should deal with data types when you write the code.

---

## Example of Narrowing

Let me show you an example directly.

```ts
function test(a: number | string) {
  // Example usage
  a.toUpperCase(); // ❌ Error: does not exist on type number | string
}
```

Now assume that I have a parameter `a` which can be a number (numeric type) or it can be a string type.

So this is what a **union type** is.

Because `a` can be a number or a string, if I just try any method which is specific to a data type — let's say I give `a.toUpperCase()` for example — it shows me an error.

It says that **`toUpperCase` does not exist on type string or number**, which is not actually the case. It actually does not exist on type number. That’s a fact.

---

## Applying Narrowing with `typeof`

Here, this is where narrowing helps. You can put more validations to make sure that your code is precise.

It is just an approach of **narrowing down to the specific types and putting more validations**.

```ts
function test(a: number | string) {
  if (typeof a === "string") {
    console.log(a.toUpperCase()); // ✅ Works fine
  } else if (typeof a === "number") {
    console.log(a.toFixed(2)); // ✅ Works fine
  }
}
```

- If the type of `a` is `string`, then I can safely apply `.toUpperCase()`.
- If the type of `a` is `number`, then I can safely apply `.toFixed()`.

Now you can see there is no issue at all.

---

## Why Narrowing Matters

If I try applying `toFixed()` outside the `if` condition, it will show me an error because it’s not available for all types.

So the way you write the code using `typeof` and conditions is basically the concept of **narrowing**.

That is:

- You try to **narrow down the types**
- Apply the **methods accordingly**
- Do this by using the **`if` condition** and the **`typeof` operator**

---

## Narrowing in the Official Documentation

If you check the official TypeScript documentation, narrowing is one of the concepts highlighted on the main page.

For example, the docs show that when you have a union type, you take care by using the `typeof` operator.

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

Here, if `typeof padding` is `number`, then it applies something, otherwise it applies something else.

So practically it doesn’t give you any runtime error because JavaScript anyway gets converted, but you are making sure by narrowing that the code has the specific type methods applied.

---

## Type Guards

Here we also have one more thing: **type guards**.

These are just fancy terms. Actually, it is the `typeof` operator which returns these values.

So basically you can compare like I have already written in this code where `string` and `number` are checked.

Of course you can directly `console.log(typeof a)` and you will get these values.

But in the documentation, you’ll see these referred to as **type guards**.

---

## Conclusion

To conclude:

- **Narrowing** is just a concept, but it’s good to know when you are dealing with TypeScript.
- It helps you apply the right methods to the right types.
- You achieve this mainly using **`typeof` checks** (also called **type guards**).

So next time you work with union types, remember to **narrow down** before applying type-specific methods!

---

# 30

---

# Mastering Array Manipulation in JavaScript & TypeScript

When working with arrays, one of the most common tasks is **adding, removing, inserting, or replacing elements**.  
In this blog, we’ll cover all the important questions related to **array manipulation** — a total of six key concepts.

---

## Adding and Removing Elements in an Array

There are four well-known methods to add or remove elements:

- **`push`** → Add elements at the **end**
- **`unshift`** → Add elements at the **beginning**
- **`pop`** → Remove the **last element**
- **`shift`** → Remove the **first element**

Although **`splice`** can also be used, let’s first explore these four.

---

### Push (Add at the End)

```ts
let arr = [1, 2, 3, 4, 5];
console.log(arr.push("test")); // Output: 6 (new length)
console.log(arr); // [1, 2, 3, 4, 5, "test"]
```

👉 The `push` method adds one or more elements at the **end of an array** and returns the **new length**.

---

### Unshift (Add at the Beginning)

```ts
let arr = [1, 2, 3, 4, 5];
console.log(arr.unshift("test")); // Output: 6 (new length)
console.log(arr); // ["test", 1, 2, 3, 4, 5]
```

👉 The `unshift` method adds elements at the **beginning** of an array and also returns the **new length**.

---

### Pop (Remove Last Element)

```ts
let arr = [1, 2, 3, 4, 5];
console.log(arr.pop()); // Output: 5 (removed element)
console.log(arr); // [1, 2, 3, 4]
```

👉 The `pop` method removes the **last element** and returns it.

---

### Shift (Remove First Element)

```ts
let arr = [1, 2, 3, 4, 5];
console.log(arr.shift()); // Output: 1 (removed element)
console.log(arr); // [2, 3, 4, 5]
```

👉 The `shift` method removes the **first element** and returns it.

---

## Inserting, Replacing, and Removing at Specific Positions

The above methods only work on the **first or last elements**.  
But what if you want to **insert**, **replace**, or **remove** at a specific position?

That’s where the powerful **`splice`** method comes in.

---

### Syntax of `splice`

```ts
array.splice(start, deleteCount?, ...items)
```

- **start** → Index where the operation begins
- **deleteCount** (optional) → Number of elements to remove
- **items** (optional) → Elements to insert at that position

👉 It **returns an array of deleted elements**.

---

### Removing All Elements from an Index

```ts
let arr = [1, 2, 3, 4, 5];
console.log(arr.splice(2)); // [3, 4, 5]
console.log(arr); // [1, 2]
```

👉 Removes everything **from index 2 onwards**.

---

### Removing One Element

```ts
let arr = [1, 2, 3, 4, 5];
console.log(arr.splice(2, 1)); // [3]
console.log(arr); // [1, 2, 4, 5]
```

👉 Removes only **one element at index 2**.

---

### Replacing Elements

```ts
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "new");
console.log(arr); // [1, 2, "new", 4, 5]
```

👉 Removes one element and replaces it with `"new"`.

---

### Inserting Without Deleting

```ts
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, "new", "another");
console.log(arr); // [1, 2, "new", "another", 3, 4, 5]
```

👉 Inserts elements at index `2` without deleting anything.

---

### Using `splice` like `push` and `unshift`

```ts
let arr = [1, 2, 3, 4, 5];

// Like push
arr.splice(arr.length, 0, "last");
console.log(arr); // [1, 2, 3, 4, 5, "last"]

// Like unshift
arr.splice(0, 0, "first");
console.log(arr); // ["first", 1, 2, 3, 4, 5, "last"]
```

👉 `splice` can mimic both `push` and `unshift`.

⚠️ Note: `splice` **mutates** the original array.

---

## 6 Common Interview Questions on Array Manipulation

1.  **What is the difference between `push` and `unshift`?**

    - `push` → adds at the **end**
    - `unshift` → adds at the **beginning**

2.  **What is the difference between `pop` and `shift`?**

    - `pop` → removes from the **end**
    - `shift` → removes from the **beginning**

3.  **How can you insert an element at a given position?**

    - Use `splice(index, 0, value)`

4.  **How can you remove a specific element?**

    - Use `splice(index, 1)`

5.  **What does `splice` return?**

    - It returns an array of deleted elements.

6.  **What does `splice` return if no element is removed?**

    - It returns an **empty array**.

---

## Conclusion

Array manipulation is an essential part of working with JavaScript and TypeScript.

- Use `push`, `pop`, `shift`, and `unshift` for simple additions/removals at ends.
- Use `splice` for **inserting, replacing, or removing at specific positions**.
- Remember that `splice` **mutates** the array.

With these methods, you’ll be ready to handle any array manipulation interview question with confidence!

---

# 31

---

# Mastering the TypeScript `map()` Method

In this lecture, we are learning about a very important method called **map**.

The `map()` method is one of those methods like `find`, `filter`, `splice`, etc., which are must-know methods when working with arrays in TypeScript.

---

## Introduction

The **map method** allows us to iterate through an array, transform each element using a callback function, and return a **new array** with the results.

I’ll start with an example and then we will see the syntax as well.

Let’s create an array of a few values:

```typescript
const arr: number[] = [2, 3, 4, 5];
```

Now I will use `arr.map(...)`.

---

## Example 1: Basic Usage with Parameters

The callback function inside `map` receives:

- **element** → the individual value
- **index** → the index number
- **array** → the array reference itself

```typescript
arr.map((element: number, index: number, array: number[]) => {
  console.log(element, index);
});
```

👉 The map method will loop through the entire array, passing each value and its index.

---

## Example 2: Returning a New Array (Squares)

The real power of `map()` lies in the fact that it **returns a new array** without mutating the original one.

Let’s say we want to calculate the **square** of all elements:

```typescript
const arr: number[] = [2, 3, 4, 5];
const squared: number[] = arr.map((element: number) => element * element);

console.log(squared); // [4, 9, 16, 25]
```

👉 Just a single line of code returns a new array containing squares of all elements.

---

## Example 3: Arrow Function Simplification

With TypeScript, we can use arrow functions to make our syntax concise:

```typescript
const arr: number[] = [2, 3, 4, 5];
const squared: number[] = arr.map((el) => el * el);

console.log(squared); // [4, 9, 16, 25]
```

👉 Notice how we don’t need `return` or curly braces if the function body is a single expression.

---

## Syntax of `map()`

The general syntax looks like this:

```typescript
const newArray = array.map((element: T, index?: number, array?: T[]) => {
  // return transformed value
});
```

- `element: T` → each item in the array
- `index?: number` → optional index
- `array?: T[]` → optional reference to the array

The `map` method is **generic**, so TypeScript will infer types automatically.

---

# Practice Questions with Examples

---

### Question 1: Find the length of each string

```typescript
const fruits: string[] = ["apple", "banana", "oranges"];
const lengths: number[] = fruits.map((el) => el.length);

console.log(lengths); // [5, 6, 7]
```

---

### Question 2: Find the square root of each number

```typescript
const nums: number[] = [25, 16, 144, 36];
const roots: number[] = nums.map((el) => Math.sqrt(el));

console.log(roots); // [5, 4, 12, 6]
```

---

### Question 3: Extract product names from objects

```typescript
interface Product {
  pCode: string;
  pName: string;
}

const products: Product[] = [
  { pCode: "P001", pName: "Mobile" },
  { pCode: "P002", pName: "Laptop" },
  { pCode: "P003", pName: "Tablet" },
];

const productNames: string[] = products.map((p) => p.pName);

console.log(productNames); // ["Mobile", "Laptop", "Tablet"]
```

👉 Here, `map` helps extract just one property from each object, transforming the array of objects into an array of strings.

---

# Key Takeaways

- `map()` always returns a **new array**.
- It does **not mutate** the original array.
- The callback receives `element`, `index`, and `array`.
- Works beautifully with arrow functions in TypeScript.
- Very useful when transforming data for rendering in UI or further calculations.

---

✅ The **map method** is one of the most frequently used array methods in real-world TypeScript projects, especially when working with data transformations and rendering in Angular, React, or Node.js applications.

---

# 32

---

# Mastering TypeScript: The Reduce and ReduceRight Methods

In this lecture I'm discussing about **reduce** and **reduce write method**.

The reduce method is also asked in almost all interviews because it's a very useful method.

We saw one example in the map method about finding the square square root or length of each element in all these options.

That is one thing common.  
If you have ten elements, there will be ten results.

But let's say I ask you to get the sum of all elements, then it's a kind of aggregate or accumulative operation that is, the result is combined.

So the **reduce method loops through all the elements and helps you to get one combined result, like sum or other cumulative calculations like product or average.**

---

## Example: Basic Sum with Reduce

Let's check with an example.

I'll declare an array.

```ts
let array = [2, 4, 6, 8];
let result = array.reduce((accumulator, current) => accumulator + current);
console.log(result); // 20
```

It says 20.

So the accumulator holds the accumulated values.

---

## Parameters of Reduce

There are other parameters with this.

- The next parameter is the **index** of the current value
- It passes the **array** on which this loop is going.

So we have these parameters.

Then we also have one more parameter after the callback function.

It is not the this argument. Instead it is the **initial value**.

---

## Using Initial Value

Let's try this as well and remove this array and the index because at the moment it is not needed.

Now let's discuss the initial value.

The **initial value parameter is for the accumulator**.

Earlier we did not give the initial value and that's why the accumulator had zero as initial value and we added the array elements to it.

Suppose I give the initial value ten to the accumulator.

Then what will happen?

It will give us the result as 30 instead of 20 because the total sum was 20. But now the initial value is ten.  
So 20 plus 10 = 30.

This parameter is very useful.

You may initialize the accumulator as an object literal.  
Or if you give like this `[]`, then the accumulator becomes an array.

So you do take care while assigning the initial value as the initial value can make a difference.

---

## Dry Run of Reduce

Where there is no initial value given.

This is how the output will be.

- Accumulator is zero on the first call and the current value will be 2.
- On the second call, the third call and on the fourth call we have the current value 8 and the output is 20.

If we give the initial value 10, then the output will look something like this:  
The accumulator will begin with ten instead of zero.

---

## Other Use Cases

### Product Calculation

How about getting the product?

```ts
let array = [2, 4, 6, 8];
let product = array.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 384
```

So for product, we just put an asterisk sign here that is multiplication sign and instead of showing the sum, it is going to give you the product of these values.

---

### Average Calculation

In fact, we can calculate the average as well.

Let's say we have four elements here and sum is 20.  
So the average is actually 20 divided by the total number of elements.  
That is 20 by 4 = 5.

There might be different values. So we will consider `array.length` as the number of elements.

Let's try to count the average here.

We have the code inside this reduce method, we can put a condition.

```ts
let array = [2, 4, 6, 8, 10];
let average = array.reduce((accumulator, current, index, arr) => {
  accumulator += current;
  if (index === arr.length - 1) {
    return accumulator / arr.length;
  }
  return accumulator;
}, 0);

console.log(average); // 6
```

So when the last element is added to it, and if this condition matches, then we are not going to return the accumulator only. Instead we will return the average value.

---

## Reduce vs ReduceRight

There is also a **reduce write method**.

The only difference is:

- **reduce** loops the array from left to right. That is from zeroth index to array length minus one.
- **reduceRight** moves from right to left. That is, the loop begins with the array length minus one index and goes till zeroth index.

---

## Interview Questions

Now let's talk about questions.

1.  **Get sum of a key field of an object literal.**

    Example: Employees object array → sum of all salaries.

    ```ts
    let employees = [
      { name: "A", salary: 1000 },
      { name: "B", salary: 2000 },
      { name: "C", salary: 3000 },
    ];

    let totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
    console.log(totalSalary); // 6000
    ```

    👉 To solve this, we have to make sure that the accumulator should be zero in the beginning so that it can handle the numeric operations.

---

2.  **Find the average of all elements of an array.**

    We have already seen this.

---

3.  **Find sum or product of all elements.**

    As explained in syntax examples.

---

4.  **What is the difference between reduce and reduceRight?**

    - **reduce** loops through the zeroth element to the last element.
    - **reduceRight** starts the loop from the last element to the zeroth element.

---

🎯 **Conclusion**  
The `reduce` and `reduceRight` methods are powerful tools in TypeScript/JavaScript, useful for sums, products, averages, and aggregating object values. Mastering them is crucial for both real-world coding and interview preparation.

---

# 33

# Mastering TypeScript: Multidimensional Arrays

### Introduction

Now let's talk about the multidimensional arrays.

When you declare an array like this, it creates a row of elements, and this is actually a single dimensional array.

You can also create an array which can contain rows and columns and that is called as multi-dimensional array.

---

### Creating a Multidimensional Array

Let's create a multi-dimensional array and visualize.

```ts
let array: number[][];
```

Now we'll keep it a numeric array.  
And here you give one pair of square brackets. That means it is a row which you are creating.

But the moment you add the pair of brackets, it means that now it is a multi-dimensional array.

- When I say **two pairs of brackets**, then it will be a two dimensional array or a **2D array**.
- But 2D is also an example of multi-dimensional array only.

If you want to create more dimensions, then you can certainly add brackets like this.

---

### Example: 2D Array

To understand in an easier way, let's create a dimensional array that is a **two dimensional array** at the moment.

So first we are going to have a row of array items.

```ts
let array: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
```

Now let me just display the value of the array.

```ts
console.log(array);
```

When you run this, and expand it, you can make out that there are two rows here and each row has three columns.

So practically, if you visualize this, then the **2D array looks something like this**:

```
1  2  3
4  5  6
```

---

### Accessing Elements

If you want to access the value `5`, then it will be:

```ts
console.log(array[1][1]); // Output: 5
```

---

### Array Length in 2D Arrays

```ts
console.log(array.length);
```

This will give the array length.  
And when you run this, it says `2` — that is referring to these two single dimensional arrays.

So if I add more arrays like this, it's going to add to the length.

---

### Looping Through a 2D Array

If you want to loop through this two dimensional array, then you can use the **nested loop** concept because you will have to use:

- one loop for rows
- another loop for columns

Example:

```ts
for (let r = 0; r < array.length; r++) {
  for (let c = 0; c < array[r].length; c++) {
    console.log(array[r][c]);
  }
}
```

This will display all the elements of the array.

---

### Interview Question: How to Flatten a 2D Array?

There is only one question for this topic, and this is asked in almost all interviews:

👉 **How will you flatten a 2D or multidimensional array?**

---

### Flattening Arrays

Flattening an array is basically **converting a multi-dimensional array into a single dimensional array**.

To flatten an array, we have to use the **reduce method**.

The reduce method loops through all the elements and helps you to get one combined result like sum or other accumulative calculations like product or average.

---

### Example: Flatten a 2D Array

```ts
let arr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let flatArr = arr.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flatArr); // [1, 2, 3, 4, 5, 6]
```

Sometimes we also assume that the accumulator is for sure converted into an array.  
So initializing with a square bracket `[]` makes sure that from the beginning the accumulator is an array.

This will also give us the same output.

---

### Conclusion

- A single dimensional array is just a row of elements.
- A **multi-dimensional array** allows us to create rows and columns.
- **2D arrays** are the simplest form of multi-dimensional arrays.
- To traverse them, we use **nested loops**.
- In interviews, the **flattening array problem** is very common — solved using **reduce + concat**.

---

# 34

---

# Traversal in TypeScript

Traversal means we are going to navigate through an array.

We will begin with the most traditional way — **loop till the last element**.

---

## Traditional Traversal using `for` Loop

How do we do that?

Let's say I have an array:

```typescript
let r = [5, 6, 7, 8];
```

Now we have four elements here.

If I want to traverse through this array, then the most common way is:

- We declare a variable which begins with the zeroth index.
- We go till the last element.
- We increment this `i` by one.

Example:

```typescript
for (let i = 0; i < r.length; i++) {
  console.log(r[i]);
}
```

👉 Every time this will refer to index number `0, 1, 2, 3`.

So in the output we get all the elements individually.

This is one of the **very common ways to traverse through** an array.

---

## Traversal in ES6: `for...in` and `for...of`

Each language has its own way or method as well to loop through an array.

For example, in **JavaScript (ES6 onwards)** we have:

- `for...in`
- `for...of`

---

### Using `for...in`

```typescript
for (let element in r) {
  console.log(element);
}
```

👉 Now this is going to loop through individual elements.

But the thing is when you use the **`in` operator**, it is going to return the **index number** and not the value.

Output:

```
0
1
2
3
```

So it doesn't display the value.

That’s why `for...in` is **not commonly used** for array traversal — because when we need to traverse through an array, we usually are concerned with the **values**.

---

### Using `for...of`

To counter this, you have the **`of` operator**.

```typescript
for (let element of r) {
  console.log(element);
}
```

👉 If you use `of`, then it's going to refer to the **value directly** instead of the index number.

Output:

```
5
6
7
8
```

✅ Now all the elements are displayed.

---

## Important Interview Question

**What is the difference between `for...in` and `for...of`?**

- `for...in` → displays the **index**.
- `for...of` → refers to the **value** directly.

---

# 35

---

# Mastering `forEach` in TypeScript

Now I'm going to show you the **for each method**, which is, again, to loop through an array.

---

## Syntax of `forEach`

In this code, I'm going to use the method and I'll say:

```typescript
array.forEach(() => {
  // callback logic
});
```

👉 This actually **takes a callback function as an argument**.

I can use the **traditional syntax** or the **arrow function syntax**.

---

## Using Arrow Function

```typescript
let arr = [5, 6, 7, 8];

arr.forEach((element, index) => {
  console.log(element, index);
});
```

---

## Parameters in `forEach`

There will be a few parameters passed with this callback function:

1.  **The first parameter is the element itself**.

    - That means every time the `forEach` is executed, the element (value) is passed to this parameter.

2.  **The second parameter is the index number**.

    - Every time the loop is executed, the index is passed as the second argument.

Example:

```typescript
arr.forEach((element, index) => {
  console.log("Element:", element, "Index:", index);
});
```

👉 Output:

```diff
Element: 5 Index: 0
Element: 6 Index: 1
Element: 7 Index: 2
Element: 8 Index: 3
```

---

## `this` Argument in `forEach`

The `forEach` takes two arguments:

1.  The array on which the `forEach` is called.
2.  A **this argument** (the `this` object for the callback function).

⚠️ But as we know, when you are using the **arrow function**, the `this` object will not refer to itself.  
So you have to be cautious of which function you are using.

---

## Limitation of `forEach`

One very important thing to remember:

- `forEach` **cannot be stopped in between** like you break the loop.
- If you have a situation where you want to come out of a loop in between, then `forEach` is **not the method you should use**.

---

## Interview Questions

### Q1: What will be the output of the below given code?

```typescript
arr.forEach((element, index) => {
  if (index === 2) {
    break; // trying to break
  }
  console.log(element);
});
```

👉 As mentioned earlier, you cannot break the `forEach` loop.

It will go through the **entire array**.

When you say _I want to come out when the index is equal to two_ and you use the `break` statement, it is going to give you the error:

```kotlin
Illegal break statement
```

---

### Q2: What will be the output of the below statements?

```typescript
console.log(arr[3]);
```

👉 This will display:

```javascript
undefined;
```

Because there is no such thing called `array[3]`.  
We only have indices `0, 1, 2` since the array length is **3**.

---

🎯 **Watch, learn & practice TypeScript basics to advanced concepts & crack any interview!**

---

# 36

---

# Searching Elements in Arrays in TypeScript

Searching elements in an array is a very common task in programming.

JavaScript gives various methods to perform search.

The same is the case with TypeScript.

We will begin with three methods:

- **indexOf**
- **lastIndexOf**
- **includes**

---

## 1\. The `indexOf` Method

The syntax of index of is like this:

You have the array name and you apply the index of method.

It takes two parameters:

- The first is the element you want to search for.
- The second parameter is the **START index**, which is optional.

It denotes the beginning index.

If it is given zero, it will search from the beginning, but default is zero, so no need to specify.

👉 This method returns the index number where the item is found.

If the searched element does not exist in the array, then it will return **\-1**.

And if there are more than one matches found, it will return the index of the **first item found**.

---

## 2\. The `lastIndexOf` Method

The last index is similar in terms of syntax, but it returns the **last index** of the found element.

Otherwise it is absolutely same as index of.

If the starting index is given, then it will search from there.

But by default start index is **array length minus one**.

---

## 3\. The `includes` Method

The syntax of the includes method is something like this.

It is similar to index of, but it returns a **boolean value**.

That is:

- `true` if the element is found
- `false` if the element is not found

These three are very common, very basic methods which we are going to try right now.

---

## Practical Example

Let’s say we have this array which has few elements getting repeated, like one is repeated three times in the array.

```ts
let RR = [1, 2, 3, 1, 4, 1, 5];
```

### Example: `indexOf`

```ts
console.log(RR.indexOf(1));
```

Output:

```
0
```

One is found on the zeroth index, so it returns **0**.

By default, the starting index is zero.

---

If we start from index `3`:

```ts
console.log(RR.indexOf(1, 3));
```

Output:

```
5
```

---

If element not found:

```ts
console.log(RR.indexOf("o" as any));
```

Output:

```diff
-1
```

This proves that `indexOf` searches case-sensitive values.

---

### Example: `lastIndexOf`

```ts
console.log(RR.lastIndexOf(1));
```

Output:

```
5
```

Because `lastIndexOf` starts searching from the end.

We can also specify a starting index:

```ts
console.log(RR.lastIndexOf(1, 3));
```

Output:

```
2
```

---

### Example: `includes`

```ts
console.log(RR.includes(1, 3));
```

Output:

```arduino
true
```

If the element is not found:

```ts
console.log(RR.includes("any" as any));
```

Output:

```arduino
false
```

---

## Conditional Searches

So these three methods are easier ways to search, but there can be more complex searches like **conditional search**.

For example, you have an array of salary and want to get all elements where salary is more than 3000.

Then you can use the `find` method, `findIndex` method, or sometimes even a better method called `filter`.

---

## 4\. The `find` Method

The syntax of the find method is something like this.

It is going to return a value.

```ts
let salary = [2000, 2500, 4500, 5500, 7800];

let result = salary.find((element) => {
  return element > 3000;
});

console.log(result); // 4500
```

It only finds **one value** (the first match) and stops searching.

---

## 5\. The `findIndex` Method

This is absolutely the same as find.

But instead of returning the value, it returns the **index number**.

```ts
let result = salary.findIndex((element) => element > 3000);
console.log(result); // 2
```

---

## 6\. The `filter` Method

The problem with find and findIndex is they only find one value at a time.

If you want to get **all values** which are more than 3000, the best way is to use the `filter` method.

```ts
let result = salary.filter((element) => element > 3000);
console.log(result); // [4500, 5500, 7800]
```

👉 The filter method returns a **new array** of all matching values.

---

## Comparison of Outputs

- If no true value found:

  - **find → undefined**
  - **findIndex → undefined**
  - **filter → \[\] (empty array)**

---

## Interview Questions

1.  **What’s the difference between find and filter method?**

    - find returns only one value (the first match).
    - filter returns a new array of all matches.

2.  **If there is no value to return, what will the find index return?**

    - undefined.

3.  **What is the difference between indexOf and includes method?**

    - indexOf returns the index.
    - includes returns a boolean (true/false).

4.  **How will you search multiple values in an array?**

    - By using filter.

5.  **What will be the output if lastIndexOf is applied but the element is not found?**

    - `-1`.

---

#### Final Thoughts

Apart from these methods, there are many other ways you can implement to search elements in an array, but these are the most commonly used methods.

# 37

---

# Mastering the JavaScript `sort()` Method

Sorting an array is a very common task in all programs.  
We often expect the arrangement of values in ascending or descending order, and this is where the `sort()` method is used.

---

## Basic Example of Sorting

Let’s check a code sample.

We have an array with values: **banana, orange, grapes, apple**.

```javascript
let products = ["banana", "orange", "grapes", "apple"];
let r = products.sort();

console.log(r);
console.log(products);
```

When you run this, both `r` and `products` are sorted.

This is because the `sort()` method **returns the sorted array**, but at the same time it **sorts the original array itself**. That means both variables refer to the same sorted array.

So, instead of keeping a separate variable, it’s better to directly use `products.sort()`.

---

## Sorting in Descending Order

By default, `sort()` arranges values in ascending order.  
If you want to sort in **descending order**, you can pass a callback function called the **compare function**.

Example:

```javascript
products.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});
```

Here’s how the compare function works:

- If it returns `-1` → `a` comes before `b`
- If it returns `1` → `b` comes before `a`
- If it returns `0` → No change

---

## Sorting Numeric Arrays

Now, let’s consider numbers instead of strings:

```javascript
let price = [45, 23, 1089, 5];
console.log(price.sort());
```

The output will not be correct — numbers are treated as strings, so `5` does not appear first.

To fix this, we must use a compare function:

```javascript
price.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
```

This sorts the numbers in ascending order.

For descending order, just reverse the conditions:

```javascript
price.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});
```

---

## Special Cases with `sort()`

### 1\. Sorting Arrays with `undefined`

If the array contains `undefined`, it is always placed at the end:

```javascript
let products = ["banana", undefined, "apple", "orange"];
console.log(products.sort());
```

Output:  
`undefined` always appears at the end.

---

### 2\. Sorting Object Literals

Suppose you have an array of objects and want to sort them by salary:

```javascript
let employees = [
  { id: 1001, salary: 3000 },
  { id: 1002, salary: 2000 },
  { id: 1003, salary: 2200 },
];

employees.sort((a, b) => {
  if (a.salary < b.salary) return -1;
  if (a.salary > b.salary) return 1;
  return 0;
});

console.log(employees);
```

The employees are now sorted by their `salary` field.  
Notice that the **entire object** moves when sorting — not just the `salary`.

---

### 3\. Reminder for Numeric Arrays

Always use a compare function when sorting numbers.  
Without it, numbers will be treated as strings and give incorrect results.

---

### 4\. Sorting in Descending Order

To sort in descending order, just swap the return values:

```javascript
arr.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});
```

---

## Recap

- `sort()` sorts arrays in place.
- Default behavior treats elements as strings (Unicode comparison).
- Use a **compare function** for:

  - Numbers
  - Descending order
  - Custom object sorting

---

# 38

---

# Understanding ES6 Array Destructuring

Now let's talk about one of the very important ES6 features — **Destructuring**.

Right now, we are discussing **array destructuring**.

---

## What is Destructuring?

When we say _destructure_, something is being broken down. That “something” is basically the **data structure**.

So, destructuring is the concept of breaking data structures like arrays or object literals into smaller data pieces — or in other words, into **individual variables**.

In this lecture, we are focusing on **array destructuring**.  
(For object literal destructuring, you can check the _Object-Oriented TypeScript_ section.)

---

## Traditional Assignment vs Destructuring

Suppose you have an array of four elements.  
Traditionally, if you want to assign each element to a variable, you would write:

```javascript
let arr = [80, 90, 93, 26];

let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];
```

Instead of doing this, **array destructuring** provides a cleaner way:

```javascript
let [a, b, c, d] = [80, 90, 93, 26];
console.log(a, b, c, d);
```

👉 All values are automatically extracted and assigned to individual variables.

---

## Important Note

When you see square brackets `[]` on the **left-hand side** of an assignment, it’s **not an array** — it’s **destructuring syntax**.

---

## Destructuring with Functions

An array may also be returned by a function.  
For example:

```javascript
function test() {
  return [80, 90, 93, 26];
}

let [a, b, c, d] = test();
console.log(a, b, c, d);
```

The function returns an array, which is then destructured into variables.

👉 Don’t get confused when you see a list of variables with a function — it simply means the function is returning an array that’s being destructured.

---

## Skipping Elements

Sometimes, you may want to skip certain values.

```javascript
let [a, , c, d] = [80, 90, 93, 26];
console.log(a, c, d); // 80 93 26
```

Here, the second value (`90`) is skipped.

---

## Swapping Variables with Destructuring

A very interesting use case is **swapping values**:

```javascript
let a = 4;
let b = 5;

[a, b] = [b, a];

console.log(a, b); // 5 4
```

Traditionally, we used a third variable to swap values. With destructuring, it’s much cleaner.

---

## Using Rest Operator with Destructuring

You can also use the **rest operator (`...`)**:

```javascript
let [a, ...r] = [4, 5, 6];
console.log(a); // 4
console.log(r); // [5, 6]
```

Here, `a` gets the first value, while `r` collects the remaining ones.

---

## Default Values in Destructuring

If the array doesn’t contain enough values, destructured variables will be `undefined`.

Example:

```javascript
let [a, b = 0] = [4];
console.log(a, b); // 4 0
```

If the second value is missing, `b` defaults to `0`.  
But if the value exists:

```javascript
let [a, b = 0] = [4, 6];
console.log(a, b); // 4 6
```

---

## Interview-Style Questions

1.  **What is destructuring assignment?**  
    It’s about extracting pieces of data from an array (or object) and assigning them to variables.
2.  **How do you swap values using destructuring?**

    ```javascript
    [a, b] = [b, a];
    ```

3.  **What happens when there are fewer values than variables?**  
    Missing values become `undefined`.
4.  **How do you assign default values in destructuring?**  
    By specifying `= value` in the destructuring syntax.

    Example:

    ```javascript
    let [a, b = 0] = [4];
    console.log(b); // 0
    ```

---

## Recap

- Destructuring allows clean extraction of array values into variables.
- You can skip values, swap variables, and even use the rest operator.
- Default values help handle missing data gracefully.
- It’s a powerful ES6 feature that makes code concise and readable.

---

# 39

---

# Understanding Functions in TypeScript

Now we are going to begin with **understanding functions**.

A **function** is a subprogram which can be called as and when required.

In JavaScript, functions are very useful and, in some cases, syntactically different as well.  
For example, before JavaScript had classes, **functions were used as constructors**, essentially acting as classes. This concept of a **constructor function** is also applicable in TypeScript.

Almost the same lineage of JavaScript is followed in TypeScript. However, with TypeScript, functions are even **stricter** and behave in a more traditional way.

---

## Declaring a Function in TypeScript

To declare a function, we use the `function` keyword, followed by the function name and parentheses.

Example:

```typescript
function sum() {
  console.log("Function called");
}
```

- The code inside `{ }` is the **body of the function**.
- To call the function, simply use its name followed by parentheses:

```typescript
sum();
sum();
```

Output:

```sql
Function called
Function called
```

---

## Function Parameters

Most functions receive arguments which are processed, and optionally return a value.

In TypeScript, you define parameters by just giving the **parameter name**, optionally annotating the **data type**:

```typescript
function sum(a: number, b: number) {
  return a + b;
}

let answer = sum(5, 6);
console.log(answer); // 11
```

- `a` and `b` are **parameters** of type `number`.
- The function **returns the sum** of `a` and `b`.
- TypeScript infers the **return type** automatically (`number` in this case).

---

## Returning Values

You can explicitly annotate the return type:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
```

- This ensures TypeScript knows the function **returns a number**.
- If no `return` statement exists, the function returns `undefined` by default.

Example:

```typescript
function test() {
  console.log("Test");
}

let a = test();
console.log(a); // undefined
```

- `console.log(a)` prints `undefined` because the function has no return value.
- If a function **does not return anything**, the TypeScript return type can be annotated as `void`.

---

## TypeScript vs JavaScript Functions

TypeScript functions provide **strict typing** for parameters and return types:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
```

- Each **parameter has a type**.
- The **function return type** is explicitly declared.
- This adds safety and avoids unexpected behavior compared to plain JavaScript functions.

Later, we will also discuss **function types**, which allow more advanced typing for functions in TypeScript.

---

# 40

# Understanding Anonymous Functions in TypeScript

In this lecture, we are going to discuss **anonymous functions** in TypeScript.

This concept is essentially the **function expression** concept from JavaScript, which can also be used in TypeScript.

---

## What is an Anonymous Function?

JavaScript provides a variety of ways to create and work with functions. One of the most commonly used ways is **function expressions** — the same applies to TypeScript.

Let’s understand **why it is called anonymous**.

---

## Traditional Named Function

A typical function has a name, parameters, and a body. For example:

```typescript
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(5, 6));
```

- The function has a name (`sum`).
- You call the function by its name.

---

## Anonymous Function / Function Expression

In JavaScript and TypeScript, you can write a function **without a name** and assign it to a variable.

```typescript
let sum = function (a: number, b: number): number {
  return a + b;
};

console.log(sum(5, 6));
```

- The function **does not have a name**.
- The entire function is **assigned to a variable** (`sum`), which is an **object of type function**.
- You call the function using this variable.

---

## Checking the Type

You can check the type of the variable holding the anonymous function:

```typescript
console.log(typeof sum); // function
```

- The variable `sum` is of **type function**, not a numeric type.
- This demonstrates that **anonymous functions are objects that reference a function**.

---

## Why Use Anonymous Functions?

Anonymous functions are widely used in **JavaScript and TypeScript** for:

- Passing functions as arguments to other functions.
- Storing functions in variables.
- Creating **inline logic** without polluting the namespace with function names.

---

## Common Questions

1.  **How do you invoke an anonymous function?**  
    Even though the function has no name, it is assigned to a variable. This variable **acts as a pointer** to the function, and you call the function using the variable name:

    ```typescript
    let sum = function (a: number, b: number) {
      return a + b;
    };

    console.log(sum(5, 6));
    ```

2.  **What is the type of an anonymous function variable?**  
    If you check `typeof sum`, it will show `function`. The variable **contains a reference to the function**, not the return type of the function itself.

---

# 41

---

# Understanding Arrow Functions in TypeScript

In this lecture, we are going to discuss a very important concept in modern JavaScript and TypeScript — **arrow functions**.

Arrow functions, also called **fat arrow functions**, were introduced in ES6. Some people refer to them as **lambda functions** due to influence from other programming languages, but JavaScript and TypeScript use the term **arrow function**.

---

## What is an Arrow Function?

An arrow function is essentially **a more concise way to write a function**.

- There is a slight behavioral difference compared to traditional functions, especially with the `this` object (which we will explore later).
- Arrow functions are often less cumbersome to write than traditional functions.

---

## Syntax of Arrow Functions

### Traditional Function Expression

```typescript
let sum = function (a: number, b: number): number {
  return a + b;
};
```

- This is an **anonymous function** stored in a variable.

### Arrow Function

To convert a function expression into an arrow function:

```typescript
let sum = (a: number, b: number): number => {
  return a + b;
};
```

- The `function` keyword is removed.
- Parentheses contain parameters.
- An **arrow (`=>`)** separates parameters from the function body.

You call the arrow function the same way as a normal function:

```typescript
console.log(sum(5, 6)); // 11
```

---

## Arrow Function with No Return Value

If a function does not return anything, you can specify `void` as the return type:

```typescript
let greet = (): void => {
  console.log("Arrow function called");
};
```

- The function can be invoked in the same way:

```typescript
greet(); // Arrow function called
```

---

## Arrow Function with Single Line

If the function contains a **single expression**, you can simplify it further:

```typescript
let sum = (a: number, b: number): number => a + b;
console.log(sum(4, 7)); // 11
```

- Curly brackets `{}` and `return` statement are **not needed**.
- This syntax is **easier to read and write**.

---

## Advantages of Arrow Functions

1.  **Concise syntax** — fewer lines of code.
2.  **Easier readability**, especially for single-line functions.
3.  **No issues with single-line returns** — you don’t need `{}` or `return`.
4.  **Lexical `this` binding** — differs from traditional functions (covered in object-oriented TypeScript section).

---

## Common Questions

**Explain the arrow function syntax:**

- **No parameters, void return:**

  ```typescript
  let fn = (): void => console.log("Hello");
  ```

- **With parameters, returning a value:**

  ```typescript
  let sum = (a: number, b: number): number => a + b;
  ```

- **Single-line concise version:**

  ```typescript
  let double = (x: number): number => x * 2;
  ```

- Discuss the `this` object behavior if asked — it behaves differently than traditional functions.

---

# 42

---

# Default and Optional Parameters in TypeScript

In this lecture, we are going to discuss **default and optional parameters** in TypeScript.

When creating a function with parameters, sometimes you need **default values** in case no value is passed to the function. This feature was introduced in **ES6** and is fully supported in TypeScript.

---

## Default Parameters

Let’s take an example:

```typescript
function multiply(A: number = 1, B: number = 1): number {
  return A * B;
}

console.log(multiply()); // 1
console.log(multiply(5, 4)); // 20
```

### How it works:

- If no values are passed to `A` or `B`, they **default to 1**.
- If values are provided, the default values are ignored.

**Key points:**

- Default values are specified **after the data type annotation** with an `=` sign inside the function parameter list.
- This works for **numbers, strings**, or any data type:

```typescript
function greet(msg: string = "Hi"): string {
  return msg;
}

console.log(greet()); // Hi
console.log(greet("Hello")); // Hello
```

---

### Default Parameters with Arrow Functions

The default parameter feature also works seamlessly with **arrow functions**:

```typescript
let multiply = (A: number = 1, B: number = 1): number => A * B;

console.log(multiply()); // 1
console.log(multiply(5, 4)); // 20
```

---

## Optional Parameters

Sometimes, you want a parameter to **be optional**, meaning it may or may not be passed when the function is called.

```typescript
function sayHi(A: string, B?: string): void {
  console.log(A, B);
}

sayHi("Hello"); // Hello undefined
sayHi("Hello", "TS"); // Hello TS
```

### How it works:

- The **`?` symbol** marks the parameter as optional.
- If the parameter is not passed, its value is **`undefined`**.
- Optional parameters are useful when you do not want TypeScript to throw an error for missing arguments.

**Key points:**

- Optional parameters **cannot have default values** at the same time.
- TypeScript infers the type as a union: `string | undefined`.

---

## Common Questions

1.  **How do you pass default values to function parameters?**

    - After the data type annotation, use `=` to assign a value in the parameter list.

2.  **What is the advantage of optional parameters?**

    - When calling a function, TypeScript **will not throw an error** if the optional parameter is missing.

---

# 43

---

# Rest Operator in TypeScript

In this lecture, we are discussing another modern JavaScript feature that is fully supported in TypeScript — the **rest operator**.

This is a very useful feature for handling **multiple parameters** in a function, especially when you are unsure about the number of arguments.

---

## Understanding the Syntax

Consider the following example:

```typescript
function test(a: number, ...b: number[]): void {
  console.log(a);
  console.log(b);
}

test(1, 3, 6, 8, 9);
```

### How it works:

- The `...b` syntax is called the **rest operator**.
- It collects all remaining arguments into an **array**.
- Here, `a` will hold the first value (`1`) and `b` will hold the rest `[3, 6, 8, 9]`.
- In TypeScript, you must annotate the **rest parameter as an array** type, e.g., `number[]`.

---

### Key Points

- The rest operator allows **variable number of arguments** to be treated as an array.
- The same three dots syntax is called **spread operator** when used in arrays outside function parameters.
- This feature works exactly the same in TypeScript as in JavaScript.

---

## Practical Examples

### 1\. Sum of Any Number of Numbers

Create a function that can take any number of numeric values and return their sum:

```typescript
function sum(...numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum(4, 5, 6)); // 15
console.log(sum(1, 60, 10)); // 71
```

- Here, `numbers` is a **rest parameter** and is treated as an array.
- You can iterate over it or use array methods like `reduce()` to calculate the sum.

---

### 2\. Display Any Number of Names

Create a function that takes any number of string arguments and displays them **separated by a comma**:

```typescript
function showNames(...names: string[]): void {
  console.log(names.join(","));
}

showNames("first", "second"); // first,second
showNames("third"); // third
```

- Here, `names` is a string array created by the rest operator.
- The `join(',')` method combines the elements into a single string separated by commas.

---

### Summary

- The **rest operator (`...`)** allows functions to accept **any number of parameters**.
- In TypeScript, rest parameters **must be typed as arrays**.
- Useful for scenarios like summing numbers or listing values dynamically.
- Works seamlessly with both numbers and strings.

---

# 44

---

# Function Types in TypeScript

In this lecture, we are discussing a very important concept called **function types**, which has been mentioned multiple times throughout our TypeScript discussions.

Function types are crucial when you want to **define the signature of a function** that a variable will hold.

---

## Understanding Function Types

So far, we have seen various ways to work with functions, including **function expressions**, where we assign an anonymous function to a variable:

```typescript
let sum = function (x: number, y: number): number {
  return x + y;
};
```

- Here, `sum` is a variable pointing to an anonymous function.
- The function has **two numeric parameters** and returns a **numeric value**.
- `sum` itself acts as a reference to this function.

---

## Assigning Functions to Variables

You can also assign a function to another variable:

```typescript
function sumFunction(a: number, b: number): number {
  return a + b;
}

let calculator: any = sumFunction;
console.log(calculator(5, 6)); // 11
```

- Initially, `calculator` is of type `any`, so you can assign anything to it.
- If you assign a numeric value like `6`, TypeScript will highlight an error when trying to call it as a function:

```typescript
calculator = 6; // Error: Type 'number' has no call signatures
```

This is where **function types** become handy.

---

## Defining Function Types

You can define a variable to **only hold a function with a specific signature**:

```typescript
let calculator: (x: number, y: number) => number;

calculator = sumFunction; // ✅ Works because sumFunction matches the signature
calculator = 6; // ❌ Error: Type 'number' is not assignable to type 'function'
```

- Here, `calculator` is explicitly typed as a function taking **two numbers** and returning a **number**.
- TypeScript ensures that no other type can be assigned.

---

## Function Types with Anonymous Functions

You can also directly use function types with anonymous functions:

```typescript
let sum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(sum(5, 6)); // 11
```

- The **type annotation** `(x: number, y: number) => number` ensures that only a function matching this signature can be assigned to `sum`.

---

## Example with Strings

Function types also work for functions returning other types:

```typescript
let fullName: (firstName: string, lastName: string) => string = function (
  fName: string,
  lName: string
): string {
  return fName + lName;
};

console.log(fullName("A", "B")); // AB
```

- Here, `fullName` is typed to **accept two strings** and **return a string**.
- This enforces **type safety** and avoids accidental assignments of incompatible values.

---

## Key Points

- **Function types** define the **signature** of a function before assigning it to a variable.
- They ensure that only functions matching the defined **parameters and return type** can be assigned.
- Helps in avoiding errors like assigning a number or string to a variable that should hold a function.

---

### Relative Question

**Q:** What is a function type in TypeScript?

**A:** A function type defines the **signature of a function** for a variable. It specifies **what parameters the function should accept and what type it should return**, ensuring type safety when assigning functions to variables.

---

🎯 **Play, Watch, Learn & Practice TypeScript basics to advanced concepts — and crack any interview!**

---

# 45

---

# Function Overloading in TypeScript

Another important concept in TypeScript is **function overloading**.

Function overloading is a common feature in many programming languages, and TypeScript fully supports it.

In contrast, JavaScript does not need explicit function overloading due to its dynamic nature.

---

## What is Function Overloading?

Function overloading allows you to define **multiple signatures** for a function with the same name, but different parameter types or numbers of parameters.

Depending on the type of arguments passed, the appropriate function signature is applied.

---

## Syntax and Example

Let's create an `add` function that can accept either numbers or strings:

```typescript
// Function overload signatures
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Actual function implementation
function add(a: any, b: any): any {
  return a + b;
}

// Calling the function with numbers
console.log(add(5, 6)); // 11

// Calling the function with strings
console.log(add("hi", " there")); // hi there
```

---

### Explanation

1.  **Overload Signatures**:

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
```

- These define the **different ways the function can be called**.
- The first signature handles **numbers**, the second handles **strings**.
- These are called **overload declarations**.

2.  **Implementation Signature**:

```typescript
function add(a: any, b: any): any {
  return a + b;
}
```

- This is the **actual function definition** that handles all cases.
- The `any` type is used to allow **flexible input types**.
- The `+` operator works for both **addition** (numbers) and **concatenation** (strings).

3.  **Function Calls**:

```typescript
console.log(add(5, 6)); // Outputs: 11
console.log(add("hi", " there")); // Outputs: hi there
```

- TypeScript checks the call against the **overload signatures**.
- Proper type checking ensures that your function behaves correctly based on the arguments passed.

---

### Key Points

- Function overloading allows a single function name to handle **different types or numbers of parameters**.
- TypeScript uses **overload signatures** to define possible input-output types.
- The **actual function implementation** is flexible (often using `any`) to handle all overloads.
- Helps in **type safety** while still supporting versatile function behavior.

---

### Relative Question

**Q:** How do you overload a function in TypeScript?

**A:** By defining multiple **overload signatures** with different parameter types or counts, and then providing a **single implementation** that handles all cases.

---

# 46

---

# Understanding Enums in TypeScript

In this section, we are discussing **Enums** in TypeScript, also known as **enumerations**.

An **enum** allows you to define **named constants**, which are a collection of fixed values.

> **Note:** Do not confuse enums with `const` variables. While `const` defines a single constant value, enums are a **group of related constants**.

---

## What is an Enum?

- An **enum** is a way to give more friendly names to sets of numeric or string values.
- Enums can be **numeric**, **string**, or **heterogeneous** (mix of numbers and strings).
- They help reduce errors and make code more readable by providing **auto-completion suggestions** in editors.

---

## Numeric Enum Example

```typescript
enum Workdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

console.log(Workdays); // {0: "Monday", 1: "Tuesday", 2: "Wednesday", ...}
console.log(Workdays.Monday); // 0
```

- By default, enum values are **numeric**, starting from `0` and incrementing automatically.
- Advantages:

  - Auto-incremented numeric values
  - Editor suggestions reduce typos
  - Meaningful names improve readability

---

### Custom Numeric Values

```typescript
enum Workdays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

console.log(Workdays.Monday); // 1
console.log(Workdays.Tuesday); // 2 (auto-incremented from 1)
```

- You can start from any number.
- Auto-increment continues from the **last assigned value**.

---

### Individual Numeric Assignment

```typescript
enum Workdays {
  Monday = 1,
  Tuesday = 3,
  Wednesday,
  Thursday,
  Friday,
}

console.log(Workdays.Wednesday); // 4
```

- Monday is `1`, Tuesday is `3`.
- Wednesday automatically becomes `4` (incremented from the last assigned value).

---

## String Enum Example

```typescript
enum Workdays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

console.log(Workdays.Monday); // "Monday"
```

- String enums assign **custom string values** to each member.
- There is **no automatic numeric assignment** with string enums.

---

## Heterogeneous Enum Example

```typescript
enum Workdays {
  Monday = 1,
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

console.log(Workdays.Monday); // 1
console.log(Workdays.Tuesday); // "Tuesday"
```

- You can mix **numbers and strings** in a single enum.
- TypeScript allows this flexibility, though it’s generally recommended to stick to **one type**.

---

## Advantages of Enums

1.  **Reduces errors**: Auto-completion in editors prevents typos.
2.  **Named constants**: Makes code more readable and meaningful.
3.  **Compile-time existence**: Enums exist at compile-time and don’t allocate extra memory.
4.  **Flexible assignment**: Can be numeric, string, or heterogeneous.

---

## Common Questions

**Q1:** What is an enum and how do you create it in TypeScript?  
**A:** An enum is a collection of named constants. Use the `enum` keyword to define numeric, string, or heterogeneous enums.

**Q2:** Explain the advantages of enums.  
**A:** Enums provide readable constants, reduce errors with editor suggestions, and can represent multiple values with meaningful names.

**Q3:** What will be the value of `Wednesday`?

```typescript
enum Workdays {
  Monday = 1,
  Tuesday = 3,
  Wednesday,
  Thursday,
  Friday,
}
```

**A:**

- Monday = 1
- Tuesday = 3
- Wednesday = 4 (auto-increment from last assigned value)
- Thursday = 5
- Friday = 6

---

# 47

---

# Understanding Computed Enum Members in TypeScript

In the previous lecture, we learned about **enums** and their basic usage.

- All the examples we saw had **fixed values** assigned to enum members.
- For example:

```typescript
enum Workdays {
  Monday, // 0
  Tuesday, // 1
  Wednesday, // 2
  Thursday, // 3
  Friday, // 4
}
```

- You can also start enums from a custom number:

```typescript
enum Workdays {
  Monday = 1, // 1
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
}
```

- You can even assign specific numbers individually:

```typescript
enum Workdays {
  Monday = 1,
  Tuesday = 3,
  Wednesday, // 4
  Thursday, // 5
  Friday, // 6
}
```

- All these values are **constants**—fixed at compile time.

---

## What are Computed Enum Members?

TypeScript also allows **dynamic values** in enums.  
These are called **computed enum members**, where the value is **calculated or derived** instead of being a constant.

---

### Example 1: Using a Function as Enum Member

```typescript
enum AppData {
  AppVersion = 1.0, // constant
  DT = Date.now(), // computed value
}

console.log(AppData.AppVersion); // 1
console.log(AppData.DT); // e.g., 1734234234234
```

- `AppVersion` is a fixed value.
- `DT` is computed dynamically using `Date.now()`.
- You can convert it to a readable date format if needed.

---

### Example 2: Computed Values Using Functions

```typescript
let a: number = 5;
let b: number = 6;

enum Results {
  Sum = sum(a, b), // computed
  Prod = prod(a, b), // computed
}

function sum(x: number, y: number): number {
  return x + y;
}

function prod(x: number, y: number): number {
  return x * y;
}

console.log(Results.Sum); // 11
console.log(Results.Prod); // 30
```

- Here, `Sum` and `Prod` are **computed enum members**.
- Instead of assigning constants, we call functions to calculate values dynamically.

---

## Key Takeaways

1.  **Computed enum members** allow you to assign values dynamically.
2.  You can call a function or perform a calculation to assign an enum member.
3.  This provides **flexibility** compared to constant enum members.
4.  Computed values are **evaluated at runtime**, unlike constant enum members which are fixed at compile time.

---

# 48

---

# Enum Reverse Mapping in TypeScript

When working with **enums** in TypeScript, there is an important behavior called **reverse mapping**.

---

## Example: Numeric Enum

```typescript
enum Workdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}
```

- By default, numeric enums start from `0` and increment automatically.
- When this TypeScript enum is compiled to JavaScript, the generated code **includes reverse mapping**.

  - This means you can get the value from the enum member name.
  - You can also get the enum member name from its numeric value.

---

### Accessing Enum Members

```typescript
console.log(Workdays.Wednesday); // Output: 2
console.log(Workdays["Wednesday"]); // Output: 2
console.log(Workdays.Friday); // Output: 4
```

- Both `Workdays.Wednesday` and `Workdays["Wednesday"]` return the numeric value.
- This demonstrates **forward mapping** (name → value) and **reverse mapping** (value → name) in numeric enums.

---

## How Reverse Mapping Works

- When compiled, enums are transformed into **JavaScript objects**.
- The object stores:

  1.  **Forward mapping**: name → value
  2.  **Reverse mapping**: value → name

```javascript
// Example of compiled enum object
{
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4
}
```

- This is why you can access the enum both ways.

---

## Important Note About String Enums

- **Reverse mapping does not work for string enums**.

```typescript
enum Workdays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

console.log(Workdays.Monday); // "Monday"
console.log(Workdays["Monday"]); // undefined
```

- When enum values are strings, only the **forward mapping** exists.
- This is a key distinction when using enums in TypeScript.

---

### Summary

1.  Numeric enums provide **reverse mapping** automatically.
2.  You can access enum members by **name** or by **numeric value**.
3.  Reverse mapping **does not exist for string enums**.
4.  Enums are compiled into **JavaScript objects** storing both mappings for numeric enums.

---

# 49

---

# Constant Enums and Ambient Enums in TypeScript

In this section, we discuss two important enum concepts in TypeScript: **constant enums** and **ambient enums**.

---

## 1\. Constant Enums (`const enum`)

- Regular enums in TypeScript generate additional JavaScript code during compilation.
- Sometimes, this generated code can be unnecessarily large, even for simple enums.
- To reduce the compiled code size, you can declare the enum as `const`.

### Example: Regular Enum vs Constant Enum

```typescript
enum Workdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

let weekStart = [Workdays.Monday, Workdays.Tuesday];
```

- In the above code, compiling it generates extra JavaScript code to create the enum object.
- To reduce this overhead, declare it as a constant enum:

```typescript
const enum Workdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

let weekStart = [Workdays.Monday, Workdays.Tuesday];
```

- The generated JavaScript **does not include the enum object**.
- The array `weekStart` directly contains the numeric values of the enum members.
- ✅ This is useful when you want lighter, cleaner compiled JavaScript without extra enum code.

> Note: Using `const enum` is not always necessary but is helpful for performance and reducing compiled file size.

---

## 2\. Ambient Enums (`declare enum`)

- Ambient enums are used when the enum **already exists somewhere else** (predefined), and you just want to use it in your current TypeScript code.
- They are declared using the `declare` keyword.

### Example: Ambient Enum

```typescript
declare enum Workdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}
```

- This declaration does **not generate any JavaScript code**.
- It tells TypeScript: "Assume this enum exists somewhere, and I want to reference it here."
- ✅ Ambient enums are ideal for describing the shape of existing enum types from external libraries or other files.

---

# 50

---

# Object-Oriented Approach in TypeScript

In this section, we will explore the **object-oriented approach** with implementation in TypeScript.  
The initial few lectures are with reference to JavaScript, as it is the base.

We will also learn a few ES6 features used with objects, and then, from the classes lecture, we will switch to the TypeScript playground.

---

## The Concept of Object Literal

There are many ways to create an object in JavaScript (capital “O” class object).  
Here we are discussing the most essential way of object creation — the **object literal**.

The basic idea of object creation is that we are creating a **container to bundle data pieces**.

### Real-World Analogy

Imagine you have a table with items like a pen, pencil, sharpener, eraser, and many more things.  
If you want to take them from one place to another, it’s better to use a **box (container)**.

Similarly, when you have different data pieces that you may want to pass to a function or to a server, you bundle the data pieces in an **object** and pass it.

So, an object allows you to create a container where you can put variables and even functions.

---

## Example: Passing Product Data

Suppose you have:

- Product code
- Product name
- Price
- Other fields

If you want to pass this data to a function, instead of multiple parameters, you can use an object.

---

## Object Literal Syntax

To create an object literal:

```typescript
let obj = {};
```

This means you have created an **empty object literal**.

### Adding Properties

```typescript
obj.pCode = 1001;
obj.pName = "Apple";
```

### Adding Methods

You can also add functions (methods) inside the object:

```typescript
obj.getData = function () {
  console.log(obj.pCode, obj.pName);
};
```

---

## Displaying the Object

When you log the object, you will see that it displays **three members**:

- Two properties: `pCode`, `pName`
- One method: `getData`

Variables inside an object are called **properties**.  
Functions inside an object are called **methods**.

---

## Commonly Used Way: Defining Members Inside Object Directly

Instead of creating an empty object and adding members later, the common way is to declare everything inside the object:

```typescript
let obj = {
  pCode: 1001,
  pName: "Apple",
  getData() {
    console.log(this.pCode, this.pName);
  },
};
```

### Key Points:

- Properties are written as key-value pairs.
- No `=` sign, instead use `:`.
- End with `,` not `;`.

---

## ES6 Method Shorthand

In ES6, you can define methods without `:` or the `function` keyword:

```typescript
let obj = {
  pCode: 1001,
  pName: "Apple",
  getData() {
    console.log(this.pCode, this.pName);
  },
};
```

This shorthand style is the same as used in **classes**.

---

## Nested Objects (N-Level Objects)

You can also have objects inside objects:

```typescript
let obj = {
  pCode: {
    id: 1001,
    part: "ABC",
  },
  pName: "Apple",
};
```

Here:

- `pCode` is a key.
- The object `{ id: 1001, part: "ABC" }` is its value.

So, an object literal is a **key-value pair data structure**.

---

## Object Literal vs JSON

If you are familiar with JSON:

- JSON is also a **key-value pair format**.
- Difference: JSON requires **keys in double quotes**.

JSON is derived from the object literal format.  
Objects in JavaScript easily convert into JSON.

---

## Important Note: Avoid Arrow Functions Inside Objects

Do not use **arrow functions** for methods in object literals, because arrow functions behave differently with `this`.  
This topic is discussed in detail in another lecture.

---

## Summary

- Object literals bundle variables and functions into a container.
- Properties = variables inside object.
- Methods = functions inside object.
- ES6 provides a cleaner method shorthand.
- Object literals can have nested objects.
- They are the basis of JSON format.

---

# 51

---

# Dynamic Keys and Methods in Object Literals (ES6 & TypeScript)

So now we have seen the basics of **object literal**.  
The next point we are discussing here is:

**Can we have dynamic key or method names, and how to implement that?**

This is an important topic and often asked in interviews.

---

## Dynamic Key Values in ES6

In ES6, one more facility was introduced — the ability to give **dynamic key values**.

Imagine that keys like `pCode` or `pName` are not decided earlier. Maybe some data is retrieved, and then the key is decided dynamically.

For example:

```typescript
let tempVar = "pCode";

let obj = {
  tempVar: 1001,
};

console.log(obj);
```

### What happens here?

If you run this code, you will see:

```bash
{ tempVar: 1001 }
```

Notice that the key is literally `tempVar`, not `pCode`.  
That’s why when you try to access `obj.pCode`, it will return `undefined`.

---

## The Correct Way: Using Square Brackets

To make sure the **value of the variable** (`tempVar`) is treated as the key, you need to put it inside **square brackets**:

```typescript
let tempVar = "pCode";

let obj = {
  [tempVar]: 1001,
};

console.log(obj); // { pCode: 1001 }
```

Now, instead of using the word `tempVar` as the key, JavaScript/TypeScript understands that the actual key is the **value stored inside** `tempVar`, which is `"pCode"`.

This is how ES6 allows us to create **dynamic keys**.

---

## Dynamic Method Names

Not just properties, even **methods** can have dynamic names.

For example:

```typescript
let part1 = "get";
let part2 = "Data";

let obj = {
  [part1 + part2]() {
    console.log("Dynamic method executed!");
  },
};

obj.getData(); // Output: Dynamic method executed!
```

Here, the method name is dynamically formed by joining two values: `"get"` and `"Data"`.  
When executed, the method name becomes `getData`.

---

## Why This Matters

Dynamic keys and methods are useful when:

- The key names come from **user input** or **API data**.
- You want to **programmatically generate** property or method names.
- You are dealing with **flexible structures** that are not known at compile-time.

---

## Summary

- By default, variables used as keys in objects are treated as literal names (`tempVar → "tempVar"`).
- To make them dynamic, enclose them in **square brackets** (`[tempVar]`).
- ES6 allows not only dynamic keys but also **dynamic method names**.
- This feature makes object literals more powerful and flexible.

---

# 52

---

# Creating Read-Only Properties in JavaScript Objects

In this lecture, we are discussing an important question:

**How can we make read-only properties in an object?**

For this, we are going to use the `Object` (with capital **O**) in JavaScript, which provides powerful methods to configure object properties.

---

## Using `Object.defineProperty`

JavaScript gives us a method called `defineProperty`, which belongs to the global `Object` class.

The syntax looks like this:

```typescript
Object.defineProperty(obj, propertyName, propertyDescriptor);
```

- `obj` → the object on which you want to define the property.
- `propertyName` → the name of the property.
- `propertyDescriptor` → the configuration for the property.

---

## Example: Defining a Property with Attributes

Let’s try a sample code:

```typescript
let proto = {};

Object.defineProperty(proto, "pCode", {
  value: 2001,
  writable: true,
  configurable: true,
});

const obj = Object.create(proto);

console.log(obj.pCode); // 2001

obj.pCode = 3001; // Changing value
console.log(obj.pCode); // 3001
```

Here:

- `value` → sets the initial value of the property.
- `writable: true` → allows changing the value.
- `configurable: true` → allows modifying or deleting the property later.

---

## Making a Property Read-Only

Now, let’s change the setting for `writable`:

```typescript
let proto = {};

Object.defineProperty(proto, "pCode", {
  value: 2001,
  writable: false, // ❌ Not writable
  configurable: true,
});

const obj = Object.create(proto);

console.log(obj.pCode); // 2001

obj.pCode = 3001; // Trying to change value
console.log(obj.pCode); // 2001 (unchanged)
```

Even though we tried to assign `3001`, the value remained `2001` because we set **writable: false**.  
This makes the property **read-only**.

---

## Behavior in Strict Mode

- If you run this in **non-strict mode**, JavaScript will silently ignore the assignment (no error, value remains unchanged).
- If you run this in **strict mode**, JavaScript will throw an error when you try to change a read-only property.

This ensures better debugging and prevents accidental modifications.

---

## Summary

- Use **`Object.defineProperty`** to configure object properties.
- Property descriptors include:

  - `value` → the property’s value.
  - `writable` → whether the value can be changed.
  - `configurable` → whether the property itself can be redefined or deleted.

- Setting **writable: false** makes a property **read-only**.
- In strict mode, attempting to modify read-only properties throws an error.

---

# 53

---

# Object Reference vs Clone Creation in JavaScript

In this lecture, we are discussing an important concept with a common interview question:

**What will be the output of this code?**

---

## Assigning Objects: By Reference

Let’s try this code:

```typescript
let obj = { a: "first" };
let obj1 = obj;

obj1.a = "second";

console.log(obj.a); // ?
console.log(obj1.a); // ?
```

### What happens here?

- When you assign `obj1 = obj`, the **reference of the object** is passed.
- No new copy is created.
- Both `obj` and `obj1` point to the **same memory location**.

So when you modify `obj1.a`, it also changes `obj.a`.

**Output:**

```sql
second
second
```

---

## Why Does This Happen?

You can imagine that property `a` is stored at a memory address, and both `obj` and `obj1` are referring to the **same address**.

That’s why whether you use `obj.a` or `obj1.a`, both point to the same location.

👉 **In short: assigning an object does not create a clone; it only copies the reference.**

---

## How to Create a Clone of an Object

If you want a completely separate copy (a clone), assignment is not enough.

### Option 1: Manually Copy Properties

You could loop through all keys of the object and copy them one by one into a new object. But that’s not efficient.

### Option 2: Using `Object.assign` (ES6)

ES6 introduced a simpler way with `Object.assign`:

```typescript
let obj = { a: "first" };

let obj1 = Object.assign({}, obj);

obj1.a = "second";

console.log(obj.a); // first
console.log(obj1.a); // second
```

Now:

- `obj` and `obj1` are separate objects.
- Changing `obj1.a` does **not** affect `obj.a`.

**Output:**

```sql
first
second
```

---

## Summary

- Assigning one object to another (`obj1 = obj`) copies the **reference**, not the object.
- Both variables will point to the same object in memory.
- To create a **clone (separate copy)**, use:

  - `Object.assign({}, obj)`
  - Or loop through properties manually.

- ES6 `Object.assign` makes cloning much easier and avoids reference issues.

---

# 54

---

# Understanding the `this` Object in JavaScript & TypeScript

Now let's understand the **`this` object**, without which you can't imagine any JavaScript or TypeScript program.

The definition of this object is that it contains the **current context**. The value of `this` can change depending on where it is placed.

---

## `this` in the Browser Global Scope

Let's check one simple example in the browser window.

```javascript
console.log(this);
```

If you run this in the browser, it displays the **window object** by default.

👉 The reason is that `this` refers to the **current context**, and in this case, the current context is the `window` object, since it is the global object in the browser.

---

## `this` Inside a Function

Now let’s put this statement inside a function:

```javascript
function test() {
  console.log(this);
}
test();
```

The output is still the **window object**.

👉 Why? Because the test function is actually part of the window object, and window is the global object.

For example:

```javascript
window.a = 5;

function test() {
  console.log(this.a);
}
test();
```

Output: `5`.

Here, `this` points to the `window` object, and hence accesses the property `a` that we set earlier.

---

## `this` Inside an Object Literal

Now let’s shift `this` into an **object literal**:

```javascript
const obj = {
  test: function () {
    console.log(this);
  },
};

obj.test();
```

Output: `obj`.

👉 This time, the test function is part of the `obj` literal, so `this` correctly refers to `obj`.

---

## `this` in Arrow Functions

Now let’s see what happens if we use an arrow function:

```javascript
const obj = {
  test: () => {
    console.log(this);
  },
};

obj.test();
```

Output: `window`.

Earlier, with a traditional function, `this` pointed to `obj`. But with an **arrow function**, it pointed to the global `window` object.

👉 Why? Because the arrow function does **not** bind its own `this`. Instead, it inherits `this` from its surrounding scope. In the above case, the surrounding scope is the global scope, hence `window`.

---

## Why Does `this` Work Differently in Arrow Functions?

Earlier, traditional functions also acted like classes, so they had to manage their own `this` binding.

Arrow functions, however, don’t behave like classes and don’t need to handle `this`. Instead, they simply use the `this` from where they were defined.

That’s why you should be careful when using arrow functions inside objects.

---

## Common Interview Questions

### 1\. What will be the output of this code and why?

```javascript
function test() {
  console.log(this);
}
test();
```

👉 Output: `window`.  
Reason: The current context is the global object, i.e., the `window` in browsers.

---

### 2\. What is the context of `this` inside an arrow function?

```javascript
const obj = {
  test: () => {
    console.log(this);
  },
};
obj.test();
```

👉 Output: `window` (in browser).  
Reason: Arrow functions do not bind their own `this`. Instead, they refer to the global object.

If this same code runs in **Node.js**, then `this` will point to the **global object in Node** (not `window`, but Node’s own global wrapper).

---

## Key Takeaways

- `this` refers to the **current context**.
- In the **global scope (browser)** → `this` refers to `window`.
- Inside a **function** → still refers to `window` unless bound otherwise.
- Inside an **object method (traditional function)** → refers to the object.
- Inside an **object method (arrow function)** → refers to the global object instead.

---

# 55

---

# Understanding Classes in TypeScript

In this lecture, we are going to discuss **how to work with classes in TypeScript**.

Classes are the base entity of object-oriented programming (OOP). TypeScript supports classes very well. Unlike JavaScript ES5 (which did not have the `class` keyword), ES6 introduced it, making object-oriented programming much simpler.

Classes are nothing but **designs or blueprints**.

---

## Class as a Blueprint

Think of designing a **car**.

- On paper, you create a design — this is the **blueprint**.
- That design is your **class** in programming.
- The **real cars** manufactured from that blueprint are the **objects or instances** of the class.

A car may have different properties like `height`, `width`, `numberOfSeats`, or even `color`. These data values define the **appearance of the object**, and are called **properties**.

Actions like `start`, `drive`, or `stop` are called **methods** because they **act on the object**.

So:

- **Class** → Blueprint
- **Object/Instance** → Real implementation based on the blueprint
- **Properties** → Data (e.g., color, seats)
- **Methods** → Behavior (e.g., drive, stop)

---

## Syntax to Create a Class in TypeScript

Here’s a simple example of creating a class:

```typescript
class Car {
  color: string;
  seats: number;

  constructor(c: string, ns: number) {
    this.color = c;
    this.seats = ns;
    console.log("Constructor called");
  }

  buildCar() {
    console.log(`Car built with color: ${this.color}, seats: ${this.seats}`);
  }
}

// Creating objects (instances) of Car
const car1 = new Car("Red", 2);
const car2 = new Car("Blue", 4);

car1.buildCar(); // Car built with color: Red, seats: 2
car2.buildCar(); // Car built with color: Blue, seats: 4
```

---

## Members of a Class

Anything you place inside a class is called a **member**.  
In the above example:

- **Properties** → `color`, `seats`
- **Constructor** → Automatically called when an object is created
- **Method** → `buildCar()`

So this class has **four members**:  
2 properties, 1 constructor, and 1 method.

---

## The Role of the Constructor

A **constructor** is a special method that:

- Is automatically called when an object is created using the `new` keyword.
- Can accept parameters to initialize properties of the class.

For example:

```typescript
const car1 = new Car("Red", 2);
```

Here, `"Red"` and `2` are passed to the constructor and assigned to the object’s properties.

---

## Accessing Class Members

There are two ways to access members:

1.  **Outside the class (using object reference):**

    ```typescript
    console.log(car1.color); // Red
    console.log(car2.seats); // 4
    ```

2.  **Inside the class (using `this` keyword):**

    ```typescript
    buildCar() {
      console.log(`Color: ${this.color}, Seats: ${this.seats}`);
    }
    ```

    The keyword **`this`** always refers to the **current object instance**.

    - For `car1`, `this` refers to `car1`.
    - For `car2`, `this` refers to `car2`.

---

## Quick Interview Questions

1.  **How do you create a class in TypeScript?**  
    → Use the `class` keyword, declare members, and optionally add a constructor.
2.  **What is a constructor and how is it called?**  
    → It is a special method automatically invoked when you create an object with `new`.
3.  **How do you access members of a class?**  
    → Use `objectName.memberName` outside the class, or `this.memberName` inside the class.
4.  **What do you mean by a member of a class?**  
    → Properties, methods, and constructors are all members of a class.

---

## Final Thoughts

Classes in TypeScript allow you to organize code around **data (properties)** and **behavior (methods)**.

- The **blueprint (class)** defines what objects look like.
- The **instances (objects)** bring those blueprints to life with specific values.

Understanding classes, constructors, and the `this` keyword lays the foundation for working with advanced OOP features like **inheritance, interfaces, and access modifiers** in TypeScript.

---

# 56

---

# Understanding Inheritance in TypeScript

So now we are going to talk about **inheritance** in this lecture.

You already know the syntax of class creation with various types of members. That is, you create the property, method or even constructor.

TypeScript does allow various object-oriented patterns to implement. One of the most common patterns is **inheritance**, also known as **Subclassing**.

---

## Inheritance in ES6 and TypeScript

ES5 had many ways to implement inheritance with constructor function, but in **ES6 it's even easier**. You just use the **extends** keyword to inherit a class.

### Example:

```ts
class A {
  Pmethod() {
    console.log("parent method called");
  }
}

class B extends A {}

let cobj = new B();
cobj.Pmethod(); // parent method called
```

As you can see, even though `B` doesn’t have any members, the method of class `A` is available because of inheritance.

---

## Adding Members in Child Class

Now, let’s add one method to the child class:

```ts
class A {
  Pmethod() {
    console.log("parent method called");
  }
}

class B extends A {
  Cmethod() {
    console.log("child method called");
  }
}
```

Now the child object has **two methods**: one from parent class and another from child class.

---

## Constructors and Super

When we deal with **constructors**, things are a bit different.

If the parent class has a constructor and the child also defines one, the child **must call `super()`** to invoke the parent constructor.

```ts
class A {
  constructor() {
    console.log("parent constructor called");
  }
}

class B extends A {
  constructor() {
    super(); // required
    console.log("child constructor called");
  }
}
```

⚠️ Without `super()`, it won’t compile in TypeScript or JavaScript.

---

## Practical Example: Vehicle Inheritance

Let’s create a **Vehicle class** and extend it into `Car` and `Motorbike`.

```ts
class Vehicle {
  color: string;
  vehicleType: string;
  seats: number;

  constructor(c: string, vt: string, seats: number) {
    this.color = c;
    this.vehicleType = vt;
    this.seats = seats;
  }

  buildVehicle() {
    console.log(
      `Color: ${this.color}, Type: ${this.vehicleType}, Seats: ${this.seats}`
    );
  }
}

class Car extends Vehicle {
  constructor(c: string) {
    super(c, "Car", 4);
  }
}

class Motorbike extends Vehicle {
  constructor(c: string) {
    super(c, "Motorbike", 2);
  }
}

// Usage
let cobj = new Car("Red");
let mobj = new Motorbike("Silver");

cobj.buildVehicle(); // Red Car with 4 seats
mobj.buildVehicle(); // Silver Motorbike with 2 seats
```

---

## Key Questions

### 1\. How do you inherit a class?

By using the `extends` keyword. All members of the parent and child class are accessible with the object of the child class.

### 2\. Why do you need the `super()` method?

Whenever we have constructors in both parent and child class, the child’s constructor **must call the parent’s constructor** using `super()`.  
This allows parameter passing and proper initialization of inherited members.

---

## Summary

- Inheritance in TypeScript is implemented using **extends**.
- Methods and properties of parent are available in child class objects.
- Constructors in child classes **must call `super()`** to initialize parent class.
- Practical example shows how `Vehicle` can be extended into `Car` and `Motorbike`.

---

# 57

---

# Understanding Access Modifiers in TypeScript (OOP)

Another important concept of object-oriented programming is the **access modifier**.

There are various modifiers used in classes like **public, private, and protected**.

When you declare a method or a property inside a class, you have a provision to decide the **scope** of it — that is, the **accessibility of members** (methods or properties).

---

## Example: Access Modifiers in Action

Let’s practically see how it works.

We declare a class called `Vehicle` which will have two properties:

- `color` (string)
- `numberOfSeats` (number)

And a method called `buildVehicle` that will display their values.

```ts
class Vehicle {
  color: string;
  numberOfSeats: number;

  buildVehicle() {
    console.log(this.color, this.numberOfSeats);
  }
}

let obj = new Vehicle();
obj.color = "Red";
obj.numberOfSeats = 4;
obj.buildVehicle(); // Output: Red 4
```

So far, we accessed and set properties **outside the class** and everything worked fine.

---

## Why Do We Need Modifiers?

The issue arises when you want to put **validations** inside the class.

For example, assume:

- `color` must be from a specific set of allowed values.
- `numberOfSeats` must fall within a valid range.

If users can freely set these properties outside the class, they can **bypass validations**, breaking your object’s logic.

That’s where **access modifiers** help.

---

## Public Modifier

By default, class members in TypeScript are **public**.

- They can be accessed **inside and outside** the class.
- You don’t even need to explicitly write `public` (but you can if you want).

Example:

```ts
class Vehicle {
  public seats: number;
  public color: string;
}
```

Even if you omit `public`, it’s the same.

---

## Private Modifier

If you want to restrict access **only inside the class**, use `private`.

```ts
class Vehicle {
  private color: string;
  private seats: number;

  buildVehicle() {
    console.log(this.color, this.seats);
  }
}

let obj = new Vehicle();
obj.color = "Red"; // ❌ Error: Property 'color' is private
```

Now `color` and `seats` are not accessible outside the class.

Even methods can be private if you want **internal helper methods** hidden from the user.

---

## Protected Modifier

The **protected** modifier is similar to private, with one key difference:

- **Private** → Accessible **only inside the class**.
- **Protected** → Accessible inside the class **and its subclasses**.

Example:

```ts
class Vehicle {
  protected color: string = "Red";
  public seats: number = 4;
}

class Car extends Vehicle {
  showData() {
    console.log(this.color); // ✅ Accessible in subclass
  }
}

let car = new Car();
car.showData(); // Output: Red
car.color; // ❌ Error: 'color' is protected
```

So, `protected` gives controlled access in inheritance scenarios.

---

## Key Takeaways

- **Public**: Accessible everywhere (default).
- **Private**: Accessible only within the same class.
- **Protected**: Accessible within the class and its subclasses.

---

## Interview-Style Questions

### Q1: Explain various access modifiers of a class.

We have **public, private, and protected**.

- **Public**: Members are accessible everywhere. (Default)
- **Private**: Members are accessible only within the class.
- **Protected**: Members are accessible within the class and its subclasses.

---

### Q2: Which is the default access modifier?

The default access modifier is **public**.

---

### Q3: Can you have a protected modifier without inheritance?

Yes, you can. But it doesn’t make much sense because without a subclass, it behaves like `private`.  
Still, TypeScript will not throw any errors.

---

🎯 **Conclusion**:  
Use **private** when you want strict encapsulation.  
Use **protected** when designing class hierarchies with inheritance.  
Use **public** (default) when no restrictions are needed.

---

# 58

---

# Property Initialization Shorthand in TypeScript

When working with classes in TypeScript, you often need to initialize properties inside the constructor. Normally, this requires writing separate declarations and assignments. But TypeScript gives us a much **shorter and cleaner way** to do this — called **property initialization shorthand**.

---

## Traditional Way of Initializing Properties

Let’s start with a simple `Vehicle` class:

```ts
class Vehicle {
  color: string;
  seats: number;

  constructor(c: string, s: number) {
    this.color = c;
    this.seats = s;
  }

  buildVehicle() {
    console.log(this.color, this.seats);
  }
}

let obj = new Vehicle("Red", 4);
let obj1 = new Vehicle("Blue", 6);

obj.buildVehicle(); // Output: Red 4
obj1.buildVehicle(); // Output: Blue 6
```

Here’s what’s happening:

- We declare properties (`color`, `seats`).
- In the constructor, we take parameters (`c`, `s`).
- Then we assign `this.color = c` and `this.seats = s`.

This works fine. But imagine if we had **10+ properties** — our constructor would quickly get messy with a long list of assignments.

---

## The Shorthand Way

TypeScript allows a **shorthand syntax** to avoid all those redundant property declarations and assignments.

Instead of separately declaring properties and assigning them, you can declare and assign them **directly inside the constructor parameters**.

Example:

```ts
class Vehicle {
  constructor(public color: string, public seats: number) {}

  buildVehicle() {
    console.log(this.color, this.seats);
  }
}

let obj = new Vehicle("Red", 4);
let obj1 = new Vehicle("Blue", 6);

obj.buildVehicle(); // Output: Red 4
obj1.buildVehicle(); // Output: Blue 6
```

---

### What Changed?

- We removed the **explicit property declarations** (`color`, `seats`).
- We also removed the **assignments** (`this.color = c`).
- Instead, we wrote `public color: string` and `public seats: number` directly in the constructor parameters.

This tells TypeScript:

- Create a property (`color`, `seats`).
- Assign the constructor parameter value directly to it.

---

## Why Do We Need Access Modifiers?

There’s one important rule: when using shorthand, you **must explicitly declare the access modifier** (`public`, `private`, or `protected`).

For example:

```ts
class Vehicle {
  constructor(private color: string, public seats: number) {}

  buildVehicle() {
    console.log(this.color, this.seats);
  }
}

let obj = new Vehicle("Red", 4);
let obj1 = new Vehicle("Blue", 6);

obj.buildVehicle(); // Output: Red 4
obj1.buildVehicle(); // Output: Blue 6

console.log(obj.color); // ❌ Error: Property 'color' is private
```

Here:

- `color` is **private**, so it cannot be accessed outside the class.
- `seats` is **public**, so it can be accessed anywhere.

---

## Key Advantages

- Less boilerplate code (no need to repeat property declarations + assignments).
- Cleaner and more readable classes.
- Still fully supports encapsulation (`private`, `protected`, `public`).

---

## Final Thoughts

The **property initialization shorthand** is one of those small but powerful features of TypeScript that saves a lot of typing.

- If you have a class with many properties, use this shorthand for cleaner code.
- Always remember: you **must explicitly specify the access modifier** (`public`, `private`, `protected`).

---

🎯 **Summary**: With property initialization shorthand, you’re **creating the property and assigning the value together in a single step** inside the constructor.

---

# 59

---

# Understanding the `readonly` Modifier in TypeScript

In this lecture, I’m going to discuss the **readonly modifier** in TypeScript.

TypeScript provides a `readonly` modifier that can be added with `public`, `private`, or `protected` access modifiers.

👉 Remember, in JavaScript you don’t have such an option. However, if you want to make an object property readonly in JavaScript, you can use the `Object` class (`Object.freeze` or property descriptors). If you want to know about it, you can check my **JavaScript marathon interview question tutorial**.

Now, let’s practically try to make a property `readonly` in TypeScript.

---

## Example: Making a Property `readonly`

Let’s create a simple `Vehicle` class:

```ts
class Vehicle {
  readonly color: string;
  seats: number;

  constructor(color: string, seats: number) {
    this.color = color;
    this.seats = seats;
  }
}

const car = new Vehicle("red", 4);
console.log(car.color); // ✅ red
```

Here, the `color` property is marked as **readonly**.

Now, if I try to reassign:

```ts
car.color = "blue"; // ❌ Error: Cannot assign to 'color' because it is a read-only property
```

TypeScript immediately throws an error.

That’s how you make a property **readonly**.

---

## How to Assign Values to a `readonly` Property

Since a `readonly` property **cannot be modified later**, how do we assign values to it?

You have **three valid ways**:

### 1\. **Assign value during declaration**

```ts
class Vehicle {
  readonly color: string = "red";
}
```

### 2\. **Assign value inside the constructor**

```ts
class Vehicle {
  readonly color: string;

  constructor(c: string) {
    this.color = c; // ✅ Allowed
  }
}

const car = new Vehicle("blue");
console.log(car.color); // blue
```

### 3\. **Use shorthand (property parameter syntax)**

```ts
class Vehicle {
  constructor(readonly color: string) {}
}

const car = new Vehicle("red");
console.log(car.color); // red
```

With this shorthand, you don’t need to separately declare or assign properties.

---

## `readonly` with Access Modifiers

The `readonly` modifier can be used with:

- `public readonly`
- `private readonly`
- `protected readonly`

Example:

```ts
class Vehicle {
  constructor(private readonly color: string) {}

  showColor() {
    console.log(this.color);
  }
}

const car = new Vehicle("black");
car.showColor(); // ✅ black
// car.color ❌ Error: 'color' is private
```

Here, the property is **private + readonly**, meaning it can only be accessed inside the class and cannot be reassigned.

---

## Common Interview Question: `readonly` vs `const`

A very common question is:

**What is the difference between `readonly` and `const`?**

- `readonly` → used **inside classes** to make properties immutable after initialization.
- `const` → used for **variables** outside classes.

So, the difference is:

- Use `readonly` for **class properties**.
- Use `const` for **variables**.

---

## Recap

- Use `readonly` to protect properties from modification.
- Values can only be assigned:

  - at declaration,
  - inside the constructor,
  - or via shorthand property parameters.

- Can be combined with `public`, `private`, or `protected`.
- Difference:

  - `readonly` → for class properties
  - `const` → for variables

---

📌 With this, you now know how to **implement and use the `readonly` modifier in TypeScript** — a powerful tool to ensure immutability of class properties.

---

# 60

---

# Understanding Static Members in TypeScript

In this lecture, I’m discussing **static members** in TypeScript.

---

## Static Members in JavaScript

If you observe the **Math** class in JavaScript, you always use the class name itself to access methods or properties.

For example:

```js
console.log(Math.PI); // Value of Pi
console.log(Math.random()); // Random number
```

👉 Notice that in these two cases, you never instantiate the `Math` class.

You don’t write:

```js
let obj = new Math(); // ❌ Not valid
```

Instead, you directly call **static members** using the class name.

This is because `PI` and `random` are **static properties/methods**.

---

## Static Members in TypeScript

When you want to create similar behavior in your own classes, you use the **`static` keyword**.

Static members:

- Belong to the **class itself**, not the object.
- Can be accessed using the **class name**.
- Do not require instantiation.

---

## Example: Static Property

Let’s create a simple `Vehicle` class:

```ts
class Vehicle {
  color: string; // instance property
  static seats: number = 5; // static property

  constructor(color: string) {
    this.color = color;
  }
}

const car = new Vehicle("red");

console.log(car.color); // ✅ "red" → instance property
// console.log(car.seats);     // ❌ Error: seats is not available on instance

console.log(Vehicle.seats); // ✅ 5 → static property
```

- `color` → bound to **instance** of the class
- `seats` → bound to the **class** itself

This shows that static members do not belong to each object. Instead, they belong to the **class as a whole**.

---

## Key Point: One Copy Only

For **instance properties**, each object has its own copy of the value.

For **static properties**, there is only **one copy** of the value for the entire class.

---

## Example: Static Method

We can also create static methods:

```ts
class Vehicle {
  static seats: number = 5;

  static printInfo() {
    console.log(`Number of seats: ${Vehicle.seats}`);
  }
}

Vehicle.printInfo(); // ✅ "Number of seats: 5"
```

Here, `printInfo` is called directly with the class name — no need to create an object.

---

## Practical Use Cases

So, when do we use static members?

- **Configuration values**  
  Example: application version, application name.
- **Utility functions**  
  Example: services that don’t depend on object instances.
- **Shared values**  
  Example: counters, default settings.

Just like `Math.PI` or `Math.random`, these values are tied to the class, not to individual objects.

---

## Common Interview Questions

### 1\. How do you make a member static in a class?

Use the **`static` keyword** before the property or method:

```ts
class Example {
  static version = "1.0.0";
  static printVersion() {
    console.log(Example.version);
  }
}
```

### 2\. What is the advantage of static members?

- They are **shared across all instances**.
- They are accessible **without creating objects**.
- Useful for **configuration values** (like app version, app name).
- Reduce memory usage since there’s only **one copy**.

---

## Recap

- Use `static` when a value or method belongs to the **class itself**.
- Access static members using the **class name**, not the object.
- Each object has its own instance properties, but static members are **common to all**.
- Ideal for configuration, constants, and utility functions.

---

🎯 With this, you now understand **how to declare and use static members in TypeScript**, and when to apply them in real-world applications.

---

# 61

---

# Mastering Object Literal Destructuring in JavaScript / TypeScript

Now I'm discussing a very useful concept in programming that is **destructuring of object literal**.

We have already seen the concept of **Destructuring in the array section**, but I will still repeat the same thing for clarification — what is Destructuring?

---

## What is Destructuring?

As the name _Destructuring_ says, something is getting _destructured_.  
It also means that a structure is getting broken.

A **structure** here means a _data structure_.

So, **Destructuring** is a concept of breaking a data structure (like an array or object literal) into data pieces, or in other words, **individual variables**.

---

## Object Literal Destructuring

Object Literal Destructuring will look something like this:

For example, you have an object which has `PCode` and `PName` (that is, product code and product name) where we have values `1001` and `Apple`.

Normally, if you want to bring product code and product name out of the structure and assign them to individual variables, then you would write:

```bash
let pCode = obj.pCode;
let pName = obj.pName;
```

This is fine when you have only two members.  
But when you have **more members**, it becomes a cumbersome job.

Instead of this, **ES6** gives you an easier way:

```bash
let { pCode, pName } = obj;
```

Here, the **key name** and the **variable name** must be the same.  
In this example, `pCode` and `pName` are keys in the object as well as variables.

---

## Practical Example

```javascript
const obj = {
  pCode: 1001,
  pName: "Apple",
};

let { pCode, pName } = obj;

console.log(pCode); // 1001
console.log(pName); // Apple
```

Here, the left-hand side (curly brackets) is **not an object literal**.  
It’s just a **list of variables** we are creating. The curly brackets indicate that you are destructuring an **object literal**.

👉 If it is an **array**, you would use **square brackets**.

---

## Destructuring with Functions

We can also destructure objects **returned by functions**.

```javascript
function test() {
  return {
    pCode: 1001,
    pName: "Apple",
  };
}

let { pCode, pName } = test();

console.log(pCode); // 1001
console.log(pName); // Apple
```

This gives the same result as before.

---

## Default Values in Destructuring

Even while destructuring, we can assign **default values**.

```javascript
const obj = {};

let { pCode = 0, pName = "Unknown" } = obj;

console.log(pCode); // 0 (default value since pCode not present)
console.log(pName); // Unknown
```

If we now add values in the object:

```javascript
const obj = { pCode: 1002 };

let { pCode = 0, pName = "Unknown" } = obj;

console.log(pCode); // 1002 (value from object)
console.log(pName); // Unknown (default value since not present)
```

---

## Practical Scenario of Object Literal Destructuring

A **very common scenario** is when you get data from a server in **JSON format**.

That data is usually assigned to an object literal. But most of the time, you may not need all fields — only a few.

Destructuring allows you to **pick only what you need**.

Example:

```javascript
const serverResponse = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  role: "admin",
};

let { username, email } = serverResponse;

console.log(username); // john_doe
console.log(email); // john@example.com
```

This makes code cleaner and avoids repetitive `obj.property` calls.

---

## Example Question

**Q: Explain the output of this code.**

```javascript
let { a = 90, b } = { a: undefined };

console.log(a); // ?
console.log(b); // ?
```

- `a` → Since default value is `90`, and `a` was `undefined`, it becomes **90**.
- `b` → No value is given, so it becomes **undefined**.

👉 Output:

```javascript
90;
undefined;
```

---

## Conclusion

So this is the whole concept of **destructuring**.  
It’s a **basic yet powerful feature** of JavaScript/TypeScript that helps break down complex data structures like arrays or object literals into smaller, more manageable **variables**.

Destructuring is especially helpful when working with **API responses**, **functions returning objects**, and situations where you want to make your code **short, clean, and readable**.

---

# 62

---

# Understanding Abstract Classes in Object-Oriented Programming

Another important concept in object-oriented programming is **abstract classes**.

Abstract classes are classes which **cannot be instantiated**. That is, you cannot create an object directly from them. Instead, they serve as a **base class** for extended classes or subclasses.

---

## Defining an Abstract Class

The `abstract` keyword is used to declare an abstract class.

For example:

```ts
abstract class Vehicle {
  formatData() {
    console.log("Displaying the formatted data");
  }
}
```

Now, if you try to instantiate this class:

```ts
const obj = new Vehicle(); // ❌ Error: Cannot create an instance of an abstract class
```

You will see that **abstract classes cannot be instantiated**.

---

## Extending an Abstract Class

As mentioned earlier, an abstract class serves as a base class. Let’s extend it.

Suppose we want to format some data — remove spaces, replace them with dashes, and convert everything into uppercase.

```ts
abstract class Vehicle {
  formatData(data: string) {
    return data.replace(/\s+/g, "-").toUpperCase();
  }
}

class SUV extends Vehicle {
  model: string;

  constructor(model: string) {
    super();
    this.model = model;
  }
}

const obj = new SUV("Range Rover Sport");
console.log(obj.formatData(obj.model));
// Output: RANGE-ROVER-SPORT
```

Here’s what’s happening:

- The `SUV` class extends `Vehicle`.
- The `model` value has spaces (`Range Rover Sport`).
- When passed to `formatData`, spaces are replaced with `-` and the entire string is converted to uppercase.

---

## Why Use Abstract Classes?

This example is just a simple demonstration. Normally, abstract classes:

- Act as **base classes** that define a set of properties and methods.
- Cannot be instantiated directly.
- Are meant to be used by **subclasses** that implement or extend their functionality.

---

## Common Questions About Abstract Classes

### 1\. What is an abstract class?

An **abstract class** is treated as a **base class** for other classes.  
It can contain **properties** and **methods** that can be reused by subclasses.  
However, it **cannot be instantiated** directly.

---

### 2\. Can we create a constructor in an abstract class?

Yes.  
Although an abstract class cannot be instantiated directly, it **can have a constructor**.

The constructor of an abstract class is automatically called when a subclass is instantiated.

Example:

```ts
abstract class Vehicle {
  constructor() {
    console.log("Abstract Class Constructor");
  }
}

class SUV extends Vehicle {
  constructor() {
    super();
    console.log("SUV Constructor");
  }
}

const obj = new SUV();
// Output:
// Abstract Class Constructor
// SUV Constructor
```

This proves that a constructor **can exist** in an abstract class and works just like constructors in normal classes.

---

### 3\. Can we add instance variables in an abstract class?

Yes, absolutely.  
Since abstract classes can have constructors, they can also have **instance variables**, **static members**, and **instance members**.

Example:

```ts
abstract class Vehicle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

class SUV extends Vehicle {
  constructor(brand: string) {
    super(brand);
  }
}

const obj = new SUV("Toyota");
console.log(obj.brand); // Toyota
```

So, abstract classes are not limited — they can hold variables, methods, and constructors just like concrete classes.

---

## Conclusion

Abstract classes are a **powerful OOP feature**.

- They **cannot be instantiated** directly.
- They serve as **base classes** to share common logic.
- They can have **methods, constructors, instance variables, and static members**.
- Subclasses can extend them and provide specific implementations.

In practice, abstract classes make code **cleaner, reusable, and more structured**, especially when multiple subclasses share common behavior.

---

# 63

---

# Mastering Getters and Setters in Object-Oriented Programming

Now I'm discussing the **class accessor** — that is, **getter and setter methods**.

This is also a common question: **What is a getter or setter method?**

---

## What Are Getter and Setter Methods?

The accessor, known as **getter** or **setter methods**, is an approach to create a **property inside a class**.

- The **`get`** keyword is used to create a method that executes whenever you **read** or **get** the value.
- The **`set`** keyword is used to create a method that executes whenever you **assign** a value to that property.

This makes your methods act like **properties**.

---

## Basic Syntax Example

Let’s create a simple `Vehicle` class with a getter and setter:

```ts
class Vehicle {
  get model() {
    console.log("Getter executed");
    return "Some Value";
  }

  set model(v: string) {
    console.log("Setter executed");
  }
}

const obj = new Vehicle();

// Assign value → calls setter
obj.model = "SUV";

// Get value → calls getter
console.log(obj.model);
```

**Output:**

```rust
Setter executed
Getter executed
Some Value
```

As you can see:

- When assigning a value → **setter** runs.
- When reading a value → **getter** runs.

---

## Why Use Getters and Setters?

- To **customize properties**.
- To **add validations** before assigning values.
- To create **read-only properties** (when only getter is defined).

---

## Practical Example with Validation

Let’s improve our `Vehicle` class with a private member and validation.

We usually follow the convention of prefixing the private property with an underscore (`_model`).

```ts
class Vehicle {
  private _model: string = "";

  get model(): string {
    return this._model;
  }

  set model(v: string) {
    if (v.length < 3) {
      this._model = "M" + v;
    } else {
      this._model = v;
    }
  }
}

const obj = new Vehicle();

obj.model = "SUV";
console.log(obj.model); // SUV

obj.model = "U";
console.log(obj.model); // MU
```

### Explanation:

1.  The private variable `_model` holds the actual value.
2.  The **getter** returns `_model`.
3.  The **setter** validates:

    - If the value length is less than 3 → prepend `"M"`.
    - Otherwise → assign value directly.

---

## Read-Only Properties

If you only define a **getter** and omit the setter, the property becomes **read-only**.

```ts
class Vehicle {
  private _model: string = "Default Model";

  get model(): string {
    return this._model;
  }
}

const obj = new Vehicle();
console.log(obj.model); // Default Model

obj.model = "SUV"; // ❌ Error: Cannot assign to 'model' because it is a read-only property
```

This is useful when you want to **expose values safely** but not allow changes directly.

---

## Conclusion

Getters and setters are a **powerful feature** in object-oriented programming:

- They allow you to treat methods as **properties**.
- They are ideal for **validation** and **custom logic** while reading/assigning values.
- Only a getter → **read-only property**.
- Together → create flexible, controlled properties.

In real-world projects, they help **encapsulate logic** and make your code more **maintainable and secure**.

---
