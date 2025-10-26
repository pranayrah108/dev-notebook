# Interview Questons

---

### **What is a Sprint in Agile methodology?**

A **sprint** is a **short, fixed period of time** (usually 1 to 4 weeks) during which a development team works to finish a specific set of tasks or features.


---



### **My Roles and Responsibilities:**

-   I work as an **Angular Developer**, mainly focusing on building the **front-end (user interface)** of the application.
    
-   I do **sprint-wise development** — meaning I plan, develop, and deliver features within short time periods (sprints) following the Agile process.
    
-   I **discuss tasks and approaches** with my team before starting development to decide the best way to implement a feature.
    
-   I **develop responsive and reusable UI components** using Angular, Angular Material, and PrimeNG.
    
-   I **integrate APIs** with the front-end so that data flows smoothly between the user interface and the backend.
    
-   I take part in **daily meetings** to share updates and discuss any issues or blockers.
    
-   I **show demo presentations** to clients at the end of each sprint, explaining what we have developed.
    
-   I **collect feedback** from clients after demos and help implement those changes in the next sprint.
    
-   I **collaborate with designers and backend developers** to make sure everything looks and works as expected.
    
-   I use tools like **Postman**, **Gitea**, and **Figma** for testing APIs, managing code, and referring to designs.
    




---

### **Project Explanation (Layman’s Language):**

In my current project, I’m working on an **Investment Portal** for one of the **Nordic banks**.  
It’s a **web application** where users can **buy and sell funds**, **create and manage their investment portfolios**, and **set up saving plans**.

There are **two types of logins** in the system:

-   **Customer login:** Customers can log in to view their portfolio, buy or sell funds, and manage their savings plans.
    
-   **Advisor login:** Advisors can log in and view their customers’ portfolios to help them make better investment decisions. Only advisors have access to **generate monthly and yearly reports**, and they can also create **ad-hoc reports** as needed.
    

On the **front-end**, we’re using **Angular** to build the user interface — that’s the part users see and interact with.  
We use **PrimeNG** for ready-made UI components like tables, forms, and charts, and **Highcharts** to show different types of **investment graphs** like portfolio performance, fund comparison, and market trends.

For **real-time fund and stock data**, we use **Morningstar**, which provides live market updates and financial information.  
On the **backend**, the system is built using **.NET**, which connects with **Morningstar** and **ProBroker APIs** to get the latest data. Our **Angular front-end** calls these backend APIs to show users updated fund details, portfolio values, and reports.

My role mainly focuses on the **front-end development** — I create user-friendly pages, integrate APIs, display real-time investment data, and ensure everything looks and works smoothly. I also participate in sprint planning, daily meetings, and client demos to discuss progress and gather feedback.

---


### **Project Explanation (Layman’s Language):**

I worked on a **Pump Testing Project**, where different types of pumps — like **submersible pumps** and other models — are tested to check their **performance and quality**.

In this system, the **testing machine collects readings** such as pressure, flow rate, power, and efficiency while the pump is running. These readings are then processed using **specific calculations** to check if the pump meets the required standards.

After the test is completed, the system automatically **generates a detailed pump testing report**, which can be **downloaded as a PDF**. This report includes all the test results and performance data of the pump.

My role was to work on the **front-end part**, where I helped display the readings, manage test data, and enable the user to **download the PDF report** easily after the test was done.

---




---

### **What is ABP Framework (in simple words):**

**ABP Framework** is a **development framework** built mainly for **.NET applications**.  
It helps developers **create web applications faster and in an organized way** by giving ready-made features and tools — so we don’t have to build everything from scratch.

Think of ABP like a **starter kit** or **base structure** for building modern web applications.

---

### **In a little more detail (still simple):**

-   ABP is built on top of **ASP.NET Core**, which is Microsoft’s backend framework.
    
-   It provides built-in support for common things like:
    
    -   **User login and roles (authentication & authorization)**
        
    -   **Multi-tenancy** (supporting multiple clients or organizations in one app)
        
    -   **Audit logging** (tracking who did what)
        
    -   **Dependency Injection** (a way to manage how parts of code connect)
        
    -   **Modular development** (you can divide the project into small, reusable modules)
        
    -   **API creation** and **UI integration**
        
