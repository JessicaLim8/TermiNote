module.exports = (filename) => {
  // Returns if filename is invalid
  if (!filename) {
    return;
  }
  // Adds a .json if the file deosnt have a .json
  if (!filename.includes('.json')) {
    return filename + '.json';
  }
  return filename;
};

