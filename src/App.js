import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h1>Hello rendered</h1>
          <p>This docker react app restart done</p>
          <h2>Bye now</h2>
          <h1>This is new update</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
