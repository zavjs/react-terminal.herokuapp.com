/**
 * Creates object tree from path string
 * @param {Array} parts: list of folder names
 * @param {String} file: file name
 */
const makeTree = function(tree, parts, file) {
  const obj = Object.assign({}, tree) || {};

  if (parts[0] && !tree[parts[0]]) {
    obj[parts[0]] = {
      name: parts[0],
      contents: {}
    };
  }

  if (parts[1]) {
    if (!tree[parts[0]]) {
      return parts.join("/") + ": no such file or directory";
    } else {
      obj[parts[0]].contents = Object.assign(obj[parts[0]].contents, {
        [parts[1]]: {
          name: parts[1],
          contents: {}
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
            contents: {}
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

module.exports = makeTree;
