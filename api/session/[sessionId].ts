import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { sessionId } = req.query;

  if (req.method === 'GET') {
    try {
      const result = await pool.query(
        'SELECT * FROM quest_sessions WHERE session_id = $1',
        [sessionId]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Session not found' });
      }
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error fetching session:', error);
      res.status(500).json({ error: 'Failed to fetch session' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
