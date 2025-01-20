import React, { useState } from 'react';

function CharacterCounter() {
  // Step 1: Initialize state
  const [text, setText] = useState('');

  // Step 2: Handle input change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center w-80">
        <h2 className="text-2xl font-bold mb-4">Character Counter</h2>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        ></textarea>
        <p className="text-lg">
          Character Count: <strong>{text.length}</strong>
        </p>
      </div>
    </div>
  );
}

export default CharacterCounter;
