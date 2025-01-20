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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Todo List</h2>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          >
            Add
          </button>
        </div>
        {todos.length === 0 ? (
          <p className="text-gray-500 mt-4">No tasks added yet!</p>
        ) : (
          <ul className="text-left space-y-2">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="text-gray-800">{todo}</span>
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