-   It also works well with **Angular**, so you can have a **.NET backend** and an **Angular frontend** that communicate smoothly through APIs.
    

---


---

### **What is NSwag?**

**NSwag** is a **tool** that helps **connect the backend (API)** and **frontend (like Angular)** easily.

It’s mainly used to **automatically generate API client code** — meaning it creates ready-made TypeScript or C# classes that let your frontend call the backend APIs **without writing all the code manually**.

---

### **How it works (in simple terms):**

1.  The **backend (usually .NET)** exposes APIs.  
    – These APIs are described in a special format called **Swagger (OpenAPI)** — a file that explains all the API endpoints, their inputs, and outputs.
    
2.  **NSwag reads that Swagger file** and then automatically **creates client code** for the frontend (like Angular or .NET).
    
3.  The generated code lets developers **call backend APIs directly** using simple method calls — instead of manually writing long HTTP request code.
    

---

### **Example:**

Let’s say the backend has an API:  
`GET /api/customer/getAll`

Normally, in Angular, you’d write your own `HttpClient.get()` code to call this API.

But with **NSwag**, it automatically generates a TypeScript service like:

```typescript
customerService.getAllCustomers();
```

Now you can directly call this function — it will handle the API call, parameters, and data types for you.

---

### **In short:**

👉 **NSwag** is an **API client generator** that connects your **frontend and backend** easily.  
It saves time, reduces errors, and ensures both sides (frontend and backend) use the same data structure.

It’s commonly used with **.NET + Angular projects**, especially those built using **ABP Framework**, to make API communication smooth and automatic.

---



---

### **Answer:**

In my Angular project, we have a **config.json** file where we store all the **API URLs and environment configurations**.  
The application **reads these URLs from the config file** when it starts, so we can easily change the API endpoints without modifying the code. This makes the app more flexible and easier to manage across different environments like development, testing, and production.

For **authentication**, it is **handled on the bank’s side** through their **ESB (Enterprise Service Bus)**.  
Our application doesn’t perform any login or authentication directly — instead, once the user is authenticated by the bank’s system, we receive the necessary access to use their APIs.

---

👉 **In short:**  
We manage all API and environment settings through a **config.json file**, and the **authentication is handled by the bank’s ESB**, not within our Angular app.



---

### **Example in your project context:**

In your **bank investment portal**, the **ESB handles authentication and API requests**.

-   When a user logs in, the ESB **verifies credentials**.
    
-   When your Angular app calls an API, the ESB **routes the request to the backend service** and returns the response.
    

So your app **doesn’t handle authentication or complex integrations directly** — the ESB manages all of that behind the scenes.

---

### **In short:**

An **ESB is like a smart traffic controller** for all messages between systems — it makes sure **everything reaches the right place safely and correctly**, and handles things like **authentication, routing, and data formatting**.

---


---

### **What is an IDP?**

An **IDP (Identity Provider)** is a system or service that **authenticates users** — meaning it **checks who you are** and provides proof of your identity to other applications or services.

Instead of each application having its own login system, the IDP **handles login centrally**. Once the user is authenticated by the IDP, they can access multiple applications without logging in again (Single Sign-On or SSO).

---

### **How it works (in simple terms):**

1.  A user tries to log in to an application.
    
2.  The application **redirects the user to the IDP**.
    
3.  The IDP **verifies the user’s credentials** (username/password, token, or certificate).
    
4.  If authentication is successful, the IDP **sends a token or assertion** back to the application.
    
5.  The application **grants access** based on that token.
    

---

### **Example in your project context:**

In your bank investment portal:

-   The **bank’s IDP** handles authentication.
    
-   Users don’t log in directly in your Angular app.
    
-   Once the IDP verifies them, your app can **access APIs and show data** securely without asking for credentials again.
    

---

### **In short:**

An **IDP is a trusted login system** that authenticates users and provides access to applications, often enabling **Single Sign-On (SSO)** so users don’t need to log in separately for each app.

---



---

### **Overall Project Explanation (Layman’s Terms):**

I work on an **Investment Portal** for a **Nordic bank**, which is a **web application** where users can:

-   **Buy and sell funds**
    
-   **Create and manage investment portfolios**
    
