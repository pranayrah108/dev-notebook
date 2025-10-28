# Interview Questons

---

### 💡 **Q1. What is hoisting in JavaScript?**

**Answer:**  
Hoisting means JavaScript moves all variable and function **declarations** to the top of their scope before the code runs.  
You can use a function or variable before you write it, but only the declaration is moved — not the assigned value.

**Example:**

```js
console.log(a); // Output: undefined
var a = 10;
```

➡️ JavaScript internally does this:

```js
var a;
console.log(a); // undefined
a = 10;
```

Only `var a;` is hoisted, not `a = 10;`.

---

### 💡 **Q2. What is the difference between `var` and `let` in JavaScript?**

**Answer:**

-   `var` → Function-scoped, can be redeclared.
    
-   `let` → Block-scoped, cannot be redeclared in the same block.
    

**Example:**

```js
var a = 10;
var a = 20; // ✅ Works fine

let b = 10;
let b = 20; // ❌ Error: already declared
```

`let` also avoids bugs caused by hoisting — you must declare before use.

---

### 💡 **Q3. How do you find the sum of all elements in an array (without using built-in functions)?**

**Answer:**  
Use a **for loop** to add each number one by one.

**Example:**

```js
let numbers = [10, 20, 30];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 60
```

Shows logic clearly — no need for fancy methods.

---

### 💡 **Q4. What is the use of the `reduce()` method in JavaScript?**

**Answer:**  
`reduce()` combines all elements of an array into one single result — often used for summing or accumulating.

**Example:**

```js
let nums = [10, 20, 30];
let total = nums.reduce((acc, cur) => acc + cur, 0);
console.log(total); // 60
```

`acc` = accumulator, `cur` = current element.  
Think of it as “add each number to a running total.”

---

### 💡 **Q5. How can components pass data between each other in Angular?**

**Answer:**  
Three main ways:

1.  **Parent → Child:** Using `@Input()`
    
    ```ts
    // parent.component.html
    <child [message]="parentMsg"></child>
    
    // child.component.ts
    @Input() message!: string;
    ```
    
2.  **Child → Parent:** Using `@Output()` and `EventEmitter`
    
    ```ts
    // child.component.ts
    @Output() sendMsg = new EventEmitter<string>();
    send() { this.sendMsg.emit('Hi Parent'); }
    
    // parent.component.html
    <child (sendMsg)="receive($event)"></child>
    ```
    
3.  **Between unrelated components:** Use a shared **Service** with an RxJS `Subject` or `BehaviorSubject`.
    

---

### 💡 **Q6. Apart from Input and Output, how can Angular components share data?**

**Answer:**  
Use an **Angular Service** with an RxJS `Subject` or `BehaviorSubject`.  
This lets components communicate without direct relation.

**Example:**

```ts
@Injectable({ providedIn: 'root' })
export class SharedService {
  private message = new BehaviorSubject('default');
  currentMessage = this.message.asObservable();

  updateMessage(msg: string) {
    this.message.next(msg);
  }
}
```

Any component that injects this service can send or receive messages in real time.

---

### 💡 **Q7. What is the difference between Angular Material and Bootstrap?**

**Answer:**

-   **Bootstrap:** A general **CSS framework** for styling and layout.
    
-   **Angular Material:** A set of **Angular components** based on Google’s Material Design.
    

**Example:**

-   Bootstrap → Use classes like `btn btn-primary` for styles.
    
-   Angular Material → Use Angular-specific tags like `<mat-button>` or `<mat-table>`.
    

📌 Use Bootstrap for quick layouts, Angular Material for richer, Angular-integrated UI.

---