# Vercel Deployment Setup

This project automatically deploys to Vercel on every push to `main` or `master` branch.

## Initial Setup

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Deploy Manually First Time

```bash
cd client
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Choose your account
- Link to existing project? **No**
- Project name? **black-lodge** (or your choice)
- Directory? **./** (it's already in client folder)
- Override settings? **No**

### 3. Get Your Vercel Tokens

```bash
# Get your Vercel token
vercel login
vercel token create
```

Copy the token that's generated.

### 4. Set GitHub Secrets

Go to your GitHub repository:
1. Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add these secrets:

**VERCEL_TOKEN**
- Value: The token from step 3

**VERCEL_ORG_ID** (optional, but recommended)
```bash
cat client/.vercel/project.json
```
Copy the `orgId` value

**VERCEL_PROJECT_ID** (optional, but recommended)
```bash
cat client/.vercel/project.json
```
Copy the `projectId` value

### 5. Set Environment Variables in Vercel

In Vercel dashboard:
1. Go to your project → Settings → Environment Variables
2. Add:
   - **VITE_API_URL**: Your backend URL (e.g., `https://your-app.railway.app`)

### 6. Push to GitHub

```bash
git add .
git commit -m "Add Vercel auto-deployment"
git push origin main
```

The deployment will trigger automatically!

## Manual Deployment

To deploy manually anytime:

```bash
cd client
vercel --prod
```

## Monitoring Deployments

- View GitHub Actions: Repository → Actions tab
- View Vercel deployments: https://vercel.com/dashboard

## Environment Variables

Make sure to set `VITE_API_URL` in Vercel to point to your deployed backend (Railway, Render, etc.)

Without this, the frontend won't be able to connect to the backend API.
