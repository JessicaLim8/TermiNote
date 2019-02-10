const dir = `${require('os').homedir()}/.terminote/`;
const fs = require('fs');
const jsonCheck = require('./jsonCheck');

module.exports = (filename) => fs.existsSync(dir + jsonCheck(filename));

