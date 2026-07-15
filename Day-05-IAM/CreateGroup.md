# 👥 Lab: Create an IAM User Group

This lab demonstrates how to create an **IAM User Group** in AWS and attach permissions (IAM policies) to manage access for multiple users.

---

# 🎯 Objective

- Create an IAM User Group
- Add users to the group (Optional)
- Attach IAM policies
- Manage permissions using groups

---

# 🛠️ Services Used

- AWS Identity and Access Management (IAM)

---

# 🏗️ Architecture

```text
                AWS Account
                     │
                     ▼
               IAM Service
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
     IAM Users             IAM User Groups
         │                       │
         └───────────┬───────────┘
                     ▼
               IAM Policies
                     │
                     ▼
            AWS Resources
```

---

# 🚀 Open IAM

1. Sign in to the **AWS Management Console**.
2. In the search bar, type:

```text
IAM
```

3. Open the **IAM** service.

---

# 👥 Open User Groups

In the left navigation pane, click:

```text
User groups
```

Click:

```text
Create group
```

AWS Console Navigation:

```text
IAM
│
├── Dashboard
├── Users
├── User groups   ← Click here
├── Roles
└── Policies
```

---

# 📝 Enter the Group Name

Enter a meaningful name for the group.

Example:

```text
DevOps
```

Other examples:

```text
Admins
Developers
Finance
```

Click:

```text
Next
```

---

#  Add Users (Optional)

AWS allows you to add existing IAM users to the group.

If you don't have any users yet:

- Leave this section empty.
- Click **Next**.

Example:

```text
☐ rohit
☐ amit
☐ priya
```

You can add users to the group later at any time.

---

# 🔐 Attach Permissions

Attach IAM policies that define what users in this group can access.

### Example: DevOps

Select the following managed policies:

```text
AmazonEC2FullAccess
AmazonS3FullAccess
AmazonECRFullAccess
AmazonEKSClusterPolicy
CloudWatchFullAccess
```

### Example: Administrator Group

Select:

```text
AdministratorAccess
```

Click:

```text
Next
```

---

# 📋 Review and Create

Review the configuration.

Example:

```text
Group Name:
DevOps

Users:
rohit

Policies:
AmazonEC2FullAccess
AmazonS3FullAccess
AmazonECRFullAccess
CloudWatchFullAccess
```

Click:

```text
Create group
```

---

# ✅ Expected Result

After completing this lab:

- An IAM User Group is created.
- The selected IAM policies are attached.
- Existing or future IAM users can be added to the group.
- All users in the group inherit the group's permissions.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create an IAM User Group
- How to organize IAM users into groups
- How to attach IAM policies to a group
- How group-based permissions simplify AWS access management
- The relationship between IAM Users, Groups, and Policies

---

# 💡 Best Practices

- Use IAM Groups to manage permissions instead of assigning policies directly to individual users.
- Grant only the permissions users need by following the **Principle of Least Privilege**.
- Use descriptive group names such as **Developers**, **DevOps-Team**, or **Admins**.
- Regularly review group memberships and attached policies.
- Enable MFA for users with administrative privileges.
