import { Navigate, Route, Routes } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Quotes from "./pages/Quotes";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetails />}>
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
      </Routes>
    </Layout>
  );
}

export default App;
