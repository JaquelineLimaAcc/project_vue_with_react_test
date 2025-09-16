// Exemplo de componente React para consumir fetchCustomers
import React, { useEffect, useState } from 'react';
import { fetchCustomers } from '@/services/api.js';

function CustomersList() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadCustomers() {
      try {
        const data = await fetchCustomers();
        setCustomers(data);
      } catch (err) {
        setError(err.message);
      }
    }
    loadCustomers();
  }, []);

  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.Id}>{customer.AccountHolderName}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomersList;