const fs = require('fs');

module.exports = (args) => {
  const dir = `${require('os').homedir()}/.terminote/`;
  const NOTES_FILE = 'notes.json';
  const TODOS_FILE = 'to-dos.json';

  // Check if ~/.terminote directory exists. If not, create the directory
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  } catch (err) {
    console.error('An error occured when attempting to create the ~/.terminote directory.');
  }
  const CONTENT = 'hello world';
  // To add to the notes file, use the path `dir + NOTES_FILE`
  // To add to the to-dos file, use the path `dir + TODOS_FILE`
  fs.writeFile(dir + NOTES_FILE, CONTENT, (err) => err && console.error(err));
};

