import React from "react";
import styles from "./Movie.module.css";

function Movie(props) {
  const { id, movieName, dateOfRelease, desc, imgPath } = props;
  return (
    <>
    <li className={styles["movie"]}>
      <span hidden={true}>{id}</span>
      <h3 className={styles["movie-name"]}>{movieName}</h3>
      <img src={encodeURI(imgPath)} alt="Thumbnail" />
      <p className={styles["movie-desc"]}>{desc}</p>
      <p
        className={styles["movie-dateOfRelease"]}
      >{`Released On: ${dateOfRelease}`}</p>
    </li>
    </>
  );
}

export default Movie;
