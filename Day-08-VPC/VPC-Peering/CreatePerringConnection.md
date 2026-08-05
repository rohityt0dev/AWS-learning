# Lab: Create an Amazon VPC Peering Connection

Amazon **VPC Peering** allows two VPCs to communicate privately using the AWS network. In this lab, you will create a VPC Peering Connection, accept the request, and update the route tables to enable communication between the VPCs.

---

# 🎯 Objective

- Create a VPC Peering Connection
- Accept the Peering Request
- Update Route Tables
- Enable private communication between two VPCs

---

# 🛠️ Services Used

- Amazon VPC
- VPC Peering Connection
- Route Tables

---

# 🏗️ Architecture

```text
          Demo-VPC-01
         10.0.0.0/16
               │
               │
     VPC Peering Connection
               │
               │
        Default VPC
      172.31.0.0/16
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- Two VPCs
- Non-overlapping CIDR blocks
- Route Tables for both VPCs

---

# 🚀 Open the VPC Dashboard

1. Sign in to the **AWS Management Console**.
2. Search for:

```text
VPC
```

3. Open the **VPC Dashboard**.

---

# 🚀 Open Peering Connections

Navigate to:

```text
VPC
 ├── Your VPCs
 ├── Subnets
 ├── Route Tables
 ├── Internet Gateways
 └── Peering Connections
```

Click:

```text
Peering Connections
```

---

# 🚀 Create a Peering Connection

Click:

```text
Create Peering Connection
```

Enter the following details:

| Setting | Value |
|----------|-------|
| Name | Demo-Peering-Connection |
| Requester VPC | Demo-VPC-01 |
| Accepter | My Account |
| Region | Current Region |
| Accepter VPC | DefaultVPC |

Click:

```text
Create Peering Connection
```

Initial Status:

```text
Pending Acceptance
```

---

# 🚀 Accept the Peering Request

Select:

```text
Demo-Peering-Connection
```

Click:

```text
Actions
      │
      ▼
Accept Request
```

Confirm the request.

The status changes to:

```text
Active
```

---

# 🚀 Update the Route Table for Demo-VPC-01

Navigate to:

```text
VPC
      │
      ▼
Route Tables
```

Select the Route Table for:

```text
Demo-VPC-01
```

Open:

```text
Routes
```

Click:

```text
Edit Routes
```

Add the following route:

| Destination | Target |
|-------------|--------|
| 172.31.0.0/16 | Peering Connection (pcx-xxxxxx) |

Click:

```text
Save Changes
```

---

# 🚀 Update the Route Table for DefaultVPC

Select the Route Table for:

```text
DefaultVPC
```

Open:

```text
Routes
```

Click:

```text
Edit Routes
```

Add the following route:

| Destination | Target |
|-------------|--------|
| 10.0.0.0/16 | Peering Connection (pcx-xxxxxx) |

Click:

```text
Save Changes
```

---

# ✅ Expected Result

| Resource | Status |
|----------|--------|
| VPC Peering Connection | Active |
| Demo-VPC-01 Route Table | Updated |
| DefaultVPC Route Table | Updated |

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create a VPC Peering Connection
- How to accept a Peering Request
- How to update Route Tables for VPC Peering
- How private communication between two VPCs is established

---

# ⚠️ Notes

- Both VPCs must have **non-overlapping CIDR blocks**.
- The peering connection must be **Active** before updating Route Tables.
- Route Tables in **both VPCs** must be updated.
- VPC Peering enables communication using **private IP addresses** only.
- VPC Peering is **not transitive**.
