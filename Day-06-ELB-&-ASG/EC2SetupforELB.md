# ⚖️ Lab: Deploy Two EC2 Instances Behind an Elastic Load Balancer (ELB)

This lab demonstrates how to deploy **two Amazon EC2 instances** across different **Availability Zones (AZs)** and distribute incoming traffic using an **Application Load Balancer (ALB)**.

Using multiple EC2 instances improves **High Availability**, **Fault Tolerance**, and **Scalability** by ensuring that if one instance becomes unavailable, traffic is automatically routed to the healthy instance.

---

# 🎯 Objective

- Launch two Amazon EC2 instances
- Configure Apache Web Server using User Data
- Deploy instances in different Availability Zones
- Prepare the environment for an Application Load Balancer (ALB)

---

# 🛠️ Services Used

- Amazon EC2
- Elastic Load Balancer (Application Load Balancer)
- Security Groups
- Amazon Linux 2023

---

# 🏗️ Architecture

```text
                   Internet
                       │
                       ▼
         Application Load Balancer (ALB)
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
  EC2 Instance 1                EC2 Instance 2
 (Availability Zone A)      (Availability Zone B)
        │                             │
        └──────────────┬──────────────┘
                       │
               Security Group
```

---

# 🚀 Step 1: Launch EC2 Instance 1

Navigate to:

```text
AWS Console
    ↓
EC2
    ↓
Launch Instance
```

Configure the instance.

| Setting | Value |
|----------|-------|
| Name | web-server-1 |
| AMI | Amazon Linux 2023 |
| Instance Type | t2.micro |
| Key Pair | Existing Key Pair (Example: my-key) |
| VPC | Default VPC (or Custom VPC) |
| Subnet | Public Subnet A (Example: ap-south-1a) |
| Auto Assign Public IP | Enable |
| Storage | 8 GB gp3 |

---

# 🔐 Security Group Configuration

Create a new Security Group.

### Inbound Rules

| Type | Port | Source |
|------|------|---------|
| SSH | 22 | My IP |
| HTTP | 80 | 0.0.0.0/0 |

### Outbound Rules

| Type | Destination |
|------|-------------|
| All Traffic | 0.0.0.0/0 |

Click:

```text
Launch Instance
```

---

# ⚙️ EC2 User Data Script

Paste the following script into the **User Data** section while launching the EC2 instance.

```bash
#!/bin/bash

# Update packages
sudo yum update -y

# Install Apache Web Server
sudo yum install -y httpd

# Start Apache
sudo systemctl start httpd

# Enable Apache at boot
sudo systemctl enable httpd

# Create a sample web page with the hostname
echo "<html><h1>Welcome to Apache Web Server on Amazon Linux - $(hostname)!</h1></html>" > /var/www/html/index.html
```

This script automatically:

- Updates the instance
- Installs Apache (`httpd`)
- Starts the Apache service
- Enables Apache to start automatically after reboot
- Creates a simple webpage displaying the EC2 hostname

---

# ✅ Expected Result

After the instance reaches the **Running** state:

Open a browser and visit:

```text
http://<EC2-Public-IP>
```

Example:

```text
http://13.xxx.xxx.xxx
```

You should see a page similar to:

```text
Welcome to Apache Web Server on Amazon Linux - ip-172-31-xx-xx
```

This confirms that:

- Apache is installed successfully.
- The EC2 instance is serving web traffic.
- The instance is ready to be registered with an Application Load Balancer.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to launch an Amazon Linux EC2 instance
- How to configure Security Groups
- How to use EC2 User Data for automatic server configuration
- How to install and configure Apache Web Server
- How to prepare EC2 instances for an Elastic Load Balancer (ALB)

---

# ⚠️ Best Practices

- Deploy EC2 instances across multiple Availability Zones for High Availability.
- Restrict SSH (Port 22) access to **My IP** instead of allowing public access.
- Use User Data to automate server provisioning.
- Use Security Groups to allow only the required inbound traffic.
- Verify Apache is running before attaching the instance to the Load Balancer.