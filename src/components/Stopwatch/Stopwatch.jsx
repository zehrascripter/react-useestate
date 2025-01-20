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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-2xl text-center transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
          Stopwatch
        </h2>
        <p className="text-4xl sm:text-5xl font-mono mb-6 text-gray-700">
          {formatTime(time)}
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={start}
            className={`w-full sm:w-auto px-4 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition ${
              isRunning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            onClick={stop}
            className={`w-full sm:w-auto px-4 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition ${
              !isRunning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            onClick={reset}
            className="w-full sm:w-auto px-4 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
