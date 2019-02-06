const minimist = require('minimist');
const add = require('./commands/add');
const list = require('./commands/list');
const remove = require('./commands/remove');
const version = require('./commands/version');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0];

  // Added to support the more traditional method of passing flags
  // Usage: note -v or note --version
  if (args.v || args.version) {
    cmd = 'version';
  }

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
    case 'version':
      version();
      break;
    default:
      console.error(`"${cmd}" is not a valid command`);
      break;
  }
  console.log('More to come');
};

