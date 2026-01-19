import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sessionId } = req.query;

  try {
    const result = await pool.query(
      `UPDATE quest_sessions 
       SET completed = TRUE, updated_at = CURRENT_TIMESTAMP 
       WHERE session_id = $1 
       RETURNING *`,
      [sessionId]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error completing session:', error);
    res.status(500).json({ error: 'Failed to complete session' });
  }
}
