import React, { useState } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";

const api_token = "2b177622c7adae941661b7937a709421";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [showMovie, setShowMovie] = useState(false);

  function handleMovieRequest() {
    setShowMovie(true);
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_token}`)
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.results.map((movie) => {
          return {
            id: movie.id,
            movieName:
              movie.title ||
              movie.name ||
              movie.original_title ||
              movie.original_name,
            dateOfRelease: movie.release_date || movie.first_air_date,
            desc: movie.overview,
            imgPath: `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`,
          };
        });
        console.log(transformedData);
        setMoviesData(transformedData);
      })
      .catch((err) => console.log(err));
  }

  let comp_jsx = (
    <Card>
      <p className="no-data">Click Above to get trending Moviezzz...</p>
    </Card>
  );

  if (showMovie) {
    comp_jsx = <Movies movies={moviesData} />;
  }

  return (
    <>
      <Card className="fetch-movie-card">
        <Button className="fetch-movie-btn" onClick={handleMovieRequest}>
          Fetch Movies
        </Button>
      </Card>
      {comp_jsx}
    </>
  );
}

export default App;
