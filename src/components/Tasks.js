import React from "react";
import Card from "../UI/Card";
import styles from "./Tasks.module.css";
import Task from "./Task";
import useHttp from "../hooks/use-http";

function Tasks(props) {
  const { loading, error, sendRequest } = useHttp();
  function dataTransform() {}

  const handleDeleteTask = (id) => {
    const taskToBeDeleted = props.tasks.find((task) => {
      return task.id === id;
    });

    if (
      window.confirm(
        `Do you really want to delete post-it with title ${taskToBeDeleted.title} ?`
      )
    ) {
      sendRequest(
        {
          url: `https://react-https-61e56-default-rtdb.firebaseio.com/tasks/${id}.json`,
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        },
        dataTransform
      );

      props.toDelete(id);
    }
  };

  const contentJsx = props.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        toDelete={handleDeleteTask}
        id={task.id}
        title={task.title}
        body={task.body}
      />
    );
  });

  if (error) {
    props.error(error);
  }

  return (
    <Card>
      <h3 className={styles["tasks-header"]}>Your Post-its</h3>
      <ul className={styles["tasks-list"]}>{contentJsx}</ul>
    </Card>
  );
}

export default Tasks;
