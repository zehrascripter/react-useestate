import React, { useState } from 'react';

function LightDarkMode() {
  // Step 1: Initialize state with 'light' mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Toggle dark mode
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div className="p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </h2>
        <p className="mb-6">
          {isDarkMode
            ? 'You are currently in Dark Mode.'
            : 'You are currently in Light Mode.'}
        </p>
        <button
          onClick={toggleMode}
          className={`px-4 py-2 rounded focus:outline-none ${
            isDarkMode
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          Toggle to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default LightDarkMode;
