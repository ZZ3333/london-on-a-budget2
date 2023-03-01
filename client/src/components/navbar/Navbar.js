import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/login">
        <button type="submit">
          Login
        </button>
      </a>
      <a href="/signup">
        <button type="submit">
          Signup
        </button>
      </a>
    </div>
  );
};



export default Navbar;
