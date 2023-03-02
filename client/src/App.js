import React from 'react';
import './App.css';
import Main from './components/main/Main';
import './components/Search/Search.css';
import Navbar from './components/navbar/Navbar';
import SignUpForm from './components/user/SignUpForm';
import LogInForm from './components/auth/LoginForm';
import { Routes, Route, useNavigate } from "react-router-dom";
import Search from './components/Search/Search';


function App() {

  return (
        <div className="landing-page">

          <Navbar /> 
            <h1>London on a Budget</h1>
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/signup" element={<SignUpForm navigate={useNavigate()}/>} />
                <Route exact path="/login" element={<LogInForm navigate={useNavigate()}/>} />
              </Routes>        
        </div>
  );
}


export default App;
