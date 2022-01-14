import { useRef, useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import LoadingSpinner from "../UI/LoadingSpinner";
import Notification from "../UI/Notification";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const [notification, setNotification] = useState(null);
  const [isInputValid, setIsInputValid] = useState(true);
  const { status, sendHttpRequest, error } = useHttp();
  const isLoading = status === "pending";
  let loadingJsx = "";
  const { onAddComment } = props;

  function hideNotification() {
    setNotification(null);
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    const userComment = commentTextRef.current.value;
    // optional: Could validate here
    if (userComment === "") {
      setIsInputValid(false);
      return;
    }

    const { quoteId } = props;
    const newComment = {
      id: new Date().getTime(),
      quoteId: quoteId,
      comment: userComment,
    };
    // send comment to server
    sendHttpRequest({
      path: `comments/${quoteId}.json`,
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: newComment,
    });
  };

  if (isLoading) {
    loadingJsx = <LoadingSpinner />;
  }

  useEffect(() => {
    if (error) {
      setNotification(
        <Notification
          heading="Error"
          message={error}
          type="error"
          hideNotification={hideNotification}
        />
      );
    }

    //notify parent component to fetch comments
    if (status === "completed" && !error) {
      onAddComment();
    }
  }, [status, onAddComment, error]);

  return (
    <>
      {notification && notification}
      {loadingJsx}
      {!isLoading && (
        <form className={classes.form} onSubmit={submitFormHandler}>
          {!isInputValid && (
            <p className="centered" style={{ color: "red" }}>
              Comment Field cannot be empty !
            </p>
          )}
          <div className={classes.control} onSubmit={submitFormHandler}>
            <label htmlFor="comment">Your Comment</label>
            <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn">Add Comment</button>
          </div>
        </form>
      )}
    </>
  );
};

export default NewCommentForm;
