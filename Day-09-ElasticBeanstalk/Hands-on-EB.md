# AWS Elastic Beanstalk – Python Application Deployment

AWS Elastic Beanstalk is an AWS service that makes it easy to deploy, manage, and scale web applications without manually managing the underlying infrastructure.

This project demonstrates how to deploy a simple **Python web application** using **AWS Elastic Beanstalk**, configure a single-instance environment, verify application health, access the application, and deploy a new application version.

---

## 🎯 Objective

The objectives of this project are:

* Create an AWS Elastic Beanstalk application
* Create a Web Server Environment
* Select the Python platform
* Create a Python application ZIP bundle
* Configure a Single Instance environment
* Deploy the application
* Monitor environment health
* Access the application through the Elastic Beanstalk URL
* Deploy a new application version

---

## 🛠️ AWS Services Used

* **AWS Elastic Beanstalk** – Application deployment and environment management
* **Amazon EC2** – Runs the Python application
* **Amazon S3** – Stores application versions and deployment artifacts
* **AWS CloudFormation** – Creates and manages environment resources
* **Amazon CloudWatch** – Monitoring and logs
* **Amazon VPC** – Networking
* **Security Groups** – Controls network traffic

---

# 🏗️ Architecture

```text
                    Internet
                       │
                       ▼
             AWS Elastic Beanstalk
                       │
                       ▼
                  EC2 Instance
                       │
                       ▼
              Python Web Application
                       │
                       ▼
                  Application
```

Elastic Beanstalk manages the underlying AWS infrastructure required to run the application.

---

# 📁 Project Structure

```text
SimplePythonApp/
│
├── application.py
├── requirements.txt
├── .ebignore
└── simplepythonapp.zip
```

> **Important:** When creating the ZIP file, the application files should be at the root of the ZIP.

Correct:

```text
simplepythonapp.zip
│
├── application.py
├── requirements.txt
└── .ebignore
```

Avoid:

```text
simplepythonapp.zip
└── SimplePythonApp/
    ├── application.py
    ├── requirements.txt
    └── .ebignore
```

---

# 🐍 Python Application

Example `application.py`:

```python
from flask import Flask

application = Flask(__name__)

@application.route("/")
def home():
    return "Hello from SimplePythonApp on AWS Elastic Beanstalk!"

if __name__ == "__main__":
    application.run(host="0.0.0.0", port=5000)
```

---

# 📦 requirements.txt

The application requires Flask.

```text
Flask
```

Elastic Beanstalk installs the packages listed in `requirements.txt` during deployment.

---

# 🚀 Deployment Steps

## Step 1: Open Elastic Beanstalk

Sign in to the AWS Management Console.

Search for:

```text
Elastic Beanstalk
```

Open the service.

Go to:

```text
Applications
    ↓
Create application
```

---

## Step 2: Create Application

For **Application name**, enter:

```text
SimplePythonApp
```

For **Environment tier**, select:

```text
Web server environment
```

---

## Step 3: Configure Platform

For **Platform**, select:

```text
Python
```

Choose a currently supported Python platform version available in your AWS Region.

Example:

```text
Python 3.x running on 64bit Amazon Linux 2023
```

The exact available Python version may change over time, so select the supported version shown in your AWS Console.

---

## Step 4: Upload Application Code

Under **Application code**, select:

```text
Upload your code
```

Click:

```text
Choose file
```

Select:

```text
simplepythonapp.zip
```

Example version label:

```text
simplepythonapp-v1
```

---

## Step 5: Configure Service Access

Elastic Beanstalk requires IAM roles to manage the environment and EC2 instances.

If AWS asks you to create or select roles, use the roles recommended by AWS.

Example:

```text
aws-elasticbeanstalk-service-role
aws-elasticbeanstalk-ec2-role
```

---

## Step 6: Configure Networking

For a basic learning project, the **Default VPC** can be used.

Example:

