import logo from './logo.svg';
import './App.css';

function App() {

  const Pao = <p>Te amo y te espero, perdon si actuo asi</p>
  return (
    <div className="App">
      <header className="App-header">
        <h1>MpMjAPc</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {Pao}
        <p>
          Pao <code>Te amo demasiado</code> Siempre te esperare.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
