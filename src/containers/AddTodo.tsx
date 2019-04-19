import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Dispatch } from "redux";
import { AppState } from "../types";

interface AddTodoProps {
  dispatch: Dispatch;
  state: AppState;
}

// let AddTodo = (props: AddTodoProps) => {
let AddTodoComponents = (props: AddTodoProps) => {
  let input: HTMLInputElement;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(props.state);
          if (!input.value.trim()) {
            console.log("trim");
            return;
          }
          props.dispatch(addTodo(input.value));
          console.log(input.value);
          input.value = " ";
        }}
      >
        <input
          ref={(node: HTMLInputElement) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    state: state
  };
};

const AddTodo = connect(mapStateToProps)(AddTodoComponents);

export default AddTodo;
