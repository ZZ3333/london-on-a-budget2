import React from 'react';
import './App.css';
import './index.css';
import Search from './components/Search/Search';
import EventsView from './components/EventsView/EventsView';
import IconsMenu from './components/IconsMenu/IconsMenu';

function App() {
  return (
    <html>
      <head>
        <title>London on a Budget</title>
      </head>
      <body>
        <div class="landing-page">
          <h1>London on a Budget</h1>
          <Search />
          <IconsMenu />
          <EventsView />
        </div>
      </body>
    </html>
  );
}

export default App;
