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
            <ProductStatus>
              <State src={`/img/${item.state}.svg`} alt={item.state} />
              <SerialNo>{item.serialno}</SerialNo>
            </ProductStatus>
          </Details>
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: justify-start;
  background-color: white;
  padding: 10px;
  margin: 0.6em auto;
  border-radius: 50px;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
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
  max-width: 40px;
  max-height: 40px;
  align-self: center;
  border-radius: 50%;
`;

const Details = styled.div`
  padding: 0 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  white-space: nowrap;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductStatus = styled.div`
  display: flex;
  align-items: center;
`;

const State = styled.img`
  width: 16px;
  height: 16px;
`;

const SerialNo = styled.span``;

export default ListItem;
