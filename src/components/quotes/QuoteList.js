import LoadingSpinner from "../UI/LoadingSpinner";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  return (
    <>
      {props.isLoading && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
