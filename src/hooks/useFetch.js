// Este hook facilita chamadas HTTP para a API.

// 📌 Funcionalidades: ✔️ Faz GET, POST, PUT, DELETE.
// ✔️ Gerencia loading, erro e resposta.
// ✔️ Pode ser usado em qualquer parte do app.

import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error("Erro ao buscar dados");
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, options]);

    return { data, loading, error };
};
