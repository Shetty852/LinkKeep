# 🔗 LinkKeep - Smart URL Shortener

<div align="center">

![LinkKeep Logo](linkkeep.vercel.app)

**⚡ A modern, full-stack URL shortener with user authentication and analytics**

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20App-success?style=for-the-badge)](https://linkkeep-backend-dim3.onrender.com)
[![GitHub Repo](https://img.shields.io/badge/📂%20GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/Shetty852/LinkKeep)
[![API Status](https://img.shields.io/badge/🔌%20API-Online-green?style=for-the-badge)](https://linkkeep-backend-dim3.onrender.com)

</div>

---

## 📋 **Project Overview**

LinkKeep is a **powerful URL shortening service** built with the MERN stack, featuring user authentication, analytics, and a modern Progressive Web App interface. Perfect for managing your links efficiently!

## 🎯 **Live Application**

> **🚨 Frontend Deployment Issue**: The Vercel deployment is currently experiencing issues. Please use the backend API directly or set up locally.

**Backend API**: [linkkeep-backend-dim3.onrender.com](https://linkkeep-backend-dim3.onrender.com) ✅ **Working**

**Quick Test**: Visit `/s/ABC123` to test redirection functionality

## ✨ **Key Features**

<table>
<tr>
<td>

### 🔐 **Authentication**
- Secure JWT-based registration
- Protected user sessions
- Password encryption

</td>
<td>

### 🔗 **URL Management**
- Create custom short links
- Real-time analytics tracking
- Quick link generation

</td>
</tr>
<tr>
<td>

### 📊 **Dashboard**
- Manage all your links
- Click statistics
- Search & filter functionality

</td>
<td>

### 📱 **PWA Ready**
- Installable on any device
- Offline capabilities
- Modern responsive design

</td>
</tr>
</table>

## 🛠️ **Technology Stack**

<div align="center">

| Frontend | Backend | Database | Deployment |
|----------|---------|----------|------------|
| ![React](https://img.shields.io/badge/React%2019-20232a?style=for-the-badge&logo=react&logoColor=61dafb) | ![Node.js](https://img.shields.io/badge/Node.js-43853d?style=for-the-badge&logo=node.js&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white) | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) | ![Express.js](https://img.shields.io/badge/Express.js-404d59?style=for-the-badge) | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white) | ![Render](https://img.shields.io/badge/Render-46e3b7?style=for-the-badge&logo=render&logoColor=white) |
| ![Axios](https://img.shields.io/badge/Axios-5a29e4?style=for-the-badge&logo=axios&logoColor=white) | ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) | | ![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white) |

</div>

## 🚀 **Quick Start Guide**

### 🌐 **Try the Live Application**
```bash
# Visit the working backend API
curl https://linkkeep-backend-dim3.onrender.com

# Test a short link redirect
curl -L https://linkkeep-backend-dim3.onrender.com/s/ABC123
```

### 💻 **Local Development Setup**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Shetty852/LinkKeep.git
cd LinkKeep

# 2️⃣ Backend setup
cd backend
npm install
cp .env.example .env  # Add your MongoDB URI, JWT secret
npm run dev

# 3️⃣ Frontend setup (new terminal)
cd frontend
npm install
npm start
```

### � **Environment Variables**

Create `.env` files:

**Backend (.env)**
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/linkkeep
JWT_SECRET=your-super-secret-jwt-key-here
PORT=5000
NODE_ENV=development
```

**Frontend (.env)**
```env
REACT_APP_API_URL=http://localhost:5000
```

## �📁 **Project Architecture**

```
LinkKeep/
├── 🔧 backend/              # Express.js API Server
│   ├── 🗃️ models/           # MongoDB Schemas (User, Link)
│   ├── 🛣️ routes/           # API Endpoints (auth, links, redirect)
│   ├── 🔐 middleware/       # Authentication middleware
│   └── ⚙️ server.js         # Main server configuration
├── ⚛️ frontend/             # React Application
│   ├── 📱 src/pages/        # Main components (Dashboard, Login, Register)
│   ├── 🎯 src/context/      # State management (AuthContext)
│   ├── 🔗 src/services/     # API communication layer
│   └── 🎨 public/           # PWA assets & manifest
└── 📚 docs/                 # Documentation & deployment guides
```

## 🔌 **API Endpoints**

<details>
<summary><b>🔐 Authentication Endpoints</b></summary>

```http
POST /api/auth/register     # Create new user account
POST /api/auth/login        # User authentication
GET  /api/auth/me          # Get current user info
```
</details>

<details>
<summary><b>🔗 Link Management Endpoints</b></summary>

```http
GET    /api/links           # Get user's links (authenticated)
POST   /api/links           # Create new short link (authenticated)
PUT    /api/links/:id       # Update link details (authenticated)
DELETE /api/links/:id       # Delete link (authenticated)
```
</details>

<details>
<summary><b>🌐 Public Endpoints</b></summary>

```http
GET /s/:shortCode          # Redirect to original URL + track clicks
GET /                      # API health check
```
</details>

## 🚀 **Deployment Guide**

### ☁️ **Frontend (Vercel)**
```bash
# Automatic deployment from GitHub
# Build Command: cd frontend && npm run build
# Output Directory: frontend/build
```

### 🖥️ **Backend (Render)**
```bash
# Automatic deployment from GitHub
# Build Command: cd backend && npm install
# Start Command: cd backend && npm start
```

### 🗃️ **Database (MongoDB Atlas)**
- Cloud-hosted MongoDB
- Automatic scaling and backups
- Free tier available

## 🎨 **Screenshots & Features**

<div align="center">

### 🖥️ **Dashboard Interface**
*Modern, glassmorphism design with gradient backgrounds*

### 📱 **Mobile PWA Experience**
*Installable app with offline capabilities*

### ⚡ **Quick Link Generation**
*Instant short links without saving to account*

</div>

## 🔒 **Security Features**

- 🛡️ **JWT Authentication** - Secure token-based sessions
- 🔐 **Password Hashing** - bcryptjs encryption
- 🌐 **CORS Protection** - Configured cross-origin requests
- ✅ **Input Validation** - Server-side validation for all inputs
- 🔒 **Protected Routes** - Frontend and backend route protection

## 📊 **Performance & Analytics**

- ⚡ **Fast Loading** - Optimized React build
- 📈 **Click Tracking** - Real-time link analytics
- 🔄 **Real-time Updates** - Instant UI feedback
- 📱 **PWA Features** - Installable with offline support
- 🎯 **SEO Optimized** - Proper meta tags and structure

## 🤝 **Contributing**

<div align="center">

[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

</div>

1. 🍴 **Fork** the repository
2. 🌟 **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔄 **Open** a Pull Request

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

<div align="center">

**Rohan Shetty**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Shetty852)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rohan-shetty)

</div>

---

<div align="center">

### 🌟 **Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/Shetty852/LinkKeep?style=social)](https://github.com/Shetty852/LinkKeep/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Shetty852/LinkKeep?style=social)](https://github.com/Shetty852/LinkKeep/network/members)

**Made with ❤️ and lots of ☕**

</div>
