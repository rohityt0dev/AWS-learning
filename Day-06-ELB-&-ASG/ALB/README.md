# Application Load Balancer (ALB) Summary

## What is an Application Load Balancer?

An **Application Load Balancer (ALB)** is an AWS load balancer that operates at **Layer 7 (Application Layer)** of the OSI model. It distributes **HTTP** and **HTTPS** traffic to one or more application servers.

---

# Key Features

### ✅ Layer 7 Load Balancer

- Operates at the **Application Layer (Layer 7)**.
- Supports **HTTP** and **HTTPS** traffic.
- Routes requests based on URL path, hostname, headers, and query strings.

---

### ✅ Load Balancing Across Multiple EC2 Instances

- Distributes incoming traffic across multiple EC2 instances.
- Improves application availability and reliability.
- Uses **Target Groups** to route traffic.

Example:

```text
Users
   │
   ▼
Application Load Balancer
        │
        ▼
   Target Group
   ┌───────────┐
   ▼           ▼
EC2-1       EC2-2
```

---

### ✅ Load Balancing Multiple Applications on the Same Server

An ALB can route requests to multiple applications running on the same EC2 instance using different ports.

Example:

```text
Application 1 → Port 80

Application 2 → Port 8080

Application 3 → Port 5000
```

---

### ✅ Best for Microservices and Containers

Application Load Balancer works well with:

- Docker
- Amazon ECS
- Kubernetes (Amazon EKS)
- Microservices Architecture

Each service can run in its own container while the ALB routes traffic to the correct service.

---

### ✅ Port Mapping

ALB supports **Port Mapping**, allowing traffic to be forwarded to different ports on the target instances.

Example:

```text
Client Request
      │
      ▼
Application Load Balancer
      │
      ├────────► EC2 :80
      ├────────► EC2 :8080
      └────────► EC2 :5000
```

This is useful when multiple applications or containers are running on the same server.

---

# Architecture

```text
                 Internet
                      │
                      ▼
        Application Load Balancer (Layer 7)
                      │
             HTTP / HTTPS Requests
                      │
              Target Groups
        ┌─────────────┴─────────────┐
        ▼                           ▼
   EC2 Instance 1              EC2 Instance 2
   Port 80                     Port 80
        │                           │
     Application               Application
```

---

# Use Cases

- Web Applications
- REST APIs
- Microservices
- Docker Containers
- Amazon ECS
- Amazon EKS
- Multi-tier Applications

---

# Advantages

- Supports HTTP and HTTPS
- Path-based routing
- Host-based routing
- Port mapping support
- High availability
- Health checks
- Integrates with Auto Scaling Groups
- Supports SSL/TLS termination

---

# Best For

- Web applications
- Containerized applications
- Microservices
- Applications requiring Layer 7 routing
- Applications running on Amazon ECS or Kubernetes