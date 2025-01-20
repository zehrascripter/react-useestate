import React, { useState } from 'react';

function InputMirror() {
  // Step 1: Initialize state with useState('') for the input value
  const [inputValue, setInputValue] = useState('');

  // Step 2: Function to handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center w-80">
        <h2 className="text-2xl font-bold mb-4">Input Mirror App</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xl text-gray-700">
          {inputValue}
        </p>
      </div>
    </div>
  );
}

export default InputMirror;
