export default {
  mkdir: {
    name: "mkdir",
    description: "mkdir: create directories using `mkdir <folder name>`"
  },
  touch: {
    name: "touch",
    description:
      "touch: create files using `touch <file name>, or touch <file1.ext,file2.ext>` for multiple"
  },
  ls: {
    name: "ls",
    description: "ls: list items within the target folder"
  },
  rm: {
    name: "rm",
    description:
      "rm: delete files `rm <file name>`, or `rm <fileOne,fileTwo,fileTree>`",
    disabled: true
  }
};
