---

## **🎯 DevOps Task: CI/CD Pipeline for a Kubernetes Node.js App**
🚀 **Objective:**  
Your task is to **automate the deployment process** of a simple Node.js Express app using **Jenkins pipelines**, **Kubernetes**, and **DockerHub**.

---

### **📝 Task Overview**
You will create **two Jenkins pipelines**:
1. **Infrastructure Pipeline** 🏗️  
   - This pipeline will create the required **Kubernetes infrastructure**, including:
     - Deployment
     - Persistent Volume (PV) & Persistent Volume Claim (PVC)
     - Secrets & ConfigMaps (If required)
     - Service for exposure
2. **CI/CD Pipeline** 🔄  
   - This pipeline will:  
     - Build a **Docker image** from the latest version of the Node.js app  
     - Push the image to **DockerHub**  
     - Update the **Kubernetes Deployment** with the new image  

---

### **✅ Task Breakdown**
#### **1️⃣ Set Up Jenkins**
- Install and configure **Jenkins** (if not already installed).
- Install necessary plugins:  
  - Kubernetes CLI (`kubectl`)
  - Docker Pipeline
  - Git

---

#### **2️⃣ Create Infrastructure Pipeline (Jenkinsfile)**
- **Write a Jenkins pipeline** that will:
  1. Create a **Kubernetes namespace** (if needed).
  2. Apply a **Persistent Volume (PV)** and **Persistent Volume Claim (PVC)**.
  3. Store sensitive data in **Kubernetes Secrets**.
  4. Use **ConfigMap** to manage environment variables.
  5. Deploy the application with a **Kubernetes Deployment**.
  6. Expose the application using a **Kubernetes Service**.

📌 **Deliverables**:
- `Jenkinsfile-infra`
- Kubernetes YAML files: `deployment.yaml`, `pv.yaml`, `pvc.yaml`, `secrets.yaml`, `configmap.yaml`, `service.yaml`

---

#### **3️⃣ Create CI/CD Pipeline (Jenkinsfile)**
- **Write a Jenkins pipeline** that will:
  1. Pull the latest code from **GitHub**.
  2. Build a **Docker image** and tag it with the version number.
  3. Push the image to **DockerHub**.
  4. Update the **Kubernetes Deployment** with the new image.
  5. Verify that the application is running successfully.
  

📌 **Deliverables**:
- `Jenkinsfile-cicd`
- `Dockerfile`
- `deployment.yaml` (updated to pull the latest image from DockerHub)

---

### **🔍 Expected Outcome**
By the end of this task, you should have:
✔️ A working **Jenkins CI/CD pipeline** automating infrastructure creation and application deployment.  
✔️ A **Dockerized Node.js app** running in Kubernetes.  
✔️ **Dynamic updates** to the application when pushing new versions.  
💡 **Additional Task:** Implement a **Rolling Update Strategy** in Kubernetes.  

---

### **📆 Submission Guidelines**
- Upload all YAML files and `Jenkinsfile` scripts to a **GitHub repository**.
- Include a **README** with instructions on how to run the pipelines.
- Provide **screenshots or logs** of your working pipeline.

---

🚀 **Good luck! Automate everything!** 🔥