```text
VPC:
Default VPC
```

Select suitable subnets in your Availability Zones.

Example:

```text
ap-south-1a
ap-south-1b
```

---

## Step 7: Configure Environment Type

For this learning project:

```text
Environment Type:
Single instance
```

Example instance type:

```text
t3.micro
```

A different instance type can be selected depending on your requirements and AWS Region availability.

---

## Step 8: Configure Security Group

HTTP traffic must be allowed so users can access the web application.

Example:

| Type | Protocol | Port | Source      |
| ---- | -------- | ---: | ----------- |
| HTTP | TCP      |   80 | `0.0.0.0/0` |

SSH is only required if you need direct access to the underlying EC2 instance.

Example:

| Type | Protocol | Port | Source  |
| ---- | -------- | ---: | ------- |
| SSH  | TCP      |   22 | Your IP |

> **Security Best Practice:** Avoid allowing SSH from `0.0.0.0/0`. Restrict SSH access to your own IP address whenever possible.

---

# 🔍 Step 9: Review Configuration

Before creating the environment, verify the configuration.

Example:

```text
Application Name    : SimplePythonApp
Environment Tier    : Web server environment
Platform            : Python
Operating System    : Amazon Linux 2023
Environment Type    : Single instance
Instance Type       : t3.micro
Application Code    : simplepythonapp.zip
```

Click:

```text
Create environment
```

---

# ⚙️ Step 10: Environment Creation

Elastic Beanstalk automatically creates and configures the required AWS resources.

Typical resources include:

```text
AWS Elastic Beanstalk
        │
        ├── EC2 Instance
        │
        ├── Security Group
        │
        ├── S3
        │
        ├── CloudFormation
        │
        └── CloudWatch
```

The Python application runs on the EC2 instance managed by Elastic Beanstalk.

---

# 💚 Step 11: Check Environment Health

After deployment, open the Elastic Beanstalk environment.

Check:

```text
Health: Green
```

A **Green** health status generally indicates that the environment is operating normally.

---

# 🌐 Step 12: Access the Application

On the Elastic Beanstalk environment page, find the environment URL.

Example:

```text
http://SimplePythonApp-env.ap-south-1.elasticbeanstalk.com
```

Open the URL in a web browser.

Expected output:

```text
Hello from SimplePythonApp on AWS Elastic Beanstalk!
```

---

# 🔄 Deploy a New Application Version

After modifying the application:

```text
application.py
```

Create a new ZIP file.

Example:

```text
simplepythonapp.zip
```

Then go to:

```text
Elastic Beanstalk
      ↓
Your Environment
      ↓
Upload and deploy
```

Select:

```text
simplepythonapp.zip
```

Use a new version label:

```text
simplepythonapp-v2
```

Click:

```text
Deploy
```

Elastic Beanstalk deploys the new version to the existing environment.

---

# 🔁 Application Deployment Flow

```text
Python Application
       │
       ▼
Create ZIP Bundle
       │
       ▼
Upload to Elastic Beanstalk
       │
       ▼
Elastic Beanstalk Environment
       │
       ▼
EC2 Instance
       │
       ▼
Python Web Application
       │
       ▼
Elastic Beanstalk URL
       │
       ▼
End User
```

---

# 🔄 Existing Environment

If an Elastic Beanstalk environment already exists, there is no need to create another environment for every application update.

Use:

```text
Elastic Beanstalk
      ↓
Environments
      ↓
SimplePythonApp-env
      ↓
Upload and deploy
```

Upload the new ZIP file and provide a new version label.

Example:

```text
simplepythonapp-v2
```

---

# 📋 Example Environment Configuration

| Setting           | Example               |
| ----------------- | --------------------- |
| Application       | `SimplePythonApp`     |
| Environment       | `SimplePythonApp-env` |
| Health            | Green                 |
| Platform          | Python                |
| Operating System  | Amazon Linux 2023     |
| Environment Type  | Single instance       |
| Instance Type     | `t3.micro`            |
| Monitoring        | Basic                 |
| Deployment Policy | All at once           |

