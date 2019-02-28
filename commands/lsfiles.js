const filesList = require('../util/filesList');

module.exports = () => {
  let files = filesList();
  console.log('Here are your files:');
  for (let i = 0; i < files.length; i++){
    console.log(files[i]);
  }
};

