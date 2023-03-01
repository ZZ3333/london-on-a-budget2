import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/login">
        <button type="submit">
          <i class="login">Login</i>
        </button>
      </a>
      <a href="/signup">
        <button type="submit">
          <i class="signup">Signup</i>
        </button>
      </a>
    </div>
  );
};



export default Navbar;
