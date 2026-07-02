# 🌐 Project 02: Host a Static Website on Windows Server EC2 using IIS

Deploy a static website on a **Windows Server EC2 instance** using **Internet Information Services (IIS)**. This project introduces Windows Server administration on AWS, Remote Desktop (RDP), IIS configuration, and website hosting.

---

# 🎯 Project Goal

Launch a Windows Server EC2 instance, install Internet Information Services (IIS), deploy a static HTML website, and access it over the internet using the instance's public IP address.

---

# 🛠️ Skills You'll Learn

- Amazon EC2
- Windows Server 2022
- Internet Information Services (IIS)
- Security Groups
- Key Pair
- Remote Desktop Protocol (RDP)
- Website Hosting
- HTML, CSS, JavaScript

---

# 🏗️ Architecture

```text
                Internet
                    │
          Public IP / Elastic IP
                    │
            Security Group
     HTTP (80) | HTTPS (443) | RDP (3389)
                    │
      Windows Server EC2 Instance
                    │
   Internet Information Services (IIS)
                    │
          Your Website Files
```

---

# 📋 Prerequisites

Before starting this project, ensure you have:

- AWS Account
- Windows PC (or Remote Desktop Client)
- Basic knowledge of Windows Server
- Static website files (`index.html`, `style.css`, etc.)

---

# ☁️ AWS Services Used

| Service | Purpose |
|----------|---------|
| Amazon EC2 | Virtual Windows Server |
| Security Group | Controls inbound and outbound traffic |
| Key Pair | Used to decrypt the Windows Administrator password |
| Public IP | Access the server over the internet |

---

# 🚀 Launch a Windows EC2 Instance

Login to the **AWS Management Console**.

Navigate to:

```text
EC2 → Launch Instance
```

---

## Configure Instance

### Name

```text
windows-web-server
```

---

### Amazon Machine Image (AMI)

Select:

```text
Microsoft Windows Server 2022 Base
```

---

### Instance Type

```text
t3.micro
```

> **Free Tier Eligible (where applicable)**

---

### Key Pair

Create a new key pair or select an existing one.

Example:

```text
keywin-01
```

> **Important:** Download and keep the `.pem` file safe. It is required to decrypt the Windows Administrator password.

---

### Network Settings

- Default VPC
- Public Subnet
- Auto Assign Public IP → **Enabled**

Launch the instance.

Wait until the instance status changes to:

```text
Running
```

---

# 🔐 Configure the Security Group

Add the following inbound rules:

| Type | Protocol | Port | Source |
|------|----------|------|--------|
| RDP | TCP | 3389 | Your IP |
| HTTP | TCP | 80 | Anywhere (0.0.0.0/0) |
| HTTPS | TCP | 443 | Anywhere (0.0.0.0/0) |
| ICMP *(Optional)* | All | All | Anywhere |

---

# 🔑 Get the Windows Administrator Password

After the instance is running:

```text
EC2
→ Select Instance
→ Actions
→ Security
→ Get Windows Password
```

Upload your downloaded `.pem` key.

AWS decrypts the Administrator password.

Example:

```text
Username:
Administrator

Password:
***************
```

---

# 🖥️ Connect Using Remote Desktop

Open:

```text
Remote Desktop Connection (mstsc)
```

Enter:

```text
Public IPv4 Address
```

Login using:

```text
Username:
Administrator

Password:
AWS Generated Password
```

You are now connected to the Windows Server.

---

# 🌐 Install IIS (Internet Information Services)

Open:

```text
Server Manager
```

Click:

```text
Add Roles and Features
```

Choose:

```text
Role-based or Feature-based Installation
```

Select your server.

Under **Server Roles**, enable:

```text
✔ Web Server (IIS)
```

Click:

```text
Install
```

Wait for the installation to complete.

---

# ✅ Test IIS

Open a browser **inside the Windows Server**.

Visit:

```text
http://localhost
```

You should see the:

```text
IIS Welcome Page
```

Now test from your local computer.

Open:

```text
http://YOUR_PUBLIC_IP
```

Example:

```text
http://13.233.xxx.xxx
```

You should see the same IIS Welcome Page.

---

# 📁 Default Website Folder

The default IIS website directory is:

```text
C:\inetpub\wwwroot
```

This is where IIS serves website files.

---

# 📄 Replace the Default Website

Delete the default IIS homepage:

```text
iisstart.htm
```

Copy your website files into:

```text
C:\inetpub\wwwroot
```

Example:

```text
C:\inetpub\wwwroot\
│
├── index.html
├── style.css
├── script.js
└── images\
```

---

# 🌍 Test Your Website

Open your browser.

Visit:

```text
http://YOUR_PUBLIC_IP
```

Example:

```text
http://13.233.xxx.xxx
```

Your static website should now load successfully.

---
## 👨‍💻 Author

**Rohit Tambadkar**

Learning **AWS | DevOps | Windows Server | Linux | Docker | Kubernetes | Terraform**
