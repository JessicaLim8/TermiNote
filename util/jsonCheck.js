module.exports = (filename) => {
  if (!filename) {
    return;
  }
  if (!filename.includes('.json')) {
    return filename + '.json';
  }
  return filename;
};

