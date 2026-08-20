# ☸️ Amazon EKS — Elastic Kubernetes Service

## 📌 Introduction

**Amazon EKS (Amazon Elastic Kubernetes Service)** is a managed Kubernetes service provided by AWS.

It allows you to run **Kubernetes clusters on AWS** without having to manage the Kubernetes control plane yourself.

Kubernetes is an **open-source container orchestration platform** used for:

* Automated deployment
* Scaling
* Management of containerized applications
* Service discovery
* Load balancing
* Rolling updates
* Self-healing workloads

---

# ☸️ What is Kubernetes?

**Kubernetes** is an open-source platform for automating the deployment, scaling, and management of containerized applications.

A simplified architecture looks like:

```text id="9m1y4f"
                    Kubernetes Cluster
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
       Control Plane               Worker Nodes
                                      │
                              ┌───────┼───────┐
                              ▼       ▼       ▼
                            Pod     Pod     Pod
                              │       │       │
                              ▼       ▼       ▼
                         Container Container Container
```

---

# ☁️ What is Amazon EKS?

Amazon EKS allows you to use Kubernetes on AWS while AWS manages the Kubernetes control plane.

Instead of installing and maintaining Kubernetes yourself, you can create an EKS cluster and deploy Kubernetes workloads using standard Kubernetes tools such as:

```text
kubectl
```

The basic architecture is:

```text id="wj1h4x"
                    AWS
                     │
                     ▼
              Amazon EKS Cluster
                     │
            ┌────────┴────────┐
            │                 │
            ▼                 ▼
       Control Plane      Worker Nodes
         Managed by       EC2 / Fargate
            AWS               │
                              ▼
                            Pods
                              │
                              ▼
                         Containers
```

---

# 🆚 EKS vs ECS

Amazon EKS and Amazon ECS are both AWS services for running containerized applications, but they use different orchestration technologies.

```text id="7o2vcd"
              AWS Container Services
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
            ECS                 EKS
             │                   │
             ▼                   ▼
      AWS-native ECS       Kubernetes
        orchestration      orchestration
```

### ECS

Amazon ECS is AWS's own container orchestration service.

### EKS

Amazon EKS is AWS's managed Kubernetes service.

---

# 🆚 EKS vs ECS

| Feature              | Amazon ECS        | Amazon EKS       |
| -------------------- | ----------------- | ---------------- |
| Orchestration        | AWS ECS           | Kubernetes       |
| Technology           | AWS-native        | Open source      |
| Kubernetes Knowledge | Not required      | Required         |
| Portability          | More AWS-specific | Highly portable  |
| API                  | ECS API           | Kubernetes API   |
| Kubernetes Ecosystem | Limited           | Large ecosystem  |
| AWS Integration      | Excellent         | Excellent        |
| Learning Curve       | Generally easier  | Generally higher |
| Compute              | EC2 / Fargate     | EC2 / Fargate    |

### Easy Way to Remember

```text id="u2xqfz"
ECS → AWS Container Platform

EKS → AWS Managed Kubernetes
```

---

# 🌍 Kubernetes is Cloud-Agnostic

One of the biggest advantages of Kubernetes is that it is **cloud-agnostic**.

The same Kubernetes concepts can be used across:

* AWS
* Microsoft Azure
* Google Cloud
* On-premises infrastructure
* Other Kubernetes-compatible environments

For example:

```text id="k5q6h7"
                 Kubernetes
                     │
       ┌─────────────┼─────────────┐
       │             │             │
       ▼             ▼             ▼
      AWS           Azure        GCP
       │             │             │
      EKS           AKS           GKE
```

This can make Kubernetes useful for organizations that want to avoid being tightly tied to one cloud provider.

---

# 🏢 EKS Migration Use Case

A common EKS use case is when a company already uses Kubernetes on-premises or in another cloud.

For example:

```text id="c9e7u4"
             Existing Kubernetes
                  Environment
                       │
                       │ Migration
                       ▼
                  Amazon EKS
                       │
                       ▼
                  AWS Cloud
```

### Example

Suppose a company already runs:

```text
On-Premises
     │
     ▼
Kubernetes
     │
     ├── Applications
     ├── Services
     └── Pods
```

