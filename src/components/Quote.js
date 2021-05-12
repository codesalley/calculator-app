import './Quote.css';

const QuotePage = () => (
  <div className="quote-main">
    <h2 className="quote-h2">Random Quote</h2>
    <div className="quote-card">
      <p className="quote">Yes, I&apos;m random  and a quote</p>
      <p className="author">
        by
        {' '}
        <span>Code salley</span>
      </p>
    </div>
  </div>
);

export default QuotePage;
