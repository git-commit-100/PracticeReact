import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Michael Scott",
    text: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
  },
  {
    id: "q2",
    author: "Dwight Schrute",
    text: "A real man swallows his vomit when a lady is present.",
  },
  {
    id: "q3",
    author: "Jim Halpert",
    text: "I miss Dwight. Congratulations, universe. You win.",
  },
  {
    id: "q4",
    author: "Andy Bernard",
    text: " I wish there was a way to know you're in the good old days, before you've actually left them",
  },
  {
    id: "q5",
    author: "Micheal Scott",
    text: "I guess I've been working so hard, I forgot what it's like to be hardly working.",
  },
];

function Quotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default Quotes;
