# AWS CloudFront

Amazon **CloudFront** is a **Content Delivery Network (CDN)** service that delivers content to users with low latency by caching data at AWS Edge Locations around the world.

---

# What is AWS CloudFront?

CloudFront distributes content such as web pages, images, videos, APIs, and static files through a global network of **Edge Locations**, improving performance and user experience.

---

# Key Features

### ✅ Content Delivery Network (CDN)

- Delivers content from the nearest Edge Location.
- Reduces latency for users worldwide.

---

### ✅ Content Caching

- Frequently accessed content is cached at Edge Locations.
- Improves read performance.
- Reduces requests to the origin server.

---

### ✅ Global Edge Network

- Hundreds of Edge Locations (Points of Presence) worldwide.
- Provides faster content delivery across the globe.

---

### ✅ Improved User Experience

- Faster page loading.
- Reduced latency.
- Better application performance.

---

### ✅ Security

CloudFront integrates with:

- AWS Shield (DDoS Protection)
- AWS Web Application Firewall (AWS WAF)

to protect applications from attacks.

---

# CloudFront Origins

CloudFront retrieves content from an **Origin**.

## 1. Amazon S3 Bucket

Used for:

- Static website files
- Images
- Videos
- Documents

Features:

- Content cached at Edge Locations
- Upload files through CloudFront
- Secured using **Origin Access Control (OAC)**

---

## 2. VPC Origin

Used for applications hosted inside a VPC.

Examples:

- Private Application Load Balancer (ALB)
- Private Network Load Balancer (NLB)
- EC2 Instances in Private Subnets

---

## 3. Custom Origin (HTTP)

Used for custom web servers.

Examples:

- Amazon S3 Static Website Hosting
- Apache Web Server
- Nginx
- Any HTTP/HTTPS server

> **Note:** For Amazon S3 Static Website Hosting, the bucket must first be configured as a static website.

---

# Architecture

```text
                 Users
                    │
                    ▼
        AWS CloudFront (CDN)
                    │
          Edge Location Cache
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
      S3 Bucket   ALB/NLB   Web Server
```

---

# CloudFront vs S3 Cross-Region Replication (CRR)

| CloudFront | S3 Cross-Region Replication (CRR) |
|------------|-----------------------------------|
| Global Edge Network | Replicates data between selected AWS Regions |
| Content is cached for a configurable TTL | Files are replicated in near real time |
| Improves read performance | Creates copies of objects in another Region |
| Best for static content | Best for dynamic content requiring low latency in multiple Regions |
| No manual regional replication required | Replication must be configured for each destination Region |

---

# Key Points

- Global Content Delivery Network (CDN)
- Improves read performance
- Caches content at Edge Locations
- Hundreds of global Points of Presence
- Integrates with AWS Shield and AWS WAF
- Supports S3, VPC Origins, and Custom Origins
- Uses Origin Access Control (OAC) for secure S3 access

---

# Common Use Cases

- Static website hosting
- Content delivery
- Video streaming
- Image distribution
- API acceleration
- Global web applications
- Software downloads