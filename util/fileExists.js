const dir = `${require('os').homedir()}/.terminote/`;
const fs = require('fs');

module.exports = (filename) => {
  if (!filename.includes('.json')) {
    filename += '.json';
  }
  return fs.existsSync(dir + filename);
};


