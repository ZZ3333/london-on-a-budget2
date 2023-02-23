// navbar on homepage : login and sign up button 

import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <div align="right">
        <a href="/login-page">
        <button type="submit">
          <i class="login">Login</i>
        </button>
      </a>
      <a href="/signup-page">
        <button type="submit">
          <i class="signup">Signup</i>
        </button>
      </a>
    </div>
  );
};

 
// import './Navbar.css';

// const Navbar = () => {
//     const [login, setLogin] = useState("");
//     const [signup, setSignup] = useState("");

//     const handleSubmit = async (event) => {
//         event.preventDefault();
    
//         fetch("/users", {
//           method: "post",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             login: login,
//             signup: signup,
//           }),
//         }).then((response) => {
//           if (response.status === 201) {
//             navigate("/login");
//           } else {
//             navigate("/signup");
//           }
//         });
//       };
//     };

// const handleLoginChange = (event) => {
//     setLogin(event.target.value);
//     window.localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   const handleSignUp = (event) => {
//     setSignup(event.target.value);
//     window.localStorage.removeItem("token");
//     window.location.href = "/signup";
//   };






//   export default function App() {
//   return (
//     <MDBNavbar light bgColor='light'>
//       <MDBContainer tag="form" fluid className='justify-content-start'>
//         <MDBBtn outline color="success" className='me-2' type='button'>
//           Main button
//         </MDBBtn>
//         <MDBBtn outline color="secondary" size="sm" type='button'>
//           Smaller button
//         </MDBBtn>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }

//       return (
//       <div className="d-lg-flex col-lg-3 justify-content-lg-end">
//             <button onClick={handleSignUp} className="btn btn-outline-dark">
//               <i className="bi bi-box-arrow-right"></i>
//               <span>Sign Up</span>
//             </button>
//           </div>
//         </div>
//     <div className="d-lg-flex col-lg-3 justify-content-lg-end">
//         <button onClick={handleLogIn} className="btn btn-outline-dark">
//           <i className="bi bi-box-arrow-right"></i>
//           <span>login</span>
//         </button>
//       </div>
//     </div>
// };

export default Navbar;