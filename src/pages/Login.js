import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../styles/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "admin@tribunal.com" && password === "123456") {
            login(); // Salva pra autenticar depois
            navigate("/dashboard"); // Redireciona para o painel
        } else {
            alert("Credenciais inválidas! Tente novamente.");
        }
    };

    return (
        <div className="login-container">
            <h2>Acesso ao Portal</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                <label>Senha:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
