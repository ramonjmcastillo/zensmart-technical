import React, { useState } from "react";
import Form from "./Form";

const TodoList = ({
  items,
  onItemClick,
  deleteTodo,
  editTodo,
  editing,
  setEditing,
}) => {
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
    return <Form setEditing={setEditing} edit={edit} onSubmit={submitEdit} />;
  }

  return (
    <div className="todo-list-container">
      <ul>
        {items.map((todo, index) => {
          return (
            <div className="todo-list-content-container" key={index}>
              <p
                className="todo-text"
                onClick={() => handleItemClick(todo)}
                key={index}
              >
                {todo.text}
              </p>
              <div className="action-container">
                <button
                  type="button"
                  className="edit-button"
                  onClick={() => {
                    setEdit({ id: todo.id, text: todo.text });
                    setEditing(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => deleteTodo(todo.id)}
                >
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
