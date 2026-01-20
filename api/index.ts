import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';

// In-memory storage fallback
const memoryStore = new Map();

const pool = process.env.DATABASE_URL || process.env.POSTGRES_URL 
  ? new Pool({
      connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL,
    })
  : null;

// Initialize database if available
async function initDB() {
  if (!pool) return;
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quest_sessions (
        id SERIAL PRIMARY KEY,
        session_id VARCHAR(255) UNIQUE NOT NULL,
        current_step INTEGER DEFAULT 0,
        choices JSONB DEFAULT '[]',
        completed BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  } catch (err) {
    console.error('DB init error:', err);
  }
}

initDB().catch(console.error);

function setCorsHeaders(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url, method } = req;
  
  // Health check
  if (url === '/health' || url === '/api/health') {
    return res.status(200).json({ status: 'ok', storage: pool ? 'postgres' : 'memory' });
  }
  
  // Start session
  if ((url === '/api/session/start' || url === '/session/start') && method === 'POST') {
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

      if (pool) {
        const result = await pool.query(
          'INSERT INTO quest_sessions (session_id, current_step) VALUES ($1, $2) RETURNING *',
          [sessionId, 0]
        );
        return res.status(200).json(result.rows[0]);
      } else {
        memoryStore.set(sessionId, session);
        return res.status(200).json(session);
      }
    } catch (error) {
      console.error('Error creating session:', error);
      return res.status(500).json({ error: 'Failed to create session' });
    }
  }
  
  // Get session
  const getSessionMatch = url?.match(/\/api\/session\/([^\/]+)$/) || url?.match(/\/session\/([^\/]+)$/);
  if (getSessionMatch && method === 'GET') {
    const sessionId = getSessionMatch[1];
    try {
      if (pool) {
        const result = await pool.query(
          'SELECT * FROM quest_sessions WHERE session_id = $1',
          [sessionId]
        );
        if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Session not found' });
        }
        return res.status(200).json(result.rows[0]);
      } else {
        const session = memoryStore.get(sessionId);
        if (!session) {
          return res.status(404).json({ error: 'Session not found' });
        }
        return res.status(200).json(session);
      }
    } catch (error) {
      console.error('Error fetching session:', error);
      return res.status(500).json({ error: 'Failed to fetch session' });
    }
  }
  
  // Update progress
  const progressMatch = url?.match(/\/api\/session\/([^\/]+)\/progress$/) || url?.match(/\/session\/([^\/]+)\/progress$/);
  if (progressMatch && method === 'PUT') {
    const sessionId = progressMatch[1];
    const { currentStep, choices } = req.body || {};
    try {
      if (pool) {
        const result = await pool.query(
          'UPDATE quest_sessions SET current_step = $1, choices = $2, updated_at = CURRENT_TIMESTAMP WHERE session_id = $3 RETURNING *',
          [currentStep, JSON.stringify(choices), sessionId]
        );
        if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Session not found' });
        }
        return res.status(200).json(result.rows[0]);
      } else {
        const session = memoryStore.get(sessionId);
        if (!session) {
          return res.status(404).json({ error: 'Session not found' });
        }
        session.current_step = currentStep;
        session.choices = choices;
        session.updated_at = new Date().toISOString();
        memoryStore.set(sessionId, session);
        return res.status(200).json(session);
      }
    } catch (error) {
      console.error('Error updating session:', error);
      return res.status(500).json({ error: 'Failed to update session' });
    }
  }
  
  // Complete session
  const completeMatch = url?.match(/\/api\/session\/([^\/]+)\/complete$/) || url?.match(/\/session\/([^\/]+)\/complete$/);
  if (completeMatch && method === 'POST') {
    const sessionId = completeMatch[1];
    try {
      if (pool) {
        const result = await pool.query(
          'UPDATE quest_sessions SET completed = TRUE, updated_at = CURRENT_TIMESTAMP WHERE session_id = $1 RETURNING *',
          [sessionId]
        );
        if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Session not found' });
        }
        return res.status(200).json(result.rows[0]);
      } else {
        const session = memoryStore.get(sessionId);
        if (!session) {
          return res.status(404).json({ error: 'Session not found' });
        }
        session.completed = true;
        session.updated_at = new Date().toISOString();
        memoryStore.set(sessionId, session);
        return res.status(200).json(session);
      }
    } catch (error) {
      console.error('Error completing session:', error);
      return res.status(500).json({ error: 'Failed to complete session' });
    }
  }
  
  return res.status(404).json({ error: 'Not found' });
}
