import { FormEvent, useState } from "react";
import { useTodos } from "../store/Todos";

function AddToDo() {
  const [ToDo, setToDo] = useState("");

  const { AddToDo } = useTodos();
  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    AddToDo(ToDo);
    setToDo("");
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={ToDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDo;
