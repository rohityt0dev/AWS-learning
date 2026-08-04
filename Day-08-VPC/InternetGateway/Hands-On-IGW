# Lab: Create and Attach an Internet Gateway (IGW)

An **Internet Gateway (IGW)** enables communication between resources in a VPC and the Internet. In this lab, you will create an Internet Gateway and attach it to your VPC.

---

# 🎯 Objective

- Create an Internet Gateway
- Attach the Internet Gateway to a VPC
- Prepare the VPC for Internet connectivity

---

# 🛠️ Services Used

- Amazon VPC
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
          Demo-VPC-01
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- AWS Account
- Amazon VPC (**Demo-VPC-01**)

---

# 🚀 Step 1: Open Internet Gateways

Navigate to:

```text
AWS Console
      │
      ▼
VPC
      │
      ▼
Internet Gateways
```

Click:

```text
Create Internet Gateway
```

---

# 🚀 Step 2: Create an Internet Gateway

Enter the following details:

| Setting | Value |
|----------|-------|
| Name | Demo-IGW |

Click:

```text
Create Internet Gateway
```

---

# 🚀 Step 3: Attach the Internet Gateway to the VPC

Select:

```text
Demo-IGW
```

Click:

```text
Actions
    │
    ▼
Attach to VPC
```

Choose:

```text
Demo-VPC-01
```

Click:

```text
Attach Internet Gateway
```

---

# ✅ Expected Result

The Internet Gateway is successfully attached to the VPC.

| Internet Gateway | Attached VPC | State |
|------------------|--------------|-------|
| Demo-IGW | Demo-VPC-01 | Attached |

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create an Internet Gateway
- How to attach an Internet Gateway to a VPC
- Why an Internet Gateway is required for Internet connectivity

---

# ⚠️ Notes

- Attaching an Internet Gateway **does not** automatically provide Internet access.
- To enable Internet connectivity, you must also:
  - Create or update a **Route Table**
  - Add a route:
    ```text
    Destination: 0.0.0.0/0
    Target: Internet Gateway (Demo-IGW)
    ```
  - Associate the Route Table with a **Public Subnet**.