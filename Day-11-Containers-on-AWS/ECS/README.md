# 🚀 Amazon ECS — Elastic Container Service

## 📌 Introduction

**Amazon Elastic Container Service (Amazon ECS)** is a fully managed container orchestration service provided by AWS.

Amazon ECS allows you to **run, manage, and scale Docker containers on AWS**.

The basic concept is:

```text
Docker Container
       │
       ▼
   ECS Task
       │
       ▼
  ECS Service
       │
       ▼
   ECS Cluster
```

Amazon ECS supports two main ways to run containers:

1. **EC2 Launch Type**
2. **AWS Fargate Launch Type**

---

# 🐳 Launch Docker Containers on AWS

With ECS, you don't directly launch a Docker container in the same way you would on a local Docker host.

Instead, you create an **ECS Task Definition**, and ECS launches **tasks** based on that definition.

```text
Docker Image
     │
     ▼
Amazon ECR
     │
     ▼
ECS Task Definition
     │
     ▼
ECS Task
     │
     ▼
Docker Container
```

---

# 🏗️ Amazon ECS Architecture

A simplified ECS architecture looks like:

```text
                       Users
                         │
                         ▼
                 Application Load
                    Balancer
                         │
                         ▼
                  ECS Service
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
          ECS Task               ECS Task
              │                     │
              ▼                     ▼
         Container              Container
              │                     │
              └──────────┬──────────┘
                         │
                         ▼
                    ECS Cluster
```

---

# 📚 Important ECS Concepts

Before working with ECS, understand these components:

| Component       | Purpose                               |
| --------------- | ------------------------------------- |
| ECS Cluster     | Logical grouping of ECS resources     |
| Task Definition | Blueprint for running containers      |
| Task            | Running instance of a task definition |
| Service         | Maintains the desired number of tasks |
| Container       | Application running inside a task     |
| ECR             | Stores container images               |
| Load Balancer   | Distributes traffic to tasks          |
| IAM Role        | Provides permissions to ECS resources |

---

# 🖥️ EC2 Launch Type

With the **EC2 launch type**, you are responsible for provisioning and maintaining the underlying EC2 infrastructure.

```text
ECS Cluster
     │
     ▼
EC2 Instances
     │
 ┌───┼────┐
 ▼   ▼    ▼
Task Task Task
 │    │    │
 ▼    ▼    ▼
Container
```

### You are responsible for:

* Launching EC2 instances
* Choosing instance types
* Managing EC2 capacity
* Patching the operating system
* Managing security
* Configuring Auto Scaling
* Maintaining the ECS container instances

---

# 🤖 ECS Agent

Each ECS container instance using the EC2 launch type must run the **ECS container agent**.

The ECS agent communicates with the ECS service and helps manage tasks and containers on the EC2 instance.

```text
                 ECS Control Plane
                        │
                        │
                        ▼
                  ECS Agent
                        │
                        ▼
                  EC2 Instance
                        │
                ┌───────┴───────┐
                ▼               ▼
             ECS Task        ECS Task
                │               │
                ▼               ▼
            Container       Container
```

The ECS agent helps with tasks such as:

* Registering the container instance with ECS
* Starting tasks
* Stopping tasks
* Monitoring task state
* Communicating task information with ECS

---

# ⚡ Fargate Launch Type

**AWS Fargate** is a serverless compute option for running ECS tasks.

With Fargate:

> You don't provision or manage the underlying EC2 instances.

You mainly define:

* Task definition
* CPU
* Memory
* Networking
* Container image
* IAM roles
* Number of tasks

AWS manages the underlying compute infrastructure.

---

# 🆚 ECS EC2 vs Fargate

| Feature              | EC2 Launch Type                 | Fargate                         |
| -------------------- | ------------------------------- | ------------------------------- |
| EC2 Management       | You manage                      | AWS manages                     |
| Infrastructure       | Customer managed                | Serverless                      |
| ECS Agent            | Runs on EC2 container instances | AWS-managed infrastructure      |
| Capacity Management  | Customer responsibility         | AWS manages underlying capacity |
| Scaling              | Tasks + EC2 instances           | Primarily tasks                 |
| Control              | More control                    | Less infrastructure control     |
| Operational Overhead | Higher                          | Lower                           |
| Best For             | More infrastructure control     | Simpler container deployment    |

