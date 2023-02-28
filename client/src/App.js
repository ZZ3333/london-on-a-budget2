import React from 'react';
import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import SignUpForm from './components/user/SignUpForm';
import LogInForm from './components/auth/LoginForm';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
        <div className="landing-page">
          <Navbar /> 
            <h1>London on a Budget</h1>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/login" element={<LogInForm />} />
              </Routes>        
        </div>
  );
}


export default App;
