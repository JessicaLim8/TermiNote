const fs = require('fs');
const dir = `${require('os').homedir()}/.terminote/`;

module.exports = (args) => {
  const data = require(dir + args.f);
  const { entries } = data;
  const entry = {
    content: args._[1],
    checked: args.c || false,
    colour: '',
  };

  entries.push(entry);

  // To add to the to-dos file, use the path `dir + TODOS_FILE`
  fs.writeFileSync(dir + args.f, JSON.stringify(data), (err) => err && console.error(err));
};

