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
            {/* <input type="number" data-testid="price" className="price" /> */}
            {/* <input data-testid="pi_input" type="range" min="0" max= "1000" step="0.25" />
            <p>Value: <output id="value"></output></p>
          </div> */}
            <select data-testid="price" >
            <option value="0-20">£0 - £20</option>
            <option value="20-40">£20 - £40</option>
            <option value="40-60">£40 - £60</option>
            <option value="60">£60+</option>
          </select>
          <button type="submit" data-testid="search-btn"className="search-btn">Search</button>
        </div>
      </div>
  );
};

export default Search;

