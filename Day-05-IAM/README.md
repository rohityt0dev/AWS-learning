# 🔐 AWS IAM (Identity and Access Management)

AWS Identity and Access Management (IAM) is a global AWS service used to securely manage access to AWS resources. It allows you to define **who can access what** and **what actions they are allowed to perform**.

---

# 📌 What is IAM?

IAM helps you securely control access to AWS services and resources by managing:

- Users
- Groups
- Roles
- Policies
- Permissions

IAM follows the **Principle of Least Privilege**, meaning users should receive only the permissions required to perform their tasks.

---

# ⭐ Key Features

- Free AWS Service
- Global Service (Not Region Specific)
- Secure Access Management
- Fine-Grained Permissions
- Supports Multi-Factor Authentication (MFA)
- Integration with External Identity Providers
- Temporary Credential Support using IAM Roles

---

# 👤 IAM Users

IAM Users represent individual people or applications that require access to AWS.

Each user can have:

- Username
- Password (Console Access)
- Access Keys (CLI/SDK Access)
- Permissions

---

# 👥 IAM Groups

Groups are collections of IAM users.

Instead of assigning permissions to each user individually, permissions are attached to the group.

### Benefits

- Easier permission management
- Consistent access control
- Simplifies administration

Example:

- Developers
- DevOps
- Finance
- Admins

---

# 🎭 IAM Roles

IAM Roles provide **temporary credentials** instead of permanent access keys.

Roles are commonly used by:

- EC2
- Lambda
- ECS
- EKS
- Cross-Account Access
- Federated Users

Benefits:

- No long-term credentials
- More secure
- Automatically rotated temporary credentials

---

# 📜 IAM Policies

Policies are JSON documents that define permissions.

A policy specifies:

- Effect (Allow / Deny)
- Action
- Resource
- Condition (Optional)

Policies can be attached to:

- Users
- Groups
- Roles

---

# 🔑 Permissions

Permissions determine what actions an identity can perform on AWS resources.

Examples:

- Read S3 Bucket
- Launch EC2 Instances
- Create IAM Users
- Delete Resources

---

# 🔐 Multi-Factor Authentication (MFA)

MFA adds an extra layer of security.

Instead of only entering a password, users must also provide another verification method such as:

- Authenticator App
- Hardware Security Key

Benefits:

- Protects against stolen passwords
- Improves account security
- Recommended for all users
- Mandatory for the Root Account

---

# 🔍 Policy Evaluation Logic

AWS evaluates permissions using the following order:

1. Implicit Deny (Default)
2. Explicit Allow
3. Explicit Deny (Always Overrides)

Explicit Deny always takes precedence over Allow.

---

# 🛡️ IAM Best Practices

- Never use the Root Account for daily tasks.
- Enable MFA for all users.
- Follow the Principle of Least Privilege.
- Use IAM Roles instead of long-term access keys.
- Rotate Access Keys regularly.
- Remove unused users and permissions.
- Audit permissions frequently.

---

# 🌍 Ways to Access AWS

AWS resources can be accessed using:

### AWS Management Console

- Browser-based graphical interface.

### AWS CLI

- Command-line interface for managing AWS services.

### AWS SDKs & APIs

- Programmatic access using languages like Python, Java, Node.js, Go, and others.

---

# 📚 IAM Components Summary

| Component | Purpose |
|-----------|---------|
| User | Individual identity |
| Group | Collection of users |
| Role | Temporary permissions |
| Policy | Defines permissions |
| Permission | Determines allowed actions |
| MFA | Additional authentication |
| Federation | External identity integration |

---

# ✅ Conclusion

AWS IAM is the foundation of AWS security. It enables secure authentication, authorization, and access management through Users, Groups, Roles, Policies, and MFA while following security best practices like Least Privilege and temporary credentials.
