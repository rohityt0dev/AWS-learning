# AWS Lambda

## 📌 Introduction

**AWS Lambda** is a **serverless computing service** provided by **Amazon Web Services (AWS)** that allows you to run code in response to events without managing servers.

You upload your code, and AWS manages the underlying infrastructure, including:

* Server provisioning
* Infrastructure management
* Capacity
* Scaling
* Execution
* Availability

Lambda automatically scales your function based on incoming requests, and you are charged based on the resources and execution time used.

---

# ☁️ What is Serverless Computing?

**Serverless** does not mean that servers don't exist.

It means that **AWS manages the servers and infrastructure for you**, while you focus on writing and running your application code.

### Traditional Server-Based Application

```text
Developer
    │
    ▼
EC2 Server
    │
    ├── Install OS
    ├── Configure Runtime
    ├── Manage Server
    ├── Configure Scaling
    └── Maintain Infrastructure
```

### AWS Lambda

```text
Developer
    │
    │ Upload Code
    ▼
AWS Lambda
    │
    ├── Infrastructure Managed by AWS
    ├── Automatic Scaling
    └── Event-Based Execution
```

---

# ⚙️ How AWS Lambda Works

Lambda functions are usually triggered by an **event**.

The basic workflow is:

```text
Event
  │
  ▼
Lambda Function
  │
  ▼
Execute Code
  │
  ▼
Return Result
```

For example:

```text
User Uploads Image
        │
        ▼
       S3
        │
        │ Event
        ▼
   AWS Lambda
        │
        ▼
Resize Image
        │
        ▼
Store Processed Image
```

---

# 🔔 Lambda Event-Driven Architecture

Lambda is commonly used in **event-driven architectures**.

An event can come from many AWS services or applications.

Examples include:

* Amazon S3
* Amazon API Gateway
* Amazon EventBridge
* Amazon SQS
* Amazon SNS
* Amazon DynamoDB
* CloudWatch Events / EventBridge
* Application events

Example:

```text
              Event Source
                   │
          ┌────────┼────────┐
          │        │        │
         S3       SQS      API
          │        │        │
          └────────┼────────┘
                   ▼
              AWS Lambda
                   │
                   ▼
              Execute Code
```

---

# 🚀 Key Features

## 1. Serverless

You don't need to manage servers for the Lambda function.

AWS manages the underlying infrastructure.

---

## 2. Automatic Scaling

Lambda automatically creates additional execution environments when the number of requests increases.

```text
Low Traffic

Requests
   │
   ▼
Lambda
   │
   ▼
Few Executions
```

During high traffic:

```text
High Traffic
     │
     ▼
   Lambda
     │
 ┌───┼───┬───┐
 ▼   ▼   ▼   ▼
Fn  Fn  Fn  Fn
```

This allows Lambda applications to scale automatically.

---

## 3. Pay for Usage

Lambda follows a usage-based pricing model.

You generally pay based on factors such as:

* Number of requests
* Amount of compute time used
* Configured memory/resources

This can be cost-effective for workloads that run periodically or only when events occur.

---

## 4. Event-Driven

Lambda functions can automatically execute when an event occurs.

Example:

```text
New Image Uploaded
        │
        ▼
       S3
        │
        ▼
     Lambda
        │
        ▼
Resize Image
```

---

# 🧑‍💻 Supported Programming Languages

AWS Lambda supports several programming languages and runtimes.

Common examples include:

* Python
* Node.js
* Java
* Go
* .NET
* Ruby

Lambda also supports **custom runtimes**, allowing additional languages and runtime environments.

---

# 🎯 When to Use AWS Lambda?

Lambda is particularly useful when your application logic can be triggered by events and doesn't require a continuously running server.

---

## 1. 🖼️ Image Processing

Suppose users upload images to your application.

You can configure S3 to trigger a Lambda function whenever a new image is uploaded.

```text
User
 │
 │ Upload Image
 ▼
S3 Bucket
 │
 │ Event
 ▼
Lambda
 │
 ├── Resize
 ├── Compress
 └── Apply Processing
 │
 ▼
Processed Image
```

### Example

A user uploads:

```text
photo.jpg
```

Lambda automatically creates:

```text
photo-thumbnail.jpg
```

This is a common serverless image-processing pattern.

---

# 2. 🔄 Data Transformation

Lambda can process and transform data before storing or sending it somewhere else.

For example:

```text
Raw Data
   │
   ▼
Lambda
   │
   ├── Validate
   ├── Clean
   ├── Transform
   └── Format
   │
   ▼
Database / Storage
```

### Example

Incoming data:

