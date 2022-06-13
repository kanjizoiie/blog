import React from 'react';
import Menu from './components/menu/Menu';
import Post from './components/post/Post';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="app-container">
      <div>
        <Weather />
        <Menu />
      </div>
      <Post post />
    </div>
  );
}

export default App;
