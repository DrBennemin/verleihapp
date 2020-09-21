import React from "react";
import styled from "@emotion/styled";
import Header from "../components/HeaderGoBack";

function MainMenu() {
  return (
    <div>
      <Header title={"Menü"} />
      <Container>
        <ul>
          <li>Artikel auf Lager</li>
          <li>Artikel verliehen</li>
          <li>Artikel gesperrt</li>
          <li>Rückgabe überfällig</li>
          <li>Neuen Artikel anlegen</li>
        </ul>
      </Container>
    </div>
  );
}

const Container = styled.nav`
  padding: 30px 0;
`;

export default MainMenu;
