# Deployment Checklist

## Pre-deployment
- [ ] Ensure all code is committed and pushed to GitHub
- [ ] Test application locally
- [ ] Create MongoDB Atlas database (for production)
- [ ] Generate secure JWT secret

## Backend Deployment (Render)
- [ ] Create new Web Service on Render
- [ ] Connect GitHub repository: Shetty852/LinkKeep
- [ ] Set build command: `cd backend && npm install`
- [ ] Set start command: `cd backend && npm start`
- [ ] Add environment variables:
  - [ ] `PORT=10000`
  - [ ] `MONGODB_URI=<your_mongodb_atlas_url>`
  - [ ] `JWT_SECRET=<secure_random_string>`
  - [ ] `NODE_ENV=production`
- [ ] Deploy and note the backend URL

## Frontend Deployment (Vercel)
- [ ] Create new project on Vercel
- [ ] Connect GitHub repository: Shetty852/LinkKeep
- [ ] Set framework preset to "Create React App"
- [ ] Set build settings:
  - [ ] Build Command: `cd frontend && npm run build`
  - [ ] Output Directory: `frontend/build`
  - [ ] Install Command: `cd frontend && npm install`
- [ ] Add environment variable:
  - [ ] `REACT_APP_API_URL=<your_render_backend_url>`
- [ ] Deploy

## Post-deployment
- [ ] Test registration and login
- [ ] Test link creation and shortening
- [ ] Test link redirection
- [ ] Verify PWA functionality
- [ ] Check responsive design on mobile
