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
  max-width: 90%;
`;

const Titel = styled.span`
  font-weight: bold;
  padding: 0 10px;
`;

const Preview = styled.img`
  min-width: 40px;
  min-height: 40px;
`;

// const SerialNo = styled.span``;

function listItem() {
  return (
    <>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
      </ListItem>
    </>
  );
}

export default listItem;
