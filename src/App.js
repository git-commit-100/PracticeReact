import React, { useCallback, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import AddMovie from "./components/Movies/AddMovie";
import Movies from "./components/Movies/Movies";
import Card from "./components/UI/Card";
import axios from "axios";
import Button from "./components/UI/Button";
import Navbar from "./components/Navbar/Navbar";

// const api_token = "2b177622c7adae941661b7937a709421";
const url = "https://react-https-61e56-default-rtdb.firebaseio.com/movies.json";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //GET request
  const handleMovieRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      //if db is empty
      if (response.data === null) {
        throw new Error("Database contains no records");
      }

      let loadedMovies = [];
      for (let key in response.data) {
        loadedMovies.push(response.data[key]);
      }

      //imagine server takes 500ms time to load data
      setTimeout(() => {
        setIsLoading(false);
        setMoviesData(loadedMovies);
      }, 500);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  //using useEffect to load data as soon as page loads
  useEffect(() => {
    handleMovieRequest();
  }, [handleMovieRequest]);

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

  //error occurs eg:- 404
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

  //POST request
  const handleAddMovie = async (movieObj) => {
    try {
      const response = await axios.post(url, movieObj);
      console.table(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <AddMovie onAddMovie={handleAddMovie} />
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
