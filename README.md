# LinkKeep - URL Shortener & Manager 🔗

A full-stack web application for shortening and managing URLs with user authentication, built with the MERN stack and deployed on modern cloud platforms.

## 🚀 Live Demo

- **Frontend**: [https://linkkeep-2877o1w3c-rohans-projects-845bc57f.vercel.app](https://linkkeep-2877o1w3c-rohans-projects-845bc57f.vercel.app)
- **Backend API**: [https://linkkeep-backend-dim3.onrender.com](https://linkkeep-backend-dim3.onrender.com)

## ✨ Features

### 🔐 User Authentication
- Secure user registration and login with JWT tokens
- Protected API routes and frontend pages
- Password hashing with bcryptjs
- Persistent authentication with localStorage

### 🔗 Link Management
- Create shortened URLs with custom aliases
- Automatically generated 6-character short codes
- Personal dashboard to manage all your links
- Edit link details (name, URL, description)
- Delete unwanted links
- Real-time click tracking and analytics

### 🚀 URL Redirection
- Fast public redirect endpoint `/s/:shortCode`
- Automatic click counting
- Seamless redirection to original URLs

### 📱 Progressive Web App (PWA)
- Installable on mobile and desktop
- Offline capability
- App-like experience
- Custom icons and splash screens

### 💻 Modern UI/UX
- Fully responsive design for all devices
- Clean, modern interface with custom styling
- Real-time feedback and error handling
- Copy-to-clipboard functionality
- Loading states and user feedback

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **express-validator** - Input validation

### Frontend
- **React 19.1.0** - Modern UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Context API** - Global state management
- **Lucide React** - Modern icon library
- **Progressive Web App** - PWA capabilities

### Deployment & DevOps
- **Frontend**: Deployed on **Vercel**
- **Backend**: Deployed on **Render**
- **Database**: **MongoDB Atlas** (Cloud)
- **Version Control**: **GitHub**
- **CI/CD**: Automatic deployments on push

## 📁 Project Structure

```
LinkKeep/
├── backend/
│   ├── models/
│   │   ├── User.js          # User schema and model
│   │   └── Link.js          # Link schema and model
│   ├── routes/
│   │   ├── auth.js          # Authentication endpoints
│   │   ├── links.js         # Link management endpoints
│   │   └── redirect.js      # Short URL redirection
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── .env                 # Environment variables
│   ├── server.js            # Express server setup
│   └── package.json         # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── PrivateRoute.js    # Protected route component
│   │   ├── pages/
│   │   │   ├── Login.js           # Login page
│   │   │   ├── Register.js        # Registration page
│   │   │   └── Dashboard.js       # Main dashboard
│   │   ├── context/
│   │   │   └── AuthContext.js     # Authentication state
│   │   ├── services/
│   │   │   └── api.js             # API service layer
│   │   ├── App.js                 # Main app component
│   │   └── index.js               # App entry point
│   ├── public/
│   │   ├── manifest.json          # PWA manifest
│   │   └── icons/                 # App icons
│   └── package.json               # Frontend dependencies
├── vercel.json                     # Vercel deployment config
├── DEPLOYMENT.md                   # Deployment guide
└── README.md                       # This file
```

## 🚀 Getting Started

### Try the Live App
Visit [LinkKeep](https://linkkeep-2877o1w3c-rohans-projects-845bc57f.vercel.app) to try the live application:

1. **Register** a new account or **Login**
2. **Create** your first short link
3. **Share** the shortened URL
4. **Track** clicks and manage your links

### API Endpoints
The backend API is available at: `https://linkkeep-backend-dim3.onrender.com`

**Authentication:**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

**Links Management:**
- `GET /api/links` - Get user's links
- `POST /api/links` - Create new short link
- `PUT /api/links/:id` - Update link
- `DELETE /api/links/:id` - Delete link

**Redirection:**
- `GET /s/:shortCode` - Redirect to original URL
│   │   └── index.js
│   └── package.json
├── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

## 💻 Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account

### 1. Clone the Repository
```bash
git clone https://github.com/Shetty852/LinkKeep.git
cd LinkKeep
```

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

### 3. Environment Setup

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/linkkeep?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

**Frontend (.env):**
```env
REACT_APP_API_URL=http://localhost:5000
```

### 4. Run the Application

**Backend (Terminal 1):**
```bash
cd backend
npm run dev
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```

Visit `http://localhost:3000` to see the application.

## 🌍 Deployment

This project is configured for easy deployment:

### Frontend (Vercel)
- Automatic deployment from GitHub
- Environment variables configured
- Custom domain support available

### Backend (Render)
- Automatic deployment from GitHub
- Environment variables: PORT, MONGODB_URI, JWT_SECRET, NODE_ENV
- Free tier with auto-sleep

### Database (MongoDB Atlas)
- Cloud-hosted MongoDB
- Free tier available
- Automatic backups and scaling
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

#### Production Mode
```bash
# Backend only
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Links Management
- `POST /api/links` - Create a new short link (protected)
- `GET /api/links` - Get all user's links (protected)
- `GET /api/links/:id` - Get specific link (protected)
- `PUT /api/links/:id` - Update link (protected)
- `DELETE /api/links/:id` - Delete link (protected)

### Public Redirect
- `GET /s/:shortCode` - Redirect to original URL (public)

## Usage

### 1. Register/Login
- Visit `http://localhost:3000`
- Create a new account or login with existing credentials

### 2. Create Short Links
- Click "Add New Link" in the dashboard
- Enter link name, original URL, and optional description
- Your short URL will be automatically generated

### 3. Manage Links
- View all your links in the dashboard
- Edit link details by clicking "Edit"
- Delete links you no longer need
- Copy short URLs to clipboard

### 4. Share Short Links
- Share your short URLs: `http://localhost:5000/s/ABC123`
- Track clicks in your dashboard
- Short URLs work immediately after creation

## Features in Detail

### Security
- JWT tokens with 7-day expiration
- Password hashing with bcrypt
- Protected API routes with middleware
- Input validation on all endpoints
- CORS configuration for cross-origin requests

### Link Generation
- 6-character alphanumeric short codes
- Collision detection ensures unique codes
- Case-sensitive short codes for more combinations
- Automatic retry if collision detected

### User Experience
- Responsive design for mobile and desktop
- Real-time error and success messages
- Loading states for better UX
- Copy-to-clipboard functionality
- Intuitive dashboard interface

## Customization

### Changing Short Code Length
In `backend/routes/links.js`, modify the `generateShortCode` function:
```javascript
const generateShortCode = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) { // Change from 6 to 8
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
```

### Custom Domain
To use a custom domain for short URLs, update the frontend API base URL and deploy your backend to your domain.

## Deployment

### Backend Deployment (Heroku Example)
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git or GitHub integration

## 📊 Features Showcase

### Dashboard
- View all your shortened links
- Real-time click statistics
- Edit and delete links
- Copy links to clipboard

### Link Creation
- Paste any URL to shorten
- Optional custom alias
- Add descriptions for organization
- Instant short link generation

### Analytics
- Track click counts
- View creation dates
- Monitor link performance

## 🔧 API Documentation

### Authentication Required
All link management endpoints require a valid JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

### Response Format
All API responses follow this format:
```json
{
  "success": true,
  "data": {...},
  "message": "Success message"
}
```

## 🛡️ Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Protected API routes
- CORS configuration
- Input validation and sanitization
- Environment-based configuration

## 🚀 Performance

- **Frontend**: Fast React SPA with code splitting
- **Backend**: Optimized Express.js API
- **Database**: MongoDB with indexed queries
- **CDN**: Static assets served via Vercel Edge Network
- **Caching**: Efficient data fetching and state management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Rohan Shetty**
- GitHub: [@Shetty852](https://github.com/Shetty852)
- Project Link: [https://github.com/Shetty852/LinkKeep](https://github.com/Shetty852/LinkKeep)
- Live Demo: [https://linkkeep-2877o1w3c-rohans-projects-845bc57f.vercel.app](https://linkkeep-2877o1w3c-rohans-projects-845bc57f.vercel.app)

## 🙏 Acknowledgments

- React team for the amazing frontend library
- Express.js for the robust backend framework
- MongoDB for the flexible database solution
- Vercel for seamless frontend deployment
- Render for reliable backend hosting

---

⭐ Star this repository if you found it helpful!
2. Deploy the `build` folder to your hosting service
3. Update API base URL for production

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section
2. Open an issue on GitHub
3. Review the API documentation

---

**Happy link shortening!** 🚀
