// import React from "react";
// import './Search.css';




// const Search = () => {
//   return (
//         <div className="search-bar" data-testid="search">
//           <div className="search-column">
//             <label htmlFor="location">Location:</label>
//             <input type="text" data-testid="location" placeholder="Enter your postcode"></input>
//             <button type="submit" className="search-btn">Search</button>
//             <button type="submit" className="search-btn" onClick={() => {
//               navigator.geolocation.getCurrentPosition((position) => {
//                 console.log('Latitude:', position.coords.latitude);
//                 console.log('Longitude:', position.coords.longitude);
//               }, (error) => {
//                 console.error('Error getting user location:', error);
//               });
//             }}>Find my location</button>
//           </div>
//           <div className="search-column">
//             <label htmlFor="date">Date:</label>
//             <input type="date" data-testid="date" name="date" />
//           </div>
//           <div className="search-column">
//             <label htmlFor="price">Price:</label>
//             {/* <input type="number" data-testid="price" className="price" /> */}
//             {/* <input data-testid="pi_input" type="range" min="0" max= "1000" step="0.25" />
//             <p>Value: <output id="value"></output></p>
//           </div> */}
//             <select data-testid="price" >
//             <option value="0-20">£0 - £20</option>
//             <option value="20-40">£20 - £40</option>
//             <option value="40-60">£40 - £60</option>
//             <option value="60">£60+</option>
//             <input type="range"></input>
//             <input type="datetime-local"></input>
//           </select>
//           <button type="submit" data-testid="search-btn"className="search-btn">Search</button>
//           <input type="button" onclick="alert('Hello World!')" value="Click Me!"></input>
//         </div>
//       </div>
//   );
// };

// export default Search;

// import React, { useState } from "react";
// import './Search.css';

// const Search = () => {
//   const [value, setValue] = useState(0);

//   const handleInputChange = (event) => {
//     setValue(event.target.value);
//   }

//   return (
//     <div className="search-bar" data-testid="search">
//       <div className="search-column">
//         <label htmlFor="location">Location:</label>
//         <input type="text" data-testid="location" placeholder="Enter your location"></input>
//         <button type="submit" className="search-btn">Search</button>
//         <button type="submit" className="search-btn" onClick={() => {
//           navigator.geolocation.getCurrentPosition((position) => {
//             console.log('Latitude:', position.coords.latitude);
//             console.log('Longitude:', position.coords.longitude);
//           }, (error) => {
//             console.error('Error getting user location:', error);
//           });
//         }}>Find my location</button>
//       </div>
//       <div className="search-column">
//         <label htmlFor="date">Date:</label>
//         <input type="date" data-testid="date" name="date" />
//       </div>
//       <div className="search-column">
//         <label htmlFor="price">Price:</label>
//         {/* <input type="number" data-testid="price" className="price" /> */}
//         <input data-testid="pi_input" type="range" min="0" max= "100" step="0.25" style={{ width: '200px' }} onChange={handleInputChange}  />
//         <p> <output id="value">{value}</output></p>
//       </div>
//       <button type="submit" data-testid="search-btn"className="search-btn">Search</button>
//     </div>
//   );
// };

// export default Search;


import React from "react";
import './Search.css';

const Search = () => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
   

    const location = event.target.elements.location.value;
    const date = event.target.elements.date.value;
    const price = event.target.elements.pi_input.value;

    handleSearch(location, date, price);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    document.getElementById("value").innerHTML = value;
  };

  const handleSearch = (location, date, price) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  };

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = `${position.coords.latitude}, ${position.coords.longitude}`;
        const date = new Date().toISOString().slice(0, 10);
        const price = document.getElementById("value").innerHTML;
        handleSearch(location, date, price);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  };
  
  return (
  <form onSubmit={handleSubmit}>
  <label htmlFor="location">Location:</label>
  <input type="text" data-testid="location" placeholder="Enter your postcode" />
  <button type="button" className="search-btn" onClick={handleLocationSearch}>
        Find my Location
  </button>

  <label htmlFor="date">Date:</label>
  <input type="date" data-testid="date" name="date" />

  <label htmlFor="price">Price: </label>
  <input type="range" data-testid="pi_input" min="0" max="100" step="0.25" style={{ width: '200px' }} onChange={handleInputChange} />
  <output id="value"></output>
 

  <button type="submit" data-testid="search-btn" className="search-btn">Search</button>
</form>


  );
};

export default Search;

