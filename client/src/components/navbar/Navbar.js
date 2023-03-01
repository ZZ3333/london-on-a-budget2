// navbar on homepage : login and sign up button 

import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom"

// const Navbar = () => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    // const handleSignOut = () => {
    //   window.localStorage.removeItem("token");
    //   window.location.href = "/login";
    // };
//       return (
//       <div align="right">
//           <a href="/login-page">
//           <button type="submit">
//             <i class="login">Login</i>
//           </button>
//         </a>
//         <a href="/signup-page">
//           <button type="submit">
//             <i class="signup">Signup</i>
//           </button>
//         </a>
//       </div>
//     );
// };

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
