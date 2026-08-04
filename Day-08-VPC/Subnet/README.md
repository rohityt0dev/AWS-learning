# Amazon VPC Subnets

A **Subnet** is a logical subdivision of a VPC. It defines a range of IP addresses where you can launch AWS resources such as EC2 instances.

---

# What is a Subnet?

A subnet divides a VPC into smaller networks, allowing you to organize resources and control network access.

Each subnet belongs to a single Availability Zone (AZ).

---

# AWS Reserved IP Addresses

AWS automatically reserves **5 IP addresses** in every subnet.

These reserved IP addresses **cannot** be assigned to EC2 instances or other AWS resources.

---

# Reserved IP Addresses

Example Subnet:

```text
CIDR Block: 10.0.0.0/24
```

| IP Address | Purpose |
|------------|---------|
| **10.0.0.0** | Network Address |
| **10.0.0.1** | Reserved by AWS for the VPC Router |
| **10.0.0.2** | Reserved by AWS for Amazon-provided DNS |
| **10.0.0.3** | Reserved by AWS for future use |
| **10.0.0.255** | Reserved as the last IP address (AWS does not support broadcast in a VPC) |

---

# Example

Subnet CIDR:

```text
10.0.0.0/24
```

Total IP Addresses:

```text
256
```

Reserved by AWS:

```text
5
```

Usable IP Addresses:

```text
251
```

---

# Common Subnet Sizes

| CIDR | Total IP Addresses | AWS Reserved | Usable IP Addresses |
|------|-------------------:|-------------:|--------------------:|
| /28 | 16 | 5 | 11 |
| /27 | 32 | 5 | 27 |
| /26 | 64 | 5 | 59 |
| /24 | 256 | 5 | 251 |

---

# Key Points

- Every subnet belongs to one VPC.
- A subnet exists within a single Availability Zone.
- AWS reserves the **first four** and **last one** IP address in every subnet.
- Reserved IP addresses cannot be assigned to EC2 instances.
- Plan subnet sizes carefully to ensure enough usable IP addresses.

---

# Common Use Cases

- Public Subnets
- Private Subnets
- EC2 Instances
- Load Balancers
- NAT Gateways
- Amazon RDS