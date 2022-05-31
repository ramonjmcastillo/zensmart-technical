import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoList/Form";

function App() {
  const [items, setItems] = useState([]);

  const onItemClick = (item, event) => {
    console.log(item, event);
  };

  const addTodo = (item) => {
    if (!item.text) {
      return;
    }

    const newTodos = [item, ...items];
    setItems(newTodos);
  };

  return (
    <div className="App">
      <h1>My Todolist</h1>
      <TodoList items={items} onItemClick={onItemClick} />
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default App;
