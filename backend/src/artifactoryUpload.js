const axios = require('axios');
const fs = require('fs');

const ARTIFACTORY_URL = process.env.ARTIFACTORY_BASE_URL;
const USERNAME = process.env.ARTIFACTORY_USERNAME;
const PASSWORD = process.env.ARTIFACTORY_PASSWORD;
const DEFAULT_REPO = process.env.ARTIFACTORY_DEFAULT_REPO;

// Função recebe caminho do arquivo local e caminho alvo no artifactory
async function uploadJsonToArtifactory(localFilePath, repoPath = DEFAULT_REPO) {
  const jsonData = fs.readFileSync(localFilePath);

  const response = await axios.put(
    `${ARTIFACTORY_URL}/${repoPath}`,
    jsonData,
    {
      auth: { username: USERNAME, password: PASSWORD },
      headers: { 'Content-Type': 'application/json' }
    }
  );

  return response.data;
}

module.exports = { uploadJsonToArtifactory };