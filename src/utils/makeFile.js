const makeFile = function(tree, parts, file) {
  const obj = Object.assign({}, tree) || {};
  const fullPath = parts.concat(file).join("/");

  if (parts[0]) {
    if (!tree[parts[0]]) {
      return fullPath + ": no such file or directory";
    } else if (!tree[parts[1]]) {
      obj[parts[0]].contents = Object.assign(obj[parts[0]].contents, {
        [file]: {
          name: file
        }
      });
    }
  }

  if (parts[1]) {
    if (!tree[parts[1]]) {
      return fullPath + ": no such file or directory";
    } else if (!tree[parts[2]]) {
      obj[parts[0]].contents[parts[1]].contents = Object.assign(
        obj[parts[0]].contents[parts[1]].contents,
        {
          [file]: {
            name: file
          }
        }
      );
    }
  }

  if (parts[2]) {
    if (!tree[parts[2]]) {
      return fullPath + ": no such file or directory";
    } else if (!tree[parts[3]]) {
      obj[parts[0]].contents[parts[1]].contents[
        parts[2]
      ].contents = Object.assign(
        obj[parts[0]].contents[parts[1]].contents[parts[2]].contents,
        {
          [file]: {
            name: file
          }
        }
      );
    }
  }

  if (parts[3]) {
    if (!tree[parts[3]]) {
      return fullPath + ": no such file or directory";
    } else if (!tree[parts[4]]) {
      obj[parts[0]].contents[parts[1]].contents[parts[2]].contents[
        parts[3]
      ].contents = Object.assign(
        obj[parts[0]].contents[parts[1]].contents[parts[2]].contents[parts[3]]
          .contents,
        {
          [file]: {
            name: file
          }
        }
      );
    }
  }

  if (parts[4]) {
    return parts.join("/") + ": max depth 4 levels only";
  }

  return obj;
};

module.exports = makeFile;
