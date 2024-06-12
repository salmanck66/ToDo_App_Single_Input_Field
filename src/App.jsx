import { useState } from "react";
import "./App.css"; // Import for custom styles (if needed)

function App() {
  const [input, setInput] = useState("");
  const [todo, SetTodo] = useState([]);
  const [edit, SetEdit] = useState(false);
  const [editID, SetID] = useState("");

  console.log(input);
  console.log(todo);

  function addTask() {
    if (input === "") {
      return;
    }
    SetTodo([
      ...todo,
      { name: input, id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1 },
    ]);
    setInput("");
  }

  function deletefun(id) {
    SetTodo(todo.filter((item) => item.id !== id));
  }

  function editt(id) {
    setInput(todo[id - 1].name);
    SetEdit(true);
    SetID(id);
  }

  function editTask(id) {
    SetTodo(
      todo.map((item) => (item.id === editID ? { ...item, name: input } : item))
    );
    SetEdit(false);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-10 text-xl rounded font-bold">ToDo Add And Edit From Single Input Box</h1>
      <div className="flex flex-col gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        {edit === false ? (
          <button onClick={addTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700">
            Add Task
          </button>
        ) : (
          <button
            onClick={() => editTask()}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700"
          >
            Edit Task
          </button>
        )}
      </div>

      <ul className="list-none mt-4">
        {todo.map((item, index) => (
          <li key={index} className="flex justify-between items-center py-2 border-b border-gray-300">
            <span className="text-gray-700">{item.name}</span>
            <div className="flex gap-2">
              <button
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                onClick={() => editt(item.id)}
              >
                edit
              </button>
              <button
                className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                onClick={() => deletefun(item.id)}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
