document.addEventListener('DOMContentLoaded', () => {
    const primaryColorInput = document.getElementById('primary-color');
    const secondaryColorInput = document.getElementById('secondary-color');
    const accentColorInput = document.getElementById('accent-color');
    const fontFamilyInput = document.getElementById('font-family');
    const fontSizeInput = document.getElementById('font-size');

    primaryColorInput.addEventListener('input', updateTheme);
    secondaryColorInput.addEventListener('input', updateTheme);
    accentColorInput.addEventListener('input', updateTheme);
    fontFamilyInput.addEventListener('input', updateTheme);
    fontSizeInput.addEventListener('input', updateTheme);

    function updateTheme() {
        const primaryColor = primaryColorInput.value;
        const secondaryColor = secondaryColorInput.value;
        const accentColor = accentColorInput.value;
        const fontFamily = fontFamilyInput.value;
        const fontSize = fontSizeInput.value;

        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        document.documentElement.style.setProperty('--accent-color', accentColor);
        document.documentElement.style.setProperty('--font-family', fontFamily);
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    }
});
