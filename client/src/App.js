import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import EventsGallery from './components/eventsGallery/EventsGallery';
import IconsBar from './components/iconsBar/IconsBar';
import Navbar from './components/navbar/Navbar';
// import LoginForm from '../auth/LoginForm';
import SignUpForm from './components/user/SignUpForm';
// import {
//   useNavigate,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  return (
    <html>
      <head>
        <title>London on a Budget</title>
      </head>
      <body>
        <div>
        <Navbar />
          <h1>London on a Budget</h1>
          {/* <Route path="/" element={<Navbar navigate={useNavigate()} />} /> */}
          <SearchBar />
          <IconsBar />
          <EventsGallery />
        </div>
      </body>
    </html>
  );
}

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Feed navigate={useNavigate()} />} />
//       <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
//       <Route
//         path="/signup"
//         element={<SignUpForm navigate={useNavigate()} />}
//       />
//       {/* <Route path="/" element={<Navbar navigate={useNavigate()} />} />
//       <Route path="/user/:id" element={<Profile navigate={useNavigate()} />} /> */}
//     </Routes>
//   );
// }

export default App;
