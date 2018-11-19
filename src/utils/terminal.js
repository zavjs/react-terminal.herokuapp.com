// @flow

const makeFile = require("./makeFile");
const makeTree = require("./makeTree");

/**
 * Resolves similar folder structures consistently
 * @param {Array} list of folder names
 * @returns {Array} list of formatted folder names
 */
const path_resolve = (parts: Array<string>) => {
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
const get_contents_list = (folderPath: string) => {
  const parts = folderPath.split("/");
  return path_resolve(parts);
};

/**
 * Returns the folders list from a path string, not including file
 * @param {String} pathToFile: path to file
 * @returns {Array} list of folder names
 */
const get_file_path = (pathToFile: string) => {
  const parts = get_contents_list(pathToFile);
  return parts.slice(0, parts.length - 1);
};

/**
 * Returns the file name from a path string
 * @param {String} pathToFile: path to file
 * @returns {String|Array} file name or list of file names
 */
const get_file_name = (pathToFile: string) => {
  const fileName = pathToFile.split("/").slice(-1)[0];
  return resolveFileName(fileName.trim());
};

const resolveFileName = fileName => {
  const multipleFileSyntax = fileName.startsWith("{") && fileName.endsWith("}");
  const strippedBraces = fileName.slice(1, -1);
  const files = strippedBraces.split(",").map(f => f.trim());
  const multipleFiles = files.length;

  if (multipleFileSyntax) {
    if (multipleFiles) {
      return files;
    } else {
      return strippedBraces;
    }
  }

  return fileName;
};

const create_files = (source: Object, filesList: Array<string>) => {
  return filesList.reduce((acc, curr) => {
    return Object.assign({}, acc, {
      [curr]: {
        name: curr
      }
    });
  }, source);
};

module.exports = {
  get_file_path,
  get_file_name,
  get_contents_list,
  create_files,
  makeFile,
  makeTree
};
