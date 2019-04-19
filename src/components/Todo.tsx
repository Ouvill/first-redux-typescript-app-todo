import React from "react";

interface TodoProps {
  onClick: Function;
  completed: Boolean;
  text: String;
}

const Todo = (props: TodoProps) => {
  return (
    <li
      onClick={() => {
        props.onClick();
      }}
      style={{
        textDecoration: props.completed ? "line-through" : "none"
      }}
    >
      {props.text}
    </li>
  );
};

export default Todo;
