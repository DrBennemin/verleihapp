import React from "react";
import styled from "@emotion/styled";

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdressLine1 = styled.div`
  display: flex;
  & > input:first-child {
    flex-grow: 1;
  }
`;

const Street = styled.input`
  width: 75%;
`;
const HouseNo = styled.input`
  width: 25%;
`;

function RentalProcess() {
  return (
    <Form>
      <label>
        Anrede
        <select>
          <option value="Herr">Herr</option>
          <option value="Frau">Frau</option>
        </select>
      </label>
      <label>
        Vorname
        <input placeholder="Vorname eingeben" />
      </label>
      <label>
        Nachname
        <input placeholder="Nachname eingeben" />
      </label>
      <label>
        E-Mail
        <input placeholder="E-Mail eingeben" />
      </label>
      <label>
        Telefonnummer
        <input placeholder="Telefonnummer eingeben" />
      </label>
      <AdressLine1>
        <label>
          Straße
          <Street placeholder="Straße eingeben" />
        </label>
        <label>
          Nr.
          <HouseNo placeholder="Hausnummer eingeben" />
        </label>
      </AdressLine1>

      <label>
        PLZ
        <input placeholder="PLZ eingeben" />
      </label>
      <label>
        Ort
        <input placeholder="Ort eingeben" />
      </label>

      <select>
        <option value="Artikel">Artikel</option>
        <option value="Artikel2">anderer Artikel</option>
        <option value="Artikel2">anderer Artikel</option>
        <option value="Artikel2">anderer Artikel</option>
        <option value="Artikel2">anderer Artikel</option>
        <option value="Artikel2">anderer Artikel</option>
        <option value="Artikel2">anderer Artikel</option>
        <option value="Artikel2">anderer Artikel</option>
        <option value="Artikel2">anderer Artikel</option>
      </select>
      <label>
        Datum von
        <input type="date" value="2020-09-15" />
      </label>
      <label>
        Datum bis
        <input type="date" value="2020-09-15" />
      </label>
    </Form>
  );
}

export default RentalProcess;
