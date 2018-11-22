const terminal = require("../");

describe("mkdir command", () => {
  it("should create folder by passing a folder name", () => {
    const initial = {};
    const input = "./dist";
    const expected = {
      dist: {
        name: "dist",
        contents: {}
      }
    };

    expect(terminal(initial).mkdir(input).updated).toEqual(expected);
  });
});
