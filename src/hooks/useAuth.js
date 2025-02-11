// Esse hook controla o login/logout do usuário e gerencia o token de autenticação.

// 📌 Funcionalidades: ✔️ Armazena o estado do usuário autenticado.
// ✔️ Salva o token no localStorage.
// ✔️ Fornece login() e logout().

import { useState, useEffect } from "react";

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        if (!userData || !userData.email || !userData.token) {
            throw new Error("Dados do usuário inválidos.");
        }
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return { user, login, logout, isAuthenticated: !!user };
};
