import React from "react";
import Card from "../UI/Card";
import styles from "./Tasks.module.css";
import Task from "./Task";

function Tasks(props) {
  const contentJsx = props.tasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });

  return (
    <Card>
      <h3 className={styles["tasks-header"]}>Your Post-its</h3>
      <ul className={styles["tasks-list"]}>{contentJsx}</ul>
    </Card>
  );
}

export default Tasks;
