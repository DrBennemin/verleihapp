import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Rent from "../assets/rent.svg";
import BottomBar from "../assets/bottom-bar.svg";

function footer() {
  return (
    <Footer>
      <FooterLeft>content</FooterLeft>
      <FooterMiddle>
        <Link to="/new/rent">
          <Button type="button">
            <img src={Rent} alt="plus" />
          </Button>
        </Link>
      </FooterMiddle>
      <FooterRight>content</FooterRight>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 72px;
`;

const FooterLeft = styled.div`
  flex-grow: 1;
  background-color: #28beb4;
  height: 72px;
`;
const FooterMiddle = styled.div`
  display: flex;
  background-image: url(${BottomBar});
  width: 375px;
  & a {
    margin: 0 auto;
    margin-top: -30px;
  }
`;
const FooterRight = styled.div`
  background-color: #28beb4;
  height: 72px;
  flex-grow: 1;
`;

const Button = styled.button`
  padding: 10px 8.8px 11px 9.2px;
  border-radius: 50px;
  background-color: #28beb4;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

export default footer;
