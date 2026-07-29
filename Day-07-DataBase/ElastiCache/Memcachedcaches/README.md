# Amazon ElastiCache for Memcached Summary

## What is Memcached?

Amazon **ElastiCache for Memcached** is a fully managed, in-memory caching service used to improve application performance by storing frequently accessed data in memory.

---

# Key Features

### ✅ Supports Sharding (Multi-Node)

- Data is divided across multiple cache nodes.
- Helps increase storage capacity and performance.
- Applications distribute data among the nodes.

---

### ❌ No High Availability

- Memcached does not automatically replicate data.
- If a node fails, the cached data on that node is lost.
- Applications must recreate the cache.

---

### ❌ No Backup and Restore

- Memcached does not support snapshots or backups.
- Cached data exists only in memory.
- Data is temporary and can be rebuilt from the database.

---

### ✅ Multi-Threaded Architecture

- Memcached uses multiple CPU cores.
- Handles many client requests at the same time.
- Provides better performance on multi-core servers.

---

# Use Cases

- Cache database query results
- Store website session data
- Cache frequently accessed data
- Reduce database load
- Improve application response time

---

# Best For

- Read-heavy applications
- Simple key-value caching
- Temporary data storage
- High-speed application caching
