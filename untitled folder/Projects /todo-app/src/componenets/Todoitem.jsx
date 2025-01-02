import React from "react";

const Todoitem = (props) => {
  return (
    <li className="todo-item">
      <span>
        {props.completed ? <></> : <input type="checkbox" />}
        <span className="content">{props.text}</span>
      </span>
      <p className="option">...</p>
    </li>
  );
};

export default Todoitem;
