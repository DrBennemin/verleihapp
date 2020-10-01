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
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
`;
const Header = styled.div``;
const Main = styled.div``;
const Footer = styled.div``;

export default OverlayModal;
