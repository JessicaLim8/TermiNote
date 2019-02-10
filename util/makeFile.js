const dir = `${require('os').homedir()}/.terminote/`;
const inquirer = require('inquirer');
const fs = require('fs');

module.exports = (args) => {
  let filename;
  const questions = [{
    type: 'list',
    message: 'What kind of notes would you like this file to contain?',
    name: 'type',
    choices: ['Checkboxes', 'Dot-jots'],
  },
  {
    type: 'list',
    message: 'What is the default colour of this list',
    name: 'colour',
    choices: ['white', 'black', 'cyan', 'green', 'blue'],
  }];
  if (!args.f && !args.file) {
    questions.unshift({
      type: 'input',
      message: 'What would you like to call your new file?',
      name: 'name',
    });
  } else {
    filename = args.f || args.file;
  }
  console.log(filename);
  inquirer.prompt(questions).then((settings) => {
    if (!filename) {
      filename = settings.name;
      delete settings.name;
    }
    if (!filename.includes('.json')) {
      filename += '.json';
    }
    settings.entries = [];
    fs.writeFile((dir + filename), JSON.stringify(settings), (err) => err && console.error(err));
  }).catch((err) => console.error(err));
};

