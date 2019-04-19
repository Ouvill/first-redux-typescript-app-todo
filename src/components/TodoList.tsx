import React from "react";
import Todo from "./Todo";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onTodoClick: Function;
}

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.todos.map((todo: Todo, index: number) => {
        return (
          <Todo
            key={index}
            {...todo}
            onClick={() => {
              props.onTodoClick;
            }}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
