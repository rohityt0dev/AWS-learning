# 🌐 Host a Static Website on Amazon S3

Host a static website using **Amazon Simple Storage Service (Amazon S3)**. This Hands-on demonstrates how to create an S3 bucket, upload website files, enable static website hosting, configure a bucket policy, and make the website publicly accessible.

---

# 🎯 Goal

Create an Amazon S3 bucket, upload a static website, enable static website hosting, configure public access, and access the website through the S3 Static Website Endpoint.

---

# 🛠️ Skills You'll Learn

- Amazon S3
- S3 Buckets
- Object Storage
- Bucket Policy
- Static Website Hosting
- Public Access Configuration
- HTML

---

# 🏗️ Architecture

```text
                Internet
                    │
       S3 Static Website Endpoint
                    │
            Amazon S3 Bucket
                    │
 index.html | candy.webp | error.html | images
```

---

# 📋 Prerequisites

Before starting this project, ensure you have:

- AWS Account
- Basic knowledge of HTML and CSS
- Static website files ( index.html | candy.webp | error.html | images.)

---

# ☁️ AWS Services Used

| Service | Purpose |
|----------|---------|
| Amazon S3 | Store website files |
| Bucket Policy | Allow public access |
| Static Website Hosting | Host website over HTTP |

---

# 🚀 Open Amazon S3

1. Sign in to the **AWS Management Console**.
2. Search for **Amazon S3**.
3. Open the **S3 Dashboard**.

---

# 🪣 Create an S3 Bucket

Click:

```text
Create bucket
```

Configure the bucket using the following settings:

| Setting | Value |
|----------|-------|
| Bucket Name |  *(Must be globally unique)* |
| AWS Region | Choose your preferred Region |
| Object Ownership | ACLs Disabled (Default) |
| Block Public Access | Uncheck **Block all public access** |
| Acknowledge Warning | ✔ Check the confirmation box |

Click:

```text
Create bucket
```

---

# 📂 Open the Bucket

Click your newly created bucket.

---

# 📤 Upload Website Files

Click:

```text
Upload
```

Select your website files:

```text
index.html
canddy.webp
candy.webp
error.html
```

Click:

```text
Upload
```

Wait until the upload completes successfully.

---

# 🌍 Enable Static Website Hosting

Inside the bucket:

Go to:

```text
Properties
```

Scroll to:

```text
Static website hosting
```

Click:

```text
Edit
```

Select:

```text
Enable
```

Configure:

| Setting | Value |
|----------|-------|
| Hosting Type | Host a static website |
| Index Document | `index.html` |
| Error Document | `error.html` *(Optional)* |

Click:

```text
Save changes
```
# ✅ Verify Public Access

Go to:

```text
Permissions
```

Verify:

- Bucket Policy is saved successfully.
- Block Public Access settings allow public website access.

---

# 🔓 Add a Bucket Policy

Go to:

```text
Permissions
```

Click:

```text
Bucket Policy
```

Paste the following policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

Replace:

```text
YOUR_BUCKET_NAME
```

Example:

```text
my-static-website-12345
```

Click:

```text
Save changes
```

---

# 🌐 Open the Static Website Endpoint

Go to:

```text
Properties
```

Scroll to:

```text
Static Website Hosting
```

Copy the **Bucket Website Endpoint**.

Example:

```text
http://my-static-website-12345.s3-website-ap-south-1.amazonaws.com
```

Open the endpoint in your browser.

Your website should now load successfully.

---


---

# 💻 Files Uploaded

```text
index.html
style.css
script.js
error.html
images/
```

---

# ✅ Verification Checklist

- ✅ S3 bucket created successfully.
- ✅ Website files uploaded.
- ✅ Static Website Hosting enabled.
- ✅ Bucket Policy configured.
- ✅ Public access allowed.
- ✅ Website accessible using the S3 Website Endpoint.

---
