import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import Notification from "../UI/Notification";
import CommentsList from "./CommentsList";

function transformData(comments, quoteId) {
  let loadedComments = [];

  if (comments === "") {
    return [];
  }

  if (comments !== null) {
    const idsOfQuote = Object.keys(comments);
    const idOfQuote = idsOfQuote.find((id) => id === quoteId);
    if (idOfQuote) {
      for (let key in comments[idOfQuote]) {
        let comment = {
          id: key,
          forQuote: comments[idOfQuote],
          comment: comments[idOfQuote][key].comment,
        };
        loadedComments.unshift(comment);
      }
    }
  }
  return loadedComments;
}

const Comments = () => {
  const params = useParams();
  const { quoteId } = params;
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { data, status, sendHttpRequest, error } = useHttp();
  const isLoading = status === "pending";
  let loadingJsx = <LoadingSpinner />;
  let errorJsx = "";

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddComment = () => {
    setIsAddingComment(false);
    sendHttpRequest({ path: "comments.json" });
  };

  //run as soon as component re-renders
  useEffect(() => {
    sendHttpRequest({ path: "comments.json" });
  }, [sendHttpRequest]);

  if (error) {
    errorJsx = (
      <Notification
        heading="Error"
        message={error}
        type="error"
        hideNotification={() => {}}
      />
    );
  }

  //have comments
  const commentsFromDb = transformData(data, quoteId);
  let comments = <p className={classes.noComments}>No Comments Yet !</p>;
  if (commentsFromDb.length > 0) {
    comments = <CommentsList comments={commentsFromDb} />;
  }

  return (
    <>
      <div className={classes["comments-div"]}>
        <section className={classes.comments}>
          <h2>User Comments</h2>
          {!isAddingComment && (
            <button
              style={{ marginBottom: "1rem" }}
              className="btn"
              onClick={startAddCommentHandler}
            >
              Add a Comment
            </button>
          )}
          {isAddingComment && (
            <NewCommentForm quoteId={quoteId} onAddComment={onAddComment} />
          )}
          <br />
          {errorJsx}
          {isLoading && loadingJsx}
          {comments}
        </section>
      </div>
    </>
  );
};

export default Comments;
