// Este hook controla o tema claro/escuro do portal.

// 📌 Funcionalidades: ✔️ Alterna entre tema claro e escuro.
// ✔️ Armazena o tema no localStorage.
// ✔️ Atualiza a classe do <body>.

import { useState, useEffect } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
};
