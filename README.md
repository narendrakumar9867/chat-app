# Chat-App

This is the process to start the project.
---

## 🚀 Tech Stack

* React
* NodeJS
* ExpressJS
* MongoDB

---

## 📁 Folder Structure

```bash
cha-app/
├── backend/
│   └── .env

PORT=
JWT_SECRET=
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## ✅ Development Workflow

1. **Pull before you push:** Always pull from `main` before creating your branch.
2. **Create feature branches:**
   ```bash
   git checkout -b feat/<FeatureName>
   # or
   git checkout -b bugfix/<BugName>
   ```
---

## ⚙️ Running Locally

```bash
# Clone the repo
$ git clone https://github.com/HuesApply/HA_backend.git

# Install dependencies
$ npm install

# Run server for backend
$ npm start

# Run server for frontend
$ npm run dev
```

---

## 🔐 Security & Secrets

* Use `.env` for all secrets
* NEVER commit credentials or access tokens
