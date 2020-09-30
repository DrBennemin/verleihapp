import React, { useEffect, useState } from "react";
import { getItems } from "../api/items";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function ListItem() {
  const { id } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const loadedItems = await getItems(id);
        console.log(loadedItems);
        setItems(loadedItems);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, [id]);

  return (
    <>
      {items?.map((item) => (
        <Link to={`/item/detail/${item.id}`} key={item.id} id={item.id}>
          <Container href={`/item/detail/${item.id}`}>
            <ItemPreview src={item.imgSrc} />
            <Details>
              <Title>{item.title}</Title>
              <ProductStatus>
                <State
                  src={`/img/${item.availability}.svg`}
                  alt={item.availability}
                />
                <SerialNo>{item.sno}</SerialNo>
              </ProductStatus>
            </Details>
          </Container>
        </Link>
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
  margin-right: 1em;
`;

const SerialNo = styled.span``;

export default ListItem;
