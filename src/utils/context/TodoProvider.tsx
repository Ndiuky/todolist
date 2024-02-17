import React from "react";

import { TodoContext } from "./TodoContext.ts";

interface TodoProviderProps {
  children: React.ReactNode;
}

type TODO_LIST_PROPS = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

const DEFAULT_TODO: Array<TODO_LIST_PROPS> = [
  { id: 1, name: "TodoList", description: "", checked: false },
];

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO);
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo["id"] | null>(
    null
  );

  const addTodo = ({ name, description }: Omit<Todo, "checked" | "id">) => {
    if (name.length === 0 || description.length === 0) return undefined;
    else
      return setTodos([
        ...todos,
        {
          id: todos[todos.length - 1].id + 1,
          description,
          name,
          checked: false,
        },
      ]);
  };

  const changeTodo = ({ name, description }: Omit<Todo, "checked" | "id">) => {
    if (name.length === 0 || description.length === 0) return undefined;
    else {
      setTodos(
        todos.map((todo) => {
          if (todo.id === todoIdForEdit) return { ...todo, name, description };
          else return todo;
        })
      );
      setTodoIdForEdit(null);
    }
  };

  const ckeckTodo = (id: Todo["id"]) =>
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, checked: !todo.checked };
        else return todo;
      })
    );

  const deleteTodo = (id: Todo["id"]) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const selectTodoIdForEdit = (id: Todo["id"]) => setTodoIdForEdit(id);

  const value = React.useMemo(
    () => ({
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoIdForEdit,
      ckeckTodo,
    }),
    [
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoIdForEdit,
      ckeckTodo,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
