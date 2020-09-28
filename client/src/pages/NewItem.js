import React, { useState } from "react";
import styled from "@emotion/styled";
import UploadIconSrc from "../assets/file-upload.svg";
import HeaderGoBack from "../components/HeaderGoBack";
import { postItem } from "../api/items";

function NewItem() {
  const [itemData, setItemData] = useState({
    imgSrc: "",
    state: "",
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

  async function handleSubmit(event) {
    event.preventDefault();
    await postItem(itemData);
  }

  function clearForm() {
    document.getElementById("newItem").reset();
    alert("Succcccssssessss!! New Item created");
  }

  return (
    <>
      <HeaderGoBack title={"Artikel anlegen"} />
      <Form onSubmit={handleSubmit} id="newItem">
        <label>
          <ImageUploadContainer>
            <img src={UploadIconSrc} alt="upload-icon" />
            <input
              type="file"
              value={itemData.imgSrc}
              onChange={handleChange}
              name="imgSrc"
              hidden
            />
          </ImageUploadContainer>
        </label>
        <select>
          <option name="state" value={itemData.state}>
            verfügbar
          </option>
          <option name="state" value={itemData.state}>
            vermietet
          </option>
          <option name="state" value={itemData.state}>
            gesperrt
          </option>
        </select>
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
        <Submit type="submit" value="speichern" onClick={clearForm} />
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

const ImageUploadContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 100%;
  border-radius: 50px;
  background: #fff;
  border: 1px dashed #dedede;
  margin-bottom: 10px;
  & img {
    width: 50px;
    align-self: center;
  }
  & label {
    cursor: pointer;
  }
  & input {
    display: none;
  }
`;

const Submit = styled.input`
  cursor: pointer;
`;

export default NewItem;
