# Link Shortener - Full Stack MERN Application

A full-stack web application for creating and managing shortened URLs, built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

### 🔐 User Authentication
- User registration and login with JWT tokens
- Protected API routes and frontend pages
- Secure password hashing with bcrypt
- Token-based authentication stored in localStorage

### 🔗 Link Management
- Create shortened URLs with custom names and descriptions
- Automatically generated 6-character short codes
- View all your created links in a dashboard
- Edit link details (name, URL, description)
- Delete unwanted links
- Click tracking for each shortened URL

### 🚀 Short URL Redirection
- Public redirect endpoint `/s/:shortCode`
- Automatic click counting
- Redirects to original URL seamlessly

### 💻 Modern UI/UX
- Responsive design that works on all devices
- Clean, modern interface with custom CSS
- Real-time feedback and error handling
- Copy-to-clipboard functionality for short URLs

## Tech Stack

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
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management
- **CSS** - Custom styling (no frameworks)

## Project Structure

```
link-shortener-app/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Link.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── links.js
│   │   └── redirect.js
│   ├── middleware/
│   │   └── auth.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── PrivateRoute.js
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
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

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd link-shortener-app
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/linkshortener?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
NODE_ENV=development
```

**Important:** Replace the MongoDB URI with your actual MongoDB Atlas connection string.

### 4. MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address
5. Get your connection string and update the `.env` file

### 5. Running the Application

#### Development Mode (Recommended)
Run both frontend and backend simultaneously:
```bash
npm run dev
```

#### Separate Terminals
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

### Frontend Deployment (Netlify/Vercel)
1. Build the React app: `npm run build`
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
