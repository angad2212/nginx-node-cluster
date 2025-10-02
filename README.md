# Mini Load Balancing Demo with NGINX + Node.js

This repo is a **tiny practical project** that demonstrates some core **distributed systems concepts**:  
- Latency vs Throughput  
- Horizontal vs Vertical Scaling  
- How Load Balancers work (Reverse Proxy, Forward Proxy)  
- A hands-on demo using **NGINX as a load balancer** across two simple Node servers  

---

## Key Concepts (Beginner-Friendly)

### Latency
- **Meaning**: The time taken for **one request** to travel from client → server → back to client.  
- **Think**: *How fast does one flashcard appear after I click “next”?*  
- **Low latency** = snappy, instant responses.  
- **High latency** = laggy, delayed responses.

---

### Throughput
- **Meaning**: The number of **requests handled per second** (capacity).  
- **Think**: *How many students can click “next card” at the same time without overloading the system?*  
- **High throughput** = can serve many users simultaneously.  
- **Low throughput** = requests pile up, users wait.  

---

### Horizontal vs Vertical Scaling

- **Vertical Scaling (Scale Up)**  
  - Add more power (CPU, RAM) to a single machine.  
  - Easy to do, but limited — one machine can only get so big.  
  - *Analogy*: Hire one super-teacher for the entire school.  

- **Horizontal Scaling (Scale Out)**  
  - Add **more machines** with the same code and spread load across them.  
  - Virtually unlimited scaling.  
  - Needs load balancing.  
  - *Analogy*: Hire 10 normal teachers and share the students among them.  

**Benefits & Use Cases**  
- Vertical → good for small apps or quick fixes.  
- Horizontal → essential for large systems like Google, Amazon, Netflix.  

---

### Load Balancers

A **Load Balancer (LB)** is like a **traffic cop 🚦**:  
- Clients send requests to the LB (one public address).  
- LB forwards each request to one of many backend servers.  
- Spreads the load, improves reliability, and hides server details.  

#### Reverse Proxy
- Sits **in front of backend servers**.  
- Clients don’t know about the actual servers, only the proxy.  
- Can do load balancing, SSL termination, caching, etc.  
- *Example*: NGINX in this repo.  

#### Forward Proxy
- Sits **in front of clients**.  
- Client sends request to proxy → proxy fetches data on their behalf.  
- Often used for **privacy, filtering, or caching**.  
- *Example*: A school proxy that filters websites for students.  

---

## 🛠️ What This Repo Does

This is a **mini demo of horizontal scaling with load balancing**:

1. Created **two identical Node.js servers** running on different ports (`3000` and `3001`).  
   - Each server replies with its port number so we know which one handled the request.  

2. Configured **NGINX as a reverse proxy / load balancer** on port `8080`.  
   - Requests to `http://localhost:8080/` are forwarded to Node server 3000 or 3001.  
   - NGINX uses **round robin** (default) to alternate between servers.  

3. Tested with **Postman** and **curl**.  
   - Repeated requests show alternating responses:  
    <img width="842" height="315" alt="Image" src="https://github.com/user-attachments/assets/a7a1d18d-971e-42c7-9d16-367753a4dc18" />
    <img width="840" height="314" alt="Image" src="https://github.com/user-attachments/assets/808eff40-0b06-42f5-8d27-af8082cd2d99" />
    
   - This simulates **horizontal scaling at a tiny level** — multiple servers sharing load with a load balancer in front.  

---

## Why This Matters

- Even though this demo runs **only on your laptop**, it mirrors how **big companies (Google, Amazon, Netflix)** scale to millions of users.  
- The same principles (load balancing, horizontal scaling, reducing latency, increasing throughput) apply whether you’re running 2 servers or 20,000.  

---

## How to Run Locally

1. Start two Node servers:  
   ```bash
   PORT=3000 node backend/server.js
   PORT=3001 node backend/server.js
