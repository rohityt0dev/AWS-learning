# 🖥️ Amazon EC2 (Elastic Compute Cloud)

Amazon Elastic Compute Cloud (EC2) is one of the core services of Amazon Web Services (AWS). It allows users to launch virtual servers (called **instances**) in the cloud within minutes, providing scalable and secure computing resources on demand.

---

# 📚 Table of Contents

- What is Amazon EC2?
- Key Features
- Core Components
- Instance Types
- Storage Options
- Networking
- Security
- Pricing Models
- Common Use Cases
- Key Takeaways
- Interview Questions

---

# 🚀 What is Amazon EC2?

Amazon Elastic Compute Cloud (EC2) is a web service that provides **resizable virtual servers** in the AWS Cloud.

Instead of purchasing physical hardware, users can launch virtual machines whenever needed and pay only for the resources they consume.

## Key Highlights

- Virtual servers on demand
- Launch instances in minutes
- Scale resources up or down
- Pay-as-you-go pricing
- Supports multiple operating systems

---

# ⭐ Key Features

## 1. Elastic

Increase or decrease compute capacity automatically based on application demand.

---

## 2. Multiple Operating Systems

EC2 supports various operating systems including:

- Amazon Linux
- Ubuntu
- Red Hat Enterprise Linux
- Windows Server
- SUSE Linux
- Custom Amazon Machine Images (AMIs)

---

## 3. Secure

Provides secure and isolated computing environments using:

- IAM
- Security Groups
- VPC
- Encryption

---

## 4. Global Infrastructure

Deploy applications across multiple AWS Regions and Availability Zones worldwide.

---

## 5. High Availability

Applications can be deployed across multiple Availability Zones to improve fault tolerance and availability.

---

# 🏗️ Core Components of EC2

## 1. Amazon Machine Image (AMI)

An AMI is a preconfigured template used to launch EC2 instances.

It includes:

- Operating System
- Software Packages
- Application Configuration
- Storage Configuration

---

## 2. Instance Types

Instance Types define the hardware configuration of an EC2 instance, including:

- CPU
- Memory (RAM)
- Storage
- Network Performance

Example:

```
t3.micro
m7i.large
c7g.large
r7g.large
```

---

## 3. Amazon EBS (Elastic Block Store)

Amazon EBS provides persistent block storage for EC2 instances.

Features:

- Persistent storage
- High durability
- Snapshots
- Encryption support

---

## 4. Security Groups

Security Groups act as virtual firewalls for EC2 instances.

Features:

- Stateful firewall
- Controls inbound traffic
- Controls outbound traffic
- Instance-level security

---

## 5. Key Pairs

Key Pairs provide secure authentication for EC2 instances.

- Public Key → Stored in AWS
- Private Key → Downloaded by the user

Used for:

- SSH (Linux)
- RDP (Windows)

---

## 6. Amazon VPC

Amazon Virtual Private Cloud (VPC) provides an isolated virtual network where EC2 instances are launched.

---

# 💻 EC2 Instance Types

AWS offers different instance families optimized for different workloads.

## General Purpose

Balanced CPU, memory, and networking.

Examples:

- Web Servers
- Development
- Small Databases

Example Families:

```
T Series
M Series
```

---

## Compute Optimized

Designed for CPU-intensive applications.

Examples:

- Gaming Servers
- Batch Processing
- Video Encoding
- Scientific Computing

Example Family:

```
C Series
```

---

## Memory Optimized

Provides large amounts of RAM.

Examples:

- SAP HANA
- Redis
- Real-Time Analytics
- In-Memory Databases

Example Family:

```
R Series
```

---

## Storage Optimized

Optimized for applications requiring high disk throughput.

Examples:

- Hadoop
- Big Data
- Data Warehouses
- Log Processing

Example Family:

```
I Series
D Series
```

---

## Accelerated Computing

Uses GPUs or FPGAs.

Examples:

- Machine Learning
- AI Training
- Video Rendering
- Scientific Simulations

Example Families:

```
P Series
G Series
```

---

# 💾 Storage Options

## Amazon EBS

Persistent block storage attached to a single EC2 instance.

Best For:

- Operating Systems
- Databases
- Applications

---

## Amazon EFS

Elastic File System shared across multiple EC2 instances.

Best For:

- Shared File Storage
- Container Applications

---

## Amazon S3

Object storage accessed over the network.

Best For:

- Backups
- Static Website Hosting
- Logs
- Images
- Videos

---

## Instance Store

Temporary storage physically attached to the host machine.

Important:

Data is lost if the instance is stopped or terminated.

---

# 🌐 Networking

Every EC2 instance runs inside an Amazon VPC.

Networking Components include:

## VPC

Creates a logically isolated virtual network.

---

## Subnets

Divide the VPC into:

- Public Subnets
- Private Subnets

---

## Internet Gateway

Allows internet access for resources in public subnets.

---

## Route Tables

Define how network traffic is routed.

---

## Elastic IP

A static public IPv4 address that can be associated with an EC2 instance.

---

# 🔐 Security

AWS follows a defense-in-depth security model.

## IAM Roles

Provide secure permissions to EC2 instances without storing credentials.

---

## Security Groups

Stateful firewall at the instance level.

Only allow rules are supported.

---

## Network ACLs (NACLs)

Subnet-level firewall.

Supports both:

- Allow Rules
- Deny Rules

Stateless by design.

---

## SSH / RDP

Secure remote access to EC2 instances.

- SSH → Linux
- RDP → Windows

---

## Encryption

AWS supports encryption for:

- EBS Volumes
- EBS Snapshots
- Data in Transit
- Data at Rest

Encryption is managed using AWS Key Management Service (KMS).

---

# 💰 EC2 Pricing Models

AWS offers multiple pricing options to optimize costs.

## On-Demand

- No long-term commitment
- Pay only for usage

Best For:

- Testing
- Development
- Short-term workloads

---

## Reserved Instances

Commit for:

- 1 Year
- 3 Years

Save up to **72%** compared to On-Demand pricing.

---

## Savings Plans

Flexible pricing model based on a committed hourly spend.

Provides savings across multiple instance families.

---

## Spot Instances

Use unused AWS capacity.

Benefits:

- Up to **90% lower cost**

Ideal For:

- Batch Processing
- Big Data
- CI/CD Jobs
- Fault-Tolerant Applications

---

## Dedicated Hosts

Physical servers dedicated to a single customer.

Best For:

- Compliance Requirements
- Software Licensing

---

# 💼 Common Use Cases

Amazon EC2 is used for many workloads.

## Web Hosting

Host websites and REST APIs using scalable EC2 instances.

---

## Databases

Run databases such as:

- MySQL
- PostgreSQL
- Oracle
- MongoDB

---

## CI/CD Pipelines

Provision build agents for:

- Jenkins
- GitHub Actions
- AWS CodeBuild

---

## AI & Machine Learning

Train and deploy ML models using GPU-based EC2 instances.

---

# 📝 Key Takeaways

- Amazon EC2 provides virtual servers in the cloud.
- EC2 supports multiple operating systems and instance families.
- AMIs are templates used to launch EC2 instances.
- Security Groups protect instances at the network level.
- EBS provides persistent storage, while Instance Store is temporary.
- EC2 offers flexible pricing models including On-Demand, Reserved, Spot, Savings Plans, and Dedicated Hosts.
- EC2 powers workloads such as web hosting, databases, CI/CD pipelines, and AI/ML applications.

---


## 👨‍💻 Author

**Rohit Tambadkar**

Learning **AWS | DevOps | Linux | Docker | Kubernetes | Terraform | Python**
