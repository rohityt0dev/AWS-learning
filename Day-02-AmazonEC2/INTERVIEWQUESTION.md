# 🎯 Amazon EC2 Interview Questions and Answers

These are the most commonly asked **Amazon EC2 interview questions** for beginners and aspiring AWS/DevOps Engineers.

---

# 1. What is Amazon EC2?

### Answer

Amazon Elastic Compute Cloud (EC2) is an AWS service that provides virtual servers (called **instances**) in the cloud. It allows users to launch, manage, and scale computing resources on demand without purchasing physical hardware.

**Key Points**

- Virtual servers in the cloud
- Supports Linux and Windows
- Highly scalable
- Pay-as-you-go pricing
- Used for hosting websites, applications, databases, and CI/CD servers

---

# 2. What is an Amazon Machine Image (AMI)?

### Answer

An **Amazon Machine Image (AMI)** is a pre-configured template used to launch an EC2 instance.

An AMI includes:

- Operating System
- Application Software
- Configuration
- Storage Mapping

Every EC2 instance is launched from an AMI.

---

# 3. What are EC2 Instance Types?

### Answer

Instance Types define the hardware configuration of an EC2 instance.

| Family | Purpose |
|---------|---------|
| General Purpose | Balanced workloads |
| Compute Optimized | CPU-intensive applications |
| Memory Optimized | High-memory applications |
| Storage Optimized | High disk throughput |
| Accelerated Computing | GPU, AI, and ML workloads |

---

# 4. Why do we use a Key Pair?

### Answer

A Key Pair is used for secure authentication when connecting to an EC2 instance.

It consists of:

- **Public Key** – Stored by AWS on the EC2 instance.
- **Private Key (.pem)** – Downloaded and securely stored by the user.

For Linux instances, it is used with SSH.

---

# 5. What is a Security Group?

### Answer

A **Security Group** acts as a virtual firewall for an EC2 instance.

It controls:

- Inbound traffic
- Outbound traffic

**Features**

- Instance-level firewall
- Stateful
- Supports Allow rules only

---

# 6. What is the difference between a Security Group and a Network ACL?

| Security Group | Network ACL |
|----------------|-------------|
| Instance-level | Subnet-level |
| Stateful | Stateless |
| Allow rules only | Allow and Deny rules |

---

# 7. What is the difference between an Elastic IP and a Public IP?

| Public IP | Elastic IP |
|------------|------------|
| Assigned automatically | Allocated manually |
| Changes after Stop/Start | Remains the same |
| Best for testing | Best for production |

---

# 8. What is the difference between Amazon EBS and Instance Store?

| Amazon EBS | Instance Store |
|------------|----------------|
| Persistent storage | Temporary storage |
| Data survives reboot and stop/start | Data is lost when the instance stops or terminates |
| Supports snapshots | No snapshots |

---

# 9. What are the EC2 pricing models?

### Answer

AWS provides multiple pricing options:

- **On-Demand** – Pay only for usage.
- **Reserved Instances** – 1 or 3-year commitment with lower cost.
- **Savings Plans** – Flexible pricing based on committed usage.
- **Spot Instances** – Up to 90% discount using spare AWS capacity.
- **Dedicated Hosts** – Physical servers for compliance and licensing.

---

# 10. What are the common use cases of EC2?

### Answer

Amazon EC2 is commonly used for:

- Web Hosting
- Application Servers
- Databases
- CI/CD Pipelines
- Development and Testing
- Machine Learning
- Big Data Processing
- Enterprise Applications

---

# 🌐 Linux EC2 & Apache Interview Questions

## 11. What is Apache (httpd)?

### Answer

Apache HTTP Server (httpd) is an open-source web server used to host websites and web applications.

It serves:

- HTML
- CSS
- JavaScript
- Images

---

## 12. Where is the default Apache web root directory?

### Answer

```text
/var/www/html
```

Website files such as `index.html`, `style.css`, and images are stored here.

---

## 13. Which command starts Apache?

```bash
sudo systemctl start httpd
```

Useful commands:

```bash
sudo systemctl status httpd
sudo systemctl restart httpd
sudo systemctl stop httpd
sudo systemctl enable httpd
```

---

## 14. How do you troubleshoot if your website is not opening?

### Answer

Check the following:

- EC2 instance is running
- Security Group allows Port 80
- Apache service is running
- Website files exist in `/var/www/html`
- Correct Public IP is used
- Review Apache logs

---

# 🖥️ Windows EC2 & IIS Interview Questions

## 15. What is IIS?

### Answer

Internet Information Services (IIS) is Microsoft's web server for hosting websites and web applications on Windows Server.

It supports:

- HTML
- ASP.NET
- .NET Core
- PHP
- HTTPS

---

## 16. What is the default IIS website folder?

### Answer

```text
C:\inetpub\wwwroot
```

---

## 17. How do you retrieve the Windows Administrator password?

### Answer

Navigate to:

```text
EC2
→ Select Instance
→ Actions
→ Security
→ Get Windows Password
```

Upload the `.pem` key to decrypt the password.

---

## 18. How do you enable HTTPS on an IIS website?

### Answer

1. Install an SSL certificate.
2. Open IIS Manager.
3. Select the website.
4. Open **Bindings**.
5. Add an HTTPS binding.
6. Select Port **443**.
7. Choose the SSL certificate.
8. Allow Port **443** in the Security Group.

---

## 19. Where are IIS log files stored?

### Answer

```text
C:\inetpub\logs\LogFiles
```

---

## 20. Which ports are commonly used with EC2?

| Port | Service | Purpose |
|------|----------|---------|
| 22 | SSH | Linux Remote Access |
| 80 | HTTP | Website Access |
| 443 | HTTPS | Secure Website Access |
| 3389 | RDP | Windows Remote Desktop |

---

# ⭐ Quick Revision

| Question | Short Answer |
|----------|--------------|
| What is EC2? | AWS virtual server service. |
| What is an AMI? | Template used to launch EC2 instances. |
| What is a Key Pair? | SSH authentication using public and private keys. |
| What is a Security Group? | Stateful virtual firewall for EC2 instances. |
| EBS vs Instance Store? | Persistent vs temporary storage. |
| Public IP vs Elastic IP? | Dynamic vs static public IP. |
| Apache Web Root | `/var/www/html` |
| IIS Web Root | `C:\inetpub\wwwroot` |
| SSH Port | 22 |
| HTTP Port | 80 |
| HTTPS Port | 443 |
| RDP Port | 3389 |
| Apache Command | `sudo systemctl start httpd` |
| IIS Logs | `C:\inetpub\logs\LogFiles` |
