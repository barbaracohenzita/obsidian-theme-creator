import React from 'react';

const ThemePreview = ({ theme }) => {
  const { primaryColor, secondaryColor, accentColor, fontFamily, fontSize } = theme;

  const previewStyle = {
    '--primary-color': primaryColor,
    '--secondary-color': secondaryColor,
    '--accent-color': accentColor,
    '--font-family': fontFamily,
    '--font-size': `${fontSize}px`,
  };

  return (
    <section id="preview-area" style={previewStyle}>
      <h2>Theme Preview</h2>
      <div id="preview">
        <p>This is a preview of your theme.</p>
      </div>
    </section>
  );
};

export default ThemePreview;
