const fileExists = require('../util/fileExists');
const inquirer = require('inquirer');

module.exports = (filename) => {
  let exists = fileExists(filename);
  if (!exists) {
    inquirer.prompt([{
      type: 'confirm',
      name: 'response',
      message: 'This file does not exist yet, are you sure you would like to continue?',
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

