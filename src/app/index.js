import React, { Component } from "react";
import Terminal from "./components/Terminal";
import logo from "./logo.svg";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Terminal />
        </p>
      </div>
    );
  }
}

export default App;
