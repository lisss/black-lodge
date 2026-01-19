import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const result = await pool.query(
      'INSERT INTO quest_sessions (session_id, current_step) VALUES ($1, $2) RETURNING *',
      [sessionId, 0]
    );
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
}
