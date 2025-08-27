import React, { useState, useEffect } from 'react';
import ThemePreview from './ThemePreview';
import ThemeControls from './ThemeControls';

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

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVar, value);
    });
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Obsidian Theme Creator</h1>
      </header>
      <main>
        <ThemePreview />
        <ThemeControls theme={theme} updateTheme={updateTheme} />
      </main>
    </div>
  );
}

export default App;
