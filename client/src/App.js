import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import EventsGallery from './components/eventsGallery/EventsGallery';
import IconsBar from './components/iconsBar/IconsBar';

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
