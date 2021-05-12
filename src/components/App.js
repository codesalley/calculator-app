/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/calculate';
import HomePage from './Home';
import QuotePage from './Qoute';

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const submitTo = (num) => {
    calculate({
      next, total, setNext, setTotal,
    }, num);
  };

  return (

    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/quotes">
        <QuotePage />
      </Route>
      <Route path="/calculator">
        <div className="container">
          <div className="main-intro">
            <div className="results-card">
              <Display total={total} next={next} />
            </div>
            <div className="buttons-field">
              <ButtonPanel onclick={submitTo} />
            </div>
          </div>
        </div>
      </Route>
    </Router>
  );
}

export default App;
