import { useEffect } from "react";
import { useParams, Route, Link, Routes } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteID } = params;
  const { sendRequest, status, data: quote, error } = useHttp(
    getSingleQuote, true);
  // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteID);

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  if (status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!quote.text) {
    return <p>No quote found!</p>;
  }

  return <section>
    <HighlightedQuote text={quote.text} author={quote.author} />
    <Routes>
      <Route path='' exact
        element={<div className="centered">
          <Link
            className='btn--flat'
            to={`comments`}>
            Load Comments
          </Link>
        </div>} />
      <Route path={`comments`} element={<Comments />} />
    </Routes>
  </section>
};

export default QuoteDetail;