The company can migrate workloads to:

```text
AWS
 │
 ▼
Amazon EKS
 │
 ├── Kubernetes
 ├── Pods
 ├── Services
 └── Applications
```

The Kubernetes API and core concepts remain familiar.

---

# 🖥️ EKS Compute Options

Amazon EKS supports different ways to run Kubernetes workloads.

The two important options for your learning are:

1. **EC2**
2. **AWS Fargate**

---

# 🖥️ EKS with EC2

With EC2-based EKS workloads, you run Kubernetes worker nodes on EC2 instances.

```text id="4y6jz1"
                  Amazon EKS
                      │
                      ▼
                 EC2 Nodes
                      │
             ┌────────┼────────┐
             ▼        ▼        ▼
           Pod      Pod      Pod
             │        │        │
             ▼        ▼        ▼
        Container Container Container
```

You have more control over the underlying worker-node infrastructure.

You are responsible for areas such as:

* EC2 instance configuration
* Node capacity
* AMIs
* Networking
* Security
* Node scaling
* Operating system maintenance

AWS manages the EKS control plane, but the worker-node infrastructure is your responsibility when you use EC2.

---

# ⚡ EKS with Fargate

EKS can also run pods on **AWS Fargate**.

With Fargate, you don't manage the underlying EC2 worker nodes for those pods.

```text id="4r8y8k"
                Amazon EKS
                     │
                     ▼
                  Fargate
                     │
              ┌──────┴──────┐
              ▼             ▼
            Pod           Pod
              │             │
              ▼             ▼
         Container     Container
```

This provides a more serverless approach to running Kubernetes workloads.

---

# 🆚 EKS EC2 vs EKS Fargate

| Feature                | EKS + EC2    | EKS + Fargate |
| ---------------------- | ------------ | ------------- |
| Worker Nodes           | EC2          | AWS-managed   |
| Server Management      | Required     | Not required  |
| Infrastructure Control | High         | Lower         |
| Node Configuration     | Full control | Limited       |
| Scaling                | Nodes + Pods | Pods          |
| Operational Effort     | Higher       | Lower         |
| Serverless             | ❌            | ✅             |

---

# 🏗️ Amazon EKS Architecture

A simplified EKS architecture:

```text id="0ahx9v"
                         Users
                           │
                           ▼
                    Load Balancer
                           │
                           ▼
                    Amazon EKS
                           │
                  ┌────────┴────────┐
                  │                 │
                  ▼                 ▼
              EC2 Nodes          Fargate
                  │                 │
          ┌───────┼───────┐         │
          ▼       ▼       ▼         ▼
        Pod     Pod     Pod       Pod
          │       │       │         │
          ▼       ▼       ▼         ▼
      Container Container Container Container
```

---

# 📦 Kubernetes Pods

A **Pod** is the smallest deployable unit in Kubernetes.

A Pod can contain one or more containers.

Common architecture:

```text id="rx4tzn"
Pod
 │
 └── Container
       │
       └── Application
```

Multiple containers can exist in the same Pod when they need to share networking or storage and have a close lifecycle relationship.

---

# 📋 Kubernetes Manifest

Kubernetes resources are commonly defined using YAML manifests.

Example:

```yaml id="5jiy2x"
apiVersion: apps/v1
kind: Deployment

metadata:
  name: my-app

spec:
  replicas: 2

  selector:
    matchLabels:
      app: my-app

  template:
    metadata:
      labels:
        app: my-app

    spec:
      containers:
        - name: my-app
          image: nginx:latest
          ports:
            - containerPort: 80
```

Apply the manifest using:

```bash id="f7n5ep"
kubectl apply -f deployment.yaml
```

---

# 🛠️ Important EKS Tools

## AWS CLI

Used to interact with AWS services.

```bash
aws --version
```

## kubectl

Used to communicate with Kubernetes clusters.

```bash
kubectl version --client
```

## eksctl

`eksctl` is a command-line utility that simplifies creating and managing EKS clusters.

Example:

```bash
eksctl create cluster --name my-eks-cluster
```

---

# 🔐 EKS Authentication

To interact with an EKS cluster using `kubectl`, you configure your kubeconfig.

A common command is:

