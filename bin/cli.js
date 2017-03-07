#!/usr/bin/env node
const ora = require('ora')
const meow = require('meow')
const event = require('../src/event')
const bak = require('../src')
const errorHandler = require('../src/error-handler')

const { input, flags } = meow({
  description: false,
  help: `
    haha
  `
})

const spinner = ora('download...').start()
event.on('status', msg => {
  spinner.text = msg
})
event.on('download', repo => {
  spinner.text = repo
})
event.on('error', msg => spinner.fail(msg))

const opts = input[0] ? Object.assign({ username: input[0] }, flags) : flags

bak(opts)
  .then(() => spinner.succeed('all done!'))
  .catch(err => {
    errorHandler(err)
    process.exit(1)
  })
