# 🔐 AWS Policy Generator for S3 Bucket Policy

The **AWS Policy Generator** is a free AWS tool that helps users create **JSON-based access policies** without manually writing JSON syntax.

It provides a simple graphical interface where you can select the policy type, specify permissions, and automatically generate a valid AWS policy.

---

# 🎯 Learning Objectives

After completing this lab, you will learn how to:

- Understand the AWS Policy Generator
- Generate an S3 Bucket Policy
- Allow public read access to an S3 bucket
- Understand JSON policy structure
- Apply the generated policy to an S3 bucket

---

# 🛠️ Services Used

- Amazon S3
- AWS Policy Generator
- S3 Bucket Policy
- JSON

---

# 📌 What is AWS Policy Generator?

The **AWS Policy Generator** is an AWS-provided web tool that generates JSON policies for various AWS services.

It eliminates the need to manually write JSON syntax and helps reduce configuration errors.

---

# 📚 Supported Policy Types

The AWS Policy Generator can create policies for:

- IAM Policies
- Amazon S3 Bucket Policies
- Amazon SQS Policies
- Amazon SNS Policies
- VPC Endpoint Policies

---

# 🏗️ Workflow

```text
User
   │
   ▼
AWS Policy Generator
   │
   ▼
Generate JSON Policy
   │
   ▼
Copy Policy
   │
   ▼
Amazon S3 Bucket
   │
   ▼
Permissions Updated
```

---

# 🚀 Open AWS Policy Generator

Open the following page in your browser:

```text
https://awspolicygen.s3.amazonaws.com/policygen.html
```

You will see the AWS Policy Generator interface.

---

# 📝 Select Policy Type

Under **Policy Type**, choose:

```text
S3 Bucket Policy
```

This option generates policies specifically for Amazon S3 buckets.

---

# 👤 Configure the Policy

### Principal

Specify who can access the bucket.

For public access, enter:

```text
*
```

**Meaning:**

Everyone on the Internet is allowed to access the permitted resources.

---

### Effect

Select:

```text
Allow
```

---

### Actions

Choose the required permission.

For a public website, select:

```text
GetObject
```

This permission allows users to download and read objects stored inside the bucket.

---

### Amazon Resource Name (ARN)

Enter your bucket ARN.

Example:

```text
arn:aws:s3:::rohit-tam-01/*
```

> Replace `my-static-website` with your actual bucket name.

---

# ➕ Add Statement

Click:

```text
Add Statement
```

The configured statement will be added to the policy.

---

# ⚙️ Generate the Policy

Click:

```text
Generate Policy
```

The AWS Policy Generator creates a JSON policy.

Example:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Statement1",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::rohit-tam-01/*"
        }
    ]
}
```

Copy the generated JSON policy.

---

# 🪣 Apply the Policy to an S3 Bucket

Open the AWS Management Console.

Navigate to:

```text
Amazon S3
```

Select your bucket.

Go to:

```text
Permissions
```

Click:

```text
Bucket Policy
```

Paste the generated JSON policy.

Click:

```text
Save Changes
```

---

# ✅ Verification

Open the Static Website Endpoint:

```text
http://rohit-tam-01.s3-website.ap-south-1.amazonaws.com
```

If the bucket policy is configured correctly, your website will be publicly accessible.

---

# 📖 Understanding the JSON Policy

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Statement1",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::rohit-tam-01/*"
        }
    ]
}
```

| Field | Description |
|--------|-------------|
| Version | Policy language version |
| Statement | List of permission statements |
| Sid | Statement identifier |
| Effect | Allow or Deny |
| Principal | Who receives the permission |
| Action | Allowed AWS action |
| Resource | AWS resource on which the action is allowed |

---

# 🎯 Common Use Cases

The AWS Policy Generator is commonly used for:

- Static Website Hosting
- Public File Downloads
- Bucket Access Control
- IAM Policy Creation
- SNS Topic Policies
- SQS Queue Policies
- VPC Endpoint Policies

---

# 🔒 Best Practices

- Follow the **Principle of Least Privilege**.
- Avoid using `"Principal": "*"` unless public access is required.
- Grant only the permissions users or applications need.
- Regularly review and update bucket policies.
- Enable **Block Public Access** unless hosting a public website.

---

# 📝 Key Takeaways

- AWS Policy Generator simplifies JSON policy creation.
- It supports IAM, S3, SQS, SNS, and VPC Endpoint policies.
- Bucket Policies define access permissions for Amazon S3 buckets.
- `s3:GetObject` allows users to read objects.
- `Principal: "*"` grants public access and should be used with caution.
- Always follow the Principle of Least Privilege when creating policies.

---
