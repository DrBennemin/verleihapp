import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowLeft from "../assets/arrow-left.svg";

function headerGoBack() {
  const history = useHistory();

  return (
    <HeaderGoBack>
      <BackButton>
        <Link onClick={() => history.goBack()}>
          <img src={ArrowLeft} alt="go-back-button" />
        </Link>
      </BackButton>
      <Title>Verleih-app</Title>
    </HeaderGoBack>
  );
}

const HeaderGoBack = styled.header`
  display: grid;
  grid-template: 4em 1fr / 4em 1fr 4em;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  & > h1 {
    font-size: 1em;
    text-transform: uppercase;
  }
`;

const BackButton = styled.nav`
  padding: 0.7em 0.2em;
  display: flex;
  margin: 0 1em;
  justify-content: space-between;
  & > a {
    display: flex;
    padding: 0.7em;
  }
  & > a > img {
    height: 1em;
  }
`;

const Title = styled.h1`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default headerGoBack;
