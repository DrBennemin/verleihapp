import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import DeleteSrc from "../assets/delete.svg";
import CloseSrc from "../assets/close.svg";

HeaderDelete.propTypes = {
  title: PropTypes.string,
};

function HeaderDelete({ title }) {
  const history = useHistory();

  return (
    <Container>
      <Link onClick={() => history.goBack()}>
        <img src={CloseSrc} alt="close-button" />
      </Link>
      <Title>{title}</Title>
      <Link to="/delete/article">
        <img src={DeleteSrc} alt="delete-button" />
      </Link>
    </Container>
  );
}

const Container = styled.header`
  display: grid;
  grid-template: 5em 1fr / 7.5em 1fr 7.5em;
  position: fixed;
  width: 100vw;
  background-color: #fcfcfc;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  & > h1 {
    font-size: 1em;
    text-transform: uppercase;
  }
  & :first-child {
    justify-self: center;
    align-self: center;
  }
  & :last-child {
    justify-self: center;
    align-self: center;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HeaderDelete;
