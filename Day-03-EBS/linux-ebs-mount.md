Mount a New EBS Volume in Linux
Step 1: Connect to the EC2 Instance
ssh -i key.pem ec2-user@<Public-IP>
Step 2: Verify the New Disk

List all block devices:

lsblk

Example output:

NAME      MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
xvda      202:0    0   8G  0 disk
└─xvda1   202:1    0   8G  0 part /

xvdf      202:80   0  10G  0 disk

Here:

/dev/xvda → Root volume
/dev/xvdf → New EBS volume (not mounted)
Step 3: Check if the Disk Has a Filesystem
sudo file -s /dev/xvdf

Output for a new volume:

/dev/xvdf: data

This means it has no filesystem yet.

Step 4: Format the EBS Volume
Using XFS (Recommended for Amazon Linux)
sudo mkfs -t xfs /dev/xvdf
Or Using ext4
sudo mkfs.ext4 /dev/xvdf
Step 5: Create a Mount Point
sudo mkdir /data

You can use any directory name, such as:

/data
/backup
/appdata
Step 6: Mount the Volume
sudo mount /dev/xvdf /data
Step 7: Verify the Mount
df -h

Example:

Filesystem      Size  Used Avail Use% Mounted on
/dev/xvda1       8G    2G    6G   25% /
/dev/xvdf       10G   75M   10G    1% /data

Or:

mount | grep data
Step 8: Get the UUID
sudo blkid

Example:

/dev/xvdf: UUID="3e5c-45ab-9b4d" TYPE="xfs"
Step 9: Make the Mount Persistent

Edit the fstab file:

sudo nano /etc/fstab

For XFS:

UUID=3e5c-45ab-9b4d /data xfs defaults,nofail 0 2

For ext4:

UUID=3e5c-45ab-9b4d /data ext4 defaults,nofail 0 2

Save and exit.
