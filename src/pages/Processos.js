import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const API_URL = "https://api.exemplo.com/processos"; // Defina a URL da API

export default function Processos() {
  const [processo, setProcesso] = useState("");
  const { data: resultado, loading, error, refetch } = useFetch("", {}, false);

  const handleConsulta = async () => {
    if (!processo) return alert("Digite o número do processo.");
    refetch(`${API_URL}/${processo}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Consultar Processo</h2>
      <input
        type="text"
        placeholder="Digite o número do processo"
        value={processo}
        onChange={(e) => setProcesso(e.target.value)}
      />
      <button onClick={handleConsulta} disabled={loading}>
        {loading ? "Buscando..." : "Consultar"}
      </button>
      {error && <p style={{ color: "red" }}>Erro ao buscar processo: {error}</p>}
      {resultado && <p>Detalhes do Processo: {JSON.stringify(resultado)}</p>}
    </div>
  );
}
