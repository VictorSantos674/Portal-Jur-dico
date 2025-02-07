import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

export default function Home() {
  return (
    <HomeContainer>
      <h2>Bem-vindo ao Portal do Tribunal</h2>
      <p>Consulte processos, audiências e fique atualizado sobre decisões judiciais.</p>
    </HomeContainer>
  );
}
