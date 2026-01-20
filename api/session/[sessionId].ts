import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';

const memoryStore = new Map();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sessionId } = req.query;

  try {
    if (process.env.POSTGRES_URL || process.env.DATABASE_URL) {
      const pool = new Pool({
        connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
      });
      
      const result = await pool.query(
        'SELECT * FROM quest_sessions WHERE session_id = $1',
        [sessionId]
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
      return res.status(200).json(session);
    }
  } catch (error) {
    console.error('Error fetching session:', error);
    return res.status(500).json({ error: 'Failed to fetch session' });
  }
}
