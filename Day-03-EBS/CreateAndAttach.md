# 💾 Lab: Create and Attach a New Amazon EBS Volume

In this lab, you will create a new **Amazon Elastic Block Store (EBS)** volume and attach it to an existing **Amazon EC2** instance.

---

# 🎯 Objective

- Create a new Amazon EBS volume
- Attach the volume to an EC2 instance
- Understand the relationship between EBS volumes and Availability Zones

---

# 🛠️ Services Used

- Amazon EC2
- Amazon EBS

---

# 🏗️ Architecture

```text
                Amazon EC2 Instance
                       │
                       │
                 Attach Volume
                       │
                       ▼
             Amazon EBS Volume (gp3)
                Size: 10 GiB
```

---

# 🚀 Step 1: Open the EC2 Dashboard

1. Sign in to the **AWS Management Console**.
2. Navigate to **Amazon EC2**.
3. In the left navigation pane, under **Elastic Block Store**, click **Volumes**.

---

# 📀 Step 2: Create a New EBS Volume

Click:

```text
Create volume
```

Configure the volume using the following settings:

| Setting | Example Value |
|----------|---------------|
| Volume Type | gp3 (Recommended) |
| Size | 10 GiB |
| Availability Zone | Same AZ as your EC2 instance (Example: ap-south-1a) |
| Encryption | Optional (Enable if required) |
| Tags | Name = MyEBSVolume |

Click:

```text
Create volume
```

> **Important:**  
> The EBS volume **must be created in the same Availability Zone** as the EC2 instance. Otherwise, it cannot be attached.

---

# 🔗 Step 3: Attach the Volume

1. Select the newly created EBS volume.
2. Click:

```text
Actions → Attach volume
```

3. Select your EC2 instance.
4. Enter the device name:

```text
/dev/xvdf
```

5. Click:

```text
Attach volume
```

The EBS volume is now attached to your EC2 instance.

---

# ✅ Expected Result

After completing this lab:

- ✅ A new **gp3 EBS volume** is created.
- ✅ The volume is attached to your EC2 instance.
- ✅ The volume is ready to be formatted, mounted, and used for storing data.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create an Amazon EBS volume
- How to configure EBS volume settings
- Why the Availability Zone must match the EC2 instance
- How to attach an EBS volume to an EC2 instance
- The purpose of Linux device names such as `/dev/xvdf`

---
