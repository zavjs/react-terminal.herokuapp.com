### User Stories, Functionality documentation

- [x] Get available commands with the `help` command. Information about a specific command can be retrieved with `help <command name>`

- [x] When attempting to input an inexisting command, the user should be let known of such, with a "Unknown command: <command>" message

- [x] The user should be able to create files, one or multiple at once with the following syntax: `touch file.ext` or `touch {fileOne.ext,fileTwo.ext,fileThree.ext}`

- [x] The user should be able to create folders, one or multiple at once with the following syntax: `mkdir <folder name>` or `mkdir {folderOne,folderTwo,folderThree}`

- [x] The user should be able to list his current folder structure, and all children elements, folders and files within itself with the following syntax: `ls`

- [ ] The user should be able to delete files. One or multiple at once. Single files: `rm file.ext`, multiple files `rm {fileOne.ext,fileTwo.ext,fileThree.ext}`

- [ ] The user should be able to opt for a checklist of basic demo functionality. The checklist will display each basic functionality and instruct the user to execute such command. When the command is executed, the item will automatically be checked.

- [ ] The user should be able to delete folders. One or multiple at once with the following syntax. Single folders `rm <folder name>`; multiple folders `rm {folderOne,folderTwo,folderTree}`

- [ ] The user should be able to enter a folder by using absolute path (`cd path/to/folder`) or relative (`cd ./folder`). The user should be able to go back to any parent folders by using the absolute path (`cd path/to/folder`), or relative (`cd ../..`)

- [ ] The user should be able to configure a new terminal user name by using `config user.name <new user name>` command.

- [ ] The user should see near the terminal a centralized history of all available functionality.

- [ ] The user should easily visualize highlighted text (i.e: commands). The text need to be configurable with interpolation characters.
