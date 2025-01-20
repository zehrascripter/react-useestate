import React, { useState } from 'react';

function TodoList() {
  // Step 1: Initialize state as an empty array
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Step 2: Function to handle adding items
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  // Step 3: Function to remove items
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center w-80">
        <h2 className="text-2xl font-bold mb-4">Simple Todo List</h2>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 mr-7 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>
        <ul className="text-left">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 border border-gray-300 rounded mb-2"
            >
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
