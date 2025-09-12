const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function fetchCustomers() {
  const response = await fetch(`${API_URL}/api/customers`);
  if (!response.ok) throw new Error('Erro ao buscar usuários');
  return await response.json();
}