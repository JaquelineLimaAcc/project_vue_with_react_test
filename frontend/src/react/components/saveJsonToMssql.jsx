import React from "react";
import { saveJsonToMssql } from "../../services/api";
import jsonData from '@/files/formCustomers.json';

export default function SaveJsonToMssql() {

    const handleJsonToMssql = async () => {
        try {
        const response = await saveJsonToMssql(jsonData);
        console.log("Resposta do MSSQL: ", response);
        alert("Dados enviados para MSSQL com sucesso!");
        }catch (err) {
        console.error("Erro ao salvar no MSSQL: ", err);
        alert("Erro ao salvar no MSSQL: " + err.message);
        }
    };

  return <div>
    <h1>Save JSON to MSSQL Component</h1>
    <button onClick={handleJsonToMssql}>Enviar Json para Mssql</button>
  </div>;
}