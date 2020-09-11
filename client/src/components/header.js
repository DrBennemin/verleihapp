import React from "react";
import styled from "@emotion/styled";
import Menu from "../assets/menu.svg";
import Search from "../assets/search.svg";

const Header = styled.div`
  display: flex;
  padding: 46px 0 13px 0;
  flex-direction: row;
  place-items: center;
  background-color: #fcfcfc;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  & > h1 {
    font-size: 1em;
    text-transform: uppercase;
  }
`;

function header() {
  return (
    <Header>
      <a href="#">
        <img src={Menu} alt="menu-icon" />
      </a>
      <h1>Verleih-app</h1>
      <a href="#">
        <img src={Search} alt="search-icon" />
      </a>
    </Header>
  );
}

export default header;
