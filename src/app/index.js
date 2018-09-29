// @flow

import * as React from "react";
import Terminal from "./components/Terminal";
import logo from "./logo.svg";
import "./index.css";

type AppStateT = {
  line: string
};

class App extends React.Component<null, AppStateT> {
  state = {
    line: ""
  };

  typeCommand = (event: any) => {
    const { value } = event.target;

    this.setState({
      line: value
    });
  };

  enterCommand = (event: any) => {
    const { value } = event.target;

    if (event.keyCode === 13) {
      this.executeCommand(value);
    }
  };

  executeCommand = (command: string) => {
    console.log(`command executed: ${command}`);
    this.setState({
      line: ""
    });
  };

  render() {
    const { line } = this.state;
    const date = new Date().toUTCString();

    return (
      <div className="App">
        <Terminal
          lastLogin={date}
          typeCommand={this.typeCommand}
          onEnter={this.enterCommand}
          commandValue={line}
        />
      </div>
    );
  }
}

export default App;
