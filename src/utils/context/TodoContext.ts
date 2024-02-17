import React from "react";

export interface TodoContextProps {
  todos: Todo[];
  ckeckTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
  todoIdForEdit: Todo["id"] | null;
  changeTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
  addTodo: ({ name, description }: Omit<Todo, "checked" | "id">) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  ckeckTodo: () => {},
  deleteTodo: () => {},
  selectTodoIdForEdit: () => {},
  todoIdForEdit: null,
  changeTodo: () => {},
  addTodo: () => {},
});
