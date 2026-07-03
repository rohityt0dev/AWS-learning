# 🗑️ Lab: Detach and Delete an Amazon EBS Volume

In this lab, you will safely detach an Amazon EBS volume from an EC2 instance and then permanently delete it.

---

# 🎯 Objective

- Detach an EBS volume from an EC2 instance
- Delete an unused EBS volume
- Understand important precautions before deleting storage

---

# 🛠️ Services Used

- Amazon EC2
- Amazon EBS

---

# 🏗️ AWS Console Flow

```text
EC2
 └── Volumes
      ├── Select Volume
      ├── Actions
      │      ├── Detach Volume
      │      └── Delete Volume
```

---

# 🚀 Check if the Volume is Mounted

Before detaching the volume, verify whether it is mounted on the EC2 instance.

---

# 🔗 Detach the EBS Volume

1. Open the **AWS Management Console**.
2. Navigate to **Amazon EC2**.
3. In the left navigation pane, select:

```text
Elastic Block Store → Volumes
```

4. Select the EBS volume.
5. Click:

```text
Actions → Detach volume
```

6. Click:

```text
Detach
```

Wait until the volume state changes from:

```text
In-use
```

to

```text
Available
```

> **Note:** You cannot delete an EBS volume while it is attached to an EC2 instance.

---

# 🗑️ Step 3: Delete the EBS Volume

After the volume state becomes **Available**:

1. Select the volume.
2. Click:

```text
Actions → Delete volume
```

3. Confirm the deletion.

The EBS volume is now permanently deleted.

---

# ✅ Expected Result

After completing this lab:

- The EBS volume is detached from the EC2 instance.
- The volume status changes to **Available**.
- The volume is permanently deleted.
- Storage charges for the deleted volume stop.

---

# ⚠️ Important Notes

- Always **unmount the filesystem** before detaching an EBS volume.
- Create an **EBS Snapshot** before deleting a volume that contains important data.
- Deleting an EBS volume is **permanent** and cannot be undone unless a snapshot exists.
- If the volume is the **root volume** of an EC2 instance, you typically need to **stop the instance** before detaching it.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to detach an EBS volume using the AWS Console
- How to permanently delete an EBS volume
- Best practices for protecting data before deleting storage
