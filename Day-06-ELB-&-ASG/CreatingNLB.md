# 🌐 Lab: Create a Network Load Balancer (NLB) in AWS

A **Network Load Balancer (NLB)** is an AWS Elastic Load Balancer that operates at **Layer 4 (Transport Layer)** of the OSI model. It distributes **TCP, UDP, TLS, and TCP_UDP** traffic across multiple targets, providing **high performance**, **low latency**, and the ability to handle **millions of requests per second**.

---

# 🎯 Objective

- Create a Network Load Balancer (NLB)
- Configure a TCP Listener
- Create a Target Group
- Register EC2 instances
- Configure Health Checks
- Verify traffic distribution

---

# 🛠️ Services Used

- Amazon EC2
- Network Load Balancer (NLB)
- Target Groups

---

# 🏗️ Architecture

```text
                 Internet
                     │
                     ▼
          Network Load Balancer
             Listener (TCP :80)
                     │
              Target Group (TCP)
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
   EC2 Instance 1            EC2 Instance 2
     Apache :80                Apache :80
       AZ-1                      AZ-2
```

---

# ✅ Prerequisites

Before creating the Network Load Balancer, ensure you already have:

- ✅ VPC
- ✅ Two Public Subnets (Different Availability Zones)
- ✅ Two EC2 Instances
- ✅ Apache or Nginx running on Port **80**
- ✅ Security Group allowing HTTP (Port 80)

---

# 🚀 Step 1: Open the EC2 Console

1. Sign in to the **AWS Management Console**.
2. Navigate to **Amazon EC2**.
3. In the left navigation pane, under **Load Balancing**, click:

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
Network Load Balancer
```

Click:

```text
Create
```

---

# ⚙️ Step 3: Configure Basic Settings

Configure the following settings.

| Setting | Value |
|----------|-------|
| Name | my-nlb |
| Scheme | Internet-facing |
| IP Address Type | IPv4 |

> **Note:** Choose **Internal** instead of **Internet-facing** if the NLB should only be accessible from within your VPC.

---

# 🌍 Step 4: Configure Network Mapping

Choose the VPC where your EC2 instances are running.

Enable at least **two Availability Zones**.

| Availability Zone | Subnet |
|-------------------|---------|
| ap-south-1a | Public Subnet A |
| ap-south-1b | Public Subnet B |

Click:

```text
Next
```

---

# 🎧 Step 5: Configure the Listener

Create a listener.

| Setting | Value |
|----------|-------|
| Protocol | TCP |
| Port | 80 |

> **Note:** NLB also supports **TLS**, **UDP**, and **TCP_UDP** depending on your application requirements.

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
| Name | nlb-target-group |
| Protocol | TCP |
| Port | 80 |
| VPC | Your VPC |

Click:

```text
Next
```

---

# ❤️ Step 7: Configure Health Checks

Although the NLB forwards **TCP** traffic, you can configure **HTTP** health checks for web applications.

Recommended settings:

| Setting | Value |
|----------|-------|
| Health Check Protocol | HTTP |
| Health Check Path | / |
| Healthy Threshold | 3 |
| Unhealthy Threshold | 3 |
| Interval | 30 Seconds |
| Timeout | 6 Seconds |

> **Note:** For non-HTTP applications (such as databases), use **TCP Health Checks** instead.

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

Return to the NLB creation page.

Under **Default Action**, choose:

```text
Forward to:
nlb-target-group
```

Click:

```text
Create Load Balancer
```

---

# ⏳ Step 10: Wait for the NLB to Become Active

Initially, the status will be:

```text
Provisioning
```

After a few minutes:

```text
Active
```

---

# 🌍 Step 11: Test the Network Load Balancer

Copy the **DNS Name** of the Network Load Balancer.

Example:

```text
my-nlb-123456789.ap-south-1.elb.amazonaws.com
```

Open it in your browser.

```text
http://my-nlb-123456789.ap-south-1.elb.amazonaws.com
```

Refresh the page multiple times.

Traffic should be distributed between both EC2 instances.

---

# 🔐 Security Group Configuration

## EC2 Security Group

| Type | Port | Source |
|------|------|---------|
| HTTP | 80 | VPC CIDR or appropriate source* |
| SSH | 22 | My IP |

> **Note:** If your NLB is configured with Security Groups (supported in newer AWS configurations), you can allow HTTP traffic from the NLB Security Group instead of the VPC CIDR.

---

# ❤️ Verify Target Health

Navigate to:

```text
EC2
    ↓
Target Groups
    ↓
nlb-target-group
    ↓
Targets
```

Expected status:

```text
✔ web-server-1    Healthy

✔ web-server-2    Healthy
```

---

# 🔄 NLB Request Flow

```text
Internet
    │
    ▼
Network Load Balancer
    │
    ▼
Target Group
    │
    ├──────────────► EC2 Instance 1
    │
    └──────────────► EC2 Instance 2
```

---

# 🛠️ Common Issues

| Problem | Possible Cause | Solution |
|----------|----------------|----------|
| Targets are unhealthy | Web server isn't running | Check `sudo systemctl status httpd` |
| Health checks fail | Wrong protocol or path | Verify TCP/HTTP health check settings |
| Connection timeout | Security Group or NACL issue | Allow the required application port |
| NLB not reachable | Incorrect subnet or routing | Ensure the NLB is deployed in public subnets with an Internet Gateway |

---

# ✅ Expected Result

After completing this lab:

- A Network Load Balancer is created successfully.
- A TCP Listener is configured on Port **80**.
- A Target Group is created and associated with the NLB.
- Both EC2 instances are registered and become **Healthy**.
- Incoming traffic is distributed across the EC2 instances.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create a Network Load Balancer
- The difference between Layer 4 (NLB) and Layer 7 (ALB) load balancing
- How to configure TCP listeners
- How to create and configure Target Groups
- How Health Checks work with NLB
- How to verify target health and troubleshoot common issues

---

# ⚠️ Best Practices

- Deploy targets across multiple Availability Zones for High Availability.
- Use TCP Health Checks for non-HTTP applications.
- Restrict EC2 Security Groups to trusted sources such as the VPC CIDR or the NLB Security Group.
- Monitor Target Health and NLB metrics using Amazon CloudWatch.
- Use Network Load Balancers for high-performance, low-latency TCP/UDP applications.