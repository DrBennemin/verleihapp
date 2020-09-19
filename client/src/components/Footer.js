import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Rent from "../assets/rent.svg";
import BottomBar from "../assets/bottom-bar.svg";
import BottomBarAvailable from "../assets/bottom-bar-available.svg";
import BottomBarNotAvailable from "../assets/bottom-bar-not-available.svg";
import BottomBarRented from "../assets/bottom-bar-rented.svg";
import BottomBarSearch from "../assets/bottom-bar-search.svg";

function footer() {
  return (
    <Footer>
      <FooterLeft>
        <img src={BottomBarAvailable} alt="bottom-bar-available" />
        <img src={BottomBarRented} alt="bottom-bar-rented" />
      </FooterLeft>
      <FooterMiddle>
        <Link to="/new/rent">
          <Button type="button">
            <img src={Rent} alt="plus" />
          </Button>
        </Link>
      </FooterMiddle>
      <FooterRight>
        <img src={BottomBarNotAvailable} alt="bottom-bar-not-available" />
        <img src={BottomBarSearch} alt="bottom-bar-search" />
      </FooterRight>
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
  height: 67px;
`;

const FooterLeft = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  background-color: #28beb4;
  height: 67px;
`;
const FooterMiddle = styled.div`
  display: flex;
  background-image: url(${BottomBar});
  width: 90.29px;
  margin: 0 -1px;
  & a {
    margin: 0 auto;
    margin-top: -30px;
  }
`;
const FooterRight = styled.div`
  display: flex;
  border: 2px solid #28beb4;
  justify-content: space-around;
  background-color: #28beb4;
  height: 67px;
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
