import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
import RentItem from "../components/RentItem";

function Rent() {
  return (
    <>
      <Header
        title={"Verleih-app"}
        left={
          <Link to="/menu">
            <img src={Menu} alt="menu-icon" />
          </Link>
        }
      />
      <Container>
        <RentItem />
      </Container>
    </>
  );
}

export default Rent;

const Container = styled.section`
  margin-bottom: 80px;
  margin-top: 85px;
  width: 90%;
`;
