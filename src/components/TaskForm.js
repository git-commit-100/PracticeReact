import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./TaskForm.module.css";

const initialInput = {
  id: "",
  title: "",
  body: "",
};

function TaskForm(props) {
  const [inputVal, setInputVal] = useState(initialInput);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedInput = { ...inputVal, id: new Date().getTime() };
    props.onAddTask(updatedInput);
    setInputVal(initialInput);
  };

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
