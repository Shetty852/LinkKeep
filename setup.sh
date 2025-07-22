#!/bin/bash

echo "�� Setting up Link Shortener App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "✅ All dependencies installed successfully!"

# Check if .env exists
if [ ! -f "backend/.env" ]; then
    echo "⚠️  Creating backend/.env file..."
    cat > backend/.env << 'EOL'
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/linkshortener?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random-$(date +%s)
NODE_ENV=development
EOL
    echo "📝 Please update backend/.env with your MongoDB Atlas connection string"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update backend/.env with your MongoDB Atlas connection string"
echo "2. Run 'npm run dev' to start both frontend and backend"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "Commands:"
echo "  npm run dev     - Start both frontend and backend"
echo "  npm run server  - Start backend only"
echo "  npm run client  - Start frontend only"
