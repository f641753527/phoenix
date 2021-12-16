var { program } = require('commander');
var { createAction, addComponentAction } = require('./actions')

const createCommands = () => {
  program
    .command('create')
    .argument('<project>', 'project name')
    .description('cleate a repository into local')
    .action((project) => {
      createAction(project, program.opts().template)
    })

  program
    .command('addComp')
    .argument('<compName>', 'project name')
    .description('add vue component')
    .action((compName) => {
      addComponentAction(compName, program.opts().dest)
    })
}

module.exports = createCommands