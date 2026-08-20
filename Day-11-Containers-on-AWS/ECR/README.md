# 📦 Amazon ECR — Elastic Container Registry

## 📌 Introduction

**Amazon Elastic Container Registry (Amazon ECR)** is a fully managed container registry service provided by **AWS**.

Amazon ECR is used to **store, manage, and deploy Docker/container images** securely on AWS.

The basic workflow is:

```text
Developer
    │
    ▼
Dockerfile
    │
    ▼
Docker Build
    │
    ▼
Docker Image
    │
    ▼
Amazon ECR
    │
    ▼
ECS / EKS / Fargate
    │
    ▼
Running Container
```

---

# 🐳 What is Amazon ECR?

**ECR = Elastic Container Registry**

Amazon ECR provides repositories where you can store container images.

Instead of keeping Docker images only on your local machine, you can push them to ECR and allow AWS container services such as ECS and EKS to pull them when deploying applications.

### Simple Example

```text
Local Machine
      │
      │ docker push
      ▼
 Amazon ECR
      │
      │ docker pull
      ▼
 ECS / EKS
      │
      ▼
 Container
```

---

# 🗂️ ECR Repository

A **repository** is a location inside ECR where container images are stored.

For example:

```text
ECR
 │
 ├── my-web-app
 │     ├── v1
 │     ├── v2
 │     └── latest
 │
 └── my-api
       ├── v1
       └── v2
```

Each repository can contain multiple versions of a container image.

---

# 🌐 Amazon ECR Repository Types

Amazon ECR supports:

## 1. 🔐 Private Repository

Private repositories are used to store container images that should not be publicly accessible.

Example:

```text
AWS Account
     │
     ▼
Amazon ECR
     │
     ▼
Private Repository
     │
     ├── my-app:v1
     ├── my-app:v2
     └── my-app:latest
```

Private repositories are commonly used for:

* Production applications
* Internal applications
* Microservices
* Enterprise workloads
* CI/CD pipelines

Access is controlled using **AWS IAM** and repository policies.

---

## 2. 🌍 Public Repository

Amazon ECR also provides **public repositories** through the **Amazon ECR Public Gallery**.

Public container images can be shared with users around the world.

Example:

```text
Developer
    │
    ▼
ECR Public Gallery
    │
    ▼
Public Container Image
    │
    ▼
Docker / Container Platform
```

Public repositories are useful for distributing container images that are intended to be publicly available.

---

# 🔐 ECR Security and IAM

Access to private ECR repositories is controlled using **AWS IAM** and repository policies.

A user or AWS service needs appropriate permissions to perform actions such as:

* Authenticate to ECR
* Push images
* Pull images
* List repositories
* Describe images
* Delete images

### Example

```text
Developer
    │
    ▼
AWS IAM
    │
    │ Permissions
    ▼
Amazon ECR
    │
    ▼
Private Repository
```

---

# ⚠️ Common ECR Permission Error

If you receive an error such as:

```text
AccessDeniedException
```

or an error related to pushing/pulling an image, check your IAM permissions.

For example:

```text
User / Role
     │
     ▼
IAM Policy
     │
     ├── ECR permissions?
     │
     └── Correct repository?
              │
              ▼
            ECR
```

### Important

The AWS identity performing the operation must have the required ECR permissions.

For ECS tasks, also make sure the appropriate **task execution role** permissions are configured when ECS needs to pull images from private ECR repositories.

---

# 🔄 Docker + ECR Workflow

A common workflow is:

```text
1. Write Application
        │
        ▼
2. Create Dockerfile
        │
        ▼
3. Build Docker Image
        │
        ▼
4. Authenticate Docker to ECR
        │
        ▼
5. Tag Docker Image
        │
        ▼
6. Push Image to ECR
        │
        ▼
7. ECS / EKS pulls Image
        │
        ▼
8. Container Starts
```

---

# 🛠️ Basic ECR Commands

## Step 1 — Create an ECR Repository

Using AWS CLI:

```bash
aws ecr create-repository \
    --repository-name my-web-app \
    --region ap-south-1
```

This creates a repository named:

```text
my-web-app
```

---

# Step 2 — Authenticate Docker with ECR

```bash
aws ecr get-login-password \
    --region ap-south-1 | \
docker login \
    --username AWS \
    --password-stdin <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com
```

Replace:

```text
<ACCOUNT_ID>
```

with your AWS account ID.

---

# Step 3 — Build the Docker Image

From your application directory:

```bash
docker build -t my-web-app .
```

Check the image:

```bash
docker images
```

Example:

```text
REPOSITORY     TAG       IMAGE ID
my-web-app     latest    abc123
```

---

# Step 4 — Tag the Image

