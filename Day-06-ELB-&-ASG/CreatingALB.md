# ⚖️ Lab: Create an Application Load Balancer (ALB)

An **Application Load Balancer (ALB)** is an Elastic Load Balancer that distributes incoming HTTP and HTTPS traffic across multiple EC2 instances. It improves **High Availability**, **Fault Tolerance**, and **Scalability** by routing requests only to healthy instances.

---

# 🎯 Objective

- Create an Application Load Balancer (ALB)
- Configure networking and security
- Create a Target Group
- Register EC2 instances
- Configure Health Checks
- Verify Load Balancing

---

# 🛠️ Services Used

- Amazon EC2
- Application Load Balancer (ALB)
- Target Groups
- Security Groups

---

# 🏗️ Architecture

```text
                    Internet
                        │
                        ▼
          Application Load Balancer (ALB)
          DNS: my-alb.amazonaws.com
                        │
               Listener (HTTP :80)
                        │
                Target Group (Web-TG)
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
   EC2 Instance 1                  EC2 Instance 2
 AZ: ap-south-1a                 AZ: ap-south-1a
        │                               │
 Apache Web Server              Apache Web Server
```

---

# 🚀 Open the EC2 Dashboard

1. Sign in to the **AWS Management Console**.
2. Navigate to **Amazon EC2**.
3. In the left navigation pane, click:

```text
Load Balancers
```

4. Click:

```text
Create Load Balancer
```

---

# 🌐 Step 2: Choose the Load Balancer Type

Select:

```text
Application Load Balancer
```

Click:

```text
Create
```

---

# ⚙️ Step 3: Basic Configuration

Configure the following settings.

| Setting | Value |
|----------|-------|
| Name | my-alb |
| Scheme | Internet-facing |
| IP Address Type | IPv4 |
| Load Balancer Type | Application Load Balancer |

---

# 🌍 Step 4: Configure Network Mapping

Choose the VPC where your EC2 instances are running.

Example:

```text
Default VPC
```

Enable at least **two Availability Zones**.

| Availability Zone | Subnet |
|-------------------|---------|
| ap-south-1a | Public Subnet A |
| ap-south-1b | Public Subnet B |

---

# 🔐 Step 5: Configure the Security Group

Create a new Security Group or select an existing one.

### Inbound Rules

| Type | Port | Source |
|------|------|---------|
| HTTP | 80 | 0.0.0.0/0 |

### Outbound Rules

| Type | Destination |
|------|-------------|
| All Traffic | 0.0.0.0/0 |

---

# 🎯 Step 6: Create a Target Group

Click:

```text
Create Target Group
```

Configure the Target Group.

| Setting | Value |
|----------|-------|
| Target Type | Instances |
| Name | web-target-group |
| Protocol | HTTP |
| Port | 80 |
| VPC | Same VPC as EC2 Instances |

Click:

```text
Next
```

---

# ❤️ Step 7: Configure Health Checks

Configure the Health Check settings.

| Setting | Value |
|----------|-------|
| Protocol | HTTP |
| Path | `/` (or `/health`) |
| Healthy Threshold | 2 |
| Unhealthy Threshold | 2 |
| Timeout | 5 Seconds |
| Interval | 30 Seconds |

Click:

```text
Next
```

---

# 🖥️ Step 8: Register Targets

Select the EC2 instances.

```text
web-server-1

web-server-2
```

Click:

```text
Include as pending below
```

Then click:

```text
Create Target Group
```

---

# 🔗 Step 9: Attach the Target Group

Return to the ALB creation page.

Under **Listeners and Routing**, configure:

| Listener | Target Group |
|-----------|--------------|
| HTTP :80 | web-target-group |

Click:

```text
Create Load Balancer
```

---

# ⏳ Step 10: Wait for Provisioning

The ALB status will initially be:

```text
Provisioning
```

After approximately **1–3 minutes**, the status changes to:

```text
Active
```

---

# 🌍 Step 11: Access the Load Balancer

Copy the **DNS Name** of the ALB.

Example:

```text
my-alb-123456789.ap-south-1.elb.amazonaws.com
```

Open it in your browser.

```text
http://my-alb-123456789.ap-south-1.elb.amazonaws.com
```

---

# 🧪 Step 12: Test Load Balancing

Refresh the page several times.

If both EC2 instances are healthy, requests will be distributed between them.

Example responses:

```text
Welcome from EC2 Server 1
```

Refresh:

```text
Welcome from EC2 Server 2
```

If your User Data script displays the hostname or instance ID, you will see different values as the ALB routes traffic to different EC2 instances.

---

# ✅ Expected Result

After completing this lab:

- An Application Load Balancer is created.
- Two Availability Zones are configured.
- A Target Group is associated with the ALB.
- Both EC2 instances pass the health checks.
- The ALB distributes incoming traffic across the EC2 instances.
- The application remains available even if one instance becomes unavailable.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create an Application Load Balancer (ALB)
- How ALBs distribute traffic across multiple EC2 instances
- How to create and configure Target Groups
- How Health Checks determine instance availability
- How to register EC2 instances as targets
- How High Availability is achieved using multiple Availability Zones

---

# ⚠️ Best Practices

- Deploy EC2 instances in at least **two Availability Zones**.
- Configure Health Checks to automatically detect unhealthy instances.
- Allow only required ports (HTTP/HTTPS) in the ALB Security Group.
- Restrict SSH access to your EC2 instances using **My IP**.
- Use HTTPS with SSL/TLS certificates from **AWS Certificate Manager (ACM)** for production workloads.
- Enable access logs and CloudWatch metrics to monitor ALB performance.
