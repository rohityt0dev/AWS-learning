# 🎯 Lab: Create an Amazon EC2 Target Group

An **Amazon EC2 Target Group** is a collection of resources (such as EC2 instances) that receive traffic from an **Application Load Balancer (ALB)** or **Network Load Balancer (NLB)**. Target Groups enable load balancing, health monitoring, and automatic traffic routing to healthy targets.

---

# 🎯 Objective

- Create an Amazon EC2 Target Group
- Register EC2 instances
- Configure Health Checks
- Verify target health
- Prepare the Target Group for an Application Load Balancer

---

# 🛠️ Services Used

- Amazon EC2
- Target Groups
- Application Load Balancer (ALB)

---

# 🏗️ Architecture

```text
                    Internet
                        │
                        ▼
          Application Load Balancer
                        │
                Listener (HTTP :80)
                        │
              Target Group (web-tg)
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
   EC2 Instance 1                  EC2 Instance 2
      Port:80                         Port:80
       Apache                          Apache
```

---

# 🚀 Open the EC2 Console

1. Sign in to the **AWS Management Console**.
2. Navigate to **Amazon EC2**.
3. In the left navigation pane, under **Load Balancing**, click:

```text
Target Groups
```

4. Click:

```text
Create target group
```

---

# 🎯 Choose the Target Type

Select:

```text
Instances
```

| Target Type | Description |
|-------------|-------------|
| Instances | Register EC2 instances *(Most Common)* |
| IP addresses | Register specific IP addresses |
| Lambda function | Route requests to AWS Lambda |
| Application Load Balancer | Chain multiple ALBs together |

For EC2 web servers, choose:

```text
Instances
```

Click:

```text
Next
```

---

# ⚙️ Configure the Target Group

Configure the following settings.

| Setting | Value |
|----------|-------|
| Target Group Name | web-tg |
| Protocol | HTTP |
| Port | 80 |
| IP Address Type | IPv4 |
| VPC | Same VPC as your EC2 instances |

Click:

```text
Next
```

---

# ❤️ Configure Health Checks

Health Checks allow the Load Balancer to determine whether each EC2 instance is healthy and able to receive traffic.

| Setting | Value |
|----------|-------|
| Protocol | HTTP |
| Path | `/` or `/health` |
| Port | Traffic Port |
| Healthy Threshold | 2 |
| Unhealthy Threshold | 2 |
| Timeout | 5 Seconds |
| Interval | 30 Seconds |
| Success Codes | 200 |

> **Tip:** If your application provides a dedicated health endpoint such as `/health`, use it instead of `/`.

Click:

```text
Next
```

---

# ⚙️ Advanced Health Check Settings (Optional)

Unless your application requires custom settings, leave the defaults.

| Setting | Value |
|----------|-------|
| Deregistration Delay | 300 Seconds |
| Slow Start | Disabled |
| Stickiness | Disabled |

Click:

```text
Next
```

---

# 🖥️ Register EC2 Instances

AWS displays the available EC2 instances.

Select:

```text
✅ web-server-1

✅ web-server-2
```

Click:

```text
Include as pending below
```

The selected instances appear under:

```text
Targets to register
```

Click:

```text
Create target group
```

---

# ✅ Verify the Target Group

Open the newly created Target Group.

Select the:

```text
Targets
```

tab.

Initially, the target status may be:

```text
Initial
```

After the Health Checks pass, the status changes to:

```text
Healthy
```

Expected Result:

```text
Target Group: web-tg

Targets

✔ web-server-1     Healthy

✔ web-server-2     Healthy
```

---

# ✅ Expected Result

After completing this lab:

- A Target Group is successfully created.
- Both EC2 instances are registered.
- Health Checks validate the availability of each instance.
- Healthy instances are ready to receive traffic from an Application Load Balancer.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create an Amazon EC2 Target Group
- The different Target Types supported by AWS
- How to configure Health Checks
- How to register EC2 instances as targets
- How Target Groups work with an Application Load Balancer
- How AWS routes traffic only to healthy instances

---

# ⚠️ Best Practices

- Deploy EC2 instances across multiple Availability Zones for High Availability.
- Use a dedicated health endpoint (such as `/health`) for more accurate health monitoring.
- Ensure the Security Group allows traffic on the application port (for example, HTTP 80).
- Register only healthy and properly configured EC2 instances.
- Regularly monitor Target Health using Amazon CloudWatch and the EC2 console.
```
