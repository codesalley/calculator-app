import './App.css';
import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const submitTo = () => {};
  return (
    <div className="container">
      <div className="main-intro">
        <div className="results-card">
          <Display />
        </div>
        <div className="buttons-field">
          <ButtonPanel onclick={submitTo} />
        </div>
      </div>
    </div>
  );
}

export default App;
