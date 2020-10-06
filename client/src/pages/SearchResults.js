import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { searchItem } from "../api/items";
import SearchInput from "../components/SearchInput";

function SearchResults() {
  const [query, setQuery] = useState("");
  const [resultItems, setResultItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const loadedItems = await searchItem(query);
        setResultItems(loadedItems);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, [query]);

  return (
    <Container>
      <SearchInput query={query} onSetQuery={setQuery} />
      <Results>
        {resultItems?.map((loadedItem) => (
          <li key={loadedItem.id}>{loadedItem.title}</li>
        ))}
      </Results>
    </Container>
  );
}

const Container = styled.div``;
const Results = styled.ul``;

export default SearchResults;
