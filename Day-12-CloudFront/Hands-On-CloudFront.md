# Lab: Host a Static Website Using Amazon CloudFront and Amazon S3

In this lab, you will create an Amazon S3 bucket, upload your static website files, create a CloudFront distribution, and securely deliver your website through CloudFront while keeping the S3 bucket private.

---

# 🎯 Objective

- Create an Amazon S3 Bucket
- Upload static website files
- Create a CloudFront Distribution
- Configure the Default Root Object
- Secure the S3 bucket using Origin Access 
- Access the website through CloudFront

---

# 🛠️ Services Used

- Amazon S3
- Amazon CloudFront

---

# 🏗️ Architecture

```text
                Internet
                    │
                    ▼
           Amazon CloudFront
                    │
     Origin Access Control (OAC)
                    │
                    ▼
        Amazon S3 Bucket (Private)
                    │
      index.html
      style.css
      script.js
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- AWS Account
- Static website files
  - index.html
  - style.css
  - script.js

---

# 🚀 Create an S3 Bucket

1. Sign in to the **AWS Management Console**.
2. Search for **Amazon S3**.
3. Click **Create bucket**.

Configure the bucket:

| Setting | Value |
|----------|-------|
| Bucket Name | web-host-page-resume-01 |
| AWS Region | ap-south-1 (Mumbai) |
| Block Public Access | Enabled |
| Bucket Versioning | Disabled |
| Encryption | SSE-S3 (Default) |

Click:

```text
Create Bucket
```

---

# 🚀 Upload Website Files

Open the bucket.

Click:

```text
Upload
```

Upload:

```text
index.html
style.css
script.js
```

After uploading, your bucket should contain:

```text
Objects

index.html
style.css
script.js
```

---

# 🚀 Create a CloudFront Distribution

Navigate to:

```text
AWS Console
      │
      ▼
CloudFront
      │
      ▼
Create Distribution
```

---

## Origin Settings

For **Origin Domain**, select your S3 bucket:

```text
web-host-page-resume-01
```

CloudFront automatically detects the Amazon S3 bucket as the origin.

---

# 🚀 Configure Bucket Access

Under **Bucket Access**, choose:

```text
Yes, update bucket policy automatically
```

If prompted, allow CloudFront to update the bucket policy or copy the generated policy.

This enables **Origin Access Control (OAC)** so CloudFront can securely access the private bucket.

---

# 🚀 Configure the Default Root Object

Set:

```text
index.html
```

This allows users to access the website without specifying the file name.

Example:

Instead of:

```text
https://d2itfuw3kdndxi.cloudfront.net/index.html
```

Users can simply visit:

```text
https://d2itfuw3kdndxi.cloudfront.net
```

---

# 🚀 Create the Distribution

Click:

```text
Create Distribution
```

CloudFront begins deployment.

Wait approximately:

```text
5–15 Minutes
```

The distribution status changes to:

```text
Enabled
```

---

# 🚀 Test the Website

Copy the CloudFront domain name.

Example:

```text
https://d2itfuw3kdndxi.cloudfront.net
```

Open it in your browser.

If the **Default Root Object** was not configured, use:

```text
https://d2itfuw3kdndxi.cloudfront.net/index.html
```

Your static website should load successfully.

---

# 🚀 Verify the S3 Bucket is Private

Navigate to:

```text
Amazon S3
      │
      ▼
web-host-page-resume-01
      │
      ▼
index.html
```

Copy the **Object URL** and open it in your browser.

Expected result:

```text
Access Denied
```

This confirms that the S3 bucket is private and content is accessible only through CloudFront.

---

# ✅ Expected Result

- S3 bucket created successfully
- Website files uploaded
- CloudFront distribution deployed
- Website accessible through the CloudFront URL
- Direct access to S3 objects is blocked with **Access Denied**

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create an Amazon S3 bucket
- How to upload static website files
- How to create a CloudFront distribution
- How to configure a Default Root Object
- How Origin Access Control (OAC) secures S3 buckets
- How CloudFront delivers static content globally

---

# ⚠️ Notes

- Keep **Block Public Access** enabled on the S3 bucket.
- Use **Origin Access Control (OAC)** to allow CloudFront to access the bucket securely.
- CloudFront distributions typically take **5–15 minutes** to deploy.
- Users should access the website using the **CloudFront URL**, not the S3 Object URL.
