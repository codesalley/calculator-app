/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/calculate';

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const submitTo = (num) => {
    calculate({
      next, total, setNext, setTotal,
    }, num);
  };

  return (
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
  );
}

export default App;
