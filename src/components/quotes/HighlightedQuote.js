import classes from "./HighlightedQuote.module.css";
import NoQuotesFound from "../quotes/NoQuotesFound";

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
    author: "Andy Bernard",
    text: " I wish there was a way to know you're in the good old days, before you've actually left them",
  },
  {
    id: "q4",
    author: "Micheal Scott",
    text: "I guess I've been working so hard, I forgot what it's like to be hardly working.",
  },
];

const HighlightedQuote = (props) => {
  const { quoteId } = props;
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  //if quote id is undefined
  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <figure className={classes.quote}>
      <p>{quote.text}</p>
      <figcaption>{quote.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
