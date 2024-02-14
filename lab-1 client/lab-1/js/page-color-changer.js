document.addEventListener('DOMContentLoaded', function () {
  // Declare and initialize constants
  const redSlider = document.getElementById('red');
  const greenSlider = document.getElementById('green');
  const blueSlider = document.getElementById('blue');
  const htmlElement = document.documentElement; // Selecting the html element

  // Check if elements are found before adding event listeners
  if (redSlider && greenSlider && blueSlider) {
    // Original font size before adjustments
    const originalFontSize = '100%';
    
    // Set original font size to html element
    htmlElement.style.fontSize = originalFontSize;

    // Build event handlers
    function handleSliderChange() {
      // Build functions to change background color
      const redValue = redSlider.value;
      const greenValue = greenSlider.value;
      const blueValue = blueSlider.value;

      // Change background color of the html element based on slider values
      htmlElement.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }

    // Add event listeners to sliders
    redSlider.addEventListener('input', handleSliderChange);
    greenSlider.addEventListener('input', handleSliderChange);
    blueSlider.addEventListener('input', handleSliderChange);
  } else {
    console.error('One or more sliders not found. Check your HTML IDs.');
  }
});

  