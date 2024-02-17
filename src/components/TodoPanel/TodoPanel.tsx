import React from "react";

import styles from "./TodoPanel.module.css";

import { Button } from "../Button/Button.tsx";
import { useTodo } from "../../utils/index.ts";

const DEFAULT_TODO = {
  name: "",
  description: "",
};

interface AddTodoPanelProps {
  mode: "add";
}

interface EditTodoPanelProps {
  mode: "edit";
  editTodo: Omit<Todo, "id" | "checked">;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const { changeTodo, addTodo } = useTodo();

  const isEdit = props.mode === "edit";
  const isAdd = props.mode === "add";

  const [todo, setTodo] = React.useState(
    isEdit ? props.editTodo : DEFAULT_TODO
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description };

    if (isEdit) return changeTodo(todoItem);
    else if (isAdd) {
      addTodo(todoItem);
      setTodo(DEFAULT_TODO);
    }
  };

  return (
    <div className={styles.todo_panel_container}>
      <div className={styles.feilds_container}>
        <div className={styles.feild_container}>
          <label htmlFor="name">
            <div>name</div>
            <input
              type="text"
              id="name"
              name="name"
              onChange={onChange}
              value={todo.name}
            />
          </label>
        </div>
      </div>
      <div className={styles.feilds_container}>
        <div className={styles.feild_container}>
          <label htmlFor="description">
            <div>description</div>
            <input
              type="text"
              id="description"
              name="description"
              onChange={onChange}
              value={todo.description}
            />
          </label>
        </div>
      </div>
      <div>
        <Button color="blue" onClick={onClick}>
          {isEdit && "EDIT"}
          {isAdd && "ADD"}
        </Button>
      </div>
    </div>
  );
};
