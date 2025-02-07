import { useState } from "react";

export default function Processos() {
  const [processo, setProcesso] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Consultar Processo</h2>
      <input
        type="text"
        placeholder="Digite o número do processo"
        value={processo}
        onChange={(e) => setProcesso(e.target.value)}
      />
      <button>Consultar</button>
    </div>
  );
}
