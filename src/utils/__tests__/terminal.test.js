const terminal_utils = require("../terminal");

describe("terminal utils", () => {
  it("should return the file path from a path string", () => {
    const initial = "./dist/src/styles/index.js";
    const final = ["dist", "src", "styles"];

    expect(terminal_utils.get_file_path(initial)).toEqual(final);
  });

  it("it should return the file path from a path string that begins with a dot", () => {
    const initial = "/dist/src/styles/index.js";
    const final = ["dist", "src", "styles"];

    expect(terminal_utils.get_file_path(initial)).toEqual(final);
  });

  it("it should return the file path from a path string that begins with a name", () => {
    const initial = "dist/src/styles/index.js";
    const final = ["dist", "src", "styles"];

    expect(terminal_utils.get_file_path(initial)).toEqual(final);
  });

  it("should return the file name from a path string", () => {
    const initial = "./dist/src/styles/index.js";
    const final = "index.js";

    expect(terminal_utils.get_file_name(initial)).toEqual(final);
  });
});

describe("terminal makeTree functionality", () => {
  it("should not allow to create multiple folder levels at once", () => {
    const initial = {};
    const input = ["dist", "src"];
    const final = "dist/src: no such file or directory";

    expect(terminal_utils.makeTree(initial, input)).toEqual(final);
  });

  it("should allow to create one folder at a time", () => {
    const initial = {};
    const input = ["dist"];
    const final = {
      dist: {
        name: "dist",
        contents: {}
      }
    };

    expect(terminal_utils.makeTree(initial, input)).toEqual(final);
  });
});
