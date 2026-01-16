import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const PORT = process.env.PORT || 3001;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/blacklodge',
});

app.use(cors());
app.use(express.json());

async function initDB() {
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
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/session/start', async (req, res) => {
  try {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const result = await pool.query(
      'INSERT INTO quest_sessions (session_id, current_step) VALUES ($1, $2) RETURNING *',
      [sessionId, 0]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

app.get('/api/session/:sessionId', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM quest_sessions WHERE session_id = $1',
      [req.params.sessionId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Failed to fetch session' });
  }
});

app.post('/api/session/:sessionId/progress', async (req, res) => {
  try {
    const { step, choice } = req.body;
    const result = await pool.query(
      `UPDATE quest_sessions 
       SET current_step = $1, 
           choices = choices || $2::jsonb,
           updated_at = CURRENT_TIMESTAMP
       WHERE session_id = $3 
       RETURNING *`,
      [step, JSON.stringify([choice]), req.params.sessionId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating session:', error);
    res.status(500).json({ error: 'Failed to update session' });
  }
});

app.post('/api/session/:sessionId/complete', async (req, res) => {
  try {
    const result = await pool.query(
      `UPDATE quest_sessions 
       SET completed = TRUE, updated_at = CURRENT_TIMESTAMP 
       WHERE session_id = $1 
       RETURNING *`,
      [req.params.sessionId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error completing session:', error);
    res.status(500).json({ error: 'Failed to complete session' });
  }
});

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
