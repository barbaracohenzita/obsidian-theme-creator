import React from 'react';

const ThemePreview = ({ theme }) => {
  const { primaryColor, secondaryColor, accentColor, fontFamily, fontSize } = theme;

  return (
    <section id="preview-area" style={theme}>
      <h2>Theme Preview</h2>
      <div id="preview">
        <p>This is a preview of your theme.</p>
      </div>
    </section>
  );
};

export default ThemePreview;
