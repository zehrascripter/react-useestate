import React, { useState } from 'react';

function RandomNumberGenerator() {
  // Step 1: Initialize state
  const [randomNumber, setRandomNumber] = useState(null);

  // Step 2: Generate random number
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    setRandomNumber(number);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center w-80">
        <h2 className="text-2xl font-bold mb-4">Random Number Generator</h2>
        <p className="text-lg mb-6">
          {randomNumber !== null
            ? `Generated Number: ${randomNumber}`
            : 'Click the button to generate a number.'}
        </p>
        <button
          onClick={generateRandomNumber}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Generate Number
        </button>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;
