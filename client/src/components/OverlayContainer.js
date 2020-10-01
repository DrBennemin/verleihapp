import React from "react";
import PropTypes from "prop-types";
import OverlayModal from "./OverlayModal";
import styled from "@emotion/styled";

OverlayContainer.propTypes = {
  onHandleDelete: PropTypes.func,
  onSetOverlay: PropTypes.func,
};

function OverlayContainer({ onSetOverlay, onHandleDelete }) {
  return (
    <Container>
      <OverlayModal
        onHandleDelete={onHandleDelete}
        onSetOverlay={onSetOverlay}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0;
  right: 0;
  height: 100%;
  position: fixed;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.9);
`;

export default OverlayContainer;
