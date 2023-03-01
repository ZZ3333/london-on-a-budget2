import React from "react";
import './Search.css';

const Search = () => {
  return (
  
        <div className="search-bar" data-testid="search">
          <div className="search-column">
            <label htmlFor="location">Location:</label>
            <input type="text" data-testid="location" placeholder="Enter your location"></input>
            <button type="submit" className="search-btn">Search</button>
            <button type="submit" className="search-btn" onClick={() => {
              navigator.geolocation.getCurrentPosition((position) => {
                console.log('Latitude:', position.coords.latitude);
                console.log('Longitude:', position.coords.longitude);
              }, (error) => {
                console.error('Error getting user location:', error);
              });
            }}>Find my location</button>
          </div>
          <div className="search-column">
            <label htmlFor="date">Date:</label>
            <input type="date" data-testid="date" name="date" />
          </div>
          <div className="search-column">
            <label htmlFor="price">Price:</label>
            <input type="number" data-testid="price" className="price" />
          </div>
          <button type="submit" data-testid="search-btn"className="search-btn">Search</button>
        </div>
   
  );
};

export default Search;
