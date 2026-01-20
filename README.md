# welcome to the Lodge, sweety-kitty :) This is an absurd stuff you don't need to understand at all. Like, when you read the 'Alice in Wonderland' or watch any David Lynch's movie. Just accept that it's gonna be weird

A WWII espionage quest with Twin Peaks-inspired surreal mystery elements. Decode classified photographs, solve cryptic puzzles, and uncover the truth about The ABSRD lodge.

## Tech Stack

- **Frontend**: React 18 + TypeScript + SASS
- **Backend**: Node.js + Express + PostgreSQL
- **Infrastructure**: Docker + Docker Compose
- **Deployment**: Vercel (serverless functions)

## Local Development

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- npm

### Development Mode (with Hot Reloading) ⚡

For the best development experience with automatic refresh:

1. **Start PostgreSQL only**:
```bash
docker-compose -f docker-compose.dev.yml up -d
```

2. **Install dependencies** (first time only):
```bash
npm install
```

3. **Start development servers** (with hot reloading):
```bash
npm run dev
```

This starts:
- Frontend: `http://localhost:3000` (Vite with HMR)
- Backend: `http://localhost:3001` (tsx watch mode)

Now any changes to frontend or backend code will automatically reload! 🎉

### Production Mode (Docker)

To test the full production build:

```bash
docker-compose up -d
```

Visit `http://localhost` to start the quest.

### Manual Setup

**Backend**:
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

**Frontend**:
```bash
cd client
npm install
cp .env.example .env
npm run dev
```

## Deployment

### Vercel Deployment

This project is fully deployed on Vercel with automatic deployments on every push to `main` branch.

**Architecture:**
- Frontend: React static files served from Vercel CDN
- Backend: Express API wrapped as Vercel serverless function (`api/index.ts`)
- Database: In-memory fallback (or add Vercel Postgres for persistence)

**Setup (one-time):**

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy manually first time
vercel

# 3. Get your Vercel token for GitHub Actions
vercel token create

# 4. Add to GitHub Secrets
# Go to: GitHub repo → Settings → Secrets → Actions
# Add: VERCEL_TOKEN (the token from step 3)
```

**Optional: Add Vercel Postgres for persistent storage**

1. Go to Vercel Dashboard → Your Project → Storage
2. Create Database → Postgres
3. Database URL will be automatically injected as `POSTGRES_URL`

**Done!** Every push will auto-deploy. See `.github/workflows/deploy.yml` for CI/CD configuration.

### Alternative: Full Docker Deploy

Build and push images:
```bash
docker build -t black-lodge-server ./server
docker build -t black-lodge-client ./client
```

Deploy to your preferred container host (AWS ECS, Google Cloud Run, DigitalOcean, etc.)

## Environment Variables

### Server
- `PORT`: Server port (default: 3001)
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment (development/production)

### Client
- `VITE_API_URL`: Backend API URL

## Project Structure

```
black-lodge/
├── server/              # Backend API
│   ├── src/
│   │   └── index.ts    # Express server & PostgreSQL
│   ├── Dockerfile
│   └── package.json
├── client/              # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── data/       # Quest content
│   │   └── styles/     # SASS styling
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
```

## Quest Overview

Players take on the role of an intelligence agent in 1943, investigating mysterious photographs taken by Churchill's reconnaissance photographer. The quest involves:

- Decoding backward messages
- Solving ciphers
- Analyzing reconnaissance photographs
- Making strategic choices
- Uncovering a surreal mystery

Progress is automatically saved to PostgreSQL.

## License

MIT
