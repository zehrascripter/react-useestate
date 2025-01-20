import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);

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

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center w-96 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Stopwatch</h2>
        <p className="text-5xl font-mono mb-8 text-gray-700">
          {formatTime(time)}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={start}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            disabled={isRunning}
          >
            Start
          </button>
          <button
            onClick={stop}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
