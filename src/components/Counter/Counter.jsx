import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 text-white">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Counter App</h2>
        <p className="text-4xl font-mono mb-8 text-gray-700">Count: {count}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className={`px-6 py-3 ${
              count <= 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            } text-white font-semibold rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-300 transition`}
            onClick={decrement}
            disabled={count <= 0}
          >
            Decrement
          </button>
          <button
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
