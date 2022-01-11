import React, { useEffect } from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/useHttp";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NotFound from "../components/UI/NotFound";

function QuoteDetails() {
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

  if (error) {
    return <NotFound message={error} />;
  }

  return (
    <>
      {loading && loading}
      {!loading && <HighlightedQuote quote={data} />}
      {/* render child nested route here */}
      {/* direct path (without `/` means path derived from parent ) */}
      <Routes>
        <Route
          path={"/"}
          element={
            <Link className="btn centered" to={`comments`}>
              Load Comments
            </Link>
          }
        ></Route>
      </Routes>
      <Outlet />
    </>
  );
}

export default QuoteDetails;
