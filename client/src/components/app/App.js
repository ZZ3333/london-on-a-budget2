import React, { useState } from "react"
import './App.css';
import Gallery from '../gallery/Gallery.js';
import Icons from '../icons/Icons.js';
import LoginButton from '../login/LoginButton.js';
import SearchBar from '../searchBar/SearchBar.js';
import SignupButton from '../signup/SignupButton.js';
import {
  useNavigate,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  return (
   <Routes>
    <Route path="/" element={<LoginButton navigate={useNavigate()} />} />
    <Route path="/" element={<SignupButton navigate={useNavigate()} />} />
    <Route path="/" element={<SearchBar navigate={useNavigate()} />} />
    <Route path="/" element={<Icons navigate={useNavigate()} />} />
    <Route path="/" element={<Gallery navigate={useNavigate()} />} />
    </Routes>
  );
}

export default App;