import React, { useState } from "react";

function InputMirror() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center w-96 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Input Mirror</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
          className="text-black w-full px-4 py-3 text-lg border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
        />
        <p className="text-2xl font-semibold text-gray-800 bg-gray-100 py-4 px-6 rounded-lg shadow-md">
          {inputValue || "Start typing to see magic!"}
        </p>
      </div>
    </div>
  );
}

export default InputMirror;
