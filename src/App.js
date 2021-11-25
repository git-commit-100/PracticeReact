import React from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";

const DUMMY_MOVIES = [
  {
    id: 1,
    movieName: "Deadpool",
    dateOfRelease: "28/08/2013",
    desc: "Produced by Marvel. A comedy superhero film."
  },
  {
    id: 2,
    movieName: "Dumb And Dumber",
    dateOfRelease: "08/03/2019",
    desc: "Classic comedy. A story about 2 friends who are crazy af."
  },
  {
    id: 3,
    movieName: "Alvin and the Chipmunks",
    dateOfRelease: "13/01/2020",
    desc: "What happens when squirrels are able to talk in english ? Find out in this movie."
  },
];

function App() {
  return (
    <>
      <Card className="fetch-movie-card">
        <Button className="fetch-movie-btn">Fetch Movies</Button>
      </Card>
      <Movies movies={DUMMY_MOVIES} />
    </>
  );
}

export default App;
