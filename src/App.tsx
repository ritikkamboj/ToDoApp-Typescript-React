import React from "react";
import AddToDo from "./components/AddToDo";
import Todo from "./components/Todo";

function App() {
  return (
    <main>
      <h1>ToDo App (Typescript and React)</h1>
      <AddToDo />
      <Todo />
    </main>
  );
}

export default App;
