const makeFile = require("../makeFile");

describe("terminal makeFile functionality", () => {
  it("should make a file", () => {
    const initial = {
      src: {
        name: "src",
        contents: {}
      }
    };
    const final = {
      src: {
        name: "src",
        contents: {
          "index.js": {
            name: "index.js"
          }
        }
      }
    };
    expect(makeFile(initial, ["src"], "index.js")).toEqual(final);
  });

  it("should prevent files from being created under inexistent folders", () => {
    const initial = {};
    const final = "src/dist/my_file.js: no such file or directory";

    expect(makeFile(initial, ["src", "dist"], "my_file.js")).toEqual(final);
  });
});
