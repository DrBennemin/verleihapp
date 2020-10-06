import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { searchItem } from "../api/items";
import { searchRent } from "../api/rentals";
import SearchInput from "../components/SearchInput";

function SearchResults() {
  const [query, setQuery] = useState("");
  const [resultItems, setResultItems] = useState([]);
  const [resultRentals, setResultRentals] = useState([]);
  // const [toggleSearch, setToggleSearch] = useState(false);

  useEffect(() => {
    async function fetchResults() {
      try {
        const loadedItems = await searchItem(query);
        const loadedRentals = await searchRent(query);
        setResultRentals(loadedRentals);
        setResultItems(loadedItems);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResults();
  }, [query]);

  return (
    <>
      <Container>
        <SearchInput
          query={query}
          onSetQuery={setQuery}
          // onClick={() => setToggleSearch(true)}
        />
        {/* {toggleSearch && ( */}
        <Results>
          <ItemResults>
            {resultItems?.map((loadedItem) => (
              <li key={loadedItem.id}>{loadedItem.title}</li>
            ))}
          </ItemResults>

          <RentResults>
            {resultRentals?.map((loadedRentals) => (
              <li key={loadedRentals.id}>
                {loadedRentals.firstName} {loadedRentals.lastName}
              </li>
            ))}
          </RentResults>
        </Results>
        {/* )} */}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Results = styled.div`
  display: flex;
  align-self: center;
  width: 90%;
  padding: 10px;
  background-color: white;
  height: 40%;
  overflow: auto;
  margin-top: -10px;
`;
const ItemResults = styled.ul`
  padding: 0;
  list-style: none;
`;
const RentResults = styled.ul`
  padding: 0;
  list-style: none;
`;

export default SearchResults;
