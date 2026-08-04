# Amazon Internet Gateway (IGW)

An **Internet Gateway (IGW)** is a VPC component that enables communication between resources in a VPC and the Internet.

---

# What is an Internet Gateway?

An Internet Gateway allows resources such as **EC2 instances** in a VPC to send and receive traffic from the Internet.

It serves as the gateway between your VPC and the public Internet.

---

# Key Features

### ✅ Internet Connectivity

- Allows resources in a VPC to access the Internet.
- Enables inbound and outbound Internet communication.

---

### ✅ Highly Available

- Automatically scales horizontally.
- Highly available and redundant.
- Managed entirely by AWS.

---

### ✅ Separate AWS Resource

- An Internet Gateway must be created separately.
- It is not created automatically when a VPC is created.

---

### ✅ One-to-One Relationship

- One VPC can have **only one Internet Gateway** attached.
- One Internet Gateway can be attached to **only one VPC** at a time.

---

### ✅ Requires Route Tables

Creating and attaching an Internet Gateway **does not** provide Internet access by itself.

To enable Internet access, you must also:

- Attach the Internet Gateway to the VPC.
- Add a route (`0.0.0.0/0`) in the Route Table pointing to the Internet Gateway.
- Associate the Route Table with the Public Subnet.

---

# Architecture

```text
                Internet
                    │
                    ▼
          Internet Gateway (IGW)
                    │
                    ▼
               Amazon VPC
                    │
              Public Subnet
                    │
              EC2 Instance
```

---

# Common Use Cases

- Public EC2 instances
- Web servers
- Bastion hosts
- Public Load Balancers
- Applications requiring Internet access

---

# Best Practices

- Attach only one Internet Gateway per VPC.
- Use Internet Gateways only for Public Subnets.
- Keep databases and internal services in Private Subnets.
- Configure Route Tables correctly to enable Internet access.
- Use Security Groups and Network ACLs to secure Internet-facing resources.