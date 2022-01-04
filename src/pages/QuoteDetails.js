import React from "react";
import { Outlet, useParams } from "react-router-dom";

function QuoteDetails() {
  const params = useParams();
  const { quoteId } = params;
  return (
    <div>
      <h2>Quote Detail Page</h2>
      <p>{quoteId}</p>
      {/* render child nested route here */}
      <Outlet />
    </div>
  );
}

export default QuoteDetails;