ECR requires the image to be tagged with the repository URI.

```bash
docker tag my-web-app:latest \
<ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/my-web-app:latest
```

---

# Step 5 — Push the Image to ECR

```bash
docker push \
<ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/my-web-app:latest
```

After a successful push:

```text
Local Docker
     │
     │ docker push
     ▼
Amazon ECR
     │
     ▼
my-web-app:latest
```

---

# Step 6 — Pull the Image

You can pull an image from ECR using:

```bash
docker pull \
<ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/my-web-app:latest
```

---

# 🏷️ ECR Image Tags

ECR supports **image tags** to identify different versions of an image.

Example:

```text
my-web-app:v1
my-web-app:v2
my-web-app:v3
my-web-app:latest
```

A recommended deployment approach is to use meaningful version tags.

For example:

```text
my-web-app:1.0
my-web-app:1.1
my-web-app:2.0
```

This makes deployments and rollbacks easier to understand.

---

# 📌 Image Tags vs Image Digests

ECR images have both tags and immutable content digests.

Example:

```text
my-web-app:v1
        │
        ▼
sha256:xxxxxxxxxxxxxxxx
```

A tag such as:

```text
v1
```

is a human-friendly identifier.

The digest uniquely identifies the image content.

For production deployments, using immutable image references/digests can provide stronger version control.

---

# 🔍 Image Vulnerability Scanning

Amazon ECR supports **image scanning** to identify known security vulnerabilities in container images.

Basic workflow:

```text
Docker Image
     │
     ▼
Amazon ECR
     │
     ▼
Vulnerability Scan
     │
     ├── CRITICAL
     ├── HIGH
     ├── MEDIUM
     └── LOW
```

Scanning can help identify vulnerable packages and dependencies inside container images.

### DevOps Best Practice

Scan images before deploying them to production.

Example:

```text
Developer
    │
    ▼
Docker Build
    │
    ▼
Security Scan
    │
    ├── ❌ Vulnerability → Fix
    │
    └── ✅ Acceptable → Push
                       │
                       ▼
                      ECR
```

---

# ♻️ ECR Image Lifecycle

Over time, repositories can accumulate many old images.

For example:

```text
my-app:v1
my-app:v2
my-app:v3
my-app:v4
my-app:v5
...
my-app:v100
```

Keeping every old image forever may increase storage usage.

**ECR lifecycle policies** can automatically clean up images according to rules you define.

Example:

```text
Keep latest 10 images
        │
        ▼
Delete older images
```

Lifecycle policies can be useful for:

* Removing old images
* Reducing storage usage
* Cleaning CI/CD artifacts
* Managing repository size

---

# ☁️ ECR and Amazon S3

Amazon ECR is integrated with AWS storage infrastructure, and ECR stores container image data using AWS-managed storage.

For your DevOps understanding, remember:

```text
ECR
 │
 └── Managed Container Registry
```

You normally interact with ECR through:

* AWS Console
* AWS CLI
* Docker CLI
* AWS SDKs
* ECS
* EKS
* CI/CD tools

You do **not** manually manage the underlying storage.

---

# 🔗 ECR + ECS

One of the most common ECR use cases is running images with ECS.

Architecture:

```text
Developer
    │
    ▼
Dockerfile
    │
    ▼
Docker Image
    │
    ▼
Amazon ECR
    │
    ▼
ECS Task Definition
    │
    ▼
ECS Service
    │
    ▼
ECS Task
    │
    ▼
Container
```

When ECS starts a task, it can pull the required container image from ECR.

---

# 🔗 ECR + EKS

ECR can also be used with Amazon EKS.

```text
Developer
    │
    ▼
Docker Image
    │
    ▼
Amazon ECR
    │
    ▼
Amazon EKS
    │
    ▼
Kubernetes Pod
    │
    ▼
Container
```

This is a common AWS architecture for Kubernetes workloads.

---

# 🔗 ECR + Fargate

ECR can also store images used by ECS tasks running on Fargate.

```text
Amazon ECR
     │
     │ Docker Image
     ▼
ECS Fargate
     │
     ▼
Fargate Task
     │
     ▼
Container
```

Fargate manages the underlying compute infrastructure while ECR provides the container image.

---

# 🏗️ Complete AWS Container Architecture

```text
                         Developer
                             │
                             ▼
                         Dockerfile
                             │
                             ▼
                        Docker Build
                             │
                             ▼
                       Docker Image
                             │
                             ▼
                     ┌───────────────┐
                     │   Amazon ECR  │
                     │               │
                     │ Image Storage │
                     └───────┬───────┘
                             │
                  ┌──────────┼──────────┐
                  │          │          │
                  ▼          ▼          ▼
                 ECS        EKS      Other AWS
                  │          │       Services
                  ▼          ▼
              Container   Kubernetes
                 Task        Pod
                  │          │
                  └────┬─────┘
                       ▼
                  Application
```

