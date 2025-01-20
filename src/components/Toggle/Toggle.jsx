import React, { useState } from 'react';

function ToggleVisibility() {
  // Step 1: Initialize state with useState(true) for visibility
  const [isVisible, setIsVisible] = useState(true);

  // Step 2: Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Toggle Visibility App</h2>
        <button
          className={`px-4 py-2 ${
            isVisible ? 'bg-purple-500 hover:bg-purple-600' : 'bg-green-500 hover:bg-green-600'
          } text-white rounded focus:outline-none mb-6 transition duration-300 ease-in-out transform hover:scale-105`}
          onClick={toggleVisibility}
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
        {isVisible && (
          <p className="text-xl text-gray-700">
            Hide me :)
          </p>
        )}
      </div>
    </div>
  );
}

export default ToggleVisibility;
