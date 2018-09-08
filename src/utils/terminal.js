const makeFile = require("./makeFile");
const makeTree = require("./makeTree");

/**
 * Resolves similar folder structures consistently
 * @param {Array} list of folder names
 * @returns {Array} list of formatted folder names
 */
const path_resolve = parts => {
  if (parts[0] === "." || parts[0] === "") {
    return parts.slice(1);
  }

  if (parts[0].charAt(0) === ".") {
    return parts.map((part, i) => {
      return i === 0 ? part.slice(1) : part;
    });
  }

  return parts;
};

/**
 * Returns the contents list from a path string, including file
 * @param {String} folderPath
 * @returns {Array}
 */
const get_contents_list = folderPath => {
  const parts = folderPath.split("/");
  return path_resolve(parts);
};

/**
 * Returns the folders list from a path string, not including file
 * @param {String} pathToFile: path to file
 * @returns {Array} list of folder names
 */
const get_file_path = pathToFile => {
  const parts = get_contents_list(pathToFile);
  return parts.slice(0, parts.length - 1);
};

/**
 * Returns the file name from a path string
 * @param {String} pathToFile: path to file
 * @returns {Array} list of folder parts
 */
const get_file_name = pathToFile => {
  const parts = pathToFile.split("/").slice(-1)[0];
  return path_resolve(parts);
};

module.exports = {
  get_file_path,
  get_file_name,
  get_contents_list,
  makeFile,
  makeTree
};
