import { createContext, ReactNode, useContext, useState } from "react";
import AddToDo from "../components/AddToDo";

export const todocontext = createContext<TodoContext | null>(null);

export type todoproviderprops = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodoContext = {
  todos: Todo[];
  AddToDo: (task: string) => void;
  toggletodo: (id: string) => void;
  handleDelete: (id: string) => void;
};

export const TodoProvider = ({ children }: todoproviderprops) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const todos = localStorage.getItem("todos") || "[]";

      return JSON.parse(todos) as Todo[];
    } catch (error) {
      return "error";
    }
  });

  function AddToDo(task: string) {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        ...prev,
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
      ];
      console.log(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

  function toggletodo(id: string) {
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return newTodos;
    });
  }

  function handleDelete(id: string) {
    setTodos((prev) => {
      let newTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return newTodos;
    });
  }
  return (
    <todocontext.Provider value={{ todos, AddToDo, toggletodo, handleDelete }}>
      {children}
    </todocontext.Provider>
  );
};

// consumer

export const useTodos = () => {
  const toDoConsumer = useContext(todocontext);

  // this check is used to be clear that where we are going to use contextvalue must be wrapped inside the provider
  if (!toDoConsumer) {
    throw new Error("App component not wrapped inside context ");
  }

  return toDoConsumer;
};
