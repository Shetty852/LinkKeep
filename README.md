# LinkKeep 

> A modern, full-stack URL shortener with user authentication and analytics, built with MERN stack and deployed on cloud platforms.

##  Live Demo
**App**: [linkkeep-2877o1w3c-rohans-projects-845bc57f.vercel.app](https://linkkeep-2877o1w3c-rohans-projects-845bc57f.vercel.app)  
**API**: [linkkeep-backend-dim3.onrender.com](https://linkkeep-backend-dim3.onrender.com)

##  Features
-  **Secure Authentication** - JWT-based user registration and login
-  **URL Shortening** - Create custom short links with analytics
-  **Dashboard** - Manage all your links with click tracking
-  **PWA Ready** - Installable on mobile and desktop
-  **Fast & Responsive** - Modern UI with real-time updates

##  Tech Stack
**Frontend**: React 19  React Router  Axios  PWA  
**Backend**: Node.js  Express.js  MongoDB  JWT  
**Deployment**: Vercel (Frontend)  Render (Backend)  MongoDB Atlas

##  Quick Start

### Live App
1. Visit the [live app](https://linkkeep-2877o1w3c-rohans-projects-845bc57f.vercel.app)
2. Register or login
3. Create your first short link
4. Share and track analytics

### Local Development
`ash
# Clone repository
git clone https://github.com/Shetty852/LinkKeep.git
cd LinkKeep

# Backend setup
cd backend
npm install
# Add .env with MONGODB_URI, JWT_SECRET, PORT
npm run dev

# Frontend setup (new terminal)
cd frontend
npm install
npm start
`

##  Structure
`
LinkKeep/
 backend/          # Express.js API server
    models/       # MongoDB schemas
    routes/       # API endpoints
    middleware/   # Authentication
 frontend/         # React application
    src/pages/    # Main components
    src/context/  # State management
    public/       # PWA assets
 deployment/       # Config files
`

##  API Endpoints
`
POST /api/auth/register    # User registration
POST /api/auth/login       # User authentication
GET  /api/links           # Get user's links
POST /api/links           # Create short link
GET  /s/:shortCode        # Redirect to original URL
`

##  Deployment
- **Frontend**: Automatically deployed on Vercel from GitHub
- **Backend**: Automatically deployed on Render from GitHub
- **Database**: MongoDB Atlas cloud database

##  License
MIT License - See [LICENSE](LICENSE) for details

##  Author
**Rohan Shetty** - [@Shetty852](https://github.com/Shetty852)

---
 Star this repo if you found it helpful!
