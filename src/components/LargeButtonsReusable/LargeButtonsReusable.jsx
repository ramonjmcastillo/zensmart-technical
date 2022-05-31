import React from "react";

const LargeButtons = (props) => {
  /*
  3 types 
  neutral/pressed/inactive
  */

  return (
    <button
      type={props.button}
      className={`large-button large-button-${props.type}`}
    >
      {props.children}
    </button>
  );
};

export default LargeButtons;
