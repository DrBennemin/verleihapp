import styled from "@emotion/styled";
import React from "react";
import Logo from "../assets/medirent_logo_white.svg";

function LoadingScreen() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
    </Container>
  );
}

const Container = styled.div`
  background-color: #28beb4;
`;

export default LoadingScreen;
