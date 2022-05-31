import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import LargeButtons from "../LargeButtonsReusable/LargeButtonsReusable";
const Form = (props) => {
  const [todoInput, setTodoInput] = useState(props.edit ? props.edit.text : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const addTodo = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      text: todoInput,
      done: false,
    });

    setTodoInput("");
    props.setEditing(false);
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