```bash id="cm8d4y"
aws eks update-kubeconfig \
    --region ap-south-1 \
    --name my-eks-cluster
```

Then verify access:

```bash id="v5a4zq"
kubectl get nodes
```

---

# 💾 EKS Data Volumes

Kubernetes applications sometimes require persistent storage.

For example:

```text id="e3zj8r"
Application
    │
    ▼
   Pod
    │
    ▼
Persistent Storage
```

In Kubernetes, storage can be managed using resources such as:

* PersistentVolume (PV)
* PersistentVolumeClaim (PVC)
* StorageClass

---

# 🗄️ StorageClass

When using dynamic storage provisioning, you typically define a **StorageClass**.

Example:

```text id="v9h2xq"
Application
     │
     ▼
PersistentVolumeClaim
     │
     ▼
StorageClass
     │
     ▼
CSI Driver
     │
     ▼
AWS Storage
```

The StorageClass tells Kubernetes how storage should be provisioned.

---

# 🔌 Container Storage Interface (CSI)

Amazon EKS uses **Container Storage Interface (CSI)** drivers to integrate Kubernetes with AWS storage services.

CSI is a standard interface that allows storage systems to integrate with Kubernetes.

Examples of AWS storage integrations include:

* Amazon EBS
* Amazon EFS

A typical architecture:

```text id="9g3x7n"
Kubernetes Pod
      │
      ▼
PersistentVolumeClaim
      │
      ▼
StorageClass
      │
      ▼
CSI Driver
      │
      ▼
AWS Storage
```

---

# 💾 EBS vs EFS for EKS

| Storage    | Typical Use                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| Amazon EBS | Block storage, often attached to workloads needing persistent block storage |
| Amazon EFS | Shared file storage accessible across Availability Zones                    |

### Simple Example

```text id="6p2jv0"
EBS
 │
 └── Persistent block storage

EFS
 │
 └── Shared file storage
```

The appropriate choice depends on the application's storage requirements and access pattern.

---

# 🐳 EKS + ECR

Amazon EKS commonly uses **Amazon ECR** to store container images.

```text id="7j4l8w"
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
Amazon EKS
    │
    ▼
Kubernetes Pod
    │
    ▼
Container
```

This creates a complete AWS container workflow.

---

# 🌐 EKS Load Balancing

Kubernetes applications running on EKS can receive external traffic through AWS load-balancing integrations.

A common architecture is:

```text id="5p7qz0"
Internet
   │
   ▼
AWS Load Balancer
   │
   ▼
Kubernetes Service
   │
   ▼
Pods
   │
   ▼
Containers
```

AWS Load Balancer Controller can integrate Kubernetes resources with AWS load balancing services.

---

# 🔄 EKS Deployment Workflow

A typical workflow is:

```text id="t5j2v8"
Developer
    │
    ▼
Application Code
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
EKS Cluster
    │
    ▼
Kubernetes Deployment
    │
    ▼
Kubernetes Pods
    │
    ▼
Containers
    │
    ▼
Application
```

---

# 📈 Kubernetes Scaling

Kubernetes can scale applications by increasing or decreasing the number of Pods.

For example:

```text id="3qf9k4"
Low Traffic

Deployment
    │
    ▼
2 Pods
```

High traffic:

```text id="n8d2k3"
High Traffic

Deployment
    │
    ▼
5 Pods
```

Kubernetes can use mechanisms such as the **Horizontal Pod Autoscaler (HPA)** to automatically adjust the number of Pods based on metrics.

---

# ❤️ Kubernetes Self-Healing

One important Kubernetes feature is self-healing.

If a Pod fails:

```text id="5x1n7k"
Pod 1
 ❌ Failed
    │
    ▼
Kubernetes
    │
    ▼
Creates replacement Pod
    │
    ▼
Pod 2
 ✅ Running
```

This helps maintain the desired state of the application.

---

# 🆚 EKS vs Self-Managed Kubernetes

| Feature                   | Amazon EKS  | Self-Managed Kubernetes |
| ------------------------- | ----------- | ----------------------- |
| Kubernetes Control Plane  | AWS managed | You manage              |
| Control Plane Maintenance | AWS         | You                     |
| Kubernetes API            | ✅           | ✅                       |
| AWS Integration           | Excellent   | Requires configuration  |
| Operational Effort        | Lower       | Higher                  |
| Infrastructure Control    | Less        | More                    |

