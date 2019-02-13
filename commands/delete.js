const fs = require('fs');
const dir = `${require('os').homedir()}/.terminote/`;

module.exports = (args) => {
  let files = fs.readdirSync(dir);
  console.log(files);
}

