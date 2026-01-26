#!/bin/bash

echo "🎬 Setting up The DSBM lodge..."

if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20+ first."
    exit 1
fi

echo "📦 Installing root dependencies..."
npm install

echo "📦 Installing server dependencies..."
cd server && npm install && cd ..

echo "📦 Installing client dependencies..."
cd client && npm install && cd ..

echo "🐳 Starting Docker containers..."
docker-compose up -d

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 Visit http://localhost to start the quest"
echo "🔧 API running on http://localhost:3001"
echo ""
echo "To stop: docker-compose down"
echo "To view logs: docker-compose logs -f"
