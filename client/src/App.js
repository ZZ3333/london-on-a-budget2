import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import EventsView from './components/EventsView/EventsView';
import IconsMenu from './components/IconsMenu/IconsMenu';
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
                <Route exact path="/" element={<Search />} />
                <Route exact path="/" element={<IconsMenu />} />
                <Route exact path="/" element={<EventsView />} />
                <Route exact path="/signup" element={<SignUpForm />} />
                <Route exact path="/login" element={<LogInForm />} />
              </Routes>        
        </div>
  );
}


export default App;
