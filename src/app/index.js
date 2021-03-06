import React from "react";
import Terminal from "./components/Terminal";
import Greeting from "./Greeting";
import terminalMod from "../terminal";
import "./index.css";

class App extends React.Component {
  state = {
    tree: {},
    line: "",
    log: [],
    lastLogin: ""
  };

  typeCommand = event => {
    const { value } = event.target;

    this.setState({
      line: value
    });
  };

  componentWillMount = () => {
    this.setState({
      lastLogin: new Date().toUTCString()
    });
  };

  enterCommand = event => {
    const { value } = event.target;
    const [command, argument] = value.split(" ");

    if (event.keyCode === 13) {
      this.executeCommand(command, argument);
    }
  };

  isSpecialCommand = command => {
    const commands = {
      clear: { execute: this.cleanLog }
    };
    const toLower = command.toLowerCase();
    const target = commands[toLower] && commands[toLower].execute;

    return target ? target : null;
  };

  executeCommand = (command, argument) => {
    const { tree } = this.state;
    const operation = terminalMod(tree)[command];
    const specialCommand = this.isSpecialCommand(command);

    if (operation) {
      const ret = operation(argument);

      if (ret.updated) {
        this.setState({
          tree: ret.updated
        });
      }

      if (ret.output) {
        this.setState(({ log }) => ({
          log: log.concat(ret.output)
        }));
      }
    } else if (specialCommand) {
      specialCommand();
    } else {
      this.setState(({ log }) => ({
        log: log.concat([`Unknown command: ${command}`])
      }));
    }

    this.setState({
      line: ""
    });
  };

  cleanLog = () => {
    this.setState({
      log: []
    });
  };

  render() {
    const { line, lastLogin } = this.state;

    return (
      <div className="App">
        <Terminal
          log={this.state.log}
          lastLogin={lastLogin}
          typeCommand={this.typeCommand}
          onEnter={this.enterCommand}
          commandValue={line}
        />
        <Greeting />
      </div>
    );
  }
}

export default App;
