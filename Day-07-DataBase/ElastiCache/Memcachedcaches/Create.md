# Lab: Create an AWS ElastiCache Memcached Cluster

Amazon **ElastiCache for Memcached** is a fully managed, in-memory caching service that improves application performance by storing frequently accessed data in memory. It reduces database load and provides very fast data retrieval.

---

# 🎯 Objective

- Create an Amazon ElastiCache Memcached cluster
- Configure networking and security
- Create a Memcached node
- Connect applications using the Configuration Endpoint

---

# 🛠️ Services Used

- Amazon ElastiCache
- Memcached
- Amazon VPC
- Security Groups
- Amazon EC2

---

# 🏗️ Architecture

```text
                 Internet
                     │
                  SSH (22)
                     │
          EC2 Instance (Public Subnet)
                     │
             Memcached (11211)
                     │
      Amazon ElastiCache (Private Subnet)
```

---

# ✅ Prerequisites

Before creating the Memcached cluster, ensure you have:

- AWS Account
- Amazon VPC
- Private Subnets
- EC2 Instance
- Security Group
- Cache Subnet Group

---

# 🚀 Open Amazon ElastiCache

1. Sign in to the AWS Management Console.
2. Search for:

```text
ElastiCache
```

3. Open **Amazon ElastiCache**.

---

# 🖥️ Choose Memcached

From the left navigation pane select:

```text
Memcached
```

Click:

```text
Create Memcached Cluster
```

---

# ⚙️ Basic Settings

Configure the following settings.

| Setting | Value |
|----------|-------|
| Cluster Name | memcached-01 |
| Deployment option | Node-based cluster |
| Creation method | Cluster cache |
| Location | AWS Cloud |
| Engine Version | Latest (1.6.x) |
| Port | 11211 |
| Node Type | cache.t3.small |
| Number of Nodes | 1 |

---

# 🌐 Network Settings

Choose the VPC where your EC2 instance is running.

Example:

```text
VPC

vpc-095f8ec4ddcc47d3d
```

---

# 🗂️ Select a Subnet Group

Choose an existing Cache Subnet Group.

Example:

```text
redisosscluster
```

If you do not have one:

- Create Cache Subnet Group
- Select your VPC
- Select two Private Subnets
- Save

---

# 🔐 Configure Security Group

Choose the Security Group used by your EC2 instance or create a new one.

Example:

```text
memcached-sg
```

---

# 🛡️ Configure Security Group Rule

Edit the Security Group.

Add the following inbound rule.

| Type | Protocol | Port | Source |
|------|----------|------|---------|
| Custom TCP | TCP | 11211 | EC2 Security Group |

or

| Type | Port | Source |
|------|------|---------|
| TCP | 11211 | sg-xxxxxxxx |

> **Note:** Do **not** allow `0.0.0.0/0` for Memcached.

---

# 🔒 Encryption

For this practice lab:

| Setting | Value |
|----------|-------|
| Encryption in Transit | Disabled |

---

# ⚙️ Maintenance

Keep the default maintenance settings.

---

# ✅ Review and Create

Verify the following settings.

| Setting | Value |
|----------|-------|
| Cluster Name | memcached-01 |
| Engine | Memcached |
| Node Type | cache.t3.small |
| Nodes | 1 |

Click:

```text
Create
```

Wait approximately **5–10 minutes**.

The cluster status changes to:

```text
Available
```

---

# 🌐 After Cluster Creation

Open the Memcached cluster.

Copy the **Configuration Endpoint**.

Example:

```text
memcached-01.xxxxx.cfg.aps1.cache.amazonaws.com:11211
```

Example from your cluster:

```text
memcached-01.395i4v.cfg.aps1.cache.amazonaws.com:11211
```

Use this endpoint in your application to connect to Memcached.

---

# 🔐 Security Group Flow

```text
Internet
    │
 SSH (22)
    │
EC2 Instance
    │
Memcached (11211)
    │
Security Group
    │
Amazon ElastiCache
```

---

# ✅ Expected Result

After completing this lab:

- A Memcached cluster is created.
- The cluster status becomes **Available**.
- A Configuration Endpoint is generated.
- EC2 instances can connect to Memcached using port **11211**.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- What Amazon ElastiCache for Memcached is
- How to create a Memcached cluster
- How to configure networking
- How to configure Security Groups
- How applications connect using the Configuration Endpoint

---

# ⚠️ Best Practices

- Deploy ElastiCache in **Private Subnets**.
- Allow access only from the EC2 Security Group.
- Do not expose port **11211** to the internet.
- Use the **Configuration Endpoint** instead of individual node endpoints.
- Monitor cluster performance using Amazon CloudWatch.
