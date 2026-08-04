# Lab: Create an Amazon VPC

Amazon **Virtual Private Cloud (VPC)** allows you to create an isolated virtual network in AWS where you can securely launch and manage AWS resources such as EC2, RDS, Load Balancers, and more.

---

# 🎯 Objective

- Create a custom Amazon VPC
- Configure a custom IPv4 CIDR block
- Understand the basic VPC configuration

---

# 🛠️ Services Used

- Amazon VPC

---

# 🏗️ Architecture

```text
              Amazon VPC
        Name: Demo-VPC-01
        CIDR: 10.0.0.0/16
```

---

# 🚀 Step 1: Sign in to AWS Console

1. Sign in to the **AWS Management Console**.
2. In the search bar, type:

```text
VPC
```

3. Open the **VPC** service.

---

# 🚀 Step 2: Open the VPC Dashboard

From the left navigation pane, select:

```text
Your VPCs
```

Click:

```text
Create VPC
```

---

# 🚀 Step 3: Choose Resources to Create

AWS provides two options:

- **VPC only** ✅ *(Recommended for learning)*
- **VPC and more**

Select:

```text
VPC only
```

> **Why choose VPC only?**
>
> This option creates only the VPC, allowing you to manually create subnets, route tables, internet gateways, and other networking components later.

---

# 🚀 Step 4: Configure VPC Details

Enter the following values:

| Setting | Value |
|----------|-------|
| Resources to create | VPC only |
| Name tag | Demo-VPC-01 |
| IPv4 CIDR | 10.0.0.0/16 |
| IPv6 CIDR | No IPv6 CIDR Block |
| Tenancy | Default |

---

# 🚀 Step 5: Create the VPC

Review the configuration.

Click:

```text
Create VPC
```

AWS creates the VPC within a few seconds.

---

# ✅ Expected Result

Your VPC is created successfully.

Example:

| Setting | Value |
|----------|-------|
| Name | Demo-VPC-01 |
| IPv4 CIDR | 10.0.0.0/16 |
| IPv6 | Disabled |
| Tenancy | Default |
| State | Available |

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- What an Amazon VPC is
- How to create a custom VPC
- How to configure an IPv4 CIDR block
- The difference between **VPC only** and **VPC and more**

---

# ⚠️ Notes

- A VPC is a regional resource.
- The **10.0.0.0/16** CIDR block provides **65,536 IP addresses**.
- Additional networking components (subnets, internet gateway, route tables, NAT gateway, etc.) can be added after the VPC is created.