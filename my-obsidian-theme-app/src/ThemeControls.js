import React from 'react';

const ThemeControls = ({ theme, updateTheme }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
 fix-theme-customization
    updateTheme((prevTheme) => ({
      ...prevTheme,
      [name]: value,
    }));

    updateTheme(name, value);
    main
  };

  return (
    <div id="customization-area">
      <h2>Customize Your Theme</h2>
      <form id="theme-form">
        <label htmlFor="primary-color">Primary Color:</label>
        <input
          type="color"
          id="primary-color"
          name="primaryColor"
          value={theme.primaryColor}
          onChange={handleInputChange}
        />

        <label htmlFor="secondary-color">Secondary Color:</label>
        <input
          type="color"
          id="secondary-color"
          name="secondaryColor"
          value={theme.secondaryColor}
          onChange={handleInputChange}
        />

        <label htmlFor="accent-color">Accent Color:</label>
        <input
          type="color"
          id="accent-color"
          name="accentColor"
          value={theme.accentColor}
          onChange={handleInputChange}
        />

        <label htmlFor="font-family">Font Family:</label>
        <input
          type="text"
          id="font-family"
          name="fontFamily"
          value={theme.fontFamily}
          onChange={handleInputChange}
        />

        <label htmlFor="font-size">Font Size:</label>
        <input
          type="number"
          id="font-size"
          name="fontSize"
          value={theme.fontSize}
          min="10"
          max="36"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default ThemeControls;
