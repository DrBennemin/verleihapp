import React from "react";
import styled from "@emotion/styled";
import Add from "../assets/plus.svg";

function footer() {
  return (
    <Footer>
      <Button href="#">
        <img src={Add} alt="plus" />
      </Button>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #28beb4;
`;

const Button = styled.button`
  display: flex;
  padding: 10px;
  align-self: center;
  border-radius: 50px;
  background-color: #28beb4;
  border: 10px solid #f6f6f6;
  margin-bottom: 35px;
  margin-top: -35px;
`;

export default footer;
