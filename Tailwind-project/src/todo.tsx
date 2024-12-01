import React, { useState } from 'react';
//typescript syntax to define structure of todo object
interface Todo {
  id: number;
  text: string;
}
//const App: Defines the main functional component for your app.
//React.FC: Specifies the component type using TypeScript, indicating that App is a React Functional Component.
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim()) {
      //task.trim(): Checks if task is not empty after removing extra spaces.
      setTodos([...todos, { id: Date.now(), text: task }]);// Creates a new array:
      setTask('');//Clears the input field.
    }
  };
//removeTodo: A function that removes a task by its id
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    // Filters out the task with the specified id.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
{/* //w-full max-w-md: The container's width is responsive and capped at a maximum width. */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            //onChange={(e) => setTask(e.target.value)}: Updates task when the user types.
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={addTodo}//Calls the addTodo function when clicked.
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => ( // Loops through each to-do item in todos and renders:
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 bg-gray-100 rounded-lg"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
//sdrtyuhijlk
