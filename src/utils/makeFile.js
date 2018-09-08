const create_files = (source, filesList) => {
  return filesList.reduce((acc, curr) => {
    return Object.assign({}, acc, {
      [curr]: {
        name: curr
      }
    });
  }, source);
};

const makeFile = function(tree, parts, file) {
  const obj = Object.assign({}, tree) || {};
  const fullPath = parts.concat(file).join("/");
  const list = Array.isArray(file) ? file : [].concat(file);

  if (parts[0]) {
    if (!tree[parts[0]]) {
      return fullPath + ": no such file or directory";
    } else if (!tree[parts[1]]) {
      obj[parts[0]].contents = create_files(obj[parts[0]].contents, list);
    }
  }

  if (parts[1]) {
    if (!tree[parts[1]]) {
      return fullPath + ": no such file or directory";
    } else if (!tree[parts[2]]) {
      obj[parts[0]].contents[parts[1]].contents = create_files(
        obj[parts[0]].contents[parts[1]].contents,
        list
      );
    }
  }

  if (parts[2]) {
    if (!tree[parts[2]]) {
      return fullPath + ": no such file or directory";
    } else if (!tree[parts[3]]) {
      obj[parts[0]].contents[parts[1]].contents[
        parts[2]
      ].contents = create_files(
        obj[parts[0]].contents[parts[1]].contents[parts[2]].contents,
        list
      );
    }
  }

  if (parts[3]) {
    if (!tree[parts[3]]) {
      return fullPath + ": no such file or directory";
    } else if (!tree[parts[4]]) {
      obj[parts[0]].contents[parts[1]].contents[parts[2]].contents[
        parts[3]
      ].contents = create_files(
        obj[parts[0]].contents[parts[1]].contents[parts[2]].contents[parts[3]],
        list
      );
    }
  }

  if (parts[4]) {
    return parts.join("/") + ": max depth 4 levels only";
  }

  return obj;
};

module.exports = makeFile;
