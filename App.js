import React, { useState } from 'react';
import ThemePreview from './ThemePreview';
import ThemeControls from './ThemeControls';
import './App.css';

function App() {
  const [theme, setTheme] = useState({
    primaryColor: '#000000',
    secondaryColor: '#ffffff',
    accentColor: '#ff0000',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
  });

  const updateTheme = (property, value) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      [property]: value,
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Obsidian Theme Creator</h1>
      </header>
      <main>
        <ThemePreview theme={theme} />
        <ThemeControls theme={theme} updateTheme={updateTheme} />
      </main>
    </div>
  );
}

export default App;
