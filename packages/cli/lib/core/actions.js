var { promisify } = require('util')
var download = promisify(require('download-git-repo'))
var { templateUrls, startCommand } = require('./config')
var { createProject, addComponent } = require('../utils/utils')

const createAction = (project, template = 'vue') => {
  console.log(`phoenix is helping you init your ${template} project`)
  const url = templateUrls[template]
  const serve = startCommand[template]
  createProject(url, project, serve)
}


const addComponentAction = (compName, dest = 'src/components') => {
  console.log(`phoenix is helping you add the ${compName} component to ${dest}`)
  addComponent(compName, dest)
  console.log(`component ${compName} is successfully createed to ${dest}`)
}

module.exports = {
  createAction,
  addComponentAction,
}
