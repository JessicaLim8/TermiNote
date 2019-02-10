const dir = `${require('os').homedir()}/.terminote/`;
const color = require('colors');
const error = require('../util/error');

module.exports = (args) => {
  const file = require(dir + args.f);
  const { title, titleColour, colour, type, entries } = file;
  let checkbox;
  console.log(title[titleColour] + '\n');

  if (entries.length === 0) {
    error('There are no entries in this list', true, 0);
  }
  for (let i = 0; i < entries.length; i++) {
    if (type === 'Dot-jots') {
      checkbox = ' ●';
    } else if (entries[i].checked === true) {
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