> Configuration options can vary depending on the AWS Region and currently supported Elastic Beanstalk platform versions.

---

# ⚠️ Important: Application File Name

For Python Elastic Beanstalk applications, make sure your application is configured with the expected WSGI entry point.

For example:

```python
application = Flask(__name__)
```

If your file is:

```text
application.py
```

and contains:

```python
application = Flask(__name__)
```

Elastic Beanstalk can use the application as the WSGI entry point.

---

# ⚠️ Important: PYTHONPATH

For a simple Flask Elastic Beanstalk application, you normally do **not** need to manually configure:

```text
PYTHONPATH
```

Keep the application structure simple:

```text
simplepythonapp.zip
│
├── application.py
├── requirements.txt
└── .ebignore
```

---

# 📊 Deployment Verification

After deployment, verify the following:

```text
Application Created       ✓
Python Platform           ✓
ZIP Uploaded              ✓
Environment Created       ✓
EC2 Instance Running      ✓
Health Status Green       ✓
Application URL Working   ✓
Version Deployment        ✓
```

---

# 🧪 Testing

Open the Elastic Beanstalk URL:

```text
http://SimplePythonApp-env.ap-south-1.elasticbeanstalk.com
```

Expected response:

```text
Hello from SimplePythonApp on AWS Elastic Beanstalk!
```

You can also test the URL from Linux:

```bash
curl http://SimplePythonApp-env.ap-south-1.elasticbeanstalk.com
```

Expected output:

```text
Hello from SimplePythonApp on AWS Elastic Beanstalk!
```

---

# 🧹 Cleanup

AWS Elastic Beanstalk creates AWS resources that may incur charges depending on your configuration.

When the lab is complete, terminate the environment if it is no longer required.

Go to:

```text
Elastic Beanstalk
      ↓
Environments
      ↓
SimplePythonApp-env
      ↓
Actions
      ↓
Terminate environment
```

Also check for any remaining AWS resources that were created separately.

---

# 📚 Learning Outcomes

After completing this project, you will understand:

* What AWS Elastic Beanstalk is
* How Elastic Beanstalk simplifies application deployment
* How to deploy a Python application
* How to create a Python ZIP source bundle
* How `requirements.txt` is used
* How Elastic Beanstalk manages EC2 infrastructure
* How to configure a single-instance environment
* How Security Groups control HTTP/SSH access
* How to monitor environment health
* How to access an application using the Elastic Beanstalk URL
* How to deploy new application versions
* How to terminate an Elastic Beanstalk environment after completing a lab

---

# 🎯 DevOps Skills Demonstrated

This project demonstrates practical experience with:

```text
AWS
│
├── Elastic Beanstalk
├── EC2
├── S3
├── CloudFormation
├── CloudWatch
├── VPC
└── Security Groups

Application
│
├── Python
├── Flask
├── WSGI
└── requirements.txt

DevOps
│
├── Application Deployment
├── Version Management
├── Infrastructure Management
├── Monitoring
└── Cloud Deployment
```

---

# ⭐ Project Summary

**Project:** Python Application Deployment using AWS Elastic Beanstalk

**Platform:** AWS

**Application:** Python Flask

**Environment:** Web Server Environment

**Deployment Type:** Single Instance

**Operating System:** Amazon Linux 2023

**Compute:** Amazon EC2

**Deployment Artifact:** ZIP source bundle

**Monitoring:** Amazon CloudWatch

**Infrastructure Management:** AWS Elastic Beanstalk

---

## 👨‍💻 Author

**Rohit Tambadkar**

Cloud & DevOps Learner

---

## ⭐ If You Found This Project Useful

If this project helped you understand AWS Elastic Beanstalk, consider giving the repository a ⭐ on GitHub.
