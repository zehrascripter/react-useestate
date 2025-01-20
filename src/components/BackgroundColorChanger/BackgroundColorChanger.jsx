import React, { useState } from 'react';

function BackgroundColorChanger() {
  // Step 1: Initialize state with a default color
  const [bgColor, setBgColor] = useState('white');

  // Step 2: Handle dropdown change
  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: bgColor }}>
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Background Color Changer</h2>
        <label htmlFor="colorSelector" className="block text-gray-700 mb-2">
          Select a Background Color:
        </label>
        <select
          id="colorSelector"
          value={bgColor}
          onChange={handleColorChange}
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
        </select>
        <p className="mt-4 text-lg">
          Current Background Color: <strong>{bgColor}</strong>
        </p>
      </div>
    </div>
  );
}

export default BackgroundColorChanger;
