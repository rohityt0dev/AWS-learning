# Amazon Virtual Private Cloud (Amazon VPC)

Amazon **Virtual Private Cloud (VPC)** is a logically isolated virtual network in AWS where you can launch and manage AWS resources securely. It gives you complete control over networking, including IP addressing, subnets, route tables, and gateways.

---

# Key Features

### ✅ Virtual Private Network

- Creates a private network inside AWS.
- Launch AWS resources securely within the VPC.

---

### ✅ Multiple VPCs per Region

- You can create **multiple VPCs** in the same AWS Region.
- Each VPC is isolated from the others by default.

---

### ✅ CIDR Blocks

A VPC uses **CIDR (Classless Inter-Domain Routing)** blocks to define its IP address range.

- Maximum CIDR blocks per VPC: **5**
- Smallest VPC size: **/28** (16 IP addresses)
- Largest VPC size: **/16** (65,536 IP addresses)

---

# Private IPv4 Address Ranges

Amazon VPC supports only **private IPv4 address ranges** defined by RFC 1918.

| Private IP Range | CIDR Block |
|------------------|------------|
| 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 |
| 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 |
| 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 |

---

# Common CIDR Examples

| CIDR | Total IP Addresses |
|------|--------------------:|
| /16 | 65,536 |
| /20 | 4,096 |
| /24 | 256 |
| /28 | 16 |

---

# Common Use Cases

- Create isolated networks in AWS
- Host web applications
- Deploy EC2 instances
- Deploy Amazon RDS databases
- Build secure multi-tier architectures
- Connect on-premises networks to AWS

---

# Best Practices

- Use private IPv4 CIDR ranges.
- Plan your CIDR blocks carefully before creating the VPC.
- Create separate public and private subnets.
- Use Security Groups and Network ACLs to secure resources.
- Avoid overlapping CIDR ranges if VPC peering or VPN connectivity is required.