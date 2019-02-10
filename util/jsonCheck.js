module.exports = (filename) => {
  if (!filename.includes('.json')) {
    return filename + '.json';
  }
  return filename;
};

