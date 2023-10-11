import React, { useState, useEffect } from 'react';
import './App.css';

let globalID = 0

function App() {

  const [tasks, setTasks] = useState("");
  const [todos, SetTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault()
    SetTodos(oldTodos => {
      setTasks('')
      return [...oldTodos, {todo: tasks, id: globalID++ }]
    })
   
  }

  function deleteItem(itemID) {
    SetTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }

  return (
    <div>
      <h1>Create my To do App</h1>
      <form onSubmit={createTodo}>
        <input
            type="text" 
            value={tasks} 
            onChange = {event => {setTasks(event.target.value)}} />

        <button type='submit'>Create Todo</button>
      </form>
      <ul>
        {todos.map((item, index) => {
          return <div key={item.id}>
              <li>{item.todo}</li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
        })}
      </ul>
    </div>
  );
}

export default App;
