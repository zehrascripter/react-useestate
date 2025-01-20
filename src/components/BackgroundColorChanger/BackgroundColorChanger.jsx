import React, { useState } from "react";

function BackgroundColorChanger() {
  const [bgColor, setBgColor] = useState("white");

  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen transition-all duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center w-80">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Background Changer
        </h2>
        <label
          htmlFor="colorSelector"
          className="block text-lg font-semibold text-gray-700 mb-4"
        >
          Choose a Color:
        </label>
        <select
          id="colorSelector"
          value={bgColor}
          onChange={handleColorChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
        </select>
        <p className="mt-6 text-xl">
          Current Background Color:{" "}
          <strong className="text-gray-800">{bgColor}</strong>
        </p>
      </div>
    </div>
  );
}

export default BackgroundColorChanger;
