const fileExists = require('../util/fileExists');
const inquirer = require('inquirer');

module.exports = (args) => {
  const filename = args._[1];
  if (!fileExists(filename)) {
    inquirer.prompt([{
      type: 'confirm',
      name: 'response',
      message: `The file "${filename}" does not exist yet, are you sure you would like to continue?`,
      default: 'Yes',
    }]).then((answer) => {
      if (answer.response) {
        //make new file
      } else {
        //quit
      }
    });

  }
}

