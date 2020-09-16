import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Add from "../assets/plus.svg";

function footer() {
  return (
    <Footer>
      <Link to="/rental-process">
        <Button type="button">
          <img src={Add} alt="plus" />
        </Button>
      </Link>
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
  cursor: pointer;
`;

export default footer;
