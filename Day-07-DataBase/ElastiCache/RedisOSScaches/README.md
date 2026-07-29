# Amazon ElastiCache for Redis Summary

## What is Redis?

Amazon **ElastiCache for Redis** is a fully managed, in-memory data store and cache that provides high performance, high availability, and advanced data structures.

---

# Key Features

### ✅ Supports Multi-AZ with Automatic Failover

- Redis supports Multi-AZ deployments.
- If the primary node fails, AWS automatically switches to a replica.
- Improves application availability.

---

### ✅ Supports Read Replicas

- Create one or more read replicas.
- Read traffic can be distributed across replicas.
- Improves read performance and high availability.

---

### ✅ Supports Backup and Restore

- Create automatic backups (snapshots).
- Restore data from backups when needed.
- Helps with disaster recovery.

---

### ✅ Supports Sets and Sorted Sets

Redis provides advanced data structures such as:

- Strings
- Lists
- Hashes
- Sets
- Sorted Sets (ZSET)
- Streams
- Bitmaps

These data structures make Redis suitable for many different application types.

---

# Use Cases

- Cache database query results
- Store user session data
- Real-time analytics
- Leaderboards and rankings
- Chat applications
- Gaming applications
- Message queues
- Shopping carts

---

# Best For

- High availability applications
- Real-time applications
- Session management
- Distributed caching
- Applications requiring backup and recovery
- Applications using advanced data structures