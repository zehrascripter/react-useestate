import React, { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center w-80 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Visibility Toggle</h2>
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 ${
            isVisible
              ? "bg-purple-500 hover:bg-purple-600 focus:ring-purple-300"
              : "bg-green-500 hover:bg-green-600 focus:ring-green-300"
          }`}
          onClick={toggleVisibility}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && (
          <p className="text-xl mt-6 text-gray-800 bg-gray-100 py-4 px-6 rounded shadow-md">
            Hide me :)
          </p>
        )}
      </div>
    </div>
  );
}

export default ToggleVisibility;
