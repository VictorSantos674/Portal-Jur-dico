import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles/global.css";

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <ErrorBoundary>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </ErrorBoundary>            
        </Router>
    );
}

export default App;