---

# 🟢 Fargate Architecture

```text
                  ECS Cluster
                       │
                       ▼
                  ECS Service
                       │
              ┌────────┴────────┐
              ▼                 ▼
          Fargate Task      Fargate Task
              │                 │
              ▼                 ▼
          Container         Container
```

There is no EC2 instance that you need to provision or maintain for the Fargate tasks.

---

# 📦 ECS Task Definition

A **Task Definition** is a blueprint that tells ECS how to run your containerized application.

It can define:

* Container image
* CPU
* Memory
* Port mappings
* Environment variables
* Logging
* IAM task role
* Network settings
* Volumes

Example:

```text
Task Definition
│
├── Container Image
│      └── myapp:v1
│
├── CPU
│      └── 512
│
├── Memory
│      └── 1024 MB
│
├── Port
│      └── 8080
│
├── IAM Task Role
│
└── CloudWatch Logs
```

---

# 🔐 ECS IAM Roles

IAM roles are very important in Amazon ECS.

There are different roles for different purposes.

The two important roles are:

```text
IAM
 │
 ├── Task Execution Role
 │
 └── Task Role
```

For the EC2 launch type, there is also an:

```text
EC2 Instance Profile
```

---

# 🖥️ EC2 Instance Profile

The **EC2 instance profile** is used with the EC2 launch type.

It provides permissions to the ECS container instance and the ECS agent.

It can allow the ECS agent/container instance to perform operations such as:

* Communicate with ECS
* Pull images from Amazon ECR
* Send container logs to CloudWatch Logs
* Access other AWS resources required by the container instance

```text
EC2 Instance
     │
     ▼
EC2 Instance Profile
     │
     ▼
ECS Agent
```

> The exact permissions depend on the IAM policies attached to the role.

---

# 🔑 ECS Task Role

An **ECS task role** gives permissions directly to the application containers running in an ECS task.

This allows each ECS service to have its own IAM permissions.

Example:

```text
ECS Service A
     │
     ▼
Task Role A
     │
     └── Access S3

ECS Service B
     │
     ▼
Task Role B
     │
     └── Access DynamoDB
```

The task role is configured in the **task definition**.

### Example

Suppose your application needs to read objects from S3.

Instead of storing AWS access keys inside the container:

```text
❌ Access Key
❌ Secret Key
```

use:

```text
ECS Task
   │
   ▼
IAM Task Role
   │
   ▼
Amazon S3
```

This is more secure and follows AWS best practices.

---

# 🔐 Task Execution Role

The **task execution role** is used by ECS/Fargate to perform actions required to start and run the task.

Common examples include:

* Pulling container images from ECR
* Sending container logs to CloudWatch Logs
* Retrieving certain configuration or secrets when configured

This is different from the **task role**, which provides permissions to the application itself.

### Easy Way to Remember

```text
Task Execution Role
        │
        ▼
ECS starts/runs the task

Task Role
        │
        ▼
Application inside the task
```

---

# ⚖️ ECS Load Balancer Integration

Amazon ECS integrates with Elastic Load Balancing.

The most common choice for HTTP/HTTPS applications is:

### Application Load Balancer — ALB

ALB works well for:

* Web applications
* HTTP/HTTPS traffic
* Path-based routing
* Host-based routing
* Microservices

Architecture:

```text
                  Users
                    │
                    ▼
            Application Load
               Balancer
                    │
             ┌──────┴──────┐
             ▼             ▼
         ECS Task       ECS Task
             │             │
             ▼             ▼
         Container     Container
```

---

# 🌐 Network Load Balancer

**Network Load Balancer (NLB)** operates at a lower network level and is useful for certain high-performance or TCP/UDP use cases.

