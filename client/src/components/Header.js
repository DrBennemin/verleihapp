import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.svg";
import PropTypes from "prop-types";

Header.propTypes = {
  title: PropTypes.string,
};

function Header({ title }) {
  return (
    <Container>
      <Link to="/menu">
        <img src={Menu} alt="menu-icon" />
      </Link>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.header`
  display: grid;
  grid-template: 80px 1fr / 120px 1fr 120px;
  position: fixed;
  width: 100vw;
  background-color: #fcfcfc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  & > h1 {
    font-size: 1em;
    text-transform: uppercase;
  }
  & :first-child {
    justify-self: center;
    align-self: center;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
