import React, { useState } from 'react';

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch('/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email, password: password})
    })


    if(response.status !== 201) {
      console.log("login unsuccessful")
      navigate('/login')
    } else {
      console.log("login successful")
      let data = await response.json();
      window.localStorage.setItem("token", data.token);
      console.log(data)
      window.localStorage.setItem("user", data.user);
      navigate('/');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


    return (
      <form onSubmit={handleSubmit}>
        <input placeholder='Email' data-testid="email" type='text' value={ email } onChange={handleEmailChange} />
        <input placeholder='Password' data-testid="password" type='password' value={ password } onChange={handlePasswordChange} required
                minLength={8}/>
        <input role='submit-button' data-testid='submit' type="submit" value="Submit" />
      </form>
    );
}

export default LogInForm;