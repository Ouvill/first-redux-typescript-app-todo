import React from "react";
import Footer from "./Footer";
import AddTodoComponents from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => {
  return (
    <div>
      <AddTodoComponents />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
