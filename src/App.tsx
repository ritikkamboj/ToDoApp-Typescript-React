import React from "react";
import AddToDo from "./components/AddToDo";
import Todo from "./components/Todo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <h1>ToDo App (Typescript and React)</h1>
      <Navbar />
      <AddToDo />
      <Todo />
    </main>
  );
}

export default App;
