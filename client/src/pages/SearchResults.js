import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { searchItem } from "../api/items";
import { searchRent } from "../api/rentals";
import SearchInput from "../components/SearchInput";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.svg";
import HeaderGoBack from "../components/HeaderGoBack";

function SearchResults() {
  const [query, setQuery] = useState("");
  const [resultItems, setResultItems] = useState([]);
  const [resultRentals, setResultRentals] = useState([]);
  const [toggleSearch, setToggleSearch] = useState(false);

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
      <HeaderGoBack
        title={"Suche"}
        left={
          <Link to="/">
            <img src={Menu} alt="menu-icon" />
          </Link>
        }
      />
      <Container>
        <SearchInput
          query={query}
          onSetQuery={setQuery}
          onSetToggleSearch={setToggleSearch}
        />
        {toggleSearch && (
          <Results>
            <ItemResults>
              Hilfsmittel:
              {resultItems?.map((loadedItem) => (
                <Link
                  to={`/item/detail/${loadedItem.id}`}
                  key={loadedItem.id}
                  id={loadedItem.id}
                >
                  <li>{loadedItem.title}</li>
                </Link>
              ))}
            </ItemResults>

            <RentResults>
              Kunden:
              {resultRentals?.map((loadedRentals) => (
                <Link
                  to={`/rent/detail/${loadedRentals.id}`}
                  key={loadedRentals.id}
                  id={loadedRentals.id}
                >
                  <li>
                    {loadedRentals.firstName} {loadedRentals.lastName}
                  </li>
                </Link>
              ))}
            </RentResults>
          </Results>
        )}
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

const Results = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
