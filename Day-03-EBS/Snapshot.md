# 📸 Lab: Amazon EBS Snapshots

Amazon EBS Snapshots are **point-in-time backups** of EBS volumes. They help protect data, recover from failures, migrate data, and create new EBS volumes.

---

# 🎯 Objective

In this lab, you will learn how to:

- Create an EBS Snapshot
- Monitor Snapshot Status
- Restore an EBS Volume from a Snapshot
- Copy a Snapshot to Another AWS Region
- Delete an EBS Snapshot

---

# 🛠️ Services Used

- Amazon EC2
- Amazon EBS
- Amazon EBS Snapshots

---

# 🏗️ Snapshot Lifecycle

```text
Create EBS Volume
        │
        ▼
     Store Data
        │
        ▼
 Create Snapshot
        │
        ▼
Snapshot Stored in AWS
        │
        ▼
Create New Volume
   from Snapshot
        │
        ▼
 Attach to EC2
```

---

# 🚀 Create an EBS Snapshot

## Open the EC2 Console

1. Sign in to the **AWS Management Console**.
2. Navigate to **Amazon EC2**.
3. In the left navigation pane, select:

```text
Elastic Block Store → Volumes
```

---

## Select the EBS Volume

Choose the EBS volume you want to back up.

Example:

| Property | Example |
|----------|---------|
| Volume ID | vol-0123456789abcdef0 |
| Size | 20 GiB |
| Volume Type | gp3 |

---

## Create the Snapshot

Select the volume.

Click:

```text
Actions → Create snapshot
```

Enter the following details:

| Field | Example |
|--------|---------|
| Description | Backup before software update |
| Tags | Name = Daily-Backup |

Click:

```text
Create snapshot
```

AWS starts creating the snapshot.

---

## Check Snapshot Status

Navigate to:

```text
EC2
 └── Elastic Block Store
      └── Snapshots
```

Initially the status will be:

```text
Pending
```

After the snapshot is completed:

```text
Completed
```

The snapshot is now ready to be used.

---

# 🔄 Restore an EBS Volume from a Snapshot

## Step 1

Open:

```text
EC2 → Snapshots
```

---

## Step 2

Select the snapshot.

Click:

```text
Actions → Create volume
```

---

## Step 3

Configure the new volume.

| Setting | Recommendation |
|----------|----------------|
| Volume Type | gp3 |
| Size | Equal to or larger than the snapshot |
| Availability Zone | Same AZ as the target EC2 instance |

Click:

```text
Create volume
```

---

## Step 4

Attach the new volume to an EC2 instance.

After attaching:

- Format the volume (if required).
- Mount it inside the operating system.
- Access the restored data.

---

# 🗑️ Delete an EBS Snapshot

## Step 1

Open:

```text
EC2 → Snapshots
```

---

## Step 2

Select the snapshot.

Click:

```text
Actions → Delete snapshot
```

---

## Step 3

Confirm the deletion.

The snapshot is permanently deleted.

> **Note:** Deleting a snapshot **does not delete** any EBS volumes that were previously created from that snapshot.

---

# ✅ Expected Result

After completing this lab:

- An EBS Snapshot is created successfully.
- Snapshot status changes from **Pending** to **Completed**.
- A new EBS volume can be restored from the snapshot.
- Snapshots can be copied to another AWS Region.
- Unused snapshots can be deleted safely.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create an Amazon EBS Snapshot
- How to monitor snapshot status
- How to restore an EBS volume from a snapshot
- How to copy snapshots across AWS Regions
- How to delete snapshots
- The lifecycle of Amazon EBS Snapshots

---

# 💡 Best Practices

- Create snapshots before software updates or major configuration changes.
- Schedule automatic snapshots for important workloads.
- Use tags to organize snapshots.
- Copy critical snapshots to another Region for disaster recovery.
- Delete unused snapshots to reduce storage costs.
- Remember that snapshots are incremental, making them storage-efficient.
