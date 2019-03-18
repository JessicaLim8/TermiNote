const color = require('colors');
const error = require('../util/error');
const chooseFile = require('../util/chooseFile');

module.exports = async (args) => {
  args.prompt = 'list';
  await chooseFile(args);
  const { title, titleColour, colour, type, entries } = require(`${require('os').homedir()}/.terminote/` + args.f);
  let checkbox;
  if (entries.length === 0) {
    error('There are no entries in this list', true, 0);
  }
  console.log(title[titleColour]);
  for (let i = 0; i < entries.length; i++) {
    if (type === 'Dot-jots') {
      checkbox = ' ●';
    } else if (entries[i].checked) {
      checkbox = '✅';
    } else {
      checkbox = '❌';
    }
    if (!entries[i].content) {
      continue;
    }
    console.log(checkbox + '   ' + entries[i].content[colour]);
  }
};

