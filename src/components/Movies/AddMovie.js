import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddMovie.module.css";

const defaultInput = {
  id: null,
  movieName: "",
  dateOfRelease: "",
  desc: "",
  imgPath: "",
};

function AddMovie(props) {
  const [inputVal, setInputVal] = useState(defaultInput);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedInput = {
      ...inputVal,
      id: new Date().getTime().toString(),
      [name]: value,
    };
    setInputVal(updatedInput);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onAddMovie(inputVal);
    setInputVal(defaultInput);
  };

  return (
    <Card>
      <h3 className={styles["header-h3"]}>Add a Movie Here</h3>
      <form className={styles["form-add-movie"]} onSubmit={handleFormSubmit}>
        <label htmlFor="input-title">Movie Title</label>
        <input
          type="text"
          name="movieName"
          value={inputVal.movieName}
          onChange={handleInputChange}
          id="input-title"
          autoComplete="off"
          required
        />

        <label htmlFor="input-dateOfRelease">Movie Release Date</label>
        <input
          type="date"
          name="dateOfRelease"
          value={inputVal.dateOfRelease}
          onChange={handleInputChange}
          id="input-dateOfRelease"
          autoComplete="off"
          min="1990-01-01"
          max="2024-12-31"
          required
        />

        <label htmlFor="input-imgPath">Movie Poster URL</label>
        <input
          type="url"
          name="imgPath"
          value={inputVal.imgPath}
          onChange={handleInputChange}
          id="input-imgPath"
          autoComplete="off"
          required
        />

        <label htmlFor="input-desc">Movie Description</label>
        <textarea
          type="text"
          name="desc"
          value={inputVal.desc}
          onChange={handleInputChange}
          id="input-desc"
          autoComplete="off"
          required
        />

        <Button className={styles["submit-btn"]} type="submit">
          Add Movie
        </Button>
      </form>
    </Card>
  );
}

export default AddMovie;
