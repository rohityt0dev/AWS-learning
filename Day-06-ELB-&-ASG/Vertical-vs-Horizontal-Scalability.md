# Vertical vs Horizontal Scalability

Scalability is the ability of a system to handle increasing workloads by adding resources. AWS supports two main types of scalability: **Vertical Scaling** and **Horizontal Scaling**.

---

# 📈 Vertical Scalability

## What is Vertical Scalability?

Vertical Scalability means **increasing the size or power of an existing server**.

Instead of adding more servers, you upgrade the current server with more CPU, RAM, or storage.

### Example

Your application is running on:

```text
t2.micro
```

Upgrade it to:

```text
t2.large
```

This provides more CPU and memory to the same instance.

---

## Architecture

```text
Before

Application
     │
     ▼
 EC2 t2.micro

        │
 Upgrade Instance
        ▼

After

Application
     │
     ▼
 EC2 t2.large
```

---

## Services That Support Vertical Scaling

- Amazon RDS
- Amazon ElastiCache
- Amazon EC2

---

## Advantages

- Easy to implement
- No application changes required
- Better performance with more CPU and RAM

---

## Limitations

- Maximum size is limited by the largest instance type.
- May require downtime during resizing.
- Not suitable for large distributed applications.

---

## Common Use Cases

- Relational Databases (Amazon RDS)
- Redis or Memcached (Amazon ElastiCache)
- Small applications
- Legacy applications

---

# 📊 Horizontal Scalability

## What is Horizontal Scalability?

Horizontal Scalability means **adding more servers or instances** to handle increased traffic.

Instead of upgrading one server, multiple servers work together.

### Example

Before:

```text
1 EC2 Instance
```

After:

```text
4 EC2 Instances
```

Traffic is distributed using a Load Balancer.

---

## Architecture

```text
                 Users
                   │
                   ▼
          Application Load Balancer
                   │
     ┌─────────────┼─────────────┐
     ▼             ▼             ▼
 EC2 Instance   EC2 Instance   EC2 Instance
```

---

## Services That Support Horizontal Scaling

- Amazon EC2
- Auto Scaling Group (ASG)
- Application Load Balancer (ALB)
- Network Load Balancer (NLB)

---

## Advantages

- High Availability
- Better Fault Tolerance
- Easy to handle large traffic
- Supports automatic scaling
- No single point of failure

---

## Limitations

- More complex architecture
- Requires load balancing
- Application should support distributed systems

---

## Common Use Cases

- Web Applications
- Microservices
- APIs
- E-commerce Websites
- High-Traffic Applications

---

# 🔄 Comparison

| Feature | Vertical Scaling | Horizontal Scaling |
|---------|------------------|--------------------|
| Method | Upgrade existing server | Add more servers |
| Example | t2.micro → t2.large | 1 EC2 → Multiple EC2 Instances |
| Cost | Higher instance cost | More instance cost |
| Downtime | May require downtime | Usually little or no downtime |
| High Availability | No | Yes |
| Fault Tolerance | Low | High |
| Best For | Databases | Web Applications |
| AWS Services | RDS, ElastiCache, EC2 | EC2, ASG, ALB, NLB |

---

# 📚 Learning Outcomes

After reading this guide, you will understand:

- What Vertical Scalability is
- What Horizontal Scalability is
- The difference between the two
- Which AWS services support each type
- When to use Vertical or Horizontal Scaling

---

# 💡 Quick Memory Trick

**Vertical Scaling = Scale Up ⬆️**

```text
t2.micro
     │
     ▼
t2.large
```

**Horizontal Scaling = Scale Out ➡️**

```text
EC2-1

        │
        ▼

EC2-1   EC2-2   EC2-3
```