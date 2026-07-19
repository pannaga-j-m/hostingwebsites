# 🌐 AWS S3 Static Website Hosting

This project demonstrates how to host a static website on **Amazon S3** using AWS Static Website Hosting. It showcases cloud storage, website hosting, bucket policies, and public access configuration for deploying HTML, CSS, and JavaScript websites without managing any servers. Amazon S3 supports hosting static websites by configuring a bucket with an index document and making the content publicly accessible. :contentReference[oaicite:0]{index=0}

---

# 📖 Project Overview

The project hosts a static website on Amazon S3, allowing users to access the website directly through the S3 website endpoint.

It demonstrates:

- Static Website Hosting
- Public Bucket Configuration
- Bucket Policy Management
- Object Upload
- Website Endpoint Configuration
- Error Document Configuration

---

# 🚀 Features

- Static Website Hosting
- Serverless Deployment
- Highly Available Storage
- Low-Cost Hosting
- HTML, CSS & JavaScript Support
- Public Website Access
- Easy Deployment
- AWS Cloud-Based Hosting

---

# 🏗️ Architecture

```
             User
               │
               ▼
      S3 Website Endpoint
               │
               ▼
        Amazon S3 Bucket
               │
               ▼
   HTML • CSS • JavaScript Files
```

---

# 🛠️ AWS Services Used

- Amazon S3
- IAM
- Bucket Policy
- Static Website Hosting

---

# 📂 Project Structure

```
hostingwebsites/
│
├── index.html
├── style.css
├── script.js
├── images/
└── README.md
```

---

# ⚙️ Deployment Steps

## 1. Create an S3 Bucket

- Open AWS Management Console
- Navigate to Amazon S3
- Create a new bucket
- Use a globally unique bucket name

---

## 2. Upload Website Files

Upload:

- index.html
- CSS files
- JavaScript files
- Images

---

## 3. Enable Static Website Hosting

Go to:

```
Bucket
→ Properties
→ Static Website Hosting
→ Enable
```

Configure:

```
Index Document:
index.html

Error Document:
error.html
```

Static website hosting requires specifying at least an index document, and you can optionally configure a custom error document. :contentReference[oaicite:1]{index=1}

---

## 4. Configure Bucket Permissions

- Disable Block Public Access (for this demo project)
- Add Bucket Policy
- Allow Public Read Access

Example Bucket Policy

```json
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"PublicRead",
      "Effect":"Allow",
      "Principal":"*",
      "Action":"s3:GetObject",
      "Resource":"arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

---

## 5. Access Website

Use the S3 Website Endpoint:

```
http://bucket-name.s3-website-region.amazonaws.com
```

Amazon S3 provides a region-specific website endpoint when static website hosting is enabled. :contentReference[oaicite:2]{index=2}

---

# 📚 Skills Demonstrated

- Amazon S3
- Static Website Hosting
- Bucket Policies
- IAM Permissions
- Cloud Storage
- Website Deployment
- AWS Console
- Cloud Fundamentals

---

# 🎯 Learning Outcomes

- Create an S3 Bucket
- Upload Static Website Files
- Configure Website Hosting
- Manage Bucket Policies
- Enable Public Access
- Deploy Websites on AWS
- Understand Serverless Website Hosting

---

# 🔒 Security Considerations

- IAM Best Practices
- Least Privilege Access
- Bucket Policy Configuration
- Public Access Management

> **Note:** For production websites, AWS recommends serving S3 content through **CloudFront** to provide HTTPS, caching, and stronger security instead of exposing the S3 website endpoint directly. :contentReference[oaicite:3]{index=3}

---

# 📸 Screenshots

Add screenshots of:

- S3 Bucket
- Uploaded Files
- Static Website Hosting
- Bucket Policy
- Website Endpoint
- Live Website

---

# 💡 Future Enhancements

- CloudFront CDN
- Route 53 Custom Domain
- AWS Certificate Manager (HTTPS)
- GitHub Actions CI/CD
- Terraform Automation
- AWS CodePipeline
- CloudWatch Monitoring

---

# 👨‍💻 Author

**Pannaga J M**

🎓 Information Science & Engineering

☁️ Aspiring Cloud & DevOps Engineer

**GitHub:** https://github.com/pannaga-j-m

---

# ⭐ If you found this project useful, don't forget to give it a Star!
