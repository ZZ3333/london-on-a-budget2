import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("url");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <input type="text" value={query} onChange={handleChange}>
        <button onClick={handleSubmit}>Search</button>
      </input>
    </div>
  );
};

export default SearchBar;
