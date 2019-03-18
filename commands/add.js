const fs = require('fs');
const dir = `${require('os').homedir()}/.terminote/`;
const chooseFile = require('../util/chooseFile');
const error = require('../util/error');

module.exports = async (args) => {
  args.prompt = 'add to';
  await chooseFile(args);
  const data = require(dir + args.f);
  const { entries } = data;
  if (!args._[1]) {
    error("Error! There was no content to add");
  };
  const entry = {
    content: args._[1],
    checked: args.c || false,
    colour: '',
  };

  entries.push(entry);

  // To add to the to-dos file, use the path `dir + TODOS_FILE`
  fs.writeFileSync(dir + args.f, JSON.stringify(data), (err) => err && console.error(err));
};

