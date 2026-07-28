# AWS Database & Storage Services Summary

## Amazon RDS (Relational Database Service)

### What is it?
A fully managed relational database service.

### Supports
- PostgreSQL
- MySQL
- Oracle
- SQL Server
- MariaDB
- IBM Db2
- RDS Custom (Oracle & SQL Server)

### Features
- Managed database service
- Auto storage scaling
- Manual DB snapshots
- IAM authentication
- Security Groups
- KMS encryption
- SSL/TLS encryption
- Automated backups

### Use Cases
- Store relational data
- SQL queries
- Banking applications
- ERP & CRM systems
- E-commerce applications
- Online Transaction Processing (OLTP)

---

# Amazon Aurora

### What is it?
A high-performance relational database compatible with MySQL and PostgreSQL.

### Features
- MySQL & PostgreSQL compatible
- Separate compute and storage
- Managed backups
- Automatic scaling
- High availability
- Aurora Serverless
- Aurora Global Database
- Aurora Machine Learning
- Aurora Database Cloning

### Use Cases
- High-performance applications
- Large web applications
- Enterprise applications
- Applications needing fast database performance

---

# Amazon ElastiCache

### What is it?
A fully managed in-memory cache service.

### Supports
- Redis
- Memcached

### Features
- Very fast (sub-millisecond latency)
- In-memory storage
- IAM security
- Security Groups
- KMS encryption
- Redis AUTH
- Managed service

### Use Cases
- Cache database queries
- Store user sessions
- Frequently accessed data
- Key-value storage
- Reduce database load

> **Note:** ElastiCache does **not** support SQL queries.

---

# Amazon DynamoDB

### What is it?
A fully managed serverless NoSQL database.

### Features
- Serverless
- Millisecond latency
- Multi-AZ by default
- Auto Scaling
- On-Demand Capacity
- Provisioned Capacity
- Transactions supported
- Highly available

### Use Cases
- Serverless applications
- Mobile applications
- Gaming applications
- IoT applications
- Small documents
- Key-value data

---

# Amazon S3 (Simple Storage Service)

### What is it?
An object storage service for storing files.

### Features
- Serverless
- Unlimited storage
- Maximum object size: **5 TB**
- Versioning
- Encryption
- Replication
- Lifecycle Policies
- MFA Delete
- Access Logs
- Event Notifications
- Access Points
- Object Lock

### Storage Classes
- S3 Standard
- S3 Standard-IA
- S3 Intelligent-Tiering
- S3 Glacier

### Security
- IAM
- Bucket Policies
- ACL
- KMS Encryption

### Automation
- SNS
- SQS
- AWS Lambda

### Use Cases
- Store images
- Store videos
- Backup files
- Static website hosting
- Application files
- Large object storage