# 💻 Lab: Configure AWS CLI

The AWS Command Line Interface (AWS CLI) is a command-line tool that allows you to interact with AWS services using terminal commands instead of the AWS Management Console.

AWS CLI enables you to automate tasks, manage AWS resources, and build scripts for cloud administration.

---

# 🎯 Objective

- Install AWS CLI
- Verify the installation
- Create IAM Access Keys
- Configure AWS CLI
- Connect the CLI to your AWS account

---

# 🛠️ Services Used

- AWS CLI
- AWS Identity and Access Management (IAM)

---

# 🏗️ Architecture

```text
             User
               │
               ▼
        AWS CLI (Terminal)
               │
     Access Key + Secret Key
               │
               ▼
          AWS IAM User
               │
               ▼
          AWS Services
```

---

# 🚀 Install AWS CLI

## Windows

1. Download the AWS CLI installer from the official AWS website.
2. Run the installer.
3. Complete the installation.

Verify the installation:

```bash
aws --version
```

Example Output

```text
aws-cli/2.31.6 Python/3.13 Windows/10 exe/AMD64
```

---

## Amazon Linux

Download the installer:

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
```

Extract the ZIP file:

```bash
unzip awscliv2.zip
```

Install AWS CLI:

```bash
sudo ./aws/install
```

Verify the installation:

```bash
aws --version
```

Example Output

```text
aws-cli/2.x.x Python/3.x Linux/x86_64
```

---

# 🔑 Create an IAM User with Access Keys

Navigate to:

```text
AWS Console
     ↓
IAM
     ↓
Users
     ↓
Select or Create User
     ↓
Security Credentials
     ↓
Create Access Key
```

AWS generates:

```text
Access Key ID

Secret Access Key
```

Example:

```text
Access Key ID:
AKIAIOSFODNN7EXAMPLE

Secret Access Key:
wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

> **Important:** The **Secret Access Key** is displayed only once. Store it securely.

---

# ⚙️ Configure AWS CLI

Run:

```bash
aws configure
```

Enter the requested information:

```text
AWS Access Key ID [None]:
AKIAIOSFODNN7EXAMPLE

AWS Secret Access Key [None]:
wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

Default region name [None]:
ap-south-1

Default output format [None]:
json
```

AWS CLI stores these credentials locally in your user profile.

---

# 📂 AWS CLI Configuration Files

After configuration, AWS CLI creates the following files:

### Credentials File

```text
~/.aws/credentials
```

Example:

```ini
[default]
aws_access_key_id = AKIAIOSFODNN7EXAMPLE
aws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

---

### Config File

```text
~/.aws/config
```

Example:

```ini
[default]
region = ap-south-1
output = json
```

---

# 🧪 Verify the Configuration

Check the configured IAM user:

```bash
aws sts get-caller-identity
```

Example Output:

```json
{
  "UserId": "AIDAEXAMPLE123456789",
  "Account": "123456789012",
  "Arn": "arn:aws:iam::123456789012:user/rohit"
}
```

If the command returns your account details, the AWS CLI is configured successfully.

---

# ✅ Expected Result

After completing this lab:

- AWS CLI is installed successfully.
- IAM Access Keys are created.
- AWS CLI is configured with your credentials.
- You can access AWS services from the command line.
- The `aws sts get-caller-identity` command verifies the configuration.

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to install AWS CLI on Windows and Amazon Linux
- How to create IAM Access Keys
- How to configure AWS CLI
- Where AWS stores CLI credentials and configuration
- How to verify that AWS CLI is working correctly

---

# ⚠️ Best Practices

- Never share your **Access Key ID** or **Secret Access Key**.
- Use IAM users instead of the AWS root account for CLI access.
- Rotate access keys regularly.
- Grant only the permissions required by following the **Principle of Least Privilege**.
- Store credentials securely and never commit them to GitHub or source code repositories.