-   **Set up saving plans**
    

There are **two types of users**:

-   **Customers:** Can see and manage their own portfolio.
    
-   **Advisors:** Can view customer portfolios and have **extra access** to generate **monthly, yearly, or ad-hoc reports**.
    

The **frontend** is built using **Angular**, with **PrimeNG** for UI components and **Highcharts** to show interactive investment graphs. The application is **configurable** via a **config.json file**, where API URLs and other environment settings are stored.

For **backend communication**:

-   The **.NET backend** connects with **Morningstar** and **ProBroker APIs** to fetch **real-time fund and stock data**.
    
-   Our Angular app calls the backend APIs, and the backend ensures **data is accurate and secure**.
    

For **authentication and integration**:

-   **IDP (Identity Provider)**: Handles user authentication. Users don’t log in directly to the Angular app; the **IDP verifies their identity**.
    
-   **ESB (Enterprise Service Bus):** Acts as a **central hub** that routes API requests, handles authentication, and manages communication between the frontend, backend, and external services.
    

So the **workflow** is like this:

1.  The user logs in → the **IDP verifies identity**.
    
2.  The Angular app requests data → the request goes through the **ESB**.
    
3.  The ESB routes it to the **backend**, which fetches data from **Morningstar, ProBroker, or internal services**.
    
4.  The backend sends the data back → through **ESB** → to the Angular app.
    
5.  Users see real-time portfolio data, can buy/sell funds, and advisors can generate reports.
    

---

### **In short:**

The project is a **bank investment portal** where **customers manage investments** and **advisors monitor portfolios and generate reports**.

-   **Angular frontend**: User interface and graphs.
    
-   **.NET backend**: Data handling and API integration.
    
-   **IDP**: Authenticates users.
    
-   **ESB**: Routes requests and ensures secure communication.
    
-   **Morningstar & ProBroker APIs**: Provide real-time fund and stock data.
    

Everything works together to provide a **secure, real-time, and interactive investment experience** for both customers and advisors.

---




---

### **Step 1: User Login**

1.  The user enters their **credentials** (username/password) in the Angular app.
    
2.  The Angular app does **not authenticate the user directly** because authentication is handled by the **bank’s system (IDP)**.
    
3.  The login request is **redirected to the bank’s IDP**, which verifies the user’s identity.
    
4.  If the credentials are correct, the IDP **issues an authentication token** (like a digital key).
    
5.  The Angular app receives this token and uses it for subsequent API requests.
    
    -   This ensures **secure access** without the app managing usernames/passwords directly.
        

---

### **Step 2: Making API Calls**

1.  When the user interacts with the portal (e.g., viewing their portfolio, buying/selling a fund), the Angular app **calls APIs** using the URLs from **config.json**.
    
2.  These API requests are **sent to the backend service**.
    
    **Now, here’s the important part:**
    
    -   Some API calls go to **your project backend (.NET backend for the investment portal)**.
        
    -   Your backend may then need **real-time data**, so it calls **external services like Morningstar or ProBroker APIs**.
        
    -   All communication **passes through the ESB**, which acts as a **secure and centralized message router**. The ESB ensures requests reach the correct backend service, handles security, and may transform data if needed.
        

---

### **Step 3: Backend Processing**

1.  The **.NET backend** receives the API request.
    
2.  It checks the **authentication token** from the IDP to ensure the user is authorized.
    
3.  If the request needs **external market data**, the backend calls **Morningstar, ProBroker, or other bank services**.
    
4.  The backend processes all the data (calculations, fund values, portfolio summaries) and prepares the **response**.
    

---

### **Step 4: Sending Data Back**

1.  The backend sends the processed data back to the **Angular frontend**.
    
2.  The Angular app uses this data to **display portfolio values, charts, and fund information** in real time.
    
3.  If the user is an **advisor**, additional API calls allow **report generation**, which is restricted only to their role.
    

---

### **Step 5: Summary of Flow**

**Login:**  
Angular App → Bank IDP → Token → Angular App

**API Call for Data:**  
Angular App → ESB → Your .NET Backend → External APIs (Morningstar/ProBroker/Bank Services if needed) → Backend → ESB → Angular App → Display to user

---

### **Key Points**

