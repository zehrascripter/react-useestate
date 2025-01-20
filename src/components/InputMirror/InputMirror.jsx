import React, { useState } from "react";

function InputMirror() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-2xl text-center transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
          Input Mirror
        </h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
          className="text-black w-full px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg border border-gray-300 rounded-lg mb-4 sm:mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
        />
        <p className="text-xl sm:text-2xl font-semibold text-gray-800 bg-gray-100 py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md">
          {inputValue || "Start typing to see magic!"}
        </p>
      </div>
    </div>
  );
}

export default InputMirror;
