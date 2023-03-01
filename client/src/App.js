import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import './components/Search/Search.css';
import EventsView from './components/EventsView/EventsView';
import IconsMenu from './components/IconsMenu/IconsMenu';
import Navbar from './components/navbar/Navbar';
import SignUpForm from './components/user/SignUpForm';
import LogInForm from './components/auth/LoginForm';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
        <div className="landing-page">
          <Navbar /> 
            <h1>London on a Budget</h1>
              <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/" element={<IconsMenu />} />
                <Route path="/" element={<EventsView />} />
                <Route path="/signup" element={<SignUpForm navigate={useNavigate()}/>} />
                <Route path="/login" element={<LogInForm navigate={useNavigate()}/>} />
              </Routes>        
        </div>
  );
}


export default App;
