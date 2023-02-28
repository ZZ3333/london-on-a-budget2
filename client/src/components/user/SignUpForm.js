import React, { useState } from "react";

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
          navigate("/login");
        } else {
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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        data-testid="email"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        placeholder="Password"
        data-testid="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
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
        required
        minLength={2}
      />
      <input
        placeholder="Last Name"
        data-testid="lastName"
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        required
        minLength={2}
      />

      <input id="submit" type="submit" value="Submit" />
    </form>
  );
};

export default SignUpForm;
