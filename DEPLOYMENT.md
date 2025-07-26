# LinkKeep - URL Shortener & Manager

A full-stack web application for shortening and managing URLs with user authentication.

## 🚀 Live Demo

- **Frontend**: Deploy on Vercel
- **Backend**: Deploy on Render

## 🛠️ Tech Stack

**Frontend:**
- React 19.1.0
- React Router DOM
- Axios for API calls
- Lucide React for icons
- Progressive Web App (PWA) support

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS enabled

## 📋 Features

- 🔗 URL shortening with custom aliases
- 👤 User authentication (register/login)
- 📊 Dashboard to manage your links
- 📱 Progressive Web App (PWA)
- 🔒 Secure JWT-based authentication
- 📈 Click tracking and analytics

## 🚀 Deployment

### Frontend (Vercel)

1. Fork this repository
2. Connect your GitHub repo to Vercel
3. Set the build settings:
   - **Build Command**: `cd frontend && npm run build`
   - **Output Directory**: `frontend/build`
   - **Install Command**: `cd frontend && npm install`
4. Add environment variables:
   ```
   REACT_APP_API_URL=https://your-render-backend-url.com
   ```

### Backend (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build settings:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: Leave empty or set to `backend`
4. Add environment variables:
   ```
   PORT=10000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=production
   ```

## 💻 Local Development

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Shetty852/LinkKeep.git
   cd LinkKeep
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Create environment files:

   **Backend (.env):**
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/linkkeeper
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

   **Frontend (.env):**
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

5. Start the development servers:

   **Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm start
   ```

## 📁 Project Structure

```
linkkeep/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Link.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── links.js
│   │   └── redirect.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── icons/
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── vercel.json
└── render-build.sh
```

## 🔧 Environment Variables

### Backend
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `NODE_ENV`: Environment (development/production)

### Frontend
- `REACT_APP_API_URL`: Backend API URL

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with deployment, please open an issue in the GitHub repository.
