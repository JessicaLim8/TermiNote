module.exports = (filename) => {
  // Adds a .json if the file deosnt have a .json
  if (filename && !filename.includes('.json')) {
    return filename + '.json';
  }
  return filename;
};

