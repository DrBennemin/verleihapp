import React, { useEffect, useState } from "react";
import { getRentals } from "../api/rentals";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function ListItem() {
  const { id } = useParams();
  const [rentals, setRentals] = useState(null);

  useEffect(() => {
    async function fetchRentals() {
      try {
        const loadedRentals = await getRentals(id);
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
      {rentals?.map((rent) => (
        <Link to={`/rent/detail/${rent.id}`} key={rent.id} id={rent.id}>
          <Container href={`/rent/detail/${rent.id}`}>
            <Details>
              <Title>Client ID {rent.id}</Title>
              <Title>
                {rent.firstName} {rent.lastName}
              </Title>
              <Title>
                {rent.dateFrom} - {rent.dateTo}
              </Title>
              <Title>Item ID {rent.item}</Title>
            </Details>
          </Container>
        </Link>
      ))}
    </>
  );
}

const Container = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: justify-start;
  background-color: white;
  padding: 10px;
  margin: 0.6em auto;
  border-radius: 50px;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

const Details = styled.div`
  padding: 0 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  white-space: nowrap;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// const RentStatus = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const State = styled.img`
//   width: 16px;
//   height: 16px;
//   margin-right: 1em;
// `;

// const SerialNo = styled.span``;

export default ListItem;
