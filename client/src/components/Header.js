import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Logo from "../assets/medirent_logo_primary.svg";

Header.propTypes = {
  title: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
};

function Header({ title, left, right }) {
  return (
    <Container>
      {left}
      <LogoImg src={Logo} alt="Logo" />
      {/* <Title>{title}</Title> */}
      {right}
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
  & :first-child {
    justify-self: center;
    align-self: center;
  }
`;

// s

const LogoImg = styled.img`
  height: 2rem;
  display: flex;
  align-self: center;
`;

export default Header;
