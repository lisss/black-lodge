# Vercel Deployment Setup

This project is fully deployed on Vercel with automatic deployments on every push to `main` branch.

## Architecture

- **Frontend**: React static site
- **Backend**: Express API as Vercel serverless function (`api/index.ts`)
- **Database**: In-memory storage (upgradeable to Vercel Postgres)

## Initial Setup

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Deploy Manually First Time

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Choose your account
- Link to existing project? **No**
- Project name? **black-lodge** (or your choice)
- Directory? **./**
- Override settings? **No**

Vercel will detect the configuration from `vercel.json`.

### 3. Get Your Vercel Token

```bash
vercel token create
```

Copy the token that's generated.

### 4. Set GitHub Secrets

Go to your GitHub repository:
1. Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add:

**VERCEL_TOKEN**
- Value: The token from step 3

**Optional (for better reliability):**

```bash
cat .vercel/project.json
```

Add these as GitHub secrets:
- **VERCEL_ORG_ID**: Copy the `orgId` value
- **VERCEL_PROJECT_ID**: Copy the `projectId` value

### 5. Push to GitHub

```bash
git add .
git commit -m "Configure Vercel deployment"
git push origin main
```

The deployment will trigger automatically via GitHub Actions!

## Optional: Add Persistent Database

By default, the app works with in-memory storage. To add persistent storage:

1. **Go to Vercel Dashboard** → Your Project → Storage
2. **Create Database** → Postgres
3. **Name it** (e.g., `black-lodge-db`)

Vercel automatically injects `POSTGRES_URL` into your serverless functions - no manual configuration needed!

## Manual Deployment

Deploy manually anytime:

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

## Monitoring

- **GitHub Actions**: Repository → Actions tab
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Function Logs**: Vercel Dashboard → Your Project → Logs

## How It Works

1. **Push to GitHub** → Triggers GitHub Actions workflow
2. **GitHub Actions** → Builds and deploys to Vercel
3. **Vercel** → 
   - Builds frontend (React) → CDN
   - Deploys `api/index.ts` → Serverless function
   - Routes `/api/*` requests → Serverless function
4. **Your app** → Live at `https://your-project.vercel.app`

## Troubleshooting

### Deployment fails
- Check GitHub Actions logs
- Verify `VERCEL_TOKEN` is set in GitHub secrets
- Ensure `vercel.json` is properly configured

### API not working
- Check function logs in Vercel Dashboard
- Verify routes in `api/index.ts` match frontend calls
- Test health endpoint: `https://your-domain.vercel.app/health`

### Need help?
- Vercel docs: https://vercel.com/docs
- GitHub Actions docs: https://docs.github.com/actions
