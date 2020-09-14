import React from "react";
import styled from "@emotion/styled";
import ItemPreview from "../assets/item-preview.png";
import ItemStatus from "../assets/download.svg";

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 50px;
  max-width: 50%;
`;

const Preview = styled.img`
  min-width: 40px;
  min-height: 40px;
`;

const Titel = styled.div`
  display: flex;
  font-weight: bold;
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
`;

const Status = styled.img`
  min-width: 15px;
  min-height: 15px;
  padding-right: 10px;
`;

const SerialNo = styled.span``;

function listItem() {
  return (
    <>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatus} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatus} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatus} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatus} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
    </>
  );
}

export default listItem;
