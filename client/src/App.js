import React from 'react';
import './App.css';
import SearchBar from './components/searchbar/SearchBar';
import EventsGallery from './components/eventsgallery/EventsGallery';
import IconsBar from './components/iconsbar/IconsBar';

function App() {
  return (
    <html>
      <head>
        <title>London on a Budget</title>
      </head>
      <body>
        <div>
          <h1>London on a Budget</h1>
          <SearchBar />
          <IconsBar />
          <EventsGallery />
        </div>
      </body>
    </html>
  );
}

export default App;
