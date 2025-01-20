import React, { useState, useEffect } from 'react';

function Stopwatch() {
  // Step 1: Initialize state
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Step 2: useEffect to handle timer
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup interval on unmount or stop
  }, [isRunning]);

  // Step 3: Handlers for start, stop, and reset
  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Convert time to minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Simple Stopwatch</h2>
        <p className="text-4xl font-mono mb-6">{formatTime(time)}</p>
        <div className="flex space-x-4">
          <button
            onClick={start}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
            disabled={isRunning}
          >
            Start
          </button>
          <button
            onClick={stop}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
