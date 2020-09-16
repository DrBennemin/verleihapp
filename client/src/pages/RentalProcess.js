import React from "react";
import styled from "@emotion/styled";

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdressLine1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
  }
  & :first-child {
    width: 70%;
  }
  & :last-child {
    width: 20%;
  }
`;

const AdressLine2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
  }
  & :first-child {
    width: 35%;
  }
  & :last-child {
    width: 55%;
  }
`;

const DateSelect = styled.div`
  display: flex;
  justify-content: space-between;
  & :first-child {
    width: 45%;
  }
  & :last-child {
    width: 45%;
  }
`;

function RentalProcess() {
  return (
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
        Telefonnummer
        <input placeholder="Telefonnummer" />
      </label>

      <AdressLine1>
        <div>
          <label>Straße</label>
          <input placeholder="Straße" />
        </div>
        <div>
          <label>Nr.</label>
          <input placeholder="Nr." />
        </div>
      </AdressLine1>

      <AdressLine2>
        <div>
          <label>PLZ</label>
          <input placeholder="PLZ" />
        </div>
        <div>
          <label>Ort</label>
          <input placeholder="Ort" />
        </div>
      </AdressLine2>

      <select required>
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

      <DateSelect>
        <label>
          Datum von
          <input type="date" required />
        </label>
        <label>
          Datum bis
          <input type="date" required />
        </label>
      </DateSelect>
    </Form>
  );
}

export default RentalProcess;
