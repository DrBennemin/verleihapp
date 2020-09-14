import React from "react";
import styled from "@emotion/styled";
import ListItem from "../components/ListItem";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 10px 0 30px 0;
`;

function List() {
  return (
    <Main>
      <ListItem />
    </Main>
  );
}

export default List;
