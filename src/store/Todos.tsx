import { createContext, ReactNode, useState } from "react";
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
};

export const TodoProvider = ({ children }: todoproviderprops) => {
  const [todos, setTodos] = useState<Todo[]>([]);

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
      return newTodos;
    });
  }
  return (
    <todocontext.Provider value={{ todos, AddToDo }}>
      {children}
    </todocontext.Provider>
  );
};
