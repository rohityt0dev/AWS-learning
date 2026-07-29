# Lab: Connect to an Amazon ElastiCache Memcached Cluster

After creating a Memcached cluster, you can connect to it from an EC2 instance using the **Configuration Endpoint** . In this lab, you will use the **telnet** utility to test the connection and perform basic Memcached operations.

---

# 🎯 Objective

- Connect an EC2 instance to a Memcached cluster
- Install the telnet utility
- Connect using the Memcached endpoint
- Store and retrieve data from Memcached
- Verify the connection

---

# 🛠️ Services Used

- Amazon ElastiCache
- Memcached
- Amazon EC2
- Telnet

---

# 🏗️ Architecture

```text
              Amazon EC2
                   │
            Telnet (11211)
                   │
        Configuration Endpoint
                   │
      Amazon ElastiCache Memcached
```

---

# ✅ Prerequisites

Before connecting, ensure you have:

- Amazon EC2 Instance
- Amazon ElastiCache Memcached Cluster
- Configuration Endpoint
- Security Group allowing TCP Port **11211**
- EC2 and ElastiCache in the same VPC

---

# 🚀 Connect to EC2

Connect to your EC2 instance.

```bash
ssh -i key.pem ec2-user@<EC2-Public-IP>
```

---

# 🌐 Find the Memcached Endpoint

Open:

```text
Amazon ElastiCache
        ↓
Memcached
        ↓
Your Cluster
```

Copy the **Configuration Endpoint**.

Example:

```text
memcached-01.395i4v.cfg.aps1.cache.amazonaws.com:11211
```

---

# 📦 Install Telnet

Amazon Linux 2:

```bash
sudo yum install telnet -y
```

Amazon Linux 2023:

```bash
sudo dnf install telnet -y
```

---

# 🔗 Connect to Memcached

Run:

```bash
telnet <MEMCACHED-ENDPOINT> 11211
```

Example:

```bash
telnet memcached-01.395i4v.cfg.aps1.cache.amazonaws.com 11211
```

Expected Output:

```text
Trying xxx.xxx.xxx.xxx...
Connected to memcached-01.395i4v.cfg.aps1.cache.amazonaws.com.
Escape character is '^]'.
>
```

---

# 🧪 Test Memcached Commands

Store a value.

```text
set a 0 0 5
hello
```

Expected Output:

```text
STORED
```

Retrieve the value.

```text
get a
```

Expected Output:

```text
VALUE a 0 5
hello
END
```

Try retrieving a key that does not exist.

```text
get b
```

Expected Output:

```text
END
```

---

# 📝 Memcached Command Explanation

| Command | Description |
|----------|-------------|
| `set` | Store a key-value pair |
| `get` | Retrieve a value |
| `delete` | Delete a key |
| `flush_all` | Remove all cached data |
| `stats` | Display Memcached statistics |

---

# 🔐 Security Group Configuration

| Type | Protocol | Port | Source |
|------|----------|------|---------|
| Custom TCP | TCP | 11211 | EC2 Security Group |

> **Best Practice:** Do not allow **0.0.0.0/0** on port **11211**.

---

# 🔄 Connection Workflow

```text
Launch EC2 Instance
        │
        ▼
Create Memcached Cluster
        │
        ▼
Copy Configuration Endpoint
        │
        ▼
Install Telnet
        │
        ▼
Connect Using Port 11211
        │
        ▼
Store Data
        │
        ▼
Retrieve Data
```

---

# ✅ Expected Result

After completing this lab:

- EC2 successfully connects to the Memcached cluster.
- Data is stored in Memcached.
- Data is retrieved successfully.
- The connection to the cache is verified.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to connect to an ElastiCache Memcached cluster
- How to install the telnet utility
- How to use the Memcached Configuration Endpoint
- Basic Memcached commands (`set`, `get`, `delete`, `stats`)
- How applications communicate with Memcached

---

# ⚠️ Best Practices

- Use the **Configuration Endpoint** when connecting applications.
- Deploy Memcached in **Private Subnets**.
- Allow access only from trusted EC2 Security Groups.
- Never expose port **11211** to the public internet.
- Monitor cluster health using Amazon CloudWatch.
