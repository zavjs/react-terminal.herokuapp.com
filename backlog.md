### User Stories, Functionality documentation

- [x] When attempting to input an inexisting command, the user should be let known of such, with a "Unknown command: <command>" message

- [x] The user should be able to create files, one or multiple at once with the following syntax: `touch file.ext` or `touch {fileOne.ext,fileTwo.ext,fileThree.ext}`

- [x] The user should be able to create folders, one or multiple at once with the following syntax: `mkdir <folder name>` or `mkdir {folderOne,folderTwo,folderThree}`

- [x] The user should be able to list his current folder structure, and all children elements, folders and files within itself with the following syntax: `ls`

- [ ] The user should see a list of all available commands by typing `help`

- [ ] The user should be able to delete files. One or multiple at once. Single files: `rm file.ext`, multiple files `rm {fileOne.ext,fileTwo.ext,fileThree.ext}`

- [ ] The user should be able to opt in for a checklist of basic functionality. The checklist will list each basic functionality and instruct the user to

- [ ] The user should be able to delete folders. One or multiple at once with the following syntax. Single folders `rm <folder name>`; multiple folders `rm {folderOne,folderTwo,folderTree}`

- [ ] The user should be able to enter a folder by using absolute path (`cd path/to/folder`) or relative (`cd ./folder`). The user should be able to go back to any parent folders by using the absolute path (`cd path/to/folder`), or relative (`cd ../..`)

- [ ] The user should be able to config a new terminal user name by using `config user.name <new user name>` command.
