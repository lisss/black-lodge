import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage - ONLY works if all requests hit same instance
// On Vercel, this is unreliable due to multiple instances
const memoryStore = new Map();

// Routes
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', storage: 'memory (unreliable on Vercel)', instances: memoryStore.size });
});

app.post('/api/session/start', async (_req, res) => {
  try {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const session = {
      id: Date.now(),
      session_id: sessionId,
      current_step: 0,
      choices: [],
      completed: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    memoryStore.set(sessionId, session);
    console.log(`Session created: ${sessionId}, Store size: ${memoryStore.size}`);
    res.json(session);
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

app.get('/api/session/:sessionId', async (req, res) => {
  try {
    console.log(`Looking for session: ${req.params.sessionId}, Store size: ${memoryStore.size}`);
    console.log(`Available sessions: ${Array.from(memoryStore.keys()).join(', ')}`);
    
    const session = memoryStore.get(req.params.sessionId);
    if (!session) {
      return res.status(404).json({ 
        error: 'Session not found', 
        requestedId: req.params.sessionId,
        availableSessions: Array.from(memoryStore.keys()),
        message: 'Vercel spun up a different instance - session lost'
      });
    }
    res.json(session);
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Failed to fetch session' });
  }
});

app.post('/api/session/:sessionId/progress', async (req, res) => {
  const { step, choice } = req.body;
  try {
    console.log(`Updating session: ${req.params.sessionId}, Store size: ${memoryStore.size}`);
    
    const session = memoryStore.get(req.params.sessionId);
    if (!session) {
      return res.status(404).json({ 
        error: 'Session not found',
        requestedId: req.params.sessionId,
        availableSessions: Array.from(memoryStore.keys()),
        message: 'Vercel spun up a different instance - session lost'
      });
    }
    
    session.current_step = step;
    session.choices = [...session.choices, choice];
    session.updated_at = new Date().toISOString();
    memoryStore.set(req.params.sessionId, session);
    
    console.log(`Session updated: ${req.params.sessionId}, step: ${step}`);
    res.json(session);
  } catch (error) {
    console.error('Error updating session:', error);
    res.status(500).json({ error: 'Failed to update session' });
  }
});

app.post('/api/session/:sessionId/complete', async (req, res) => {
  try {
    const session = memoryStore.get(req.params.sessionId);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    session.completed = true;
    session.updated_at = new Date().toISOString();
    memoryStore.set(req.params.sessionId, session);
    res.json(session);
  } catch (error) {
    console.error('Error completing session:', error);
    res.status(500).json({ error: 'Failed to complete session' });
  }
});

// Export for Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  return new Promise((resolve) => {
    app(req as any, res as any, () => {
      res.status(404).end();
      resolve(null);
    });
  });
}
