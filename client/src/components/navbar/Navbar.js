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
          <a href="/login-page">
          <button type="submit">
            <span data-testid="login">
              <i class="login">Login</i>
            </span>
          </button>
        </a>
        
        <a href="/signup-page">
          <button type="submit">
            <span data-testid="signup">
              <i class="signup">Signup</i>
            </span>
          </button>
        </a>
      </div>
    );
};


export default Navbar;
