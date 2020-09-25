import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getItems } from "../api/items";
import { useParams } from "react-router-dom";
import ArrowDownSrc from "../assets/arrow-down.svg";
import HeaderEdit from "../components/HeaderEdit";

function ItemDetail() {
  const { serialno } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const loadedItems = await getItems(serialno);
        console.log(loadedItems);
        setItems(loadedItems);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, [serialno]);

  return (
    <>
      <HeaderEdit title={"Artikel-Details"} />
      {items?.map((item) => (
        <Container key={item.id}>
          <Slider>
            <img src={item.imgSrc} alt="milk-pump" />
          </Slider>
          <Description>
            <Status>
              <img src={`/img/${item.state}.svg`} alt={item.state} />
              <span>{item.state}</span>
              <img src={ArrowDownSrc} alt="status" />
            </Status>
            <h1>{item.headline}</h1>
            <p>{item.serialno}</p>
            <p>{item.pzn}</p>
            <p>{item.yoc}</p>
            <p>{item.description}</p>
          </Description>
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.4em;
  margin-bottom: 4em;
  margin-top: 4em;
  width: 90%;
`;

const Slider = styled.div`
  display: flex;
  padding: 20px 0;
  margin: 0;
  & img {
    max-width: 180px;
    max-height: 180px;
    align-self: center;
  }
`;

const Description = styled.div`
  min-width: 90%;
  & h1 {
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 14px;
  }
  & p {
    padding: 10px 0;
  }
`;

const Status = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.8em 0;
  padding: 0.8em 1em;
  background: transparent;
  border: 1px solid #dadada;
  border-radius: 50px;
  & img:first-child {
    max-height: 1.4em;
    padding-right: 0.8em;
  }
  & img:last-child {
    max-height: 0.6em;
  }
  & span {
    color: #28beb4;
    font-size: 1.3em;
    padding-right: 0.8em;
  }
`;

export default ItemDetail;
