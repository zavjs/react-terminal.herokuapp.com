const terminal = require("../");

describe("touch command", () => {
  it("should not allow files to be created under unexisting folders", () => {
    const initial_folder_tree = {};
    const final = "abc/index.js: no such file or directory";

    const unexisting = terminal(initial_folder_tree).touch("./abc/index.js");
    expect(unexisting).toEqual(final);
  });

  it("should create the proper file and file path with touch", () => {
    const initial_folder_tree = {
      src: {
        name: "src",
        contents: {}
      }
    };
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

  it("should be able to create multiple sibling files at once", () => {
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
          },
          "index.html": {
            name: "index.html"
          }
        }
      }
    };

    const updated = terminal(initial).touch("./src/{index.js,index.html}");
    expect(updated).toEqual(final);
  });

  it("should be able to create multiple sibling files while ignorings spaces", () => {
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
          },
          "index.html": {
            name: "index.html"
          }
        }
      }
    };

    const updated = terminal(initial).touch("./src/{ index.js , index.html }");
    expect(updated).toEqual(final);
  });

  it("should prevent creating files with path white spaces", () => {
    const initial = {
      src: {
        name: "src",
        contents: {}
      }
    };

    const ex1 = terminal(initial).touch("./src /index.js");
    const msg1 = "src /index.js: no such file or directory";

    expect(ex1).toEqual(msg1);
  });

  //** new tests */

  it("should ignore peripheral white spaces on file names", () => {
    const initial = {
      src: {
        name: "src",
        contents: {}
      }
    };
    const ex1 = terminal(initial).touch("./src/ index.js");
    const res1 = {
      src: {
        name: "src",
        contents: {
          "index.js": {
            name: "index.js"
          }
        }
      }
    };

    expect(ex1).toEqual(res1);

    const ex2 = terminal(initial).touch("./src/ {index.js}");

    expect(ex2).toEqual(res1);
  });

  it("should be able to create a file in the root level", () => {
    const initial = {};
    const res1 = {
      ab: {
        name: "ab"
      }
    };

    const ex1 = terminal(initial).touch("ab");
    expect(ex1).toEqual(res1);

    const ex2 = terminal(initial).touch("{ab}");
    expect(ex2).toEqual(res1);
  });

  it("should be able to create more than one file in the root level", () => {
    const initial = {};
    const res1 = {
      "ab.html": {
        name: "ab.html"
      },
      "bc.html": {
        name: "bc.html"
      }
    };

    const ex1 = terminal(initial).touch("ab.html bc.html");
    expect(ex1).toEqual(res1);
  });

  // it("should create multipe files at once in different folders", () => {
  //   const initial = {
  //     src: {
  //       name: "src",
  //       contents: {}
  //     }
  //   };

  //   const final = {
  //     src: {
  //       name: "src",
  //       contents: {
  //         "ab.js": {
  //           name: "ab.js"
  //         }
  //       }
  //     },
  //     "ab.html": {
  //       name: "ab.html"
  //     }
  //   };

  //   expect(terminal(initial).touch("ab.html ./src/ab.js")).toEqual(final);
  // });

  /**
   * what to do when
   * ./src/ {index.js}
   * ./src / index.js
   * ./src/{ index.js, index.html }
   */
});
