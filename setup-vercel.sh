#!/bin/bash

echo "🚀 ABSRD Lodge - Vercel Deployment Setup"
echo ""

if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
else
    echo "✅ Vercel CLI already installed"
fi

echo ""
echo "📍 Current directory: $(pwd)"
echo ""
echo "🔧 Next steps:"
echo ""
echo "1. Run the initial deployment:"
echo "   vercel"
echo ""
echo "2. Get your Vercel token:"
echo "   vercel token create"
echo ""
echo "3. Add GitHub Secrets (in your repo on GitHub.com):"
echo "   Settings → Secrets and variables → Actions → New repository secret"
echo "   - Name: VERCEL_TOKEN"
echo "   - Value: [paste the token from step 2]"
echo ""
echo "4. [Optional] Add persistent database:"
echo "   Vercel Dashboard → Your Project → Storage → Create Database → Postgres"
echo "   (App works with in-memory storage by default)"
echo ""
echo "5. Push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Configure Vercel deployment'"
echo "   git push origin main"
echo ""
echo "🎉 After this, every push will automatically deploy to Vercel!"
echo ""
echo "📚 For detailed instructions, see VERCEL_SETUP.md"
echo ""
