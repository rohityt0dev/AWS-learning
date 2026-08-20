# 🌐 Python Website on AWS Lambda

## 📌 Project Overview

This project demonstrates how to deploy a simple **Python-based website using AWS Lambda** without managing an EC2 server.

The website is returned as an HTML response directly from a Lambda function. An **AWS Lambda Function URL** is used as the web endpoint, allowing users to access the website through a browser.

### Technologies Used

* AWS Lambda
* Python
* HTML
* CSS
* JavaScript
* AWS Lambda Function URL
* AWS IAM

---

# 🏗️ Architecture

The basic architecture is:

```text
                         INTERNET
                            │
                            ▼
                    ┌──────────────┐
                    │    Browser   │
                    └──────┬───────┘
                           │
                           │ HTTPS
                           ▼
                ┌──────────────────────┐
                │  Lambda Function URL │
                └──────────┬───────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │    AWS Lambda        │
                │                      │
                │  Python Function     │
                │  my-lambada-fuction  │
                └──────────┬───────────┘
                           │
                           ▼
                    HTML Response
                           │
                           ▼
                        Browser
```

### Important Concept

The **Lambda Function URL** acts as the HTTP/HTTPS endpoint for the Lambda function.

The browser sends a request to the Function URL, Lambda executes the Python function, and the function returns an HTML response.

---

# 🚀 Project Objective

The objective of this project is to learn how to:

* Create an AWS Lambda function
* Write Python Lambda code
* Return an HTML response
* Create a Lambda Function URL
* Access the application through a web browser
* Test the Lambda function
* Deploy changes
* Understand serverless web applications

---

# 📋 Prerequisites

Before starting, you need:

* An AWS account
* Basic Python knowledge
* Basic HTML/CSS knowledge
* Access to the AWS Lambda Console
* A web browser

---

# 1️⃣ Create the Lambda Function

Open the AWS Lambda Console:

