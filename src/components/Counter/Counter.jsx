import React, { useState } from 'react';

function Counter() {
  // Initialize state with useState(0)
  const [count, setCount] = useState(0);

  // Functions to handle increment, decrement, and reset
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Counter App</h2>
        <p className="text-xl mb-6">Count: {count}</p>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className={`px-4 py-2 ${
              count <= 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
            } text-white rounded focus:outline-none`}
            onClick={decrement}
            disabled={count <= 0}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
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