-   **Authentication:** Always handled by **bank’s IDP**, not your app.
    
-   **API routing:** ESB ensures requests go to the correct backend/service.
    
-   **Your backend:** Handles portfolio logic, calculations, and integrates with external financial APIs.
    
-   **Frontend:** Only displays data, calls APIs, and uses the authentication token to access services.
    

---


---

### **1\. User logs in**

-   User enters credentials in the Angular app.
    
-   Angular app **does not authenticate directly**. The login request goes to the **bank’s IDP**, which validates the credentials.
    
-   If successful, the IDP issues an **authentication token**.
    
-   Angular stores this token and uses it for all subsequent API calls.
    

---

### **2\. Angular calls your .NET backend**

-   When the user wants to **view portfolio or buy/sell funds**, the Angular app calls your **.NET backend API** using the URLs in `config.json`.
    
-   **At this point, ESB may or may not be involved**, depending on the bank’s architecture:
    
    **Two common scenarios:**
    
    1.  **ESB in front of your backend:**
        
        -   Angular calls the ESB endpoint → ESB routes the request to your .NET backend.
            
        -   ESB handles security, logging, and ensures requests are properly formatted.
            
    2.  **ESB only for external services:**
        
        -   Angular calls your .NET backend directly.
            
        -   The ESB is **used only when your backend needs data from external systems** like Morningstar or ProBroker.
            
-   In many banking setups, the **ESB is primarily between backend systems**, not between frontend and your backend.
    

---

### **3\. Backend calls external services**

-   Your .NET backend may need **real-time fund or stock data** from **Morningstar or ProBroker**.
    
-   These calls usually go through the **ESB**:
    
    -   Backend → ESB → Morningstar/ProBroker → ESB → Backend
        
-   The ESB handles:
    
    -   Routing the request to the correct service
        
    -   Security/authentication between systems
        
    -   Data transformation if needed
        

---

### **4\. Backend responds to Angular**

-   Once your backend has the data (from its own database and external APIs via ESB), it **processes and prepares the response**.
    
-   The response is sent **back to the Angular app** (through ESB if ESB is in front of your backend, otherwise directly).
    
-   Angular displays the portfolio, charts, or reports to the user.
    

---

### **✅ Key Understanding**

-   **Authentication:** Handled by **IDP**. Angular never stores credentials.
    
-   **Angular → Backend:** Usually **direct API call**, sometimes via ESB if required.
    
-   **Backend → External Services:** **Always through ESB** for Morningstar, ProBroker, or other bank services.
    
-   **ESB’s main role:** Routing, security, and transforming requests/responses **between backend systems**.
    

---

### **Simple Flow Diagram (Text Version)**

```rust
User -> Angular App -> IDP (login & token)
Angular App -> .NET Backend API (via ESB optional)
.NET Backend -> ESB -> Morningstar/ProBroker (external data)
.NET Backend -> Angular App (display data)
```

---

💡 **In short:**

-   **ESB mostly comes into picture when backend communicates with external services or other backend systems.**
    
-   Frontend calls your backend directly or via ESB depending on architecture.
    
-   IDP handles authentication.
    

---


---

### **What is an ESB?**

An **ESB (Enterprise Service Bus)** is a **middleware system** that acts like a **central hub or traffic controller** between different software systems in an organization.

Its main purpose is to **allow multiple applications, services, and APIs to communicate with each other smoothly and securely**, even if they are built on **different technologies**.

---

### **Key Functions of an ESB**

1.  **Message Routing**
    
    -   ESB decides **where a message or request should go**.
        
    -   Example: Your .NET backend requests fund data → ESB routes the request to Morningstar API or ProBroker API.
        
2.  **Protocol Conversion**
    
    -   ESB allows systems using different communication methods (HTTP, SOAP, REST, MQ) to talk to each other.
        
    -   Example: Backend speaks REST, but Morningstar API might require SOAP → ESB converts it automatically.
        
3.  **Data Transformation**
    
    -   ESB can **modify or format the data** to match what the receiving system expects.
        
    -   Example: Backend sends a request in one format → ESB converts it to the format Morningstar expects.
        
