# Deployment Guide

## Vercel Deployment (Recommended)

This project is configured for full-stack deployment on Vercel using serverless functions.

### Architecture

- **Frontend**: React static site served from Vercel CDN
- **Backend**: Express API wrapped as Vercel serverless function (`api/index.ts`)
- **Database**: In-memory storage (with optional Vercel Postgres for persistence)

### Initial Setup

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Link your project**:
```bash
vercel link
```

3. **Deploy**:
```bash
vercel --prod
```

### Automatic Deployments

The project includes GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployments on every push to `main`.

**Setup GitHub Actions:**

1. Get your Vercel token:
```bash
vercel token create
```

2. Add to GitHub repository secrets:
   - Go to: GitHub repo → Settings → Secrets → Actions
   - Add: `VERCEL_TOKEN` (paste the token)

**Done!** Every push to `main` will automatically deploy.

### Adding Persistent Database (Optional)

By default, the app uses in-memory storage which resets on each deployment. To add persistent storage:

1. **Go to Vercel Dashboard** → Your Project → Storage
2. **Create Database** → Postgres
3. **Name it** (e.g., `black-lodge-db`)

Vercel will automatically inject `POSTGRES_URL` into your serverless functions.

### Manual Deployment

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

## Alternative: Docker on VPS

If you prefer to self-host:

1. **SSH into your server**

2. **Install Docker & Docker Compose**

3. **Clone repository**:
```bash
git clone <your-repo>
cd black-lodge
```

4. **Start containers**:
```bash
docker-compose up -d
```

5. **Configure reverse proxy** (nginx/Traefik) and SSL (Let's Encrypt)

## Environment Variables

The app works out of the box without environment variables. Optional variables:

### Production (Vercel)
- `POSTGRES_URL`: PostgreSQL connection string (auto-set if using Vercel Postgres)
- `DATABASE_URL`: Alternative PostgreSQL connection string

### Development (Local)
- `DATABASE_URL`: Local PostgreSQL (default: `postgresql://postgres:postgres@localhost:5432/blacklodge`)
- `PORT`: Server port (default: 3001)

## Post-Deployment Checklist

- [ ] Frontend loads: https://your-domain.vercel.app
- [ ] Health check works: https://your-domain.vercel.app/health
- [ ] Can start new quest session (click "ACCEPT MISSION")
- [ ] Progress saves (navigate through quest steps)
- [ ] Quest completion works
- [ ] Sessions persist after reload (if using Vercel Postgres)

## Troubleshooting

### "Method Not Allowed" errors
- Check that `api/index.ts` routes match frontend API calls
- Verify `vercel.json` rewrites are correct

### Database connection errors
- If using Vercel Postgres, ensure it's properly connected
- Check that `POSTGRES_URL` is available in function logs

### Frontend can't reach backend
- Verify frontend uses relative paths in production (`import.meta.env.PROD`)
- Check browser console for CORS errors
