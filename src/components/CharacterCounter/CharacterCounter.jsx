import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-2xl text-center transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
          Character Counter
        </h2>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
          rows="5"
          className="text-black w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-6 shadow-sm resize-none"
        ></textarea>
        <p className="text-lg sm:text-xl text-gray-800">
          Character Count: <strong>{text.length}</strong>
        </p>
      </div>
    </div>
  );
}

export default CharacterCounter;
