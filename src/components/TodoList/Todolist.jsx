import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-200 text-white px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-2xl text-center transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-purple-600">Todo List</h2>
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
            className="text-black flex-1 px-4 py-2 text-lg border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            onClick={addTodo}
            className="w-full sm:w-auto px-5 py-2 text-lg bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          >
            Add
          </button>
        </div>
        {todos.length === 0 ? (
          <p className="text-gray-600 mt-6">No tasks added yet. Start now!</p>
        ) : (
          <ul className="text-left space-y-3 max-h-64 overflow-y-auto">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <span className="text-lg text-gray-800">{todo}</span>
                <button
                  onClick={() => removeTodo(index)}
                  className="px-3 py-1 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoList;
