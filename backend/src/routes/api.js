import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/customers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Customers');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;