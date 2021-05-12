import { useEffect, useState } from 'react';
import getRandomeInt from './logic/getRandom';
import loadingSken from '../assets/undraw_Loading_re_5axr.svg';
import './Quote.css';

const QuotePage = () => {
  const [pageData, setPageData] = useState();
  const [loading, setLoading] = useState(true);
  const url = 'https://type.fit/api/quotes';

  const getQuotes = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const rnd = getRandomeInt(data.length);
      setPageData(data[rnd]);
      setLoading(false);
    } catch (error) {
      console.warn({ msg: 'check your internet connection' });
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <div className="quote-main">
      <h2 className="quote-h2">Random Quote</h2>

      <div className="quote-card">
        {loading ? (<img src={loadingSken} alt="page loading" className="loading-img" />)
          : (
            <>
              <p className="quote">{pageData.text}</p>
              <p className="author">
                by
                {' '}
                <span>{pageData.author || 'code salley'}</span>
              </p>
            </>
          ) }
      </div>
    </div>
  );
};

export default QuotePage;
