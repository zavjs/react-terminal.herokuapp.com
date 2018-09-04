const terminal = require("../");

describe("basic commands", () => {
  it("should create the proper file and file path with touch", () => {
    const initial_folder_tree = {};
    const final_folder_tree = {
      src: {
        name: "src",
        contents: {
          "index.js": {
            name: "index.js"
          }
        }
      }
    };

    const dotted = terminal(initial_folder_tree).touch("./src/index.js");
    expect(dotted).toEqual(final_folder_tree);

    const first_slash = terminal(initial_folder_tree).touch("/src/index.js");
    expect(first_slash).toEqual(final_folder_tree);

    const regular = terminal(initial_folder_tree).touch("src/index.js");
    expect(regular).toEqual(final_folder_tree);
  });

  it("should not overwrite already existing folder contents", () => {
    const initial_folder_tree = {
      dist: {
        name: "dist",
        contents: {
          "index.js": {
            name: "index.js"
          }
        }
      }
    };
    const final_folder_tree = {
      dist: {
        name: "dist",
        contents: {
          "index.js": {
            name: "index.js"
          },
          src: {
            name: "src"
          }
        }
      }
    };

    const updated = terminal(initial_folder_tree).touch("./dist/src");

    expect(updated).toEqual(final_folder_tree);
    expect(updated).not.toEqual({
      dist: {
        name: "dist",
        contents: {
          src: {
            name: "src"
          }
        }
      }
    });
  });
});
