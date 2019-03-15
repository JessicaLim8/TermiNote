const jsonCheck = require('./jsonCheck');
const fileExists = require('./fileExists');
const makeFile = require('./makeFile');

module.exports = (args) => {
  if (args.f) {
    args.f = jsonCheck(args.f);
      if (!fileExists(args.f)) {
        makeFile(args);
      }
  } else if (args.f === '') {
  } else {
    args.f = require(`${require('os').homedir()}/.terminote/default.json`);
  }
};
