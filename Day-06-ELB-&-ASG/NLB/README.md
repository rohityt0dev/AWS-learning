# Network Load Balancer (NLB) Summary

## What is a Network Load Balancer?

A **Network Load Balancer (NLB)** is an AWS load balancer that operates at **Layer 4 (Transport Layer)** of the OSI model. It distributes **TCP**, **UDP**, and **TLS** traffic to multiple targets while providing **ultra-low latency** and **high performance**.

---

# Key Features

### ✅ Layer 4 Load Balancer

- Operates at the **Transport Layer (Layer 4)**.
- Routes traffic based on **IP address** and **port number**.
- Supports TCP, UDP, and TLS protocols.

---

### ✅ Supports TCP and UDP Traffic

NLB forwards:

- TCP traffic
- UDP traffic
- TLS traffic

It is ideal for applications that require fast and reliable network communication.

---

### ✅ Handles Millions of Requests Per Second

- Designed for extremely high performance.
- Can process **millions of requests per second**.
- Automatically scales to handle sudden traffic spikes.

---

### ✅ Ultra-Low Latency

- Provides very fast request processing.
- Suitable for applications that require minimal network delay.

---

### ✅ Static IP Address

- Each Availability Zone (AZ) gets **one static IP address**.
- Clients can always connect using the same IP address.

---

### ✅ Supports Elastic IP

- You can assign an **Elastic IP (EIP)** to each Availability Zone.
- Useful when applications or firewalls require fixed public IP addresses.

---

# Architecture

```text
                 Internet
                      │
                      ▼
       Network Load Balancer (Layer 4)
                      │
          TCP / UDP / TLS Traffic
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
     EC2 Instance 1          EC2 Instance 2
```

---

# Comparison with Application Load Balancer

| Feature | Application Load Balancer (ALB) | Network Load Balancer (NLB) |
|---------|----------------------------------|-----------------------------|
| OSI Layer | Layer 7 | Layer 4 |
| Protocols | HTTP, HTTPS | TCP, UDP, TLS |
| Routing | Path-based, Host-based | IP Address and Port |
| Performance | High | Very High |
| Latency | Low | Ultra-Low |
| Static IP | No | Yes |
| Elastic IP Support | No | Yes |
| Best For | Web Applications | High-performance Network Applications |

---

# Use Cases

- Online gaming
- Real-time communication
- IoT applications
- Video streaming
- Financial trading systems
- DNS services
- High-performance APIs
- Applications using TCP or UDP protocols

---

# Advantages

- High throughput
- Ultra-low latency
- Handles millions of requests per second
- Supports static IP addresses
- Supports Elastic IPs
- Automatic scaling
- High availability across multiple Availability Zones

---

# Best For

- TCP and UDP applications
- Performance-critical workloads
- Applications requiring fixed IP addresses
- Real-time applications
- Gaming and streaming services