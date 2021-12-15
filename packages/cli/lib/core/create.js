var { program } = require('commander');
var { createAction } = require('./actions')

const createCommands = () => {
  program
    .command('create <project>')
    .description('cleate a repository into local')
    .action(createAction)
}

module.exports = createCommands