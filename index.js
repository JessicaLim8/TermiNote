const minimist = require('minimist');
const add = require('./commands/add');
const list = require('./commands/list');
const remove = require('./commands/remove');
const jsonCheck = require('./util/jsonCheck');
const version = require('./commands/version');
const help = require('./commands/help');
const dirExists  = require('./util/dirExists');
const setDefault = require('./commands/default');
const fileExists = require('./util/fileExists');
const makeFile = require('./util/makeFile');

module.exports = async () => {
  const args = minimist(process.argv.slice(2), {
    string: ['f', 'file'],
  });
  let filename = args.f || args.file;

  dirExists();

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
  if (cmd !== 'default') {
    if (filename) {
      filename = jsonCheck(filename);
      if (!fileExists(filename)) {
        await makeFile(args);
      }
    } else {
      filename = require(`${require('os').homedir()}/.terminote/default.json`);
    }
  }
  args.f = filename;

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
    case 'default':
      setDefault(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command`);
      break;
  }
};

