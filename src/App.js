import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoList/Form";

function App() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);

  const onItemClick = (item, event) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === item.id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, text) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? text : item)));
  };

  const addTodo = (item) => {
    if (!item.text) {
      return;
    }

    const newTodos = [item, ...todos];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>My Todolist</h1>
      <TodoList
        items={todos}
        onItemClick={onItemClick}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editing={editing}
        setEditing={setEditing}
      />
      {!editing && <TodoForm onSubmit={addTodo} />}
    </div>
  );
}

export default App;
