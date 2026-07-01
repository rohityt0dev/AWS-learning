# 🎯 Amazon EC2 Interview Questions and Answers

These are the most commonly asked **Amazon EC2 interview questions** for beginners, AWS learners, and aspiring DevOps Engineers.

---

# 1. What is Amazon EC2?

### Answer

Amazon Elastic Compute Cloud (EC2) is a web service provided by AWS that allows users to launch virtual servers (called **instances**) in the cloud. It provides scalable computing capacity on demand, enabling users to run applications without investing in physical hardware.

**Key Points:**

- Virtual servers in the cloud
- Launch instances within minutes
- Supports multiple operating systems
- Highly scalable
- Pay-as-you-go pricing

---

# 2. What are the key features of EC2?

### Answer

Amazon EC2 offers several important features:

- **Elastic Scaling** – Increase or decrease compute capacity based on demand.
- **Multiple Operating Systems** – Supports Linux, Windows, macOS, and custom AMIs.
- **Secure Environment** – Uses IAM, Security Groups, and VPC for secure access.
- **Global Infrastructure** – Deploy applications across multiple AWS Regions and Availability Zones.
- **High Availability** – Applications can run across multiple Availability Zones for fault tolerance.

---

# 3. What is an Amazon Machine Image (AMI)?

### Answer

An **Amazon Machine Image (AMI)** is a pre-configured template used to launch an EC2 instance.

An AMI contains:

- Operating System
- Application Software
- System Configuration
- Storage Configuration

Every EC2 instance is launched from an AMI.

---

# 4. What are EC2 Instance Types?

### Answer

Instance Types define the hardware configuration of an EC2 instance, including CPU, memory, storage, and networking performance.

### Common Instance Families

| Instance Family | Purpose |
|-----------------|---------|
| General Purpose | Balanced CPU and memory |
| Compute Optimized | CPU-intensive applications |
| Memory Optimized | Large memory workloads |
| Storage Optimized | High-performance storage |
| Accelerated Computing | GPU and machine learning workloads |

---

# 5. What is the difference between EBS and Instance Store?

### Answer

| Amazon EBS | Instance Store |
|------------|----------------|
| Persistent storage | Temporary storage |
| Data survives instance stop/start | Data is lost when the instance stops or terminates |
| Suitable for databases and operating systems | Suitable for temporary files, cache, and buffers |
| Can create snapshots | Snapshots are not supported |

---

# 6. What is the purpose of a Security Group?

### Answer

A **Security Group** acts as a **virtual firewall** for an EC2 instance.

It controls:

- Inbound traffic
- Outbound traffic

### Features

- Instance-level security
- Stateful firewall
- Supports only **Allow** rules
- Automatically allows response traffic

---

# 7. What is an Elastic IP?

### Answer

An **Elastic IP (EIP)** is a static public IPv4 address provided by AWS.

Unlike a normal public IP address, an Elastic IP remains the same even if the instance is stopped and started again.

### Benefits

- Static public IP address
- Easy failover between instances
- Useful for production applications

---

# 8. What is the difference between Security Groups and Network ACLs (NACLs)?

### Answer

| Security Group | Network ACL (NACL) |
|----------------|--------------------|
| Instance-level firewall | Subnet-level firewall |
| Stateful | Stateless |
| Supports only Allow rules | Supports Allow and Deny rules |
| Applied to EC2 instances | Applied to subnets |

---

# 9. What are the different EC2 pricing models?

### Answer

AWS provides multiple pricing options to meet different workload requirements.

### On-Demand

- No long-term commitment
- Pay only for what you use

**Best For:** Development, testing, and short-term workloads.

---

### Reserved Instances

- 1-year or 3-year commitment
- Up to **72% cost savings**

**Best For:** Predictable workloads.

---

### Savings Plans

- Flexible pricing model
- Lower cost based on committed hourly usage

**Best For:** Long-running applications with changing instance types.

---

### Spot Instances

- Uses unused AWS capacity
- Up to **90% lower cost**
- Can be interrupted by AWS

**Best For:** Batch jobs, CI/CD, big data, and fault-tolerant applications.

---

### Dedicated Hosts

- Physical server dedicated to one customer

**Best For:** Compliance requirements and software licensing.

---

# 10. What are the common use cases of Amazon EC2?

### Answer

Amazon EC2 is commonly used for:

- Hosting websites and web applications
- Running application servers
- Hosting databases (MySQL, PostgreSQL, Oracle)
- CI/CD pipelines (Jenkins, GitHub Actions)
- Machine Learning and AI workloads
- Big Data processing
- Development and testing environments
- High Performance Computing (HPC)
- Disaster Recovery solutions
- Enterprise applications

---

# ⭐ Quick Revision

| Question | Short Answer |
|----------|--------------|
| What is EC2? | A service that provides scalable virtual servers in AWS. |
| What is an AMI? | A template used to launch EC2 instances. |
| What are Instance Types? | Hardware configurations for CPU, memory, storage, and networking. |
| What is EBS? | Persistent block storage for EC2 instances. |
| What is Instance Store? | Temporary storage that is deleted when the instance stops or terminates. |
| What is a Security Group? | A stateful virtual firewall for EC2 instances. |
| What is an Elastic IP? | A static public IPv4 address for EC2 instances. |
| Security Group vs NACL? | Security Groups are stateful and instance-level; NACLs are stateless and subnet-level. |
| EC2 Pricing Models? | On-Demand, Reserved Instances, Savings Plans, Spot Instances, and Dedicated Hosts. |
| Common EC2 Use Cases? | Web hosting, databases, CI/CD, AI/ML, big data, testing, and enterprise applications. |
