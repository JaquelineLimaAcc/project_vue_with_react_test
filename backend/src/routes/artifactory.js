const express = require('express');
const router = express.Router();
const { uploadJsonToArtifactory } = require('../artifactoryUpload');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload-json', upload.single('file'), async (req, res) => {
  try {
    const repoPath = req.body.repoPath || 'my-repo/path/data.json';
    const result = await uploadJsonToArtifactory(req.file.path, repoPath);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;