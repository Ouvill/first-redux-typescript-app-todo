import {
  ADD_TODO,
  TOGGLE_TODO,
  SEV_VISIBILITY_FLITER,
  FilterType,
  ToDoActionType
} from "./types";
// action types

// other constantas
// export const VisibilityFilters = {
//   SHOW_ALL: "SHOW_ALL",
//   SHOW_COMPLETE: "SHOW_COMPLETED",
//   SHOW_ACTIVE: "SHOW_ACTIVE"
// };

// action creators

export function addTodo(text: string): ToDoActionType {
  return { type: ADD_TODO, text };
}

export function toggleTodo(index: number): ToDoActionType {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter: FilterType): ToDoActionType {
  return {
    type: SEV_VISIBILITY_FLITER,
    filter
  };
}
