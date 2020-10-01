import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

OverlayModal.propTypes = {
  onHandleDelete: PropTypes.func,
  onSetOverlay: PropTypes.func,
};

function OverlayModal({ onHandleDelete, onSetOverlay }) {
  return (
    <Container>
      <Header>Überschrift</Header>
      <Main>Wollen Sie diesen Artikel wirklich löschen?</Main>
      <Footer>
        <button onClick={() => onHandleDelete(true)}>Ja</button>
        <button onClick={() => onSetOverlay(true)}>Abbrechen</button>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;
const Header = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  border-bottom: 1px solid #dedede;
`;
const Main = styled.div`
  padding: 20px;
  border-bottom: 1px solid #dedede;
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  & button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default OverlayModal;
