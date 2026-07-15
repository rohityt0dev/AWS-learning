# 🪣 Amazon Simple Storage Service (Amazon S3)

Amazon Simple Storage Service (Amazon S3) is a cloud-based **object storage service** provided by AWS. It allows you to securely store, manage, and retrieve unlimited amounts of data such as files, images, videos, documents, application assets, backups, and logs from anywhere over the internet.

Amazon S3 is designed to provide **high durability, scalability, availability, and security**, making it one of the most widely used cloud storage services.

---

# 📚 Table of Contents

- What is Amazon S3?
- Key Features
- Core Concepts
- Common Use Cases
- Amazon S3 Versioning
- Amazon S3 Replication
- Amazon S3 Storage Classes
- Amazon S3 Lifecycle Rules
- Key Takeaways

---

# 🚀 What is Amazon S3?

Amazon S3 (Simple Storage Service) is an **object storage service** where data is stored as **objects** inside **buckets**.

Unlike traditional file systems, S3 stores data as objects rather than files and folders.

Each object consists of:

- Object (Data/File)
- Metadata
- Unique Key

---

# ⭐ Key Features

- Object Storage
- Virtually Unlimited Storage
- Highly Scalable
- Highly Durable (99.999999999% durability)
- Region-Specific Buckets
- Globally Unique Bucket Names
- Secure Data Storage
- Versioning Support
- Replication Support
- Lifecycle Management
- Multiple Storage Classes

---

# 🏗️ Core Concepts

## Bucket

A bucket is a container used to store objects.

Example:

```text
my-company-backup
```

### Bucket Features

- Must have a globally unique name.
- Created in a specific AWS Region.
- Stores unlimited objects.

---

## Object

An object is any file stored inside an S3 bucket.

Examples:

- image.jpg
- backup.zip
- index.html
- resume.pdf
- video.mp4

---

## Key

Every object has a unique **key**.

The key is simply the object's name and may contain forward slashes (`/`) to simulate folders.

Example:

```text
images/logo.png
```

---

## Value

The **value** is the actual content of the object.

Example:

```text
resume.pdf
```

The PDF file itself is the value.

---

# 💼 Common Use Cases

Amazon S3 is widely used for many cloud storage scenarios.

## 🌐 Static Website Hosting

Host static websites by storing:

- HTML
- CSS
- JavaScript
- Images

---

## 📊 Data Lake

Amazon S3 is commonly used as a centralized **Data Lake**.

It stores:

- Structured Data
- Semi-Structured Data
- Unstructured Data

Used for analytics and machine learning.

---

## 💾 Backup and Disaster Recovery

Amazon S3 is ideal for:

- File Backups
- Database Backups
- Long-Term Archives
- Disaster Recovery

Its high durability makes it a reliable backup solution.

---

# 🔄 Amazon S3 Versioning

Versioning allows multiple versions of the same object to be stored in a single bucket.

It protects against:

- Accidental deletion
- Accidental overwrite
- Data corruption

---

## Without Versioning

- Uploading a file with the same name replaces the old file.
- Deleted objects are permanently removed.

Example:

```text
report.pdf

↓

Upload new report.pdf

↓

Old file is overwritten
```

---

## With Versioning Enabled

- Every upload creates a new version.
- Old versions remain available.
- Deleted objects are not permanently removed immediately.
- Amazon S3 places a **Delete Marker** instead.

Example:

```text
report.pdf
      │
Version 1
      │
Version 2
      │
Version 3
```

Older versions can be restored at any time.

---

# 🔁 Amazon S3 Replication

Amazon S3 Replication automatically copies objects from one bucket to another.

Replication improves:

- Data Availability
- Disaster Recovery
- Compliance
- Performance

---

## Types of Replication

### Same-Region Replication (SRR)

Replicates objects between buckets within the **same AWS Region**.

Example:

```text
Mumbai
   │
Source Bucket
   │
   ▼
Destination Bucket
```

---

### Cross-Region Replication (CRR)

Replicates objects to another AWS Region.

Example:

```text
Mumbai Region
      │
Source Bucket
      │
      ▼
Singapore Region
Destination Bucket
```

---

> **Note:** Replication applies only to **new objects** uploaded after replication is enabled. Existing objects are not automatically replicated unless **S3 Batch Replication** is used.

---

# 📦 Amazon S3 Storage Classes

Amazon S3 offers multiple storage classes based on how frequently data is accessed and how quickly it needs to be retrieved.

Choosing the appropriate storage class helps optimize storage costs.

| Storage Class | Best For |
|---------------|----------|
| S3 Standard | Frequently accessed data |
| S3 Intelligent-Tiering | Automatically optimizes storage costs |
| S3 Standard-IA | Infrequently accessed data |
| S3 One Zone-IA | Infrequently accessed data in a single Availability Zone |
| S3 Glacier Instant Retrieval | Archived data requiring immediate access |
| S3 Glacier Flexible Retrieval | Long-term archival |
| S3 Glacier Deep Archive | Lowest-cost long-term archival storage |

---

# ♻️ Amazon S3 Lifecycle Rules

Amazon S3 Lifecycle Rules automatically manage objects throughout their lifecycle.

They can:

- Move objects to lower-cost storage classes.
- Archive old data.
- Delete unnecessary files.
- Automate storage management.

---

## Why Use Lifecycle Rules?

Lifecycle Rules help you:

- 💰 Reduce storage costs
- 🗄️ Automatically archive old data
- 🧹 Delete unnecessary files
- 🤖 Eliminate manual maintenance

---

## Lifecycle Transition Example

```text
Day 0
   │
   ▼
S3 Standard
   │
30 Days
   ▼
S3 Standard-IA
   │
90 Days
   ▼
S3 Glacier Flexible Retrieval
   │
365 Days
   ▼
S3 Glacier Deep Archive
```

This process automatically moves objects to more cost-effective storage classes over time.

---

# 📝 Key Takeaways

- Amazon S3 is an object storage service.
- Data is stored as objects inside buckets.
- Bucket names must be globally unique.
- Buckets are created in a specific AWS Region.
- Each object consists of a key, value, and metadata.
- Versioning protects against accidental deletion and overwriting.
- Replication copies objects between buckets for backup and disaster recovery.
- Multiple storage classes help optimize storage costs.
- Lifecycle Rules automate object transitions and deletion.
- Amazon S3 is commonly used for website hosting, backups, data lakes, media storage, and disaster recovery.
