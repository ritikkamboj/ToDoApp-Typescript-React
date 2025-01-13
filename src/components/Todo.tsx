import { useTodos } from "../store/Todos";
import { useSearchParams } from "react-router";

function Todo() {
  const { todos, toggletodo, handleDelete } = useTodos();
  const [serachParams] = useSearchParams();
  const data = serachParams.get("todo");
  console.log(data, "jai baabe ki");
  let filterData = todos;

  if (data === "pending") {
    filterData = filterData.filter((todo) => !todo.completed);
  }

  if (data === "completed") {
    filterData = filterData.filter((todo) => todo.completed);
  }
  return (
    <ul className="list">
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