NLB can be appropriate when you need:

* Very high throughput
* Low latency
* TCP/UDP load balancing
* Static IP-related requirements
* Integration with AWS PrivateLink in suitable architectures

For most standard HTTP/HTTPS ECS applications, **ALB is usually the simpler choice**.

---

# 💾 ECS Data Volumes

ECS tasks may need persistent or shared storage.

AWS ECS can integrate with **Amazon EFS (Elastic File System)**.

EFS can be mounted into ECS tasks.

```text
                  ECS Cluster
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
          ECS Task            ECS Task
             │                   │
             └─────────┬─────────┘
                       │
                       ▼
                 Amazon EFS
                Shared Storage
```

---

# 🗂️ EFS with ECS

EFS works with both:

* ECS on EC2
* ECS on Fargate

This makes it possible for tasks running in different Availability Zones to access the same EFS file system, when the networking and EFS configuration are correctly set up.

Example:

```text
Availability Zone A          Availability Zone B

    ECS Task                    ECS Task
       │                           │
       └──────────┬────────────────┘
                  │
                  ▼
             Amazon EFS
             File System
```

### Use Cases

EFS is useful when containers need:

* Persistent shared storage
* Shared files
* Multi-AZ file access
* Shared application data

---

# ⚠️ Amazon S3 vs EFS

Amazon S3 is an **object storage service**, not a traditional file system.

Therefore:

```text
S3 ≠ File System
```

If your application needs a mounted file system, **EFS** is generally the appropriate AWS service.

S3 is better suited for:

* Images
* Videos
* Backups
* Logs
* Documents
* Static files
* Data objects

---

# 📈 ECS Service Auto Scaling

ECS can automatically increase or decrease the desired number of tasks in an ECS service.

Example:

```text
Low Traffic
    │
    ▼
2 ECS Tasks
```

When traffic increases:

```text
High Traffic
    │
    ▼
5 ECS Tasks
```

When traffic decreases:

```text
Low Traffic
    │
    ▼
2 ECS Tasks
```

ECS service auto scaling uses **Application Auto Scaling**.

---

# 📊 ECS Scaling Metrics

ECS service scaling can use CloudWatch metrics such as:

### 1. ECS Service Average CPU Utilization

Scale based on average CPU usage.

```text
CPU > Target
   │
   ▼
Increase Tasks
```

---

### 2. ECS Service Average Memory Utilization

Scale based on average memory usage.

```text
Memory > Target
      │
      ▼
Increase Tasks
```

---

### 3. ALB Request Count Per Target

For services behind an Application Load Balancer, scaling can be based on request load per target.

```text
More Requests
      │
      ▼
More ECS Tasks
```

---

# 🎯 ECS Scaling Policies

There are three common scaling approaches.

## 1. Target Tracking Scaling

Maintain a target value for a CloudWatch metric.

Example:

```text
Target CPU = 50%

CPU > 50%
   │
   ▼
Scale Out

CPU < 50%
   │
   ▼
Scale In
```

This is often the simplest approach for ECS service scaling.

---

# 2. Step Scaling

Step scaling changes capacity based on the amount by which a CloudWatch alarm crosses a threshold.

Example:

```text
CPU > 60%
    │
    ▼
Add 1 Task

CPU > 80%
    │
    ▼
Add 3 Tasks
```

---

# 3. Scheduled Scaling

Scheduled scaling changes capacity according to a predefined schedule.

Example:

```text
10:00 AM
    │
    ▼
Increase Tasks

10:00 PM
    │
    ▼
Decrease Tasks
```

This is useful when traffic follows a predictable schedule.

---

# 🔄 ECS Service Scaling vs EC2 Auto Scaling

This distinction is very important.

### ECS Service Auto Scaling

Controls the **number of ECS tasks**.

```text
ECS Service
     │
     ▼
Number of Tasks
```

### EC2 Auto Scaling

Controls the **number of EC2 instances**.

```text
EC2 Auto Scaling Group
        │
        ▼
Number of EC2 Instances
```

