const inquirer = require('inquirer');
const jsonCheck = require('./jsonCheck');
const fileExists = require('./fileExists');
const makeFile = require('./makeFile');
const filesList = require('./filesList');

module.exports = async (args) => {
  if (args.d) {
    args.f = require(`${require('os').homedir()}/.terminote/default.json`);
  } else if (args.f) {
    args.f = jsonCheck(args.f);
      if (!fileExists(args.f)) {
        makeFile(args);
      }
  } else {
      let files = filesList();
      let { selection } = await inquirer.prompt([{
        type: 'list',
        name: 'selection',
        message: `Please select the file you would like to ${args.prompt}`,
        choices: files,
      }]);
      args.f  = selection;
  }
};
