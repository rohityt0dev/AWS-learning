# Docker

## 📌 Introduction

**Docker** is a software development and containerization platform used to **build, package, deploy, and run applications in containers**.

Docker packages an application together with its required dependencies into a **container**, allowing the application to run consistently across different environments.

The main idea is:

> **Build once, run anywhere.**

An application running inside a Docker container should behave consistently whether it is running on a developer's laptop, a test environment, or a cloud server, provided the required platform and architecture are supported.

---

# 🐳 What is Docker?

Docker uses **containers** to package applications and their dependencies.

A container can include:

* Application code
* Runtime
* Libraries
* Dependencies
* Configuration required by the application

Example:

```text
Developer Machine
       │
       ▼
   Docker Image
       │
       ▼
   Docker Container
       │
       ▼
   Application
```

The same image can then be used in different environments:

```text
             Docker Image
                   │
       ┌───────────┼───────────┐
       │           │           │
       ▼           ▼           ▼
   Developer      Test       Production
    Machine     Server       Server
       │           │           │
       ▼           ▼           ▼
   Container    Container    Container
```

This helps reduce the common **"works on my machine"** problem.

---

# 🧩 Docker Container

A **Docker container** is a running instance of a Docker image.

For example:

```text
Docker Image
     │
     │ docker run
     ▼
Docker Container
     │
     ▼
Running Application
```

You can create multiple containers from the same image:

```text
              Docker Image
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
    Container   Container   Container
       #1          #2          #3
```

Each container provides an isolated environment for the application.

---

# 🖼️ Docker Image

A **Docker image** is a packaged, read-only template used to create containers.

It contains the application and the components required to run it.

Example:

```text
Docker Image
│
├── Application Code
├── Runtime
├── Libraries
├── Dependencies
└── Configuration
```

When you run an image, Docker creates a container from it.

```bash
docker run nginx
```

The command creates a container using the `nginx` image.

---

# 🔄 Docker Image vs Container

| Docker Image                | Docker Container        |
| --------------------------- | ----------------------- |
| Template                    | Running instance        |
| Read-only                   | Running environment     |
| Used to create containers   | Created from an image   |
| Can be stored in a registry | Runs on a Docker host   |
| Example: `nginx:latest`     | Running Nginx container |

### Easy Way to Remember

```text
IMAGE = Blueprint

CONTAINER = Running Application
```

---

# 📦 Docker Registry

Docker images are stored and distributed through **container registries**.

A registry is a location where container images can be pushed, stored, and pulled.

Common container registries include:

* Docker Hub
* Amazon ECR
* GitHub Container Registry
* Azure Container Registry
* Google Artifact Registry

---

# 🐳 Docker Hub

**Docker Hub** is a popular public container registry.

It provides repositories where Docker images can be stored and shared.

Example:

```text
Developer
    │
    │ docker push
    ▼
Docker Hub
    │
    │ docker pull
    ▼
Other Machine
```

Example command:

```bash
docker pull nginx
```

Docker downloads the image from a registry, such as Docker Hub.

---

# ☁️ Amazon ECR

**Amazon Elastic Container Registry (Amazon ECR)** is AWS's managed container image registry.

It allows you to:

* Store Docker/container images
* Push images
* Pull images
* Manage image repositories
* Integrate with ECS
* Integrate with EKS
* Integrate with other AWS services

Basic architecture:

```text
Developer
    │
    │ docker push
    ▼
Amazon ECR
    │
    │ docker pull
    ▼
ECS / EKS / Other Workloads
```

---

# 🔐 Amazon ECR Example

A typical workflow is:

```text
Application Code
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
ECS / EKS
       │
       ▼
Running Container
```

---

# ☁️ Docker Container Management on AWS

AWS provides several services for running and managing containers.

The major services are:

```text
             AWS Container Services
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
       ECS          EKS        Fargate
        │            │
        │            │
        └──────┬─────┘
               │
               ▼
              ECR
        Container Images
```

---

