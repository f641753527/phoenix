#! /usr/bin/env node
var { program } = require('commander')
var { optionHelper } = require('./lib/core/helper')
var createCommands = require('./lib/core/create')
// version
program.version(require('./package.json').version)

// options
optionHelper()

// command
createCommands()

program.parse(process.argv)
