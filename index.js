const minimist = require('minimist');
const add = require('./commands/add');
const list = require('./commands/list');
const remove = require('./commands/remove');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const cmd = args._[0];
  switch (cmd) {
    case 'add':
      add(args);
      break;
    case 'list':
      list(args);
      break;
    case 'remove':
      remove(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command`);
      break;
  }
  console.log('More to come');
};

