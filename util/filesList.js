const fs = require('fs');
const dir = `${require('os').homedir()}/.terminote/`;

module.exports = () => {
  let files = fs.readdirSync(dir).filter((file) => {
    return file !== 'default.json';
  });
  return files
};

