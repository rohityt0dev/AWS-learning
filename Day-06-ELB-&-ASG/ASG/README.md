# Amazon Auto Scaling Group (ASG)

An **Amazon Auto Scaling Group (ASG)** automatically manages EC2 instances to ensure your application has the right number of servers based on demand. It helps improve availability, scalability, and fault tolerance.

---

# What is an Auto Scaling Group?

In real-world applications, user traffic can increase or decrease at any time.

Instead of manually launching or terminating EC2 instances, an Auto Scaling Group automatically adjusts the number of running instances based on the application's workload.

---

# Goals of an Auto Scaling Group

### 📈 Scale Out

Automatically **adds EC2 instances** when application demand increases.

---

### 📉 Scale In

Automatically **removes EC2 instances** when demand decreases to reduce costs.

---

### ✅ Maintain Capacity

Ensures that the required minimum number of EC2 instances is always running.

You can configure:

- Minimum Capacity
- Desired Capacity
- Maximum Capacity

---

### ⚖️ Load Balancer Integration

Automatically registers newly launched EC2 instances with an **Application Load Balancer (ALB)** or **Network Load Balancer (NLB)**.

---

### 🔄 Automatic Instance Replacement

If an EC2 instance becomes unhealthy or is terminated, the ASG automatically launches a replacement instance to maintain the desired capacity.

---

# Architecture

```text
                  Internet
                      │
             Application Load Balancer
                      │
            Auto Scaling Group (ASG)
          ┌───────────┴───────────┐
          │                       │
     EC2 Instance             EC2 Instance
```

---

# Auto Scaling Group Attributes

An Auto Scaling Group uses a **Launch Template** to create EC2 instances.

A Launch Template includes:

- Amazon Machine Image (AMI)
- User Data Script
- EC2 Instance Type
- EBS Volume Configuration
- Security Groups
- SSH Key Pair
- IAM Role
- Network and Subnet Information
- Load Balancer Configuration
- Minimum Capacity
- Desired Capacity
- Maximum Capacity

> **Note:** Launch Templates are the recommended option. **Launch Configurations** are deprecated.

---

# Key Benefits

- Automatically scales EC2 instances
- Improves application availability
- Reduces infrastructure costs
- Replaces unhealthy instances automatically
- Integrates with Load Balancers
- Supports High Availability across multiple Availability Zones

---

# Common Use Cases

- Web Applications
- E-commerce Platforms
- APIs and Microservices
- DevOps Environments
- High-Traffic Applications
- Fault-Tolerant Architectures
