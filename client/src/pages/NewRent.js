import React, { useState } from "react";
import styled from "@emotion/styled";
import HeaderGoBack from "../components/HeaderGoBack";

function NewRent() {
  const [clientData, setClientData] = useState({
    anrede: "",
    vorname: "",
    nachname: "",
    email: "",
    strasse: "",
    nr: "",
    plz: "",
    ort: "",
    geburtsdatum: "",
    ausweisnummer: "",
    krankenkasse: "",
    versichertennummer: "",
    artikel: "",
    datumVon: "",
    datumBis: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setClientData({ ...clientData, [event.target.name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(clientData);
  }

  return (
    <>
      <HeaderGoBack title={"Neue Vermietung"} />
      <Form onSubmit={handleSubmit}>
        <label>
          Anrede
          <select
            value={clientData.anrede}
            name="anrede"
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
            value={clientData.vorname}
            name="vorname"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nachname
          <input
            placeholder="Nachname"
            value={clientData.nachname}
            name="nachname"
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
              value={clientData.strasse}
              name="strasse"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Nr.
            <input
              placeholder="Nr."
              value={clientData.nr}
              name="nr"
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
              value={clientData.plz}
              name="plz"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Ort
            <input
              placeholder="Ort"
              value={clientData.ort}
              name="ort"
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
              value={clientData.geburtsdatum}
              name="geburtsdatum"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Ausweisnummer
            <input
              placeholder="Ausweisnummer"
              value={clientData.ausweisnummer}
              name="ausweisnummer"
              onChange={handleChange}
              required
            />
          </label>
        </InputPerson>

        <label>
          Krankenkasse
          <input
            placeholder="Krankenkasse"
            value={clientData.krankenkasse}
            name="krankenkasse"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Versichertennummer
          <input
            placeholder="Versichertennummer"
            value={clientData.versichertennummer}
            name="versichertennummer"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Artikel
          <select onChange={handleChange} required>
            <option name="artikel" value={clientData.artikel}>
              Artikel 1
            </option>
            <option name="artikel" value={clientData.artikel}>
              Artikel 2
            </option>
            <option name="artikel" value={clientData.artikel}>
              Artikel 3
            </option>
            <option name="artikel" value={clientData.artikel}>
              Artikel 4
            </option>
            <option name="artikel" value={clientData.artikel}>
              Artikel 5
            </option>
            <option name="artikel" value={clientData.artikel}>
              Artikel 6
            </option>
            <option name="artikel" value={clientData.artikel}>
              Artikel 7
            </option>
            <option name="artikel" value={clientData.artikel}>
              Artikel 8
            </option>
          </select>
        </label>
        <InputDate>
          <label>
            Datum von
            <input
              type="date"
              value={clientData.datumVon}
              name="datumVon"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Datum bis
            <input
              type="date"
              value={clientData.datumBis}
              name="datumBis"
              onChange={handleChange}
              required
            />
          </label>
        </InputDate>
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

export default NewRent;
