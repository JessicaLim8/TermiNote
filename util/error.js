module.exports = (message, exit, code = 1) => {
  console.error(message);
  exit && process.exit(code);
};

