# 💾 Amazon EBS (Elastic Block Store)

Amazon Elastic Block Store (Amazon EBS) is a high-performance, persistent block storage service provided by Amazon Web Services (AWS). It is primarily designed to be used with Amazon EC2 instances for storing operating systems, applications, databases, and other data that requires low-latency access.

---

# 📚 Table of Contents

- What is Amazon EBS?
- Key Features
- Core Concepts
- EBS Volume Types
- EBS Volume Lifecycle
- EBS Snapshots
- EBS vs Amazon S3
- EBS vs Instance Store
- Encryption
- Best Practices
- Common Use Cases
- Interview Questions
- Quick Revision

---

# 🚀 What is Amazon EBS?

Amazon Elastic Block Store (EBS) provides **persistent block-level storage** for Amazon EC2 instances.

Think of EBS as a **virtual hard disk (SSD or HDD)** attached to an EC2 instance.

It is commonly used to store:

- Operating Systems
- Application Files
- Databases
- Logs
- Business Data

Unlike Instance Store, the data stored in EBS persists even if the EC2 instance is stopped or restarted.

---

# ⭐ Key Features

## 1. Persistent Storage

Data remains available even after:

- Instance Stop
- Instance Start
- Instance Reboot

---

## 2. Block Storage

Provides low-latency block-level storage similar to a physical hard drive.

Ideal for:

- Databases
- Operating Systems
- Enterprise Applications

---

## 3. Snapshots

Supports point-in-time backups.

Snapshots are:

- Incremental
- Stored in Amazon S3
- Used for disaster recovery
- Used to create new EBS volumes

---

## 4. Encryption

Supports encryption using **AWS Key Management Service (AWS KMS)**.

Encryption protects:

- EBS Volumes
- Snapshots
- Data in transit
- Data at rest

---

## 5. Elastic Volumes

Resize EBS volumes without stopping the EC2 instance.

You can modify:

- Volume Size
- IOPS
- Throughput
- Volume Type

---

## 6. High Performance

Supports:

- Up to **256,000 IOPS**
- Up to **4,000 MB/s throughput** (io2 Block Express)

Ideal for:

- High-performance databases
- Large enterprise workloads

---

# 🧩 Core Concepts

## Volume

A virtual disk attached to an EC2 instance.

---

## Attachment

An EBS volume can be attached to an EC2 instance in the **same Availability Zone (AZ)**.

---

## Availability Zone

EBS volumes exist within a single Availability Zone.

To use an EBS volume in another Region or AZ, create a snapshot and restore it.

---

# 💽 EBS Volume Types

## SSD-Based Volumes

### gp3 (General Purpose SSD)

Recommended for most workloads.

- Default SSD volume
- Cost-effective
- Independent IOPS and throughput configuration
- Suitable for web servers, development, and databases

---

### gp2 (General Purpose SSD)

Legacy SSD volume.

- Performance depends on volume size
- AWS recommends migrating to gp3

---

### io2 / io2 Block Express

High-performance SSD.

Best for:

- Oracle Database
- SAP HANA
- Microsoft SQL Server
- Business-critical applications

Supports:

- Up to **256,000 IOPS**
- Sub-millisecond latency

---

## HDD-Based Volumes

### st1 (Throughput Optimized HDD)

Best for:

- Big Data
- Data Warehouses
- Log Processing

---

### sc1 (Cold HDD)

Lowest-cost storage.

Best for:

- Archived data
- Infrequently accessed files

Not recommended for boot volumes.

---

# 🔄 EBS Volume Lifecycle

```text
Create Volume
      │
      ▼
Attach to EC2
      │
      ▼
Format & Mount
      │
      ▼
Store Data
      │
      ▼
Create Snapshots
      │
      ▼
Detach or Delete
```

---

# 📸 EBS Snapshots

An EBS Snapshot is a point-in-time backup of an EBS volume.

### Features

- Incremental backups
- Stored in Amazon S3
- Disaster Recovery
- Cross-Region Copy
- Create new EBS volumes

### Benefits

- Backup
- Restore
- Clone volumes
- Migration
- Disaster Recovery

---

# ⚖️ Amazon EBS vs Amazon S3

| Amazon EBS | Amazon S3 |
|------------|-----------|
| Block Storage | Object Storage |
| Attached to EC2 | Accessed via API |
| Single Availability Zone | Multiple Availability Zones |
| Low latency | High durability |
| Used for OS and databases | Used for backups, images, videos, static websites |

---

# ⚖️ Amazon EBS vs Instance Store

| Amazon EBS | Instance Store |
|------------|----------------|
| Persistent storage | Temporary (Ephemeral) storage |
| Supports snapshots | No snapshots |
| Can be encrypted | No built-in encryption |
| Detachable | Physically attached |
| Survives reboot | Data lost when instance stops or terminates |

---

# 🔐 Encryption

Amazon EBS supports encryption using **AWS KMS**.

Encryption applies to:

- EBS Volumes
- Snapshots
- Data at Rest
- Data in Transit

Benefits:

- Data Security
- Compliance
- Automatic Encryption Management

---

# ✅ Best Practices

- Use **gp3** for most workloads.
- Enable **EBS Encryption**.
- Automate snapshots using **Amazon Data Lifecycle Manager (DLM)**.
- Monitor performance using **Amazon CloudWatch**.
- Delete unused volumes and snapshots to reduce costs.
- Use **io2** only for workloads requiring guaranteed high IOPS.

---

# 💼 Common Use Cases

Amazon EBS is commonly used for:

- EC2 Boot Volumes
- Database Storage
- Enterprise Applications
- File Systems
- Backup Storage
- Disaster Recovery
- SAP Applications
- High-performance workloads

---
