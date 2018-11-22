const terminal_utils = require("../utils/terminal");
const commandsTable = require("../utils/commandsTable");

const terminal = tree => {
  const handleTerminalResp = response => {
    if (typeof response === "object") {
      return {
        updated: response
      };
    } else {
      return {
        output: response
      };
    }
  };

  const mkdir = filePath => {
    const parts = terminal_utils.get_contents_list(filePath);
    const updatedTree = terminal_utils.makeTree(tree, parts);
    return handleTerminalResp(updatedTree);
  };

  const touch = fileName => {
    const parts = terminal_utils.get_file_path(fileName);
    const file = terminal_utils.get_file_name(fileName);
    const updatedTree = terminal_utils.makeFile(tree, parts, file);

    return handleTerminalResp(updatedTree);
  };

  const ls = () => {
    const keys = tree && Object.keys(tree);
    const output = keys && keys.length ? keys.join(" ") : [""];

    return {
      output
    };
  };

  const help = command => ({
    output: terminal_utils.define_command_listing(commandsTable, command)
  });

  return {
    ls,
    touch,
    mkdir,
    help
  };
};

module.exports = terminal;
