# 🗄️ Lab: Create an Amazon RDS MySQL Database

Amazon **Relational Database Service (Amazon RDS)** is a fully managed database service that makes it easy to set up, operate, back up, scale, and maintain relational databases in the AWS Cloud. It eliminates the need to manage database servers, operating systems, and backups manually.

In this lab, you will create an **Amazon RDS MySQL database** inside a **private subnet**, connect to it securely from an **EC2 instance**, and verify the connection by creating a sample table.

---

# 🎯 Objective

- Create an Amazon RDS MySQL database
- Configure networking and security
- Connect to RDS from an EC2 instance
- Create a database and table
- Verify the database connection

---

# 🛠️ Services Used

- Amazon RDS
- Amazon EC2
- Amazon VPC
- Security Groups
- MySQL

---

# 🏗️ Architecture

```text
                 Internet
                     │
                  SSH (22)
                     │
             EC2 (Public Subnet)
                     │
                MySQL (3306)
                     │
         Amazon RDS (Private Subnet)
```

---

# ✅ Prerequisites

Before creating Amazon RDS, ensure the following resources already exist:

- ✅ AWS Account
- ✅ Amazon VPC
- ✅ Two Private Subnets in different Availability Zones
- ✅ EC2 Instance (Recommended for testing)
- ✅ Security Group for RDS

> **Note:** Amazon RDS requires a **DB Subnet Group** containing subnets in **at least two Availability Zones** for High Availability.

---

# 🚀 Step 1: Open Amazon RDS

1. Sign in to the **AWS Management Console**.
2. Search for:

```text
RDS
```

3. Open **Amazon RDS**.
4. Click:

```text
Create database
```

---

# ⚙️ Step 2: Choose Database Creation Method

Select:

```text
Standard Create
```

Why choose **Standard Create**?

- Full control over database configuration
- Database engine selection
- Instance type selection
- Storage configuration
- Networking options
- Security settings
- Backup configuration

Click:

```text
Next
```

---

# 🗃️ Step 3: Choose the Database Engine

Select:

```text
MySQL
```

Example Version:

```text
MySQL 8.0.x
```

---

# 🧪 Step 4: Choose a Template

Available Templates:

- Production
- Dev/Test
- Free Tier

For learning purposes, choose:

```text
Free Tier
```

This automatically selects a smaller instance size to reduce costs.

---

# 📝 Step 5: Configure Database Settings

Configure the database.

| Setting | Example |
|----------|---------|
| DB Instance Identifier | my-rds-db |
| Master Username | admin |
| Master Password | Password@123 |

> **Important:** Store the master password securely. You will need it to connect to the database.

---

# 💻 Step 6: Configure the DB Instance

Choose one of the following instance classes.

```text
db.t3.micro
```

or

```text
db.t4g.micro
```

Choose whichever is available in your Region and Free Tier eligibility.

---

# 💾 Step 7: Configure Storage

| Setting | Value |
|----------|-------|
| Storage Type | General Purpose SSD (gp3) |
| Allocated Storage | 20 GB |
| Storage Autoscaling | Enabled (Optional but Recommended) |

---

# 🌐 Step 8: Configure Connectivity

Choose your networking configuration.

| Setting | Value |
|----------|-------|
| VPC | My-VPC |
| DB Subnet Group | default or my-db-subnet-group |
| Public Access | No |
| Availability Zone | No Preference |

### Why choose **Public Access = No**?

Amazon RDS should remain private.

Applications connect securely through an EC2 instance instead of exposing the database directly to the Internet.

---

# 🔐 Step 9: Configure the Security Group

Choose:

```text
Choose Existing
```

Select:

```text
RDS-SG
```

### RDS Security Group

| Type | Protocol | Port | Source |
|------|----------|------|--------|
| MySQL/Aurora | TCP | 3306 | EC2 Security Group |

> **Best Practice:** Allow access from the **EC2 Security Group** instead of a public IP address. This ensures only your application servers can connect to the database.

---

# 🔑 Step 10: Database Authentication

Choose the default authentication method.

```text
Password Authentication
```

---

