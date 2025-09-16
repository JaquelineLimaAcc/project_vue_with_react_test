import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/customers', async (req, res) => {
  try {
    const result = await pool.request().query('SELECT * FROM Customers');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: "DB error", details: err.message });
  }
});

export default router;