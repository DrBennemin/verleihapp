import React, { useState } from "react";
import styled from "@emotion/styled";
import HeaderGoBack from "../components/HeaderGoBack";
import { postRent } from "../api/rentals";

function NewRent() {
  const [clientData, setClientData] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    no: "",
    zip: "",
    place: "",
    birthdate: "",
    idno: "",
    krankenkasse: "",
    insurance: "",
    insuranceId: "",
    item: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setClientData({ ...clientData, [event.target.name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await postRent(clientData);
  }

  function clearForm() {
    document.getElementById("newRent").reset();
    alert("Succcccssssessss!! New Rent created");
  }

  return (
    <>
      <HeaderGoBack title={"Neue Vermietung"} />
      <Form onSubmit={handleSubmit} id="newRent">
        <label>
          Anrede
          <select
            value={clientData.salutation}
            name="salutation"
            onChange={handleChange}
            required
          >
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
          </select>
        </label>
        <label>
          Vorname
          <input
            placeholder="Vorname"
            value={clientData.firstName}
            name="firstName"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nachname
          <input
            placeholder="Nachname"
            value={clientData.lastName}
            name="lastName"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-Mail
          <input
            placeholder="E-Mail"
            value={clientData.email}
            name="email"
            onChange={handleChange}
            required
          />
        </label>

        <InputStreet>
          <label>
            Straße
            <input
              placeholder="Straße"
              value={clientData.street}
              name="street"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Nr.
            <input
              placeholder="Nr."
              value={clientData.no}
              name="no"
              onChange={handleChange}
              required
            />
          </label>
        </InputStreet>
        <InputCity>
          <label>
            PLZ
            <input
              placeholder="PLZ"
              value={clientData.zip}
              name="zip"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Ort
            <input
              placeholder="Ort"
              value={clientData.place}
              name="place"
              onChange={handleChange}
              required
            />
          </label>
        </InputCity>
        <InputPerson>
          <label>
            Geburtsdatum
            <input
              placeholder="TT.MM.JJJJ"
              type="date"
              value={clientData.birthdate}
              name="birthdate"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Ausweisnummer
            <input
              placeholder="Ausweisnummer"
              value={clientData.idno}
              name="idno"
              onChange={handleChange}
              required
            />
          </label>
        </InputPerson>

        <label>
          Krankenkasse
          <input
            placeholder="Krankenkasse"
            value={clientData.insurance}
            name="insurance"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Versichertennummer
          <input
            placeholder="Versichertennummer"
            value={clientData.insuranceId}
            name="insuranceId"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Artikel
          <select onChange={handleChange} required>
            <option name="item" value={clientData.item}>
              Artikel 1
            </option>
          </select>
        </label>
        <InputDate>
          <label>
            Datum von
            <input
              type="date"
              value={clientData.dateFrom}
              name="dateFrom"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Datum bis
            <input
              type="date"
              value={clientData.dateTo}
              name="dateTo"
              onChange={handleChange}
              required
            />
          </label>
        </InputDate>
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

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const InputStreet = styled(InputRow)`
  & :first-child {
    width: 70%;
  }
  & :last-child {
    width: 20%;
  }
`;
const InputCity = styled(InputRow)`
  & :first-child {
    width: 35%;
  }
  & :last-child {
    width: 55%;
  }
`;

const InputDate = styled(InputRow)`
  & :first-child {
    width: 45%;
  }
  & :last-child {
    width: 45%;
  }
`;

const InputPerson = styled(InputRow)`
  & :first-child {
    width: 35%;
  }
  & :last-child {
    width: 55%;
  }
`;

const Submit = styled.input`
  cursor: pointer;
`;

export default NewRent;
