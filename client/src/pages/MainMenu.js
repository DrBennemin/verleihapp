import React from "react";
import styled from "@emotion/styled";
import Header from "../components/HeaderGoBack";

function MainMenu() {
  return (
    <>
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
    </>
  );
}

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-bottom: 80px;
  margin-top: 80px;
  width: 90%;
  font-size: 1.2rem;
  & ul {
    list-style-type: none;
    padding: 0;
  }
  & ul > li {
    padding: 20px 0;
  }
`;

export default MainMenu;
