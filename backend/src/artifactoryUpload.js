import axios from 'axios';
import fs from 'fs';

const ARTIFACTORY_URL = process.env.ARTIFACTORY_BASE_URL;
const USERNAME = process.env.ARTIFACTORY_USERNAME;
const PASSWORD = process.env.ARTIFACTORY_PASSWORD;
const REPO_PATH = process.env.ARTIFACTORY_DEFAULT_REPO + '/formCustomers.json';
const ARTIFACTORY_TOKEN = process.env.ARTIFACTORY_TOKEN;

// Função recebe caminho do arquivo local e caminho alvo no artifactory
export async function uploadJsonToArtifactory(jsonData) {
  const response = await axios.put(
    `${ARTIFACTORY_URL}/${REPO_PATH}`,
    JSON.stringify(jsonData),
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ARTIFACTORY_TOKEN}`
      }
    }
  );
  return response.data;
}