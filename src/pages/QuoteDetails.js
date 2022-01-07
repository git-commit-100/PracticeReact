import React from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

function QuoteDetails() {
  const params = useParams();
  const { quoteId } = params;
  return (
    <>
      <HighlightedQuote quoteId={quoteId} />
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
