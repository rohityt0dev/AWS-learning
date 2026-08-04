# Amazon NAT Gateway (NAT GW)

An **Amazon NAT Gateway (NAT GW)** is an AWS-managed service that allows resources in **Private Subnets** to access the Internet while preventing inbound Internet connections.

---

# What is a NAT Gateway?

A NAT Gateway enables outbound Internet access for resources in a Private Subnet.

It is commonly used when EC2 instances need to:

- Install software packages
- Download updates
- Access AWS services or external APIs

without being directly accessible from the Internet.

---

# Key Features

### ✅ AWS Managed Service

- Fully managed by AWS
- No server administration required

---

### ✅ High Performance

- Supports up to **5 Gbps** of bandwidth.
- Automatically scales up to **100 Gbps** based on traffic.

---

### ✅ Uses an Elastic IP

- A NAT Gateway must be assigned an **Elastic IP (EIP)**.
- It must be created in a **Public Subnet**.

---

### ✅ Availability Zone Specific

- Each NAT Gateway belongs to a single Availability Zone (AZ).
- It provides high availability within that AZ.

---

### ✅ No Security Groups

- NAT Gateways do **not** support Security Groups.
- Security is controlled using Route Tables and Network ACLs.

---

### ✅ Internet Gateway Required

For Internet access, the traffic flow is:

```text
Private Subnet
      │
      ▼
NAT Gateway
      │
      ▼
Internet Gateway (IGW)
      │
      ▼
Internet
```

---

# Architecture

```text
                Internet
                    │
                    ▼
          Internet Gateway (IGW)
                    │
                    ▼
        NAT Gateway (Public Subnet)
                    │
                    ▼
             Private Subnet
                    │
                    ▼
             EC2 Instance
```

---

# High Availability

A NAT Gateway is highly available **within a single Availability Zone**.

For fault tolerance, create a NAT Gateway in each Availability Zone.

Example:

```text
                 Internet
                     │
             Internet Gateway
                     │
        ┌────────────┴────────────┐
        ▼                         ▼
   NAT Gateway-A             NAT Gateway-B
   Public Subnet-A           Public Subnet-B
        │                         │
        ▼                         ▼
 Private Subnet-A          Private Subnet-B
```

---

# Key Points

- AWS-managed NAT service
- Allows outbound Internet access from Private Subnets
- Requires an Internet Gateway (IGW)
- Uses an Elastic IP (EIP)
- Created in a Public Subnet
- No Security Groups
- Supports automatic scaling from **5 Gbps** to **100 Gbps**
- Create one NAT Gateway per Availability Zone for high availability

---

# Common Use Cases

- Private EC2 instances
- Downloading software updates
- Installing packages
- Accessing external APIs
- Secure outbound Internet connectivity