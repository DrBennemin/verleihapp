import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ItemPreviewSrc from "../assets/item-preview.png";
import ItemStatusAvailableSrc from "../assets/available.svg";
import ItemStatusNotAvailableSrc from "../assets/not-available.svg";
import ItemStatusRentedSrc from "../assets/rented.svg";

function listItem() {
  return (
    <>
      <ListItem>
        <Link to="/article-detail">
          <Preview src={ItemPreviewSrc} alt="item-preview" />
          <Details>
            <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
            <SerialNo>
              <Status src={ItemStatusAvailableSrc} alt="status" />
              8710103565840
            </SerialNo>
          </Details>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/article-detail">
          <Preview src={ItemPreviewSrc} alt="item-preview" />
          <Details>
            <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
            <SerialNo>
              <Status src={ItemStatusNotAvailableSrc} alt="status" />
              8710103565840
            </SerialNo>
          </Details>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/article-detail">
          <Preview src={ItemPreviewSrc} alt="item-preview" />
          <Details>
            <Titel>Philips AVENT Komfort-Milchpumpe</Titel>
            <SerialNo>
              <Status src={ItemStatusRentedSrc} alt="status" />
              8710103565840
            </SerialNo>
          </Details>
        </Link>
      </ListItem>
    </>
  );
}

const ListItem = styled.div`
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

export default listItem;
