# 📈 Lab: Create an Auto Scaling Group (ASG) in AWS

Amazon EC2 Auto Scaling automatically launches or terminates EC2 instances based on demand. It helps maintain application availability while optimizing costs by ensuring the correct number of EC2 instances are running.

In this lab, you will create an **Auto Scaling Group (ASG)** using:

- ✅ Launch Template
- ✅ Application Load Balancer (ALB)
- ✅ Target Group
- ✅ CloudWatch Target Tracking Scaling Policy

---

# 🎯 Objective

- Create an Auto Scaling Group
- Attach the ASG to an Application Load Balancer
- Configure automatic scaling based on CPU utilization
- Verify automatic scale-out and scale-in events

---

# 🛠️ Services Used

- Amazon EC2
- Auto Scaling Group (ASG)
- Launch Template
- Application Load Balancer (ALB)
- Target Group
- Amazon CloudWatch

---

# 🏗️ Architecture

```text
                    Internet
                        │
                        ▼
         Application Load Balancer (ALB)
                        │
                 Target Group (web-tg)
                        │
             Auto Scaling Group (ASG)
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
 EC2 Instance (AZ-1)             EC2 Instance (AZ-2)
        │                               │
 Apache Web Server               Apache Web Server
```

---

# ✅ Prerequisites

Before creating the Auto Scaling Group, ensure the following resources already exist:

- ✅ VPC
- ✅ Two Public Subnets (Different Availability Zones)
- ✅ Security Group
- ✅ Launch Template
- ✅ Target Group
- ✅ Application Load Balancer (ALB)

---

# 🚀 Step 1: Open Auto Scaling Groups

1. Sign in to the **AWS Management Console**.
2. Open **Amazon EC2**.
3. In the left navigation pane, scroll to:

```text
Auto Scaling
    ↓
Auto Scaling Groups
```

4. Click:

```text
Create Auto Scaling Group
```

---

# 📄 Step 2: Select a Launch Template

Choose the Launch Template created earlier.

| Setting | Value |
|----------|-------|
| Launch Template | web-launch-template |
| Version | Default |

Click:

```text
Next
```

---

# 🌐 Step 3: Configure the Auto Scaling Group

Configure the ASG.

| Setting | Value |
|----------|-------|
| Auto Scaling Group Name | web-asg |
| VPC | Default VPC (or your VPC) |

Select at least **two public subnets** in different Availability Zones.

| Availability Zone | Subnet |
|-------------------|---------|
| ap-south-1a | Public Subnet A |
| ap-south-1b | Public Subnet B |

Click:

```text
Next
```

---

# ⚖️ Step 4: Attach to an Existing Load Balancer

Choose:

```text
Attach to an existing load balancer
```

Select:

```text
Choose from your load balancer target groups
```

Target Group:

```text
web-tg
```

Enable:

```text
ELB Health Checks
```

Click:

```text
Next
```

---

# 📊 Step 5: Configure Group Size

Set the capacity values.

| Setting | Value |
|----------|-------|
| Desired Capacity | 2 |
| Minimum Capacity | 2 |
| Maximum Capacity | 4 |

Example:

```text
Minimum : 2
Desired : 2
Maximum : 4
```

Click:

```text
Next
```

---

# 📈 Step 6: Configure the Scaling Policy

Choose:

```text
Target Tracking Scaling Policy
```

Configure:

| Setting | Value |
|----------|-------|
| Metric | Average CPU Utilization |
| Target Value | 50% |

Scaling Behavior:

```text
CPU > 50%
      │
      ▼
Launch Additional EC2 Instances

CPU < 50%
      │
      ▼
Terminate Extra EC2 Instances
```

Click:

```text
Next
```

---

# 🔔 Step 7: Configure Notifications (Optional)

Optionally configure **Amazon SNS** notifications for:

- EC2 instance launch
- EC2 instance termination
- Auto Scaling activities

For this lab, you can skip this step.

Click:

```text
Next
```

---

# 🏷️ Step 8: Add Tags

Example:

