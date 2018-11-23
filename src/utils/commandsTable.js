module.exports = {
  mkdir: {
    name: "mkdir",
    description: "mkdir: create directories using `mkdir <folder name>`"
  },
  touch: {
    name: "touch",
    description:
      "touch: create files using `touch fileName, or touch {file1.ext,file2.ext}` for multiple"
  },
  ls: {
    name: "ls",
    description: "ls: list items within the target folder"
  },
  clear: {
    name: "clear",
    description: "clear: clear and reset prompt to get rid of old messages"
  },
  rm: {
    name: "rm",
    description:
      "rm: delete files `rm <file name>`, or `rm <fileOne,fileTwo,fileTree>`",
    disabled: true
  }
};
