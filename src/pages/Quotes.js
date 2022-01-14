import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/useHttp";
import Notification from "../components/UI/Notification";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

function transformData(quotes) {
  let loadedQuotes = [];

  if (quotes === "") {
    return [];
  }

  for (let key in quotes) {
    let quote = {
      id: key,
      author: quotes[key].author,
      text: quotes[key].text,
    };
    loadedQuotes.unshift(quote);
  }

  return loadedQuotes;
}

function Quotes() {
  const { sendHttpRequest, data, error, status } = useHttp();
  const isLoading = status === "pending";
  let errorJsx = "";

  useEffect(() => {
    sendHttpRequest({ path: "quotes.json" });
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

  const quotesFromDb = transformData(data);

  return (
    <>
      {error && errorJsx}
      {!isLoading && quotesFromDb.length === 0 && <NoQuotesFound />}
      <QuoteList isLoading={isLoading} quotes={quotesFromDb} />
    </>
  );
}

export default Quotes;
