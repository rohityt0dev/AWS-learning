# Lab: Configure Amazon VPC Peering

Amazon **VPC Peering** enables private communication between two VPCs using the AWS network. In this lab, you will create a VPC Peering connection, update route tables, and verify connectivity between EC2 instances.

---

# 🎯 Objective

- Create a VPC Peering Connection
- Update Route Tables
- Connect two VPCs privately
- Verify communication using private IP addresses

---

# 🛠️ Services Used

- Amazon VPC
- VPC Peering Connection
- Route Tables
- Amazon EC2

---

# 🏗️ Architecture

```text
                Internet
                    │
          +------------------+
          | Internet Gateway |
          +------------------+

              Default VPC
          172.31.0.0/16
        +-------------------+
        | defaultec2        |
        | 172.31.x.x        |
        +-------------------+
               │
               │
      VPC Peering (Active)
               │
               │
        +-------------------+
        | Demovpc EC2       |
        | 10.0.x.x          |
        +-------------------+
          Demo-VPC-01
           10.0.0.0/16
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- Two VPCs
- Two EC2 Instances
- Internet Gateway attached to both VPCs
- Security Groups allowing ICMP (Ping)

---

# 🌐 Verify VPCs

Ensure both VPCs are available.

| VPC | CIDR Block | Status |
|------|------------|--------|
| DefaultVPC | 172.31.0.0/16 | ✅ Available |
| Demo-VPC-01 | 10.0.0.0/16 | ✅ Available |

---

# 🤝 Create a VPC Peering Connection

Create a VPC Peering Connection between:

| Requester | Accepter |
|------------|----------|
| Demo-VPC-01 (10.0.0.0/16) | DefaultVPC (172.31.0.0/16) |

Accept the peering request.

Verify the status:

```text
Active
```

> **Note:** VPC CIDR blocks must not overlap.

---

# 🛣️ Update Route Tables

## Default VPC Route Table

Add the following route:

| Destination | Target |
|-------------|--------|
| 10.0.0.0/16 | VPC Peering Connection (pcx-xxxxxxxx) |

Existing routes:

| Destination | Target |
|-------------|--------|
| 172.31.0.0/16 | Local |
| 0.0.0.0/0 | Internet Gateway |

---

## Demo-VPC-01 Route Table

Add the following route:

| Destination | Target |
|-------------|--------|
| 172.31.0.0/16 | VPC Peering Connection (pcx-xxxxxxxx) |

Existing routes:

| Destination | Target |
|-------------|--------|
| 10.0.0.0/16 | Local |
| 0.0.0.0/0 | Internet Gateway |

---

# 💻 Verify EC2 Instances

Ensure both EC2 instances are running.

| EC2 Instance | VPC | Status |
|--------------|-----|--------|
| defaultec2 | DefaultVPC | ✅ Running |
| Demovpc | Demo-VPC-01 | ✅ Running |

---

# 🧪 Test VPC Peering

### Connect to the EC2 instance in the Default VPC

Find its private IP address.

Example:

```text
172.31.10.100
```

---

### Connect to the EC2 instance in Demo-VPC-01

Run:

```bash
ping <Private-IP-of-defaultec2>
```

Example:

```bash
ping 172.31.10.100
```

Expected output:

```text
64 bytes from 172.31.10.100
icmp_seq=1 ttl=127
```

If you receive replies, the VPC Peering connection is working successfully.

---

# ✅ Expected Result

- VPC Peering Connection status is **Active**
- Route Tables are updated in both VPCs
- EC2 instances communicate using **private IP addresses**
- Ping between the two VPCs is successful

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create a VPC Peering Connection
- How to update Route Tables for VPC Peering
- How to connect two VPCs privately
- How to verify connectivity using private IP addresses

---

# ⚠️ Notes

- VPC CIDR blocks must not overlap.
- Update Route Tables in both VPCs.
- Ensure Security Groups allow **ICMP (Ping)** traffic.
- VPC Peering uses private IP addresses for communication.
- VPC Peering is **not transitive**.
