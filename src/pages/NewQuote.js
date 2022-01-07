import React from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
  const navigate = useNavigate();
  const addQuoteHandler = (quote) => {
    console.log({ quote });
    navigate("/quotes", { replace: true });
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
