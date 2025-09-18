const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function fetchCustomers() {
  const response = await fetch(`${API_URL}/api/customers`);
  if (!response.ok) throw new Error('Erro ao buscar usuários');
  return await response.json();
}

// Artifactory
// GET
export async function getJsonFromBackend() {
  const res = await fetch(`${API_URL}/artifactory/get-json`);
  if (!res.ok) throw new Error("Erro no GET");
  return res.json();
}

// POST
export async function postJsonToBackend(jsonData) {
  const res = await fetch(`${API_URL}/artifactory/upload-json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonData)
  });
  if (!res.ok) throw new Error("Erro no POST");
  return res.json();
}