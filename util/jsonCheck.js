module.exports = (filename) => {
  if (!filename) {
    return filename;
  }
  if (!filename.includes('.json')) {
    return filename + '.json';
  }
  return filename;
};

