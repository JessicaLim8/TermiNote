const fs = require('fs');

module.exports = (args) => {
  const dir = `${require('os').homedir()}/.terminote/`;
  const NOTES_FILE = 'notes.json';
  const TODOS_FILE = 'todos.json';

  // Check if ~/.terminote directory exists. If not, create the directory
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  } catch (err) {
    console.error('An error occured when attempting to create the ~/.terminote directory.');
  }

  const data = require(dir + TODOS_FILE);
  const { entries, type } = data;
  const entry = {
    content: args._[1],
    checked: args.c || false,
    colour: "",
  };

  entries.push(entry);


  // To add to the notes file, use the path `dir + NOTES_FILE`
  // To add to the to-dos file, use the path `dir + TODOS_FILE`
  fs.writeFile(dir + TODOS_FILE, JSON.stringify(data), (err) => err && console.error(err));
};

