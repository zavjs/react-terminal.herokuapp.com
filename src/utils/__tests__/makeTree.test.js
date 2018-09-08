const makeTree = require("../makeTree");

describe("terminal makeTree functionality", () => {
  it("should not allow to create multiple folder levels at once", () => {
    const initial = {};
    const input = ["dist", "src"];
    const final = "dist/src: no such file or directory";

    expect(makeTree(initial, input)).toEqual(final);
  });

  it("should allow to create one folder, and then create one file under that", () => {
    const initial = {};
    const input = ["dist"];
    const final = {
      dist: {
        name: "dist",
        contents: {}
      }
    };

    expect(makeTree(initial, input)).toEqual(final);
  });
});