```text
Name: rohit
Age: "25"
Country: india
```

Lambda could validate and transform the data before storing it in a database.

---

# 3. 🔔 Real-Time Notifications

Lambda can trigger notifications when an event occurs.

Example:

```text
New User Signup
       │
       ▼
   Application
       │
       ▼
     Lambda
       │
   ┌───┴────┐
   ▼        ▼
 Email     SMS
```

For example, when a new user registers, Lambda could process the event and initiate a notification workflow.

---

# 4. 🌐 Serverless APIs

Lambda is commonly combined with **Amazon API Gateway** to create serverless APIs.

```text
Client
  │
  │ HTTP Request
  ▼
API Gateway
  │
  ▼
Lambda
  │
  ▼
Application Logic
  │
  ▼
Database
```

Example:

```text
GET /users
      │
      ▼
API Gateway
      │
      ▼
Lambda
      │
      ▼
DynamoDB
      │
      ▼
Response
```

This architecture allows you to build APIs without managing traditional application servers.

---

# ⏰ Scheduled Tasks

Lambda can also be invoked on a schedule using services such as **Amazon EventBridge**.

Example:

```text
Every Day at 12:00 AM
          │
          ▼
      EventBridge
          │
          ▼
        Lambda
          │
          ▼
     Backup / Cleanup
```

Possible use cases:

* Cleanup jobs
* Report generation
* Scheduled data processing
* Automated maintenance
* Periodic API calls

---

# ⚠️ AWS Lambda Limitations

Lambda is powerful, but it is not suitable for every workload.

## 1. Execution Time Limit

A Lambda function has a **maximum execution timeout of 15 minutes**.

Therefore, Lambda is not suitable for workloads that require a single function invocation to run continuously for longer than this limit.

For long-running workloads, consider alternatives such as:

* Amazon EC2
* Amazon ECS
* AWS Batch
* AWS Step Functions for orchestrating multiple steps

---

# 2. Stateless

Lambda functions are designed to be **stateless**.

This means you should not depend on one invocation storing application state for the next invocation.

```text
Invocation 1
    │
    ▼
Lambda
    │
    X
 State should not be relied upon
    │
    ▼
Invocation 2
```

For persistent state, use external services such as:

* Amazon DynamoDB
* Amazon S3
* Amazon RDS
* Amazon ElastiCache

### Important

A Lambda execution environment may sometimes be reused, but your application **must not depend on that reuse** for persistent state.

---

# 3. 🥶 Cold Start

A **cold start** can happen when AWS needs to create a new execution environment for your Lambda function.

This can introduce additional startup latency.

```text
Request
   │
   ▼
No Existing Execution Environment
   │
   ▼
Create Environment
   │
   ▼
Initialize Runtime
   │
   ▼
Run Function
```

Subsequent requests may use an already initialized environment:

```text
Request
   │
   ▼
Existing Environment
   │
   ▼
Run Function
```

The additional startup time is known as **cold-start latency**.

For latency-sensitive workloads, AWS provides features and architectural approaches that can help reduce its impact.

---

# 📊 AWS Lambda vs EC2

| Feature                   | AWS Lambda             | Amazon EC2                        |
| ------------------------- | ---------------------- | --------------------------------- |
| Service Model             | Serverless / FaaS      | IaaS                              |
| Server Management         | AWS manages servers    | User manages server               |
| Scaling                   | Automatic              | Configure/manage                  |
| Billing                   | Usage-based            | Instance/resource based           |
| Execution                 | Event-driven           | Continuously running or on-demand |
| Maximum Function Duration | 15 minutes             | Can run continuously              |
| OS Management             | AWS managed            | User managed                      |
| Infrastructure Control    | Lower                  | High                              |
| Best For                  | Event-driven workloads | Long-running applications         |

---

# 🏗️ Lambda Architecture Example

A common serverless web application architecture:

```text
                     Users
                       │
                       ▼
                API Gateway
                       │
                       ▼
                  AWS Lambda
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
          DynamoDB             S3
              │
              ▼
           Database
```

This architecture eliminates the need to maintain traditional application servers for the API layer.

---

# 🔐 Security

Lambda functions use **IAM execution roles** to access other AWS services.

Example:

```text
Lambda Function
      │
      ▼
IAM Execution Role
      │
      ├── Read S3
      └── Write DynamoDB
```

Follow the **principle of least privilege**.

For example, if a function only needs to read objects from an S3 bucket, don't give it permission to delete objects.

### Security Best Practices

