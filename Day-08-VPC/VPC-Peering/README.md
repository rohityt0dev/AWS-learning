# Amazon VPC Peering

**Amazon VPC Peering** is a networking connection that allows two VPCs to communicate privately using the AWS network. Resources in the peered VPCs can communicate as if they are on the same private network.

---

# What is VPC Peering?

VPC Peering enables private communication between two VPCs without using the public Internet, VPN, or Direct Connect.

Traffic stays within the AWS global network.

---

# Key Features

### ✅ Private Connectivity

- Connects two VPCs using the AWS private network.
- No Internet Gateway is required for communication.

---

### ✅ Same Network Experience

- Resources in both VPCs can communicate using private IP addresses.
- The VPCs behave as if they are part of the same private network.

---

### ✅ Non-Overlapping CIDR Blocks

- The VPCs **must not** have overlapping IPv4 or IPv6 CIDR blocks.
- Overlapping address ranges prevent the peering connection.

---

### ✅ Non-Transitive Connection

VPC Peering is **not transitive**.

Example:

```text
VPC-A ↔ VPC-B
VPC-B ↔ VPC-C

❌ VPC-A cannot communicate with VPC-C
```

A separate peering connection is required between every pair of VPCs that needs to communicate.

---

### ✅ Route Tables Required

After creating a peering connection, you must update the Route Tables in both VPCs.

Each VPC needs a route that points to the VPC Peering Connection.

---

# Architecture

```text
          VPC-A
     10.0.0.0/16
          │
          │
   VPC Peering Connection
          │
          │
     192.168.0.0/16
          VPC-B
```

---

# VPC Peering Across Accounts and Regions

Amazon VPC Peering supports:

- Cross-Account VPC Peering
- Cross-Region VPC Peering

This allows VPCs in different AWS accounts or AWS Regions to communicate privately.

---

# Security Groups

You can reference a **Security Group** in a peered VPC when:

- Both VPCs are in the **same AWS Region**
- The VPCs can belong to different AWS accounts

This simplifies security management for applications communicating across peered VPCs.

---

# Key Points

- Private communication over the AWS network
- No Internet required
- VPCs must have non-overlapping CIDR blocks
- VPC Peering is **not transitive**
- Route Tables must be updated in both VPCs
- Supports cross-account and cross-region peering
- Security Groups can be referenced across peered VPCs (same Region)

---

# Common Use Cases

- Connect development and production VPCs
- Share services between VPCs
- Cross-account application communication
- Multi-region private networking
- Centralized application architecture