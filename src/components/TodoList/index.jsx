import React, { useState } from "react";

const TodoList = ({ items, onItemClick }) => {
  const handleItemClick = (item, e) => {
    if (!item.done) {
      onItemClick(item, e);
    }
  };

  console.log(items);

  return (
    <div>
      <ul>
        {items.map((todo, index) => {
          return <li key={index}> {todo.text} </li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
