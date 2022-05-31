import React, { useState, useEffect, useRef } from "react";

const Form = (props) => {
  const [todoInput, setTodoInput] = useState(props.edit ? props.edit.text : "");
  const [id, setId] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const giveTodoId = () => {
    setId(id + 1);
    return id;
  };

  const addTodo = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: giveTodoId(),
      text: todoInput,
      done: false,
    });

    setTodoInput("");
  };

  return (
    <form className="add-form-container" onSubmit={addTodo}>
      {props.edit ? (
        <>
          <input
            onChange={(e) => setTodoInput(e.target.value)}
            type="text"
            placeholder="Update your item"
            value={todoInput}
            ref={inputRef}
            className="todo-input"
          />
          <button className="todo-submit-button"> Update</button>
        </>
      ) : (
        <>
          <input
            onChange={(e) => setTodoInput(e.target.value)}
            type="text"
            placeholder="Add a Todo"
            value={todoInput}
            ref={inputRef}
            className="todo-input"
          />
          <button className="todo-submit-button"> Add Todo</button>
        </>
      )}
    </form>
  );
};

export default Form;
