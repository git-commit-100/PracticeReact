import React, { useState } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";

const api_token = "2b177622c7adae941661b7937a709421";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleMovieRequest() {
    try {
      setIsLoading(true);
      //clear out previous errors
      setError(null);
      //fetching data from an api
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_token}`
      );

      const data = await response.json();

      //some error occurred (api supported json return)
      if (data.success === false) {
        throw new Error(data.status_message);
      }

      //converting response into custom object with custom keys
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

      //imagine it takes 500ms for request to process
      setTimeout(() => {
        setMoviesData(transformedData);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      setError(error.message);
    }
  }

  //initial content
  let content = (
    <Card>
      <p className="no-data">No Movies Found ! Maybe Try Again ?</p>
    </Card>
  );

  //loading text
  if (isLoading) {
    content = (
      <Card>
        <p className="no-data">Loading.....</p>
      </Card>
    );
  }

  if (error) {
    content = (
      <Card>
        <p className="no-data">{error}</p>
      </Card>
    );
  }

  //successful request
  if (!isLoading && !error && moviesData.length > 0) {
    content = <Movies movies={moviesData} />;
  }

  return (
    <>
      <Card className="fetch-movie-card">
        <Button className="fetch-movie-btn" onClick={handleMovieRequest}>
          Fetch Movies
        </Button>
      </Card>
      {content}
    </>
  );
}

export default App;
