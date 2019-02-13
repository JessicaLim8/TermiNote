const fs = require('fs');
const dir = `${require('os').homedir()}/.terminote/`;
const inquirer = require('inquirer');
const error = require('../util/error');

module.exports = async () => {
  let files = fs.readdirSync(dir).filter((file) => {
    return file !== 'default.json';
  });
  let { file } = await inquirer.prompt([{
    type: 'list',
    name: 'file',
    message: 'Please select the file you would like to delete',
    choices: files,
  }]);
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
      console.log(`Your file ${file} has been deleted`);
    });
  }
};

