const makeFile = require('../util/makeFile');
const fileExists = require('../util/fileExists');
const error = require('../util/error');

module.exports = (args) => {
  if (fileExists()) {
    error("This file already exists", true);
  }
  makeFile(args)
};

