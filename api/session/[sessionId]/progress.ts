import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';

const memoryStore = new Map();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sessionId } = req.query;
  const { step, choice } = req.body;

  try {
    if (process.env.POSTGRES_URL || process.env.DATABASE_URL) {
      const pool = new Pool({
        connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
      });
      
      const result = await pool.query(
        `UPDATE quest_sessions 
         SET current_step = $1, 
             choices = choices || $2::jsonb,
             updated_at = CURRENT_TIMESTAMP
         WHERE session_id = $3 
         RETURNING *`,
        [step, JSON.stringify([choice]), sessionId]
      );
      
      await pool.end();
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Session not found' });
      }
      
      return res.status(200).json(result.rows[0]);
    } else {
      const session = memoryStore.get(sessionId);
      if (!session) {
        return res.status(404).json({ error: 'Session not found' });
      }
      session.current_step = step;
      session.choices = [...session.choices, choice];
      session.updated_at = new Date().toISOString();
      memoryStore.set(sessionId, session);
      return res.status(200).json(session);
    }
  } catch (error) {
    console.error('Error updating session:', error);
    return res.status(500).json({ error: 'Failed to update session' });
  }
}
