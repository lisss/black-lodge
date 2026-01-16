# Deployment Guide

## Option 1: Vercel (Frontend) + Railway (Backend)

### Backend on Railway

1. **Create Railway account**: https://railway.app
2. **Create new project** → Deploy from GitHub
3. **Add PostgreSQL database**:
   - Click "New" → Database → PostgreSQL
   - Railway automatically sets `DATABASE_URL`
4. **Deploy backend**:
   - Select `/server` as root directory
   - Railway will auto-detect Node.js
   - No additional config needed
5. **Copy your backend URL** (e.g., `https://your-app.railway.app`)

### Frontend on Vercel

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy from client directory**:
```bash
cd client
vercel
```

3. **Set environment variable** in Vercel dashboard:
   - `VITE_API_URL` = Your Railway backend URL

4. **Done!** Your app is live.

## Option 2: Docker on VPS (DigitalOcean, Hetzner, etc.)

1. **SSH into your server**

2. **Install Docker & Docker Compose**

3. **Clone repository**:
```bash
git clone <your-repo>
cd black-lodge
```

4. **Update docker-compose.yml** for production:
```yaml
# Add nginx reverse proxy or use Traefik
# Configure SSL with Let's Encrypt
```

5. **Start containers**:
```bash
docker-compose up -d
```

6. **Configure DNS** to point to your server

## Option 3: Render

### Backend

1. Create new **Web Service** on Render
2. Connect GitHub repository
3. Configure:
   - Build Command: `cd server && npm install && npm run build`
   - Start Command: `cd server && npm start`
4. Add PostgreSQL database (or use external like Neon/Supabase)
5. Set environment variables

### Frontend

1. Create new **Static Site** on Render
2. Configure:
   - Build Command: `cd client && npm install && npm run build`
   - Publish Directory: `client/dist`
3. Set `VITE_API_URL` environment variable

## Option 4: AWS (Advanced)

- **Frontend**: S3 + CloudFront
- **Backend**: ECS Fargate or App Runner
- **Database**: RDS PostgreSQL

## Environment Variables Summary

### Backend
- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Server port (usually auto-set)
- `NODE_ENV`: `production`

### Frontend
- `VITE_API_URL`: Backend API URL (with https://)

## Post-Deployment Checklist

- [ ] Backend health check works: `GET /health`
- [ ] Frontend loads correctly
- [ ] Can start new quest session
- [ ] Progress saves to database
- [ ] Quest completion works
- [ ] CORS configured correctly
- [ ] SSL/HTTPS enabled
- [ ] Database backups configured
