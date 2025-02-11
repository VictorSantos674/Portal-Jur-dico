import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import "../styles/login.css";

const Login = () => {
    const { values, handleChange } = useForm({ email: "", password: "" });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "admin@tribunal.com" && password === "123456") {
            login({ email: values.email, token: "fake-token" }); // Salva pra autenticar depois
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
                    name="email"
                    value={values.email} 
                    onChange={handleChange} 
                    required 
                />

                <label>Senha:</label>
                <input 
                    type="password" 
                    name="password"
                    value={values.password} 
                    onChange={handleChange} 
                    required 
                />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
