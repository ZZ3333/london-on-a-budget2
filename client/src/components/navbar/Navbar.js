// navbar on homepage : login and sign up button 

import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
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
