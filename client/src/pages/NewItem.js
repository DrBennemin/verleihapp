import React, { useState } from "react";
import styled from "@emotion/styled";
import HeaderGoBack from "../components/HeaderGoBack";

function NewItem() {
  const [itemData, setItemData] = useState({
    imgSrc: "",
    headline: "",
    pzn: "",
    snr: "",
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
          Artikelbezeichnung
          <input
            placeholder="Artikelbezeichnung"
            value={itemData.headline}
            name="headline"
            onChange={handleChange}
            required
          />
        </label>
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
