import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/useHttp";
import Notification from "../components/UI/Notification";

function NewQuote(props) {
  const [notification, setNotification] = useState(null);
  const { error, status, sendHttpRequest } = useHttp();
  const isLoading = status === "pending";
  const navigate = useNavigate();

  const addQuoteHandler = (quote) => {
    const newQuote = { id: new Date().getTime(), ...quote };
    sendHttpRequest({
      path: "quotes.json",
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: newQuote,
    });
  };

  function hideNotification() {
    setNotification(null);
  }

  useEffect(() => {
    if (error) {
      setNotification(() => (
        <Notification
          heading="Error"
          message={error}
          type="error"
          hideNotification={hideNotification}
        />
      ));
    }

    if (status === "completed" && !error) {
      //request is completed successfully
      setNotification(() => (
        <Notification
          heading="Success"
          message="Quote has been added"
          type="success"
          hideNotification={hideNotification}
        />
      ));

      //redirect user to quotes page after 2s {{OPTIONAL}}
      setTimeout(() => {
        navigate("/quotes", { replace: "true" });
      }, 2000);
    }
  }, [status, error, navigate]);

  return (
    <>
      {notification && notification}
      <QuoteForm isLoading={isLoading} onAddQuote={addQuoteHandler} />
    </>
  );
}

export default NewQuote;
