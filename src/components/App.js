import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="container">
      <div className="main-intro">
        <div className="results-card">
          <Display />
        </div>
        <div className="buttons-field">
          <ButtonPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
