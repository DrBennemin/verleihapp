import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getItem } from "../api/items";
import { useParams } from "react-router-dom";
import HeaderEdit from "../components/HeaderEdit";
import ArrowDownSrc from "../assets/arrow-down.svg";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState("");

  useEffect(() => {
    async function fetchItem() {
      try {
        const loadedItem = await getItem(id);
        console.log(loadedItem);
        setItem(loadedItem);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItem();
  }, [id]);

  return (
    <>
      <HeaderEdit title={"Artikel-Details"} />
      <Container key={item.id}>
        <Slider>
          <img src={item.imgSrc} alt={item.title} />
        </Slider>
        <Description>
          <Status>
            <img
              src={`/img/${item.availability}.svg`}
              alt={item.availability}
            />
            <span>{item.availability}</span>
            <img src={ArrowDownSrc} alt="status" />
          </Status>
          <h1>{item.title}</h1>
          <p>Seriennummer: {item.sno}</p>
          <p>PZN: {item.pzn}</p>
          <p>Baujahr: {item.yoc}</p>
          <p>Zustand: {item.condition}</p>
          <p>Beschreibung: {item.description}</p>
        </Description>
      </Container>
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
    border-radius: 5px;
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