# 🚀 Amazon ECS

**Amazon Elastic Container Service (Amazon ECS)** is AWS's managed container orchestration service.

ECS is used to deploy, manage, and scale containerized applications.

Example:

```text
Docker Image
     │
     ▼
    ECR
     │
     ▼
    ECS
     │
     ▼
Running Containers
```

### ECS can work with:

* EC2-based infrastructure
* AWS Fargate

---

# ☸️ Amazon EKS

**Amazon Elastic Kubernetes Service (Amazon EKS)** is AWS's managed Kubernetes service.

Kubernetes is an open-source container orchestration platform.

EKS allows you to use Kubernetes on AWS while AWS manages important parts of the Kubernetes control plane.

Example:

```text
Docker Image
     │
     ▼
    ECR
     │
     ▼
    EKS
     │
     ▼
Kubernetes Pods
     │
     ▼
Containers
```

### ECS vs EKS

```text
ECS
 │
 └── AWS container orchestration

EKS
 │
 └── Managed Kubernetes
```

---

# ⚡ AWS Fargate

**AWS Fargate** is a serverless compute engine for containers.

It works with:

* Amazon ECS
* Amazon EKS

With Fargate, you don't need to manage the underlying EC2 servers for your container workloads.

### Traditional Container Infrastructure

```text
ECS
 │
 ▼
EC2
 │
 ▼
Containers
```

### Fargate

```text
ECS / EKS
     │
     ▼
  Fargate
     │
     ▼
 Containers
```

AWS manages the underlying compute infrastructure for Fargate tasks.

---

# 🆚 ECS vs EKS vs Fargate vs ECR

| Service         | Purpose                           |
| --------------- | --------------------------------- |
| **Amazon ECR**  | Stores container images           |
| **Amazon ECS**  | Container orchestration           |
| **Amazon EKS**  | Managed Kubernetes                |
| **AWS Fargate** | Serverless compute for containers |

### Easy Way to Remember

```text
ECR      → Store Images

ECS      → Manage Containers

EKS      → Manage Kubernetes

Fargate  → Run Containers Without Managing Servers
```

---

# 🏗️ Docker + AWS Architecture

A common AWS container architecture looks like:

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
                     Amazon
                       ECR
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
            ECS                    EKS
             │                     │
             │                     │
             └──────────┬──────────┘
                        ▼
                    Fargate
                        │
                        ▼
                  Containers
                        │
                        ▼
                  Application
```

---

# 🛠️ Basic Docker Commands

## Check Docker Version

```bash
docker --version
```

---

## Download an Image

```bash
docker pull nginx
```

---

## List Images

```bash
docker images
```

---

## Run a Container

```bash
docker run nginx
```

Run Nginx in detached mode:

```bash
docker run -d nginx
```

---

## List Running Containers

```bash
docker ps
```

---

## List All Containers

```bash
docker ps -a
```

---

## Stop a Container

```bash
docker stop <container_id>
```

---

## Start a Container

```bash
docker start <container_id>
```

---

## Remove a Container

```bash
docker rm <container_id>
```

---

## Remove an Image

```bash
docker rmi <image_id>
```

---

# 📝 Dockerfile

A **Dockerfile** contains instructions used to build a Docker image.

Example:

```dockerfile
FROM nginx:latest

COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
```

Build the image:

```bash
docker build -t my-web-app .
```

Run the image:

```bash
docker run -d -p 8080:80 my-web-app
```

Then access the application through:

```text
http://localhost:8080
```

---

# 🔄 Docker Development Workflow

A typical Docker workflow:

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
4. Test Container
        │
        ▼
5. Push Image to Registry
        │
        ▼
6. Deploy Container
        │
        ▼
7. Monitor Application
```

Example:

```bash
docker build -t myapp:v1 .
docker run -d -p 8080:8080 myapp:v1
docker tag myapp:v1 <registry>/myapp:v1
docker push <registry>/myapp:v1
```

---

# ✅ Advantages of Docker

