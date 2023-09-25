import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handlesubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });
    setNewItem("");
  }

  function toggleTodos(id, completed) {
    console.log("id" + id + ":Completed:" + completed);
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = completed;
        }
        return todo;
      });
    });
  }

  function deleteTodos(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <form onSubmit={handlesubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            value={newItem}
            id="item"
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="btn">Add</button>
        </div>
        <h1 className="header">To do list:</h1>
        <ul>
          {todos.length === 0 && "No To dos....."}
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => toggleTodos(todo.id, e.target.checked)}
                    checked={todo.completed}
                  />{" "}
                  {todo.title}{" "}
                </label>
                <button
                  onClick={() => deleteTodos(todo.id)}
                  className="btn btn-dancer"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
}

export default App;
