const fs = require('fs');
const dir = `${require('os').homedir()}/.terminote/`;
const inquirer = require('inquirer');
const error = require('../util/error');
const jsonCheck = require('../util/jsonCheck');
const fileExists = require('../util/fileExists');

module.exports = async (args) => {
  let file = args.f || args.file;
  //if no filename was given
  if (!file) {
    let files = fs.readdirSync(dir).filter((file) => {
      return file !== 'default.json';
    });
    let { selection } = await inquirer.prompt([{
      type: 'list',
      name: 'selection',
      message: 'Please select the file you would like to delete',
      choices: files,
    }]);
    file = selection;
  }
  //checks to see if the file is valid
  if (!fileExists(file)) {
    error('Your file does not exist', true);
  }
  file = jsonCheck(file);
  // confirms user wants to delete file
  let { confirm } = await inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: `Are you sure you want to delete ${file}? All entries will be deleted and they cannot be recovered`,
    default: false,
  }]);
  if (!confirm) {
    error('Your file was not deleted', true, 0);
  } else {
    fs.unlink(dir + file, err => {
      if (err) {
        return err;
      }
      console.log(`Your file "${file}" has been deleted`);
    });
  }
};

