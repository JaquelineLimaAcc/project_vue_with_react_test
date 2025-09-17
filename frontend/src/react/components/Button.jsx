import React from 'react';
import './Button.css';
import dataCustomers from '@/files/formCustomers.json';
import { getJsonFromBackend, postJsonToBackend } from "../../services/api";

const CustomerJson = () => {
  const handlePost = async () => {
    try {
      const data = await postJsonToBackend(dataCustomers);
      console.log("POST: " + JSON.stringify(data));
    } catch (err) {
      console.log("Erro no POST: " + err.message);
    }
  };

  const handleGet = async () => {
    try {
      const data = await getJsonFromBackend();
      alert("GET: " + JSON.stringify(data));
    } catch (err) {
      alert("Erro no GET: " + err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button className="button getJson" onClick={handleGet}>
        GET
      </button>
      <button className="button postJson" onClick={handlePost}>
        POST
      </button>
    </div>
  );
};

export default CustomerJson;
