const terminal_utils = require("../utils/terminal");

const terminal = (tree: Object) => {
  const touch = function(fileName: string) {
    const parts = terminal_utils.get_file_path(fileName);
    const file: string = terminal_utils.get_file_name(fileName);
    const updatedTree = terminal_utils.makeFile(tree, parts, file);
    return {
      updated: updatedTree
    };
  };

  const mkdir = function(filePath: string) {
    const parts = terminal_utils.get_contents_list(filePath);
    const updatedTree = terminal_utils.makeTree(tree, parts);
    return {
      updated: updatedTree
    };
  };

  const ls = function() {
    const keys = tree && Object.keys(tree);
    const output = keys && keys.length ? keys.join(" ") : [""];

    return {
      output
    };
  };

  return {
    ls,
    touch,
    mkdir
  };
};

module.exports = terminal;
