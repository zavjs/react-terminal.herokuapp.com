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
 * @returns {String|Array} file name or list of file names
 */
const get_file_name = pathToFile => {
  const fileName = pathToFile.split("/").slice(-1)[0];
  return resolve_file_name(fileName.trim());
};

const resolve_file_name = fileName => {
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

const create_files = (source, filesList) => {
  return filesList.reduce((acc, curr) => {
    return Object.assign({}, acc, {
      [curr]: {
        name: curr
      }
    });
  }, source);
};

const describe_all_commands = table =>
  Object.keys(table)
    .filter(command => !table[command].disabled)
    .map(command => table[command] && `- ${table[command].description}`);

const describe_command = command => command.description;

const get_commands = (scope, table) =>
  scope === "all"
    ? describe_all_commands(table)
    : describe_command(table[scope]);

const define_command_listing = (table, commandName) => {
  const list = table[commandName] ? commandName : "all";
  return get_commands(list, table);
};

module.exports = {
  create_files,
  define_command_listing,
  get_file_path,
  get_file_name,
  get_contents_list,
  makeFile,
  makeTree
};
