import React from "react";
import { useTodos } from "../store/Todos";

function Todo() {
  const { todos, toggletodo, handleDelete } = useTodos();

  const filterData = todos;

  return (
    <ul>
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggletodo(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Todo;
