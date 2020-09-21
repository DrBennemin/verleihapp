import React from "react";
import styled from "@emotion/styled";
import ItemPreview from "../assets/item-preview.png";
import ItemStatusAvailable from "../assets/available.svg";
import ItemStatusNotAvailable from "../assets/not-available.svg";
import ItemStatusRented from "../assets/rented.svg";

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 50px;
`;

const Preview = styled.img`
  max-width: 70px;
  max-height: 70px;
  align-self: center;
`;

const Titel = styled.div`
  display: flex;
  font-weight: bold;
`;

const Details = styled.div`
  padding: 0 10px;
`;

const Status = styled.img`
  width: 25px;
  height: 18px;
  padding-right: 10px;
`;

const SerialNo = styled.span`
  display: flex;
`;

function listItem() {
  return (
    <>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatusAvailable} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatusAvailable} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatusAvailable} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatusNotAvailable} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatusNotAvailable} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatusNotAvailable} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatusRented} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
      <ListItem>
        <Preview src={ItemPreview} alt="item-preview" />
        <Details>
          <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
          <SerialNo>
            <Status src={ItemStatusRented} alt="status" />
            8710103565840
          </SerialNo>
        </Details>
      </ListItem>
    </>
  );
}

export default listItem;
