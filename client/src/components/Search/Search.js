import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='search' data-testid="search" value={query} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

{/* <input role='submit-button' data-testid='submit' type="submit" value="Submit" /> */}