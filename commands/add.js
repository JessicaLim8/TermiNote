const fs = require('fs');

module.exports = (args) => {
  const dir = `${require('os').homedir()}/.terminote`;
  const NOTES_FILE = 'notes.json';
  const TO_DOS_FILE = 'to-dos.json';

  // Check if ~/.terminote directory exists. If not, create the directory
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  } catch (err) {
    console.error('An error occured when attempting to create the ~/.terminote directory.');
  }
  // To add to the notes file, use the path `dir + NOTES_FILE`
  // To add to the to-dos file, use the path `dir + TO_DOS_FILE`
};

