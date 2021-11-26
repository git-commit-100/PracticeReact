import React from "react";
import Card from "../UI/Card";
import styles from "./Movies.module.css";
import Movie from "./Movie";

function Movies(props) {
  const movieJsx = (
    <ul className={styles["movies-list"]}>
      {props.movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            movieName={movie.movieName}
            dateOfRelease={movie.dateOfRelease}
            desc={movie.desc}
            movie={movie}
            imgPath={movie.imgPath}
          />
        );
      })}
    <p className={styles["end-of-list"]}> ~ End Of List ~ </p>
    </ul>
  );

  return <Card className={styles["movies-div"]}>{movieJsx}</Card>;
}

export default Movies;
