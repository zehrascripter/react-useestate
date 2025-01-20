import React, { useState } from 'react';

function SimpleForm() {
  // Step 1: Initialize state for multiple form fields
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Step 2: Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Step 3: Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // Optionally, clear the form fields after submission
    setFormData({
      name: '',
      email: ''
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Simple Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
          <button
  type="button"
  className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
  onClick={() => setFormData({ name: '', email: '' })}
>
  Clear
</button>

        </form>
        {submittedData && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-300 rounded">
            <h3 className="text-xl font-semibold mb-2">Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SimpleForm;
