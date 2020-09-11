import React from "react";
import styled from "@emotion/styled";
import ItemPreview from "../assets/item-preview.png";

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 50px;
  max-width: 75%;
`;

const Titel = styled.span`
  font-weight: bold;
`;

const SerialNo = styled.span``;

function listItem() {
  return (
    <>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
        <SerialNo>8710103565840</SerialNo>
      </ListItem>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <img src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
    </>
  );
}

export default listItem;