---

# 🖥️ EC2 Launch Type Scaling

With the ECS EC2 launch type, there are potentially **two scaling layers**:

```text
                    Traffic
                       │
                       ▼
                ECS Service
                       │
                 Task Scaling
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
          ECS Task             ECS Task
             │                   │
             └─────────┬─────────┘
                       │
                  EC2 Capacity
                       │
                       ▼
                EC2 Auto Scaling
                       │
                       ▼
                 More EC2 Instances
```

If the ECS service needs more tasks but there isn't enough EC2 capacity, you need sufficient EC2 instances to run those tasks.

Therefore:

```text
ECS Service Scaling
       =
Task-Level Scaling
```

while:

```text
EC2 Auto Scaling
       =
EC2 Instance-Level Scaling
```

---

# ⚡ Fargate Auto Scaling

Fargate makes scaling simpler because you don't manage the underlying EC2 instances.

```text
             ECS Service
                  │
                  ▼
           Service Scaling
                  │
          ┌───────┼───────┐
          ▼       ▼       ▼
       Task 1  Task 2  Task 3
          │       │       │
          └───────┴───────┘
                  │
                  ▼
             AWS Fargate
```

You focus mainly on the desired number of tasks and their resource requirements.

There is no separate EC2 instance Auto Scaling Group that you need to manage for the Fargate tasks.

---

# 🆚 ECS EC2 vs Fargate Scaling

| Feature                   | ECS EC2                               | ECS Fargate        |
| ------------------------- | ------------------------------------- | ------------------ |
| Task Scaling              | Yes                                   | Yes                |
| EC2 Scaling               | Required when capacity needs increase | Not managed by you |
| Infrastructure Management | Customer                              | AWS                |
| Scaling Complexity        | Higher                                | Lower              |
| Server Management         | Required                              | None               |
| Best For                  | More control                          | Simpler operations |

---

# 🏗️ Complete ECS Architecture

A production-style ECS architecture could look like this:

```text
                         INTERNET
                            │
                            ▼
                    ┌──────────────┐
                    │     ALB      │
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    ▼              ▼
                ECS Task        ECS Task
                    │              │
                    ▼              ▼
                Container       Container
                    │              │
                    └──────┬───────┘
                           │
                           ▼
                       Amazon EFS
                           │
                           │
                    ┌──────┴───────┐
                    │              │
                    ▼              ▼
                  ECR           CloudWatch
              Docker Images       Logs
```

For an EC2 launch type environment:

```text
                         ECS Cluster
                              │
                       EC2 Instances
                              │
                  ┌───────────┴───────────┐
                  ▼                       ▼
               ECS Task                ECS Task
                  │                       │
                  ▼                       ▼
             Container               Container
```

For Fargate:

```text
                         ECS Cluster
                              │
                       ECS Service
                              │
                  ┌───────────┴───────────┐
                  ▼                       ▼
             Fargate Task             Fargate Task
                  │                       │
                  ▼                       ▼
              Container               Container
```

---

# 🔄 Complete ECS Deployment Flow

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
ECS Task Definition
    │
    ▼
ECS Service
    │
    ▼
ECS Cluster
    │
    ├───────────────┐
    │               │
    ▼               ▼
EC2 Launch       Fargate
   Type           Launch Type
    │               │
    ▼               ▼
EC2 Instances    Serverless
    │               │
    └───────┬───────┘
            ▼
       ECS Tasks
            │
            ▼
       Containers
            │
            ▼
       Application