---

# 🎯 EKS Use Cases

Amazon EKS is useful when:

* Your organization already uses Kubernetes.
* You are migrating Kubernetes workloads to AWS.
* You need Kubernetes portability.
* You want access to the Kubernetes ecosystem.
* You are running microservices.
* You need Kubernetes-native deployment patterns.
* You want AWS-managed Kubernetes control-plane operations.

---

# 📝 Interview Questions

### 1. What is Amazon EKS?

Amazon EKS is AWS's managed Kubernetes service that makes it easier to run Kubernetes clusters on AWS.

### 2. What does EKS stand for?

**EKS = Elastic Kubernetes Service**

### 3. What is Kubernetes?

Kubernetes is an open-source platform for automating deployment, scaling, and management of containerized applications.

### 4. What is the difference between ECS and EKS?

ECS is AWS's native container orchestration service, while EKS is AWS's managed Kubernetes service.

### 5. Is Kubernetes cloud-agnostic?

Yes. Kubernetes can run across multiple cloud providers and on-premises environments.

### 6. Can EKS use EC2?

Yes. EKS can run Kubernetes worker nodes on EC2 instances.

### 7. Can EKS use Fargate?

Yes. EKS can run supported Kubernetes Pods on AWS Fargate.

### 8. What is a Kubernetes Pod?

A Pod is the smallest deployable unit in Kubernetes and can contain one or more containers.

### 9. What is a StorageClass?

A StorageClass defines how storage can be dynamically provisioned for Kubernetes workloads.

### 10. What is CSI?

**CSI = Container Storage Interface.**

It is a standard interface that allows Kubernetes to integrate with storage systems through CSI drivers.

### 11. How does EKS use ECR?

ECR stores container images, and EKS workloads can pull those images when creating Pods.

### 12. Why would a company choose EKS?

A company that already uses Kubernetes on-premises or in another cloud may choose EKS to run Kubernetes on AWS while continuing to use Kubernetes APIs, tools, and ecosystem technologies.

---

# 🧠 Easy Way to Remember

```text
                AMAZON EKS
                    │
                    ▼
              Kubernetes
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
        EC2                 Fargate
     Worker Nodes          Serverless
          │                   │
          └─────────┬─────────┘
                    ▼
                   Pods
                    │
                    ▼
               Containers
```

### AWS Container Services Memory Trick

```text
ECR
 │
 └── Store Container Images

ECS
 │
 └── AWS Container Orchestration

EKS
 │
 └── Managed Kubernetes

Fargate
 │
 └── Serverless Container Compute
```

---

# 🎓 What I Learned

Through this Amazon EKS topic, I learned:

* Amazon EKS
* Kubernetes
* Managed Kubernetes
* Kubernetes API
* ECS vs EKS
* Cloud-agnostic Kubernetes
* EKS with EC2
* EKS with Fargate
* Kubernetes Pods
* Kubernetes Deployments
* Kubernetes Services
* Kubernetes manifests
* `kubectl`
* `eksctl`
* Amazon ECR integration
* EKS storage
* StorageClass
* PersistentVolume
* PersistentVolumeClaim
* Container Storage Interface (CSI)
* EBS and EFS integration
* Kubernetes scaling
* Kubernetes self-healing

---

# 🏁 Conclusion

**Amazon EKS** provides a managed Kubernetes environment on AWS.

The overall architecture can be remembered as:

```text
                    AWS
                     │
                     ▼
                Amazon EKS
                     │
             ┌───────┴───────┐
             ▼               ▼
            EC2            Fargate
             │               │
             ▼               ▼
        Worker Nodes      Serverless
             │               │
             └───────┬───────┘
                     ▼
                  Kubernetes
                     │
                     ▼
                    Pods
                     │
                     ▼
                Containers
                     │
                     ▼
                Application
```

> **Amazon EKS = Managed Kubernetes on AWS**

> **ECR = Store Container Images**

> **ECS = AWS-native Container Orchestration**

> **Fargate = Serverless Container Compute**

> **Kubernetes = Open-source Container Orchestration**

---
