#!/bin/bash

# Instructions for running the Orphan Tracker frontend locally

echo "========================================="
echo "Orphan Tracker Frontend - Setup Guide"
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Navigate to frontend directory
cd "$(dirname "$0")/frontend" || exit

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "========================================="
echo "Starting Orphan Tracker Frontend"
echo "========================================="
echo ""
echo "📍 Application URL: http://localhost:3000"
echo ""
echo "Available Pages:"
echo "  🏠 Home              → http://localhost:3000"
echo "  ℹ️  About Us          → http://localhost:3000/about"
echo "  🎯 Services          → http://localhost:3000/services"
echo "  📊 Impact            → http://localhost:3000/impact"
echo "  🤝 Get Involved      → http://localhost:3000/get-involved"
echo "  📧 Contact           → http://localhost:3000/contact"
echo "  💝 Donate            → http://localhost:3000/donate"
echo ""
echo "========================================="
echo ""

# Start the development server
npm start
