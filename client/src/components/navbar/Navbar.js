// navbar on homepage : login and sign up button 

import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/login">
        <button type="submit">
          <i data-testid="login" className="login">Login</i>
        </button>
      </NavLink>
      <NavLink to ="/signup">
        <button type="submit">
          <i data-testid="signup" className="signup">Signup</i>
        </button>
      </NavLink>
    </div>
  );
};

export default Navbar;
