var { program, Option } = require('commander')

const optionHelper = () => {
  program
    .option('-d --dest <dest>', 'destination file localtion')
    .addOption(new Option('-t --template <template>', 'project template name').choices(['vue', 'react']))
}

module.exports = {
  optionHelper,
}