---

# 🔐 ECR Security Best Practices

For production environments:

* Use private repositories for private applications.
* Follow least-privilege IAM policies.
* Scan images for vulnerabilities.
* Avoid putting secrets inside Docker images.
* Use immutable version tags where appropriate.
* Use lifecycle policies to clean up old images.
* Enable appropriate encryption and access controls.
* Regularly update base images and dependencies.
* Restrict repository access to required AWS identities.

---

# 🆚 Docker Hub vs Amazon ECR

| Feature                | Docker Hub                 | Amazon ECR             |
| ---------------------- | -------------------------- | ---------------------- |
| Provider               | Docker                     | AWS                    |
| Container Registry     | ✅                          | ✅                      |
| Public Images          | ✅                          | ✅ ECR Public           |
| Private Images         | ✅                          | ✅                      |
| AWS IAM Integration    | Limited                    | ✅                      |
| ECS Integration        | Possible                   | Native AWS integration |
| EKS Integration        | Possible                   | Native AWS integration |
| AWS-focused Security   | Limited                    | Strong AWS integration |
| Lifecycle Policies     | Available by plan/features | ✅                      |
| Vulnerability Scanning | Available by plan/features | ✅                      |

---

# 🎯 When Should You Use ECR?

Use Amazon ECR when you want to:

* Store Docker images on AWS
* Deploy containers to ECS
* Deploy containers to EKS
* Use Fargate
* Integrate container images with AWS CI/CD
* Control image access using IAM
* Scan images for vulnerabilities
* Manage image versions
* Automatically clean up old images

---

# 📝 Interview Questions

### 1. What is Amazon ECR?

Amazon ECR is a managed AWS container registry used to store, manage, and deploy container images.

### 2. What does ECR stand for?

**ECR = Elastic Container Registry**

### 3. What is the difference between ECR and ECS?

```text
ECR → Stores container images

ECS → Runs and manages containers
```

### 4. Can ECR store Docker images?

Yes. ECR can store Docker and other OCI-compatible container images.

### 5. What is an ECR repository?

An ECR repository is a logical location where container images are stored.

### 6. How does ECS pull an image from ECR?

ECS uses the appropriate IAM permissions, typically through the task execution role, to authenticate and pull the required image from a private ECR repository.

### 7. What is ECR image scanning?

It checks container images for known software vulnerabilities.

### 8. What are ECR lifecycle policies?

Lifecycle policies automatically expire or delete images according to rules you configure.

### 9. What is the ECR Public Gallery?

It is a public collection of container images hosted through Amazon ECR Public.

### 10. Why use ECR instead of storing images on an EC2 server?

ECR is a managed container registry designed specifically for storing and distributing container images, with AWS IAM integration, scanning, lifecycle management, and integration with services such as ECS and EKS.

---

# 🧠 Easy Way to Remember

```text
        DOCKER
           │
           ▼
     Build Image
           │
           ▼
        AMAZON ECR
           │
     ┌─────┴─────┐
     │           │
     ▼           ▼
    ECS          EKS
     │           │
     ▼           ▼
Fargate       Kubernetes
     │           │
     └─────┬─────┘
           ▼
       Container
```

### One-Line Memory Trick

```text
ECR     → Store Images
ECS     → Run Containers
EKS     → Run Kubernetes
Fargate → Run Containers Without Managing Servers
IAM     → Control Access
ECR Scan → Find Vulnerabilities
Lifecycle → Clean Old Images
```

---

# 🎓 What I Learned

Through this Amazon ECR topic, I learned:

* Amazon Elastic Container Registry
* Container image repositories
* Private ECR repositories
* ECR Public Gallery
* Docker image storage
* Docker push and pull
* ECR and ECS integration
* ECR and EKS integration
* ECR and Fargate
* IAM permissions
* ECR image scanning
* Image tags
* Image digests
* ECR lifecycle policies
* Container image security

---

# 🏁 Conclusion

**Amazon ECR** is the AWS service used to **store and manage container images**.

The complete container workflow can be remembered as:

```text
Application
     │
     ▼
Dockerfile
     │
     ▼
Docker Image
     │
     ▼
Amazon ECR
     │
     ├──────────────┐
     ▼              ▼
    ECS             EKS
     │              │
     ▼              ▼
 Fargate        Kubernetes
     │              │
     └───────┬──────┘
             ▼
         Container
             │
             ▼
        Application
```

> **Amazon ECR = Securely store and manage container images on AWS.**

---
