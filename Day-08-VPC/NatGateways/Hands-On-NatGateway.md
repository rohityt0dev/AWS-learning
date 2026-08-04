# Lab: Create a NAT Gateway and Private Route Table

A **NAT Gateway** allows resources in **Private Subnets** to access the Internet while preventing inbound Internet connections. In this lab, you will create a NAT Gateway, configure a Private Route Table, and associate it with the private subnets.

---

# 🎯 Objective

- Create a NAT Gateway
- Associate an Elastic IP with the NAT Gateway
- Create a Private Route Table
- Route Internet-bound traffic through the NAT Gateway
- Associate Private Subnets with the Private Route Table

---

# 🛠️ Services Used

- Amazon VPC
- NAT Gateway
- Elastic IP (EIP)
- Route Tables

---

# 🏗️ Architecture

```text
                  Internet
                      │
                      ▼
          Internet Gateway (IGW)
                      │
                      ▼
      Public Subnet (10.0.1.0/24)
                      │
               NAT Gateway
                      │
          Private Route Table
      Route: 0.0.0.0/0 → NAT GW
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
 Private-Subnet-1           Private-Subnet-2
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- AWS Account
- Amazon VPC (**Demo-VPC-01**)
- Public Subnet
- Private Subnets
- Internet Gateway attached to the VPC
- Elastic IP allocated

---

# 🚀 Create a NAT Gateway

Navigate to:

```text
AWS Console
      │
      ▼
VPC
      │
      ▼
NAT Gateways
```

Click:

```text
Create NAT Gateway
```

Enter the following details:

| Setting | Value |
|----------|-------|
| Name | Demo-NAT |
| Subnet | Public-Subnet-1 |

Click:

```text
Create NAT Gateway
```

Wait until the status changes to:

```text
Available
```

---

# 🚀 Create a Private Route Table

Navigate to:

```text
AWS Console
      │
      ▼
VPC
      │
      ▼
Route Tables
```

Click:

```text
Create Route Table
```

Enter the following details:

| Setting | Value |
|----------|-------|
| Name | Private-RT |
| VPC | Demo-VPC-01 |

Click:

```text
Create Route Table
```

---

# 🚀 Add a NAT Gateway Route

Select:

```text
Private-RT
```

Open the:

```text
Routes
```

tab.

Click:

```text
Edit Routes
```

Add the following route:

| Destination | Target |
|-------------|--------|
| 0.0.0.0/0 | NAT Gateway (Demo-NAT) |

Click:

```text
Save Changes
```

---

# 🚀 Associate Private Subnets

Open the:

```text
Subnet Associations
```

tab.

Click:

```text
Edit Subnet Associations
```

Select:

- ✅ Private-Subnet-1
- ✅ Private-Subnet-2

Click:

```text
Save Associations
```

---

# ✅ Expected Result

### Private Route Table

| Destination | Target |
|-------------|--------|
| 10.0.0.0/16 | Local |
| 0.0.0.0/0 | NAT Gateway (Demo-NAT) |

### Associated Subnets

- Private-Subnet-1
- Private-Subnet-2

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create a NAT Gateway
- Why a NAT Gateway requires an Elastic IP
- How to configure a Private Route Table
- How Private Subnets access the Internet through a NAT Gateway
- How to associate Private Subnets with a Route Table

---

# ⚠️ Notes

- A NAT Gateway must be created in a **Public Subnet**.
- A NAT Gateway requires an **Elastic IP**.
- Private Subnets should use:
  ```text
  0.0.0.0/0 → NAT Gateway
  ```
  instead of an Internet Gateway.
- Internet access from a Private Subnet follows this path:

```text
Private Subnet
      │
      ▼
Private Route Table
      │
      ▼
NAT Gateway
      │
      ▼
Internet Gateway
      │
      ▼
Internet
```
