import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background: #003366;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 16px;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <h1 style={{ color: "white" }}>Tribunal Portal</h1>
      <NavLinks>
        <Link to="/" aria-label>Home</Link>
        <Link to="/processos" aria-label>Processos</Link>
        <Link to="/contato" aria-label>Contato</Link>
      </NavLinks>
    </NavbarContainer>
  );
}
