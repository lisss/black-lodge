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

    if (process.env.POSTGRES_URL || process.env.DATABASE_URL) {
      const pool = new Pool({
        connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
      });
      
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

      const result = await pool.query(
        'INSERT INTO quest_sessions (session_id, current_step) VALUES ($1, $2) RETURNING *',
        [sessionId, 0]
      );
      
      await pool.end();
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
