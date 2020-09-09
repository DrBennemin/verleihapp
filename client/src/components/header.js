import React from "react";
import styled from "@emotion/styled";
import Menu from "../assets/menu.svg";
import Search from "../assets/search.svg";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.75);
  & > h1 {
    font-size: 1em;
  }
`;

function header() {
  return (
    <Header>
      <img src={Menu} alt="menu-icon" />
      <h1>Verleihapp</h1>
      <img src={Search} alt="search-icon" />
    </Header>
  );
}

export default header;
