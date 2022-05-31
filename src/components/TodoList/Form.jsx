import React, { useState, useEffect, useRef } from "react";

const Form = (props) => {
  const [todoInput, setTodoInput] = useState("");
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
    <form onSubmit={addTodo}>
      <input
        onChange={(e) => setTodoInput(e.target.value)}
        type="text"
        placeholder="Add a Todo"
        value={todoInput}
        ref={inputRef}
      />
      <button> Add Todo</button>
    </form>
  );
};

export default Form;
