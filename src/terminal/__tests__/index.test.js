const terminal = require("../");

describe("basic commands", () => {
  it("should create the proper file and filepath with touch", () => {
    const initial_folder_tree = {};
    const final_folder_tree = {
      src: {
        name: "src",
        contents: {
          dist: {
            name: "dist",
            contents: {
              abc: {
                name: "abc",
                contents: {
                  "index.js": {
                    name: "index.js"
                  }
                }
              }
            }
          }
        }
      }
    };

    const ex1 = terminal(initial_folder_tree).touch("./src/dist/abc/index.js");
    expect(ex1).toEqual(final_folder_tree);
  });
});
