import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowLeft from "../assets/arrow-left.svg";

function HeaderGoBack() {
  const history = useHistory();

  return (
    <HeaderGoBackContainer>
      <BackButton>
        <Link onClick={() => history.goBack()}>
          <img src={ArrowLeft} alt="go-back-button" />
        </Link>
      </BackButton>
      <Title>Verleih-app</Title>
    </HeaderGoBackContainer>
  );
}

const HeaderGoBackContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 46px 0 13px 0;
  flex-direction: row;
  background-color: #fcfcfc;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  & > h1 {
    font-size: 1em;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
  }
`;

const BackButton = styled.nav`
  padding: 0.7em 0.2em;
  display: flex;
  margin: 0 1em;
  & > a > img {
    height: 1em;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HeaderGoBack;
