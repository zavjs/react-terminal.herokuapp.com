const terminal = require("../");

describe("ls command", () => {
  it("should list all elements in the current folder level", () => {
    const initial = {
      dist: {
        name: "dist",
        contents: {}
      },
      "index.js": {
        name: "index.js"
      }
    };

    const final = { output: "dist index.js" };
    expect(terminal(initial).ls()).toEqual(final);
  });
});
