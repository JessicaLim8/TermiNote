module.exports = (filepath) => {
  try {
    return require(filepath);
  } catch (e) {
    return false;
  }
};