| Key | Value |
|-----|-------|
| Name | web-server |

Enable:

```text
Propagate to launched instances
```

This ensures every EC2 instance launched by the ASG receives the same tag.

Click:

```text
Next
```

---

# ✅ Step 9: Review and Create

Verify the following:

- Launch Template
- VPC
- Public Subnets
- Target Group
- Scaling Policy
- Capacity Settings

Click:

```text
Create Auto Scaling Group
```

---

# 🔍 Step 10: Verify the Auto Scaling Group

Navigate to:

```text
EC2
    ↓
Auto Scaling Groups
    ↓
web-asg
```

Verify:

```text
Desired Capacity : 2

Current Capacity : 2

Healthy Instances : 2
```

---

# 🖥️ Step 11: Verify EC2 Instances

Navigate to:

```text
EC2
    ↓
Instances
```

You should see two running instances.

Example:

```text
web-server-1

web-server-2
```

---

# 🎯 Step 12: Verify the Target Group

Navigate to:

```text
EC2
    ↓
Target Groups
    ↓
web-tg
```

Verify both instances are:

```text
Healthy
```

---

# 🧪 Step 13: Test Auto Scaling

Connect to one EC2 instance using SSH.

Install the CPU stress tool.

```bash
sudo dnf install -y stress-ng
```

Generate CPU load.

```bash
stress-ng --cpu 2 --timeout 300s
```

If the average CPU utilization remains above **50%** long enough for the CloudWatch alarm to trigger, Auto Scaling launches a new EC2 instance.

### Scale-Out Example

```text
Before

EC2-1
EC2-2

        │
   High CPU
        ▼

EC2-1
EC2-2
EC2-3
```

When CPU utilization falls below the target, Auto Scaling removes the extra instance.

### Scale-In Example

```text
EC2-1
EC2-2
EC2-3

        │
 Low CPU
        ▼

EC2-1
EC2-2
```

---

# 🔐 Security Group Configuration

## ALB Security Group

| Type | Port | Source |
|------|------|---------|
| HTTP | 80 | 0.0.0.0/0 |

---

## EC2 Security Group

| Type | Port | Source |
|------|------|---------|
| HTTP | 80 | ALB Security Group |
| SSH | 22 | My IP |

> **Best Practice:** Allow HTTP traffic to EC2 instances **only** from the ALB Security Group. Do not allow direct public HTTP access to the EC2 instances.

---

# 🔄 Complete Workflow

```text
Create Launch Template
        │
        ▼
Create Target Group
        │
        ▼
Create Application Load Balancer
        │
        ▼
Create Auto Scaling Group
        │
        ▼
Launch EC2 Instances
        │
        ▼
Instances Register with Target Group
        │
        ▼
ALB Routes Traffic
        │
        ▼
CloudWatch Monitors CPU
        │
        ▼
Automatic Scale Out / Scale In
```

---

# ✅ Expected Result

After completing this lab:

- An Auto Scaling Group is created successfully.
- Two EC2 instances are launched automatically.
- Both instances register with the Target Group.
- The Application Load Balancer distributes traffic across healthy instances.
- CloudWatch monitors CPU utilization.
- Auto Scaling automatically launches or terminates EC2 instances based on demand.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create an Auto Scaling Group
- How Launch Templates work with Auto Scaling
- How to integrate an ASG with an Application Load Balancer
- How Target Groups and Health Checks work
- How CloudWatch Target Tracking Scaling Policies function
- How AWS automatically scales infrastructure based on CPU utilization

---

# ⚠️ Best Practices

- Deploy EC2 instances across multiple Availability Zones for High Availability.
- Use Launch Templates instead of Launch Configurations.
- Enable ELB Health Checks so unhealthy instances are replaced automatically.
- Configure appropriate minimum, desired, and maximum capacities.
- Use Target Tracking Scaling Policies for automatic and dynamic scaling.
- Restrict EC2 HTTP access to the ALB Security Group only.
- Monitor scaling activities using Amazon CloudWatch and Auto Scaling Events.
```