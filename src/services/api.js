export async function fetchCustomers() {
  const response = await fetch('http://localhost:4000/api/customers');
  if (!response.ok) throw new Error('Erro ao buscar usuários');
  return await response.json();
}