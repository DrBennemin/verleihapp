import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/HeaderGoBack";
import MenuAvailable from "../assets/menu-available.svg";
import MenuNotAvailable from "../assets/menu-not-available.svg";
import MenuRented from "../assets/menu-rented.svg";
import MenuDueDate from "../assets/menu-due-date.svg";
import MenuNewArticle from "../assets/menu-new-article.svg";
import MenuNewRent from "../assets/menu-new-rent.svg";

function MainMenu() {
  return (
    <>
      <Header title={"Menü"} />
      <Container>
        <ul>
          <li>
            <img src={MenuAvailable} alt="menu-avaiblable" />
            Artikel auf Lager
          </li>
          <li>
            <img src={MenuRented} alt="menu-rented" />
            Artikel verliehen
          </li>
          <li>
            <img src={MenuNotAvailable} alt="menu-not-avaiblable" />
            Artikel gesperrt
          </li>
          <li>
            <img src={MenuDueDate} alt="menu-due-date" />
            Rückgabe überfällig
          </li>
          <hr />
          <li>
            <img src={MenuNewArticle} alt="menu-new-article" />
            Neuen Artikel anlegen
          </li>
          <li>
            <Link to="/new/rent">
              <img src={MenuNewRent} alt="menu-new-article" />
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
  padding-top: 20px;
  margin-bottom: 80px;
  margin-top: 80px;
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
