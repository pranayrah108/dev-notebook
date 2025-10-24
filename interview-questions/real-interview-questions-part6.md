# Interview Questons

---

### **1\. Multiply two numbers without using `*` operator**

**Answer:**  
You can use **repeated addition** or **bitwise shift**.

**Example (repeated addition):**

```javascript
function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

console.log(multiply(5, 3)); // 15
```

> Here, we just add `a` to itself `b` times.

---

### **2\. Print alternate prime numbers**

**Answer:**  
Generate prime numbers and skip every other one.

**Example:**

```javascript
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function alternatePrimes(limit) {
  let count = 0;
  for (let i = 2; count < limit; i++) {
    if (isPrime(i)) {
      if (count % 2 === 0) console.log(i);
      count++;
    }
  }
}

alternatePrimes(10); // prints first 10 primes, skipping every alternate one
```

---

### **3\. What are standalone components in Angular?**

**Answer:**  
Standalone components don’t need a module declaration. You can use them directly, which **simplifies your app** and makes lazy loading easier.

**Example:**

```typescript
@Component({
  selector: 'app-hello',
  template: '<h1>Hello Standalone!</h1>',
  standalone: true
})
export class HelloComponent {}
```

> No need to add this component to any module.

---

### **4\. Difference between Subject, BehaviorSubject, and ReplaySubject**

**Answer:**

-   **Subject**: Starts empty, emits values to subscribers after they subscribe.
    
-   **BehaviorSubject**: Has an **initial value**, new subscribers immediately get the latest value.
    
-   **ReplaySubject**: Keeps a **buffer** of previous values and gives them to new subscribers.
    

**Example:**

```typescript
const subject = new BehaviorSubject('Guest');

subject.subscribe(val => console.log('Subscriber1:', val));
subject.next('John'); // updates value
subject.subscribe(val => console.log('Subscriber2:', val)); 
// Subscriber2 immediately gets 'John'
```

---

### **5\. What are signals in Angular?**

**Answer:**  
Signals are **reactive variables** in Angular 16+ that automatically update anything that depends on them.

**Example:**

```typescript
import { signal, computed } from '@angular/core';

const price = signal(100);
const tax = signal(0.1);
const total = computed(() => price() + price() * tax());

console.log(total()); // 110
price.set(200);
console.log(total()); // 220 automatically updates
```

---

### **6\. How to inject services in Angular 16+**

**Answer:**  
Instead of using the constructor, you can directly use `inject()`.

**Example:**

```typescript
@Injectable({ providedIn: 'root' })
export class MyService {
  sayHello() { console.log('Hello!'); }
}

@Component({...})
export class MyComponent {
  private myService = inject(MyService);
  
  ngOnInit() {
    this.myService.sayHello(); // works without constructor
  }
}
```

---

### **7\. Explain route decorators in Angular 17**

**Answer:**  
You can now define routes **directly in a component** instead of the separate routing module.

**Example:**

```typescript
@Component({
  selector: 'app-dashboard',
  template: '<h1>Dashboard</h1>',
  standalone: true
})
@Route({ path: 'dashboard' })
export class DashboardComponent {}
```

---

### **8\. How to manage login state using BehaviorSubject**

**Answer:**  
BehaviorSubject holds the current value, like showing "Guest" before login and updating to the username after login.

**Example:**

```typescript
const username = new BehaviorSubject('Guest');

// Subscribe to show username in navbar
username.subscribe(name => console.log('Navbar shows:', name));

// After login
username.next('Alice'); // Navbar updates automatically
```

---

### **9\. Difference between lazy modules and lazy loaded components**

**Answer:**

-   **Lazy module**: Load a full module only when needed.
    
-   **Lazy component**: Load a standalone component only when needed, no module needed.
    

> Standalone components reduce boilerplate and make apps faster to load.

---

### **10\. How to migrate Angular 10 → 14**

**Answer (simplified steps):**

1.  Update Angular CLI and dependencies.
    
2.  Refactor to use standalone components where possible.
    
3.  Check breaking changes in Angular 11-14.
    
4.  Test all features and fix warnings/errors.
    

---
