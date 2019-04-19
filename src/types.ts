export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SEV_VISIBILITY_FLITER = "SET_VISIBILITY_FILTER";

interface addTodoAction {
  type: typeof ADD_TODO;
  text: string;
}

interface toggleTodo {
  type: typeof TOGGLE_TODO;
  index: number;
}

export const VisibilityFiters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export type FilterType = "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";

interface setVisibiilityFilter {
  type: typeof SEV_VISIBILITY_FLITER;
  filter: FilterType;
}

export type ToDoActionType = addTodoAction | toggleTodo | setVisibiilityFilter;

export type ToDo = {
  text: string;
  completed: boolean;
};

export interface AppState {
  visibilityFilter: FilterType;
  todos: ToDo[];
}
