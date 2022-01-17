import { useRef } from "react";
import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isFormInputsEmpty, setIsFormInputEmpty] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    if (enteredAuthor.trim() === "" || enteredText.trim() === "") {
      setIsFormInputEmpty(true);
      return;
    }

    const quote = {
      author: enteredAuthor,
      text: enteredText,
    };
    //emptying input fields
    authorInputRef.current.value = "";
    textInputRef.current.value = "";
    props.onAddQuote(quote);
  }

  return (
    <>
      <Card className={classes["form-div"]}>
        <h3 className={classes.header}>Add Your Quote Here</h3>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          {isFormInputsEmpty && (
            <p className={classes.formEmpty}>Please Fill All Input Fields !</p>
          )}
          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn full">Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
