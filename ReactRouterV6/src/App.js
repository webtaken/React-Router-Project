import { Route, Routes, Navigate } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/quotes' />} />
        <Route path='/quotes' element={<AllQuotes />} />
        <Route path='/quotes/:quoteID/*' element={<QuoteDetail />} />
        <Route path='/new-quote' element={<NewQuote />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout >
  );
}

export default App;
