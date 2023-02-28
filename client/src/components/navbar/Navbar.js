// navbar on homepage : login and sign up button 

import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSignOut = () => {
      window.localStorage.removeItem("token");
      window.location.href = "/login";
    };
      return (
        <div align="right">
            <a href="/login">
            <button type="submit">
              <i className="login">Login</i>
            </button>
          </a>
          <a href="/signup">
            <button type="submit">
              <i className="signup">Signup</i>
            </button>
          </a>
        </div>
    );
};


export default Navbar;
