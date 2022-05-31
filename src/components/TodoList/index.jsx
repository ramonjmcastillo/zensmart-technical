import React, { useState, useEffect } from "react";
import Form from "./Form";

const TodoList = ({ items, onItemClick, deleteTodo, editTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "" });

  const handleItemClick = (item, e) => {
    if (!item.done) {
      onItemClick(item, e);
    }
  };

  const submitEdit = (text) => {
    editTodo(edit.id, text);
    setEdit({
      id: null,
      text: "",
    });
  };

  if (edit.id !== null) {
    return <Form edit={edit} onSubmit={submitEdit} />;
  }

  console.log(edit, "edit");

  return (
    <div>
      <ul>
        {items.map((todo, index) => {
          return (
            <div key={index}>
              <li onClick={() => handleItemClick(todo)} key={index}>
                {todo.text}
              </li>
              <div>
                <button
                  type="button"
                  onClick={() => setEdit({ id: todo.id, text: todo.text })}
                >
                  Edit
                </button>
                <button type="button" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
