var ejs = require('ejs')
var path = require('path')
var fs = require('fs')
var { execCommand } = require('../utils/terminal')

const compile = (template, data) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(template, data, (err, str) => {
      if (err) {
        console.error(err)
        return reject(err)
      }
      resolve(str)
    })
  })
}

function makeDir (filepath) {
  if (fs.existsSync(filepath)) return true
  if (makeDir(path.dirname(filepath))) {
    fs.mkdirSync(filepath)
    return true
  }
}

const createProject =  async function(url, project, startCommand) {
  // 1. download repository
  await download(`direct:${url}`, project, { clone: true })
  // 2. npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await execCommand(command, ['install'], { cwd: `./${project}` })
  // 3. npm run serve
  execCommand(command, ['run', startCommand], { cwd: `./${project}` })
  // 4. open broswer
  // open('http://localhost:8080')
}

const addComponent = async (conmName, dest) => {
  // 1. compile ejs
  const result = await compile(path.resolve(__dirname, '../templates/vue.component.ejs'), { name: conmName })
  // 2. write ejs result into destination file
  makeDir(dest)
  fs.writeFileSync(`${dest}/${conmName}.vue`, result)
}

module.exports = {
  createProject,
  addComponent,
}