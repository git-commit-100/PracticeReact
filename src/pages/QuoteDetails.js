import React, { Suspense, useEffect } from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/useHttp";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NotFound from "../components/UI/NotFound";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

//lazy loading
const Comments = React.lazy(() => import("../components/comments/Comments"));

function QuoteDetails(props) {
  const { data, sendHttpRequest, error, status } = useHttp();
  const params = useParams();
  const isLoading = status === "pending";
  const { quoteId } = params;
  let loading = "";

  useEffect(() => {
    sendHttpRequest({ path: `quotes/${quoteId}.json` });
  }, [sendHttpRequest, quoteId]);

  if (isLoading) {
    loading = (
      <div className="loading">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isLoading && !data) {
    return <NoQuotesFound />;
  }

  if (error) {
    return <NotFound message={error} />;
  }

  let commentsLinkJsx = data ? (
    <Link className="btn centered" to={`./comments`}>
      Load Comments
    </Link>
  ) : (
    ""
  );

  return (
    <>
      {loading}
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        {!isLoading && <HighlightedQuote quote={data} />}
        {/* render child nested route here */}
        {/* direct path (without `/` means path derived from parent ) */}
        <Routes>
          <Route
            index
            path={"/"}
            element={!isLoading && commentsLinkJsx}
          ></Route>
          <Route path={"/comments"} element={<Comments />}></Route>
        </Routes>
      </Suspense>
      <Outlet />
    </>
  );
}

export default QuoteDetails;
