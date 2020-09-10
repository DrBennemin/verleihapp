import React from "react";
import styled from "@emotion/styled";
import Add from "../assets/plus.svg";

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  background-color: #28beb4;
`;

const Button = styled.button`
  display: flex;
  align-self: center;
  border-radius: 50px;
  background-color: #28beb4;
  border: none;
`;

function footer() {
  return (
    <div>
      <Footer>
        <Button>
          <img src={Add} alt="plus" />
        </Button>
      </Footer>
    </div>
  );
}

export default footer;
