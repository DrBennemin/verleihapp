import React from "react";
import styled from "@emotion/styled";
import HeaderGoBack from "../components/HeaderGoBack";

function NewRent() {
  return (
    <>
      <HeaderGoBack title={"Neue Vermietung"} />
      <Form>
        <label>
          Anrede
          <select required>
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
          </select>
        </label>
        <label>
          Vorname
          <input placeholder="Vorname" required />
        </label>
        <label>
          Nachname
          <input placeholder="Nachname" />
        </label>
        <label>
          E-Mail
          <input placeholder="E-Mail" />
        </label>
        <label>
          Geburtsdatum
          <input placeholder="TT.MM.JJJJ" type="date" />
        </label>
        <InputStreet>
          <label>
            Straße
            <input placeholder="Straße" />
          </label>
          <label>
            Nr.
            <input placeholder="Nr." />
          </label>
        </InputStreet>
        <InputCity>
          <label>
            PLZ
            <input placeholder="PLZ" />
          </label>
          <label>
            Ort
            <input placeholder="Ort" />
          </label>
        </InputCity>
        <InputPerson>
          <label>
            Geburtsdatum
            <input placeholder="TT.MM.JJJJ" />
          </label>
          <label>
            Ausweisnummer
            <input placeholder="Ausweisnummer" />
          </label>
        </InputPerson>

        <label>
          Krankenkasse
          <input placeholder="Krankenkasse" required />
        </label>
        <label>
          Versichertennummer
          <input placeholder="Versichertennummer" required />
        </label>

        <label>
          Artikel
          <select required>
            <option value="article1">Artikel 1</option>
            <option value="article2">Artikel 2</option>
            <option value="article3">Artikel 3</option>
            <option value="article4">Artikel 4</option>
            <option value="article5">Artikel 5</option>
            <option value="article6">Artikel 6</option>
            <option value="article7">Artikel 7</option>
            <option value="article8">Artikel 8</option>
          </select>
        </label>
        <InputDate>
          <label>
            Datum von
            <input type="date" required />
          </label>
          <label>
            Datum bis
            <input type="date" required />
          </label>
        </InputDate>
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
