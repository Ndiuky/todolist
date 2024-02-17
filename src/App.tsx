import React from "react";

import styles from "./App.module.css";

import { Header } from "./components/Header/Header.tsx";
import { TodoPanel } from "./components/TodoPanel/TodoPanel.tsx";
import { TodoList } from "./components/TodoList/TodoList.tsx";
import { TodoProvider } from "./utils/index.ts";

export const App = () => (
  <TodoProvider>
    <div className={styles.app_container}>
      <div className={styles.container}>
        <Header />
        <TodoPanel mode="add" />
        <TodoList />
      </div>
    </div>
  </TodoProvider>
);
