import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import HeaderGoBack from "../components/HeaderGoBack";
import MenuAvailableSrc from "../assets/menu-available.svg";
import MenuNotAvailableSrc from "../assets/menu-not-available.svg";
import MenuRentedSrc from "../assets/menu-rented.svg";
import MenuDueDateSrc from "../assets/menu-due-date.svg";
import MenuNewItemSrc from "../assets/menu-new-item.svg";
import MenuNewRentSrc from "../assets/menu-new-rent.svg";

function MainMenu() {
  return (
    <>
      <HeaderGoBack title={"Menü"} />
      <Container>
        <ul>
          <Link to="/list/available">
            <li>
              <img src={MenuAvailableSrc} alt="lagernd" />
              Artikel auf Lager
            </li>
          </Link>

          <Link to="/list/notavailable">
            <li>
              <img src={MenuNotAvailableSrc} alt="gesperrt" />
              Artikel gesperrt
            </li>
          </Link>
          <Link to="/list/rent">
            <li>
              <img src={MenuRentedSrc} alt="vermietet" />
              Artikel verliehen
            </li>
          </Link>
          <hr />
          <li>
            <img src={MenuDueDateSrc} alt="menu-due-date" />
            Rückgabe überfällig
          </li>
          <Link to="/new/item">
            <li>
              <img src={MenuNewItemSrc} alt="menu-new-item" />
              Neuen Artikel anlegen
            </li>
          </Link>
          <Link to="/new/rent">
            <li>
              <img src={MenuNewRentSrc} alt="menu-new-item" />
              Artikel verleihen
            </li>
          </Link>
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
  margin-top: 2em;
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
