#!/usr/bin/env node
const ora = require('ora')
const meow = require('meow')
const chalk = require('chalk')
const update = require('update-notifier')
const event = require('../src/event')
const bak = require('../src')
const errorHandler = require('../src/error-handler')
const pkg = require('../package.json')

const blue = chalk.blue
const bold = chalk.bold
const dim = chalk.dim
const green = chalk.green

const { input, flags } = meow({
  description: false,
  help: `
    ${green('Easy way to backup your repos')}

    ${bold('Usage:')}

      ${green('$ git-bak <username> [options]')}

    ${bold('Input:')}

      ${blue('username')}             ${dim(`# github username, default is the name in your global git config`)}

    ${bold('Options:')}

      ${blue('--dest')}               ${dim(`# dest folder for backup , required`)}

      ${blue('--page')}               ${dim(`# page arg for github api, default is 2`)}

      ${blue('--per-page')}           ${dim(`# per_page arg for github api, default is 1`)}

      ${blue('--all')}                ${dim(`# backup all repos`)}

      ${blue('--skip-fork')}          ${dim(`# ignore forked repos`)}
  `
})

const store = []
const spinner = ora('download...').start()
event.on('status', msg => {
  spinner.text = msg
})
event.on('download', repo => {
  spinner.text = repo
  store.push(repo.split('/')[1])
})
event.on('error', msg => spinner.fail(msg))

const opts = input[0] ? Object.assign({ username: input[0] }, flags) : flags

update({ pkg }).notify()

bak(opts)
  .then(() => {
    spinner.succeed('all done!')
    console.log(`\n ${chalk.gray.bgGreen.bold('success')} ${store.toString()} have made a backup!\n`)
  })
  .catch(err => {
    errorHandler(err)
    process.exit(1)
  })
