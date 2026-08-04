# Lab: Create a Public Route Table

A **Route Table** controls how network traffic is routed within a VPC. In this lab, you will create a **Public Route Table**, add a route to the Internet Gateway, and associate it with the public subnets.

---

# 🎯 Objective

- Create a Public Route Table
- Add an Internet route
- Associate Public Subnets
- Enable Internet access for Public Subnets

---

# 🛠️ Services Used

- Amazon VPC
- Route Tables
- Internet Gateway (IGW)

---

# 🏗️ Architecture

```text
                 Internet
                     │
                     ▼
          Internet Gateway (IGW)
                     │
                     ▼
             Public Route Table
           Route: 0.0.0.0/0 → IGW
                     │
        ┌────────────┴────────────┐
        ▼                         ▼
 Public-Subnet-1           Public-Subnet-2
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- AWS Account
- Amazon VPC (**Demo-VPC-01**)
- Internet Gateway (**Demo-IGW**)
- Two Public Subnets

---

# 🚀 Step 1: Open Route Tables

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

---

# 🚀 Step 2: Create the Route Table

Enter the following details.

| Setting | Value |
|----------|-------|
| Name | Public-RT |
| VPC | Demo-VPC-01 |

Click:

```text
Create Route Table
```

---

# 🚀 Step 3: Add an Internet Route

Select:

```text
Public-RT
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

Add the following route.

| Destination | Target |
|-------------|--------|
| 0.0.0.0/0 | Internet Gateway (Demo-IGW) |

Click:

```text
Save Changes
```

---

# 🚀 Step 4: Associate Public Subnets

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

- ✅ Public-Subnet-1
- ✅ Public-Subnet-2

Click:

```text
Save Associations
```

---

# ✅ Expected Result

Your Public Route Table should have:

### Route

| Destination | Target |
|-------------|--------|
| 10.0.0.0/16 | Local |
| 0.0.0.0/0 | Internet Gateway (Demo-IGW) |

### Associated Subnets

- Public-Subnet-1
- Public-Subnet-2

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create a Route Table
- How to add a default Internet route
- How to associate a Route Table with Public Subnets
- How Public Subnets gain Internet connectivity

---

# ⚠️ Notes

- A subnet becomes **Public** only when:
  - It is associated with a Route Table containing:
    ```text
    0.0.0.0/0 → Internet Gateway (IGW)
    ```
  - EC2 instances in the subnet have a **Public IP** or **Elastic IP**.
- Private Subnets should **not** use this Route Table.