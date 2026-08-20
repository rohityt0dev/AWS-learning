# Lab: Configure CloudFront Geo Restriction

In this lab, you will configure **Geo Restriction** for an Amazon CloudFront distribution to control which countries can access your website.

---

# 🎯 Objective

- Open an existing CloudFront Distribution
- Configure Geo Restriction
- Allow or Block specific countries
- Verify the CloudFront deployment

---

# 🛠️ Services Used

- Amazon CloudFront
- Amazon S3

---

# 🏗️ Lab Architecture

```text
                 Users
                   │
        ┌──────────┴──────────┐
        │                     │
     India User          USA User
        │                     │
        └──────────┬──────────┘
                   │
        CloudFront Distribution
        Geo Restriction Enabled
                   │
              Amazon S3 Bucket
         (Static Website Files)
```

---

# ✅ Prerequisites

Before starting this lab, ensure you have:

- AWS Account
- Amazon S3 Bucket
- Static Website Hosted on S3
- CloudFront Distribution Created

---

# 🚀 Open CloudFront

1. Sign in to the **AWS Management Console**.
2. Search for **CloudFront**.
3. Open the **CloudFront** service.

---

# 🚀  Open the Distribution

Navigate to:

```text
CloudFront
      │
      ▼
Distributions
```

Example:

| ID | Status |
|----|--------|
| E2ABCD1234 | Enabled |

Click your **Distribution ID**.

---

# 🚀 Open the Security Settings

Inside the distribution:

```text
Security
      │
      ▼
Geo Restriction
      │
      ▼
Edit
```

---

# 🚀 Configure Geo Restriction

Choose one of the following options:

```text
Geo Restriction

○ None
○ Allow List
○ Block List
```

### Option 1: Allow List (Recommended)

Select:

```text
Allow List
```

Search and select:

```text
India
```

Result:

```text
Allowed Countries

✔ India
```

Click:

```text
Save Changes
```

---

### Option 2: Block List

Select:

```text
Block List
```

Search and select countries to block.

Example:

```text
China
Russia
Pakistan
```

Click:

```text
Save Changes
```

---

# 🚀 Wait for Deployment

After saving the configuration, CloudFront updates the distribution.

Initial status:

```text
Deploying
```

After a few minutes:

```text
Deployed
```

Wait until the deployment completes before testing access.

---

# ✅ Expected Result

- Geo Restriction is successfully configured.
- Only allowed countries can access the distribution (Allow List).
- Blocked countries receive an **Access Denied** response (Block List).
- CloudFront distribution status changes to **Deployed**.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to configure CloudFront Geo Restriction
- Difference between Allow List and Block List
- How to restrict content by country
- How CloudFront controls geographic access to content

---

# ⚠️ Notes

- Geo Restriction applies to the entire CloudFront distribution.
- Changes may take several minutes to deploy globally.
- CloudFront determines the user's country based on their public IP address.
- Geo Restriction is commonly used to enforce licensing agreements and copyright restrictions.