## 1. Portability

Docker containers can run consistently across different environments.

```text
Developer
    │
    ▼
Docker Container
    │
    ├── Local Machine
    ├── Test Server
    ├── AWS
    └── Other Cloud
```

---

## 2. Consistent Environment

The application and its dependencies are packaged together.

This reduces environment-related compatibility problems.

---

## 3. Faster Deployment

Containers can generally be created and started much faster than traditional virtual machines.

---

## 4. Easy Maintenance

Applications and their dependencies can be packaged into versioned images.

For example:

```text
myapp:v1
myapp:v2
myapp:v3
```

This makes version management easier.

---

## 5. Scalability

Multiple containers can be created when application demand increases.

```text
             Load Balancer
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
   Container   Container   Container
       │           │           │
       └───────────┼───────────┘
                   ▼
              Application
```

---

# ⚠️ Important Docker Concepts

Before learning advanced Docker, understand these concepts:

```text
Docker
  │
  ├── Image
  │
  ├── Container
  │
  ├── Dockerfile
  │
  ├── Registry
  │
  ├── Volume
  │
  ├── Network
  │
  ├── Docker Compose
  │
  └── Docker Engine
```

---

# 📝 Interview Questions

### 1. What is Docker?

Docker is a containerization platform used to package, distribute, and run applications in isolated containers.

### 2. What is a Docker image?

A Docker image is a read-only template used to create containers.

### 3. What is a Docker container?

A container is a running instance of a Docker image.

### 4. Where are Docker images stored?

Docker images can be stored in container registries such as **Docker Hub** and **Amazon ECR**.

### 5. What is Amazon ECR?

Amazon ECR is AWS's managed container registry used to store and distribute container images.

### 6. What is Amazon ECS?

Amazon ECS is AWS's managed container orchestration service.

### 7. What is Amazon EKS?

Amazon EKS is AWS's managed Kubernetes service.

### 8. What is AWS Fargate?

AWS Fargate is a serverless compute engine that allows containers to run without managing the underlying EC2 servers.

### 9. Can Fargate work with ECS and EKS?

Yes. Fargate can provide serverless compute for workloads running on both ECS and EKS.

### 10. What problem does Docker solve?

Docker helps package applications and their dependencies into portable containers, providing more consistent behavior across different environments.

---

# 🧠 Easy Way to Remember

```text
             DOCKER
                │
                ▼
        Package Application
                │
                ▼
          Docker Image
                │
                ▼
        Container Registry
          │            │
          ▼            ▼
      Docker Hub      ECR
          │            │
          └──────┬─────┘
                 ▼
          Container Platform
             │         │
             ▼         ▼
            ECS       EKS
             │         │
             └────┬────┘
                  ▼
               Fargate
                  │
                  ▼
             Containers
```

### One-Line Memory Trick

```text
Docker  → Build & Run Containers
ECR     → Store Images
ECS     → Manage Containers
EKS     → Manage Kubernetes
Fargate → Run Containers Without Managing Servers
```

---

# 🎓 What I Learned

Through this Docker topic, I learned:

* What Docker is
* Containerization
* Docker images
* Docker containers
* Docker registries
* Docker Hub
* Amazon ECR
* Amazon ECS
* Amazon EKS
* AWS Fargate
* Dockerfile
* Basic Docker commands
* Docker image and container workflow
* Docker deployment on AWS
* Container orchestration concepts

---

# 🏁 Conclusion

Docker makes it easier to **package, deploy, and run applications consistently across different environments**.

The basic workflow is:

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
Container Registry
     │
     ├── Docker Hub
     └── Amazon ECR
             │
             ▼
       ECS / EKS / Fargate
             │
             ▼
        Running Container
```

The most important concepts to remember are:

> **Docker builds and runs containers.**

> **ECR stores container images.**

> **ECS manages containers using AWS's orchestration platform.**

> **EKS provides managed Kubernetes.**

> **Fargate provides serverless compute for containers.**
