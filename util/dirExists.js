const fs = require('fs');

module.exports = () => {
  const dir = `${require('os').homedir()}/.terminote/`;
  // Check if ~/.terminote directory exists. If not, create the directory
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  } catch (err) {
    console.error('An error occured when attempting to create the ~/.terminote directory.');
  }
}

