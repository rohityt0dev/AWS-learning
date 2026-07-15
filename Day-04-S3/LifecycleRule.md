# ♻️ Lab: Configure Amazon S3 Lifecycle Rules

Amazon S3 Lifecycle Rules help automate object management by transitioning objects to lower-cost storage classes or deleting them after a specified period. This reduces storage costs and minimizes manual maintenance.

---

# 🎯 Objective

- Understand Amazon S3 Lifecycle Rules
- Create a Lifecycle Rule
- Configure Transition Actions
- Automatically move objects to lower-cost storage classes
- Reduce storage costs

---

# 🛠️ Services Used

- Amazon S3
- Amazon S3 Lifecycle Rules

---

# 🏗️ Architecture

```text
            Upload Object
                  │
                  ▼
            S3 Standard
                  │
        Lifecycle Rule
                  │
      ┌───────────┴───────────┐
      ▼                       ▼
S3 Standard-IA          Glacier Flexible Retrieval
      │                       │
      ▼                       ▼
 Glacier Deep Archive   (Optional Expiration)
```

---

# 💡 Why Use Lifecycle Rules?

Amazon S3 Lifecycle Rules help you automatically manage stored objects.

### Benefits

- 💰 Reduce storage costs
- 🗄️ Automatically archive old data
- 🧹 Delete unnecessary files
- 🤖 Eliminate manual maintenance

---

# 🔄 Lifecycle Actions

Amazon S3 Lifecycle Rules support several automatic actions.

## 1. Transition Action

Transition moves objects from one storage class to another after a specified number of days.

Example Lifecycle:

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

This helps reduce storage costs while keeping data available when needed.

---

# 🚀 Lab: Create an S3 Lifecycle Rule

## Open Amazon S3

1. Sign in to the **AWS Management Console**.
2. Navigate to **Amazon S3**.
3. Select your bucket.

---

## Open the Management Tab

Navigate to:

```text
Bucket
    ↓
Management
```

Click:

```text
Create lifecycle rule
```

---

## Enter the Rule Name

Provide a descriptive name.

Example:

```text
Lifecycle-rule
```

---

## Choose the Rule Scope

Select where the rule should apply.

### Entire Bucket

Applies the rule to every object.

---

### Specific Prefix

Example:

```text
logs/
```

Only objects inside the **logs/** folder are affected.

---

### Objects with Specific Tags

Apply the rule only to objects that contain specific tags.

Example:

```text
Environment = Production
```

---

## Step 5: Select Lifecycle Actions

Choose one or more actions.

- ✔ Transition objects
- ✔ Expire current versions
- ✔ Delete non-current versions *(Requires Versioning)*
- ✔ Abort incomplete multipart uploads

---

## Configure the Transition Schedule

Example configuration:

| After | Action |
|--------|--------|
| 30 Days | Move to S3 Standard-IA |
| 90 Days | Move to S3 Glacier Flexible Retrieval |
| 365 Days | Move to S3 Glacier Deep Archive |

---

## Create the Rule

Review all settings.

Click:

```text
Create Rule
```

The Lifecycle Rule is now active.

---

# ✅ Expected Result

After completing this lab:

- A Lifecycle Rule is created.
- Objects automatically transition to lower-cost storage classes.
- Old data is archived without manual intervention.
- Storage costs are optimized over time.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- What Amazon S3 Lifecycle Rules are
- Why Lifecycle Rules are important
- How Transition Actions work
- How to configure Lifecycle Rules using the AWS Console
- How to automate storage management
- How Lifecycle Rules reduce storage costs

---

# ⚠️ Important Notes

- Lifecycle Rules apply only to objects that match the selected scope.
- Transition timing is based on the object's creation date.
- Versioning must be enabled to delete non-current object versions.
- Lifecycle processing is automatic and may take time to apply after objects become eligible.
- Review Lifecycle Rules regularly to ensure they align with your storage and compliance requirements.
