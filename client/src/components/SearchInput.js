import React from "react";
import PropTypes from "prop-types";

SearchInput.propTypes = {
  onSetQuery: PropTypes.func,
  query: PropTypes.string,
};

function SearchInput({ onSetQuery, query }) {
  return (
    <input
      onChange={(event) => onSetQuery(event.target.value)}
      value={query}
      placeholder="Suchen..."
    />
  );
}

export default SearchInput;
