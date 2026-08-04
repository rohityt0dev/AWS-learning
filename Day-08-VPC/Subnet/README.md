# Amazon VPC Subnets

A **Subnet** is a range of IP addresses within an Amazon VPC. It allows you to organize and isolate AWS resources, such as EC2 instances, within your VPC.

---

# AWS Reserved IP Addresses

AWS reserves **5 IP addresses** in every subnet.

These IP addresses **cannot** be assigned to EC2 instances or other AWS resources.

---

# Reserved IP Addresses

Example CIDR Block:

```text
10.0.0.0/24
```

| IP Address | Purpose |
|------------|---------|
| **10.0.0.0** | Network Address |
| **10.0.0.1** | Reserved by AWS for the VPC Router |
| **10.0.0.2** | Reserved by AWS for Amazon-provided DNS |
| **10.0.0.3** | Reserved by AWS (Future Use) |
| **10.0.0.255** | Reserved as the last IP address in the subnet |

> **Note:** AWS does **not** support traditional network broadcast inside a VPC, but the last IP address is still reserved and cannot be used.

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

AWS Reserved:

```text
5
```

Usable IP Addresses:

```text
251
```

---

# Common Examples

| Subnet CIDR | Total IPs | Usable IPs |
|-------------|----------:|-----------:|
| /28 | 16 | 11 |
| /27 | 32 | 27 |
| /26 | 64 | 59 |
| /24 | 256 | 251 |

---

# Key Points

- Every subnet belongs to one VPC.
- AWS automatically reserves **5 IP addresses** in each subnet.
- Reserved IP addresses cannot be assigned to EC2 instances.
- Plan subnet sizes carefully to ensure enough usable IP addresses for your resources.

---

# Common Use Cases

- Public Subnets
- Private Subnets
- EC2 Instances
- Load Balancers
- NAT Gateways
- Amazon RDS