* Use IAM roles instead of hard-coded AWS credentials.
* Follow least-privilege permissions.
* Encrypt sensitive data.
* Avoid storing secrets directly in source code.
* Use AWS Secrets Manager or Parameter Store where appropriate.
* Monitor Lambda logs using CloudWatch.
* Keep dependencies updated.

---

# 🛠️ Basic Lambda Workflow

A typical Lambda development workflow:

```text
1. Write Function
       │
       ▼
2. Package Code
       │
       ▼
3. Create Lambda Function
       │
       ▼
4. Configure IAM Role
       │
       ▼
5. Configure Trigger
       │
       ▼
6. Test Function
       │
       ▼
7. Monitor Logs
```

---

# 🧪 Simple Python Lambda Example

```python
def lambda_handler(event, context):
    return {
        "statusCode": 200,
        "body": "Hello from AWS Lambda!"
    }
```

### Explanation

`event` contains information about the event that triggered the function.

`context` provides information about the Lambda execution environment and invocation.

The function returns a response:

```text
Status Code: 200
Body: Hello from AWS Lambda!
```

---

# 📈 Monitoring Lambda

AWS Lambda integrates with **Amazon CloudWatch**.

You can monitor information such as:

* Invocations
* Errors
* Duration
* Throttles
* Concurrent executions
* Logs

Example:

```text
Lambda
  │
  ▼
CloudWatch
  │
  ├── Metrics
  ├── Logs
  └── Alarms
```

---

# 🎯 When Lambda Is a Good Choice

Use Lambda when:

* The application is event-driven.
* Workloads are short-lived.
* Traffic can vary significantly.
* You don't want to manage servers.
* You need automatic scaling.
* You are building serverless APIs.
* You need lightweight automation.
* You need event processing.

---

# ❌ When Lambda May Not Be the Best Choice

Consider other services when:

* A single task must run longer than 15 minutes.
* You need full operating-system control.
* You need a continuously running process.
* Your workload requires specialized server configuration.
* You need persistent local state across invocations.

Possible alternatives include:

```text
Long-running application → EC2 / ECS

Containerized workload → ECS / EKS

Batch processing → AWS Batch

Workflow orchestration → Step Functions
```

---

# 📝 Interview Questions

### 1. What is AWS Lambda?

AWS Lambda is a serverless compute service that runs code in response to events without requiring users to manage servers.

### 2. Is Lambda serverless?

Yes. AWS manages the underlying compute infrastructure, while you focus on your function code and configuration.

### 3. What is the maximum Lambda execution time?

The maximum timeout for a single Lambda invocation is **15 minutes**.

### 4. What is a Lambda trigger?

A trigger is an event source that invokes a Lambda function.

Examples include S3, API Gateway, EventBridge, SQS, SNS, and DynamoDB.

### 5. What is a cold start?

A cold start occurs when AWS needs to initialize a new execution environment before running a Lambda function, which can add startup latency.

### 6. Is Lambda stateful or stateless?

Lambda functions should be treated as **stateless**. Persistent state should be stored in external services.

### 7. Can Lambda scale automatically?

Yes. Lambda automatically scales execution capacity based on incoming requests, subject to applicable concurrency limits and quotas.

### 8. What is the difference between Lambda and EC2?

EC2 provides virtual servers that you manage, while Lambda provides serverless function execution where AWS manages the underlying infrastructure.

---

# 🧠 Easy Way to Remember

```text
                 EVENT
                   │
                   ▼
              AWS Lambda
                   │
              Execute Code
                   │
                   ▼
                 RESULT
```

### Three Important Points

```text
1️⃣ No Server Management

2️⃣ Event-Driven Execution

3️⃣ Automatic Scaling
```

---

# 🎓 What I Learned

Through this AWS Lambda topic, I learned:

* What serverless computing means
* What AWS Lambda is
* Event-driven architecture
* Lambda triggers
* Automatic scaling
* Usage-based billing
* Image processing with Lambda
* Data transformation
* Real-time notifications
* Serverless APIs
* API Gateway + Lambda
* Lambda execution timeout
* Stateless architecture
* Cold starts
* IAM execution roles
* CloudWatch monitoring
* Lambda vs EC2

---

# 🏁 Conclusion

**AWS Lambda** is a powerful serverless compute service for running short-lived, event-driven workloads without managing servers.

The core concept is:

```text
              EVENT
                │
                ▼
        ┌───────────────┐
        │ AWS Lambda    │
        │               │
        │ Execute Code  │
        └───────┬───────┘
                │
                ▼
             RESULT
```

Instead of managing servers, you focus on the application logic while AWS manages the underlying infrastructure and automatically provides compute capacity as needed.

> **AWS Lambda = Run Code Without Managing Servers**
