import { Navigate, Route, Routes } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Quotes from "./pages/Quotes";
import Layout from "./components/layout/Layout";
import NotFound from "./components/UI/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetails />}>
          {/*comments routing is inside <QuoteDetails /> */}
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound message="Page Not Found" />} />
      </Routes>
    </Layout>
  );
}

export default App;