```

---

# 🎯 When Should You Use ECS?

ECS is useful when you want to:

* Run Docker containers on AWS
* Deploy microservices
* Build containerized web applications
* Automatically scale containers
* Integrate containers with ALB
* Use AWS-native container orchestration
* Run containers without managing servers using Fargate
* Run containers with more infrastructure control using EC2

---

# 📝 ECS Interview Questions

### 1. What is Amazon ECS?

Amazon ECS is AWS's managed container orchestration service used to run, manage, and scale containerized applications.

### 2. What are the ECS launch types?

The major compute options are:

* EC2
* Fargate

### 3. What is an ECS task?

An ECS task is a running instance of an ECS task definition.

### 4. What is an ECS task definition?

A task definition is a blueprint that specifies how containers should run, including their image, CPU, memory, ports, logging, and IAM configuration.

### 5. What is an ECS service?

An ECS service maintains the desired number of running tasks and can integrate with load balancers and service auto scaling.

### 6. What is Fargate?

Fargate is AWS's serverless compute engine for containers. It allows ECS tasks to run without you managing the underlying EC2 instances.

### 7. What is the ECS Agent?

For ECS on EC2, the ECS container agent runs on container instances and communicates with the ECS service to manage tasks and containers.

### 8. What is an ECS task role?

An ECS task role gives the application running inside a task permission to access AWS services.

### 9. What is the difference between a task role and a task execution role?

The **task role** provides permissions to the application/container.

The **task execution role** provides permissions needed by ECS/Fargate to start and manage the task, such as pulling images and sending logs.

### 10. What is the EC2 instance profile?

It provides IAM permissions to an ECS container instance and is used with the ECS EC2 launch type.

### 11. Which load balancer is commonly used with ECS?

An **Application Load Balancer (ALB)** is commonly used for HTTP/HTTPS applications.

### 12. Can ECS use EFS?

Yes. EFS can be mounted into ECS tasks running on both EC2 and Fargate.

### 13. Can S3 be mounted directly as a normal file system?

S3 is object storage and is not a traditional file system. For a managed shared file system for ECS tasks, EFS is generally the appropriate AWS service.

### 14. What is ECS Service Auto Scaling?

It automatically adjusts the desired number of ECS tasks based on metrics or schedules.

### 15. What is the difference between ECS Auto Scaling and EC2 Auto Scaling?

ECS service auto scaling changes the **number of ECS tasks**, while EC2 Auto Scaling changes the **number of EC2 instances**.

---

# 🧠 Easy Way to Remember

```text
ECR
 │
 └── Store Docker Images
          │
          ▼
    Task Definition
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

### Compute Options

```text
ECS
 │
 ├── EC2
 │    └── You manage EC2 infrastructure
 │
 └── Fargate
      └── AWS manages underlying infrastructure
```

### Scaling

```text
ECS Service Auto Scaling
        │
        ▼
    ECS TASKS

EC2 Auto Scaling
        │
        ▼
   EC2 INSTANCES
```

---

# 🎓 What I Learned

Through this Amazon ECS topic, I learned:

* Amazon ECS
* ECS clusters
* ECS tasks
* ECS task definitions
* ECS services
* EC2 launch type
* Fargate launch type
* ECS Agent
* EC2 instance profiles
* ECS task roles
* ECS task execution roles
* Amazon ECR integration
* Application Load Balancer integration
* Network Load Balancer use cases
* EFS with ECS
* ECS Service Auto Scaling
* Target Tracking Scaling
* Step Scaling
* Scheduled Scaling
* ECS task-level scaling
* EC2 instance-level scaling
* Fargate serverless containers

---

# 🏁 Conclusion

**Amazon ECS** provides a simple way to run and manage Docker containers on AWS.

The two main compute options are:

```text
             Amazon ECS
                 │
        ┌────────┴────────┐
        ▼                 ▼
      EC2              Fargate
        │                 │
        ▼                 ▼
You manage EC2      AWS manages
 infrastructure     infrastructure
```

The most important concepts are:

> **ECR → Stores container images**

> **ECS → Orchestrates containers**

> **Task Definition → Blueprint for containers**

> **Task → Running instance of a task definition**

> **Service → Maintains the desired number of tasks**

> **EC2 Launch Type → You manage the underlying EC2 capacity**

> **Fargate → Serverless container compute**

> **ECS Service Auto Scaling → Scales tasks**

> **EC2 Auto Scaling → Scales EC2 instances**

---
