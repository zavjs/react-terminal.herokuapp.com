const terminal_utils = require("../utils/terminal");

const terminal = tree => {
  const touch = function(fileName) {
    const parts = terminal_utils.get_file_path(fileName);
    const file = terminal_utils.get_file_name(fileName);
    const updatedTree = terminal_utils.makeFile(tree, parts, file);
    return updatedTree;
  };

  const mkdir = function(filePath) {
    const parts = terminal_utils.get_folder_path(filePath);
    const updatedTree = terminal_utils.makeTree(tree, parts);
    return updatedTree;
  };

  return {
    touch
  };
};

module.exports = terminal;
