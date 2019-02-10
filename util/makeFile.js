const dir = `${require('os').homedir()}/.terminote/`;
const inquirer = require('inquirer');
const fs = require('fs');
const jsonCheck = require('./jsonCheck');

module.exports = (args) => {
  return new Promise((resolve) => {
    let filename;
    const questions = [{
      type: 'list',
      message: 'What kind of notes would you like this file to contain?',
      name: 'type',
      choices: ['Checkboxes', 'Dot-jots'],
    },
    {
      type: 'list',
      message: 'What is the default colour of this list?',
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
    inquirer.prompt(questions).then((settings) => {
      if (!filename) {
        filename = settings.name;
        delete settings.name;
      }
      settings.entries = [];
      fs.writeFileSync((dir + jsonCheck(filename)), JSON.stringify(settings), (err) => err && console.error(err));
      resolve();
    });
  });
};

