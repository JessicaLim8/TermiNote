const dir = `${require('os').homedir()}/.terminote/`;
const fs = require('fs');

module.exports = (filename) => fs.existsSync(dir + filename);

