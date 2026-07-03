# 💽 Lab: Unmount an Amazon EBS Volume in Linux

In this lab, you will learn how to safely unmount an Amazon EBS volume from a Linux EC2 instance before detaching it from AWS.

> **Important:** Always unmount the filesystem before detaching an EBS volume to prevent data corruption.

---

# 🎯 Objective

- Check mounted filesystems
- Unmount an EBS volume
- Verify the volume is successfully unmounted

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
          Mounted EBS Volume
             (/dev/xvdf)
                  │
                  ▼
            Mounted on /data
                  │
                  ▼
          Unmount the Volume
                  │
                  ▼
         Ready to Detach/Delete
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

# 🔍 Step 2: Check Mounted Filesystems

Before unmounting, verify where the EBS volume is mounted.

### Option 1: Using `df -h`

```bash
df -h
```

---

### Option 2: Using `mount`

```bash
mount
```

---

### Option 3: Using `lsblk`

```bash
lsblk
```

Example Output

```text
NAME      SIZE MOUNTPOINT
xvda        8G /
xvdf       20G /data
```

### Explanation

| Device | Mount Point |
|----------|-------------|
| /dev/xvda | `/` (Root Volume) |
| /dev/xvdf | `/data` (EBS Volume) |

Here, the EBS volume **/dev/xvdf** is mounted on **/data**.

---

# 🔓 Step 3: Unmount the Volume

You can unmount the volume using either the **mount point** or the **device name**.

### Using the Mount Point

```bash
sudo umount /data
```

### Using the Device Name

```bash
sudo umount /dev/xvdf
```

> **Note:** The correct Linux command is **`umount`**, not **`unmount`**.

---

# ✅ Step 4: Verify the Volume is Unmounted

Run:

```bash
lsblk
```

Example Output

```text
NAME      SIZE MOUNTPOINT
xvda        8G /
xvdf       20G
```

Notice that the **MOUNTPOINT** column for **xvdf** is now empty.

You can also verify using:

```bash
df -h
```

The `/data` mount point should no longer appear in the output.

---

# 💻 Commands Used

Connect to EC2

```bash
ssh -i key.pem ec2-user@<Public-IP>
```

Check mounted filesystems

```bash
df -h
```

```bash
mount
```

```bash
lsblk
```

Unmount using mount point

```bash
sudo umount /data
```

Unmount using device name

```bash
sudo umount /dev/xvdf
```

Verify unmount

```bash
lsblk
```

```bash
df -h
```

---

# ✅ Expected Result

After completing this lab:

- The EBS volume is successfully unmounted.
- The mount point no longer appears in `df -h`.
- The `MOUNTPOINT` column is empty in `lsblk`.
- The volume is now safe to detach from the EC2 instance using the AWS Console.

---

# ⚠️ Important Notes

- Always unmount an EBS volume before detaching it.
- Ensure no applications or users are accessing the volume before running `umount`.
- If the volume is busy, stop the processes using the mount point before retrying.
- Unmounting does **not** delete the data; it only disconnects the filesystem from the operating system.
