import React from 'react';
import './App.css';
import './index.css';
import Search from './components/Search/Search';
import EventsView from './components/EventsView/EventsView';
import IconsMenu from './components/IconsMenu/IconsMenu';
import Navbar from './components/navbar/Navbar';
import SignUpForm from './components/user/SignUpForm';
import LogInForm from './components/auth/LoginForm';

function App() {
  return (
        <div className="landing-page">
          <Navbar />
          <h1>London on a Budget</h1>
          <Search />
          <IconsMenu />
          <EventsView />
          <SignUpForm />
          <LogInForm />
        </div>
  );
}


export default App;
