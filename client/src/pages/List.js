import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";

function List() {
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
        <ListItem />
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
