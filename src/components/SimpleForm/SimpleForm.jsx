import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Simple Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition transform hover:scale-105"
            >
              Submit
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition transform hover:scale-105"
              onClick={() => setFormData({ name: "", email: "" })}
            >
              Clear
            </button>
          </div>
        </form>
        {submittedData && (
          <div className="mt-6 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Submitted Data:</h3>
            <p className="text-lg text-gray-700">
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> {submittedData.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SimpleForm;