4.  **Security & Authentication**
    
    -   ESB ensures only **authorized systems** can communicate.
        
    -   Example: Your backend’s request to Morningstar passes through ESB → ESB handles tokens, certificates, or authentication before sending it to Morningstar.
        
5.  **Error Handling & Logging**
    
    -   ESB tracks all requests/responses between systems.
        
    -   If a system fails, ESB can **retry, log, or alert** administrators.
        
6.  **Service Orchestration**
    
    -   ESB can **coordinate multiple backend services** in a single workflow.
        
    -   Example: A request to generate a portfolio report might need data from multiple services → ESB ensures each service is called in the correct order and aggregates the results.
        

---

### **ESB in Your Project Context**

-   **Frontend (Angular) → Backend (.NET)**
    
    -   Usually, the Angular app calls your backend directly, but in some setups, the request may go through ESB for logging, security, or routing.
        
-   **Backend → External APIs (Morningstar, ProBroker)**
    
    -   Your .NET backend doesn’t directly call external APIs.
        
    -   The **ESB handles all communication with these external systems**, including:
        
        -   Routing the request to the correct service
            
        -   Transforming data formats if needed
            
        -   Managing security and authentication
            
        -   Logging the request and response for monitoring
            
-   **Summary:**
    
    -   ESB acts as a **central hub** that ensures your backend and external services communicate **safely, reliably, and in a standardized way**.
        

---

### **Real-life Analogy**

Think of ESB like a **postal office for software systems**:

-   You (backend) send a letter (API request).
    
-   The postal office (ESB) makes sure it’s delivered to the correct address (external service), in the correct format (data transformation), and only if you’re authorized to send it (security).
    
-   If the letter is lost, the postal office tracks it and notifies you (error handling and logging).
    

---

### **In short:**

**ESB is the central communication hub between backend systems and external services.**  
It handles:

-   Routing requests
    
-   Data transformation
    
-   Security & authentication
    
-   Error handling and logging
    
-   Service orchestration
    

---



---

### 🧩 **What is an IDP (Identity Provider)?**

An **IDP**, short for **Identity Provider**, is a **system that manages user identities and handles authentication** — basically, it’s the service that **verifies who the user is** when they try to log in.

Instead of every application having its own login system, an IDP acts as a **centralized login authority** for multiple systems.

---

### ⚙️ **How it works (in simple steps):**

1.  **User tries to log in** to an application (for example, your Angular investment portal).
    
2.  The app **redirects the login request** to the **IDP**.
    
3.  The IDP **checks the user’s credentials** (like username, password, or digital certificate).
    
4.  If the credentials are correct, the IDP **creates a secure token** (such as a JWT or SAML token) that proves the user’s identity.
    
5.  The token is sent back to your app, and your app uses it to **access APIs or backend services securely** — without ever storing the user’s password.
    

---

### 🔐 **Why IDP is important**

-   **Centralized Authentication:** All users (employees, customers, or advisors) log in through one secure system.
    
-   **Single Sign-On (SSO):** Once logged in, users can access multiple applications without logging in again.
    
-   **Security:** The IDP manages tokens, sessions, and logouts — ensuring data safety and compliance.
    
-   **Access Control:** It can define who can access what (roles, permissions, etc.).
    

---

### 💼 **Example in your project (Bank Investment Portal)**

In your bank project:

-   The **bank’s IDP** handles authentication — not your Angular app.
    
-   When a customer or advisor logs in, the request goes to the **bank’s IDP**.
    
-   The IDP verifies the user and returns an **authentication token** to your Angular app.
    
-   Your Angular app then uses this token to call the **backend APIs** (via ESB) securely.
    
-   You don’t store or check passwords — that’s all handled by the bank’s IDP.
    

---

### 🧠 **Simple Analogy**

Think of the **IDP** like a **security gate** at a bank office:

-   You (the user) show your ID card (credentials).
    
-   The guard (IDP) verifies it.
    
-   Once verified, you get a visitor pass (token).
    
-   You can now enter different rooms (applications) without showing your ID again.
    

---

### ✅ **In short:**

An **IDP (Identity Provider)** is a **central login system** that:

-   Authenticates users,
    
-   Issues tokens to prove identity, and
    
-   Allows secure access to applications and services (often using **Single Sign-On**).
    

---