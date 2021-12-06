import React from "react";
import styles from "./Task.module.css";

function Task(props) {
  const { id, title, body } = props.task;

  return (
    <li className={`${styles["task-item"]} colorful`}>
      <span hidden>{id}</span>
      <h3 className={styles["task-title"]}>{title}</h3>
      <p className={styles["task-body"]}>{body}</p>
    </li>
  );
}

export default Task;
