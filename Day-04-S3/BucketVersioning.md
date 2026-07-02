# How to Enable S3 Bucket Versioning (AWS Console)

Follow these steps to enable versioning for an Amazon S3 bucket:

### Step 1: Open Amazon S3

1. Sign in to the AWS Management Console.
2. In the search bar, type **S3** and open the **Amazon S3** service.

### Step 2: Select Your Bucket

1. From the list of S3 buckets, click the bucket where you want to enable versioning.

### Step 3: Open the Properties Tab

1. Inside the bucket, select the **Properties** tab.

### Step 4: Locate Bucket Versioning

1. Scroll down to the **Bucket Versioning** section.
2. Click **Edit**.

### Step 5: Enable Versioning

1. Select **Enable** under **Bucket Versioning**.
2. Click **Save changes**.

### Verification

* After saving, the **Bucket Versioning** status will display **Enabled**.
* Any new or updated objects uploaded to the bucket will now have unique version IDs.
* Previous versions of objects will be preserved whenever they are modified or deleted.
