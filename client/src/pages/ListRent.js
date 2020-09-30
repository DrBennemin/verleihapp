import React from "react";
import styled from "@emotion/styled";
import HeaderGoBack from "../components/HeaderGoBack";
import Menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
import ListItemRent from "../components/ListItemRent";

function List() {
  return (
    <>
      <HeaderGoBack
        title={"Artikel auf Lager"}
        left={
          <Link to="/menu">
            <img src={Menu} alt="menu-icon" />
          </Link>
        }
      />
      <Container>
        <ListItemRent />
      </Container>
    </>
  );
}

export default List;

const Container = styled.section`
  margin-bottom: 80px;
  margin-top: 85px;
  width: 90%;
`;
