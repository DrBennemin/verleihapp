import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import ArrowLeft from "../assets/arrow-left.svg";
import Search from "../assets/search.svg";

function HeaderGoBack({ title }) {
  const history = useHistory();

  return (
    <Container>
      <Link onClick={() => history.goBack()}>
        <img src={ArrowLeft} alt="go-back-button" />
      </Link>
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

export default HeaderGoBack;
