# 🌐 Deploy a Static Website on Amazon EC2

Deploy a simple static website on an **Amazon EC2** instance using the **Apache Web Server (httpd)**. This project introduces the fundamentals of AWS EC2, Linux, networking, and web hosting.

---

# 🎯 Project Goal

Launch an Amazon EC2 instance, install the Apache Web Server, deploy a static HTML website, and access it from a web browser using the instance's public IP address.

---

# 🛠️ Skills You'll Learn

- Amazon EC2
- Security Groups
- Key Pair
- SSH
- Linux Commands
- Apache Web Server (httpd)
- HTML

---

# 🏗️ Final Architecture

```text
                Internet
                    │
        Public IP (Elastic/Public IP)
                    │
           Security Group
         HTTP (80) | SSH (22)
                    │
          Amazon EC2 Instance
          Amazon Linux 2023
                    │
          Apache Web Server
              (httpd)
                    │
             index.html Website
```

---

# 📋 Prerequisites

- AWS Account
- Basic Linux knowledge
- SSH Client (Terminal / Git Bash / MobaXterm)
- Web Browser

---

# ☁️ AWS Services Used

| Service | Purpose |
|----------|---------|
| Amazon EC2 | Virtual Server |
| Security Group | Controls network traffic |
| Key Pair | Secure SSH authentication |
| Public IP | Access the server from the Internet |

---

# 🚀 Launch EC2 Instance

## Step 1: Login to AWS Console

- Sign in to the AWS Management Console.
- Navigate to **EC2**.
- Click **Launch Instance**.

---

## Step 2: Configure Instance Name

Enter the instance name:

```text
My-Web-Server
```

---

## Step 3: Choose an Amazon Machine Image (AMI)

Select:

```text
Amazon Linux 2023
```

---

## Step 4: Choose Instance Type

Select:

```text
t3.micro
```

> **Free Tier Eligible**

---

## Step 5: Create a Key Pair

Create a new key pair.

Example:

```text
keywin-01.pem
```

Download the `.pem` file and store it safely.

> **Important:** Never lose this file. It is required to connect to your EC2 instance.

---

## Step 6: Configure Network Settings

Click **Edit** under **Network Settings**.

Create or select a Security Group and add the following inbound rules:

| Type | Protocol | Port | Source |
|------|----------|------|--------|
| SSH | TCP | 22 | Anywhere |
| HTTP | TCP | 80 | Anywhere |

Click **Launch Instance**.

Wait until the instance state changes to:

```text
Running
```

---

# 🔑 Connect to EC2

Copy the instance's **Public IPv4 Address**.

Example:

```text
13.xx.xx.xx
```

Open your terminal.

### Change Key Permission

```bash
chmod 400 my-key.pem
```

### Connect Using SSH

```bash
ssh -i my-key.pem ec2-user@YOUR_PUBLIC_IP
```

Example:

```bash
ssh -i my-key.pem ec2-user@13.234.xxx.xxx
```

---

# 🔄 Update the Server

Update all installed packages.

```bash
sudo yum update -y
```

---

# 🌐 Install Apache Web Server

Install Apache.

```bash
sudo yum install httpd -y
```

### Start Apache

```bash
sudo systemctl start httpd
```

### Enable Apache at Boot

```bash
sudo systemctl enable httpd
```

### Check Apache Status

```bash
systemctl status httpd
```

Expected output:

```text
active (running)
```

---

# 📄 Create the Website

Navigate to the Apache web directory.

```bash
cd /var/www/html
```

Verify the current directory.

```bash
pwd
```

Output:

```text
/var/www/html
```

Create the HTML file.

```bash
sudo vi index.html
```

Paste the following HTML code:

```html
<!DOCTYPE html>
<html>
<head>
<title>My AWS Website</title>

<style>
body{
    font-family: Arial;
    background:#f4f4f4;
    text-align:center;
    margin-top:100px;
}

h1{
    color:#ff9900;
}
</style>

</head>

<body>

<h1>Hello AWS!</h1>

<h2>Website Hosted on Amazon EC2</h2>

<p>Created by Rohit Tambadkar</p>

</body>
</html>
```

Save the file:

```text
ESC + shift : + wq
```

Press:

```text
ENTER
```

# 🌍 Test the Website

Open your browser.

Enter:

```text
http://YOUR_PUBLIC_IP
```

Example:

```text
http://13.234.xxx.xxx
```

If everything is configured correctly, you will see:

- **Hello AWS!**
- **Website Hosted on Amazon EC2**
- **Created by Rohit Tambadkar**

---

# ✅ Expected Output

After completing the project:

- EC2 instance is running.
- Apache Web Server is installed.
- Apache service status is **active (running)**.
- Website is deployed in `/var/www/html`.
- The website is accessible using the EC2 Public IP.

---

# 📚 Learning Outcomes

- How to launch an Amazon EC2 instance
- How Security Groups work
- How to connect to Linux using SSH
- How to install and manage Apache
- How to deploy a static website
- Basic Linux administration
- Hosting a website on AWS

---

# 🏆 Conclusion

In this Hands-on, you successfully launched an Amazon EC2 instance, configured networking and security, connected using SSH, installed the Apache Web Server, deployed a static HTML website, and accessed it through a web browser. This project builds a strong foundation in AWS, Linux, and web hosting for beginners pursuing Cloud Computing and DevOps.

---

## 👨‍💻 Author

**Rohit Tambadkar**

Learning **AWS | DevOps | Linux | Docker | Kubernetes | Terraform | Python**