[AWS Lambda Console](https://console.aws.amazon.com/lambda/?utm_source=chatgpt.com)

Select your AWS Region.

For this project:

```text
Region: Asia Pacific (Mumbai)
Region Code: ap-south-1
```

Then go to:

```text
Lambda
   │
   ▼
Functions
   │
   ▼
my-lambada-fuction
```

> Make sure you are working in the same AWS Region where your Lambda function was created.

---

# 2️⃣ Create the Python Lambda Code

Inside the Lambda function, open the **Code** section.

Create or use the Python file:

```text
lambda_function.py
```

> AWS Lambda normally uses `lambda_function.py` as the default Python module name. If you use another filename such as `lambadafunction.py`, make sure the Lambda **Handler** configuration matches it.

For example:

```text
lambadafunction.py
```

would require a handler such as:

```text
lambadafunction.lambda_handler
```

---

# 3️⃣ Add the Python Code

Add the following code:

```python
def lambda_handler(event, context):

    html = """
    <!DOCTYPE html>

    <html>

    <head>

        <meta charset="UTF-8">

        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">

        <title>My AWS Lambda Website</title>

        <style>

            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: #f4f7fb;
                text-align: center;
            }

            header {
                background: #232f3e;
                color: white;
                padding: 25px;
            }

            header h2 {
                margin: 0;
            }

            .container {
                padding: 60px 20px;
            }

            .card {
                background: white;
                max-width: 600px;
                margin: 30px auto;
                padding: 35px;
                border-radius: 12px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            }

            h1 {
                color: #232f3e;
                font-size: 42px;
            }

            p {
                font-size: 20px;
                color: #555;
            }

            button {
                background: #ff9900;
                border: none;
                padding: 15px 30px;
                font-size: 18px;
                border-radius: 8px;
                cursor: pointer;
            }

            button:hover {
                background: #ec8b00;
            }

            footer {
                margin-top: 50px;
                padding: 20px;
                background: #232f3e;
                color: white;
            }

        </style>

    </head>

    <body>

        <header>

            <h2>My AWS Website</h2>

        </header>

        <div class="container">

            <div class="card">

                <h1>Hello from AWS Lambda! 🚀</h1>

                <p>
                    This website is running using
                    Python and AWS Lambda.
                </p>

                <p>
                    No EC2 server required.
                </p>

                <button onclick="showMessage()">
                    Click Me
                </button>

                <p id="message"></p>

            </div>

        </div>

        <footer>

            Hosted with AWS Lambda

        </footer>

        <script>

            function showMessage() {

                document.getElementById("message").innerHTML =
                    "Lambda is working successfully! 🎉";

            }

        </script>

    </body>

    </html>
    """

    return {
        "statusCode": 200,

        "headers": {
            "Content-Type": "text/html; charset=UTF-8"
        },

        "body": html
    }
```

---

# 4️⃣ Deploy the Function

After adding or modifying the code:

### Click:

```text
Deploy
```

Wait for the deployment to complete.

You should see a message similar to:

```text
Successfully deployed
```

### ⚠️ Important

Whenever you make changes to the Lambda code, remember to click **Deploy**.

Otherwise, your latest code may not be used when you test the function.

---

# 5️⃣ Test the Lambda Function

You can test the function directly inside the Lambda Console.

Click:

```text
Test
```

Create a new test event.

Use an empty JSON event:

```json
{}
```

Then click:

```text
Test
```

You should receive a response similar to:

```text
StatusCode: 200
```

The response body should contain your HTML.

Example:

```text
{
    "statusCode": 200,
    "headers": {
        "Content-Type": "text/html; charset=UTF-8"
    },
    "body": "<!DOCTYPE html>..."
}
```

---

# 6️⃣ Create a Lambda Function URL

To make the Lambda function accessible from a browser, create a **Function URL**.

Inside your Lambda function:

```text
Lambda Function
      │
      ▼
Configuration
      │
      ▼
Function URL
```

Choose:

```text
Create function URL
```

For authentication, you can choose:

```text
Auth type: NONE
```

for a simple public learning project.

> ⚠️ A public Function URL allows anyone with the URL to invoke the function. Don't use `Auth type: NONE` for sensitive or production workloads without understanding the security and cost implications.

AWS may automatically create or update the required resource policy for public invocation.

---

# 7️⃣ Open the Website

After creating the Function URL, AWS provides a URL similar to:

```text
https://xxxxxxxx.lambda-url.ap-south-1.on.aws/
```

Copy the URL and open it in your browser.

You should see:

```text
┌─────────────────────────────────────────┐
│          My AWS Website                 │
├─────────────────────────────────────────┤
│                                         │
│     Hello from AWS Lambda! 🚀           │
│                                         │
│  This website is running using          │
│  Python and AWS Lambda.                 │
│                                         │
│       No EC2 server required.           │
│                                         │
│          [ Click Me ]                   │
│                                         │
│        Hosted with AWS Lambda           │
│                                         │
└─────────────────────────────────────────┘
```

When you click the button:

```text
Lambda is working successfully! 🎉
```

should appear on the page.

---

# 🔄 How the Request Works

When you open the website:

```text
Browser
   │
   │ HTTPS Request
   ▼
Lambda Function URL
   │
   ▼
AWS Lambda
   │
   ▼
lambda_handler()
   │
   ▼
Generate HTML
   │
   ▼
HTTP Response
   │
   ▼
Browser
```

---

# 🧠 Understanding the Python Function

The main Lambda function is:

```python
def lambda_handler(event, context):
```

There are two parameters:

### `event`

Contains information about the event/request that invoked the Lambda function.

### `context`

Contains information about the Lambda execution environment and invocation.

---

# 📤 Returning an HTTP Response

The function returns:

```python
return {
    "statusCode": 200,
    "headers": {
        "Content-Type": "text/html; charset=UTF-8"
    },
    "body": html
}
```

### `statusCode`

```text
200
```

means the request was successful.

### `Content-Type`

```text
text/html
```

tells the browser that the response contains HTML.

### `body`

```text
html
```

contains the actual website content.

---

# 📁 Project Structure

For the GitHub repository, you can organize the project like this:

```text
python-lambda-website/
│
├── README.md
│
├── lambda_function.py
│
└── screenshots/
    ├── lambda-function.png
    ├── lambda-test.png
    ├── function-url.png
    └── website.png
```

---

# 🔐 Security

For a learning project, a public Function URL is convenient.

For production applications, consider:

* Authentication
* Authorization
* IAM
* API Gateway
* AWS WAF where appropriate
* Least-privilege permissions
* Logging and monitoring
* Input validation
* Rate limiting

Avoid placing AWS access keys, passwords, or other secrets directly inside your Python code.

---

# 📊 Lambda Architecture vs EC2

## Traditional EC2 Website

```text
Internet
   │
   ▼
EC2
   │
   ├── Operating System
   ├── Runtime
   ├── Application
   ├── Security
   ├── Scaling
   └── Server Maintenance
```

## Lambda Website

```text
Internet
   │
   ▼
Function URL
   │
   ▼
AWS Lambda
   │
   ▼
Python Application
```

With Lambda, AWS manages the underlying compute infrastructure.

---

# 💰 Cost Consideration

AWS Lambda uses a usage-based pricing model.

For a small learning project with very little traffic, usage may remain within applicable AWS Free Tier allowances, but **always check your current AWS pricing and Free Tier eligibility** because these can change.

Also remember that other AWS resources or services you create can incur charges.

---

# 🧪 Troubleshooting

## Problem 1 — Lambda returns an error

Check:

```text
Lambda
  │
  ▼
Monitor
  │
  ▼
CloudWatch Logs
```

Look for Python errors or configuration problems.

---

## Problem 2 — HTML appears as text

Check that your response contains:

```python
"Content-Type": "text/html; charset=UTF-8"
```

---

## Problem 3 — Changes are not appearing

Make sure you clicked:

```text
Deploy
```

after modifying the Lambda code.

---

## Problem 4 — Function URL doesn't work

Check:

* Function URL exists
* URL is correct
* Authentication settings
* Lambda resource policy
* Lambda function is in the expected region
* CloudWatch logs for errors

---

# 🎯 Project Learning Outcomes

After completing this project, you should understand:

* AWS Lambda
* Serverless computing
* Python Lambda functions
* Lambda handlers
* Lambda Function URLs
* HTTP responses
* HTML responses from Lambda
* Event-driven architecture
* Basic IAM concepts
* CloudWatch logging
* Serverless web applications

---

# 📝 Interview Questions

### 1. What is AWS Lambda?

AWS Lambda is a serverless compute service that runs code in response to events without requiring you to manage servers.

### 2. What is a Lambda Function URL?

A Function URL provides an HTTPS endpoint that can invoke a Lambda function directly.

### 3. Can Lambda return HTML?

Yes. A Lambda function can return an HTTP response with:

```text
Content-Type: text/html
```

and an HTML document in the response body.

### 4. Do you need EC2 for this project?

No. The website can be served through Lambda using a Lambda Function URL.

### 5. What is the Lambda handler?

The handler is the function that AWS invokes when the Lambda function runs.

For example:

```text
lambda_function.lambda_handler
```

means:

```text
File: lambda_function.py
Function: lambda_handler
```

### 6. What happens when a user opens the Function URL?

The request reaches the Lambda Function URL, Lambda invokes the function, the Python code generates an HTTP response, and the browser renders the returned HTML.

---

# 🏁 Final Architecture

```text
                         🌐 INTERNET
                              │
                              ▼
                       ┌─────────────┐
                       │   Browser   │
                       └──────┬──────┘
                              │
                              │ HTTPS
                              ▼
                 ┌────────────────────────┐
                 │ Lambda Function URL    │
                 └────────────┬───────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │      AWS Lambda        │
                 │                        │
                 │      Python            │
                 │  lambda_handler()      │
                 └────────────┬───────────┘
                              │
                              ▼
                       HTML Response
                              │
                              ▼
                       🌐 Browser
```

---

# 🎓 Key Takeaways

```text
AWS Lambda
     │
     ├── Serverless Compute
     │
     ├── Runs Python Code
     │
     ├── Automatically Scales
     │
     ├── Event Driven
     │
     └── No EC2 Server Required

Lambda Function URL
     │
     └── Provides HTTPS Endpoint
```

### One-Line Summary

> **This project demonstrates how to build and deploy a simple Python website using AWS Lambda and expose it to the internet through a Lambda Function URL, without managing an EC2 server.**

---

## 👨‍💻 Author

**Rohit Tambadkar**

AWS & DevOps Learning Repository

---

⭐ If this project helped you learn AWS Lambda, consider giving the repository a star.

