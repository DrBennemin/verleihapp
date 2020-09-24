import React, { useEffect, useState } from "react";
import { getItems } from "../api/items";
import styled from "@emotion/styled";
// import { Link } from "react-router-dom";
// import ItemPreviewSrc from "../assets/item-preview.png";
// import ItemStatusAvailableSrc from "../assets/available.svg";
// import ItemStatusNotAvailableSrc from "../assets/not-available.svg";
// import ItemStatusRentedSrc from "../assets/rented.svg";

function ListItem() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const loadedItems = await getItems();
        console.log(loadedItems);
        setItems(loadedItems);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      {items?.map((item) => (
        <Container key={item.id}>
          <ItemPreview src={item.imgSrc} />
          <Details>
            <Title>{item.headline}</Title>
            <SerialNo>{item.serialno}</SerialNo>
            <State>{item.state}</State>
          </Details>
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: justify-start;
  background-color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 50px;
  & > a,
  a:hover,
  a:focus,
  a:visited,
  a:active {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;

const ItemPreview = styled.img`
  max-width: 70px;
  max-height: 70px;
  align-self: center;
  border-radius: 50%;
`;

const Title = styled.div`
  display: flex;
  font-weight: bold;
`;

const Details = styled.div`
  padding: 0 10px;
`;

const State = styled.span`
  width: 25px;
  height: 18px;
  padding-right: 10px;
`;

const SerialNo = styled.span`
  display: flex;
`;

export default ListItem;
