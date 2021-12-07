import React from "react";
import Card from "../UI/Card";
import styles from "./Tasks.module.css";
import Task from "./Task";

function Tasks(props) {
  const handleDeleteTask = (id) => {
    props.toDelete(id);
  };

  const contentJsx = props.tasks.map((task) => {
    return (
      <Task
        toDelete={handleDeleteTask}
        key={task.id}
        id={task.id}
        title={task.title}
        body={task.body}
      />
    );
  });

  return (
    <Card>
      <h3 className={styles["tasks-header"]}>Your Post-its</h3>
      <ul className={styles["tasks-list"]}>{contentJsx}</ul>
    </Card>
  );
}

export default Tasks;
