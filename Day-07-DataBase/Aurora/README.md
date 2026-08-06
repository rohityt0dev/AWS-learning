# Amazon Aurora

Amazon **Aurora** is a fully managed relational database service developed by AWS. It is a proprietary database technology that is compatible with MySQL and PostgreSQL.

Aurora is designed to provide high performance, high availability, automatic scaling, and minimal database administration.

---

# What is Amazon Aurora?

Amazon Aurora is an AWS-managed relational database engine that combines the performance of commercial databases with the simplicity and cost-effectiveness of open-source databases.

> **Note:** Aurora is an AWS proprietary technology and is **not open source**.

---

# Key Features

### ✅ Automatic Storage Scaling

- Aurora storage automatically grows as your data increases.
- Storage grows in **10 GB increments**.
- Supports storage up to **256 GB**.

---

### ✅ Automatic Failover

- Aurora automatically detects database failures.
- Performs **instantaneous failover** to a healthy instance.
- Provides built-in High Availability (HA).

---

### ✅ Backup and Recovery

- Automatically creates backups.
- Enables fast database recovery when needed.

---

### ✅ Isolation and Security

- Supports secure database access.
- Integrates with AWS security features.

---

### ✅ Push-Button Scaling

- Easily scale database resources with minimal effort.
- Supports changing database capacity as application demand grows.

---

### ✅ Automated Patching

- Automatically applies database patches.
- Designed to minimize or eliminate application downtime during maintenance.

---

### ✅ Advanced Monitoring

- Provides monitoring and performance metrics.
- Helps identify database performance issues.

---

### ✅ Routine Maintenance

- AWS manages routine database maintenance tasks.
- Reduces administrative overhead.

---

### ✅ Backtrack

- Restore the database to a previous point in time.
- Does **not** require restoring from backups.
- Useful for recovering from accidental changes or user errors.

---

# Architecture

```text
             Applications
                   │
                   ▼
           Amazon Aurora
                   │
      ┌────────────┴────────────┐
      │                         │
 Primary Instance      Aurora Storage
                              │
               Automatic Storage Scaling
                    (10 GB Increments)
```

---

# Key Points

- AWS proprietary database technology
- Compatible with MySQL and PostgreSQL
- Automatic storage scaling
- Storage grows in 10 GB increments
- Supports up to 256 GB storage
- Automatic failover
- Backup and recovery
- Push-button scaling
- Automated patching
- Advanced monitoring
- Routine maintenance
- Backtrack without using backups

---

# Common Use Cases

- High-availability applications
- Enterprise databases
- Web applications
- E-commerce platforms
- Business-critical workloads
- Applications requiring automatic scaling and minimal maintenance