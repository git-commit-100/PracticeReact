import React from "react";
import styles from "./Task.module.css";
import Button from "../UI/Button";

function Task(props) {
  const { id, title, body } = props;

  const handleDeleteTask = (id) => {
    props.toDelete(id);
  };

  return (
    <li className={`${styles["task-item"]} colorful`}>
      <span hidden>{id}</span>
      <Button
        onClick={handleDeleteTask.bind(null, id)}
        className={styles["cancel-task"]}
      >
        X
      </Button>
      <h3 className={styles["task-title"]}>{title}</h3>
      <p className={styles["task-body"]}>{body}</p>
    </li>
  );
}

export default Task;
