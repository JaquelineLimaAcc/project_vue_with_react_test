import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { uploadJsonToArtifactory } from '../artifactoryUpload.js';

const router = express.Router();

// Resolve o diretório do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho absoluto para o arquivo JSON do frontend
const jsonFilePath = path.join(__dirname, '../files/formCustomers.json');

// GET: retorna conteúdo do JSON local
router.get('/get-json', (req, res) => {
  try {
    const data = fs.readFileSync(jsonFilePath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler o arquivo JSON.' });
  }
});

// POST: lê o JSON local e envia para o Artifactory
router.post('/upload-json', async (req, res) => {
  try {    
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    const result = await uploadJsonToArtifactory(JSON.parse(jsonData));
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;