const fs = require('fs');
const NOTES_FILE = 'notes.json';
const TODOS_FILE = 'todos.json';
const dir = `${require('os').homedir()}/.terminote/`;
const data = require(dir + TODOS_FILE);

module.exports = (args) => {
  const { entries, type } = data;
  const entry = {
    content: args._[1],
    checked: args.c || false,
    colour: '',
  };

  entries.push(entry);

  // To add to the to-dos file, use the path `dir + TODOS_FILE`
  fs.writeFile(dir + TODOS_FILE, JSON.stringify(data), (err) => err && console.error(err));
};

