import pool from '../db.js';
import router from './api.js';

router.post('/json-to-sql', async (req, res) => {
  const jsonData = req.body;

  if (!Array.isArray(jsonData) || jsonData.length === 0) {
    return res.status(400).json({ error: "Invalid JSON data" });
  }

  const tableName = 'json_data';
  console.log('Received JSON data:', jsonData);

});

export default router