import React, { useState } from "react";
import './Search.css';

const Search = () => {
  // const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <html>
    <head>
    </head>
    <body>
      <div className="search-bar"
      data-testid="search">
        <div className="search-column">
          <label htmlFor="location">Location:</label>
          <select data-testid="location">
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="paris">Paris</option>
          </select>
        </div>
        <div className="search-column">
          <label htmlFor="date">Date:</label>
          <input type="date" data-testid="date" name="date" />
        </div>
        <div className="search-column">
          <label htmlFor="price">Price:</label>
          <input type= "number" data-testid="price" className="price" />
        </div>
        <button type="submit" data-testid="search-btn"className="search-btn">Search</button>
      </div>
    </body>
  </html>
  
);
};

export default Search;
