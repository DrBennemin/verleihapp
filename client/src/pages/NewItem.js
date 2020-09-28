import React, { useState } from "react";
import styled from "@emotion/styled";
import HeaderGoBack from "../components/HeaderGoBack";

function NewItem() {
  const [itemData, setItemData] = useState({
    imgSrc: "",
    headline: "",
    pzn: "",
    sno: "",
    yoc: "",
    description: "",
    itemCondition: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setItemData({ ...itemData, [event.target.name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(itemData);
  }

  return (
    <>
      <HeaderGoBack title={"Artikel anlegen"} />
      <Form onSubmit={handleSubmit}>
        <label>
          Foto
          <input
            type="file"
            value={itemData.imgSrc}
            name="imgSrc"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Artikelbezeichnung
          <input
            placeholder="Artikelbezeichnung"
            value={itemData.headline}
            name="headline"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          PZN
          <input
            placeholder="PZN"
            value={itemData.pzn}
            name="pzn"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Seriennummmer
          <input
            placeholder="Seriennummer"
            value={itemData.sno}
            name="sno"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Baujahr
          <input
            placeholder="Baujahr"
            type="date"
            format="yyyy"
            min="1970"
            max="2050"
            value={itemData.yoc}
            name="yoc"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Beschreibung
          <input
            placeholder="Beschreibung"
            value={itemData.description}
            name="description"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Zustand
          <input
            type="range"
            min="1"
            max="10"
            value={itemData.itemCondition}
            onChange={handleChange}
            name="itemCondition"
            required
          />
        </label>
        <input type="submit" value="speichern" />
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-bottom: 80px;
  margin-top: 80px;
  width: 90%;
  label {
    display: flex;
    flex-direction: column;
  }
`;

export default NewItem;
