import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getRent } from "../api/rentals";
import { useParams } from "react-router-dom";
import HeaderEdit from "../components/HeaderEdit";

function RentDetail() {
  const { id } = useParams();
  const [rentals, setRentals] = useState("");

  useEffect(() => {
    async function fetchRentals() {
      try {
        const loadedRentals = await getRent(id);
        console.log(loadedRentals);
        setRentals(loadedRentals);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRentals();
  }, [id]);

  return (
    <>
      <HeaderEdit title={"Vermietungs-Details"} />
      <Container key={rentals.id}>
        <p>{rentals.firstName}</p>
        <p>{rentals.lastName}</p>
        <p>{rentals.dateFrom}</p>
        <p>{rentals.dateTo}</p>
        <p>{rentals.item}</p>
        <button>Vermietung beenden</button>
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

export default RentDetail;
