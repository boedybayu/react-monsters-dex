import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello There"
    };
  }

  render() {
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
            Learn React OK
          </a>

          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: "Hello Bay.."})}>Change Text</button>
          <p>{this.state.string}</p>

        </header>
      </div>
    );
  }
}

export default App;
