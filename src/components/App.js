/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/calculate';
import HomePage from './Home';
import QuotePage from './Quote';
import NavBar from './NavBar';

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const submitTo = (num) => {
    calculate({
      next, total, setNext, setTotal,
    }, num);
  };

  return (

    <div className="main">
      <Router>
        <NavBar />
        <div className="main-home">
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/quotes">
            <QuotePage />
          </Route>
          <Route path="/calculator">
            <div className="container">
              <div className="calculator-intro">
                <h2>
                  Let&lsquo;s do some
                  {' '}
                  <span className="math">Math</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </p>
              </div>
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
        </div>
      </Router>

    </div>
  );
}

export default App;
