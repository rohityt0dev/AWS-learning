# Lab: Create Public and Private Subnets in Amazon VPC

A **Subnet** is a range of IP addresses within a VPC. In this lab, you will create **two public subnets** and **two private subnets** in different Availability Zones.

---

# 🎯 Objective

- Create Public Subnets
- Create Private Subnets
- Distribute subnets across multiple Availability Zones
- Build a basic VPC network architecture

---

# 🛠️ Services Used

- Amazon VPC
- Subnets

---

# 🏗️ Architecture

```text
                 Demo-VPC-01
              CIDR: 10.0.0.0/16
                     │
      ┌──────────────┼──────────────┐
      │                              │
 Public Subnets               Private Subnets
      │                              │
 ┌──────────────┐             ┌──────────────┐
 │10.0.0.0/24   │             │10.0.16.0/20   │
 │AZ: ap-south-1a│            │AZ: ap-south-1a│
 └──────────────┘             └──────────────┘

 ┌──────────────┐             ┌──────────────┐
 │10.0.1.0/24   │             │10.0.32.0/20   │
 │AZ: ap-south-1b│            │AZ: ap-south-1b│
 └──────────────┘             └──────────────┘
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- AWS Account
- Amazon VPC (**Demo-VPC-01**)

---

# 🚀 Create Public Subnets

Open:

```text
AWS Console
      │
      ▼
VPC
      │
      ▼
Subnets
      │
      ▼
Create subnet
```

---

## Public Subnet 1

| Setting | Value |
|----------|-------|
| VPC | Demo-VPC-01 |
| Subnet Name | Public-Subnet-1 |
| Availability Zone | ap-south-1a |
| IPv4 CIDR | 10.0.0.0/24 |

Click **Create Subnet**.

---

## Public Subnet 2

Click **Create subnet** again.

| Setting | Value |
|----------|-------|
| VPC | Demo-VPC-01 |
| Subnet Name | Public-Subnet-2 |
| Availability Zone | ap-south-1b |
| IPv4 CIDR | 10.0.1.0/24 |

Click **Create Subnet**.

---

# 🚀 Create Private Subnets

## Private Subnet 1

| Setting | Value |
|----------|-------|
| VPC | Demo-VPC-01 |
| Subnet Name | Private-Subnet-1 |
| Availability Zone | ap-south-1a |
| IPv4 CIDR | 10.0.16.0/20 |

Click **Create Subnet**.

---

## Private Subnet 2

Click **Create subnet** again.

| Setting | Value |
|----------|-------|
| VPC | Demo-VPC-01 |
| Subnet Name | Private-Subnet-2 |
| Availability Zone  ap-south-1b |
| IPv4 CIDR | 10.0.32.0/20 |

Click **Create Subnet**.

---

# ✅ Expected Result

Your VPC should contain four subnets.

| Subnet Name | CIDR Block | Availability Zone | Type |
|--------------|------------|-------------------|------|
| Public-Subnet-1 | 10.0.0.0/24 | ap-south-1a | Public |
| Public-Subnet-2 | 10.0.1.0/24 | ap-south-1b | Public |
| Private-Subnet-1 | 10.0.16.0/24 | ap-south-1a | Private |
| Private-Subnet-2 | 10.0.32.0/24 | ap-south-1b | Private |

---

# 🏗️ Final VPC Layout

```text
Demo-VPC-01
CIDR : 10.0.0.0/16

├── Public-Subnet-1   (10.0.0.0/24)
├── Public-Subnet-2   (10.0.1.0/24)
├── Private-Subnet-1  (10.0.16.0/20)
└── Private-Subnet-2  (10.0.32.0/20)
```

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create subnets in an Amazon VPC
- The difference between Public and Private Subnets
- How to distribute subnets across multiple Availability Zones
- How subnet CIDR blocks are assigned within a VPC

---

# ⚠️ Notes

- Creating a subnet does **not** automatically make it public or private.
- A subnet becomes **Public** only after it is associated with a route table that has a route to an **Internet Gateway (IGW)**.
- A subnet remains **Private** if it has no direct route to an Internet Gateway.
