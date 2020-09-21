import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/HeaderClose";
import MenuAvailableSrc from "../assets/menu-available.svg";
import MenuNotAvailableSrc from "../assets/menu-not-available.svg";
import MenuRentedSrc from "../assets/menu-rented.svg";
import MenuDueDateSrc from "../assets/menu-due-date.svg";
import MenuNewArticleSrc from "../assets/menu-new-article.svg";
import MenuNewRentSrc from "../assets/menu-new-rent.svg";

function MainMenu() {
  return (
    <>
      <Header title={"Menü"} />
      <Container>
        <ul>
          <li>
            <img src={MenuAvailableSrc} alt="menu-avaiblable" />
            Artikel auf Lager
          </li>
          <li>
            <img src={MenuRentedSrc} alt="menu-rented" />
            Artikel verliehen
          </li>
          <li>
            <img src={MenuNotAvailableSrc} alt="menu-not-avaiblable" />
            Artikel gesperrt
          </li>
          <li>
            <img src={MenuDueDateSrc} alt="menu-due-date" />
            Rückgabe überfällig
          </li>
          <hr />
          <li>
            <img src={MenuNewArticleSrc} alt="menu-new-article" />
            Neuen Artikel anlegen
          </li>
          <li>
            <Link to="/new/rent">
              <img src={MenuNewRentSrc} alt="menu-new-article" />
              Artikel verleihen
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
}

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 1.4em;
  margin-bottom: 4em;
  margin-top: 4em;
  width: 90%;
  font-size: 1.2rem;
  & ul {
    list-style-type: none;
    padding: 0;
  }
  & li {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
  & img {
    display: inline;
    padding-right: 20px;
    max-height: 20px;
  }
  & a,
  a:hover,
  a:focus,
  a:visited,
  a:active {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
  }
`;

export default MainMenu;
