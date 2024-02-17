import React from "react";

import styles from "./TodoItem.module.css";

import { Button } from "../../Button/Button.tsx";

interface TodoItemProps {
  todo: Todo;
  ckeckTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  ckeckTodo,
  deleteTodo,
  selectTodoIdForEdit,
}) => (
  <div className={styles.todo_item_conainer}>
    <div>
      <div
        aria-hidden
        className={styles.todo_item_title}
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? "line-through" : "none",
        }}
        onClick={() => ckeckTodo(todo.id)}
      >
        {todo.name}
      </div>
      <div
        aria-hidden
        className={styles.todo_item_description}
        style={{
          opacity: todo.checked ? 0.5 : 1,
        }}
      >
        {todo.description}
      </div>
      <div aria-hidden className={styles.todo_item_button_conainer}>
        <Button color="blue" onClick={() => selectTodoIdForEdit(todo.id)}>
          EDIT
        </Button>
        <Button color="red" onClick={() => deleteTodo(todo.id)}>
          DELETE
        </Button>
      </div>
    </div>
  </div>
);
