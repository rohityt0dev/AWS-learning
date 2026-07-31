# AWS Network Load Balancer (NLB) - Step-by-Step Lab Guide

This lab demonstrates how to create an **AWS Network Load Balancer (NLB)** to distribute **TCP traffic** across two EC2 instances running Apache Web Server.

---

# 🎯 Objective

After completing this lab, you will be able to:

- Launch multiple EC2 instances
- Install and configure Apache Web Server
- Create a Target Group
- Create a Network Load Balancer (NLB)
- Register EC2 instances as targets
- Verify health checks
- Test TCP load balancing using the NLB DNS name

---

# 🛠️ AWS Services Used

- Amazon EC2
- Network Load Balancer (NLB)
- Target Groups
- Amazon VPC
- Security Groups

---

# 🏗️ Architecture

```text
                    Internet
                        │
                        ▼
        Network Load Balancer (TCP : 80)
                        │
            ┌───────────┴───────────┐
            ▼                       ▼
     EC2@LB-01                 EC2@LB-02
    Apache Server             Apache Server
   "Welcome Server 1"       "Welcome Server 2"
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- AWS Account
- Existing VPC
- Two Public Subnets (or more)
- EC2 Key Pair
- Internet Gateway
- Security Group

---

# 🚀 Launch EC2 Instances

Launch **2 Amazon Linux EC2 instances**.

| Instance | Name |
|----------|------|
| EC2-1 | EC2@LB-01 |
| EC2-2 | EC2@LB-02 |

Verify both instances are in the **Running** state.

---

# 🚀 Install Apache Web Server

Connect to each EC2 instance.

### Update Packages

```bash
sudo yum update -y
```

### Install Apache

```bash
sudo yum install httpd -y
```

### Enable Apache

```bash
sudo systemctl enable httpd
```

### Start Apache

```bash
sudo systemctl start httpd
```

### Verify Status

```bash
sudo systemctl status httpd
```

Expected Output:

```text
Active: active (running)
```

---

# 🚀 Create Different Web Pages

## EC2@LB-01

```bash
sudo nano /var/www/html/index.html
```

Paste:

```html
<!DOCTYPE html>
<html>
<head>
<title>Server 1</title>
</head>
<body>
<h1>Welcome to EC2 Server 1</h1>
</body>
</html>
```

Save the file.

---

## EC2@LB-02

```bash
sudo nano /var/www/html/index.html
```

Paste:

```html
<!DOCTYPE html>
<html>
<head>
<title>Server 2</title>
</head>
<body>
<h1>Welcome to EC2 Server 2</h1>
</body>
</html>
```

Save the file.

---

# 🔐 Configure Security Group

Allow the following inbound rules.

| Type | Protocol | Port | Source |
|------|----------|------|---------|
| SSH | TCP | 22 | My IP |
| HTTP | TCP | 80 | 0.0.0.0/0 |

---

# 🌐 Test the EC2 Servers

Open each EC2 instance using its **Public IP**.

Example:

```text
http://Public-IP-1
```

Output:

```text
Welcome to EC2 Server 1
```

Open:

```text
http://Public-IP-2
```

Output:

```text
Welcome to EC2 Server 2
```

If both pages open successfully, Apache is working correctly.

---

# 🎯 Create a Target Group

Navigate to:

```text
AWS Console
      │
      ▼
EC2
      │
      ▼
Target Groups
      │
      ▼
Create Target Group
```

Configure the Target Group.

| Setting | Value |
|---------|-------|
| Target Type | Instance |
| Protocol | TCP |
| Port | 80 |
| VPC | Select your VPC |

Click **Next**.

Register the following instances:

- EC2@LB-01
- EC2@LB-02

Click **Include as pending below**.

Finally, click **Create Target Group**.

---

# 🌐 Create the Network Load Balancer

Navigate to:

```text
EC2
   │
   ▼
Load Balancers
   │
   ▼
Create Load Balancer
   │
   ▼
Network Load Balancer
```

Configure the NLB.

| Setting | Value |
|---------|-------|
| Name | DemoNLB |
| Scheme | Internet-facing |
| IP Address Type | IPv4 |
| VPC | Select your VPC |
| Availability Zones | At least two public subnets |
| Listener Protocol | TCP |
| Listener Port | 80 |
| Forward To | Demo-TG-NLB |

Example Availability Zones:

- ap-south-1a
- ap-south-1b
- ap-south-1c

Click **Create Load Balancer**.

---

# ❤️ Verify Health Checks

AWS automatically checks the health of the registered targets.

Expected Status:

```text
Healthy : 2

Unhealthy : 0
```

This indicates both EC2 instances are healthy and ready to receive traffic.

---

# 🌍 Copy the NLB DNS Name

After the NLB is created, copy its **DNS Name**.

Example:

```text
DemoNLB-c1f818c84c0d241b.elb.ap-south-1.amazonaws.com
```

Open it in your browser.

```text
http://DemoNLB-c1f818c84c0d241b.elb.ap-south-1.amazonaws.com
```

---

# 🔄 Test Load Balancing

Refresh the page multiple times.

You may see:

```text
Welcome to EC2 Server 1
```

or

```text
Welcome to EC2 Server 2
```

> **Note:** A Network Load Balancer (NLB) balances **TCP connections**, not individual HTTP requests. Modern browsers often reuse the same TCP connection (HTTP keep-alive), so repeated page refreshes may continue to reach the same EC2 instance. To observe traffic distributed across both servers, try using an incognito window, a different browser, or create new connections with a tool such as `curl`.

---

# 📊 NLB Workflow

```text
Launch EC2 Instances
        │
        ▼
Install Apache
        │
        ▼
Create Different Web Pages
        │
        ▼
Configure Security Groups
        │
        ▼
Create Target Group
        │
        ▼
Register EC2 Instances
        │
        ▼
Create Network Load Balancer
        │
        ▼
Health Checks Become Healthy
        │
        ▼
Access NLB DNS Name
        │
        ▼
Traffic Distributed Across EC2 Instances
```

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- What a Network Load Balancer (NLB) is
- How NLB distributes TCP traffic
- How to create a Target Group
- How to register EC2 instances as targets
- How NLB health checks work
- How to test load balancing using the NLB DNS name

---

# ⚠️ Best Practices

- Deploy the NLB across multiple Availability Zones for high availability.
- Use Security Groups to restrict unnecessary access.
- Monitor target health using AWS health checks.
- Use Elastic IPs if your application requires fixed public IP addresses.
- Use NLB for high-performance TCP, UDP, or TLS workloads.
