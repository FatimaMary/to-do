import React, { useState, useEffect } from "react";
import "./App.css";

let globalID = 0;

function App() {
  const [tasks, setTasks] = useState("");
  const [owner, setOwner] = useState("");
  const [todos, SetTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault();
    SetTodos((oldTodos) => {
      setTasks("");
      setOwner("");
      return [...oldTodos, { todo: tasks, owner: owner, id: globalID++ }];
    });
  }

  function deleteItem(itemID) {
    SetTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }

  return (
    <div>
      <h1>Create my To do App</h1>
      <form onSubmit={createTodo}>
        <input
          type="text"
          id="tasks"
          aria-label="tasks"
          value={tasks}
          onChange={(event) => {
            setTasks(event.target.value);
          }}
        />
        <input
          type="text"
          id="owner"
          aria-label="owner"
          value={owner}
          onChange={(event) => {
            setOwner(event.target.value);
          }}
        />

        <button type="submit">Create Todo</button>
      </form>
      <ul>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>
                TODO: {item.todo}, Owner: {item.owner}
              </li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