# ⚙️ Step 11: Additional Configuration

### Initial Database Name

Example:

```text
companydb
```

If left blank, databases can be created later after connecting.

### Backup

Enable:

```text
Automated Backups
```

Retention Period:

```text
7 Days
```

### Encryption

Enable:

```text
AWS Managed KMS Key
```

Recommended for production environments.

### Monitoring

Keep the default settings for this lab.

### Maintenance Window

Leave the default settings.

AWS performs maintenance and patches during the maintenance window.

---

# ✅ Step 12: Review and Create

Verify all configuration settings.

Click:

```text
Create Database
```

---

# ⏳ Step 13: Wait for Database Creation

The database status changes as follows:

```text
Creating

      ↓

Backing-up

      ↓

Available
```

This process usually takes several minutes.

---

# 🌐 Step 14: Copy the Database Endpoint

Open the RDS instance.

Navigate to:

```text
Connectivity & Security
```

Copy the **Endpoint**.

Example:

```text
my-rds-db.abc123xyz.us-east-1.rds.amazonaws.com
```

> **Note:** Always connect using the **Endpoint**, not an IP address.

---

# 💻 Step 15: Connect from an EC2 Instance

Connect to your EC2 instance.

```bash
ssh -i key.pem ec2-user@<EC2-Public-IP>
```

Install the MySQL client (Amazon Linux 2023).

```bash
sudo dnf install mariadb105 -y
```

Connect to Amazon RDS.

```bash
mysql -h <RDS-ENDPOINT> -u admin -p
```

Example:

```bash
mysql -h my-rds-db.abc123xyz.us-east-1.rds.amazonaws.com -u admin -p
```

Enter the database password when prompted.

---

# 🧪 Step 16: Verify the Connection

Run:

```sql
SHOW DATABASES;
```

Expected Output:

```text
+--------------------+
| Database           |
+--------------------+
| companydb          |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```

---

# 📝 Create a Sample Table

Select the database.

```sql
USE companydb;
```

Create a table.

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50)
);
```

Insert sample records.

```sql
INSERT INTO employees (name, department)
VALUES
('Rohit', 'DevOps'),
('Amit', 'Cloud');
```

Verify the data.

```sql
SELECT * FROM employees;
```

Expected Output:

```text
+----+--------+------------+
| id | name   | department |
+----+--------+------------+
| 1  | Rohit  | DevOps     |
| 2  | Amit   | Cloud      |
+----+--------+------------+
```

---

# 🔐 Security Group Flow

```text
Internet
    │
 SSH (22)
    │
EC2 (Public Subnet)
    │
MySQL (3306)
    │
RDS Security Group
    │
Amazon RDS (Private Subnet)
```

---

# ✅ Expected Result

After completing this lab:

- An Amazon RDS MySQL database is created successfully.
- The database is deployed inside a private subnet.
- An EC2 instance connects securely to the database.
- A sample database and table are created.
- Sample records are inserted and retrieved successfully.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to create an Amazon RDS MySQL database
- How to configure DB Subnet Groups
- How to secure Amazon RDS using Security Groups
- How to connect to RDS from an EC2 instance
- How to execute basic MySQL commands
- Why RDS should remain in private subnets

---

# 🔄 Connection Workflow

```text
Create VPC
      │
      ▼
Create Private Subnets
      │
      ▼
Create DB Subnet Group
      │
      ▼
Create Amazon RDS
      │
      ▼
Configure Security Group
      │
      ▼
Launch EC2 Instance
      │
      ▼
Connect to RDS using Endpoint
      │
      ▼
Create Database & Tables
      │
      ▼
Run SQL Queries
```

---

# ⚠️ Best Practices

- Deploy Amazon RDS in **Private Subnets**.
- Allow database access only from the **EC2 Security Group**.
- Enable **Automated Backups**.
- Enable **Storage Autoscaling** for growing workloads.
- Enable **Encryption using AWS KMS** for production databases.
- Never expose Amazon RDS directly to the Internet.
- Monitor database performance using **Amazon CloudWatch**.
- Rotate database credentials regularly and store them securely using **AWS Secrets Manager**.
```