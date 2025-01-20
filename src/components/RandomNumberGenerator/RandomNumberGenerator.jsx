import React, { useState } from "react";

function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    setRandomNumber(number);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center w-96 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Random Number Generator
        </h2>
        <p className="text-xl font-medium mb-8 text-gray-700">
          {randomNumber !== null ? (
            <>
              Generated Number:{" "}
              <span className="text-4xl font-bold text-purple-500">
                {randomNumber}
              </span>
            </>
          ) : (
            "Click the button to generate a number."
          )}
        </p>
        <button
          onClick={generateRandomNumber}
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition transform hover:scale-105"
        >
          Generate Number
        </button>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;
