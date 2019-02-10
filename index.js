const minimist = require('minimist');
const add = require('./commands/add');
const list = require('./commands/list');
const remove = require('./commands/remove');
const version = require('./commands/version');
const help = require('./commands/help');
const dirExists  = require('./util/dirExists');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  // When args._[0] is undefined, cmd will be help

  let cmd = args._[0] || 'help';

  // Added to support the more traditional method of passing flags
  // Usage: note -v or note --version
  if (args.v || args.version) {
    cmd = 'version';
  }
  // Usage: note -h or note --help
  if (args.h || args.help) {
    cmd = 'help';
  }

  dirExists();

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
    case 'help':
      help();
      break;
    default:
      console.error(`"${cmd}" is not a valid command`);
      break;
  }
  console.log('More to come');
};

