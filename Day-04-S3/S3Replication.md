# 🔄 Lab: Configure Amazon S3 Cross-Region Replication (CRR)

Amazon S3 Replication automatically copies objects from one S3 bucket to another bucket. It is commonly used for **Disaster Recovery (DR)**, **Backup**, **Compliance**, and **High Availability**.

> **Note:** Replication only works when **Versioning is enabled** on both the source and destination buckets.

---

# 🎯 Objective

- Create two S3 buckets
- Enable Bucket Versioning
- Configure an S3 Replication Rule
- Create the required IAM Role
- Verify object replication

---

# 🛠️ Services Used

- Amazon S3
- AWS Identity and Access Management (IAM)

---

# 🏗️ Architecture

```text
                Upload Object
                      │
                      ▼
          Source S3 Bucket
      (Versioning Enabled)
                      │
         Replication Rule
                      │
              IAM Role
                      │
                      ▼
      Destination S3 Bucket
      (Versioning Enabled)
```

---

# 🚀 Create Two S3 Buckets

Create the following buckets.

Example:

```text
web-host-page-resume-01

web-host-page-resume-01-replica
```

> Bucket names must be globally unique.

---

# 🔄 Enable Bucket Versioning

Versioning must be enabled on **both** buckets.

Navigate to:

```text
Bucket
    ↓
Properties
    ↓
Bucket Versioning
    ↓
Enable
```

Repeat the same steps for both:

- Source Bucket
- Destination Bucket

---

# 📂 Open the Source Bucket

Open the **Source Bucket**.

Navigate to:

```text
Management
    ↓
Replication Rules
    ↓
Create Replication Rule
```

---

# 📝 Enter a Replication Rule Name

Provide a name for the replication rule.

Example:

```text
replication-rule
```

---

# 📦 Select the Objects to Replicate

Choose one of the following options:

### Replicate All Objects

```text
All Objects
```

This replicates every object uploaded to the source bucket.

---

### Replicate Specific Objects

Choose:

```text
Specific Prefix
```

Example:

```text
images/
```

Only objects stored inside the **images/** folder will be replicated.

---

# 🎯 Select the Destination Bucket

Under **Destination**, choose:

```text
Destination Bucket
```

Select:

```text
Existing Bucket
```

Choose:

```text
web-host-page-resume-01-replica
```

---

# 🔐 Configure the IAM Role

For IAM Role, choose:

```text
Create New Role
```

AWS automatically creates the required IAM role with the necessary permissions for replication.

---

# 💾 Save the Replication Rule

Click:

```text
Save
```

Amazon S3 Replication is now enabled.

---

# 🧪 Test Replication

Upload a file to the **Source Bucket**.

Example:

```text
resume.pdf
```

Wait a few moments.

Open the **Destination Bucket**.

You should see the same file automatically replicated.

```text
Source Bucket
     │
 resume.pdf
     │
     ▼
Destination Bucket
     │
 resume.pdf
```

---

# ✅ Expected Result

After completing this lab:

- Two S3 buckets are created.
- Versioning is enabled on both buckets.
- A replication rule is configured.
- AWS creates the required IAM role.
- Files uploaded to the source bucket are automatically copied to the destination bucket.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How Amazon S3 Replication works
- Why Bucket Versioning is required
- How to configure a Replication Rule
- How IAM Roles are used in replication
- How to replicate all objects or specific prefixes
- How to verify successful replication

---

# ⚠️ Important Notes

- Versioning **must** be enabled on both source and destination buckets.
- Replication applies only to **new objects** uploaded after the rule is created.
- Existing objects are **not replicated automatically** unless Batch Replication is configured.
- Source and destination buckets can be in the **same Region (SRR)** or **different Regions (CRR)**.
- The destination bucket should not already contain objects with the same key if you want a clean replication setup.
