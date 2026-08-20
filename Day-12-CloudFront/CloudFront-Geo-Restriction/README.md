# AWS CloudFront Geo Restriction

Amazon **CloudFront Geo Restriction** allows you to control which countries can access your CloudFront distribution. This helps protect content based on geographic location.

---

# What is Geo Restriction?

Geo Restriction is a CloudFront feature that allows or blocks users from specific countries.

CloudFront checks the user's location and either allows or denies access to the requested content.

---

# Types of Geo Restriction

## 1. Allow List

Only users from the selected countries can access the CloudFront distribution.

Example:

```text
Allowed Countries

✔ India
✔ United States
✔ Canada
```

Users from all other countries will receive an **Access Denied** response.

---

## 2. Block List

Users from selected countries are blocked, while users from all other countries can access the content.

Example:

```text
Blocked Countries

❌ China
❌ Russia
```

---

# Architecture

```text
                 Users
                    │
        ┌───────────┴───────────┐
        │                       │
 Allowed Country         Blocked Country
        │                       │
        ▼                       ▼
   CloudFront             Access Denied
        │
        ▼
   Origin (S3 / ALB / EC2)
```

---

# Use Cases

- Copyright protection
- Country-specific content delivery
- Regional licensing restrictions
- Restrict access to premium content
- Compliance with legal or regulatory requirements

---

# Key Points

- Restricts access based on the user's country.
- Supports **Allow List** and **Block List**.
- Works only with **CloudFront Distributions**.
- Uses the user's IP address to determine their geographic location.
- Commonly used to comply with copyright and licensing laws.