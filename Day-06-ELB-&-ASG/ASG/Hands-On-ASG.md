# Lab: Create an AWS Auto Scaling Group (ASG)

Amazon **Auto Scaling Group (ASG)** automatically launches, replaces, and terminates EC2 instances to maintain the desired number of running instances and improve application availability.

---

# 🎯 Objective

- Create a Launch Template
- Create an Auto Scaling Group
- Configure network settings
- Attach an Application Load Balancer (Optional)
- Configure Health Checks
- Configure Group Size
- Verify Auto Scaling
- Test Automatic Instance Replacement
- Test Scale-Out

---

# 🛠️ Services Used

- Amazon EC2
- Launch Templates
- Auto Scaling Group (ASG)
- Application Load Balancer (Optional)

---

# 🏗️ Architecture

```text
                Internet
                    │
                    │
        Application Load Balancer
                    │
      ┌─────────────┴─────────────┐
      │                           │
Availability Zone A        Availability Zone B
      │                           │
   EC2 Instance              EC2 Instance
      │                           │
      └─────────────┬─────────────┘
                    │
          Auto Scaling Group
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- AWS Account
- Amazon VPC
- Two Public Subnets (Different Availability Zones)
- Security Group
- Key Pair
- (Optional) Application Load Balancer and Target Group

---

# 🚀 Step 1: Create a Launch Template

Navigate to:

```text
AWS Console
      │
      ▼
EC2
      │
      ▼
Launch Templates
      │
      ▼
Create Launch Template
```

Configure the template.

| Setting | Value |
|----------|-------|
| Template Name | MY-Template-ASG |
| Description | Template for Auto Scaling Group |
| AMI | Amazon Linux 2023 |
| Instance Type | t2.micro (Free Tier) or t3.small |
| Key Pair | key-01 |
| Security Group | Allow SSH (22), HTTP (80), Optional HTTPS (443) |
| Storage | 8 GB gp3 |

### User Data (Optional)

Automatically install Apache during instance launch.

```bash
#!/bin/bash
yum update -y
yum install httpd -y
systemctl start httpd
systemctl enable httpd

echo "<h1>Welcome from Auto Scaling Group</h1>" > /var/www/html/index.html
```

Click:

```text
Create Launch Template
```

---

# 🚀 Step 2: Create an Auto Scaling Group

Navigate to:

```text
EC2
      │
      ▼
Auto Scaling Groups
      │
      ▼
Create Auto Scaling Group
```

Configure:

| Setting | Value |
|----------|-------|
| Name | DEMO-ASG |
| Launch Template | MY-Template-ASG (Default Version) |

Click **Next**.

---

# 🚀 Step 3: Choose Network

Select your VPC.

Choose at least two public subnets.

Example:

| Availability Zone | Subnet |
|-------------------|--------|
| ap-south-1a | Public-Subnet-1 |
| ap-south-1b | Public-Subnet-2 |

Click **Next**.

---

# 🚀 Step 4: Attach a Load Balancer (Optional)

If you already have an Application Load Balancer:

- Choose **Attach to an existing load balancer**
- Select your **Application Load Balancer**
- Choose the appropriate **Target Group**

If you don't have one:

```text
Skip this step
```

Click **Next**.

---

# 🚀 Step 5: Configure Health Checks

Enable:

- ✅ EC2 Health Checks

If using an ALB:

- ✅ ELB Health Checks

Grace Period:

```text
300 Seconds
```

Click **Next**.

---

# 🚀 Step 6: Configure Group Size

Example configuration:

| Setting | Value |
|----------|-------|
| Minimum Capacity | 1 |
| Desired Capacity | 1 |
| Maximum Capacity | 2 |

> **Note:** If **Maximum Capacity = 1**, Auto Scaling cannot launch additional instances. Set it to **2 or more** to allow scale-out.

---

# 🚀 Step 7: Review and Create

Review all settings.

Click:

```text
Create Auto Scaling Group
```

---

# 🚀 Step 8: Verify the Auto Scaling Group

Navigate to:

```text
EC2
      │
      ▼
Instances
```

You should see:

- One running EC2 instance
- Owner: Auto Scaling Group

---

# 🧪 Step 9: Test Automatic Instance Replacement

Terminate the EC2 instance manually.

Navigate to:

```text
EC2
      │
      ▼
Instances
      │
      ▼
Select Instance
      │
      ▼
Instance State
      │
      ▼
Terminate
```

Wait 1–2 minutes.

Expected result:

```text
Old Instance
      ❌ Terminated

        ↓

New Instance
      ✅ Automatically Created
```

This confirms that the Auto Scaling Group maintains the desired capacity.

---

# 🧪 Step 10: Test Scale-Out

If your ASG configuration is:

```text
Minimum Capacity : 1
Desired Capacity : 1
Maximum Capacity : 2
```

Install the stress tool:

```bash
sudo yum install stress -y
```

Generate CPU load:

```bash
stress --cpu 2 --timeout 300
```

When CPU utilization remains above the configured threshold, the Auto Scaling Group should launch a second EC2 instance.

---

# ✅ Expected Result

- Launch Template created successfully
- Auto Scaling Group created
- Desired number of EC2 instances running
- Failed instances replaced automatically
- Additional EC2 instances launched when scaling conditions are met

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create a Launch Template
- How to create an Auto Scaling Group
- How to configure Health Checks
- How to attach an Application Load Balancer
- How Auto Scaling replaces unhealthy instances
- How Auto Scaling increases capacity during high CPU utilization

---

# ⚠️ Notes

- Launch Templates define the configuration for new EC2 instances.
- Auto Scaling Groups maintain the desired number of running instances.
- For automatic scale-out, ensure the **Maximum Capacity** is greater than the **Desired Capacity**.
- When integrated with an Application Load Balancer, new instances are automatically registered with the Target Group.
