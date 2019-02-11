const dir = `${require('os').homedir()}/.terminote/`;
const setDefault = require('../commands/default');
const fileExists = require('./fileExists');
const makeFile = require('./makeFile');
const error = require('./error');

module.exports = (args) => {
  return new Promise(async (resolve) => {
    if (!fileExists('default.json') || !fileExists(require(dir + 'default.json'))) {
      error('You have no default file. Please make one!', false, 0);
      args.f = await makeFile(args);
      setDefault(args);
    }
    resolve();
  });
};

