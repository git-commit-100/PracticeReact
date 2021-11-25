import React from "react";
import styles from "./Movie.module.css";

function Movie(props) {
  const { id, movieName, dateOfRelease, desc } = props;
  return (
    <li className={styles["movie"]}>
      <h3 className={styles["movie-name"]}>{movieName}</h3>
      <p className={styles["movie-desc"]}>{desc}</p>
      <p
        className={styles["movie-dateOfRelease"]}
      >{`Released On: ${dateOfRelease}`}</p>
    </li>
  );
}

export default Movie;
