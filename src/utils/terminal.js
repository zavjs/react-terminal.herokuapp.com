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

/**
 * Creates object tree from path string
 * @param {Array} parts: list of folder names
 * @param {String} file: file name
 */
const makeTree = function(tree, parts, file) {
  const obj = Object.assign({}, tree) || {};

  if (parts[0]) {
    if (!tree[parts[0]]) {
      obj[parts[0]] = {
        name: parts[0],
        contents: {}
      };
    }
    if (!parts[1] && file) {
      const contents = Object.assign(obj[parts[0]].contents, {
        [file]: {
          name: file
        }
      });

      obj[parts[0]].contents = contents;
    }
  }

  if (parts[1]) {
    if (!tree[parts[0]]) {
      return parts.join("/") + ": no such file or directory";
    } else {
      obj[parts[0]].contents = Object.assign(obj[parts[0]].contents, {
        [parts[1]]: {
          name: parts[1],
          contents:
            file && !parts[2]
              ? {
                  [file]: {
                    name: file
                  }
                }
              : {}
        }
      });
    }
  }

  if (parts[2]) {
    if (!tree[parts[0]] && !tree[parts[0]].contents[parts[1]]) {
      return parts.join("/") + ": no such file or directory";
    } else {
      obj[parts[0]].contents[parts[1]].contents = Object.assign(
        obj.parts[0].contents[parts[1]].contents,
        {
          [parts[2]]: {
            name: parts[2],
            contents:
              file && !parts[3]
                ? {
                    [file]: {
                      name: file
                    }
                  }
                : {}
          }
        }
      );
    }
  }

  if (parts[3]) {
    return parts.join("/") + ": no such file or directory";
  }

  return obj;
};

module.exports = {
  get_file_path,
  get_file_name,
  get_contents_list,
  makeTree
};
