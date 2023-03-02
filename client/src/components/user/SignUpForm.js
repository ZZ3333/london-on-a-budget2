import React, { useState } from "react";
import './SignUpForm.css';

const SignUpForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateEmail()) {
      setEmailError(false);
      fetch("/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        }),
      }).then((response) => {
        if (response.status === 201) {
          console.log("user created successfully");
          navigate("/login");
        } else {
          console.log("user not created");
          navigate("/signup");
        }
      })}
      else {
        setEmailError(true); 
      }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };


  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            placeholder="Email"
            data-testid="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
          />
          <input
            placeholder="Password"
            data-testid="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
            required
        minLength={8}
        maxLength={20}
      />
          <input
            placeholder="First Name"
            data-testid="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            className="form-control"
            required
        minLength={2}
      />
          <input
            placeholder="Last Name"
            data-testid="lastName"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            className="form-control"
            required
        minLength={2}
      />
          <button type="submit" class="btn btn-dark" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
