import classes from "./HighlightedQuote.module.css";
import NoQuotesFound from "./NoQuotesFound";

const HighlightedQuote = (props) => {
  
  if (!props.quote) {
    return <NoQuotesFound />;
  }

  const { author, text } = props.quote;
  return (
    <figure className={classes.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
