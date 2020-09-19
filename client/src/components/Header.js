import React from "react";
import styled from "@emotion/styled";
import Menu from "../assets/menu.svg";
import Search from "../assets/search.svg";

function Header({ title }) {
  return (
    <Container>
      <img src={Menu} alt="menu-icon" />
      <Title>{title}</Title>
      <img src={Search} alt="search-icon" />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
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

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
