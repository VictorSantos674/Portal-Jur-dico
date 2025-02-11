// Este hook facilita chamadas HTTP para a API.

// 📌 Funcionalidades: ✔️ Faz GET, POST, PUT, DELETE.
// ✔️ Gerencia loading, erro e resposta.
// ✔️ Pode ser usado em qualquer parte do app.

import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const controller = new AbortController();
            const response = await fetch(url, { ...options, signal: controller.signal });
            if (!response.ok) throw new Error("Erro ao buscar dados");
            const result = await response.json();
            setData(result);
        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (autoFetch) fetchData();
    }, [url, options, autoFetch]);

    return { data, loading, error };
};
