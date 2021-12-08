import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./TaskForm.module.css";
import useHttp from "../hooks/use-http";

const initialInput = {
  id: "",
  title: "",
  body: "",
};

function TaskForm(props) {
  const { loading, error, sendRequest } = useHttp();
  const [inputVal, setInputVal] = useState(initialInput);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  function dataTransform(task, firebaseId) {
    const generatedId = firebaseId.name;
    const updatedTask = { ...task, id: generatedId };
    props.onAddTask(updatedTask);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedInput = { ...inputVal, id: new Date().getTime() };

    sendRequest(
      {
        url: "https://react-https-61e56-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: updatedInput,
      },
      dataTransform.bind(null, updatedInput)
    );

    setInputVal(initialInput);
  };

  if (error) {
    //passing errors upwards
    props.error(error);
  }

  return (
    <Card>
      <div className={styles["brand-div"]}>
        <p className={styles["brand-name"]}>ThatIsNoteMe</p>
      </div>
      <form className={styles["task-form"]} onSubmit={handleFormSubmit}>
        <label htmlFor="input-task-title">Add Your Title Here</label>
        <input
          type="text"
          id="input-task-title"
          autoComplete="off"
          required
          name="title"
          onChange={handleInputChange}
          value={inputVal.title}
        />

        <label htmlFor="input-task-body">Add Your Content Here</label>
        <textarea
          id="input-task-body"
          autoComplete="off"
          required
          name="body"
          onChange={handleInputChange}
          value={inputVal.body}
        />
        <Button type="submit" className={styles["submit-btn"]}>
          Add Note
        </Button>
      </form>
    </Card>
  );
}

export default TaskForm;
