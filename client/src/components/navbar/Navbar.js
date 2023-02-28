// navbar on homepage : login and sign up button 

import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom"

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
      <Link to="/login">
        <button type="submit">
          <i className="login">Login</i>
        </button>
      </Link>
      <Link to ="/signup">
        <button type="submit">
          <i className="signup">Signup</i>
        </button>
      </Link>
    </div>
  );
};



export default Navbar;
