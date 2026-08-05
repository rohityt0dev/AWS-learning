# Amazon VPC Endpoints

An **Amazon VPC Endpoint** allows resources in your VPC to connect privately to supported AWS services without using the public Internet. It is powered by **AWS PrivateLink**, which keeps traffic within the AWS network.

---

# What is a VPC Endpoint?

By default, most AWS services are accessed using **public endpoints (public URLs)**.

A VPC Endpoint enables private connectivity from your VPC to AWS services without requiring:

- Internet Gateway (IGW)
- NAT Gateway
- VPN Connection
- AWS Direct Connect

---

# Why Use VPC Endpoints?

Instead of sending traffic over the Internet, communication stays within the AWS private network.

### Benefits

- Secure private connectivity
- Traffic does not traverse the public Internet
- Lower network exposure
- Improved security for applications

---

# Architecture

### Without VPC Endpoint

```text
EC2 Instance
      │
      ▼
Internet Gateway / NAT Gateway
      │
      ▼
Public Internet
      │
      ▼
AWS Service
```

---

### With VPC Endpoint

```text
EC2 Instance
      │
      ▼
VPC Endpoint (AWS PrivateLink)
      │
      ▼
AWS Service
```

---

# Key Features

- Private access to AWS services
- Powered by **AWS PrivateLink**
- No Internet Gateway required
- No NAT Gateway required
- Traffic remains on the AWS private network
- Improves security and reduces Internet exposure

---

# Common AWS Services Supported

- Amazon S3
- Amazon DynamoDB
- Amazon EC2
- Amazon SQS
- Amazon SNS
- AWS Systems Manager (SSM)
- Amazon CloudWatch
- AWS Secrets Manager
- Amazon Elastic Container Registry (ECR)

---

# Common Use Cases

- Private access to Amazon S3
- Secure access to AWS Systems Manager
- Access AWS Secrets Manager without Internet access
- Private communication between applications and AWS services
- Improve security for workloads in Private Subnets

---

# Key Points

- AWS services are normally accessed through **public endpoints**.
- VPC Endpoints provide **private connectivity** using the AWS network.
- Powered by **AWS PrivateLink**.
- No Internet Gateway or NAT Gateway is required.
- Ideal for workloads running in **Private Subnets**.