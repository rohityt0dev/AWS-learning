# 💽 Lab: Mount a New Amazon EBS Volume in Linux

In this lab, you will learn how to format, mount, and permanently configure a newly attached Amazon EBS volume on an Amazon Linux EC2 instance.

---

# 🎯 Objective

- Verify the newly attached EBS volume
- Create a filesystem
- Mount the volume
- Verify the mount
- Configure automatic mounting after reboot

---

# 🛠️ Services Used

- Amazon EC2
- Amazon EBS
- Amazon Linux 2023

---

# 🏗️ Architecture

```text
          Amazon EC2 Instance
                  │
                  │
          Attached EBS Volume
             (/dev/xvdf)
                  │
          Create Filesystem
                  │
                  ▼
            Mount to /data
                  │
                  ▼
      Persistent Mount (/etc/fstab)
```

---

# 🚀 Step 1: Connect to the EC2 Instance

Connect to your EC2 instance using SSH.

```bash
ssh -i key.pem ec2-user@<Public-IP>
```

Example:

```bash
ssh -i my-key.pem ec2-user@13.234.xxx.xxx
```

---

# 🔍 Step 2: Verify the New Disk

List all block devices.

```bash
lsblk
```

Example Output

```text
NAME      MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
xvda      202:0    0   8G  0 disk
└─xvda1   202:1    0   8G  0 part /

xvdf      202:80   0  10G  0 disk
```

### Explanation

| Device | Description |
|----------|-------------|
| /dev/xvda | Root EBS Volume |
| /dev/xvda1 | Root Partition |
| /dev/xvdf | Newly Attached EBS Volume |

Since **/dev/xvdf** has no mount point, it has not been mounted yet.

---

# 📀 Step 3: Check if the Disk Has a Filesystem

Run:

```bash
sudo file -s /dev/xvdf
```

Example Output

```text
/dev/xvdf: data
```

### Explanation

The output **data** indicates that the volume is new and does not contain a filesystem.

---

# 🗂️ Step 4: Format the EBS Volume

### Using XFS (Recommended for Amazon Linux)

```bash
sudo mkfs -t xfs /dev/xvdf
```

### Or Using ext4

```bash
sudo mkfs.ext4 /dev/xvdf
```

> **Note:** Formatting erases all existing data on the volume.

---

# 📁 Step 5: Create a Mount Point

Create a directory where the volume will be mounted.

```bash
sudo mkdir /data
```

You can choose any directory name, such as:

- `/data`
- `/backup`
- `/appdata`

---

# 🔗 Step 6: Mount the Volume

Mount the EBS volume.

```bash
sudo mount /dev/xvdf /data
```

The volume is now accessible through the `/data` directory.

---

# ✅ Step 7: Verify the Mount

Check mounted file systems.

```bash
df -h
```

Example Output

```text
Filesystem      Size  Used Avail Use% Mounted on
/dev/xvda1       8G    2G    6G   25% /
/dev/xvdf       10G   75M   10G    1% /data
```

Or verify using:

```bash
mount | grep data
```

---

# 🆔 Step 8: Get the UUID

Retrieve the UUID of the volume.

```bash
sudo blkid
```

Example Output

```text
/dev/xvdf: UUID="3e5c-45ab-9b4d" TYPE="xfs"
```

The UUID uniquely identifies the filesystem and is recommended for persistent mounting.

---

# 💾 Step 9: Make the Mount Persistent

Edit the **fstab** file.

```bash
sudo nano /etc/fstab
```

### For XFS

```text
UUID=3e5c-45ab-9b4d /data xfs defaults,nofail 0 2
```

### For ext4

```text
UUID=3e5c-45ab-9b4d /data ext4 defaults,nofail 0 2
```

Save the file.

- Press `CTRL + O`
- Press `ENTER`
- Press `CTRL + X`

---

# 🧪 Step 10: Verify the fstab Configuration

Before rebooting, verify the configuration.

```bash
sudo mount -a
```

If no errors are displayed, the configuration is correct.

Check again:

```bash
df -h
```

The EBS volume should still be mounted at:

```text
/data
```

---

# ✅ Expected Result

After completing this lab:

- The new EBS volume is detected.
- A filesystem is created.
- The volume is mounted successfully.
- The mount point appears in `df -h`.
- The volume automatically mounts after every system reboot.

---

# 💻 Commands Used

Connect to EC2

```bash
ssh -i key.pem ec2-user@<Public-IP>
```

List block devices

```bash
lsblk
```

Check filesystem

```bash
sudo file -s /dev/xvdf
```

Format using XFS

```bash
sudo mkfs -t xfs /dev/xvdf
```

Format using ext4

```bash
sudo mkfs.ext4 /dev/xvdf
```

Create mount point

```bash
sudo mkdir /data
```

Mount volume

```bash
sudo mount /dev/xvdf /data
```

Verify mount

```bash
df -h
```

```bash
mount | grep data
```

Get UUID

```bash
sudo blkid
```

Edit fstab

```bash
sudo nano /etc/fstab
```

Verify fstab

```bash
sudo mount -a
```

---

# 📚 Learning Outcomes

After completing this lab, you will understand:

- How to detect a newly attached EBS volume
- How to create a filesystem on an EBS volume
- How to mount an EBS volume in Linux
- How to verify mounted filesystems
- How to use UUIDs for persistent storage
- How to configure automatic mounting using `/etc/fstab`
- Best practices for managing persistent storage on Amazon EC2
