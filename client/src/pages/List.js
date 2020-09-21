import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

function List() {
  return (
    <>
      <Header title={"Verleih-app"} />
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
