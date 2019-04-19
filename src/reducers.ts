import { ToDoActionType, AppState, ToDo, FilterType } from "./types";
import { stat } from "fs";

const initialState: AppState = {
  visibilityFilter: "SHOW_ALL",
  todos: []
};

function todos(state: ToDo[] = [], action: ToDoActionType): ToDo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        (todo: ToDo, index: number): ToDo => {
          if (index === action.index) {
            return Object.assign({}, todo, { completed: !todo.completed });
          }
          return todo;
        }
      );
  }
  return state;
}

function visibilityFilter(
  state: FilterType = "SHOW_ALL",
  action: ToDoActionType
): FilterType {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

function todoApp(
  state: AppState = initialState,
  action: ToDoActionType
): AppState {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
