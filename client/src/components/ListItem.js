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
    <Container>
      {items?.map((item) => (
        <ListItem key={item.id}>
          <p>{item.headline}</p>
          <p>{item.state}</p>
        </ListItem>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
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

// const Preview = styled.img`
//   max-width: 70px;
//   max-height: 70px;
//   align-self: center;
// `;

// const Titel = styled.div`
//   display: flex;
//   font-weight: bold;
// `;

// const Details = styled.div`
//   padding: 0 10px;
// `;

// const Status = styled.img`
//   width: 25px;
//   height: 18px;
//   padding-right: 10px;
// `;

// const SerialNo = styled.span`
//   display: flex;
// `;

export default ListItem;
