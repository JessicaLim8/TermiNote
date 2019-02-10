const inquirer = require('inquirer');
const fileExists = require('../util/fileExists');
const makeFile = require('../util/makeFile');

module.exports = (args) => {
  const filename = args.f || args.file;
  if (!fileExists(filename)) {
    inquirer.prompt([{
      type: 'confirm',
      name: 'response',
      message: `The file "${filename}" does not exist yet, are you sure you would like to continue?`,
      default: true,
    }]).then((answer) => {
      if (answer.response) {
        makeFile(args);
      } else {
        //quit
      }
    });

  }
}

