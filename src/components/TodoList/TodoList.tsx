import React from "react";

import { TodoItem } from "./TodoItem/TodoItem.tsx";
import { TodoPanel } from "../TodoPanel/TodoPanel.tsx";
import { useTodo } from "../../utils/index.ts";

export const TodoList: React.FC = () => {
  const { todos, todoIdForEdit, ckeckTodo, deleteTodo, selectTodoIdForEdit } =
    useTodo();
  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit)
          return (
            <TodoPanel
              mode="edit"
              key={todo.id}
              editTodo={{ name: todo.name, description: todo.description }}
            />
          );
        else
          return (
            <TodoItem
              todo={todo}
              ckeckTodo={ckeckTodo}
              deleteTodo={deleteTodo}
              key={todo.id}
              selectTodoIdForEdit={selectTodoIdForEdit}
            />
          );
      })}
    </div>
  ); 
};
