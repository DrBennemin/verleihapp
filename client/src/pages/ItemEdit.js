import React, { useEffect, useState } from "react";
import { getItem, updateItem } from "../api/items";
import styled from "@emotion/styled";
import ArrowDownSrc from "../assets/arrow-down.svg";
import SaveSrc from "../assets/save.svg";
import HeaderGoBack from "../components/HeaderGoBack";
import { useParams } from "react-router-dom";

function ItemEdit() {
  const { id } = useParams();
  const [item, setItem] = useState({
    imgSrc: "",
    availability: "",
    title: "",
    pzn: "",
    sno: "",
    yoc: "",
    description: "",
    condition: "",
  });

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

  function handleChange(event) {
    const value = event.target.value;
    setItem({ ...item, [event.target.name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(id, item);
    await updateItem(id, item);
    clearForm();
  }

  function clearForm() {
    document.getElementById("newItem").reset();
    alert("Succcccssssessss!! New Item created");
  }

  return (
    <>
      <HeaderGoBack title={"Artikel bearbeiten"} />
      <Container key={item.id} onSubmit={handleSubmit} id="newItem">
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
          <Title>
            <input
              placeholder={item.title}
              onChange={handleChange}
              name="title"
            />
          </Title>
          <label>
            Seriennummer:
            <input placeholder={item.sno} onChange={handleChange} name="sno" />
          </label>
          <label>
            PZN:
            <input placeholder={item.pzn} onChange={handleChange} name="pzn" />
          </label>
          <label>
            Baujahr:
            <input placeholder={item.yoc} onChange={handleChange} name="yoc" />
          </label>
          <label>
            Zustand:
            <input
              placeholder={item.condition}
              onChange={handleChange}
              name="condition"
            />
          </label>
          <label>
            Beschreibung:
            <input
              placeholder={item.description}
              onChange={handleChange}
              name="description"
            />
          </label>
        </Description>
        <Submit type="submit">
          <img src={SaveSrc} alt="save-button" />
          <span>Speichern</span>
        </Submit>
      </Container>
    </>
  );
}

const Container = styled.form`
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

const Title = styled.label`
  font-size: 1.2rem;
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

const Submit = styled.button`
  display: flex;
  justify-content: center;
  text-transform: lowercase;
  align-items: center;
  font-size: 0.8em;
  margin: 1.2em 0;
  padding: 0.8em 1em;
  background: #28beb4;
  border: none;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  & img:first-child {
    max-height: 1.4em;
    padding-right: 0.8em;
  }
  & span {
    font-size: 1.3em;
    padding-right: 0.8em;
  }
`;

export default ItemEdit;
