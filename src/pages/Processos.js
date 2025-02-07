import { useState } from "react";
import { buscarProcesso } from "../services/api";

export default function Processos() {
  const [processo, setProcesso] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleConsulta = async () => {
    const dados = await buscarProcesso(processo);
    setResultado(dados);
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
      <button onClick={handleConsulta}>Consultar</button>
      {resultado && <p>Detalhes do Processo: {JSON.stringify(resultado)}</p>}
    </div>
  );
}
