import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

//lazy loading
const Quotes = React.lazy(() => import("./pages/Quotes"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./components/UI/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetails />}>
            {/*nested routing is inside <QuoteDetails /> */}
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound message="Page Not Found" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
